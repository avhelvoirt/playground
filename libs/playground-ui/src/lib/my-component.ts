import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  static override styles = css`
    /* Your component styles go here */
    p {
      color: red;
    }
  `;

  override render() {
    return html`
      <!-- Your lit-html template goes here -->
      <p>Hello from Lit-HTML Component!</p>
    `;
  }
}
