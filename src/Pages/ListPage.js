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
import '@vaadin/vaadin-grid/vaadin-grid-filter-column';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-notification';
import '../components/NavBar';
import '../components/FieldLayout';


class ListPage extends GayolController {
    static get properties() {
        return {
            idSelected: String,
            contentList: Array
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
        this.contentList = [];
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        //this.filter();
        await this._getHouses();
    }

    render() {
        return html`
            <vaadin-app-layout>
                <nav-bar @export-list="${this.exportList}"></nav-bar>
                <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
                    <vaadin-tab tab-page="home">
                        <iron-icon icon="vaadin:home"></iron-icon>
                        <a href="/dashboard">Home</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="list">
                        <iron-icon icon="vaadin:list"></iron-icon>
                        <a href="/menuListPage">Lista</a>
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
                        <vaadin-grid-filter-column width="8em" path="idLista" header="Id"></vaadin-grid-filter-column>
                        <vaadin-grid-filter-column width="80em" path="direccion" header="Direccion"></vaadin-grid-filter-column>
                        <vaadin-grid-filter-column width="15em" path="colonia" header="Colonia"></vaadin-grid-filter-column>
                        <vaadin-grid-filter-column width="15em" path="municipio" header="Municipio"></vaadin-grid-filter-column>
                        <vaadin-grid-filter-column width="15em" path="estado" header="Estado"></vaadin-grid-filter-column>
                        <vaadin-grid-sort-column width="15em" path="montoCesion"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="15em" path="honorarios"></vaadin-grid-sort-column>
                        <vaadin-grid-filter-column width="15em" path="total" header="total"></vaadin-grid-filter-column>
                        <vaadin-grid-sort-column width="18em" path="expedienteAdmin"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="fechaContrato"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="15em" path="formaPago"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="cuentaPago"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="fechaPago"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="15em" path="estatusAdmin"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="15em" path="cliente"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="observacionesVenta"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="vendedor"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="jefeGrupo"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="tipoVenta"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="empresa"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="observacionesAdmin"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="18em" path="contratoRealizado"></vaadin-grid-sort-column>
                        <vaadin-grid-filter-column width="18em" path="status" header="status"></vaadin-grid-filter-column>
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
        this.contentList = list.data;
        const table = this.shadowRoot.querySelector('vaadin-grid');
        table.items = this.contentList;
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


    filter() {
        const address = this.shadowRoot.querySelector('address');
        address.headerRenderer = (root) => {
            root.innerHTML =
                '<vaadin-grid-filter path="email">' +
                '  <vaadin-text-field slot="filter" focus-target label="Email" style="max-width: 100%" theme="small"></vaadin-text-field>' +
                '</vaadin-grid-filter>';
            root.querySelector('vaadin-text-field').addEventListener('value-changed', function(e) {
                root.querySelector('vaadin-grid-filter').value = e.detail.value;
            });
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


    async exportList(event) {
        const download = await fetch('http://localhost:5000/api/v1/listSales/export', {
            method: 'POST',
            body: JSON.stringify(this.contentList)
        });

        console.log(download);
    }

}

window.customElements.define('list-page', ListPage);








