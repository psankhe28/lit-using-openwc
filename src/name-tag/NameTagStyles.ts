/* eslint-disable dot-notation */
import { css, unsafeCSS } from 'lit';
import { tokens } from '../../design-tokens/designToken.js';

// Define styles using unsafeCSS
export const styles = css`
  .header {
    background-color: ${unsafeCSS(tokens['color-secondary'])};
    border-radius: ${unsafeCSS(tokens['border-radius-medium'])};
    border: 2px solid black;
    padding: ${unsafeCSS(tokens['spacing-medium'])};
    text-align: ${unsafeCSS(tokens['alignRight'])};
    z-index:${unsafeCSS(tokens['default'])}
  }

  h3 {
    color: ${unsafeCSS(tokens['color-primary'])};
    margin: 0;
    text-transform: uppercase;
  }

  h4 {
    color: ${unsafeCSS(tokens['color-accent'])};
    margin: 0;
  }

  .body {
    background-color: ${unsafeCSS(tokens['color-dark'])};
    border-radius: ${unsafeCSS(tokens['border-radius-large'])};
    box-shadow: ${unsafeCSS(tokens['shadow-medium'])};
    padding: ${unsafeCSS(tokens['spacing-large'])};
    text-align: center;
    color:white
  }

`;
