import { LitElement, html, css } from 'lit-element';


class LastNews extends LitElement {
    static get properties() {
        return {
            title: String,
            description: String,
            lastDate: Date
        }
    }

    static get styles() {
        return css`
          :host {
            display: block;
            padding: 10px;
          }      
          .last {
            padding: 5px;
          }
          
          .last p {
            margin: 2px;
          }
          .header {
            display: flex;
            margin: 0;
          }
          
          .header h3 {
            color: grey;
            text-transform: capitalize;
            font-weight: bold;
            font-size: 21px;
          }

          .header small {
            color: black;
            font-size: 13px;
          }
        `;
    }

    constructor() {
        super();
        this.title = ''
        this.description = ''
        this.lastDate = Date.now();
    }

    render() {
        return html`                
            <div class="last">
                <div class="header">
                    <h3 class="lastUpdate__title">${this.title} <small>${this.lastDate}:</small></h3>
                </div>
                <p>
                    ${this.description}
                </p>
            </div>
        `;
    }
}

window.customElements.define('last-news',LastNews);
