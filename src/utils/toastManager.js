import { MAX_AVAILABLE_AMOUNT_TOAST } from '@/constants';

import { handleRemoveToast } from './handleRemoveToast';

class ToastManager {
  static #singleton;

  #extraToastList = [];

  #toast = null;

  #toastList = [];

  #subscriber = new Map();

  constructor() {
    if (ToastManager.#singleton) {
      return ToastManager.#singleton;
    }
    ToastManager.#singleton = this;

    this.idToastAutoCloseQueue = [];
    this.timerId = null;
  }

  createToast(properties) {
    const id = new Date().getTime().toString();
    this.#toast = {
      id,
      ...properties,
    };
  }

  addToast() {
    if (this.#toastList.length > MAX_AVAILABLE_AMOUNT_TOAST) {
      this.#extraToastList = [...this.#extraToastList, this.#toast];
    } else {
      this.#toastList = [...this.#toastList, this.#toast];
    }

    this.autoCloseToast();
    this.#workerCallAction();
  }

  removeToast(toastId) {
    this.#toastList = handleRemoveToast(this.#toastList, toastId);
    this.#extraToastList = handleRemoveToast(this.#extraToastList, toastId);

    if (
      this.#extraToastList.length &&
      this.#toastList.length <= MAX_AVAILABLE_AMOUNT_TOAST
    ) {
      this.#toastList = [...this.#toastList, this.#extraToastList.shift()];
    }

    this.#workerCallAction();
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

  #workerCallAction() {
    this.#subscriber.forEach(callback => {
      callback(this.#toastList);
    });
  }

  watcherAction(action, callback) {
    if (!this.#subscriber.has(action)) {
      this.#subscriber.set(action, callback);
    }
  }
}

export const toastManager = new ToastManager();
