import { html, css } from 'lit-element';
import '../components/AppLayout';
import '../components/CardComponent';
import {GayolController} from "../helpers/GayolController";

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
              grid-template-rows: 200px;
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
                        <card-component .title="${list.name}" modelList="${list._id}" @handled-click="${this.goToList}"></card-component>
                `)}
                </div>
            </app-layout>
        `;
    }

    async getMasterLists() {
        const lists = await this.__request('master');
        this.masterList = lists.data;
    }

    goToList(event) {
        const id = event.currentTarget.getAttribute('modelList');
         window.location = `/menuListPage/list/${id}`;
    }

}


window.customElements.define('menu-list-page',MenuListPage);
