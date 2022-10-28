import IconError from '@/assets/svg/iconError.svg';
import IconInfo from '@/assets/svg/iconInfo.svg';
import IconSuccess from '@/assets/svg/iconSuccess.svg';
import IconWarning from '@/assets/svg/iconWarning.svg';
import theme from '@/theme';

export const DEFAULT_TIMER = 2;

export const TOAST_POSITION = {
  TOP_RIGHT: 'Top-right',
  TOP_LEFT: 'Top-left',
  BOTTOM_RIGHT: 'Bottom-right',
  BOTTOM_LEFT: 'Bottom-left',
};

export const TOAST_ANIMATION = {
  TOP: 'Top',
  BOTTOM: 'Bottom',
  RIGHT: 'Right',
  LEFT: 'Left',
};

export const DEFAULT_TITLE = {
  SUCCESS: 'Success',
  WARNING: 'Warning',
  INFO: 'Info',
  ERROR: 'Error',
};

const { SUCCESS, ERROR, INFO, WARNING } = DEFAULT_TITLE;

const { white, green, black, yellow, pink, error } = theme.Colors;

export const DEFAULT_TOASTS = {
  Success: {
    title: SUCCESS,
    textColor: white,
    backgroundColor: green,
    icon: IconSuccess,
  },
  Warning: {
    title: WARNING,
    textColor: black,
    backgroundColor: yellow,
    icon: IconWarning,
  },
  Info: {
    title: INFO,
    textColor: white,
    backgroundColor: pink,
    icon: IconInfo,
  },
  Error: {
    title: ERROR,
    textColor: white,
    backgroundColor: error,
    icon: IconError,
  },
};
