import React, { Fragment } from 'react';

import { Provider } from '@/components/Provider/Provider';
import { ExampleButton, ExampleWrapperButton } from '@/components/ToastExample/styles';
import ToastList from '@/components/ToastList';
import { EXAMPLE_BUTTON_TITLE } from '@/constants';
import { toastManager } from '@/utils';

const ToastExample = ({ toastType, ...properties }) => (
  <>
    <Provider>
      <ToastList />
    </Provider>
    <ExampleWrapperButton>
      <ExampleButton onClick={() => toastManager.createToast(toastType, properties)}>
        {EXAMPLE_BUTTON_TITLE}
      </ExampleButton>
    </ExampleWrapperButton>
  </>
);

export default ToastExample;
