import React from 'react';

import { ToastService } from '@/components/ToastService';
import { EXAMPLE_BUTTON_TITLE } from '@/constants';
import { handleToastService } from '@/utils';

import { ExampleButton, ExampleWrapperButton } from './styles';

const ToastExample = ({ options }) => {
  const { position, spacing, ...info } = options;

  const onClickSetToastService = () => {
    handleToastService(info);
  };

  return (
    <>
      <ToastService
        position={{
          position,
          spacing,
        }}
      />
      <ExampleWrapperButton>
        <ExampleButton onClick={onClickSetToastService}>
          {EXAMPLE_BUTTON_TITLE}
        </ExampleButton>
      </ExampleWrapperButton>
    </>
  );
};

export default ToastExample;
