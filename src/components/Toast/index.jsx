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
} from './styles';
import { types } from './types';

const Toast = ({
  value: {
    currentTitle,
    content,
    currentColor,
    currentBackgroundColor,
    animation,
    icon,
    id,
  },
  onCloseToast,
}) => {
  const handleDrag = () => {
    onCloseToast(id);
  };

  const onClickCloseToast = () => {
    onCloseToast(id);
  };

  return (
    <ToastWrapper
      backgroundColor={currentBackgroundColor}
      color={currentColor}
      animation={animation}
      draggable
      onDragEnd={handleDrag}
    >
      <ToastIconWrapper>
        <Icon icon={icon} />
      </ToastIconWrapper>
      <ToastInfo>
        <ToastTitle>{currentTitle}</ToastTitle>
        {content && <ToastDescription>{content}</ToastDescription>}
      </ToastInfo>
      <ToastButtonContainer>
        <ToastButtonWrapper>
          <IconClose onClick={onClickCloseToast} />
        </ToastButtonWrapper>
      </ToastButtonContainer>
    </ToastWrapper>
  );
};

Toast.propTypes = types;

export default memo(Toast);
