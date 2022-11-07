import { MAX_AVAILABLE_AMOUNT_TOAST, SET_SECONDS_VALUE } from '@/constants';

import { handleRemoveToast } from './handleRemoveToast';

class ToastManager {
  static #singleton;

  #extraToastQueue = [];

  #toast;

  #autoCloseTimeIdList = new Map();

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
      this.#extraToastQueue = [...this.#extraToastQueue, this.#toast];
    } else {
      this.toastList = [...this.toastList, this.#toast];
    }

    this.#toastRef.watcherActionCall();
  }

  removeToast(toastId) {
    this.toastList = handleRemoveToast(this.toastList, toastId);

    if (this.#extraToastQueue.length) {
      this.toastList = [...this.toastList, this.#extraToastQueue.shift()];
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

      this.#autoCloseTimeIdList.set(toastId, this.#autoCloseId);
    }
  }

  getAutoCloseTimerId(toastId) {
    if (this.#autoCloseTimeIdList.has(toastId)) {
      return this.#autoCloseTimeIdList.get(toastId);
    }
  }

  clearAutoCloseTimerIdList(toastId) {
    if (this.#autoCloseTimeIdList.has(toastId)) {
      this.#autoCloseTimeIdList.delete(toastId);
    }
  }
}

export const toastManager = new ToastManager();
