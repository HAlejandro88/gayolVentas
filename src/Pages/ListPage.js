import { html, css } from 'lit-element';
import {GayolController} from "../helpers/GayolController";
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-notification';
import '../components/NavBar';
import '../components/FieldLayout';

class ListPage extends GayolController {
    static get properties() {
        return {
            idSelected: String
        }
    }

    static get styles() {
        return css`
          vaadin-grid {
            height: 90vh;
          }
        `;
    }

    constructor() {
        super();
        this.idSelected = '';
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this._getHouses();
    }

    render() {
        return html`
            <vaadin-app-layout>
                <nav-bar></nav-bar>
                <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
                    <vaadin-tab tab-page="home">
                        <iron-icon icon="vaadin:home"></iron-icon>
                        <a href="/dashboard">Home</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="list">
                        <iron-icon icon="vaadin:list"></iron-icon>
                        <a href="/menulistPage">Lista</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="uploadList">
                        <iron-icon icon="vaadin:options"></iron-icon>
                        <a href="/uploadList">Subir Listas</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="search">
                        <iron-icon icon="vaadin:search"></iron-icon>
                        <a href="/search">Buscador</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="register">
                        <iron-icon icon="vaadin:clipboard-text"></iron-icon>
                        <a href="/register">Registro</a>
                    </vaadin-tab>
                    <vaadin-tab @click="${this.logOut}">
                        <iron-icon icon="vaadin:out"></iron-icon>
                        Cerrar Sesión
                    </vaadin-tab>
                </vaadin-tabs>
                <div class="content">
                    <vaadin-grid theme="row-dividers" column-reordering-allowed multi-sort>
                        <vaadin-grid-sort-column width="8em" path="lista"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="idLista"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="direccion"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="colonia"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="municipio"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="estado"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="montoCesion"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="honorarios"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="total"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="observacionesVentas"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="cliente"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="numeroCredito"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="deudor"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="expediente"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="juzgado"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="estatusLista"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="jurisdiccion"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="fechaPago"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="recuperadora"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="brooker"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="solicitante"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="empresa"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="estatusJuridico"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="fechaSolicitud"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="cometario1"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="cometario2"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="cometario3"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="fechaFirmaCesion"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="tramite"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="registroQuienLLenoCampos"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="8em" path="status"></vaadin-grid-sort-column>
                        <vaadin-grid-column></vaadin-grid-column>
                    </vaadin-grid>
                    <vaadin-dialog id="dialog"></vaadin-dialog>
                    <vaadin-notification duration="4000" position="top-end" theme="success"></vaadin-notification>
                    <vaadin-notification id="error" duration="4000" position="top-end" theme="error"></vaadin-notification>
                    
                </div>
            </vaadin-app-layout>

        `;
    }

    async _getHouses() {
        const notificationError = this.shadowRoot.querySelector('#error');
        const list = await this.__request(`listSales/master/${this.location.params.id}`,'GET');
        const table = this.shadowRoot.querySelector('vaadin-grid');
        table.items = list.data;
        if(list.data.length === 0) {
            notificationError.renderer = root => root.textContent = 'no hay datos en esta lista';
            notificationError.open();
        }
        this.edit(table);
    }

    edit(table) {
        const columns = this.shadowRoot.querySelector('vaadin-grid-column');
        columns.headerRenderer = root => root.textContent = 'Controls'
        columns.renderer = (root, column, rowData) => {
            root.innerHTML = '';
            const btn = document.createElement('vaadin-button');
            btn.innerHTML = `<iron-icon icon="vaadin:edit"></iron-icon icon="vaadin:out">`;
            btn.addEventListener('click', async (event) => {
                this.idSelected = rowData.item._id;
                await this.createModal(this.idSelected);
            });
            root.appendChild(btn);
        }
    }

        // FIXME: arreglar que renderise despues de actualizar
        // FIXME: cerrar el modal despues de actualizar
        // FIXME: arreglar que se pueda actualizar los elementos de una lista subida por xlsx

    async createModal(id) {
        const { data } = await this.__request(`listSales/${id}`,'GET' ,{});
        const dialog = this.shadowRoot.querySelector('#dialog');
        const notification = this.shadowRoot.querySelector('vaadin-notification');
        const notificationError = this.shadowRoot.querySelector('#error');
        dialog.renderer = function(root, dialog) {
            console.log(root, 'root');
            root.innerHTML = `<field-layout cancelar list="${data.lista}" idList="${data.idLista}" 
                                            address="${data.direccion}" colonia="${data.colonia}" 
                                            country="${data.municipio}" state="${data.estado}"
                                            montoCesion="${data.montoCesion}" honorarios="${data.honorarios}"
                                            total="${data.total}" id="${id}">
                              </field-layout>`;
            const fieldLayout = root.querySelector('field-layout');
            fieldLayout.addEventListener('update-data', async ({ detail }) => {
                  let body = JSON.stringify(detail);
                  const response = await fetch(`http://localhost:5000/api/v1/listSales/update/${id}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body
                  });
                const update = await response.json();
                 if (update.success) {
                     notification.renderer = root => root.textContent = 'se han cambiado los valores';
                     notification.open();
                     await this.requestUpdate();

                 } else {
                     notificationError.renderer = root => root.textContent = `${update.error}`;
                     notificationError.open();
                 }

            });


            fieldLayout.addEventListener('cancel-update', event => {
                dialog.opened = false;
            });

        };

        dialog.opened = true;
    }

    logOut() {
        localStorage.removeItem('token');
        window.location = '/login';
    }

}

window.customElements.define('list-page', ListPage);








