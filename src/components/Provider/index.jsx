import { createContext, memo, useEffect, useMemo, useState } from 'react';

import { types } from '@/components/Provider/types';
import { toastManager } from '@/utils';

export const ToastContext = createContext({});

const Provider = ({ children }) => {
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

export default memo(Provider);

Provider.propTypes = types;
