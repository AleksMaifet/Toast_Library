import { MAX_AVAILABLE_AMOUNT_TOAST } from '@/constants';

class ToastManager {
  static singleton;

  constructor() {
    if (ToastManager.singleton) {
      return ToastManager.singleton;
    }
    ToastManager.singleton = this;

    this.toastList = [];
    this.toast = null;
    this.toastListQueue = [];
    this.idToastAutoCloseQueue = [];
    this.subscriber = new Map();
    this.timerId = null;
  }

  createToast(properties) {
    const id = new Date().getTime().toString();
    this.toast = {
      id,
      ...properties,
    };
  }

  addToast() {
    if (this.toastList.length > MAX_AVAILABLE_AMOUNT_TOAST) {
      this.toastListQueue = [...this.toastListQueue, this.toast];
    } else {
      this.toastList = [...this.toastList, this.toast];
    }
    const { currentAutoCloseTime, autoClose, id } = this.toast;
    if (autoClose) {
      this.idToastAutoCloseQueue = [...this.idToastAutoCloseQueue, id];
      this.autoRemoveToast(id, currentAutoCloseTime);
    }
    this.workerCallAction();
  }

  removeToast(toastId) {
    this.toastList = this.toastList.filter(({ id }) => id !== toastId);
    if (this.toastListQueue.length) {
      this.toastList = [...this.toastList, this.toastListQueue.shift()];
    }
    this.workerCallAction();
  }

  autoRemoveToast(id, delay) {
    clearInterval(this.timerId);
    this.timerId = setInterval(
      () => this.removeToast(this.idToastAutoCloseQueue.shift()),
      delay,
    );
  }

  workerCallAction() {
    this.subscriber.forEach(callback => {
      callback(this.toastList);
    });
  }

  watcherAction(action, callback) {
    if (!this.subscriber.has(action)) {
      this.subscriber.set(action, callback);
    }
  }
}

export const toastManager = new ToastManager();
