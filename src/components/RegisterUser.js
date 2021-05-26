import { html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/vaadin-email-field.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-upload/vaadin-upload.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-toast/paper-toast';
import './AppLayout';
import {GayolController} from '../helpers/GayolController';


class RegisterUser extends GayolController {
    
    static get properties() {
        return {
            name: String,
            email: String,
            role: String,
            password: String,
            username: String,
            img: String,
        };
    }

    constructor() {
        super();
        this.name = '';
        this.email = '';
        this.role = '';
        this.password = '';
        this.username = '';
    }

    static get styles() {
        return css`
            .container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 10px;
              margin: 20px;
              padding: 10px;
              border: 1px solid grey;
              border-radius: 8px;
              
            }
            
          h2 {
            text-align: center;
          }
        `;
    }

    render() {
        return html`
            <app-layout>
                <h2>Registro de Usuarios</h2>
                <div class="container">
                    <vaadin-text-field class="form-control" label="Nombre"></vaadin-text-field>
                    <vaadin-email-field class="form-control" label="Email"></vaadin-email-field>
                    <vaadin-text-field class="form-control" label="Empresa"></vaadin-text-field>
                    <paper-dropdown-menu label="Role"  noink no-animations @selected-item-changed="${this.changeRole}">
                        <paper-listbox slot="dropdown-content" class="dropdown-content" selected="2">
                            <paper-item>admin</paper-item>
                            <paper-item>juridico</paper-item>
                            <paper-item>vendedor</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>
                    <vaadin-password-field class="form-control" label="Password"></vaadin-password-field>
                    <vaadin-text-field class="form-control" label="Username"></vaadin-text-field>
                    <vaadin-upload accept=".jpg" target="http://localhost:5000/api/v1/userImage">
                        <span slot="drop-label">Pura Imagen</span>
                    </vaadin-upload>
                    <vaadin-button @click="${this.register}">Editar</vaadin-button>
                    <paper-toast id="toast" text="usuario registrado"></paper-toast>
                </div>
                
            </app-layout>
            
        `;
    }

    changeRole({detail}) {
        this.role = detail.value.innerText;
    }

    async register(e) { //metodo manejador
        e.preventDefault();
        const [Nombre, Email, Empresa, Password, Username] = this.shadowRoot.querySelectorAll('.form-control');
        let body = {
                name: Nombre.value, 
                email: Email.value,
                empresa: Empresa.value,
                role: this.role,
                password: Password.value,
                username: Username.value
            };

            
        const registerResponse = await this.__request('auth/register' ,'POST', {}, body);
        this.shadowRoot.querySelector('#toast').open();

    }


}

window.customElements.define('register-user', RegisterUser)
