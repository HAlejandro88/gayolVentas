import {css, html} from 'lit-element';

import '../components/AppLayout';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column';
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
                    <vaadin-grid-filter-column width="10em" path="lista"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="idLista"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="15em" path="direccion"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="12em" path="colonia"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="12em" path="municipio"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="estado"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="montoCesion"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="honorarios"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="18em" path="total"></vaadin-grid-filter-column>
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
                    <vaadin-grid-filter-column width="18em" path="fechaFirmaCesion"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column width="18em" path="tramite"></vaadin-grid-sort-column>
                </vaadin-grid>
            </app-layout>
        `;
    }

    async getListSales() {
        const list = await this.__request(`listSales/master/${this.location.params.id}`,'GET');
        const table = this.shadowRoot.querySelector('vaadin-grid');
        this.changePrice(list.data,table);

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
