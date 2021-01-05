import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-tabs/vaadin-tabs';

class AppLayout extends LitElement {
    static get styles() {
        return css`
          :host {
            margin: 0;
            padding: 0;
          }
            .content {
              background:blanchedalmond;
              margin: 0;
              padding: 0;
            }
        `;
    }

    render() {
        return html`
            <vaadin-app-layout>
                <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
                <img slot="navbar" src="https://i.imgur.com/GPpnszs.png" alt="Vaadin Logo" width="100" height="31" referrerpolicy="no-referrer">
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
                    <vaadin-tab tab-page="search" @click="${this.__changePage}">
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
        this.dispatchEvent(new CustomEvent('log-out'));
    }
}


window.customElements.define('app-layout', AppLayout);
