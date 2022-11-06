import React, { memo, useLayoutEffect, useRef } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Portal from '@/components/Portal';
import Provider from '@/components/Provider';
import ToastContainer from '@/components/ToastContainer';
import GlobalStyles from '@/globalStyles';
import { toastManager } from '@/utils';

import { types } from './types';

export const ToastService = memo(({ position, spacing }) => {
  const toastRef = useRef(null);

  useLayoutEffect(() => {
    toastManager.init(toastRef);
  }, []);

  return (
    <ErrorBoundary>
      <Portal>
        <Provider ref={toastRef}>
          <GlobalStyles />
          <ToastContainer position={position} spacing={spacing} />
        </Provider>
      </Portal>
    </ErrorBoundary>
  );
});

ToastService.propTypes = types;
