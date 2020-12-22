import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button';


class FieldLayout extends LitElement {
    static get properties() {
        return {
            list: String,
            idList: String,
            address: String,
            colonia: String,
            country: String,
            state: String,
            montoCesion: String,
            honorarios: String,
            total: String,
        }
    }

    static get styles() {
        return css`
            .content__layout {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 5px;
            }
        `;
    }

    constructor() {
        super();
        this.list = '';
        this.idList = '';
        this.address = '';
        this.colonia = '';
        this.country = '';
        this.state = '';
        this.montoCesion = 0;
        this.honorarios = 0;
        this.total = 0;
    }


    render() {
        return html`
            <div class="content__layout">
                <div>
                    <vaadin-text-field class="form-control" label="Lista" class="form-control" value="${this.list}"></vaadin-text-field>
                </div> 
                <div>
                    <vaadin-text-field class="form-control" label="IdLista" class="form-control" .value="${this.idList}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Direccion" class="form-control" .value="${this.address}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Colonia" class="form-control"  .value="${this.colonia}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Municipio" class="form-control" .value="${this.country}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Estado" class="form-control" .value="${this.state}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="MontoCesion" class="form-control" .value="${this.montoCesion}">
                        <div slot="prefix">$</div>
                    </vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Honorarios" class="form-control" .value="${this.honorarios}">
                        <div slot="prefix">$</div>
                    </vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Total" class="form-control" .value="${this.total}">
                        <div slot="prefix">$</div>
                    </vaadin-text-field>
                </div>
            </div>
            <vaadin-button @click="${this.updateData}">Actualizar</vaadin-button>
            <vaadin-button theme="error" @click="${this.cancel}">Cancelar</vaadin-button>
        `;
    }

    // TODO:Peguntar por que no se mandan los valores de las propiedades

    updateData(event) {
        const [Lista,IdLista,Direccion,Colonia,Municipio,Estado,MontoCesion,Honorarios,Total] = this.shadowRoot.querySelectorAll('.form-control');
        this.dispatchEvent(new CustomEvent('update-data', {
            bubbles: true,
            composed: true,
            detail: {
                lista: Lista.value,
                idLista: IdLista.value,
                direccion: Direccion.value,
                colonia: Colonia.value,
                municipio: Municipio.value,
                estado: Estado.value,
                montoCesion: MontoCesion.value,
                honorarios: Honorarios.value,
                total: Total.value,
            }
        }))
    }

    cancel(event) {
        this.dispatchEvent(new CustomEvent('cancel-update',{ composed: true }));
    }
}

window.customElements.define('field-layout', FieldLayout);
