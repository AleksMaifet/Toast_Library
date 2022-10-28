import styled from 'styled-components';

import theme from '@/theme';
import { handleAnimationToast } from '@/utils';

export const ToastWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${theme.size.small}px;
  height: ${theme.spaces[11]}px;
  padding: ${theme.spaces[3]}px;
  border-radius: ${theme.spaces[2]}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  animation: ${({ animation }) => handleAnimationToast(animation)} 1s;

  svg,
  h2,
  p {
    fill: ${({ color }) => color};
    color: ${({ color }) => color};
  }
`;

export const ToastIconWrapper = styled.div`
  height: ${theme.spaces[8]}px;
  width: ${theme.spaces[8]}px;
`;

export const ToastButtonContainer = styled.div`
  width: ${theme.spaces[3]}px;
  height: ${theme.spaces[8]}px;
`;

export const ToastButtonWrapper = styled.div`
  height: ${theme.spaces[3]}px;
  cursor: pointer;
`;

export const ToastInfo = styled.div`
  width: ${theme.spaces[11]}%;
  font-size: ${theme.textStyle.sm}rem;
  text-transform: uppercase;
  overflow: hidden;
`;

export const ToastTitle = styled.h2`
  font-size: ${theme.textStyle.md}rem;
  text-align: center;
`;

export const ToastDescription = styled.p`
  font-size: ${theme.textStyle.md}rem;
  text-align: center;
`;
