import { DEFAULT_TOASTS } from '@/constants';

const TIMEOUT_SETTING_VALUE = 1000;

export const handlePropertiesToast = (toastType, properties) => {
  const id = new Date().getTime().toString();

  const { title, textColor, backgroundColor, icon } = DEFAULT_TOASTS[toastType];

  const {
    toastTitle,
    toastColor,
    toastBackgroundColor,
    animation,
    toastContent,
    autoClose,
    autoCloseTime,
  } = properties;

  const currentTitle = toastTitle || title;
  const currentColor = toastColor || textColor;
  const currentBackgroundColor = toastBackgroundColor || backgroundColor;
  const currentDeleteTime = autoCloseTime * TIMEOUT_SETTING_VALUE;

  return {
    id,
    icon,
    currentTitle,
    currentColor,
    currentBackgroundColor,
    animation,
    toastContent,
    autoClose,
    currentDeleteTime,
  };
};
