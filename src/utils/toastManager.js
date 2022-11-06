import { MAX_AVAILABLE_AMOUNT_TOAST } from '@/constants';

import { handleRemoveToast } from './handleRemoveToast';

class ToastManager {
  static #singleton;

  #extraToastList = [];

  #toast = null;

  #toastRef = {
    watcherActionCall: () => {},
  };

  constructor() {
    if (ToastManager.#singleton) {
      return ToastManager.#singleton;
    }
    ToastManager.#singleton = this;

    this.toastList = [];
    this.idToastAutoCloseQueue = [];
    this.timerId = null;
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

    this.autoCloseToast();
    this.#toastRef.watcherActionCall();
  }

  removeToast(toastId) {
    this.toastList = handleRemoveToast(this.toastList, toastId);
    this.#extraToastList = handleRemoveToast(this.#extraToastList, toastId);

    if (
      this.#extraToastList.length &&
      this.toastList.length <= MAX_AVAILABLE_AMOUNT_TOAST
    ) {
      this.toastList = [...this.toastList, this.#extraToastList.shift()];
    }

    this.#toastRef.watcherActionCall();
  }

  autoCloseToast() {
    const { autoClose } = this.#toast;

    if (autoClose) {
      const { currentAutoCloseTime, id } = this.#toast;

      this.idToastAutoCloseQueue = [...this.idToastAutoCloseQueue, id];

      clearInterval(this.timerId);

      this.timerId = setInterval(
        () => this.removeToast(this.idToastAutoCloseQueue.shift()),
        currentAutoCloseTime,
      );
    }
  }
}

export const toastManager = new ToastManager();
