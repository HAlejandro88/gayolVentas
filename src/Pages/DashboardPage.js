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
              justify-content: space-between;
              align-items: flex-start;
            }
          
            .aside {
              background: #fff;
              border-radius: 50px;
              box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
              box-sizing: border-box;
              margin: 10px;
              padding: 5px;
              color: gray;
              height: 70vh;
              width: 28vw;
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
                    <div class="ultimate">
                      <hexagon-component mapa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.5881053017954!2d-99.18061716773386!3d19.40479101367542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff661496898b%3A0xbdaa1acc51f3bb28!2sGral.%20Salvador%20Alvarado%2C%20Escand%C3%B3n%20I%20Secc%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1610223276786!5m2!1ses-419!2smx"></hexagon-component>

                    </div>
                    <aside class="aside">
                        <div class="message__box__title">
                            <h2>Ultimas Noticias</h2>
                        </div>
                        ${this.news.map(item => html`
                            <message-item .title="${item.title}" .description="${item.description}" .date="${item.createAt}" .image="${item.avatar}"></message-item>
                        `)}
                    </aside>
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



