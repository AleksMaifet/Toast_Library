import styled from 'styled-components';

import { handlePositionToast } from '@/utils';

export const WrapperToast = styled.main`
  position: fixed;
  ${({ position }) => handlePositionToast(position)}
`;
