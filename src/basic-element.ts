import { html, css, LitElement } from 'lit';
import { customElement,property } from 'lit/decorators.js';

@customElement('basic-element')
export class BasicElement extends LitElement {

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: black;
    }
  `;

  @property
  ({ type: String }) header = 'Hey there counter';

  @property
  ({ type: Number }) counter = 0;

  __increment() {
    this.counter += 1;
  }

  __decrement() {
    this.counter -= 1;
  }

  __reset() {
    this.counter = 0;
  }

  render() {
    return html`
      <h2>${this.header}: ${this.counter}</h2>
      <button @click=${this.__increment} class='increment'>Increment</button>
      <button @click=${this.__decrement} class='decrement'>Decrement</button>
      <button @click=${this.__reset} class='reset'>Reset</button>
    `;
  }
}
