import { DEFAULT_TOASTS } from '@/constants';

export const handleComponentStory = (toastType, replacement) => {
  const { title, textColor, backgroundColor, icon } = DEFAULT_TOASTS[toastType];

  const { toastTitle, toastColor, toastBackgroundColor, animation } = replacement;

  const currentTitle = toastTitle || title;
  const currentColor = toastColor || textColor;
  const currentBackgroundColor = toastBackgroundColor || backgroundColor;

  return {
    icon,
    currentTitle,
    currentColor,
    currentBackgroundColor,
    animation,
  };
};
