import {  LitElement,html,css  } from 'lit-element';
import '@vaadin/vaadin-upload';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import {GayolController} from "../helpers/GayolController";


class UploadDocuments extends GayolController {
    static get properties() {
        return {
            idList: String,
            user: String
        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
        this.idList = '';
        this.user = '';
    }


    render() {
        return html `
            <section class="first">
                <h5>Agrega la URl del mapa y sube la foto</h5>
                <vaadin-text-field label="Url Mapa"></vaadin-text-field>
                <vaadin-upload method="PUT"  target="https://otolum.com.mx/api/v1/listSales/${this.idList}/image">
                    <span slot="drop-label">Arrastre su photo </span>
                </vaadin-upload>
                <!--h5> Sube tus documentos</h5>
                <vaadin-upload id="upload" target="https://otolum.com.mx/api/v1/docs" @upload-request="${this.cloudDocuments}">
                    <span slot="drop-label">Arrastre sus documentos pdf</span>
                </vaadin-upload-->
                <vaadin-button model-id="${this.idList}" model-user="${this.user}" @click="${this.addListaPropia}">Añadir a mi lista</vaadin-button>
                <vaadin-button @click="${this.updateList}">Actualizar</vaadin-button>
            </section>
        `;
    }

    async updateList() {
        const mapa = this.shadowRoot.querySelector('vaadin-text-field');
        let body = {
            mapa: mapa.value
        }

        const changeList = await this.__request(`listSales/update/${this.idList}`,'PUT',{},body);
    }

    cloudDocuments(event) {
        event.detail.formData.append('listItem', this.id);
    }

    async getMe() {
        const token = localStorage.getItem('token');
        const BearerToken = `Bearer ${token}`;
        const headers = {
            'Authorization': BearerToken
        }
        const me = await this.__request('auth/me','GET',headers);
        this.user = me.data;

        //this.user.image = `https://otolum.com.mx/api/v1/auth/avatar/${this.user.image}`;
        this.user.image = `https://otolum.com.mx/api/v1/auth/avatar/${this.user.image}`;
    }

    async addListaPropia(event) {
        const user = event.currentTarget.getAttribute('model-user');
        const itemList = event.currentTarget.getAttribute('model-id');
        await this.getMe();
        let body = {
            user: this.user._id,
            lista: itemList
        }
        const addList = await (await fetch('https://otolum.com.mx/api/v1/propia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })).json();


    }
}


customElements.define('upload-documents',UploadDocuments)
