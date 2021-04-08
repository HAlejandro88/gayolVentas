import { LitElement, html, css } from 'lit-element';

import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';

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
              background: var(--container-background, #83BEE5);
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

          iron-icon:hover {
            cursor: pointer;
          }
        `;
    }

    constructor() {
        super();
        this.title = '';
    }

    get fullDate() {
        return `${new Date().toDateString()}`;
    }


    render() {
        return html`
            <div class="card--box">
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
