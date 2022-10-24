import styled from 'styled-components';

import theme from '@/theme';

export const ToastWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${theme.size.xs}px;
  width: ${theme.size.small}px;
  padding: ${theme.spaces[3]}px;
  margin: ${({ margins }) => margins || 20}px;
  border-radius: 7px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  svg,
  h2 {
    fill: ${({ color }) => color};
    color: ${({ color }) => color};
  }
`;

export const ToastIconWrapper = styled.div`
  height: ${theme.spaces[8]}px;
  width: ${theme.spaces[8]}px;
`;

export const ToastButtonWrapper = styled.div`
  height: ${theme.spaces[14]}%;
`;

export const ToastButton = styled.button`
  width: ${theme.spaces[5]}px;
  height: ${theme.spaces[5]}px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ToastInfo = styled.div`
  width: ${theme.spaces[11]}%;
  overflow: hidden;
`;

export const ToastTitle = styled.h2`
  text-align: center;
`;
