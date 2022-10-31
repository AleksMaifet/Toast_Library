import React from 'react';

import ToastExample from '@/components/ToastExample';
import {
  DEFAULT_TIMER,
  DEFAULT_TOAST_TYPE,
  DEFAULT_TOAST_ANIMATION,
  DEFAULT_TOAST_POSITION,
  DEFAULT_SPACING,
} from '@/constants';

export default {
  title: 'Toast',
  component: ToastExample,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: Object.values(DEFAULT_TOAST_TYPE),
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
    animation: {
      control: {
        type: 'inline-radio',
        options: Object.values(DEFAULT_TOAST_ANIMATION),
      },
    },
    position: {
      control: {
        type: 'inline-radio',
        options: Object.values(DEFAULT_TOAST_POSITION),
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
  autoCloseTime: DEFAULT_TIMER,
  spacing: DEFAULT_SPACING,
};
