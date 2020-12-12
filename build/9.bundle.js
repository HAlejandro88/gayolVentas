(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{19:function(t,a,i){"use strict";i.d(a,"a",(function(){return r}));var e=i(9);class r extends e.a{static get properties(){return{}}constructor(){super()}async __request(t="",a="GET",i={},e={}){const r=localStorage.getItem("url")?localStorage.getItem("url"):"http://localhost:5000/api/v1",s=JSON.stringify(e);let n={method:a,headers:{"Content-Type":"application/json",...i}};"PUT"!==a&&"POST"!==a||(n={...n,body:s});try{return await(await fetch(`${r}/${t}`,n)).json()}catch(t){return t}}async __authRequest(t,a=(()=>{})){const i=localStorage.getItem("token");if(i)try{const e=await this.__request("auth/verify/"+i);if(t&&e.verify)return a(),!0;if(!t||!e.success)return a(),!1}catch(t){console.log(t)}}}},81:function(t,a,i){"use strict";i.r(a);var e=i(9);i(31),i(54),i(52),i(34),i(51),i(53);class r extends e.a{static get properties(){return{image:String,title:String,description:String,details:String}}static get styles(){return e.b`
          .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 50%;
            height: 50%;
          }

          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }

          .container {
            padding: 2px 16px;
          }
          h6 {
            margin-top: -12px;
            padding-top: -12px;
            color: green;
            font-weight: bold;
          }
        `}constructor(){super(),this.image="",this.title="",this.description="",this.details=""}render(){return e.c`
            <div class="card">
                <img src="${this.image}" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>${this.title}</b></h4>
                    <h6>${this.details}</h6>
                    <p>${this.description}</p>
                </div>
            </div>
        `}}window.customElements.define("card-component",r);var s=i(19);class n extends s.a{static get properties(){return{listHouses:Array}}static get styles(){return e.b`
          .grid-cards {
            height: 50vh;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
        `}constructor(){super(),this.listHouses=[]}async firstUpdated(t){super.firstUpdated(t),await this.listOfHouse()}render(){return e.c`
            <vaadin-app-layout>
                <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
                <img slot="navbar" src="https://i.imgur.com/GPpnszs.png" alt="Vaadin Logo" width="100" height="31" referrerpolicy="no-referrer">
                <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
                    <vaadin-tab tab-page="home">
                        <iron-icon icon="vaadin:home"></iron-icon>
                        <a href="/dashboard">Home</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="list">
                        <iron-icon icon="vaadin:list"></iron-icon>
                        <a href="/list">Lista</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="uploadList">
                        <iron-icon icon="vaadin:options"></iron-icon>
                        <a href="/uploadList">Subir Listas</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="search">
                        <iron-icon icon="vaadin:search"></iron-icon>
                        <a href="/search">Buscador</a>
                    </vaadin-tab>
                    <vaadin-tab tab-page="register">
                        <iron-icon icon="vaadin:clipboard-text"></iron-icon>
                        <a href="/register">Registro</a>
                    </vaadin-tab>
                    <vaadin-tab @click="${this.logOut}">
                        <iron-icon icon="vaadin:out"></iron-icon>
                        Cerrar Sesión
                    </vaadin-tab>
                </vaadin-tabs>
                    <div class="content">
                        <h1>Search Page</h1>
                        <div class="grid-cards">
                            ${this.listHouses.map(t=>e.c`
                                    <card-component .title="${t.estado}" 
                                                    .description="${t.direccion}"
                                                    .details="${t.total}"
                                                    .image="${t.image}">
                                    </card-component>
                            `)}
                        </div>
                    </div>
            </vaadin-app-layout>
        `}async listOfHouse(){const t=await this.__request("listSales","GET");this.listHouses=t.data,console.log(this.listHouses)}}window.customElements.define("search-page",n)}}]);