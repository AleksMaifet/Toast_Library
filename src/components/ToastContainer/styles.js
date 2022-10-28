import styled from 'styled-components';

import { handlePositionToast } from '@/utils';

export const WrapperToast = styled.div`
  position: fixed;
  ${({ position }) => handlePositionToast(position)}
`;
