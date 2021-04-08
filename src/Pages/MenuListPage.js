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
          
          #vendi {
            --container-background: #47724F;
          }
          
          #baja {
            --container-background: #F96565;
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
                <div slot="content" class="content">
                    <card-menu id="vendi" title="Vendidas" modelList="vendidas" @handled-options="${this.goToVendidas}"></card-menu>
                    <card-menu id="baja" title="Bajas" modelList="bajas" @handled-options="${this.goToBajas}"></card-menu>
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
        this.masterList =[...this.masterList, ...lists.data];
    }

    async goToList(event) {
        const id = event.currentTarget.getAttribute('modelList');
        await this.verifyRole(id);
    }

    async verifyRole(id) {
        const token = localStorage.getItem('token');
        const verify = await verifyAdmin(token);
        if(verify.admin) {
            window.location = `/menuListPage/list/${id}`;
        } else if (verify.sale) {
            window.location = `/menuListPage/list-admin/${id}`;
        } else if (verify.juridico) {
          window.location = `/menuListPage/listJuridico/${id}`
        } else {
            window.location = `/menuListPage/list/${id}`;
        }
    }

    goToVendidas(event) {
        window.location = `/menuListPage/listSales/`;
    }

    goToBajas(event) {
        window.location = `/menuListPage/listDown`
    }

}


window.customElements.define('menu-list-page',MenuListPage);
