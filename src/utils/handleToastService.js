import { handlePropertiesToast, toastManager } from '@/utils';

export const handleToastService = options => {
  if (options === null || !options) {
    return;
  }
  toastManager.createToast(handlePropertiesToast(options));
  toastManager.addToast();
};
