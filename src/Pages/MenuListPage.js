import { html, css } from 'lit-element';
import '../components/AppLayout';
import '../components/CardMenu';
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
              grid-template-columns: repeat(3, 500px);
              grid-template-rows: 800px;
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
                        <card-menu .title="${list.name}" modelList="${list._id}" @handled-options="${this.goToList}"></card-menu>
                `)}
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
        await this.verifyRole(id);
    }

    async verifyRole(id) {
        const token = localStorage.getItem('token');
        const verify = await verifyAdmin(token);
        console.log(verify);
        if(verify.admin) {
            window.location = `/menuListPage/list/${id}`;
        } else if (verify.sales) {
            window.location = `/menuListPage/list/${id}`;
        } else {
            window.location = `/menuListPage/list/${id}`;
        }
    }

}


window.customElements.define('menu-list-page',MenuListPage);
