import React from 'react';

import PropTypes from 'prop-types';

import { ReactComponent as IconClose } from '@/assets/svg/iconClose.svg';
import { Icon } from '@/components/Icon';
import {
  ToastButton,
  ToastButtonWrapper,
  ToastDescription,
  ToastIconWrapper,
  ToastInfo,
  ToastTitle,
  ToastWrapper,
} from '@/components/Toast/styles';

const Toast = ({ value }) => {
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
        <ToastButton>
          <IconClose />
        </ToastButton>
      </ToastButtonWrapper>
    </ToastWrapper>
  );
};

Toast.propTypes = {
  value: PropTypes.objectOf(
    PropTypes.shape({
      icon: PropTypes.func.isRequired,
      currentTitle: PropTypes.string.isRequired,
      toastContent: PropTypes.string.isRequired,
      currentColor: PropTypes.string.isRequired,
      currentBackgroundColor: PropTypes.string.isRequired,
      animation: PropTypes.string.isRequired,
    }),
  ),
}.isRequired;

export default Toast;
