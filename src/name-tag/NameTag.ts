import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles as NameTagStyles } from './NameTagStyles.js';

@customElement('name-tag')
export class NameTag extends LitElement {
  @property({ type: String }) greeting = 'Hello';

  @property({ type: String }) name = 'Pratiksha Sankhe';

  @property({ type: String }) clg = 'VJTI';

  @property({ type: String }) location = 'Mumbai, Maharashtra, India';


  static styles = [
    NameTagStyles
  ];

  render() {
    return html`
      <div class="header">
        <h3>${this.greeting.toUpperCase()}</h3>
        <h4>My name is ${this.name}</h4>
      </div>
      <br/><br/>
      <div class="body">
      <p>My college name is <b>${this.clg}</b></p>
      <p>It is located in ${this.location}</p>
      </div>
    `;
  }
}
