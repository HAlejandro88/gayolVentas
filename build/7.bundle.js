(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{19:function(a,t,e){"use strict";e.d(t,"a",(function(){return n}));var i=e(9);class n extends i.a{static get properties(){return{}}constructor(){super()}async __request(a="",t="GET",e={},i={}){const n=localStorage.getItem("url")?localStorage.getItem("url"):"http://localhost:5000/api/v1",o=JSON.stringify(i);let r={method:t,headers:{"Content-Type":"application/json",...e}};"PUT"!==t&&"POST"!==t||(r={...r,body:o});try{return await(await fetch(`${n}/${a}`,r)).json()}catch(a){return a}}async __authRequest(a,t=(()=>{})){const e=localStorage.getItem("token");if(e)try{const i=await this.__request("auth/verify/"+e);if(a&&i.verify)return t(),!0;if(!a||!i.success)return t(),!1}catch(a){console.log(a)}}}},75:function(a,t,e){"use strict";e.r(t);var i=e(9),n=(e(31),e(54),e(52),e(34),e(51),e(53),e(19));class o extends n.a{static get properties(){return{page:String}}static get styles(){return i.b`
            h1 {
                text-align: center;
            }

            .content {
                padding: 10px;
            }
        `}constructor(){super(),this.page="home"}render(){return i.c`
<vaadin-app-layout>
    <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
    <img slot="navbar" src="https://i.imgur.com/GPpnszs.png" alt="Vaadin Logo" width="100" height="31" referrerpolicy="no-referrer">
    <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
        <vaadin-tab tab-page="home" @click="${this.__changePage}">
            <iron-icon icon="vaadin:home"></iron-icon>
            Home
        </vaadin-tab>
        <vaadin-tab tab-page="list" @click="${this.__changePage}">
            <iron-icon icon="vaadin:list"></iron-icon>
            Lista
        </vaadin-tab>
        <vaadin-tab tab-page="uploadList" @click="${this.__changePage}">
            <iron-icon icon="vaadin:options"></iron-icon>
            Subir Listas
        </vaadin-tab>
        <vaadin-tab tab-page="search" @click="${this.__changePage}">
            <iron-icon icon="vaadin:search"></iron-icon>
            Buscador
        </vaadin-tab>
        <vaadin-tab tab-page="register" @click="${this.__changePage}">
            <iron-icon icon="vaadin:clipboard-text"></iron-icon>
            Registro
        </vaadin-tab>
        <vaadin-tab @click="${this.logOut}">
            <iron-icon icon="vaadin:out"></iron-icon>
            Cerrar Sesión
        </vaadin-tab>
    </vaadin-tabs>

        <div class="content">
            <h1>Dashboard Page</h1>
        </div>
</vaadin-app-layout>
        `}async updated(){await this.__authRequest(!1,()=>{this.dispatchEvent(new CustomEvent("logout-request"))})}__changePage(a){this.page=a.currentTarget.getAttribute("tab-page"),window.location=this.page}logOut(){console.log("close"),this.dispatchEvent(new CustomEvent("logout-request",{bubbles:!0,composed:!0})),localStorage.removeItem("token"),window.location="/login"}}window.customElements.define("dashboard-page",o)}}]);