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
import '@vaadin/vaadin-dialog';
import '../components/FieldLayout';

class ListPage extends GayolController {
    static get properties() {
        return {
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
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this._getHouses();
    }

    render() {
        return html`
            <vaadin-app-layout>
                <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
                <img slot="navbar" src="https://i.imgur.com/GPpnszs.png" alt="Vaadin Logo" width="100" height="31" referrerpolicy="no-referrer">
                <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
                    <vaadin-tab tab-page="home">
                        <iron-icon icon="vaadin:home"></iron-icon>
                        <a href="/dashboard">Home</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="list">
                        <iron-icon icon="vaadin:list"></iron-icon>
                        <a href="/list">Lista</a>
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
                        <vaadin-grid-sort-column width="3em" path="lista"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="3em" path="idLista"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="5em" path="direccion"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="5em" path="colonia"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="5em" path="municipio"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="5em" path="estado"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="5em" path="montoCesion"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="5em" path="honorarios"></vaadin-grid-sort-column>
                        <vaadin-grid-sort-column width="5em" path="total"></vaadin-grid-sort-column>
                        <vaadin-grid-column></vaadin-grid-column>
                    </vaadin-grid>
                </div>
            </vaadin-app-layout>

        `;
    }

    async _getHouses() {
        const list = await this.__request("listSales",'GET');
        const table = this.shadowRoot.querySelector('vaadin-grid');
        table.items = list.data;
        this.edit();
        //table.addEventListener('active-item-changed', event => {
        //    const id = event.detail.value.id;
        //})
    }

    edit(table) {
        const columns = this.shadowRoot.querySelector('vaadin-grid-column');
        columns.headerRenderer = root => root.textContent = 'Controls'
        columns.renderer = (root, column, rowData) => {
            root.innerHTML = '';
            const btn = document.createElement('vaadin-button');
            btn.innerHTML = `<iron-icon icon="vaadin:edit"></iron-icon icon="vaadin:out">`;
            btn.addEventListener('click', function(event) {
                table.addEventListener('active-item-changed', event => {
                        const id = event.detail.value.id;

                })
            });
            root.appendChild(btn);
        }
    }


    createModal() {

    }

    openDialog() {
        const dialog = this.shadowRoot.querySelector('#dialog');
        dialog.renderer = (root, _dialog) => {
            root.textContent = 'hola';
        }
        dialog.opened = true;
    }





}

window.customElements.define('list-page', ListPage);








