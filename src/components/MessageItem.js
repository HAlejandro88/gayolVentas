import { LitElement, html, css } from 'lit-element';

class MessageItem extends LitElement {
    static get properties() {
        return {
            image: String,
            title: String,
            description: String,
            date: Date
        }
    }

    static get styles() {
        return css`
          .message {
            border-bottom: 0.5px solid grey;
            border-top: 0.5px solid grey;
            box-sizing: border-box;
            width: 100%;
          }

          .message .message__header {
            display: flex;
            justify-content: space-around;
            padding: 5px;
            font-size: 18px;
          }

          .message__header img {
            border-radius: 50%;
            max-height: 20%;
            width: 10%;
          }

          .message__header h4 {
            font-weight: bold;
            text-transform: capitalize;
          }

          .message__header h6 {
            align-self: flex-end;
            font-weight: bold;
            color: black;
          }


          .message .message__content {
            text-align: center;
            letter-spacing: normal;
            font-size: 22px;
          }

          .ultimate {
            border: 1px solid blue;
          }
          
          .baja {
            color: #F96565;
          }
          
          .vendida {
            color: #129121;
          }
        `;
    }


    constructor() {
        super();
        this.image = ''
        this.title = ''
        this.description = ''
        this.date = `${new Date().toDateString()}`;
    }


    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.date = new Date(this.date);
        this.date = this.date.toLocaleDateString();
    }


    render() {
        return html`
            <div class="message"> 
                <div class="message__header">
                    <img .src="${this.image}" alt=""/>
                    <h4 class="${this.title === 'Vendida'? 'vendida': this.title === 'Baja' ? 'baja' : '' }">${this.title}</h4>
                    <h4 class="${this.title === 'Vendida'? 'vendida': this.title === 'Baja' ? 'baja' : '' }">${this.date}</h4>
                </div>
                <div class="message__content">
                    <p class="${this.title === 'Vendida'? 'vendida': this.title === 'Baja' ? 'baja' : '' }">${this.description}</p>
                </div>
            </div>
        `;
    }
}


window.customElements.define('message-item', MessageItem);
