import React from 'react';

import ToastContainer from '@/components/ToastContainer';
import { ExampleButton, ExampleWrapperButton } from '@/components/ToastExample/styles';
import { EXAMPLE_BUTTON_TITLE } from '@/constants';
import { toastManager } from '@/utils';

const ToastExample = ({ toastType, ...properties }) => (
  <>
    <ToastContainer />
    <ExampleWrapperButton>
      <ExampleButton onClick={() => toastManager.createToast(toastType, properties)}>
        {EXAMPLE_BUTTON_TITLE}
      </ExampleButton>
    </ExampleWrapperButton>
  </>
);

export default ToastExample;
