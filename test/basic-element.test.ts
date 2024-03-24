import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { BasicElement } from '../src/index.js';
import '../src/basic-element.js';

describe('BasicElement', () => {
  it('renders with default values', async () => {
    const el = await fixture<BasicElement>(html`<basic-element></basic-element>`);

    expect(el.header).to.equal('Hey there counter');
    expect(el.counter).to.equal(0);
  });

  it('increments counter when clicking increment button', async () => {
    const el = await fixture<BasicElement>(html`<basic-element></basic-element>`);
    await el.updateComplete; 

    const incrementButton = el.shadowRoot!.querySelector('.increment') as HTMLButtonElement | null;

    if (incrementButton) {
      incrementButton.click();
      await el.updateComplete;
      expect(el.counter).to.equal(1);
    } else {
      // If button is not found, fail the test
      throw new Error('Increment button not found');
    }
  });

  it('decrements counter when clicking decrement button', async () => {
    const el = await fixture<BasicElement>(html`<basic-element></basic-element>`);
    await el.updateComplete; 

    const decrementButton = el.shadowRoot!.querySelector('.decrement') as HTMLButtonElement | null;

    if (decrementButton) {
      decrementButton.click();
      await el.updateComplete;
      expect(el.counter).to.equal(-1);
    } else {
      // If button is not found, fail the test
      throw new Error('Decrement button not found');
    }
  });

  it('resets counter when clicking reset button', async () => {
    const el = await fixture<BasicElement>(html`<basic-element></basic-element>`);
    await el.updateComplete; 

    const resetButton = el.shadowRoot!.querySelector('.reset') as HTMLButtonElement | null;

    if (resetButton) {
      resetButton.click();
      await el.updateComplete;
      expect(el.counter).to.equal(0);
    } else {
      // If button is not found, fail the test
      throw new Error('Reset button not found');
    }
  });


});
