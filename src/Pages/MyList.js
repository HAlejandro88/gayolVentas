import {  html, css } from 'lit-element';
import '../components/AppLayout';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column'
import {GayolController} from "../helpers/GayolController";


class MyList extends GayolController {

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
               </vaadin-grid>
           </app-layout>
        `;
    }

    async getListSales() {
        const list = await this.__request(`propia/${this.location.params.id}`,'GET');

        let sacaLista = list.data.map(item =>  item.lista );

        const table = this.shadowRoot.querySelector('vaadin-grid');
        //table.items = list.data;
        table.rowDetailsRenderer = (root, grid, model)  => {
            if (!root.firstElementChild) {
                root.innerHTML =
                    '<div class="details">' +
                    '<p><span></span><br>' +
                    '<small></small></p>' +
                    '</div>';
            }
            root.firstElementChild.querySelector('span').textContent = 'Direccion: ' + model.item.direccion ;
            root.firstElementChild.querySelector('small').textContent = model.item.colonia;

        };

        const detailsToggleColumn = this.shadowRoot.querySelector('#details');
        detailsToggleColumn.renderer = (root, column, model) => {
            let detailDir = model.item.direccion.split(" ");

                root.innerHTML = `<vaadin-checkbox>${detailDir[0]} ${detailDir[1]} ${detailDir[2]} ${detailDir[3] || ''} ${detailDir[4] || ''}...</vaadin-checkbox>`;
                root.firstElementChild.addEventListener('checked-changed', function(e) {
                    if (e.detail.value) {
                        table.openItemDetails(root.item);
                    } else {
                        table.closeItemDetails(root.item);
                    }
                });

            root.item = model.item;
            //root.firstElementChild.checked = grid.detailsOpenedItems.indexOf(root.item) > -1;
        };
        this.changePrice(sacaLista, table)
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

window.customElements.define('my-list', MyList);
