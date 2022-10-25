import { DEFAULT_TOASTS } from '@/constants';

export const handlePropertiesToast = (toastType, properties) => {
  const id = new Date().getTime().toString();

  const { title, textColor, backgroundColor, icon } = DEFAULT_TOASTS[toastType];

  const { toastTitle, toastColor, toastBackgroundColor, animation, toastContent } =
    properties;

  const currentTitle = toastTitle || title;
  const currentColor = toastColor || textColor;
  const currentBackgroundColor = toastBackgroundColor || backgroundColor;

  return {
    id,
    icon,
    currentTitle,
    currentColor,
    currentBackgroundColor,
    animation,
    toastContent,
  };
};
