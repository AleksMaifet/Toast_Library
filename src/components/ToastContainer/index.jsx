import React from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Portal from '@/components/Portal';
import Provider, { ToastContext } from '@/components/Provider';
import Toast from '@/components/Toast';
import { WrapperToast } from '@/components/ToastContainer/styles';

const ToastContainer = () => (
  <ErrorBoundary>
    <Portal>
      <Provider>
        <ToastContext.Consumer>
          {({ toastList, handleRemoveToast }) =>
            toastList.map(({ id, ...info }) => (
              <WrapperToast key={id} position={info.position}>
                <Toast value={info} onCloseToast={() => handleRemoveToast(id)} />
              </WrapperToast>
            ))
          }
        </ToastContext.Consumer>
      </Provider>
    </Portal>
  </ErrorBoundary>
);
export default ToastContainer;
