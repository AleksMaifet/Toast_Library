import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export default createGlobalStyle`
  #portal {
    font-size: ${theme.fontSizeBase};
    font-family: ${theme.fontFamily};

    & * {
      box-sizing: border-box;
      padding: 0;
    }
  }
`;
