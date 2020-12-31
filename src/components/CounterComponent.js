import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-icons/vaadin-icons.js';

class CounterComponent extends LitElement {
    static get properties() {
        return {
            companies: Array,
            data: Object
        }
    }

    static get styles() {
        return css`
          :host {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container {
            width: 745px;
            height: 130px;
            display: grid;
            grid-template-columns: repeat(3,250px);
            grid-template-rows: 130px;
            font-family: roboto;
            border-radius: 18px;
            background: white;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
            text-align: center;
            padding: 10px;

          }
          div {
            border-left: 2px solid red;
          }
          div:nth-child(1) {
            border: none;
          }
          
          div h4 {
            margin-top: 5px;
            margin-bottom: 5px;
            text-transform: capitalize;
            font-size: 20px;
          }

          iron-icon {
            color: #BEC606;
          }
        `;
    }

    constructor() {
        super();
        this.companies = [
            { name: 'Gayol', sales: 1000 },
            { name: 'Queretaro', sales: 3000 },
            { name: 'zapata', sales: 40000 }
        ];
        this.data = {};
    }

    render() {
        return html`                
            <div class="container"></div>
        `;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.creatColums();
    }

    creatColums() {
        const container = this.shadowRoot.querySelector('.container');
        for (let i = 0; i <= this.companies.length; i++) {
            let column = document.createElement('div');
            column.id = i;
            column.innerHTML = `
                <iron-icon icon="vaadin:lightbulb"></iron-icon>
                    <h4>${this.companies[i].name}</h4>
                <h2 class="aux" data-target="counter_one">${this.companies[i].sales}</h2>
            `;
            container.appendChild(column);
        }
    }

    async increment() {

        try {
            await this.requestUpdate();
            this.dispatchEvent(new CustomEvent('counter-incremented', {
                detail: {
                    value: this.counter_one,
                    counter: 'counter_one'
                }
            }))
        } catch (error) {
            this.dispatchEvent(new CustomEvent('increment-failed'))
        }
    }


}


window.customElements.define('counter-component', CounterComponent)
