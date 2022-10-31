import styled from 'styled-components';

import theme from '@/theme';

export const ExampleWrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ExampleButton = styled.button`
  width: ${theme.spaces[9]}px;
  height: ${theme.spaces[9]}px;
  border-radius: ${theme.size.xs}%;
  border: none;
  background-color: ${theme.Colors.darkGray};
  color: ${theme.Colors.white};
  cursor: pointer;
`;
