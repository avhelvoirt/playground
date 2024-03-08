import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('playground-button')
export class playgroundButton extends LitElement {
  static override styles = css`
    button {
      background-color: var(--c-button-bg);
      border-style: none;
      border-radius: 0;
      width: fit-content;
      padding: 0.5rem 2rem;
      color: var(--c-txt-button-color);

      &:hover {
        cursor: pointer;
        background-color: var(--c-button-bg-hover);
      }
    }
  `;

  @property() name: string = '';

  override render() {
    return html` <button @click=${this.handleClick}>${this.name}</button> `;
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent('submitClicked', { bubbles: true, composed: true })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'playground-button': playgroundButton;
  }
}
