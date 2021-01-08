import {  html, css } from 'lit-element';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import '../components/AppLayout'
import '../components/CardComponent';
import {GayolController} from "../helpers/GayolController";

class SearchPage extends GayolController {
    static get properties() {
        return {
            listHouses: Array
        }
    }

    static get styles() {
        return css`
          .grid-cards {
            height: 50vh;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
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
        `;
    }

    constructor() {
        super();
        this.listHouses = [];
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
                       <div class="btn-filter">
                           <vaadin-button class="btn-filter" @click="${this.__filter}">Search</vaadin-button>
                       </div>
                   </header>
                   
                   <div class="grid-cards">
                       ${this.listHouses.map(house => html`
                                    <card-component .title="${house.estado}" 
                                                    .description="${house.direccion}"
                                                    .details="${house.total}"
                                                    .image="${house.image}">
                                    </card-component>
                            `)}
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


    async __filter() {
        const [Direccion,Estado,Municipio,Colonia] = this.shadowRoot.querySelectorAll('.form-control');
       if (Direccion.value !== '') {
        this.listHouses = this.listHouses.filter(house => house.direccion.toLocaleLowerCase().includes(Direccion.value))
       }
       else if (Estado.value !== '') {
           this.listHouses = this.listHouses.filter(house => house.estado.toLocaleLowerCase().includes(Estado.value))
       }
       else if (Estado.value !== '') {
            this.listHouses = this.listHouses.filter(house => house.estado.toLocaleLowerCase().includes(Estado.value))
       }
       else if (Estado.value !== '') {
            this.listHouses = this.listHouses.filter(house => house.estado.toLocaleLowerCase().includes(Estado.value))
       }
       else {
           await this.__listOfHouse();
       }
        console.log(this.listHouses);
        await this.requestUpdate();
    }

}

window.customElements.define('search-page', SearchPage);
