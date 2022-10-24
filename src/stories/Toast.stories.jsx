import React from 'react';

import Toast from '@/components/Toast';
import { DEFAULT_TOASTS } from '@/constants';

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    toastType: {
      control: {
        type: 'inline-radio',
        options: ['err', 'warn', 'ok', 'info'],
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
    delay: {
      control: {
        type: 'number',
      },
    },
    animationType: {
      control: {
        type: 'radio',
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
    margins: {
      control: {
        type: 'text',
      },
    },
  },
};

const {
  success: { title, icon, textColor, backgroundColor },
} = DEFAULT_TOASTS;

const Template = arg => <Toast {...arg} />;

export const ToastExample = Template.bind({});

ToastExample.args = {
  title,
  icon,
  textColor,
  backgroundColor,
};
