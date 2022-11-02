import { MAX_AVAILABLE_AMOUNT_TOAST } from '@/constants';

class ToastManager {
  static singleton;

  constructor() {
    if (ToastManager.singleton) {
      return ToastManager.singleton;
    }
    ToastManager.singleton = this;

    this.toastList = [];
    this.toastQueue = [];
    this.toast = null;
    this.subscriber = new Map();
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
      this.toastQueue = [...this.toastQueue, this.toast];
    } else {
      this.toastList = [...this.toastList, this.toast];
    }
    const { currentAutoCloseTime, autoClose, id } = this.toast;
    if (autoClose) {
      this.autoRemoveToast(id, currentAutoCloseTime);
    }
    this.workerCallAction();
  }

  removeToast(toastId) {
    this.toastList = this.toastList.filter(({ id }) => id !== toastId);
    if (this.toastQueue.length) {
      this.toastList = [...this.toastList, this.toastQueue.shift()];
    }
    this.workerCallAction();
  }

  autoRemoveToast(id, delay) {
    setTimeout(() => this.removeToast(id), delay);
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
