import React from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Provider, { ToastContext } from '@/components/Provider';
import Toast from '@/components/Toast';
import { WrapperToast } from '@/components/ToastContainer/styles';
import GlobalStyles from '@/globalStyles';

const ToastContainer = () => {
  const handleRemoveToastHelper = callback => id => () => {
    callback(id);
  };

  return (
    <ErrorBoundary>
      <Provider>
        <ToastContext.Consumer>
          {({ toastList, handleRemoveToast }) =>
            toastList.map(({ id, position, ...info }) => (
              <WrapperToast key={id} position={position}>
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
    </ErrorBoundary>
  );
};

export default ToastContainer;
