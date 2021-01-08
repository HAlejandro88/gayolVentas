import { html, css } from 'lit-element';
import '../components/FieldLayout';
import '../components/AppLayout';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-notification';
import {GayolController} from "../helpers/GayolController";

class AddList extends GayolController {
    static get styles() {
        return css`
            .content {
              padding: 10px;
            }
          
          .form-control {
            border: 1px solid grey;
            border-radius: 5px;
            display: grid;
            grid-template-columns: 80vw;
            grid-gap: 10px;
            margin: 2px;
            padding: 10px;
          }

          input {
            border: none;
            height: 200px;
            outline: none;
            width: 80vw;
          }
        `;
    }


    render() {
        return html`
            <app-layout>
                <div class="form-control">
                    <vaadin-text-field label="Nombre" class="form"></vaadin-text-field>
                    <input type="text" label="Description" placeholder="Description..." class="form">
                   <vaadin-button @click="${this.add}">Agregar</vaadin-button>
                    <vaadin-notification duration="4000" position="top-end" theme="success"></vaadin-notification>
                </div>
            </app-layout>
        `;
    }

    async add(event) {
        const [ Nombre,Description ] = this.shadowRoot.querySelectorAll('.form');
        const notificacion = this.shadowRoot.querySelector('vaadin-notification');
        let body = {
            name: Nombre.value,
            fewDescription: Description.value
        }

        const send = await this.__request('master','POST',{},body);
        notificacion.renderer = root => root.textContent = send. message;
        notificacion.open();

    }


}

window.customElements.define('add-list',AddList)
