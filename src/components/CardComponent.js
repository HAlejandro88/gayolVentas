import {  LitElement, html, css  } from 'lit-element';
import '@vaadin/vaadin-icons/vaadin-icons';


class CardComponent extends LitElement {

    static get properties () {
        return {
            image: String,
            title: String,
            description: String,
            details: String,
            id: String
        }
    }


    static get styles() {
        return css`
          .card {
            display: flex;
            flex-direction: row;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 230px;
            height: 310px;
            box-sizing: content-box;
            padding: 10px;
          }

          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
          
          .card-header {
            display: flex;
            flex-direction: row;
            width: 20%;
          } 

          .container {
            padding: 2px 16px;
          }
          h6 {
            margin-top: -12px;
            padding-top: -12px;
            color: green;
            font-weight: bold;
            font-size: 15px;
          }
          
          .details {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-left: -45px;
            padding: 0;
          }

          vaadin-button {
            margin: 0;
            padding: 0;
          }
          
          .icon-hidden {
            color: transparent;
          }
          
          .icon-hidden:hover {
            color: blue;
          }
          
          .sub-title {
            display: flex;
            justify-content: space-around;
            width: 100%;
            text-align: right;
          } 
          
          .sub-title h5 {
            color: darkgrey;
          }
          h5 {
            color: darkgrey;
            text-align: right;
          }
        `;
    }

    constructor() {
        super();
        this.image = '';
        this.title = '';
        this.description = '';
        this.details = 0;
        this.id = 'ddd';
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const options1 = { style: 'currency', currency: 'USD' };
        const numberFormat = new Intl.NumberFormat('en-US', options1);
        this.details =numberFormat.format(this.details);
    }

    render() {
        return html`
            <div class="card">
                <header class="card-header">
                    <vaadin-button theme="tertiary" @click="${this.uploadDocuments}">
                        <iron-icon icon="vaadin:home" class="icon-hidden"></iron-icon>
                    </vaadin-button>
                </header>
                ${this.image ? html`<img src="${this.image}" alt="Avatar" style="width:100%">`: ``}
                <div class="container">
                    <h5>Id: ${this.id}</h5>
                    <h4><b>${this.title}</b></h4>
                    <p>${this.description}
                    </p>
                    <div class="sub-title">
                        <h6>${this.details}</h6>
                    </div>
                </div>
                <div class="details">
                    <vaadin-button theme="tertiary" @click="${this.handleClick}">Ver más</vaadin-button>
                </div>
            </div>
        `;
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('handled-click'));
    }

    uploadDocuments() {
        this.dispatchEvent(new CustomEvent('change-documents'))
    }

}

window.customElements.define('card-component', CardComponent);
