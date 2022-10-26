import React from 'react';

import ToastExample from '@/components/ToastExample';
import { DEFAULT_TITLE, TOAST_ANIMATION } from '@/constants';

const { SUCCESS, ERROR, INFO, WARNING } = DEFAULT_TITLE;

const { TOP, BOTTOM, LEFT, RIGHT } = TOAST_ANIMATION;

export default {
  title: 'Toast',
  component: ToastExample,
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
    toastContent: {
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
const Template = arg => <ToastExample {...arg} />;

export const ToastTemplate = Template.bind({});

ToastTemplate.args = {
  toastType: SUCCESS,
  toastTitle: '',
  toastContent: '',
  toastColor: '',
  toastBackgroundColor: '',
  animation: TOP,
  deleteTime: 1,
};
