import { html, LitElement } from '@polymer/lit-element';
import './radial-menu.js';


class RadialMenuDemo extends LitElement {
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
      }
    </style>
    <radial-menu>
      <radial-menu-item>Test 1</radial-menu-item>
      <radial-menu-item>Test 2</radial-menu-item>
      <radial-menu-item>Test 3</radial-menu-item>
      <radial-menu-item>Test 4</radial-menu-item>
    </radial-menu>
    `
  }
}

window.customElements.define('radial-menu-demo', RadialMenuDemo);