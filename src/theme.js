import { keyframes } from 'styled-components';

const fontFamily = 'sans-serif';
const fontSizeBase = '10px';

/// Colors
const Colors = {
  black: '#000000',
  darkGray: '#808080',
  white: '#ffffff',
  error: '#E25837',
  pink: '#9A40D3',
  yellow: '#F4E048',
  green: '#37E29A',
};

/// Size
const size = {
  xs: 50,
  small: 300,
  md: 550,
  large: 768,
};

/// Space
const spaces = [0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 150];

/// Opacity
const opacity = {
  opacity0: 0,
  opacity50: 0.5,
  opacity100: 1,
};

/// TextStyle
const textStyle = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xll: 5,
};

/// Animation
const topAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const bottomAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const leftAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const rightAnimation = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export default {
  fontFamily,
  fontSizeBase,
  size,
  spaces,
  opacity,
  textStyle,
  Colors,
  topAnimation,
  bottomAnimation,
  leftAnimation,
  rightAnimation,
};
