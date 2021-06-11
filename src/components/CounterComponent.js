import { LitElement,html,css } from 'lit-element';
import { GayolController } from '../helpers/GayolController';


class CounterComponent extends GayolController {
    static get properties() {
        return {
            columns: Array,
            numero: Number,
            couterE: Object
        }
    }

    constructor() {
        super();
        this.columns = [];
        this.numero = 4;
        this.couterE = {};
    }


    static get styles() {
        return css`
          :host {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .counter {
            width: 700px;
            height: 130px;
            display: grid;
            grid-template-columns: repeat(auto-fit, 170px);
            grid-template-rows: 130px;
            font-family: roboto;
            border-radius: 18px;
            background: white;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
            text-align: center;
            padding: 10px;
          }
          .counter-child:nth-child(1) {
            border: none;
          }
          .counter-child {
            border-left: 2px solid red;
          }
          
          .counter-child h4 {
            margin-top: 5px;
            margin-bottom: 5px;
            text-transform: capitalize;
            font-size: 20px;
          }
        `;
    }


    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.counter();
        this.columns = [
            {
                name: 'Providencia',
                sales: this.couterE.Providencia
            },
            {
                name: 'Queretaro',
                sales: this.couterE.Queretaro
            }, {
                name: 'Tlacoquemecatl',
                sales: this.couterE.Tlacoquemecatl
            },
            {
                name: 'Gayol',
                sales: this.couterE.Gayol
            }
        ];
    }

    render() {
        return html`
            <div class="counter">
                ${this.columns.map(column => html`
                    <div class="counter-child">
                        <iron-icon icon="vaadin:lightbulb"></iron-icon>
                        <h4>${column.name}</h4>
                        <h2 class="aux" data-target="counter_one">${column.sales}</h2>
                    </div>
                `)}
            </div>
        `;
    }

    async createColumns() {
        const container = this.shadowRoot.querySelector('#counter');
    }

    async counter() {
        const sales = await this.__request('listSales/list/vendida');
        console.log(sales)
        this.couterE = sales.data.reduce((resume,item,index) => {
            if(item.empresa === 'Grupo Marzuz' ) resume.Providencia += 1
            if(item.empresa === 'Queretaro' ) resume.Queretaro += 1
            if(item.empresa === 'Tlaco' ) resume.Tlacoquemecatl += 1
            if(item.empresa === 'SPEJ' ) resume.Gayol += 1

            return resume;

        }, {
            Providencia: 0,
            Queretaro: 0,
            Tlacoquemecatl: 0,
            Gayol: 0
        })
        await this.requestUpdate();
    }
}


customElements.define('counter-component',CounterComponent);
