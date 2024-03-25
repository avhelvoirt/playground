import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('playground-form-input')
export class playgroundFormInput extends LitElement {
  @property() placeholder: string;

  override render() {
    return html`
      <input placeholder="${this.placeholder}" @input=${this.changedInput()} />
    `;
  }

  changedInput() {}
}

declare global {
  interface HTMLElementTagNameMap {
    'playground-form-input': playgroundFormInput;
  }
}
