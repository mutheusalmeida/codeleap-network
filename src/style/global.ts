import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #7695EC;
    --dark: #000;
    --gray-100: #DDD;
    --gray-200: #CCCC;
    --gray-300: #999;
    --gray-400: #777;
    --red: #FF5151;
    --green: #47B960;
    --white: #FFF;
    --xxs: 0.875rem; // 14px
    --xs: 1rem; // 16px
    --sm: 1.125rem; // 18px
    --md: 1.375rem; // 22px
  }

  * {
    margin: 0;

    &:focus-visible {
      outline-color: var(--primary-color);
    }

    &::selection {
      background-color: var(--primary-color);
      color: var(--white);
    }
  }

  html {
    font-size: 79%;

    @media (min-width: 40em) {
      font-size: 100%;
    }
  }

  html, body, [data-js="root"] {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    color: var(--dark);
    background-color: var(--gray-100);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  img {
    user-select: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  [data-js="root"] {
    isolation: isolate;
  }
`

export default GlobalStyles
