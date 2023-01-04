import React, { useCallback } from 'react';

import { DndContext } from '@dnd-kit/core';

import Toast from '@/components/Toast';
import { ID_PORTAL_TITLE, STARTED_COORDINATE_TOAST } from '@/constants';
import { handleClosedToast } from '@/utils';

import { WrapperToast } from './styles';
import { types } from './types';

const ToastListContainer = ({ position, spacing, toastList, handleCloseToast }) => {
  const handleDragEnd = useCallback(e => {
    const {
      active: { id },
      delta: { x, y },
    } = e;

    if (x !== STARTED_COORDINATE_TOAST || y !== STARTED_COORDINATE_TOAST) {
      handleClosedToast(handleCloseToast, id);
    }
  }, []);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <WrapperToast id={ID_PORTAL_TITLE} position={position} spacing={spacing}>
        {toastList.map(toast => (
          <Toast key={toast.id} value={toast} onCloseToast={handleCloseToast} />
        ))}
      </WrapperToast>
    </DndContext>
  );
};

export default ToastListContainer;

ToastListContainer.propTypes = types;
