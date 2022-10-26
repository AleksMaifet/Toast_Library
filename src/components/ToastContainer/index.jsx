import React from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Portal from '@/components/Portal/Portal';
import Provider, { ToastContext } from '@/components/Provider/Provider';
import Toast from '@/components/Toast';

const ToastContainer = () => (
  <ErrorBoundary>
    <Portal>
      <Provider>
        <ToastContext.Consumer>
          {({ toastList, handleRemoveToast }) =>
            toastList.map(({ id, ...info }) => (
              <Toast key={id} value={info} onCloseToast={() => handleRemoveToast(id)} />
            ))
          }
        </ToastContext.Consumer>
      </Provider>
    </Portal>
  </ErrorBoundary>
);
export default ToastContainer;
