import React from 'react';

import ToastExample from '@/components/ToastExample';
import {
  DEFAULT_TIMER,
  DEFAULT_TITLE,
  TOAST_ANIMATION,
  TOAST_POSITION,
} from '@/constants';

const { SUCCESS, ERROR, INFO, WARNING } = DEFAULT_TITLE;
const { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } = TOAST_POSITION;
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
    position: {
      control: {
        type: 'inline-radio',
        options: [TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT],
      },
    },
    autoClose: {
      control: {
        type: 'boolean',
      },
    },
    autoCloseTime: {
      control: {
        type: 'number',
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
  position: TOP_LEFT,
  autoClose: false,
  autoCloseTime: DEFAULT_TIMER,
};
