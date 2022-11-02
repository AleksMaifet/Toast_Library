import {
  DEFAULT_SPACING,
  DEFAULT_TIMER,
  DEFAULT_TOAST_ANIMATION,
  DEFAULT_TOAST_POSITION,
  DEFAULT_TOAST_TYPE,
  DEFAULT_TOASTS,
  SET_SECONDS_VALUE,
} from '@/constants';

const { TOP } = DEFAULT_TOAST_ANIMATION;
const { TOP_LEFT } = DEFAULT_TOAST_POSITION;
const { SUCCESS } = DEFAULT_TOAST_TYPE;

export const handlePropertiesToast = options => {
  const {
    type = SUCCESS,
    label,
    color,
    backgroundColor,
    animation = TOP,
    position = TOP_LEFT,
    content,
    autoClose,
    autoCloseTime = DEFAULT_TIMER,
    spacing,
  } = options;

  const { defaultLabel, defaultColor, defaultBackgroundColor, icon } =
    DEFAULT_TOASTS[type];

  const currentTitle = label || defaultLabel;
  const currentColor = color || defaultColor;
  const currentBackgroundColor = backgroundColor || defaultBackgroundColor;
  const currentAutoCloseTime = autoCloseTime * SET_SECONDS_VALUE;
  const currentSpacing = spacing || DEFAULT_SPACING;

  return {
    icon,
    currentTitle,
    currentColor,
    currentBackgroundColor,
    animation,
    position,
    content,
    autoClose,
    currentAutoCloseTime,
    currentSpacing,
  };
};
