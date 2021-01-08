import { html, css } from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import {GayolController} from "../helpers/GayolController";

class MessagePage extends GayolController {
    static get properties() {
        return {
            user: Object
        }
    }

    constructor() {
        super();
        this.user = {};
    }


    render() {
        return html`
            <main>
                <div class="form">
                    <vaadin-text-field label="Titulo" class="form-control"></vaadin-text-field>
                    <vaadin-text-field label="Descripcion" class="form-control"></vaadin-text-field>
                    <vaadin-button @click="${this.addNew}">Agregar</vaadin-button>
                </div>
            </main>
        `;
    }

    async addNew(event) {
        const [Titulo,Descripcion] = this.shadowRoot.querySelectorAll('.form-control');
        const token = localStorage.getItem('token');
        const BearerToken = `Bearer ${token}`;
        const headers = {
            'Authorization': BearerToken
        }
        let body = {
            user: this.location.params.id,
            title: Titulo.value,
            description: Descripcion.value
        }
        const send = await this.__request('news','POST',headers,body);
        console.log(send);
    }


}

window.customElements.define('message-page' ,MessagePage)
