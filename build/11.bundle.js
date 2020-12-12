(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{19:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(9);class s extends r.a{static get properties(){return{}}constructor(){super()}async __request(e="",t="GET",a={},r={}){const s=localStorage.getItem("url")?localStorage.getItem("url"):"http://localhost:5000/api/v1",i=JSON.stringify(r);let n={method:t,headers:{"Content-Type":"application/json",...a}};"PUT"!==t&&"POST"!==t||(n={...n,body:i});try{return await(await fetch(`${s}/${e}`,n)).json()}catch(e){return e}}async __authRequest(e,t=(()=>{})){const a=localStorage.getItem("token");if(a)try{const r=await this.__request("auth/verify/"+a);if(e&&r.verify)return t(),!0;if(!e||!r.success)return t(),!1}catch(e){console.log(e)}}}},77:function(e,t,a){"use strict";a.r(t);var r=a(9),s=(a(71),a(72),a(74),a(34),a(73),a(19));class i extends s.a{static get properties(){return{name:String,email:String,role:String,password:String,username:String,img:String}}constructor(){super(),this.name="",this.email="",this.role="",this.password="",this.username=""}render(){return r.c`
            <div>
                <vaadin-text-field class="form-control" label="Nombre"></vaadin-text-field>
                <vaadin-email-field class="form-control" label="Email"></vaadin-email-field>
                <vaadin-text-field class="form-control" label="Role"></vaadin-text-field>
                <vaadin-password-field class="form-control" label="Password"></vaadin-password-field>
                <vaadin-text-field class="form-control" label="Username"></vaadin-text-field>
                <vaadin-upload accept=".jpg" target="http://localhost:5000/api/v1/userImage">
                    <span slot="drop-label">Pura Imagen</span>
                </vaadin-upload>
                <vaadin-button @click="${this.register}">Editar</vaadin-button>
            </div>
        `}async register(e){e.preventDefault();const[t,a,r,s,i]=this.shadowRoot.querySelectorAll(".form-control"),n={name:t.value,email:a.value,role:r.value,password:s.value,username:i.value},o=await this.__request("auth/register","POST",{},n);console.log(o)}}window.customElements.define("register-user",i)}}]);