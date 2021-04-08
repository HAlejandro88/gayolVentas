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

class ListJuridicoPage extends GayolController {

    static get styles() {
        return css`
          vaadin-grid {
            height: 90vh;
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
                    <vaadin-grid-filter-column width="80em" path="direccion" header="Direccion"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="15em" path="colonia" header="Colonia"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="15em" path="municipio" header="Municipio"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="15em" path="estado" header="Estado"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column width="15em" path="montoCesion"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="15em" path="honorarios"></vaadin-grid-sort-column>
                    <vaadin-grid-filter-column width="15em" path="total" header="total"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="15em" path="cartera"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="12em" path="numeroCredito"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="12em" path="deudor"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="expediente"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column width="18em" path="juzgado"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="18em" path="estatusLista"></vaadin-grid-sort-column>
                    <vaadin-grid-filter-column width="18em" path="avaluo"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="saldoPendiente"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column width="18em" path="jurisdiccion"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="18em" path="descripcion"></vaadin-grid-sort-column>
                    <vaadin-grid-filter-column width="18em" path="recuperadora"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column width="18em" path="brooker"></vaadin-grid-sort-column>
                    <vaadin-grid-filter-column width="18em" path="solicitante"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column width="18em" path="estatusJuridico"></vaadin-grid-sort-column>
                    <vaadin-grid-filter-column width="18em" path="fechaSolicitud"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column width="18em" path="comentario1J"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="18em" path="comentario2J"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="18em" path="comentario3J"></vaadin-grid-sort-column>
                    <vaadin-grid-filter-column width="18em" path="cliente"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="fechaPago"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="observacionesVenta"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="empresa"></vaadin-grid-filter-column>
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
        const list = await this.__request(`listSales/master/${this.location.params.id}`,'GET');
        const table = this.shadowRoot.querySelector('vaadin-grid');
        this.edit(table);
        this.changePrice(list.data,table);
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
            root.innerHTML = `<juridico-layout cancelar cartera="${data.cartera == undefined ? '' : data.cartera}"
                                                vendida="${data.vendida}"
                                                baja="${data.baja}"
                                                deudor="${data.deudor == undefined ? '' : data.deudor}"
                                                expediente="${data.expediente == undefined ? '' : data.expediente }"
                                                juszgado="${data.juzgado == undefined ?data.juzgado : ''}"
                                                estatusLista="${data.estatusLista == undefined ? '' : data.estatusLista}"
                                                avaluo="${data.avaluo == undefined ? '' : data.avaluo}"
                                                saldo="${data.saldoPendiente == undefined ? data.saldoPendiente : ''}"
                                                jurisdiccion="${data.jurisdiccion == undefined ? '' : data.jurisdiccion}"
                                                descripcion="${data.descripcion == undefined ? '' : data.descripcion}"
                                                recuperadora="${data.recuperadora == undefined ? '' : data.recuperadora}"
                                                brooker="${data.brooker == undefined ? '' : data.brooker}"
                                                solicitante="${data.solicitante == undefined ? '' : data.solicitante}"
                                                estatusJuridico="${data.estatusJuridico  == undefined ? '' : data.estatusJuridico}"
                                                solicitud="${data.fechaSolicitud == undefined ? data.fechaSolicitud : ''}"
                                                comentario1="${data.comentario1J == undefined ? data.comentario1J : ''}"
                                                comentario2="${data.comentario2J == undefined ? data.comentario2J : ''}"
                                                comentario3="${data.comentario3J == undefined ? data.comentario3J : ''}"
                                                firma="${data.fechaFirmaCesion == undefined ? data.fechaFirmaCesion : ''}"
                                                tramite="${data.tramite == undefined ? data.tramite : ''}">
        
                              </juridico-layout>`;
            const fieldLayout = root.querySelector('juridico-layout');
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
}

window.customElements.define('list-juridico-page',ListJuridicoPage)
