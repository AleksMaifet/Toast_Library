import { DEFAULT_TYPE } from '@/constants';
import { handlePropertiesToast, toastManager } from '@/utils';

const { SUCCESS } = DEFAULT_TYPE;

export const handleToastService = ({ toastType, ...options }) => {
  const type = toastType || SUCCESS;
  toastManager.createToast(
    handlePropertiesToast({
      type,
      ...options,
    }),
  );
};
