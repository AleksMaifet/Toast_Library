import React, { memo, useEffect } from 'react';

import IconClose from '@/assets/svg/iconClose.svg';
import Icon from '@/components/Icon';
import { toastManager } from '@/utils';

import {
  ToastButtonContainer,
  ToastButtonWrapper,
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
  const onClickCloseToast = () => {
    onCloseToast(id);
    clearTimeout(toastManager.getAutoCloseTimerId(id));
  };

  useEffect(() => {
    toastManager.autoCloseToast(id);

    return () => toastManager.clearAutoCloseTimerIdList(id);
  }, []);

  return (
    <ToastWrapper
      backgroundColor={currentBackgroundColor}
      color={currentColor}
      animation={animation}
      draggable
      onDragEnd={onClickCloseToast}
    >
      <ToastIconWrapper>
        <Icon icon={icon} />
      </ToastIconWrapper>
      <ToastInfo>
        <ToastTitle>{currentLabel}</ToastTitle>
        {content && <ToastDescription>{content}</ToastDescription>}
      </ToastInfo>
      <ToastButtonContainer>
        <ToastButtonWrapper>
          <IconClose onClick={onClickCloseToast} />
        </ToastButtonWrapper>
      </ToastButtonContainer>
      {autoClose && <ToastProgressBar duration={autoCloseTime} />}
    </ToastWrapper>
  );
};

Toast.propTypes = types;

export default memo(Toast);
