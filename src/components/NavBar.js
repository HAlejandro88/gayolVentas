import { LitElement,html,css } from 'lit-element';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-dialog';
import {GayolController} from "../helpers/GayolController";

class NavBar extends GayolController {

    static get properties() {
        return {
            user: Object
        }
    }

    constructor() {
        super();
        this.user = {};
    }

    static get styles() {
        return css`
            nav {
              border: 0.05px solid darkgray;
              display: flex;
              justify-content: space-between;
              align-items: center;
              background-color: #3498DB;
              color: #F7F9F9;
            }
          
            .social {
              color: #F7F9F9;
              font-size: 15px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              flex-wrap: wrap;
              width: 250px;
            }
            
            .social img {
              border-radius: 50%;
              height: 50px;
              width: 50px;
            }
          
          .toogle {
            display: flex;
            align-items: center;
          }
          
          
        `;
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.getMe();
    }

    // TODO: Harcer dinamico el NavBar
    render() {
        return html`
            <nav class="nav">
                <div class="toogle">
                    <vaadin-drawer-toggle></vaadin-drawer-toggle>
                    <h2>Gayol App</h2>
                </div>
                <div class="social">
                    <iron-icon icon="vaadin:grid-small" @click="${this.messageOptions}"></iron-icon>
                    <iron-icon icon="vaadin:inbox"></iron-icon>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZIDdartKs4CqtZyaJ4i4NkelxcXdFjZM7w&usqp=CAU" alt=""/>
                    <h4>${this.user.name}</h4>
                </div>
                <vaadin-dialog id="dialog"></vaadin-dialog>
            </nav>
        `;
    }

    async messageOptions() {
        const options = this.shadowRoot.querySelector('#dialog');
        options.renderer = (root, _dialog) => {
            root.innerHTML = `
                <style>
                    .options__menu {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 10px;
                    }
                    .item {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 5px;
                    }
                    .item h6{
                      margin-left: 4px;  
                    }
                </style>
                <div class="options__menu">
                    <div class="item">
                        <iron-icon icon="vaadin:plus" id="plus"></iron-icon>
                        <h6>Agregar un mensaje</h6>
                    </div>
                    <div class="item">
                        <iron-icon icon="vaadin:trash" id="trash"></iron-icon>
                        <h6>Borrar mensaje</h6>
                    </div>
                    <div class="item">
                        <iron-icon icon="vaadin:rotate-right" id="updateMessage"></iron-icon>
                        <h6>Actuaizar mensaje</h6>
                    </div>
                    
                    <div class="item">
                        <iron-icon icon="vaadin:plus-circle" id="master"></iron-icon>
                        <h6>Agregar Master List</h6>
                    </div> 
                </div>
            `;
            if(this.user.role === 'admin' || this.user.role === 'juridico') {
                root.querySelector('#master').addEventListener('click', e => {
                    window.location = '/menuListPage/addList'
                })
                root.querySelector('#plus').addEventListener('click', e => {
                    window.location = `/message/${this.user._id}`;
                })
            }
        }
        options.opened = true;
        await this.requestUpdate();
    }

    async getMe() {
       const token = localStorage.getItem('token');
       const BearerToken = `Bearer ${token}`;
       const headers = {
           'Authorization': BearerToken
       }
       const me = await this.__request('auth/me','GET',headers);
       this.user = me.data;
       console.log(this.user)
    }

}


window.customElements.define('nav-bar', NavBar);