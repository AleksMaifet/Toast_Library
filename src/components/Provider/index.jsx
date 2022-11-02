import React, { useEffect, useMemo, useState } from 'react';

import { ACTION } from '@/constants';
import { toastManager } from '@/utils';

import { ToastContext } from './context';
import { types } from './types';

const Provider = ({ children }) => {
  const [toastList, setToastList] = useState([]);

  const handleToastList = toastList => {
    setToastList(toastList);
  };

  const handleRemoveToast = id => {
    toastManager.removeToast(id);
  };

  useEffect(() => {
    toastManager.watcherAction(ACTION, handleToastList);
    return () => {
      if (!toastManager.idToastAutoCloseQueue.length) {
        clearInterval(toastManager.timerId);
      }
    };
  });

  const value = useMemo(
    () => ({
      toastList,
      handleRemoveToast,
    }),
    [toastList],
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

export default Provider;

Provider.propTypes = types;
