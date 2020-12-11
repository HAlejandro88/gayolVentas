import { LitElement, html, css } from 'lit-element';


class FabButton extends LitElement {
    static get properties() {
        return {
            name: String
        }
    }

    static get styles() {
        return css`
            .fabIconBig {
              background-color: green;
              position: relative;
              border-radius: 100%;
              height: 50px;
              width: 50px;
            }
        `;
    }

    constructor() {
        super();
        this.name = '';
    }

    render() {
        return html`
            <button class="fabIconBig">
                ${this.name ? html`${this.name}` :html`<slot></slot>`}
            </button>
        `;
    }
}


window.customElements.define('fab-button', FabButton);
