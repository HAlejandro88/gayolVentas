import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-upload/vaadin-upload.js';

class UploadList extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super();
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
                    <h1>Importar Lista</h1>
                    <vaadin-upload accept=".xlsx" formDataName="list" target="http://localhost:5000/api/v1/listSales/upload">
                        <span slot="drop-label">Arrastre su archivo xlsx</span>
                    </vaadin-upload>
                </div>
            </vaadin-app-layout>
        `;
    }
}

window.customElements.define('upload-list', UploadList);
