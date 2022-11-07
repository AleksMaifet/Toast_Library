import {
  DEFAULT_TIMER,
  DEFAULT_TOAST_ANIMATION,
  DEFAULT_TOAST_TYPE,
  DEFAULT_TOASTS,
} from '@/constants';

const { TOP } = DEFAULT_TOAST_ANIMATION;
const { SUCCESS } = DEFAULT_TOAST_TYPE;

export const handlePropertiesToast = options => {
  const {
    type = SUCCESS,
    label,
    color,
    backgroundColor,
    animation = TOP,
    content,
    autoClose,
    autoCloseTime = DEFAULT_TIMER,
  } = options;

  const { defaultLabel, defaultColor, defaultBackgroundColor, icon } =
    DEFAULT_TOASTS[type];

  const currentLabel = label || defaultLabel;
  const currentColor = color || defaultColor;
  const currentBackgroundColor = backgroundColor || defaultBackgroundColor;

  return {
    icon,
    currentLabel,
    currentColor,
    currentBackgroundColor,
    animation,
    content,
    autoClose,
    autoCloseTime,
  };
};
