import {injectGlobal} from 'styled-components'
import {BACKGROUND_COLOR} from 'utils/config'

export default () => injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
    font-family: Helvetica, serif;
    background: ${BACKGROUND_COLOR};
  }

  a,
  button {
    text-decoration: none;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    border: 0;
    background: none;
    cursor: pointer;
    outline: 0;
    -webkit-tap-highlight-color: transparent; /* might remove flickering */
    touch-action: manipulation;   /* just to be extra sure there is no 300ms delay */
  }
`
