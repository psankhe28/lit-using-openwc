import { html } from 'lit';
// import { NameTag } from './NameTag.js';

export const template = html`
  <div class="header">
    <h3>${(x:any) => x.greeting.toUpperCase()}</h3>
    <h4>my name is</h4>
  </div>

  <div class="body">${(x:any)  => x.name}</div>

  <div class="footer">contact : Pratiksha Sankhe</div>
`;
