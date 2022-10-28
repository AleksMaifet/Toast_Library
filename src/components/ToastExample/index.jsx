import React from 'react';

import ToastContainer from '@/components/ToastContainer';
import { ExampleButton, ExampleWrapperButton } from '@/components/ToastExample/styles';
import { EXAMPLE_BUTTON_TITLE } from '@/constants';
import { toastManager } from '@/utils';

const ToastExample = properties => {
  const onClick = () => {
    toastManager.createToast(properties);
  };

  return (
    <>
      <ToastContainer />
      <ExampleWrapperButton>
        <ExampleButton onClick={onClick}>{EXAMPLE_BUTTON_TITLE}</ExampleButton>
      </ExampleWrapperButton>
    </>
  );
};

export default ToastExample;
