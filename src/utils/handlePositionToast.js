import { TOAST_POSITION } from '@/constants';
import theme from '@/theme';

const { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } = TOAST_POSITION;

const toastPosition = {
  [TOP_LEFT]: {
    top: `${theme.spaces[2]}%`,
    left: `${theme.spaces[2]}%`,
  },
  [TOP_RIGHT]: {
    top: `${theme.spaces[2]}%`,
    right: `${theme.spaces[2]}%`,
  },
  [BOTTOM_LEFT]: {
    bottom: `${theme.spaces[2]}%`,
    left: `${theme.spaces[2]}%`,
  },
  [BOTTOM_RIGHT]: {
    right: `${theme.spaces[2]}%`,
    bottom: `${theme.spaces[2]}%`,
  },
};

export const handlePositionToast = position => toastPosition[position];
