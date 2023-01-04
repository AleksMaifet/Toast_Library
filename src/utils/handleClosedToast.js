import { toastManager } from '@/utils/toastManager';

export const handleClosedToast = (cb, id) => {
  cb(id);

  clearTimeout(toastManager.getAutoCloseTimerId(id));
};
