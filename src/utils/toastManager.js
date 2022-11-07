import { MAX_AVAILABLE_AMOUNT_TOAST, SET_SECONDS_VALUE } from '@/constants';

import { handleRemoveToast } from './handleRemoveToast';

class ToastManager {
  static #singleton;

  #extraToastList = [];

  #toast;

  #autoCloseTimeIdQueue = new Map();

  #autoCloseId;

  #toastRef = {
    watcherActionCall: () => {},
  };

  constructor() {
    if (ToastManager.#singleton) {
      return ToastManager.#singleton;
    }
    ToastManager.#singleton = this;

    this.toastList = [];
  }

  init = ref => {
    if (!ref) {
      return;
    }
    this.#toastRef = ref.current;
  };

  createToast(properties) {
    const id = new Date().getTime().toString();

    this.#toast = {
      id,
      ...properties,
    };
  }

  addToast() {
    if (this.toastList.length > MAX_AVAILABLE_AMOUNT_TOAST) {
      this.#extraToastList = [...this.#extraToastList, this.#toast];
    } else {
      this.toastList = [...this.toastList, this.#toast];
    }

    this.#toastRef.watcherActionCall();
  }

  removeToast(toastId) {
    this.toastList = handleRemoveToast(this.toastList, toastId);

    if (this.#extraToastList.length) {
      this.toastList = [...this.toastList, this.#extraToastList.shift()];
    }

    this.#toastRef.watcherActionCall();
  }

  autoCloseToast(toastId) {
    const { autoClose, autoCloseTime } = this.#toast;

    if (autoClose) {
      this.#autoCloseId = setTimeout(
        () => this.removeToast(toastId),
        autoCloseTime * SET_SECONDS_VALUE,
      );
      this.#autoCloseTimeIdQueue.set(toastId, this.#autoCloseId);
    }
  }

  getAutoCloseTimeId(toastId) {
    if (this.#autoCloseTimeIdQueue.has(toastId)) {
      return this.#autoCloseTimeIdQueue.get(toastId);
    }
  }

  removeAutoCloseTimeId(toastId) {
    if (this.#autoCloseTimeIdQueue.has(toastId)) {
      this.#autoCloseTimeIdQueue.delete(toastId);
    }
  }
}

export const toastManager = new ToastManager();
