import React from 'react';

import Toast from '@/components/Toast';
import { ID_PORTAL_TITLE } from '@/constants';

import { WrapperToast } from './styles';
import { types } from './types';

const ToastListContainer = ({ position, spacing, toastList, handleCloseToast }) => (
  <WrapperToast id={ID_PORTAL_TITLE} position={position} spacing={spacing}>
    {toastList.map(toast => (
      <Toast key={toast.id} value={toast} onCloseToast={handleCloseToast} />
    ))}
  </WrapperToast>
);

export default ToastListContainer;

ToastListContainer.propTypes = types;
