import {  html, css } from 'lit-element';
import '../components/AppLayout';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import {GayolController} from "../helpers/GayolController";


class ListAdminPage extends GayolController {

    static get styles() {
        return css`
          vaadin-grid {
            height: 90vh;
          }
        `;
    }

    constructor() {
        super();
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.getListSales();
    }

    render() {
        return html`
           <app-layout>
               <vaadin-grid theme="row-dividers" column-reordering-allowed multi-sort>
                    <vaadin-grid-sort-column width="10em" path="lista"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="8em" path="idLista"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="8em" path="direccion"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="8em" path="colonia"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="8em" path="municipio"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="8em" path="estado"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="8em" path="montoCesion"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="8em" path="honorarios"></vaadin-grid-sort-column>
                    <vaadin-grid-sort-column width="8em" path="total"></vaadin-grid-sort-column>
               </vaadin-grid>
           </app-layout>
        `;
    }

    async getListSales() {
        const list = await this.__request(`listSales/master/${this.location.params.id}`,'GET');
        const table = this.shadowRoot.querySelector('vaadin-grid');
        table.items = list.data;
    }
}

window.customElements.define('list-admin-page', ListAdminPage);
