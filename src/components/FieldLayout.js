import { LitElement, html } from 'lit-element';
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
                    <vaadin-text-field class="form-control" label="lista" .value="${this.list}"></vaadin-text-field>
                </div> 
                <div>
                    <vaadin-text-field class="form-control" label="idLista" .value="${this.idList}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="direccion" .value="${this.address}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="colonia" .value="${this.colonia}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="municipio" .value="${this.country}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="estado" .value="${this.state}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="montoCesion" .value="${this.montoCesion}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="honorarios" .value="${this.honorarios}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="total" .value="${this.total}"></vaadin-text-field>
                </div>
            </div>
            <vaadin-button @click="${this.updateData}">Actualizar</vaadin-button>
        `;
    }

    updateData(event) {
        this.dispatchEvent(new CustomEvent('update-data', {
            detail: {
                list: this.list,
                idList: this.idList,
                address: this.address,
                colonia: this.colonia,
                country: this.country,
                state: this.state,
                montoCesion: this.montoCesion,
                honorarios: this.honorarios,
                total: this.total,
            }
        }))
    }
}

window.customElements.define('field-layout', FieldLayout);
