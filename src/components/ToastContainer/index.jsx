import React from 'react';

import { ToastContext } from '@/components/Provider/context';
import Toast from '@/components/Toast';

import { WrapperToast } from './styles';

const ToastContainer = ({ position }) => (
  <ToastContext.Consumer>
    {({ toastList, handleRemoveToast }) => (
      <WrapperToast position={position}>
        {toastList.map(({ id, ...info }) => (
          <Toast
            key={id}
            value={{
              id,
              ...info,
            }}
            onCloseToast={handleRemoveToast}
          />
        ))}
      </WrapperToast>
    )}
  </ToastContext.Consumer>
);

export default ToastContainer;
