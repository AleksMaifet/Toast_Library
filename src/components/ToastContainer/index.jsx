import React, { memo } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Provider, { ToastContext } from '@/components/Provider';
import Toast from '@/components/Toast';
import { WrapperToast } from '@/components/ToastContainer/styles';
import GlobalStyles from '@/globalStyles';

const ToastContainer = () => (
  <ErrorBoundary>
    <GlobalStyles />
    <Provider>
      <ToastContext.Consumer>
        {({ toastList, handleRemoveToast }) =>
          toastList.map(({ id, position, currentSpacing, ...info }) => (
            <WrapperToast
              key={id}
              position={{
                position,
                currentSpacing,
              }}
            >
              <Toast
                value={{
                  id,
                  ...info,
                }}
                onCloseToast={handleRemoveToast}
              />
            </WrapperToast>
          ))
        }
      </ToastContext.Consumer>
    </Provider>
  </ErrorBoundary>
);

export default memo(ToastContainer);
