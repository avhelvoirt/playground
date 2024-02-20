import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('playground-button')
export class PlaygroundButton extends LitElement {
  override render() {
    return html`<button>button</button>`;
  }
}
