import {  html, css } from 'lit-element';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-list-box/vaadin-list-box';
import '@vaadin/vaadin-item/vaadin-item';
import '../components/AppLayout'
import '../components/CardComponent';
import '../components/ModalSearch';
import '../components/UploadDocs';
import '../components/HexagonComponent';
import '@fluidnext-polymer/paper-pagination';
import '@fluidnext-polymer/paper-pagination/icons/paper-pagination-icons';
import {GayolController} from "../helpers/GayolController";

class SearchJuridicoPage extends GayolController {
    static get properties() {
        return {
            listHouses: Array,
            url: String,
            image: String,
            reset: Array
        }
    }

    static get styles() {
        return css`
          .grid-cards {
            padding: 25px;
            height: 50vh;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 8px;
          }
          header {
            margin: 20px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 5px;
          }
          .btn-filter {
            width: 100%;
            text-align: center;
          }
          
          .image {
            width: auto;
          }
          
          .layout {
            width: 800px;
            height: auto;
            display: grid;
            grid-template-columns: repeat(2,1fr);
          }

          select {
            border: none;
            height: 36px;
            margin: 30px;
            background-color: #EAE9E9;
          }
          
          .topten {
             background-color: #F7F9F9;
            padding: 5px;
           
          }
          .topten h3 {
            text-align: center;
            text-transform: capitalize;
          }
        `;
    }

    constructor() {
        super();
        this.listHouses = [];
        this.reset = [];

    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.__listOfHouse();
    }

    render() {
        return html`
           <app-layout>
               <div slot="content">
                   <header>
                      <vaadin-text-field class="form-control" id="direccion" label="Direccion" @keyup="${this.searchDireccion}"></vaadin-text-field>
                       <vaadin-text-field class="form-control" id="estado"  label="Estado" @keyup="${this.searchEstado}"></vaadin-text-field>
                       <vaadin-text-field class="form-control" id="municipio" label="Municipio" @keyup="${this.searchMunicipio}"></vaadin-text-field>
                       <vaadin-text-field class="form-control" id="colonia" label="Colonia" @keyup="${this.searchColonia}"></vaadin-text-field>
                       <vaadin-text-field class="form-control" id="listId" label="Id" @keyup="${this.searchID}"></vaadin-text-field>
                   </header>
                   <div class="btn-filter">
                        <vaadin-button class="btn-filter" @click="${this.limpiar}">Buscar</vaadin-button>
                    </div>
                   
                   <section class="topten">
                       <h3>Top 10</h3>
                       <hexagon-component></hexagon-component>
                       
                   </section>
                   
                   <div class="grid-cards">
                       ${this.listHouses.map(house => html`
                                    <card-component .title="${house.estado}" 
                                                    .description="${house.direccion}"
                                                    .details="${house.total}"
                                                    .id="${house.idLista}"
                                                    model="${house._id}"
                                                    photo="${house.image}"
                                                    mapa="${house.mapa}"
                                                    data-estado="${house.estado}"
                                                    data-municipio="${house.municipio}"
                                                    data-total="${house.total}"
                                                    data-direccion="${house.direccion}"
                                                    @handled-click="${this.history}"
                                                    @change-documents="${this.uploadDocuments}">
                                    </card-component>
                            `)}

                       <paper-pagination
                               total-items="100"
                               item-per-page="30"
                               @page-changed="${this.changePage}"
                               next-icon="paper-pagination:next-arrow"
                               previous-icon="paper-pagination:previous-arrow">
                       </paper-pagination>
                       
                       <vaadin-dialog aria-label="simple" id="dialog"></vaadin-dialog>
                       <vaadin-dialog aria-label="simple" id="documents"></vaadin-dialog>
                   </div>
               </div>
           </app-layout>
        `;
    }

    async changePage(event) {
        this.page = event.detail.value;
        await this.limpiar(this.page)
    }

    async limpiar(page = 1) {
        this.listHouses = this.reset;
        const $direccion = this.shadowRoot.querySelector('#direccion').value;
        const $estado = this.shadowRoot.querySelector('#estado').value;
        const $municipio = this.shadowRoot.querySelector('#municipio').value;
        const $colonia = this.shadowRoot.querySelector('#colonia').value;
        const $listId = this.shadowRoot.querySelector('#listId').value;
        const search = await (await fetch(`https://otolum.com.mx/api/v1/listSales/list/search?state=${$estado}&direccion=${$direccion}&colonia=${$colonia}&muni=${$municipio}&idLista=${$listId}&page=${page}`)).json();
        this.listHouses = search.data;
        const $pagination = this.shadowRoot.querySelector('paper-pagination');
        $pagination.totalItems = search.total;
        console.log(this.listHouses)
        console.log(this.page)
        //await this.pagination(this.listHouses, this.page);
    }

    async __listOfHouse(page = 1) {
        const houses = await this.__request(`listSales?page=${page}`,'GET');
        this.listHouses = houses.data;
        this.reset = houses.data;
    }



    async history(event) {
        const id = event.currentTarget.getAttribute('model');
        const direccion = event.currentTarget.getAttribute('data-direccion')
        const estado = event.currentTarget.getAttribute('data-estado')
        const municipio = event.currentTarget.getAttribute('data-municipio')
        const total = event.currentTarget.getAttribute('data-total')
        this.image = event.currentTarget.getAttribute('photo');
        this.url = event.currentTarget.getAttribute('mapa');
        const dialog = this.shadowRoot.querySelector('#dialog');
        dialog.renderer = (root,dialog) => {
            root.innerHTML = `
                <style>
                    .image {
                        max-width: 50%;
                        height: auto;
                    }
                </style>
                <vaadin-tabs selected="0">
                  <vaadin-tab>Foto</vaadin-tab>
                  <vaadin-tab>Mapa</vaadin-tab>
                  <vaadin-tab>Documentos</vaadin-tab>
                </vaadin-tabs>
                
                <div class="content">
                        <div>
                            <p>
                                Dirección: <strong>${direccion}</strong><br/>
                                Estado: <strong>${estado}</strong><br/>
                                Municipio: <strong>${municipio}</strong><br/>
                                total: <strong>${total}</strong><br/>
                            </p>
                        </div>
                        <br>
                    <div class="form-layout">
                        <img src="https://otolum.com.mx/api/v1/listSales/list/photo/${this.image}" alt="" style="width: 100%"/>
                    </div>
                </div>
            `;

            const content = root.querySelector('.content');
            const tabs = root.querySelector('vaadin-tabs');
            tabs.addEventListener('selected-changed', ({detail}) => {
                if(detail.value === 0) {
                    content.innerHTML = `
                            <div>
                            <p>
                                Dirección: <strong>${direccion}</strong><br/>
                                Estado: <strong>${estado}</strong><br/>
                                Municipio: <strong>${municipio}</strong><br/>
                                total: <strong>${total}</strong><br/>
                            </p>
                        </div>
                        <br>
                        <img src="https://otolum.com.mx/api/v1/listSales/list/photo/${this.image}" style="width: 100%">
                    `;
                }
                else if (detail.value === 2) {
                    //const [] = documents.data.docsLegal;
                    content.innerHTML = `
                       <modal-search id="${id}"></modal-search>
                    `;
                }

                else {
                    content.innerHTML = `
                        <iframe src="${this.url}" 
                            width="600" 
                            height="450" 
                            frameborder="0" 
                            style="border:0;" 
                            allowfullscreen="" 
                            aria-hidden="false" 
                            tabindex="0">          
                        </iframe>
                    `;
                }
            })
        }
        dialog.opened = true;
    }


    async __filter() {
        const [direccion,estado,municipio,colonia, idLista] = this.shadowRoot.querySelectorAll('.form-control');

        this.listHouses = this.listHouses.filter(house =>
            house.colonia.toLowerCase() === colonia.value.toLowerCase() || house.direccion.toLowerCase() === direccion.value.toLowerCase() || house.estado.toLowerCase() === estado.value.toLowerCase() ||
            house.idLista === idLista.value || house.municipio === municipio.value.toLowerCase())
        await this.requestUpdate();
    }




    chancePrice(event) {
        const select = this.shadowRoot.querySelector('select').value;
        this.listHouses = this.listHouses.filter(house => {
            if(select === 'millon') {
                return house.total <= 1000000
            } else if(select === 'dos') {
                return house.total <= 2000000
            } else {
                return house.total > 300000
            }
        })
    }


    uploadDocuments(event) {
        const id = event.currentTarget.getAttribute('model');
        const modal = this.shadowRoot.querySelector('#documents');
        modal.renderer = (root,dialog) => {
            root.innerHTML = `
                <upload-docs id="${id}" ></upload-docs>
           `;



        }
        // TODO: AGREGAR EN BACK CAMPOS DE MAPA E IMAGEN;
        modal.opened = true;
    }

}

window.customElements.define('search-juridico-page', SearchJuridicoPage);
