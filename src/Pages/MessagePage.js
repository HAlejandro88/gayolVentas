import { html, css } from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '../components/AppLayout';
import '@vaadin/vaadin-notification';
import {GayolController} from "../helpers/GayolController";

class MessagePage extends GayolController {
    static get properties() {
        return {
            avatar: String
        }
    }

    static get styles() {
        return css`
          main {
            padding: 10px;
          }
          
          .form-control {
            border-radius: 5px;
            display: grid;
            grid-template-columns: 80vw;
            grid-gap: 10px;
            margin: 2px;
            padding: 10px;
          }

          input {
            border: none;
            height: 200px;
            outline: none;
            width: 80vw;
          }
        `;
    }

    constructor() {
        super();
        this.avatar = '';
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.getAvatar();
    }


    render() {
        return html`
            <app-layout>
                <main>
                    <div class="form">
                        <vaadin-text-field label="Titulo" class="form-control"></vaadin-text-field>
                        <input type="text" label="Description" placeholder="Description..." class="form-control">
                        <vaadin-button @click="${this.addNew}">Agregar</vaadin-button>
                    </div>
                    <vaadin-notification duration="4000" position="top-end" theme="success"></vaadin-notification>
                </main>
            </app-layout>
        `;
    }

    async addNew(event) {
        const [Titulo,Descripcion] = this.shadowRoot.querySelectorAll('.form-control');
        const notification = this.shadowRoot.querySelector('vaadin-notification');
        const token = localStorage.getItem('token');
        const BearerToken = `Bearer ${token}`;
        const headers = {
            'Authorization': BearerToken
        }
        let body = {
            user: this.location.params.id,
            title: Titulo.value,
            description: Descripcion.value,
            avatar: this.avatar
        }
        const send = await this.__request('news','POST',headers,body);
        notification.renderer = root => root.textContent = 'se agrego su mensaje';
        notification.open();

    }

    async getAvatar() {
        const token = localStorage.getItem('token');
        const BearerToken = `Bearer ${token}`;
        const headers = {
            'Authorization': BearerToken
        }
        const me = await this.__request('auth/me','GET',headers);
        //this.avatar = `https://gayol-app.herokuapp.com/api/v1/auth/avatar/${me.data.image}`;
        this.avatar = `https://gayol-app.herokuapp.com/api/v1/auth/avatar/${me.data.image}`;
    }


}

window.customElements.define('message-page' ,MessagePage)
