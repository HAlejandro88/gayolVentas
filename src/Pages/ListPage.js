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

          .details {
            display: flex;
            font-size: 20px;
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
                        <vaadin-grid-filter-column width="25em" id="details" header="Direccion"></vaadin-grid-filter-column>
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
        //table.items = this.contentList;
        table.rowDetailsRenderer = (root, grid, model)  => {
            if (!root.firstElementChild) {
              root.innerHTML =
              '<div class="details">' +
              '<p><span></span><br>' +
              '<small></small></p>' +
              '</div>';
            }
            root.firstElementChild.querySelector('span').textContent = 'Direccion: ' + model.item.direccion + '!';
            root.firstElementChild.querySelector('small').textContent = model.item.colonia;
        
          };
       
        const detailsToggleColumn = this.shadowRoot.querySelector('#details');
        detailsToggleColumn.renderer = (root, column, model) => { 
            let detailDir = model.item.direccion.split(" ");
        if (!root.firstElementChild) {
            
            root.innerHTML = `<vaadin-checkbox>${detailDir[0]} ${detailDir[1]} ${detailDir[2]} ${detailDir[3]} ${detailDir[4] || ''} ${detailDir[5] || ''} ...</vaadin-checkbox>`;
            root.firstElementChild.addEventListener('checked-changed', function(e) {
            if (e.detail.value) {
                table.openItemDetails(root.item);
            } else {
                table.closeItemDetails(root.item);
            }
            });
        }
        root.item = model.item;
        //root.firstElementChild.checked = grid.detailsOpenedItems.indexOf(root.item) > -1;
        };
        this.__changeColorForStatus(this.contentList, table)
        if(list.data.length === 0) {
            notificationError.renderer = root => root.textContent = 'no hay datos en esta lista';
            notificationError.open();
        }
        this.edit(table);
        

        this.changePrice(list.data,table)
    }

    changePrice(data,table) {
        let newData = [];
        newData = data.map(item => {

            const options2 = { style: 'currency', currency: 'USD' };
            const numberFormat = new Intl.NumberFormat('en-US', options2)
            let total = numberFormat.format(item.total)
            let honorarios = numberFormat.format(item.honorarios);
            let montoCesion = numberFormat.format(item.montoCesion);
            let newValues = {...item, honorarios, montoCesion, total};
            return newValues
        });
        table.items = newData;
    }

    __changeColorForStatus(data, table) {
        data = data.map(item => {
            if(item.vendida) {
                const $columFilter = this.shadowRoot.querySelectorAll('vaadin-grid-filter-column')
                const $columSort = this.shadowRoot.querySelectorAll('vaadin-grid-sort-column')
                const $colum = this.shadowRoot.querySelector('vaadin-grid-column')
                for(let colFil of  $columFilter) {
                    colFil.style.backgroundColor = 'red';
                }
                for (let colSort of $columSort ) {
                    colSort.style.backgroundColor = 'red'
                }
            }
            return item
        })
        table.items = data
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
        console.log(data)
        let fechaContrato = new Date(data.fechaContrato).toLocaleDateString();
        let fechaPago = new Date(data.fechaPago).toLocaleDateString();
        const dialog = this.shadowRoot.querySelector('#dialog');
        const notification = this.shadowRoot.querySelector('vaadin-notification');
        const notificationError = this.shadowRoot.querySelector('#error');
        dialog.renderer = function(root, dialog) {
            root.innerHTML = `<field-layout cancelar expedienteAdmin="${data.expedienteAdmin == undefined ? '': data.expedienteAdmin}"  
                                            idLista="${data.idLista}"
                                            direccion="${data.direccion}"
                                            lista="${data.lista}"
                                            vendida="${data.vendida}"
                                            baja="${data.baja}"
                                            fechaContrato="${fechaContrato }"
                                            formaPago="${data.formaPago}"
                                            cuentaPago="${data.cuentaPago}"
                                            fechaPago="${fechaPago}"
                                            estatusAdmin="${data.estatusAdmin == undefined ? '' : data.estatusAdmin}"
                                            cliente="${data.cliente == undefined ? '' : data.cliente}"
                                            observacionesVenta="${data.observacionesVenta == undefined ? '' : data.observacionesVenta }"
                                            vendedor="${data.vendedor === undefined ? '' : data.vendedor}"
                                            jefeGrupo="${data.jefeGrupo == undefined ? '': data.jefeGrupo}"
                                            tipoVenta="${data.tipoVenta}"
                                            empresa="${data.empresa}"
                                            observacionesAdmin="${data.observacionesAdmin  == undefined ? '': data.observacionesAdmin}"
                                            contratoRealizado="${data.contratoRealizado == undefined ? '': data.contratoRealizado}" id="${id}">
                              </field-layout>`;
            const fieldLayout = root.querySelector('field-layout');
            fieldLayout.addEventListener('update-data', async ({ detail }) => {
                  let body = JSON.stringify(detail);
                  const response = await fetch(`https://gayol-app.herokuapp.com/api/v1/listSales/update/${id}`, {
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
    }

}

window.customElements.define('list-page', ListPage);








