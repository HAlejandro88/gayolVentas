import {css, html} from 'lit-element';

import '../components/AppLayout';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-notification';
import '../components/JuridicoLayout';
import {GayolController} from "../helpers/GayolController";

class ListSaleJuridico extends GayolController {

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

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.getListSales();
    }

    render() {
        return html`
            <app-layout>
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
                <vaadin-grid-filter-column width="18em" path="cliente"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="18em" path="observacionesVenta"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="18em" path="fechaPago"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="18em" path="oficina"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="18em" path="empresa"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="12em" path="numeroCredito"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="12em" path="deudor"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="18em" path="expediente"></vaadin-grid-filter-column>
                <vaadin-grid-sort-column width="18em" path="juzgado"></vaadin-grid-sort-column>
                <vaadin-grid-sort-column width="18em" path="jurisdiccion"></vaadin-grid-sort-column>
                <vaadin-grid-filter-column width="18em" path="avaluo"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="18em" path="saldoPendiente"></vaadin-grid-filter-column>
                <vaadin-grid-sort-column width="18em" path="descripcion"></vaadin-grid-sort-column>
                <vaadin-grid-sort-column width="18em" path="estatusLista"></vaadin-grid-sort-column>
                <vaadin-grid-filter-column width="15em" path="cartera"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column width="18em" path="recuperadora"></vaadin-grid-filter-column>
                <vaadin-grid-sort-column width="18em" path="brooker"></vaadin-grid-sort-column>
                <vaadin-grid-filter-column width="18em" path="solicitante"></vaadin-grid-filter-column>
                <vaadin-grid-sort-column width="18em" path="estatusJuridico"></vaadin-grid-sort-column>
                <vaadin-grid-filter-column width="18em" path="fechaSolicitud"></vaadin-grid-filter-column>
                <vaadin-grid-sort-column width="18em" path="comentario1J"></vaadin-grid-sort-column>
                <vaadin-grid-sort-column width="18em" path="comentario2J"></vaadin-grid-sort-column>
                <vaadin-grid-sort-column width="18em" path="comentario3J"></vaadin-grid-sort-column>
                <vaadin-grid-sort-column width="18em" path="fechaFirmaCesion"></vaadin-grid-sort-column>
                <vaadin-grid-sort-column width="18em" path="tramite"></vaadin-grid-sort-column>
                <vaadin-grid-column></vaadin-grid-column>
                </vaadin-grid>
                <vaadin-dialog id="dialog"></vaadin-dialog>
                <vaadin-notification duration="4000" position="top-end" theme="success"></vaadin-notification>
                <vaadin-notification id="error" duration="4000" position="top-end" theme="error"></vaadin-notification>
            </app-layout>
        `;
    }

    async getListSales() {
        const sales = await this.__request('listSales/list/vendida');
        const table = this.shadowRoot.querySelector('vaadin-grid');
        this.edit(table);
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
                
                root.innerHTML = `<vaadin-checkbox>${detailDir[0]} ${detailDir[1]} ${detailDir[2]} ${detailDir[3]} ${detailDir[4] || ''} ${detailDir[5] || ''}...</vaadin-checkbox>`;
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

        this.changePrice(sales.data,table);
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

    async createModal(id) {
        const { data } = await this.__request(`listSales/${id}`,'GET' ,{});
        const dialog = this.shadowRoot.querySelector('#dialog');
        const notification = this.shadowRoot.querySelector('vaadin-notification');
        const notificationError = this.shadowRoot.querySelector('#error');
        dialog.renderer = function(root, dialog) {
            root.innerHTML = `<juridico-layout cancelar 
                                                lista="${data.lista}"
                                                idLista="${data.idLista}"
                                                direccion="${data.direccion}"
                                                colonia="${data.colonia}"
                                                municipio="${data.municipio}"
                                                estado="${data.estado}"
                                                montoCesion="${data.montoCesion}"
                                                honorarios="${data.honorarios}"
                                                total="${data.total}"
                                                solicitante="${data.solicitante == undefined ? '' : data.solicitante}"
                                                estatusJuridico="${data.estatusJuridico  == undefined ? '' : data.estatusJuridico}"
                                                solicitud="${data.fechaSolicitud }"
                                                comentario1="${data.comentario1J == undefined ? data.comentario1J : ''}"
                                                comentario2="${data.comentario2J == undefined ? data.comentario2J : ''}"
                                                comentario3="${data.comentario3J == undefined ? data.comentario3J : ''}"
                                                firma="${data.fechaFirmaCesion}"
                                                tramite="${data.tramite == undefined ? data.tramite : ''}">
        
                              </juridico-layout>`;
            const fieldLayout = root.querySelector('juridico-layout');
            fieldLayout.addEventListener('update-data', async ({ detail }) => {
                console.log(detail)
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
        table.items = newData.reverse();
    }
}

window.customElements.define('list-juridico-sale',ListSaleJuridico)
