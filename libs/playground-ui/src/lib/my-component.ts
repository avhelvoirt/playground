import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  static override styles = css`
    /* Your component styles go here */
    p {
      color: red;
    }
  `;

  @property()
  name: string = 'Hello';

  override render() {
    return html`
      <!-- Your lit-html template goes here -->
      <p>${this.name} from Lit-HTML Component!</p>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent;
  }
}
