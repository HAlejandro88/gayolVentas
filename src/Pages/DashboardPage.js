import { html, css } from 'lit-element';
import '../components/AppLayout';
import { GayolController } from '../helpers/GayolController';
import '../components/CounterComponent';
import '../components/LastNews';
import '../components/MessageItem';
import '../components/HexagonComponent';



class DashboardPage extends GayolController {
    static get properties() {
        return {
            news: Array,
            lastTen: Array,
            mapa: String
        }
    }

    static get styles() {
        return css`
            :host {
              background: blue;
            }
            h1 {
                text-align: center;
            }

            
            
            h2 {
              text-align: center;
            }
            
            .content {
              /*display: grid;
              grid-template-columns: 750px 380px;
              grid-gap: 10px;*/
              display: flex;
              align-items: flex-start;
            }
          
            .aside {
              background: #fff;
              border-radius: 20px;
              box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
              box-sizing: border-box;
              margin: 10px;
              padding: 5px;
              color: gray;
              height: 70vh;
              width: 90vw;
              position: relative;
              overflow: auto;
            }
          
            .message__box__title {
              position: sticky;
              top: 0;
              z-index: 1;
              padding: 32px 24px 0 24px;
              background-color: #fff;
            }
          
            .ultimate {
              width: 70vw;
              height: 70vh;
              padding: 10px;
              margin: 10px;
            }

          counter-component {
            margin-top: 8px;
          }
          
        `;
    }

    constructor() {
        super();
        this.news = [];
        this.mapa = '';
        this.lastTen = [{ address: 'park 3 av. Indus' },{ address: 'park 3 av. Indus' },
            { address: 'park 3 av. Indus' },{ address: 'park 3 av. Indus' },
            { address: 'park 3 av. Indus' },
            { address: 'park 3 av. Indus' },{ address: 'park 3 av. Indus' },
            { address: 'park 3 av. Indus' },{ address: 'park 3 av. Indus' },
            { address: 'park 3 av. Indus' }];
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        console.log(this.location, 'location')
        await this.getAllNews();
    }

    // TODO: this.location is define in connectedCallback with the component whe used vaadin router

    render() {
        return html`
            <app-layout @log-out="${this.logOut}">
                <counter-component slot="title"></counter-component>
                <div slot="content" class="content">
                    <main class="aside">
                        <div class="message__box__title">
                            <h2>Ultimas Noticias</h2>
                        </div>
                        ${this.news.map(item => html`
                            <message-item .title="${item.title}" .description="${item.description}" .date="${item.createAt}" .image="${item.avatar}"></message-item>
                        `)}
                    </main>
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



