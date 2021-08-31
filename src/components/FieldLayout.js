import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';



class FieldLayout extends LitElement {
    static get properties() {
        return {
            expedienteAdmin: String,
            pago: String,
            fechaContrato: String,
            formaPago: String,
            cuentaPago: String,
            fechaPago: String,
            estatusAdmin: String,
            cliente: String,
            observacionesVenta: String,
            vendedor: String,
            jefeGrupo: String,
            tipoVenta: String,
            empresa: String,
            observacionesAdmin: String,
            contratoRealizado: String,
            cancelar: { type: Boolean, reflect: true },
            add: { type: Boolean, reflect: true },
            vendida: Boolean,
            baja: Boolean,
            idLista: String,
            direccion: String,
            lista: String,
            oficina: String
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
        `;
    }

    constructor() {
        super();
        this.expedienteAdmin = '';
        this.fechaContrato = '';
        this.formaPago = '';
        this.cuentaPago = '';
        this.fechaPago = '';
        this.estatusAdmin = '';
        this.cliente = '';
        this.observacionesVenta = '';
        this.vendedor = '';
        this.jefeGrupo = '';
        this.tipoVenta = '';
        this.empresa = '';
        this.observacionesAdmin = '';
        this.contratoRealizado = '';
        this.cancelar = false;
        this.add = false;
        this.vendida = false;
        this.baja = false;
        this.idLista = '';
        this.direccion = '';
        this.lista = '';
        this.oficina = '';
    }
    
    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (this.observacionesAdmin === undefined) {
            this.observacionesAdmin = '';
            await this.requestUpdate();
        }
    }

//${this.vendida ? html`<paper-toggle-button checked @change="${this.statusVendida}">Vendida</paper-toggle-button>`: html`<paper-toggle-button @change="${this.statusVendida}">Vendida</paper-toggle-button>`}
    render() {
        return html`
            <div class="content__layout">
                
                ${this.vendida === 'true' ? html`<paper-toggle-button checked @change="${this.statusVendida}">Vendida</paper-toggle-button>`: html`<paper-toggle-button @change="${this.statusVendida}">Vendida</paper-toggle-button>`}
                ${this.baja === 'true' ? html`<paper-toggle-button checked @change="${this.statusbaja}">Baja</paper-toggle-button>`: html`<paper-toggle-button @change="${this.statusbaja}">Baja</paper-toggle-button>`}
                <div>
                    <vaadin-text-field class="form-control" label="Expediente" class="form-control" value="${this.expedienteAdmin}"></vaadin-text-field>
                </div> 
                
                <div>
                    <label for="dateFirma">Fecha de Contrato</label><br>
                    <input type="date" id="fechaContrato"  value="${this.fechaContrato}"/>
                </div>
                

                <!--div>
                    <vaadin-text-field class="form-control" label="Pago" class="form-control" value="${this.fechaContrato}"></vaadin-text-field>
                </div-->
                <paper-dropdown-menu label="Pago" id="pago" noink no-animations @selected-item-changed="${this.changePago}">
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <paper-item>Efectivo</paper-item>
                        <paper-item>Transferencia</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>

                <!--div>
                    <vaadin-text-field class="form-control" label="Cuenta" class="form-control" value="${this.fechaContrato}"></vaadin-text-field>
                </div-->

                <paper-dropdown-menu label="Cuenta" id="cuenta" noink no-animations @selected-item-changed="${this.changeCuenta}">
                    <paper-listbox slot="dropdown-content" class="dropdown-content" >
                        <paper-item>Inbursa</paper-item>
                        <paper-item>Banorte</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>
                
                <div>
                    <label for="dateFirma">Fecha de Pago</label><br>
                    <input type="date" id="FechaPago"  value="${this.fechaPago}"/>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="EstatusAdmin" class="form-control" value="${this.estatusAdmin}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Cliente" class="form-control" value="${this.cliente}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="ObservacionesVenta" class="form-control" value="${this.observacionesVenta}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="Vendedor" class="form-control" value="${this.cliente}"></vaadin-text-field>
                </div>
                <div>
                    <vaadin-text-field class="form-control" label="JefeGrupo" class="form-control" value="${this.jefeGrupo}"></vaadin-text-field>
                </div>
                <!--div>
                    <vaadin-text-field class="form-control" label="Tipo Venta" class="form-control" value="${this.jefeGrupo}"></vaadin-text-field>
                </div-->
                <paper-dropdown-menu label="Tipo Venta" id="tipov" noink no-animations @selected-item-changed="${this.TipoVentaChange}">
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <paper-item>12 Meses</paper-item>
                        <paper-item>Cesión Inmediata</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>
                <!--div>
                    <vaadin-text-field class="form-control" label="Empresa" class="form-control" value="${this.jefeGrupo}"></vaadin-text-field>
                </div-->
                <paper-dropdown-menu label="Oficina" id="empresa" noink no-animations @selected-item-changed="${this.empresaCahange}">
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <paper-item>Providencia</paper-item>
                        <paper-item>Gayol</paper-item>
                        <paper-item>Tlaco</paper-item>
                        <paper-item>Queretaro</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>

                <paper-dropdown-menu label="Empresa" id="oficina" noink no-animations @selected-item-changed="${this.oficinCahange}">
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <paper-item>SPEJ</paper-item>
                        <paper-item>Grupo Marzuz</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>
                
               ${this.observacionesAdmin == undefined ? html`
                   <div>
                       <vaadin-text-field class="form-control" label="ObservacionesAdmin" class="form-control" ></vaadin-text-field>
                   </div>
               ` : html`
                   <div>
                       <vaadin-text-field class="form-control" label="ObservacionesAdmin" class="form-control" value="${this.observacionesAdmin}"></vaadin-text-field>
                   </div>
               `}
                
                <div>
                    <vaadin-text-field class="form-control" label="ContratoRealizado" class="form-control" value="${this.contratoRealizado}"></vaadin-text-field>
                </div>
                
            </div>
            ${this.add ? 
                    html`<vaadin-button @click="${this.updateData}">Agregar</vaadin-button>`
                    :
                    html`<vaadin-button @click="${this.updateData}">Actualizar</vaadin-button>`
            }
            
            ${this.cancelar ? 
                    html`<vaadin-button theme="error" @click="${this.cancel}">Cancelar</vaadin-button>`
                    : html ``
            }
        `;
    }

    // TODO:Peguntar por que no se mandan los valores de las propiedades

    updateData(event) {
        const [Expediente,EstatusAdmin,Cliente,ObservacionesVenta,Vendedor,JefeGrupo,ObservacionesAdmin,ContratoRealizado] = this.shadowRoot.querySelectorAll('.form-control');
        let fechaPago = this.shadowRoot.querySelector('#FechaPago');
        let fechaContrato = this.shadowRoot.querySelector('#fechaContrato')

        this.dispatchEvent(new CustomEvent('update-data', {
            bubbles: true,
            composed: true,
            detail: {
                expedienteAdmin:Expediente.value,
                fechaContrato:fechaContrato.value,
                formaPago:this.pago,
                cuentaPago:this.cuentaPago,
                fechaPago:fechaPago.value,
                estatusAdmin:EstatusAdmin.value,
                cliente:Cliente.value,
                observacionesVenta:ObservacionesVenta.value,
                vendedor:Vendedor.value,
                jefeGrupo:JefeGrupo.value,
                tipoVenta:this.tipoVenta,
                empresa:this.empresa,
                observacionesAdmin:ObservacionesAdmin.value,
                contratoRealizado:ContratoRealizado.value,
                vendida: this.vendida,
                baja: this.baja,
                oficina: this.oficina
            }
        }))
        Expediente.value = '';
        fechaContrato.value = '';
        EstatusAdmin.value = '';
        Cliente.value = '';
        ObservacionesVenta.value = '';
        Vendedor.value = '';
        JefeGrupo.value = '';
        ObservacionesAdmin.value = '';
        ContratoRealizado.value = '';
    }

    cancel(event) {
        this.dispatchEvent(new CustomEvent('cancel-update',{ composed: true }));
    }


    changePago({ detail }) {
        this.pago = detail.value.innerText

    }
    changeCuenta({ detail }) {
        this.cuentaPago = detail.value.innerText;
    }

    TipoVentaChange({ detail }) {
        this.tipoVenta = detail.value.innerText;

    }

    empresaCahange({ detail }) {
        this.empresa = detail.value.innerText;
    }

    oficinCahange({ detail }) {
        this.oficina = detail.value.innerText;
    }

    statusVendida(event) {
        const token = localStorage.getItem('token')
        const BearerToken = `Bearer ${token}`;
        let messageSale = {
            user: '602b7c507f24cf0015049430', // agregar un usuario de sistema
            title: 'Vendida',
            description: `id: ${this.idLista},
            Lista: ${this.lista}, 
            Dirección: ${this.direccion}`
        }
        if(event.target.checked) {
            this.vendida = true;
            fetch('https://otolum.com.mx/api/v1/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': BearerToken
                },
                body: JSON.stringify(messageSale)
            }).then(resp => resp.json())
                .catch(error => console.error(error))

                //TODO: Agregiar ruta para agregar uno en el pizarron
        }
    }

    statusbaja(event) {
        const token = localStorage.getItem('token')
        const BearerToken = `Bearer ${token}`;
        let messageSale = {
            user: '602b7c507f24cf0015049430', // agregar un usuario de sistema
            title: 'Baja',
            description: ` id: ${this.idLista},
            Lista: ${this.lista}, 
            Dirección: ${this.direccion}`
        }
        if(event.target.checked) {
            this.baja = true;
            fetch('https://otolum.com.mx/api/v1/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': BearerToken
                },
                body: JSON.stringify(messageSale)
            }).then(resp => resp.json())
                .catch(error => console.error(error))
        }
    }
}

window.customElements.define('field-layout', FieldLayout);
