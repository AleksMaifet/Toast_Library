import React from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Portal from '@/components/Portal';
import Provider, { ToastContext } from '@/components/Provider';
import Toast from '@/components/Toast';
import { WrapperToast } from '@/components/ToastContainer/styles';
import GlobalStyles from '@/globalStyles';

const ToastContainer = () => {
  const handleRemoveToastHelper = cb => id => () => {
    cb(id);
  };

  return (
    <ErrorBoundary>
      <Portal>
        <Provider>
          <ToastContext.Consumer>
            {({ toastList, handleRemoveToast }) =>
              toastList.map(({ id, ...info }) => (
                <WrapperToast key={id} position={info.position}>
                  <Toast
                    value={info}
                    onCloseToast={handleRemoveToastHelper(handleRemoveToast)(id)}
                  />
                </WrapperToast>
              ))
            }
          </ToastContext.Consumer>
        </Provider>
        <GlobalStyles />
      </Portal>
    </ErrorBoundary>
  );
};

export default ToastContainer;
