import { html, css } from 'lit-element';
import '../components/AppLayout';
import '../components/CardMenu';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-list-box';
import '@vaadin/vaadin-item';
import '@vaadin/vaadin-icons';
import {GayolController} from "../helpers/GayolController";
import {verifyAdmin} from "../helpers/auth";

class MenuListPage extends GayolController {
    static get properties() {
        return {
            masterList: Array
        }
    }

    static get styles() {
        return css`
            .content {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 10px;
              padding: 15px;
            }
        `;
    }

    constructor() {
        super();
        this.masterList = [];
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.getMasterLists();
    }

    render() {
        return html`
            <app-layout>
                <h1 slot="title">Menu List</h1>
                <div slot="content" class="content">
                    ${this.masterList.map(list => html`
                        <card-menu .title="${list.name}" modelList="${list.name}" @handled-options="${this.goToList}"></card-menu>
                `)}
                    <vaadin-dialog id="dialog"></vaadin-dialog>
                </div>
            </app-layout>
        `;
    }

    async getMasterLists() {
        const lists = await this.__request('master');
        console.log(lists);
        this.masterList = lists.data;
    }

    async goToList(event) {
        const id = event.currentTarget.getAttribute('modelList');
        const dialog = this.shadowRoot.querySelector('#dialog');
        dialog.renderer = (root,_dialog) => {
            root.innerHTML = `
                <vaadin-list-box selected="0">
                  <vaadin-item>
                    <iron-icon icon="vaadin:upload"></iron-icon>
                    Subir Lista
                  </vaadin-item>
                  <vaadin-item>
                    <iron-icon icon="vaadin:rotate-right"></iron-icon>
                    Actualizar Lista
                  </vaadin-item>
                  <vaadin-item id="ver">
                    <iron-icon icon="vaadin:external-link"></iron-icon>
                    Ver Lista
                  </vaadin-item>
                </vaadin-list-box>
            `;
            const go = root.querySelector('#ver');
            go.addEventListener('click', async event => {
                await this.verifyRole(id);
            })
        }
        dialog.opened = true;
    }

    async verifyRole(id) {
        const token = localStorage.getItem('token');
        const verify = await verifyAdmin(token);
        console.log(verify);
        if(verify.admin) {
            window.location = `/menuListPage/list/${id}`;
        } else if (verify.sale) {
            window.location = `/menuListPage/list-admin/${id}`;
        } else {
            window.location = `/menuListPage/list/${id}`;
        }
    }

}


window.customElements.define('menu-list-page',MenuListPage);
