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

const Toast = ({ title, icon, backgroundColor, textColor }) => (
  <ToastWrapper backgroundColor={backgroundColor} color={textColor}>
    <ToastIconWrapper>
      <Icon icon={icon} />
    </ToastIconWrapper>
    <ToastInfo>
      <ToastTitle>{title}</ToastTitle>
    </ToastInfo>
    <ToastButtonWrapper>
      <ToastButton>
        <IconClose />
      </ToastButton>
    </ToastButtonWrapper>
  </ToastWrapper>
);

export default Toast;
