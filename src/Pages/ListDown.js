import { LitElement,html,css } from 'lit-element'
import {GayolController} from "../helpers/GayolController";
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column';
import '@vaadin/vaadin-dialog';
import '../components/AppLayout';


class ListDown extends GayolController {
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

          .details {
            display: flex;
            font-size: 20px;
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
                    <vaadin-grid-filter-column width="35em" id="details" header="Direccion"></vaadin-grid-filter-column>
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
        const sales = await this.__request('listSales/list/down');
        console.log(sales)
        const $grid = this.shadowRoot.querySelector('vaadin-grid');
        this.sales = sales.data;
        $grid.items = this.sales;
        $grid.rowDetailsRenderer = (root, grid, model)  => {
            if (!root.firstElementChild) {
              root.innerHTML =
              '<div class="details">' +
              '<p><span></span><br>' +
              '<small></small></p>' +
              '</div>';
            }
            root.firstElementChild.querySelector('span').textContent = 'Direccion: ' + model.item.direccion;
            root.firstElementChild.querySelector('small').textContent = model.item.colonia;
        
          };
       
          const detailsToggleColumn = this.shadowRoot.querySelector('#details');
            detailsToggleColumn.renderer = (root, column, model) => { 
                let detailDir = model.item.direccion.split(" ");
            if (!root.firstElementChild) {
                
                root.innerHTML = `<vaadin-checkbox>${detailDir[0]} ${detailDir[1]} ${detailDir[2]} ${detailDir[3]} ${detailDir[4] || ''} ${detailDir[5] || ''}...</vaadin-checkbox>`;
                root.firstElementChild.addEventListener('checked-changed', function(e) {
                if (e.detail.value) {
                    $grid.openItemDetails(root.item);
                } else {
                    $grid.closeItemDetails(root.item);
                }
                });
            }
            root.item = model.item;
            //root.firstElementChild.checked = grid.detailsOpenedItems.indexOf(root.item) > -1;
            };
        await this.requestUpdate()
    }
}



customElements.define('list-down', ListDown)
