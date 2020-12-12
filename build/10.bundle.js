(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{19:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(9);class i extends o.a{static get properties(){return{}}constructor(){super()}async __request(e="",t="GET",n={},o={}){const i=localStorage.getItem("url")?localStorage.getItem("url"):"http://localhost:5000/api/v1",s=JSON.stringify(o);let a={method:t,headers:{"Content-Type":"application/json",...n}};"PUT"!==t&&"POST"!==t||(a={...a,body:s});try{return await(await fetch(`${i}/${e}`,a)).json()}catch(e){return e}}async __authRequest(e,t=(()=>{})){const n=localStorage.getItem("token");if(n)try{const o=await this.__request("auth/verify/"+n);if(e&&o.verify)return t(),!0;if(!e||!o.success)return t(),!1}catch(e){console.log(e)}}}},80:function(e,t,n){"use strict";n.r(t);var o=n(9),i=n(19),s=(n(35),n(55),n(41),n(6),n(10),n(16),n(1));const a=s.a`<dom-module id="lumo-login-form-wrapper" theme-for="vaadin-login-form-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host {
        max-width: calc(var(--lumo-size-m) * 10);
        background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      }

      [part="form"] {
        padding: var(--lumo-space-l);
      }

      [part="form-title"] {
        margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
      }

      #forgotPasswordButton {
        margin: var(--lumo-space-s) auto;
      }

      [part="error-message"] {
        background-color: var(--lumo-error-color-10pct);
        padding: var(--lumo-space-m);
        border-radius: var(--lumo-border-radius);
        margin-top: var(--lumo-space-m);
        margin-bottom: var(--lumo-space-s);
        color: var(--lumo-error-text-color);
      }

      :host(:not([dir="rtl"])) [part="error-message"] {
        padding-left: var(--lumo-size-m);
      }

      :host([dir="rtl"]) [part="error-message"] {
        padding-right: var(--lumo-size-m);
      }

      [part="error-message"]::before {
        content: var(--lumo-icons-error);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        position: absolute;
        width: var(--lumo-size-m);
        height: 1em;
        line-height: 1;
        text-align: center;
      }

      :host(:not([dir="rtl"])) [part="error-message"]::before {
        /* Visual centering */
        margin-left: calc(var(--lumo-size-m) * -0.95);
      }

      :host([dir="rtl"]) [part="error-message"]::before {
        /* Visual centering */
        margin-right: calc(var(--lumo-size-m) * -0.95);
      }

      [part="error-message-title"] {
        margin: 0 0 0.25em;
        color: inherit;
      }

      [part="error-message-description"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
        margin: 0;
        opacity: 0.9;
      }

      [part="footer"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-secondary-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);var r=n(3),l=n(7),d=n(13);
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const c=e=>class extends e{static get properties(){return{action:{type:String,value:null,notify:!0},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1,notify:!0},i18n:{type:Object,value:function(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}},notify:!0},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(e){e.stopPropagation();const{detail:t,composed:n,cancelable:o,bubbles:i}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:i,cancelable:o,composed:n,detail:t}))||e.preventDefault()}};n(25);
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class h extends(c(Object(d.a)(Object(l.a)(r.a)))){static get template(){return s.a`
    <style>
      :host {
        overflow: hidden;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="form"] {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }

      [part="form-title"] {
        margin: 0;
      }

      [part="error-message"] {
        position: relative;
      }
    </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden\$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form">
        </slot>

        <vaadin-button id="forgotPasswordButton" theme="tertiary small forgot-password" on-click="_forgotPassword" hidden\$="[[noForgotPassword]]">[[i18n.form.forgotPassword]]</vaadin-button>

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
`}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(h.is,h);const p=s.a`<dom-module id="lumo-login-form" theme-for="vaadin-login-form">
  <template>
    <style>
      vaadin-button[part="vaadin-login-submit"] {
        margin-top: var(--lumo-space-l);
        margin-bottom: var(--lumo-space-s);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(p.content);n(32),n(40);class u extends(c(Object(d.a)(Object(l.a)(r.a)))){static get template(){return s.a`
    <style>
      [part="vaadin-login-native-form"] * {
        width: 100%;
      }
    </style>
    <vaadin-login-form-wrapper theme\$="[[theme]]" part="vaadin-login-native-form-wrapper" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      <form part="vaadin-login-native-form" method="POST" action\$="[[action]]" slot="form">
        <vaadin-text-field name="username" label="[[i18n.form.username]]" id="vaadinLoginUsername" required="" on-keydown="_handleInputKeydown" autocapitalize="none" autocorrect="off" spellcheck="false">
          <input type="text" slot="input" on-keyup="_handleInputKeyup">
        </vaadin-text-field>

        <vaadin-password-field name="password" label="[[i18n.form.password]]" id="vaadinLoginPassword" required="" on-keydown="_handleInputKeydown" spellcheck="false">
          <input type="password" slot="input" on-keyup="_handleInputKeyup">
        </vaadin-password-field>

        <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled\$="[[disabled]]">[[i18n.form.submit]]</vaadin-button>
      </form>
    </vaadin-login-form-wrapper>
`}static get is(){return"vaadin-login-form"}static get version(){return"1.2.0"}connectedCallback(){super.connectedCallback(),this._handleInputKeydown=this._handleInputKeydown.bind(this)}_attachDom(e){this.appendChild(e)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){if(this.disabled||!this.__isValid(this.$.vaadinLoginUsername)||!this.__isValid(this.$.vaadinLoginPassword))return;this.error=!1,this.disabled=!0;const e={bubbles:!0,cancelable:!0,detail:{username:this.$.vaadinLoginUsername.value,password:this.$.vaadinLoginPassword.value}},t=this.dispatchEvent(new CustomEvent("login",e));this.action&&t&&this.querySelector('[part="vaadin-login-native-form"]').submit()}__isValid(e){return e.validate&&e.validate()||e.checkValidity&&e.checkValidity()}_isEnterKey(e){return"Enter"===e.key||13===e.keyCode}_handleInputKeydown(e){if(this._isEnterKey(e)){const{currentTarget:t}=e,n="vaadinLoginUsername"===t.id?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;this.__isValid(t)&&(this.__isValid(n)?this.submit():n.focus())}}_handleInputKeyup(e){const t="Tab"===e.key||9===e.keyCode,n=e.currentTarget;t&&n&&n.select&&(n.select(),setTimeout(()=>n.setSelectionRange(0,9999)))}}customElements.define(u.is,u);n(15);const m=document.createElement("template");m.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(m.content);const v=s.a`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(v.content);var g=n(28),y=n(29),b=n(23),_=n(39);const f=Element.prototype,w=f.matches||f.matchesSelector||f.mozMatchesSelector||f.msMatchesSelector||f.oMatchesSelector||f.webkitMatchesSelector;
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let x=0;const C={},E=e=>{x++;const t="vaadin-overlay-content-"+x,n=document.createElement("template"),o=document.createElement("style");o.textContent=":host { display: block; }"+e,n.content.appendChild(o),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(n,t);const i=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(n.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(i.is,i),C[e]=t,t};class L extends(Object(l.a)(Object(_.a)(r.a))){static get template(){return s.a`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new b.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,n=document.documentElement.clientHeight;t&&n>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",n-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Object(y.a)(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const n=`__${e}Handler`,o=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",o),delete this[n])};this[n]=o,this.addEventListener("animationend",o)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof L&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===L.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),L.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=L.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Object(g.c)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const n=e._templateRoot||(e._templateRoot=e.getRootNode());if(n!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(n.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(n.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=C[e]||E(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this.template=void 0:n!==o&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,n,o,i,s){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const a=this._oldOwner!==n||this._oldModel!==o;this._oldModel=o,this._oldOwner=n;const r=this._oldInstanceProps!==i||this._oldTemplate!==e;this._oldInstanceProps=i,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==s;if(this._oldOpened=s,e&&r)this._stampOverlayTemplate(e,i);else if(t&&(l||d||a)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);s&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const n=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(n)),(t+=e)>=n.length?t=0:t<0&&(t=n.length-1),n[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return w.call(e,"input, select, textarea, button, object")?w.call(e,":not([disabled])"):w.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&w.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const n=e,o=this._normalizedTabIndex(n);let i,s=o>0;if(o>=0&&t.push(n),i="slot"===n.localName?n.assignedNodes({flatten:!0}):(n.shadowRoot||n).children,i)for(let e=0;e<i.length;e++)s=this._collectTabbableNodes(i[e],t)||s;return s}static _isVisible(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)}static _sortByTabIndex(e){const t=e.length;if(t<2)return e;const n=Math.ceil(t/2),o=this._sortByTabIndex(e.slice(0,n)),i=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(o,i)}static _mergeSortByTabIndex(e,t){const n=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return n.concat(e,t)}static _hasLowerTabOrder(e,t){const n=Math.max(e.tabIndex,0),o=Math.max(t.tabIndex,0);return 0===n||0===o?o>n:n>o}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const n=e.ownerDocument;for(;t&&t!==n&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=L.__attachedInstances.filter(e=>e!==this).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(L.is,L);const z=s.a`<dom-module id="vaadin-login-overlay-wrapper-lumo-styles" theme-for="vaadin-login-overlay-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      [part="backdrop"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      }

      [part="content"] {
        padding: 0;
      }

      [part="overlay"] {
        background: none;
        border-radius: 0;
        box-shadow: none;
        width: 100%;
        height: 100%;
      }

      [part="card"] {
        width: calc(var(--lumo-size-m) * 10);
        background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      }

      [part="brand"] {
        padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        min-height: calc(var(--lumo-size-m) * 5);
      }

      [part="description"] {
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-tint-70pct);
        margin-bottom: 0;
      }

      [part="content"] {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      [part="card"] {
        border-radius: var(--lumo-border-radius);
        box-shadow: var(--lumo-box-shadow-s);
        margin: var(--lumo-space-s);
        height: auto;
      }

      /* Small screen */
      @media only screen
      and (max-width: 500px) {
        [part="overlay"],
        [part="content"] {
          height: 100%;
        }

        [part="content"] {
          min-height: 100%;
          background: var(--lumo-base-color);
          align-items: flex-start;
        }

        [part="card"],
        [part="overlay"] {
          width: 100%;
          border-radius: 0;
          box-shadow: none;
          margin: 0;
        }

        /* RTL styles */
        :host([dir="rtl"]) [part="brand"] {
          padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
        }
      }

      /* Landscape small screen */
      @media only screen
      and (max-height: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        [part="card"] {
          flex-direction: row;
          align-items: stretch;
          max-width: calc(var(--lumo-size-m) * 16);
          width: 100%;
        }

        [part="brand"],
        [part="form"] {
          flex: auto;
          flex-basis: 0;
          box-sizing: border-box;
        }

        [part="brand"] {
          justify-content: flex-start;
        }

        [part="form"] {
          padding: var(--lumo-space-l);
          overflow: auto;
        }
      }

      /* Landscape really small screen */
      @media only screen
      and (max-height: 500px)
      and (min-width: 600px)
      and (orientation: landscape),
      only screen
      and (max-width: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        [part="content"] {
          height: 100vh;
        }

        [part="card"] {
          margin: 0;
          width: 100%;
          max-width: none;
          height: 100%;
          flex: auto;
          border-radius: 0;
          box-shadow: none;
        }

        [part="form"] {
          height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }
      }

      /* Handle iPhone X notch */
      @media only screen
      and (device-width: 375px)
      and (device-height: 812px)
      and (-webkit-device-pixel-ratio: 3) {
        [part="card"] {
          padding-right: constant(safe-area-inset-right);
          padding-right: env(safe-area-inset-right);

          padding-left: constant(safe-area-inset-left);
          padding-left: env(safe-area-inset-left);
        }

        [part="brand"] {
          margin-left: calc(constant(safe-area-inset-left) * -1);
          margin-left: calc(env(safe-area-inset-left) * -1);

          padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
          padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
        }

        /* RTL styles */
        :host([dir="rtl"]) [part="card"] {
          padding-left: constant(safe-area-inset-right);
          padding-left: env(safe-area-inset-right);
          padding-right: constant(safe-area-inset-left);
          padding-right: env(safe-area-inset-left);
        }

        :host([dir="rtl"]) [part="brand"] {
          margin-right: calc(constant(safe-area-inset-left) * -1);
          margin-right: calc(env(safe-area-inset-left) * -1);
          padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
          padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-login-overlay" theme-for="vaadin-login-form-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host([theme~="with-overlay"]) {
        min-height: 100%;
        display: flex;
        justify-content: center;
        max-width: 100%;
      }

      /* Landscape small screen */
      @media only screen
      and (max-height: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        :host([theme~="with-overlay"]) [part="form"] {
          height: 100%;
          -webkit-overflow-scrolling: touch;
          flex: 1;
          padding: 2px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(z.content);var k=n(20);
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/const O=document.createElement("template");let T;O.innerHTML='<dom-module id="vaadin-login-overlay-wrapper-template">\n  <template>\n    <style>\n      [part="overlay"] {\n        outline: none;\n      }\n\n      [part="card"] {\n        max-width: 100%;\n        box-sizing: border-box;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part="brand"] {\n        box-sizing: border-box;\n        overflow: hidden;\n        flex-grow: 1;\n        flex-shrink: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n      }\n\n      [part="brand"] h1 {\n        color: inherit;\n        margin: 0;\n      }\n    </style>\n    <section part="card">\n      <div part="brand">\n        <slot name="title">\n          <h1 part="title">[[title]]</h1>\n        </slot>\n        <p part="description">[[description]]</p>\n      </div>\n      <div part="form">\n        <slot></slot>\n      </div>\n    </section>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(O.content);class $ extends L{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!T){T=super.template.cloneNode(!0);const e=k.a.import(this.is+"-template","template"),t=e.content.querySelector("[part=card]"),n=e.content.querySelector("style"),o=T.content.querySelector("#content");o.replaceChild(t,o.children[0]),o.appendChild(n)}return T}}customElements.define($.is,$);
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class S extends(c(Object(d.a)(Object(l.a)(r.a)))){static get template(){return s.a`
    <vaadin-login-overlay-wrapper id="vaadinLoginOverlayWrapper" opened="{{opened}}" focus-trap="" with-backdrop="" title="[[title]]" description="[[description]]" theme\$="[[theme]]">

      <vaadin-login-form theme="with-overlay" id="vaadinLoginForm" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      </vaadin-login-form>

    </vaadin-login-overlay-wrapper>
`}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(e){const t=e.base;t&&(this.title=t.title,this.description=t.description)}_preventClosingLogin(e){e.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(e){const t=Array.from(e).map(e=>this.$.vaadinLoginOverlayWrapper.appendChild(e));return()=>{for(;t.length>0;)this.appendChild(t.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(S.is,S);const I=s.a`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="lumo-overlay">
      /* Optical centering */
      :host::before,
      :host::after {
        content: "";
        flex-basis: 0;
        flex-grow: 1;
      }

      :host::after {
        flex-grow: 1.1;
      }

      [part="overlay"] {
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: var(--lumo-space-l);
      }

      /* Animations */

      :host([opening]),
      :host([closing]) {
        animation: 0.25s lumo-overlay-dummy-animation;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(.215, .61, .355, 1) both;
      }

      @keyframes vaadin-dialog-enter {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(.55, .055, .675, .19) both;
      }

      :host([closing]) [part="backdrop"] {
        animation-delay: 0.05s;
      }

      @keyframes vaadin-dialog-exit {
        100% {
          opacity: 0;
          transform: scale(1.02);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(I.content);var P=n(63);const B=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})(),N=e=>class extends e{static get properties(){return{_touchDevice:{type:Boolean,value:B},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!("touchstart"===e.type&&e.touches.length>1)&&this.draggable&&(0===e.button||e.touches)){const t=this.$.overlay.$.resizerContainer,n=e.target===t,o=e.offsetX>t.clientWidth||e.offsetY>t.clientHeight,i=e.target===this.$.overlay.$.content,s=e.composedPath().some((e,t)=>{if(e.classList){const n=e.classList.contains(this.__dragHandleClassName||"draggable"),o=e.classList.contains("draggable-leaf-only"),i=0===t;return o&&i||n&&(!o||i)}});if(n&&!o||i||s){!s&&e.preventDefault(),this._originalBounds=this._getOverlayBounds();const t=this.__getMouseOrFirstTouchEvent(e);this._originalMouseCoords={top:t.pageY,left:t.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),"absolute"!==this.$.overlay.$.overlay.style.position&&this._setBounds(this._originalBounds)}}}_drag(e){const t=this.__getMouseOrFirstTouchEvent(e);if(this._eventInWindow(t)){const e=this._originalBounds.top+(t.pageY-this._originalMouseCoords.top),n=this._originalBounds.left+(t.pageX-this._originalMouseCoords.left);this._setBounds({top:e,left:n})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}},R=document.createElement("template");R.innerHTML="<dom-module id=\"vaadin-dialog-resizable-overlay-styles\" theme-for=\"vaadin-dialog-overlay\">\n  <template>\n    <style>\n      [part='overlay'] {\n        position: relative;\n        overflow: visible;\n        max-height: 100%;\n        display: flex;\n      }\n\n      [part='content'] {\n        box-sizing: border-box;\n        height: 100%;\n      }\n\n      .resizer-container {\n        overflow: auto;\n        flex-grow: 1;\n      }\n\n      [part='overlay'][style] .resizer-container {\n        min-height: 100%;\n        width: 100%;\n      }\n\n      :host(:not([resizable])) .resizer {\n        display: none;\n      }\n\n      .resizer {\n        position: absolute;\n        height: 16px;\n        width: 16px;\n      }\n\n      .resizer.edge {\n        height: 8px;\n        width: 8px;\n        top: -4px;\n        right: -4px;\n        bottom: -4px;\n        left: -4px;\n      }\n\n      .resizer.edge.n {\n        width: auto;\n        bottom: auto;\n        cursor: ns-resize;\n      }\n\n      .resizer.ne {\n        top: -4px;\n        right: -4px;\n        cursor: nesw-resize;\n      }\n\n      .resizer.edge.e {\n        height: auto;\n        left: auto;\n        cursor: ew-resize;\n      }\n\n      .resizer.se {\n        bottom: -4px;\n        right: -4px;\n        cursor: nwse-resize;\n      }\n\n      .resizer.edge.s {\n        width: auto;\n        top: auto;\n        cursor: ns-resize;\n      }\n\n      .resizer.sw {\n        bottom: -4px;\n        left: -4px;\n        cursor: nesw-resize;\n      }\n\n      .resizer.edge.w {\n        height: auto;\n        right: auto;\n        cursor: ew-resize;\n      }\n\n      .resizer.nw {\n        top: -4px;\n        left: -4px;\n        cursor: nwse-resize;\n      }\n\n      /* IE11 -only CSS */\n      _:-ms-fullscreen,\n      [part='overlay'] {\n        max-height: none;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(R.content);const A=e=>class extends e{ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const t=document.createElement("div");this._resizeListeners.start[e]=t=>this._startResize(t,e),this._resizeListeners.resize[e]=t=>this._resize(t,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),1===e.length&&t.classList.add("edge"),t.classList.add("resizer"),t.classList.add(e),t.addEventListener("mousedown",this._resizeListeners.start[e]),t.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(t)})}_startResize(e,t){if(!("touchstart"===e.type&&e.touches.length>1)&&(0===e.button||e.touches)){e.preventDefault(),this._originalBounds=this._getOverlayBounds();const n=this.__getMouseOrFirstTouchEvent(e);this._originalMouseCoords={top:n.pageY,left:n.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[t]),window.addEventListener("touchmove",this._resizeListeners.resize[t]),window.addEventListener("mouseup",this._resizeListeners.stop[t]),window.addEventListener("touchend",this._resizeListeners.stop[t]),"absolute"!==this.$.overlay.$.overlay.style.position&&this._setBounds(this._originalBounds)}}_resize(e,t){const n=this.__getMouseOrFirstTouchEvent(e);if(this._eventInWindow(n)){const e=40;t.split("").forEach(t=>{switch(t){case"n":{const t=this._originalBounds.height-(n.pageY-this._originalMouseCoords.top),o=this._originalBounds.top+(n.pageY-this._originalMouseCoords.top);t>e&&this._setBounds({top:o,height:t});break}case"e":{const t=this._originalBounds.width+(n.pageX-this._originalMouseCoords.left);t>e&&this._setBounds({width:t});break}case"s":{const t=this._originalBounds.height+(n.pageY-this._originalMouseCoords.top);t>e&&this._setBounds({height:t});break}case"w":{const t=this._originalBounds.width-(n.pageX-this._originalMouseCoords.left),o=this._originalBounds.left+(n.pageX-this._originalMouseCoords.left);t>e&&this._setBounds({left:o,width:t});break}}}),this.$.overlay.notifyResize()}}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:t,height:n}=getComputedStyle(this.$.overlay.$.overlay),o=this.$.overlay.$.content;o.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:i,height:s}=getComputedStyle(o);return o.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:t,height:n,contentWidth:i,contentHeight:s}}};var M=n(49),D=n(43);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const F=document.createElement("template");let j;F.innerHTML='<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">\n  <template>\n    <style>\n      /*\n        NOTE(platosha): Make some min-width to prevent collapsing of the content\n        taking the parent width, e. g., <vaadin-grid> and such.\n      */\n      [part="content"] {\n        min-width: 12em; /* matches the default <vaadin-text-field> width */\n      }\n\n      :host([has-bounds-set]) [part="overlay"] {\n        max-width: none;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(F.content);class q extends(Object(D.b)(M.a,L)){static get is(){return"vaadin-dialog-overlay"}static get template(){if(!j){j=super.template.cloneNode(!0);const e=j.content.querySelector('[part="content"]'),t=j.content.querySelector('[part="overlay"]'),n=document.createElement("div");n.id="resizerContainer",n.classList.add("resizer-container"),n.appendChild(e),t.appendChild(n)}return j}static get properties(){return{modeless:Boolean,withBackdrop:Boolean}}}customElements.define(q.is,q);class U extends(Object(P.a)(Object(d.a)(N(A(r.a))))){static get template(){return s.a`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-mousedown="_bringOverlayToFront" on-touchstart="_bringOverlayToFront" theme\$="[[theme]]" modeless="[[modeless]]" with-backdrop="[[!modeless]]" resizable\$="[[resizable]]" focus-trap="">
    </vaadin-dialog-overlay>
`}static get is(){return"vaadin-dialog"}static get version(){return"2.4.5"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},theme:String,_contentTemplate:Object,renderer:Function,modeless:{type:Boolean,value:!1},draggable:{type:Boolean,value:!1,reflectToAttribute:!0},resizable:{type:Boolean,value:!1,reflectToAttribute:!0},_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_templateOrRendererChanged(_contentTemplate, renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._observer=new b.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this._contentTemplate=void 0:n!==o&&(this.renderer=void 0)}render(){this.$.overlay.render()}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for dialog content");this._oldTemplate=e,this._oldRenderer=t,t&&this.$.overlay.setProperties({owner:this,renderer:t})}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_openedChanged(e){e&&(this.$.overlay.template=this.querySelector("template")),this.$.overlay.opened=e}_ariaLabelChanged(e){null!=e?this.$.overlay.setAttribute("aria-label",e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){!1===e.detail.value&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_setBounds(e){const t=this.$.overlay.$.overlay,n=Object.assign({},e);"absolute"!==t.style.position&&(t.style.position="absolute",this.$.overlay.setAttribute("has-bounds-set",""),this.__forceSafariReflow());for(const e in n)"number"==typeof n[e]&&(n[e]=n[e]+"px");Object.assign(t.style,n)}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}_getOverlayBounds(){const e=this.$.overlay.$.overlay.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();return{top:e.top-t.top,left:e.left-t.left,width:e.width,height:e.height}}_eventInWindow(e){return e.clientX>=0&&e.clientX<=window.innerWidth&&e.clientY>=0&&e.clientY<=window.innerHeight}__getMouseOrFirstTouchEvent(e){return e.touches?e.touches[0]:e}__forceSafariReflow(){const e=this.$.overlay.$.resizerContainer.scrollTop,t=this.$.overlay.$.overlay;t.style.display="block",window.requestAnimationFrame(()=>{t.style.display="",this.$.overlay.$.resizerContainer.scrollTop=e})}}customElements.define(U.is,U);n(34);class H extends i.a{static get properties(){return{username:String,password:String}}constructor(){super()}async update(e){super.update(e),e.has("username")&&e.has("password")&&await this.requestUpdate()}render(){return o.c`
            <vaadin-login-overlay opened
                    title="GayolApp" description="" 
                    @login="${this.logIn}">
            </vaadin-login-overlay>
            <vaadin-dialog id="dialog"></vaadin-dialog>
        `}async logIn({detail:e}){this.username=e.username,this.password=e.password;let t={email:this.username,password:this.password};await this.validateUser(t)}async validateUser(e){try{const t=await this.__request("auth/login","POST",{},e);if(t.success)localStorage.setItem("token",t.token),this.dispatchEvent(new CustomEvent("login-success")),window.location="/dashboard";else{const e=this.shadowRoot.querySelector("#dialog");e.renderer=(n,o)=>{if(!n.firstElementChild){const o=document.createElement("p");o.textContent=""+t.error;const i=document.createElement("vaadin-button");i.textContent="Close",i.addEventListener("click",t=>{t.preventDefault(),e.opened=!1}),n.appendChild(o),n.appendChild(i)}},e.opened=!0;const n=this.shadowRoot.querySelector("vaadin-login-overlay");n.error=!0,n.disabled=!1}await this.requestUpdate()}catch(e){console.log(e)}}_forgotPassword(){}}window.customElements.define("login-user",H)}}]);