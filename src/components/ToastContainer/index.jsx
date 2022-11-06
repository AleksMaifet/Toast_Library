import React from 'react';

import { ToastContext } from '@/components/Provider/context';
import Toast from '@/components/Toast';
import { ID_PORTAL_TITLE } from '@/constants';

import { WrapperToast } from './styles';
import { types } from './types';

const ToastContainer = ({ position, spacing }) => (
  <ToastContext.Consumer>
    {({ toastList, handleCloseToast }) => (
      <WrapperToast id={ID_PORTAL_TITLE} position={position} spacing={spacing}>
        {toastList.map(({ id, ...info }) => (
          <Toast
            key={id}
            value={{
              id,
              ...info,
            }}
            onCloseToast={handleCloseToast}
          />
        ))}
      </WrapperToast>
    )}
  </ToastContext.Consumer>
);

export default ToastContainer;

ToastContainer.propTypes = types;
