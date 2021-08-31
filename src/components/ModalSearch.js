import {  LitElement, css, html  } from 'lit-element';
import {GayolController} from "../helpers/GayolController";
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';


class ModalSearch extends GayolController {
    static get properties () {
        return {
            docs:  Array,
            id: String
        }
    }

    static get styles () {
        return css`
            a {
              text-decoration: none;
              color: black;
            }
        `;
    }

    constructor () {
        super();
        this.docs = [];
        this.id = '';
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.getDocs();
    }

    render () {
        return html`
            ${this.docs.length > 0 ? html`
                ${this.docs.map((doc,index) => html`
                <div class="documents">
                    <a href="https://otolum.com.mx/api/v1/docs/document/${doc.filename}">
                        Documento ${index + 1}
                        <iron-icon icon="vaadin:file-table"></iron-icon>
                    </a>
                </div>
            `)}
            `: html`
                <h2>No hay Documentos</h2>
            `}
           
        `;
    }

    async getDocs() {
       const documents = await this.__request(`docs/list/${this.id}`,'GET');
        documents.data.file;
        const [legal] = documents.data;
        this.docs = legal.file;
    }
}

window.customElements.define('modal-search',ModalSearch);
