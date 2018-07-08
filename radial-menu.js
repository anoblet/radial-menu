import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import './radial-menu-item.js';

class RadialMenu extends LitElement {
  constructor() {
    super();

    // Set defaults
    this.radius = 1;
    this.items = [];
    this.width = 2;
    this.height = 2;
    // this.items = ['Test 1', 'Test 2'];
  }

  connectedCallback() {
    super.connectedCallback();
    this.items = [].slice.call(this.children);
    this.angle = 360 / this.items.length;
    console.log(this.angle);
    // Starting point is (0, *radius*)
  }

  static get properties() {
    return {
      items: Array,
      radius: Number,
      angle: Number,
      width: String,
      height: String
    }
  }

  _render(props) {
    return html`
    <style>
      :host {
        display: grid;
        justify-content: center;
      }

      :host > div {
        position: relative;
      }

      :host > div >div {
        position: absolute;
      }
    </style>
    <div>
      ${repeat(props.items, (item, index) => {
        var theta = ((Math.PI*2) / props.items.length);
        // var angle = (theta * index);
        // let thisAngle = (angle * index);
        // console.log(index);
        // console.log('Angle: ', angle);
        // console.log(Math.cos(angle));
        // console.log(Math.cos(angle));

        // let centerX = this.width / 2;
        let centerX = 0;
        // let centerY = this.height / 2;
        let centerY = 0;

        let x = centerX + (props.radius * Math.cos(this.angle * index));
        let y = centerY + (props.radius * Math.sin(this.angle * index));

          return html`
        <div style$="top: ${y}px; left: ${x}px">
          ${item}
        </div>
      `})}
    </div>
    <div>
      <slot></slot>
    </div>
    `
  }
}

window.customElements.define('radial-menu', RadialMenu);