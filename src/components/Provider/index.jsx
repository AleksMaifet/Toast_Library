import React, { memo, useEffect, useMemo, useState } from 'react';

import Portal from '@/components/Portal';
import { types } from '@/components/Provider/types';
import { ACTION } from '@/constants';
import { toastManager } from '@/utils';
import { ToastContext } from '@/components/Provider/context';

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
