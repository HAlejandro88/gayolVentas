import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import '../components/NavBar';
import {  login, verify, verifyAdmin  } from '../helpers/auth';

class AppLayout extends LitElement {
    static get properties() {
        return {
            juridico: { type: Boolean, reflect: true }
        }
    }
    static get styles() {
        return css`
          :host {
            margin: 0;
            padding: 0;
          }
            .content {
              background-color:#F7F9F9;
              margin: 0 ;
              padding: 0 ;
              height: 100vh;
            }
          vaadin-app-layout {
            margin: 0;
            padding-top: 0;
            background-color:#F7F9F9;
          }
        `;
    }

    constructor() {
        super();
        this.juridico = false;
    }

    render() {
        return html`
            <vaadin-app-layout>
                <nav-bar></nav-bar>
                <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
                    <vaadin-tab tab-page="dashboard" @click="${this.__changePage}">
                        <iron-icon icon="vaadin:home"></iron-icon>
                        Home
                    </vaadin-tab>
                    <vaadin-tab tab-page="menulistPage" @click="${this.__changePage}">
                        <iron-icon icon="vaadin:list"></iron-icon>
                        Lista
                    </vaadin-tab>
                    <vaadin-tab tab-page="uploadList" @click="${this.__changePage}">
                        <iron-icon icon="vaadin:options"></iron-icon>
                        Subir Listas
                    </vaadin-tab>
                    <vaadin-tab tab-page="search" @click="${this.__changeSearch}">
                        <iron-icon icon="vaadin:search"></iron-icon>
                        Buscador
                    </vaadin-tab>
                    <vaadin-tab tab-page="register" @click="${this.__changePage}">
                        <iron-icon icon="vaadin:clipboard-text"></iron-icon>
                        Registro
                    </vaadin-tab>
                    <vaadin-tab @click="${this.logOut}">
                        <iron-icon icon="vaadin:out"></iron-icon>
                        Cerrar Sesión
                    </vaadin-tab>
                </vaadin-tabs>
                    <div class="content"> 
                        <slot name="title"></slot>
                        <slot name="content"></slot>
                        <slot></slot>
                    </div>
            </vaadin-app-layout>
        `;
    }

    __changePage(event) {
        const page = event.currentTarget.getAttribute('tab-page');
        window.location = page;
    }

    logOut() {
        //this.dispatchEvent(new CustomEvent('log-out'));
        localStorage.removeItem('token');
        window.location = '/login'
    }

    async __changeSearch(event) {
        const token = localStorage.getItem('token');
        const verified = await verifyAdmin(token);
        if(!verified.juridico)  {
            window.location = 'search'
        } else {
            window.location = 'searchJuridico'
        }
    }
}


window.customElements.define('app-layout', AppLayout);
