import { handlePropertiesToast, toastManager } from '@/utils';

export const handleToastService = options => {
  toastManager.createToast(handlePropertiesToast(options));
  toastManager.addToast();
};
