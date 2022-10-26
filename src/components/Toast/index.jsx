import React, { memo } from 'react';

import { ReactComponent as IconClose } from '@/assets/svg/iconClose.svg';
import Icon from '@/components/Icon';
import {
  ToastButton,
  ToastButtonWrapper,
  ToastDescription,
  ToastIconWrapper,
  ToastInfo,
  ToastTitle,
  ToastWrapper,
} from '@/components/Toast/styles';
import { types } from '@/components/Toast/types';

const Toast = ({ value, onCloseToast }) => {
  const {
    currentTitle,
    toastContent,
    currentColor,
    currentBackgroundColor,
    animation,
    icon,
  } = value;

  return (
    <ToastWrapper
      backgroundColor={currentBackgroundColor}
      color={currentColor}
      animation={animation}
    >
      <ToastIconWrapper>
        <Icon icon={icon} />
      </ToastIconWrapper>
      <ToastInfo>
        <ToastTitle>{currentTitle}</ToastTitle>
        {toastContent && <ToastDescription>{toastContent}</ToastDescription>}
      </ToastInfo>
      <ToastButtonWrapper>
        <ToastButton onClick={onCloseToast}>
          <IconClose />
        </ToastButton>
      </ToastButtonWrapper>
    </ToastWrapper>
  );
};

Toast.propTypes = types;

export default memo(Toast);
