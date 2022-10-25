import { TOAST_ANIMATION } from '@/constants';
import theme from '@/theme';

const { topAnimation, bottomAnimation, leftAnimation, rightAnimation } = theme;

const { BOTTOM, LEFT, RIGHT } = TOAST_ANIMATION;

export const handleAnimationToast = position => {
  switch (position) {
    case BOTTOM:
      return bottomAnimation;
    case LEFT:
      return leftAnimation;
    case RIGHT:
      return rightAnimation;
    default:
      return topAnimation;
  }
};
