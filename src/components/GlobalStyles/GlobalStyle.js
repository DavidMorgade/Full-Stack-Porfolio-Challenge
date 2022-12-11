import { createGlobalStyle } from 'styled-components';
import SpaceGrotesk from '../../fonts/SpaceGrotesk-VariableFont_wght.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Space Grotesk';
    src: url(${SpaceGrotesk});
  }

  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    font-family: 'Space Grotesk', sans-serif;

  }
  * {
    /* box-shadow: 0 0 0 1px red;  */
  }
`;
