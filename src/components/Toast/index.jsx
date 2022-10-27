import React, { memo } from 'react';

import IconClose from '@/assets/svg/iconClose.svg';
import Icon from '@/components/Icon';
import {
  ToastButtonContainer,
  ToastButtonWrapper,
  ToastDescription,
  ToastIconWrapper,
  ToastInfo,
  ToastTitle,
  ToastWrapper,
} from '@/components/Toast/styles';
import { types } from '@/components/Toast/types';
import { DRAG_START_EVENT } from '@/constants';

const Toast = ({ value, onCloseToast }) => {
  const {
    currentTitle,
    toastContent,
    currentColor,
    currentBackgroundColor,
    animation,
    icon,
  } = value;

  const handleDrag = e => {
    let startPosition;
    const {
      pageX,
      nativeEvent: { type },
    } = e;
    if (type.includes(DRAG_START_EVENT)) {
      startPosition = pageX;
    }
    if (pageX !== startPosition) {
      onCloseToast();
    }
  };

  return (
    <ToastWrapper
      backgroundColor={currentBackgroundColor}
      color={currentColor}
      animation={animation}
      draggable
      onDragStart={handleDrag}
      onDragEnd={handleDrag}
    >
      <ToastIconWrapper>
        <Icon icon={icon} />
      </ToastIconWrapper>
      <ToastInfo>
        <ToastTitle>{currentTitle}</ToastTitle>
        {toastContent && <ToastDescription>{toastContent}</ToastDescription>}
      </ToastInfo>
      <ToastButtonContainer>
        <ToastButtonWrapper>
          <IconClose onClick={onCloseToast} />
        </ToastButtonWrapper>
      </ToastButtonContainer>
    </ToastWrapper>
  );
};

Toast.propTypes = types;

export default memo(Toast);
