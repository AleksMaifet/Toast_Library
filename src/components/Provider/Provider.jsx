import { createContext, useEffect, useMemo, useState } from 'react';

import { toastManager } from '@/utils';

export const ToastContext = createContext({});

export const Provider = ({ children }) => {
  const [toastList, setToastList] = useState(toastManager.toastList);

  const handleToastList = toast => {
    setToastList(prev => [...prev, toast]);
  };

  useEffect(() => {
    toastManager.subscribe('subscribe', handleToastList);
    // return () => {
    //   toastManager.unsubscribe()
    // }
  }, []);

  const value = useMemo(
    () => ({
      toastList,
    }),
    [toastList],
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};
