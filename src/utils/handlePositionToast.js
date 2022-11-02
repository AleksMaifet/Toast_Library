import { DEFAULT_SPACING, DEFAULT_TOAST_POSITION } from '@/constants';

const { TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } = DEFAULT_TOAST_POSITION;
const { TOP_LEFT } = DEFAULT_TOAST_POSITION;

export const handlePositionToast = ({
  position = TOP_LEFT,
  spacing: { top, bottom, left, right } = DEFAULT_SPACING,
}) => {
  switch (position) {
    case TOP_RIGHT:
      return {
        top: `${top}%`,
        right: `${right}%`,
      };
    case BOTTOM_LEFT:
      return {
        bottom: `${bottom}%`,
        left: `${left}%`,
      };
    case BOTTOM_RIGHT:
      return {
        right: `${right}%`,
        bottom: `${bottom}%`,
      };
    default:
      return {
        top: `${top}%`,
        left: `${left}%`,
      };
  }
};
