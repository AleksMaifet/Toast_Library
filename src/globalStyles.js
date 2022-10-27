import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export default createGlobalStyle`

  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 100%;
  }

  * {
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  blockquote, q {
    quotes: none;
  }

  a {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    background: transparent;
    font-size: 100%;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  input, select {
    vertical-align: middle;
  }

  li {
    list-style-type: none;
  }

  button {
    border-radius: 0;
    outline: none !important;
    background: none;
    -webkit-appearance: none;
  }

  img, fieldset, iframe {
    border: 0;
  }

  input {
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input::-moz-focus-inner, button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html, body {
    font-size: ${theme.fontSizeBase};
    font-family: ${theme.fontFamily};
    line-height: 1.4;
    font-weight: 500;
    width: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      outline: none;
      text-decoration: none;
    }
  }

  a,
  img,
  input,
  textarea,
  button {
    border: 0;
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s ease 0s;
  }

  input,
  textarea,
  select,
  button {
    outline: none;
  }

  input::placeholder {
    opacity: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    line-height: 1.2;
  }

`;
