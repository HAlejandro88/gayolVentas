import { html, css} from 'lit-element';
import '../components/AppLayout';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-notification';
import '../components/JuridicoLayout';
import {GayolController} from "../helpers/GayolController";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class ListCesionJuridico extends GayolController {
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
            `;
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

customElements.define('list-cesion-juridico', ListCesionJuridico);
