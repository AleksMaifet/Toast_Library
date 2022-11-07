import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import Portal from '@/components/Portal';
import ToastListContainer from '@/components/ToastListContainer';
import GlobalStyles from '@/globalStyles';
import { toastManager } from '@/utils';

import { types } from './types';

const ToastHandler = forwardRef(({ position, spacing }, ref) => {
  const [toastList, setToastList] = useState([]);

  const handleSetToastList = () => {
    setToastList(toastManager.toastList);
  };

  const handleCloseToast = useCallback(id => {
    toastManager.removeToast(id);
  }, []);

  useImperativeHandle(ref, () => ({
    watcherActionCall: handleSetToastList,
  }));

  return (
    <Portal>
      <GlobalStyles />
      <ToastListContainer
        position={position}
        spacing={spacing}
        toastList={toastList}
        handleCloseToast={handleCloseToast}
      />
    </Portal>
  );
});

export default ToastHandler;

ToastHandler.propTypes = types;
