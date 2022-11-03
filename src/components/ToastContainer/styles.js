import styled from 'styled-components';

import theme from '@/theme';
import { handlePositionToast } from '@/utils';

export const WrapperToast = styled.div`
  position: fixed;
  ${({ position, spacing }) => handlePositionToast(position, spacing)}
  section:not(:last-child) {
    margin-bottom: ${theme.spaces[2]}px;
  }
`;
