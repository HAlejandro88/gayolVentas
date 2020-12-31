import { html, css } from 'lit-element';
import '../components/AppLayout';
import { GayolController } from '../helpers/GayolController';
import '../components/CounterComponent';
import '../components/LastNews';


class DashboardPage extends GayolController {
    static get properties() {
        return {
            news: Array
        }
    }

    static get styles() {
        return css`
            :host {
              margin: 5px;
            }
            h1 {
                text-align: center;
            }

            .content {
                border: 1px solid grey;
                border-radius: 8px;
                box-shadow: 5px 3px 15px rgba(0,0,0,0.5);
                height: 58vh;
                margin: 15px;
            }
            
            h2 {
              text-align: center;
            }
        `;
    }

    constructor() {
        super();
        this.news = [];
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        console.log(this.location.params, 'location')
        await this.getAllNews();
    }

    // TODO: this.location is define in connectedCallback with the component whe used vaadin router

    render() {
        return html`
            <app-layout @log-out="${this.logOut}">
                <counter-component slot="title"></counter-component>
                
                <div slot="content" class="content">
                    <h2>Last News</h2>
                    ${this.news.map(item => html`
                      <last-news .title="${item.title}" .description="${item.description}" .lastDate="${item.createAt}"></last-news>
                    `)} 
                </div>
            </app-layout>
        `;
    }


    // TODO: generar un endpoin de filtro para excel
    // TODO: The pathname was: ${this.location.pathname}


    logOut() {
        localStorage.removeItem('token');
        window.location = '/login';
    }

    async getAllNews() {
      const news = await this.__request('news');
      this.news = news.data;
    }
    
}

window.customElements.define('dashboard-page', DashboardPage);



