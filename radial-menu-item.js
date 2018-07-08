import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';


class RadialMenuItem extends LitElement {
  constructor() {
    super();

    // Set defaults
  }

  static get properties() {
    return {
      items: Array
    }
  }

  _render(props) {
    return html`
    <style>
      :host {
        display: block;
        width: max-content;
      }
    </style>
    <slot></slot>
    `
  }
}

window.customElements.define('radial-menu-item', RadialMenuItem);