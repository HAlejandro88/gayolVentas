import {LitElement, html, css} from 'lit-element';
import '../components/AppLayout';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column'
import {GayolController} from "../helpers/GayolController";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class ListDownAdmin extends GayolController {
    static get properties() {
        return {

        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
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
        `
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
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
            </app-layout>
        `;
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this._getAllSales()
    }


    async _getAllSales() {
        const sales = await this.__request('listSales/list/down');
        const $grid = this.shadowRoot.querySelector('vaadin-grid');
        this.sales = sales.data;
        $grid.rowDetailsRenderer = (root, grid, model)  => {
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
                
                root.innerHTML = `<vaadin-checkbox>${detailDir[0]}...</vaadin-checkbox>`;
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

customElements.define('list-down-admin', ListDownAdmin);
