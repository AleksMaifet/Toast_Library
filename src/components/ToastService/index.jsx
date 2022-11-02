import React, { memo } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Portal from '@/components/Portal';
import Provider from '@/components/Provider';
import ToastContainer from '@/components/ToastContainer';
import GlobalStyles from '@/globalStyles';

const ToastService = ({ position }) => (
  <ErrorBoundary>
    <Portal>
      <Provider>
        <GlobalStyles />
        <ToastContainer position={position} />
      </Provider>
    </Portal>
  </ErrorBoundary>
);

export default memo(ToastService);
