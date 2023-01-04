import React, { memo, useLayoutEffect, useRef } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import ToastHandler from '@/components/ToastHandler';
import { toastManager } from '@/utils';

import { types } from './types';

export const ToastService = memo(({ position, spacing }) => {
  const toastRef = useRef(null);

  useLayoutEffect(() => {
    toastManager.init(toastRef);
  }, []);

  return (
    <ErrorBoundary>
      <ToastHandler ref={toastRef} position={position} spacing={spacing} />
    </ErrorBoundary>
  );
});

ToastService.propTypes = types;
