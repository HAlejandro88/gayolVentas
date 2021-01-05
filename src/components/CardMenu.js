import { LitElement, html, css } from 'lit-element';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';

class CardMenu extends LitElement {
    static get properties() {
        return {
            title: String
        }
    }

    static get styles() {
        return css`
            .card--box {
              border-radius: 20px;
              background: #83BEE5;
              height: 200px;
              width: 250px;
              padding: 5px;
              color: white;
            }
          
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.2px solid white;
          }
          
          .card-content h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: capitalize;
          }
        `;
    }

    constructor() {
        super();
        this.title = '';
    }

    get fullDate() {
        return `${new Date().getDay()}/${new Date().getUTCMonth() + 1}/${new Date().getFullYear()}`;
    }


    render() {
        return html`
            <div class="card--box">
                <mwc-menu id="menu">
                    <mwc-list-item>Item 0</mwc-list-item>
                    <mwc-list-item>Item 1</mwc-list-item>
                    <mwc-list-item>Item 2</mwc-list-item>
                    <mwc-list-item>Item 3</mwc-list-item>
                </mwc-menu>
                <div class="card-header">
                    <h6>${this.fullDate}</h6> 
                    <iron-icon icon="vaadin:ellipsis-dots-v" @click="${this.handledOptions}"></iron-icon>
                </div>
                <div class="card-content">
                    <h2>${this.title}</h2>
                </div>
            </div>
            
        `;
    }

    handledOptions() {
        this.dispatchEvent(new CustomEvent('handled-options'))
    }
}


window.customElements.define('card-menu', CardMenu);
