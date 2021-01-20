import {  LitElement, html, css  } from 'lit-element';


class CardComponent extends LitElement {

    static get properties () {
        return {
            image: String,
            title: String,
            description: String,
            details: String
        }
    }


    static get styles() {
        return css`
          .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 230px;
            height: 282px;
          }

          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }

          .container {
            padding: 2px 16px;
          }
          h6 {
            margin-top: -12px;
            padding-top: -12px;
            color: green;
            font-weight: bold;
          }
        `;
    }

    constructor() {
        super();
        this.image = '';
        this.title = '';
        this.description = '';
        this.details = '';
    }

    render() {
        return html`
            <div class="card" @click="${this.handleClick}">
                <img src="${this.image}" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>${this.title}</b></h4>
                    <h6>${this.details}</h6>
                    <p>${this.description}</p>
                </div>
            </div>
        `;
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('handled-click'));
    }

}

window.customElements.define('card-component', CardComponent);
