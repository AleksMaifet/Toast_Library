import React from 'react';

import Toast from '@/components/Toast';
import { DEFAULT_TITLE, TOAST_ANIMATION } from '@/constants';

const { SUCCESS, ERROR, INFO, WARNING } = DEFAULT_TITLE;

const { TOP, BOTTOM, LEFT, RIGHT } = TOAST_ANIMATION;

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    toastType: {
      control: {
        type: 'inline-radio',
        options: [ERROR, WARNING, SUCCESS, INFO],
      },
    },
    toastColor: {
      control: {
        type: 'color',
      },
    },
    toastBackgroundColor: {
      control: {
        type: 'color',
      },
    },
    toastTitle: {
      control: {
        type: 'text',
      },
    },
    animation: {
      control: {
        type: 'inline-radio',
        options: [TOP, BOTTOM, LEFT, RIGHT],
      },
    },
  },
};

// eslint-disable-next-line
const Template = arg => <Toast {...arg} />;

export const ToastExample = Template.bind({});

ToastExample.args = {
  toastType: SUCCESS,
  toastTitle: '',
  toastColor: '',
  toastBackgroundColor: '',
  animation: TOP,
};
