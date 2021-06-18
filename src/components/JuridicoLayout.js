import { LitElement,html,css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';

class JuridicoLayout extends LitElement {
    static get properties() {
        return {
            cartera: String,
            numeroCredito: String,
            deudor: String,
            expediente: String,
            juzgado: String,
            estatusLista: String,
            avaluo: String,
            saldoPendiente: String,
            jurisdiccion: String,
            descripcion: String,
            recuperadora: String,
            brooker: String,
            solicitante: String,
            estatusJuridico: String,
            fechaSolicitud: String,
            comentario1J: String,
            comentario2J: String,
            comentario3J: String,
            fechaFirmaCesion: String,
            tramite: String,
            cancelar: { type: Boolean, reflect: true },
            add: { type: Boolean, reflect: true },
            vendida: Boolean,
            baja: Boolean,
            lista: String,
            idLista: String,
            direccion: String,
            colonia: String,
            municipio: String,
            estado: String,
            montoCesion: String,
            honorarios: String,
            total: String,
        }
    }

    static get styles() {
        return css`
          .content__layout {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 5px;
          }
          input[type="date"]::-webkit-clear-button {
            display: none;
          }
          /* Removes the spin button */
          input[type="date"]::-webkit-inner-spin-button {
            display: none;
          }
          /* Always display the drop down caret */
          input[type="date"]::-webkit-calendar-picker-indicator {
            color: #2c3e50;
          }
          /* A few custom styles for date inputs */
          input[type="date"] {
            appearance: none;
            -webkit-appearance: none;
            color: #95a5a6;
            font-family: "Helvetica", arial, sans-serif;
            font-size: 18px;
            border:1px solid #ecf0f1;
            background:#ecf0f1;
            padding:5px;
            display: inline-block !important;
            visibility: visible !important;
          }
          input[type="date"], focus {
            color: #95a5a6;
            box-shadow: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
          }

          .search-date {
            margin-top: 8px;
            width: 69%;
            border: none;
            outline: none;
            padding: 10px 2px;
            margin-left:25px;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 2px;
            color: #5a84a2;
            font-size: 18px;
            border-radius: 40px;
            box-shadow: -2px -2px 8px rgba(255,255,255,1 ),
              -2px -2px 12px rgba(255,255,255,0.5 ),
            inset 2px 2px 4px rgba(255,255,255,0.1 ),
            2px 2px 8px rgba(255,255,255,0.15 )
          }
          .search-date:hover {
            box-shadow: inset -2px -2px 8px rgba(255,255,255,1 ),
              inset -2px -2px 12px rgba(255,255,255,0.5 ),
            inset 2px 2px 4px rgba(255,255,255,0.1 ),
            inset 2px 2px 8px rgba(255,255,255,0.15 )
          }
        `;
    }

    constructor() {
        super();
        this.cartera = '';
        this.numeroCredito = '';
        this.deudor = '';
        this.expediente = '';
        this.juzgado = '';
        this.estatusLista = '';
        this.avaluo = '';
        this.saldoPendiente = '';
        this.jurisdiccion = '';
        this.descripcion = '';
        this.recuperadora = '';
        this.brooker = '';
        this.solicitante = '';
        this.estatusJuridico = '';
        this.fechaSolicitud = '';
        this.comentario1J = '';
        this.comentario2J = '';
        this.comentario3J = '';
        this.fechaFirmaCesion = '';
        this.tramite = '';
        this.cancelar = false;
        this.add = false;
        this.vendida = false;
        this.baja = false;
        this.lista = '';
        this.idLista = '';
        this.direccion = '';
        this.colonia = '';
        this.municipio = '';
        this.estado = '';
        this.montoCesion = '';
        this.total = '';
        this.honorarios = '';
    }

     /* ${this.vendida === 'true' ? html`<paper-toggle-button checked @change="${this.statusVendida}">Vendida</paper-toggle-button>`: html`<paper-toggle-button @change="${this.statusVendida}">Vendida</paper-toggle-button>`}
        ${this.baja === 'true' ? html`<paper-toggle-button checked @change="${this.statusbaja}">Baja</paper-toggle-button>`: html`<paper-toggle-button @change="${this.statusbaja}">Baja</paper-toggle-button>`} */

    render() {
        return html`
            <div class="content__layout">
               
                <paper-toggle-button id="duplicada" @change="${this.duplicar}">Duplicar</paper-toggle-button>
                <div>
                    <vaadin-text-field class="form-control" label="Solicitante" class="form-control" value="${this.solicitante}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="EstatusJuridico" class="form-control" value="${this.estatusJuridico}"></vaadin-text-field>
                </div>
                <div>
                    <label for="dateSolicitante">Fecha de Solicitud</label><br>
                    <input type="date" id="dateSolicitante" name="Solicitud" value="${this.fechaSolicitud}"/>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Comentario1" class="form-control" value="${this.comentario1J}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Comentario2" class="form-control" value="${this.comentario2J}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Comentario3" class="form-control" value="${this.comentario3J}"></vaadin-text-field>
                </div>
                <div>
                    <label for="dateFirma">Fecha de Firma</label><br>
                    <input type="date" id="dateFirma"  value="${this.fechaFirmaCesion}"/>
                </div>
                <paper-dropdown-menu label="Tramite" noink no-animations>
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <paper-item>Pendiente</paper-item>
                        <paper-item>Finalizado</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>
                ${this.add ?
                        html`<vaadin-button @click="${this.updateJuridico}">Agregar</vaadin-button>`
                        :
                        html`<vaadin-button @click="${this.updateJuridico}">Actualizar</vaadin-button>`
                }

                ${this.cancelar ?
                        html`<vaadin-button theme="error" @click="${this.cancel}">Salir</vaadin-button>`
                        : html ``
                }
            </div>
        `;
    }

    updateJuridico() {
        const [Solicitante,EstatusJuridico,Comentario1,Comentario2,Comentario3] = this.shadowRoot.querySelectorAll('.form-control');
        const Solicitud = this.shadowRoot.querySelector('#dateSolicitante')
        const Firma = this.shadowRoot.querySelector('#dateFirma')
        this.dispatchEvent(new CustomEvent('update-data', {
            bubbles: true,
            composed: true,
            detail: {
                solicitante:Solicitante.value,
                estatusJuridico:EstatusJuridico.value,
                fechaSolicitud:Solicitud.value,
                comentario1J:Comentario1.value,
                comentario2J:Comentario2.value,
                comentario3J:Comentario3.value,
                fechaFirmaCesion:Firma.value,
                //tramite:Tramite.value,
                //vendida: this.vendida,
                //baja: this.baja,
            }
        }))
    }

    sale(event) {
        this.vendida = event.target.checked;
        let messageSale = {
            user: '602b7c507f24cf0015049430', // agregar un usuario de sistema
            title: 'Vendida',
            description: `Inmueble vendido id: ${this.idLista},
            de la lista: ${this.lista}, 
            con la dirección: ${this.direccion}`
        }
        if(event.target.checked) {
            fetch('https://gayol-app.herokuapp.com/api/v1/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageSale)
            }).then(resp => resp.json())
                .catch(error => console.error(error))
        }
    }

    statusDown(event) {
        this.baja = event.target.checked;
        let messageSale = {
            user: '602b7c507f24cf0015049430', // agregar un usuario de sistema
            title: 'Baja',
            description: `Inmueble vendido id: ${this.idLista},
            de la lista: ${this.lista}, 
            con la dirección: ${this.direccion}`
        }
        if(event.target.checked) {
            fetch('https://gayol-app.herokuapp.com/api/v1/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageSale)
            }).then(resp => resp.json())
                .catch(error => console.error(error))
        }
    }

    duplicar(event) {
        if(event.target.checked) {
            let body = {
                lista: this.lista,
                idLista: this.idLista,
                direccion: this.direccion,
                colonia: this.colonia,
                municipio: this.municipio,
                estado: this.estado,
                montoCesion: this.montoCesion,
                honorarios: this.honorarios,
                total: this.total
            }
            fetch('https://gayol-app.herokuapp.com/api/v1/listSales', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then(resp => resp.json())
                .catch(error => console.error(error))
        }
    }
}

customElements.define('juridico-layout',JuridicoLayout);
