import styled from 'styled-components';

import theme from '@/theme';

export const ErrorContainer = styled.div`
  margin: ${theme.spaces[15]}px auto;
  text-align: center;
`;

export const ErrorText = styled.p`
  color: ${theme.Colors.error};
  font-size: ${theme.textStyle.xll}rem;
`;
