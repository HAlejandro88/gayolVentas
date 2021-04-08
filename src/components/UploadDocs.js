import {  LitElement,html,css  } from 'lit-element';
import '@vaadin/vaadin-upload';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import {GayolController} from "../helpers/GayolController";


class UploadDocs extends GayolController {
    static get properties() {
        return {
            id: String
        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
        this.id = '';
    }


    render() {
        return html `
            <section class="first">
                <h5> Sube tus documentos</h5>
                <vaadin-upload id="upload" target="https://gayol-app.herokuapp.com/api/v1/docs" @upload-request="${this.cloudDocuments}">
                    <span slot="drop-label">Arrastre sus documentos pdf</span>
                </vaadin-upload>
                
            </section>
        `;
    }


    cloudDocuments(event) {
        event.detail.formData.append('listItem', this.id);
    }
}


customElements.define('upload-docs',UploadDocs)
