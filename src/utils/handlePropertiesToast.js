import { DEFAULT_TOASTS } from '@/constants';

const TIMEOUT_SETTING_VALUE = 1000;

export const handlePropertiesToast = properties => {
  const {
    type,
    toastTitle,
    toastColor,
    toastBackgroundColor,
    animation,
    position,
    toastContent,
    autoClose,
    autoCloseTime,
  } = properties;

  const { title, textColor, backgroundColor, icon } = DEFAULT_TOASTS[type];

  const currentTitle = toastTitle || title;
  const currentColor = toastColor || textColor;
  const currentBackgroundColor = toastBackgroundColor || backgroundColor;
  const currentDeleteTime = autoCloseTime * TIMEOUT_SETTING_VALUE;

  return {
    icon,
    currentTitle,
    currentColor,
    currentBackgroundColor,
    animation,
    position,
    toastContent,
    autoClose,
    currentDeleteTime,
  };
};
