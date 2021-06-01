import { LitElement,html,css } from 'lit-element'
import {GayolController} from "../helpers/GayolController";
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column';
import '@vaadin/vaadin-dialog';
import '../components/AppLayout';


class ListSalePage extends GayolController {
    static get properties() {
        return {
            sales: Array
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
        this.sales = [];
    }

    render() {
        return html`
            <app-layout>
                <vaadin-grid>
                    <vaadin-grid-sort-column width="8em" path="lista"></vaadin-grid-sort-column>
                    <vaadin-grid-filter-column width="8em" path="idLista" header="Id"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="80em" path="direccion" header="Direccion"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="15em" path="colonia" header="Colonia"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="15em" path="municipio" header="Municipio"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column width="15em" path="estado" header="Estado"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column width="15em" path="montoCesion"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="15em" path="honorarios"></vaadin-grid-sort-column>
                    <vaadin-grid-filter-column width="15em" path="total" header="total"></vaadin-grid-filter-column>
                </vaadin-grid>
            </app-layout>
            
        `;
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this._getAllSales()
    }


    async _getAllSales() {
        const sales = await this.__request('listSales/list/vendida');
        const $grid = this.shadowRoot.querySelector('vaadin-grid');
        this.sales = sales.data;
        this.changePrice(this.sales, $grid)

        await this.requestUpdate()
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



customElements.define('list-sale-page', ListSalePage)
