import React, { memo } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Portal from '@/components/Portal';
import Provider from '@/components/Provider';
import ToastContainer from '@/components/ToastContainer';
import GlobalStyles from '@/globalStyles';

import { types } from './types';

export const ToastService = memo(({ position, spacing }) => (
  <ErrorBoundary>
    <Portal>
      <Provider>
        <GlobalStyles />
        <ToastContainer position={position} spacing={spacing} />
      </Provider>
    </Portal>
  </ErrorBoundary>
));

ToastService.propTypes = types;
