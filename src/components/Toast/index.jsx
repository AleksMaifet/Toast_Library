import React from 'react';

import { ReactComponent as IconClose } from '@/assets/svg/iconClose.svg';
import { Icon } from '@/components/Icon';
import {
  ToastButton,
  ToastButtonWrapper,
  ToastIconWrapper,
  ToastInfo,
  ToastTitle,
  ToastWrapper,
} from '@/components/Toast/styles';
import { handleComponentStory } from '@/utils';

const Toast = ({ toastType, ...replacement }) => {
  const { currentTitle, currentColor, currentBackgroundColor, icon, animation } =
    handleComponentStory(toastType, replacement);

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
      </ToastInfo>
      <ToastButtonWrapper>
        <ToastButton>
          <IconClose />
        </ToastButton>
      </ToastButtonWrapper>
    </ToastWrapper>
  );
};

export default Toast;
