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
import '../components/UploadDocuments';
import '../components/HexagonComponent';
import {GayolController} from "../helpers/GayolController";

class SearchPage extends GayolController {
    static get properties() {
        return {
            listHouses: Array,
            url: String,
            image: String
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
            width: 142%;
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
        this.url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.1055482339307!2d-100.40153898497604!3d20.583746808196558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3452bee737809%3A0x70420a28b6721d6d!2sCentro%2C%2076000%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1612399198964!5m2!1ses-419!2smx';
        this.image = 'data:image/jpeg;base64,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';
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
                       <vaadin-text-field class="form-control"  label="Direccion" ></vaadin-text-field>
                       <vaadin-text-field class="form-control"  label="Estado"></vaadin-text-field>
                       <vaadin-text-field class="form-control"  label="Municipio"></vaadin-text-field>
                       <vaadin-text-field class="form-control"  label="Colonia" ></vaadin-text-field>
                       <vaadin-text-field class="form-control"  label="Id" ></vaadin-text-field>
                       <select name="total">
                           <option class="option" name="option1"  value="millon"selected>$0 - $1,000,000</option>
                           <option class="option" name="option2" value="dosMillones" >$1,000,000 - $2,000,000</option>
                           <option class="option" name="option3" value="mas">más de $3,000,000</option>
                       </select>
                       <div class="btn-filter">
                           <vaadin-button class="btn-filter" @click="${this.__filter}">Search</vaadin-button>
                       </div>
                   </header>
                   
                   <section class="topten">
                       <h3>Top 10</h3>
                       <hexagon-component></hexagon-component>
                       
                   </section>
                   
                   <div class="grid-cards">
                       ${this.listHouses.map(house => html`
                                    <card-component .title="${house.estado}" 
                                                    .description="${house.direccion}"
                                                    .details="${house.total}"
                                                    model="${house._id}"
                                                    photo="${house.image}"
                                                    mapa="${house.mapa}"
                                                    @handled-click="${this.history}"
                                                    @change-documents="${this.uploadDocuments}">
                                    </card-component>
                            `)}
                       <vaadin-dialog aria-label="simple" id="dialog"></vaadin-dialog>
                       <vaadin-dialog aria-label="simple" id="documents"></vaadin-dialog>
                   </div>
               </div>
           </app-layout>
        `;
    }

    async __listOfHouse() {
        const houses = await this.__request("listSales",'GET');
        this.listHouses = houses.data;
        console.log(this.listHouses);
    }

    async history(event) {
        const id = event.currentTarget.getAttribute('model');
        this.image = event.currentTarget.getAttribute('photo');
        this.url = event.currentTarget.getAttribute('mapa');
        const dialog = this.shadowRoot.querySelector('#dialog');
        dialog.renderer = (root,dialog) => {
            root.innerHTML = `
                <style>
                    .image {
                        width: 50%;
                        height: auto;
                    }
                </style>
                <vaadin-tabs selected="0">
                  <vaadin-tab>Foto</vaadin-tab>
                  <vaadin-tab>Mapa</vaadin-tab>
                  <vaadin-tab>Documentos
                  </vaadin-tab>
                </vaadin-tabs>
                
                <div class="content">
                   
                    <div class="form-layout">
                        <img src="http://localhost:5000/api/v1/listSales/list/photo/${this.image}" alt="" class="image">
                    </div>
                </div>
            `;

            const content = root.querySelector('.content');
            const tabs = root.querySelector('vaadin-tabs');
            tabs.addEventListener('selected-changed', ({detail}) => {
                console.log(detail);
                if(detail.value === 0) {
                    content.innerHTML = `
                    <div class="form-layout">
                        <img src="http://localhost:5000/api/v1/listSales/list/photo/${this.image}" alt="" class="image">
                    </div>`;
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
        const [Direccion,Estado,Municipio,Colonia,Id] = this.shadowRoot.querySelectorAll('.form-control');
        const [option1,option2,option3] = this.shadowRoot.querySelector('select').options;
       if (Direccion.value !== '') {
        this.listHouses = this.listHouses.filter(house => house.direccion.toLocaleLowerCase().includes(Direccion.value))
       }
       else if (Estado.value !== '') {
           this.listHouses = this.listHouses.filter(house => house.estado.toLocaleLowerCase().includes(Estado.value))
       }
       else if (Municipio.value !== '') {
            this.listHouses = this.listHouses.filter(house => house.municipio.toLocaleLowerCase() === Municipio.value.toLocaleLowerCase())
       }
       else if (Colonia.value !== '') {
            this.listHouses = this.listHouses.filter(house => house.colonia.toLocaleLowerCase() === Colonia.value.toLocaleLowerCase())
       }
        else if(option1.value === 'millon') {
           this.listHouses = this.listHouses.filter(house => house.total < 1000000);
       }
       else if(option2.value === 'dosMillones') {
           this.listHouses = this.listHouses.filter(house => house.total <= 2000000);
       }
       else if(option3.value === 'mas') {
           this.listHouses = this.listHouses.filter(house => house.total > 3000000);
       }
       else if(Id.value !== '') {
           this.listHouses = this.listHouses.filter(house => house.idLista === Id.value);
       }
       else {
           await this.__listOfHouse();
       }
        console.log(this.listHouses);
        await this.requestUpdate();
    }


    uploadDocuments(event) {
        const id = event.currentTarget.getAttribute('model');
        const modal = this.shadowRoot.querySelector('#documents');
        modal.renderer = (root,dialog) => {
            root.innerHTML = `
                <upload-documents id="${id}" ></upload-documents>
           `;
            


        }
        // TODO: AGREGAR EN BACK CAMPOS DE MAPA E IMAGEN;
        modal.opened = true;
    }

}

window.customElements.define('search-page', SearchPage);
