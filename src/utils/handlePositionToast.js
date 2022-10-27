import { TOAST_POSITION } from '@/constants';
import theme from '@/theme';

const { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } = TOAST_POSITION;

const toastPosition = {
  [TOP_LEFT]: {
    top: `${theme.spaces[4]}px`,
    left: `${theme.spaces[4]}px`,
  },
  [TOP_RIGHT]: {
    top: `${theme.spaces[4]}px`,
    right: `${theme.spaces[4]}px`,
  },
  [BOTTOM_LEFT]: {
    bottom: `${theme.spaces[4]}px`,
    left: `${theme.spaces[4]}px`,
  },
  [BOTTOM_RIGHT]: {
    right: `${theme.spaces[4]}px`,
    bottom: `${theme.spaces[4]}px`,
  },
};

export const handlePositionToast = position => toastPosition[position];
