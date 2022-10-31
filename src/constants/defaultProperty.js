import IconError from '@/assets/svg/iconError.svg';
import IconInfo from '@/assets/svg/iconInfo.svg';
import IconSuccess from '@/assets/svg/iconSuccess.svg';
import IconWarning from '@/assets/svg/iconWarning.svg';
import theme from '@/theme';

export const DEFAULT_TIMER = 2;

export const DEFAULT_TOAST_POSITION = {
  TOP_RIGHT: 'Top-right',
  TOP_LEFT: 'Top-left',
  BOTTOM_RIGHT: 'Bottom-right',
  BOTTOM_LEFT: 'Bottom-left',
};

export const DEFAULT_TOAST_ANIMATION = {
  TOP: 'Top',
  BOTTOM: 'Bottom',
  RIGHT: 'Right',
  LEFT: 'Left',
};

export const DEFAULT_TOAST_TYPE = {
  SUCCESS: 'Success',
  WARNING: 'Warning',
  INFO: 'Info',
  ERROR: 'Error',
};

const { SUCCESS, ERROR, INFO, WARNING } = DEFAULT_TOAST_TYPE;

const { white, green, black, yellow, pink, error } = theme.Colors;

export const DEFAULT_TOASTS = {
  Success: {
    defaultLabel: SUCCESS,
    defaultColor: white,
    defaultBackgroundColor: green,
    icon: IconSuccess,
  },
  Warning: {
    defaultLabel: WARNING,
    defaultColor: black,
    defaultBackgroundColor: yellow,
    icon: IconWarning,
  },
  Info: {
    defaultLabel: INFO,
    defaultColor: white,
    defaultBackgroundColor: pink,
    icon: IconInfo,
  },
  Error: {
    defaultLabel: ERROR,
    defaultColor: white,
    defaultBackgroundColor: error,
    icon: IconError,
  },
};

export const DEFAULT_SPACING = {
  top: theme.spaces[2],
  bottom: theme.spaces[2],
  left: theme.spaces[2],
  right: theme.spaces[2],
};
