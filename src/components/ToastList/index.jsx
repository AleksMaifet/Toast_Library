import React from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Portal } from '@/components/Portal/Portal';
import { ToastContext } from '@/components/Provider/Provider';
import Toast from '@/components/Toast';

const ToastList = () => (
  <ErrorBoundary>
    <Portal>
      <ToastContext.Consumer>
        {({ toastList }) =>
          toastList.map(({ id, ...info }) => <Toast key={id} value={info} />)
        }
      </ToastContext.Consumer>
    </Portal>
  </ErrorBoundary>
);
export default ToastList;
