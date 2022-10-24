import { ReactComponent as IconError } from '@/assets/svg/iconError.svg';
import { ReactComponent as IconInfo } from '@/assets/svg/iconInfo.svg';
import { ReactComponent as IconSuccess } from '@/assets/svg/iconSuccess.svg';
import { ReactComponent as IconWarning } from '@/assets/svg/iconWarning.svg';
import theme from '@/theme';

const DEFAULT_TITLE = {
  SUCCESS: 'Success',
  WARNING: 'Warning',
  INFO: 'Info',
  ERROR: 'Error',
};

const { SUCCESS, ERROR, INFO, WARNING } = DEFAULT_TITLE;

const { white, green, black, yellow, pink, error } = theme.Colors;

export const DEFAULT_TOASTS = {
  success: {
    title: SUCCESS,
    textColor: white,
    backgroundColor: green,
    icon: IconSuccess,
  },
  warning: {
    title: WARNING,
    textColor: black,
    backgroundColor: yellow,
    icon: IconWarning,
  },
  inform: {
    title: INFO,
    textColor: white,
    backgroundColor: pink,
    icon: IconInfo,
  },
  error: {
    title: ERROR,
    textColor: white,
    backgroundColor: error,
    icon: IconError,
  },
};
