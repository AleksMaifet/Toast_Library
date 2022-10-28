import React from 'react';

import ToastContainer from '@/components/ToastContainer';
import { ExampleButton, ExampleWrapperButton } from '@/components/ToastExample/styles';
import { EXAMPLE_BUTTON_TITLE } from '@/constants';
import { handleToastService } from '@/utils';

const ToastExample = properties => {
  const onClick = () => {
    handleToastService(properties);
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
