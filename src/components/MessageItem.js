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

          }

          .message__header img {
            border-radius: 50%;
            max-height: 20%;
            width: 20%;
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
            text-align: justify;
            letter-spacing: normal;
            font-size: 12px;
          }

          .ultimate {
            border: 1px solid blue;
          }
        `;
    }


    constructor() {
        super();
        this.image = ''
        this.title = ''
        this.description = ''
        this.date = `${new Date().toLocaleString()}`;
    }



    render() {
        return html`
            <div class="message">
                <div class="message__header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCvhDQ-7aPUrjAmCwud6tNJD0sHYtveUKlQ&usqp=CAU" alt=""/>
                    <h4>${this.title}</h4>
                    <h6>${this.date}</h6>
                </div>
                <div class="message__content">
                    <p>${this.description}</p>
                </div>
            </div>
        `;
    }
}


window.customElements.define('message-item', MessageItem);
