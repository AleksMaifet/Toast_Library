import React, { memo, useEffect } from 'react';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import IconClose from '@/assets/svg/iconClose.svg';
import Icon from '@/components/Icon';
import theme from '@/theme';
import { toastManager } from '@/utils';

import {
  ToastButtonWrapper,
  ToastContainer,
  ToastDescription,
  ToastIconWrapper,
  ToastInfo,
  ToastProgressBar,
  ToastTitle,
  ToastWrapper,
} from './styles';
import { types } from './types';

const Toast = ({
  value: {
    currentLabel,
    content,
    currentColor,
    currentBackgroundColor,
    animation,
    icon,
    id,
    autoClose,
    autoCloseTime,
  },
  onCloseToast,
}) => {
  const { listeners, transform, transition, setNodeRef, isDragging, active } =
    useDraggable({
      id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    boxShadow: isDragging && theme.shadowToastDraggable,
  };

  useEffect(() => {
    toastManager.autoCloseToast(id);

    return () => toastManager.clearAutoCloseTimerIdList(id);
  }, []);

  const handleCloseToast = () => {
                                onCloseToast(id);
  };

  return (
    <ToastContainer
      ref={setNodeRef}
      style={style}
      backgroundColor={currentBackgroundColor}
      color={currentColor}
      animation={animation}
    >
      <ToastWrapper {...listeners}>
        <ToastIconWrapper>
          <Icon icon={icon} />
        </ToastIconWrapper>
        <ToastInfo>
          <ToastTitle>{currentLabel}</ToastTitle>
          {content && <ToastDescription>{content}</ToastDescription>}
        </ToastInfo>
      </ToastWrapper>
      {!active ? (
        <ToastButtonWrapper>
          <IconClose onClick={handleCloseToast} />
        </ToastButtonWrapper>
      ) : null}
      {autoClose && <ToastProgressBar duration={autoCloseTime} />}
    </ToastContainer>
  );
};

Toast.propTypes = types;

export default memo(Toast);
