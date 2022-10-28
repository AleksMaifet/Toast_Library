import { DEFAULT_TITLE } from '@/constants';
import { handlePropertiesToast, toastManager } from '@/utils';

const { SUCCESS } = DEFAULT_TITLE;

export const handleToastService = ({ toastType, ...options }) => {
  const type = toastType || SUCCESS;
  toastManager.createToast(
    handlePropertiesToast({
      type,
      ...options,
    }),
  );
};
