import React from 'react';

import { ToastService } from '@/components/ToastService';
import { EXAMPLE_BUTTON_TITLE } from '@/constants';
import { handleToastService } from '@/utils';

import { ExampleButton, ExampleWrapperButton } from './styles';

const ToastExample = ({ options }) => {
  const { position, spacing, ...properties } = options;

  const onClickSetToastService = () => {
    handleToastService(properties);
  };

  return (
    <>
      <ToastService position={position} spacing={spacing} />
      <ExampleWrapperButton>
        <ExampleButton onClick={onClickSetToastService}>
          {EXAMPLE_BUTTON_TITLE}
        </ExampleButton>
      </ExampleWrapperButton>
    </>
  );
};

export default ToastExample;
