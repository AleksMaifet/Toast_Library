import { handlePropertiesToast } from '@/utils/handlePropertiesToast';

class ToastManager {
  static singleton;

  constructor() {
    if (ToastManager.singleton) {
      return ToastManager.singleton;
    }
    ToastManager.singleton = this;

    this.toastList = [];
    this.toast = {};
    this.subscribers = new Map();
  }

  createToast(toastType, properties) {
    this.toast = handlePropertiesToast(toastType, properties);
    this.addToast();
  }

  addToast() {
    this.toastList = [...this.toastList, this.toast];
    this.updated();
  }

  updated() {
    this.subscribers.forEach(callback => {
      callback(this.toast);
    });
  }

  subscribe(subscriber, callback) {
    if (!this.subscribers.has(subscriber)) {
      this.subscribers.set(subscriber, callback);
    }
  }

  unsubscribe(subscriber) {
    if (this.subscribers.has(subscriber)) {
      this.subscribers.delete(subscriber);
    }
  }
}

export const toastManager = new ToastManager();
