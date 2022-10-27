import { createContext, memo, useEffect, useMemo, useState } from 'react';

import { types } from '@/components/Provider/types';
import { toastManager } from '@/utils';

export const ToastContext = createContext({});

const Index = ({ children }) => {
  const [toastList, setToastList] = useState([]);

  const handleToastList = toastList => {
    setToastList(toastList);
  };

  const handleRemoveToast = id => {
    toastManager.removeToast(id);
  };

  useEffect(() => {
    toastManager.watcher(handleToastList);
    return () => {
      if (!toastManager.toastList.length) {
        clearInterval(toastManager.timerId);
      }
    };
  }, [toastList]);

  const value = useMemo(
    () => ({
      toastList,
      handleRemoveToast,
    }),
    [toastList],
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

export default memo(Index);

Index.propTypes = types;
