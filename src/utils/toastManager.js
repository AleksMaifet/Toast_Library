const MAX_AVAILABLE_AMOUNT = 2;

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
  }

  createToast(properties) {
    const id = new Date().getTime().toString();
    this.toast = {
      id,
      ...properties,
    };
  }

  addToast() {
    if (this.toastList.length > MAX_AVAILABLE_AMOUNT) {
      return;
    }
    this.toastList = [...this.toastList, this.toast];
    const { currentAutoCloseTime, autoClose, id } = this.toast;
    if (autoClose) {
      this.autoRemoveToast(id, currentAutoCloseTime);
    }
    this.worker();
  }

  removeToast(toastId) {
    this.toastList = this.toastList.filter(({ id }) => id !== toastId);
    this.worker();
  }

  autoRemoveToast(id, delay) {
    setTimeout(() => this.removeToast(id), delay);
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
