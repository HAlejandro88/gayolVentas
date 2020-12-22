import { LitElement, html, css } from 'lit-element';


class ListAdminPage extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <h1>List Admin</h1>
        `;
    }
}

window.customElements.define('list-admin-page', ListAdminPage);
