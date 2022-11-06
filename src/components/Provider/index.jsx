import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import { toastManager } from '@/utils';

import { ToastContext } from './context';
import { types } from './types';

const Provider = forwardRef(({ children }, ref) => {
  const [toastList, setToastList] = useState([]);

  const handleSetToastList = () => {
    setToastList(toastManager.toastList);
  };

  const handleCloseToast = id => {
    toastManager.removeToast(id);
  };

  useImperativeHandle(ref, () => ({
    watcherActionCall: handleSetToastList,
  }));

  useEffect(() => () => {
    if (!toastManager.idToastAutoCloseQueue.length) {
      clearInterval(toastManager.timerId);
    }
  });

  const value = useMemo(
    () => ({
      toastList,
      handleCloseToast,
    }),
    [toastList],
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
});

export default Provider;

Provider.propTypes = types;
