import { LitElement,html,css } from 'lit-element';


class CounterComponent extends LitElement {
    static get properties() {
        return {
            columns: Array,

            numero: Number
        }
    }

    constructor() {
        super();
        this.columns = [];
        this.numero = 4;
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


    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.columns = [
            {
                name: 'Providencia',
                sales: 1
            },
            {
                name: 'Queretaro',
                sales: 1
            }, {
                name: 'Tlacoquemecatl',
                sales: 1
            },
            {
                name: 'Gayol',
                sales: 1
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
}


customElements.define('counter-component',CounterComponent);
