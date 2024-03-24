import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { NameTag } from '../src/index.js';
import '../src/name-tag/NameTag.js';

describe('NameTag', () => {
  it('renders with default values', async () => {
    const el = await fixture<NameTag>(html`<name-tag></name-tag>`);
    await el.updateComplete; 

    expect(el.greeting).to.equal('Hello');
    expect(el.name).to.equal('Pratiksha Sankhe');
    expect(el.clg).to.equal('VJTI');
    expect(el.location).to.equal('Mumbai, Maharashtra, India');
    // Verify the rendering of the component
    const header = el.shadowRoot!.querySelector('.header') as HTMLElement | null;
    const body = el.shadowRoot!.querySelector('.body') as HTMLElement | null;
    expect(header!.textContent).to.contain('HELLO');
    expect(header!.textContent).to.contain('My name is Pratiksha Sankhe');
    expect(body!.textContent).to.contain('My college name is VJTI');
    expect(body!.textContent).to.contain('It is located in Mumbai, Maharashtra, India');
  });

  it('renders with custom values', async () => {
    const el = await fixture<NameTag>(html`
      <name-tag
        greeting="Hi"
        name="John Doe"
        clg="Example College"
        location="New York, USA"
      ></name-tag>
    `);
    expect(el.greeting).to.equal('Hi');
    expect(el.name).to.equal('John Doe');
    expect(el.clg).to.equal('Example College');
    expect(el.location).to.equal('New York, USA');
    // Verify the rendering of the component
    const header = el.shadowRoot!.querySelector('.header') as HTMLElement | null;
    const body = el.shadowRoot!.querySelector('.body') as HTMLElement | null;
    expect(header!.textContent).to.contain('HI');
    expect(header!.textContent).to.contain('My name is John Doe');
    expect(body!.textContent).to.contain('My college name is Example College');
    expect(body!.textContent).to.contain('It is located in New York, USA');
  });
});