import {  LitElement,html,css  } from 'lit-element';
import '@vaadin/vaadin-upload';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import {GayolController} from "../helpers/GayolController";


class UploadDocuments extends GayolController {
    static get properties() {
        return {
            idList: String
        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
        this.idList = '';
    }


    render() {
        return html `
            <section class="first">
                <h5>Agrega la URl del mapa y sube la foto</h5>
                <vaadin-text-field label="Url Mapa"></vaadin-text-field>
                <vaadin-upload method="PUT"  target="https://gayol-app.herokuapp.com/api/v1/listSales/${this.idList}/image">
                    <span slot="drop-label">Arrastre su photo </span>
                </vaadin-upload>
                <!--h5> Sube tus documentos</h5>
                <vaadin-upload id="upload" target="https://gayol-app.herokuapp.com/api/v1/docs" @upload-request="${this.cloudDocuments}">
                    <span slot="drop-label">Arrastre sus documentos pdf</span>
                </vaadin-upload-->
                
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
}


customElements.define('upload-documents',UploadDocuments)
