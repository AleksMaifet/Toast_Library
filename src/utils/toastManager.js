import { DEFAULT_TIMER } from '@/constants';
import { handlePropertiesToast } from '@/utils/handlePropertiesToast';

const MAX_AVAILABLE_AMOUNT = 2;
const FIRST_ELEMENT = 1;

class ToastManager {
  static singleton;

  constructor() {
    if (ToastManager.singleton) {
      return ToastManager.singleton;
    }
    ToastManager.singleton = this;

    this.toastList = [];
    this.toast = null;
    this.subscriber = new Map();
    this.timerId = null;
  }

  createToast(toastType, properties) {
    this.toast = handlePropertiesToast(toastType, properties);
    this.addToast();
    const { currentDeleteTime = DEFAULT_TIMER, autoClose } = this.toast;
    if (autoClose) {
      this.autoRemoveToast(currentDeleteTime);
    }
  }

  addToast() {
    if (this.toastList.length > MAX_AVAILABLE_AMOUNT) {
      return;
    }
    this.toastList = [...this.toastList, this.toast];
    this.worker();
  }

  removeToast(toastId) {
    if (!toastId) {
      this.toastList = this.toastList.slice(FIRST_ELEMENT);
    } else {
      this.toastList = this.toastList.filter(({ id }) => id !== toastId);
    }
    this.worker();
  }

  autoRemoveToast(delay) {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => this.removeToast(), delay);
  }

  worker() {
    this.subscriber.forEach(callback => {
      callback(this.toastList);
    });
  }

  watcher(action, callback) {
    if (!this.subscriber.has(action)) {
      this.subscriber.set(action, callback);
    }
  }
}

export const toastManager = new ToastManager();
