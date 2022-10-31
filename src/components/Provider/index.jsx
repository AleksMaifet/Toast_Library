import React, { createContext, memo, useEffect, useMemo, useState } from 'react';

import Portal from '@/components/Portal';
import { types } from '@/components/Provider/types';
import { ACTION } from '@/constants';
import { toastManager } from '@/utils';

export const ToastContext = createContext(null);

const Provider = ({ children }) => {
  const [toastList, setToastList] = useState([]);

  const handleToastList = toastList => {
    setToastList(toastList);
  };

  const handleRemoveToast = id => {
    toastManager.removeToast(id);
  };

  useEffect(() => {
    toastManager.watcher(ACTION, handleToastList);
    return () => {
      if (!toastManager.toastList.length) {
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

  return (
    <Portal>
      <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
    </Portal>
  );
};

export default memo(Provider);

Provider.propTypes = types;
