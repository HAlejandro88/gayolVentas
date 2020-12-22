(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class o{constructor(t){this.value=t.toString()}toString(){return this.value}}function r(t){if(t instanceof o)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}const i=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof o)return r(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(n)+t[i+1],t[0]),n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(41);n(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Object(o.a)(HTMLElement)},function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,n){"use strict";n(33),n(13),n(22);const o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(22),r=n(57);const i=t=>class extends(Object(r.a)(t)){static finalize(){super.finalize();const t=this.prototype._template,e=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!e&&Array.from(n.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),t)}),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){const e=o.a.prototype.modules;let n=!1;const r=this.is+"-default-theme";Object.keys(e).sort((t,e)=>{const n=0===t.indexOf("vaadin-"),o=0===e.indexOf("vaadin-"),r=["lumo-","material-"],i=r.filter(e=>0===t.indexOf(e)).length>0,s=r.filter(t=>0===e.indexOf(t)).length>0;return n!==o?n?-1:1:i!==s?i?-1:1:0}).forEach(o=>{if(o!==r){const r=e[o].getAttribute("theme-for");r&&r.split(" ").forEach(e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(o,t))})}}),!n&&e[r]&&this._includeStyle(r,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){const n=document.createElement("style");n.setAttribute("include",t),e.content.appendChild(n)}}}},function(t,e,n){"use strict";n(33),n(13);const o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},function(t,e,n){"use strict";n(33),n(13);const o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));n(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o=0,r=0,i=[],s=0,a=!1,l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=i.length;for(let e=0;e<t;e++){let t=i[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}i.splice(0,t),r+=t})).observe(l,{characterData:!0});const c={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},u={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},d={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},h={run:t=>(a||(a=!0,l.textContent=s++),i.push(t),o++),cancel(t){const e=t-r;if(e>=0){if(!i[e])throw new Error("invalid async handle: "+t);i[e]=null}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));n(3),n(16),n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class o{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,r.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof o?t._cancelAsync():t=new o,t.setConfig(e,n),t}}let r=new Set;const i=function(t){r.add(t)},s=function(){const t=Boolean(r.size);return r.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n(8),r=n(9),i=n(23),s=n(37);const a=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,l=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function c(t,e){if("function"!=typeof t)return;const n=a.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const u=function(t,e){if(window.Vaadin.developmentMode)return c(t,e)};function d(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(l?!function(){if(l){if(Object.keys(l).map(t=>l[t]).filter(t=>t.productionMode).length>0)return!0}return!1}():!c((function(){return!0})))}catch(t){return!1}}());const h=function(){return u(d)};let p;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){h&&h()};const m=new Set,f=t=>class extends(Object(s.a)(t)){static finalize(){super.finalize();const{is:t}=this;t&&!m.has(t)&&(window.Vaadin.registrations.push(this),m.add(t),window.Vaadin.developmentModeCallback&&(p=r.a.debounce(p,o.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(i.a)(p)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},function(t,e,n){"use strict";n(33),n(13),n(22);const o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},function(t,e,n){"use strict";n(33),n(13);const o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},function(t,e,n){"use strict";var o=n(75),r=n(54),i=n(56);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=new o.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){s.processStyles(),Object(r.c)(t,e)},styleElement(t){s.processStyles()},styleDocument(t){s.processStyles(),Object(r.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(r.b)(t,e),flushCustomStyles(){},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b}),window.ShadyCSS.CustomStyleInterface=s;var a=n(65);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const l=window.ShadyCSS.CustomStyleInterface;class c extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(a.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",c)},function(t,e,n){"use strict";n.d(e,"r",(function(){return r})),n.d(e,"n",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return a})),n.d(e,"i",(function(){return l})),n.d(e,"m",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"g",(function(){return h})),n.d(e,"p",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"h",(function(){return f})),n.d(e,"b",(function(){return _})),n.d(e,"j",(function(){return y})),n.d(e,"c",(function(){return b})),n.d(e,"o",(function(){return g})),n.d(e,"d",(function(){return v})),n.d(e,"q",(function(){return w}));n(3);var o=n(42);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!window.ShadyDOM||!window.ShadyDOM.inUse,i=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,r&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let s=window.Polymer&&window.Polymer.rootPath||Object(o.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let l=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let c=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let u=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let d=window.Polymer&&window.Polymer.legacyOptimizations||!1;let h=window.Polymer&&window.Polymer.legacyWarnings||!1;let p=window.Polymer&&window.Polymer.syncInitialRender||!1;let m=window.Polymer&&window.Polymer.legacyUndefined||!1;let f=window.Polymer&&window.Polymer.orderedComputed||!1;let _=!0;let y=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let b=window.Polymer&&window.Polymer.fastDomIf||!1;let g=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;let v=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let w=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;const i=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=o++;return function(o){let r=o.__mixinSet;if(r&&r[n])return o;let i=e,s=i.get(o);if(!s){s=t(o),i.set(o,s);let e=Object.create(s.__mixinSet||r||null);e[n]=!0,s.__mixinSet=e}return s}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},function(t,e,n){"use strict";n(13),n(33);const o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,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) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(o.content)},,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(3);var o=n(42),r=n(14);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let i={},s={};function a(t,e){i[t]=s[t.toLowerCase()]=e}function l(t){return i[t]||s[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=l(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,o){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(o.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(o.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(r.m&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=i,customElements.define("dom-module",c)},function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));n(3);var o=n(9);n.d(e,"a",(function(){return o.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(o.c)()}while(t||e)}},,function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return v})),n.d(e,"a",(function(){return w}));n(3);var o=n(64),r=n(47),i=n(14),s=n(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const c=Object(o.a)(l),u=Object(r.a)(c);const d=Object(o.a)(class{});function h(t,e){for(let n=0;n<e.length;n++){let o=e[n];if(Boolean(t)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)t?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if("slot"===o.localName)if(t)o.__polymerReplaced__=document.createComment("hidden-slot"),Object(s.a)(Object(s.a)(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const t=o.__polymerReplaced__;t&&Object(s.a)(Object(s.a)(t).parentNode).replaceChild(o,t)}else o.style&&(t?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=t,o._showHideChildren&&o._showHideChildren(t)}}class p extends d{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(t,e,n)}}_showHideChildren(t){h(t,this.children)}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;const m=Object(r.a)(p);function f(t){let e=t.__dataHost;return e&&e._methodHost||e}function _(t,e,n){let o=n.mutableData?m:p;v.mixin&&(o=v.mixin(o));let r=class extends o{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(t),function(t,e,n,o){let r=n.hostProps||{};for(let e in o.instanceProps){delete r[e];let n=o.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:g(e,n)})}if(o.forwardHostProp&&e.__dataHost)for(let e in r)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(r,t,e,n),r}function y(t,e,n,o){let r=n.forwardHostProp;if(r&&e.hasHostProps){const d="template"==t.localName;let h=e.templatizeTemplateClass;if(!h){if(d){let t=n.mutableData?u:c;class o extends t{}h=e.templatizeTemplateClass=o}else{const n=t.constructor;class o extends n{}h=e.templatizeTemplateClass=o}let s=e.hostProps;for(let t in s)h.prototype._addPropertyEffect("_host_"+t,h.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:b(t,r)}),h.prototype._createNotifyingProperty("_host_"+t);i.g&&o&&function(t,e,n){const o=n.constructor._properties,{propertyEffects:r}=t,{instanceProps:i}=e;for(let t in r)if(!(o[t]||i&&i[t])){const e=r[t];for(let n=0;n<e.length;n++){const{part:o}=e[n].info;if(!o.signature||!o.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,n,o)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),d)l=h,a=s=t,Object.setPrototypeOf(s,l.prototype),new l,a=null,t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,h.prototype);const n=e.hostProps;for(let e in n)if(e="_host_"+e,e in t){const n=t[e];delete t[e],t.__data[e]=n}}}var s,l}function b(t,e){return function(t,n,o){e.call(t.__templatizeOwner,n.substring("_host_".length),o[n])}}function g(t,e){return function(t,n,o){e.call(t.__templatizeOwner,t,n,o[n])}}function v(t,e,n){if(i.m&&!f(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let o=(e?e.constructor:p)._parseTemplate(t),r=o.templatizeInstanceClass;r||(r=_(t,o,n),o.templatizeInstanceClass=r);const s=f(t);y(t,o,n,s);let a=class extends r{};return a.prototype._methodHost=s,a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=o.hostProps,a=a,a}function w(t,e){let n;for(;e;)if(n=e.__dataHost?e:e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Object(s.a)(e).parentNode;return null}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n(2),r=n(35),i=n(5),s=n(44),a=n(10),l=n(1),c=n(28);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(a.a)(Object(s.a)(Object(i.a)(Object(r.a)(o.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(c.a)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(c.a)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(u.is,u)},function(t,e,n){"use strict";n.d(e,"a",(function(){return z})),n.d(e,"b",(function(){return k})),n.d(e,"d",(function(){return F})),n.d(e,"c",(function(){return D}));n(3);var o=n(8),r=n(9),i=n(14),s=n(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",c="__polymerGesturesTouchAction",u=["mousedown","mousemove","mouseup","click"],d=[0,1,4,2],h=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function p(t){return u.indexOf(t)>-1}let m=!1;function f(t){if(!p(t)&&"touchend"!==t)return a&&m&&i.i?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){m=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let _=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const y=[],b={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},g={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function v(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let o=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<o.length;t++)e.push(o[t])}}return e}let w=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[l]={skip:!0},"click"===t.type)){let e=!1,o=S(t);for(let t=0;t<o.length;t++){if(o[t].nodeType===Node.ELEMENT_NODE)if("label"===o[t].localName)y.push(o[t]);else if(n=o[t],b[n.localName]){let n=v(o[t]);for(let t=0;t<n.length;t++)e=e||y.indexOf(n[t])>-1}if(o[t]===C.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function P(t){let e=_?["click"]:u;for(let n,o=0;o<e.length;o++)n=e[o],t?(y.length=0,document.addEventListener(n,w,!0)):document.removeEventListener(n,w,!0)}function A(t){let e=t.type;if(!p(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!h&&(e=d[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let C={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function O(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function x(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}i.b&&document.addEventListener("touchend",(function(t){if(!i.b)return;C.mouse.mouseIgnoreJob||P(!0),C.mouse.target=S(t)[0],C.mouse.mouseIgnoreJob=r.a.debounce(C.mouse.mouseIgnoreJob,o.d.after(2500),(function(){P(),C.mouse.target=null,C.mouse.mouseIgnoreJob=null}))}),!!m&&{passive:!0});const S=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],T={},E=[];function N(t){const e=S(t);return e.length>0?e[0]:t.target}function j(t){let e,n=t.type,o=t.currentTarget.__polymerGestures;if(!o)return;let r=o[n];if(r){if(!t[l]&&(t[l]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(C.touch.id=e.identifier),C.touch.id!==e.identifier)return;a||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)C.touch.x=e.clientX,C.touch.y=e.clientY,C.touch.scrollDecided=!1;else if("touchmove"===n){if(C.touch.scrollDecided)return;C.touch.scrollDecided=!0;let n=function(t){let e="auto",n=S(t);for(let t,o=0;o<n.length;o++)if(t=n[o],t[c]){e=t[c];break}return e}(t),o=!1,r=Math.abs(C.touch.x-e.clientX),i=Math.abs(C.touch.y-e.clientY);t.cancelable&&("none"===n?o=!0:"pan-x"===n?o=i>r:"pan-y"===n&&(o=r>i)),o?t.preventDefault():M("track")}}(t)}if(e=t[l],!e.skip){for(let n,o=0;o<E.length;o++)n=E[o],r[n.name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let o,i=0;i<E.length;i++)o=E[i],r[o.name]&&!e[o.name]&&(e[o.name]=!0,o[n](t))}}}function z(t,e,n){return!!T[e]&&(function(t,e,n){let o=T[e],r=o.deps,i=o.name,s=t.__polymerGestures;s||(t.__polymerGestures=s={});for(let e,n,o=0;o<r.length;o++)e=r[o],_&&p(e)&&"click"!==e||(n=s[e],n||(s[e]=n={_count:0}),0===n._count&&t.addEventListener(e,j,f(e)),n[i]=(n[i]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),o.touchAction&&F(t,o.touchAction)}(t,e,n),!0)}function k(t,e,n){return!!T[e]&&(function(t,e,n){let o=T[e],r=o.deps,i=o.name,s=t.__polymerGestures;if(s)for(let e,n,o=0;o<r.length;o++)e=r[o],n=s[e],n&&n[i]&&(n[i]=(n[i]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,j,f(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function I(t){E.push(t);for(let e=0;e<t.emits.length;e++)T[t.emits[e]]=t}function F(t,e){a&&t instanceof HTMLElement&&o.c.run(()=>{t.style.touchAction=e}),t[c]=e}function L(t,e,n){let o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,Object(s.a)(t).dispatchEvent(o),o.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function M(t){let e=function(t){for(let e,n=0;n<E.length;n++){e=E[n];for(let n,o=0;o<e.emits.length;o++)if(n=e.emits[o],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function D(){C.mouse.mouseIgnoreJob&&C.mouse.mouseIgnoreJob.flush()}function R(t,e,n,o){e&&L(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(t){return M(t)}})}function H(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let o=Math.abs(t.x-e),r=Math.abs(t.y-n);return o>=5||r>=5}function B(t,e,n){if(!e)return;let o,r=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],s=i.x-t.x,a=i.y-t.y,l=0;r&&(o=i.x-r.x,l=i.y-r.y),L(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:s,dy:a,ddx:o,ddy:l,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),o=n;for(;o&&o.shadowRoot&&!window.ShadyDOM;){let r=o;if(o=o.shadowRoot.elementFromPoint(t,e),r===o)break;o&&(n=o)}return n}(n.clientX,n.clientY)}})}function Y(t,e,n){let o=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),i=N(n||e);!i||g[i.localName]&&i.hasAttribute("disabled")||(isNaN(o)||isNaN(r)||o<=25&&r<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=N(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),o=t.pageX,r=t.pageY;return!(o>=n.left&&o<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(e))&&(t.prevent||L(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}I({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){x(this.info)},mousedown:function(t){if(!A(t))return;let e=N(t),n=this;O(this.info,(function(t){A(t)||(R("up",e,t),x(n.info))}),(function(t){A(t)&&R("up",e,t),x(n.info)})),R("down",e,t)},touchstart:function(t){R("down",N(t),t.changedTouches[0],t)},touchend:function(t){R("up",N(t),t.changedTouches[0],t)}}),I({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,x(this.info)},mousedown:function(t){if(!A(t))return;let e=N(t),n=this,o=function(t){let o=t.clientX,r=t.clientY;H(n.info,o,r)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&M("tap"),n.info.addMove({x:o,y:r}),A(t)||(n.info.state="end",x(n.info)),e&&B(n.info,e,t),n.info.started=!0)};O(this.info,o,(function(t){n.info.started&&o(t),x(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=N(t),n=t.changedTouches[0],o=n.clientX,r=n.clientY;H(this.info,o,r)&&("start"===this.info.state&&M("tap"),this.info.addMove({x:o,y:r}),B(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=N(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),B(this.info,e,n))}}),I({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){A(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){A(t)&&Y(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Y(this.info,t.changedTouches[0],t)}})},,function(t,e,n){"use strict";n(38),n(27)},,,function(t,e,n){"use strict";class o extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",o)},,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(3);var o=n(16),r=n(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=Object(o.a)(t=>class extends t{_addEventListenerToNode(t,e,n){Object(r.a)(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Object(r.b)(t,e,n)||super._removeEventListenerFromNode(t,e,n)}})},,function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(70);const r=[];let i;new MutationObserver((function(){const t=a();r.forEach(e=>{s(e,t)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const s=function(t,e){e?t.setAttribute("dir",e):t.removeAttribute("dir")},a=function(){return document.documentElement.getAttribute("dir")},l=t=>class extends t{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),i||(i=o.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),s(this,a()))}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),"dir"!==t)return;const o=n===a()&&-1===r.indexOf(this),i=!n&&e&&-1===r.indexOf(this),l=n!==a()&&e===a();o||i?(this.__subscribe(),s(this,a())):l&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(t=!0){t?-1===r.indexOf(this)&&r.push(this):r.indexOf(this)>-1&&r.splice(r.indexOf(this),1)}__getNormalizedScrollLeft(t){return o.a.getNormalizedScrollLeft(i,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return o.a.setNormalizedScrollLeft(i,this.getAttribute("dir")||"ltr",t,e)}}},function(t,e,n){"use strict";n(71),n(27)},,,function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return m}));n(3);var o=n(14),r=n(16),i=n(65),s=n(42),a=n(22),l=n(64),c=n(69),u=n(68);const d=Object(r.a)(t=>{const e=Object(u.a)(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function o(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let n in t){const o=t[n];e[n]="function"==typeof o?{type:o}:o}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){Object(c.b)(this.prototype);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=o(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,o(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){Object(c.a)(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var h=n(17);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const p=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(r.a)(t=>{const e=d(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):o.e||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let i in t)e=this.prototype,n=i,o=t[i],r=t,o.computed&&(o.readOnly=!0),o.computed&&(e._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):e._createComputedProperty(n,o.computed,r)),o.readOnly&&!e._hasReadOnlyEffect(n)?e._createReadOnlyProperty(n,!o.computed):!1===o.readOnly&&e._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),o.reflectToAttribute&&!e._hasReflectEffect(n)?e._createReflectedProperty(n):!1===o.reflectToAttribute&&e._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),o.notify&&!e._hasNotifyEffect(n)?e._createNotifyingProperty(n):!1===o.notify&&e._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),o.observer&&e._createPropertyObserver(n,o.observer,r[o.observer]),e._addPropertyToAttributeMap(n);var e,n,o,r}static createObservers(t,e){const n=this.prototype;for(let o=0;o<t.length;o++)n._createMethodObserver(t[o],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!o.m||o.a)&&(e=a.a.import(t,"template"),o.m&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(s.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=o.k,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let o=e[n];"value"in o&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=o)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return Object(s.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;!function(t,e,n,r){if(!p){const o=e.content.querySelectorAll("style"),s=Object(i.c)(e),a=Object(i.b)(n),l=e.content.firstElementChild;for(let n=0;n<a.length;n++){let o=a[n];o.textContent=t._processStyleText(o.textContent,r),e.content.insertBefore(o,l)}let c=0;for(let e=0;e<s.length;e++){let n=s[e],i=o[c];i!==n?(n=n.cloneNode(!0),i.parentNode.insertBefore(n,i)):c++,n.textContent=t._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n),o.q&&p&&o.n){const n=e.content.querySelectorAll("style");if(n){let e="";Array.from(n).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}(this,e,t,n?Object(s.c)(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(h.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),o.p&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(s.c)(this.importPath)),Object(s.c)(t,e)}static _parseTemplateContent(t,n,o){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,o)}static _addTemplatePropertyEffect(t,n,r){return!o.g||n in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,n,r)}}})},function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o,r,i=/(url\()([^)]*)(\))/g,s=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if("//"===t)return t;if(void 0===o){o=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",o="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),o)try{return new URL(t,e).href}catch(e){return t}return r||(r=document.implementation.createHTMLDocument("temp"),r.base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=e,r.anchor.href=t,r.anchor.href||t}function l(t,e){return t.replace(i,(function(t,n,o,r){return n+"'"+a(o.replace(/["']/g,""),e)+"'"+r}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"g",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"h",(function(){return h}));n(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o(t){return t.indexOf(".")>=0}function r(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function i(t,e){return 0===t.indexOf(e+".")}function s(t,e){return 0===e.indexOf(t+".")}function a(t,e,n){return e+n.slice(t.length)}function l(t,e){return t===e||i(t,e)||s(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let o=t[n].toString().split(".");for(let t=0;t<o.length;t++)e.push(o[t])}return e.join(".")}return t}function u(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function d(t,e,n){let o=t,r=u(e);for(let t=0;t<r.length;t++){if(!o)return;o=o[r[t]]}return n&&(n.path=r.join(".")),o}function h(t,e,n){let o=t,r=u(e),i=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(o=o[r[t]],!o)return}o[i]=n}else o[e]=n;return r.join(".")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let o=!1;window.addEventListener("keydown",()=>{o=!0},{capture:!0}),window.addEventListener("mousedown",()=>{o=!1},{capture:!0});const r=t=>class extends((t=>class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}})(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this.contains(t.relatedTarget)||this._focus():-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",t=>this._setFocused(!1)),super.ready();const t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&9===t.keyCode)if(t.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){const t=document.createElement("input");t.style.position="absolute",t.style.opacity="0",t.tabIndex=this.tabIndex,this.parentNode.insertBefore(t,this.nextSibling),t.focus(),t.addEventListener("focusout",()=>this.parentNode.removeChild(t))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&o?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}click(){this.disabled||super.click()}}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));var o=n(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e,n,o,r){let i;r&&(i="object"==typeof n&&null!==n,i&&(o=t.__dataTemp[e]));let s=o!==n&&(o==o||n==n);return i&&s&&(t.__dataTemp[e]=n),s}const i=Object(o.a)(t=>class extends t{_shouldPropertyChange(t,e,n){return r(this,t,e,n,!0)}}),s=Object(o.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return r(this,t,e,n,this.mutableData)}});i._mutablePropertyChange=r},,,,,,,function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var o=n(55);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function i(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}function s(t){const e=o.b.test(t)||o.c.test(t);return o.b.lastIndex=0,o.c.lastIndex=0,e}},function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,i=/@media\s(.*)/},function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=!(window.ShadyDOM&&window.ShadyDOM.inUse);let r,i;function s(t){r=(!t||!t.shimcssproperties)&&(o||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=r},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),"theme"===t&&this._setTheme(n)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(14);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=!1;function i(){if(o.e&&!o.r){if(!r){r=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}},function(t,e,n){"use strict";var o=n(2),r=n(25),i=n(9),s=n(23),a=n(47),l=n(43),c=n(8),u=n(17),d=n(58),h=n(14);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const p=Object(a.b)(o.a);class m extends p{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!h.o,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),Object(d.a)()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(u.a)(Object(u.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Object(r.c)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(t,e){let n=this.__instances;for(let o,r=0;r<n.length&&(o=n[r]);r++)o.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if(Object(l.e)(this.as,e)){let o=t[this.itemsIndexAs];e==this.as&&(this.items[o]=n);let r=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,e);this.notifyPath(r,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=i.a.debounce(this.__renderDebouncer,e>0?c.d.after(e):c.c,t.bind(this)),Object(s.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(s.b)()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),n=this.__calculateLimit(e.length);this.__updateInstances(t,n,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),h.o&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;return this.__filterFn&&(e=e.filter((e,n,o)=>this.__filterFn(t[e],n,o))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n])),e}__calculateLimit(t){let e=t;const n=this.__instances.length;if(this.initialCount){let o;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),o=Math.max(e-n,0),this.__chunkCount=o||1):(o=Math.min(Math.max(t-n,0),this.__chunkCount),e=Math.min(n+o,t)),this.__shouldMeasureChunk=o===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,n){const o=this.__itemsIdxToInstIdx={};let r;for(r=0;r<e;r++){let e=this.__instances[r],i=n[r],s=t[i];o[i]=r,e?(e._setPendingProperty(this.as,s),e._setPendingProperty(this.indexAs,r),e._setPendingProperty(this.itemsIndexAs,i),e._flushProperties()):this.__insertInstance(s,r,i)}for(let t=this.__instances.length-1;t>=r;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=Object(u.a)(e.root);for(let t=0;t<e.children.length;t++){let o=e.children[t];n.appendChild(o)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,n){let o={};return o[this.as]=t,o[this.indexAs]=e,o[this.itemsIndexAs]=n,new this.__ctor(o)}__insertInstance(t,e,n){const o=this.__stampInstance(t,e,n);let r=this.__instances[e+1],i=r?r.children[0]:this;return Object(u.a)(Object(u.a)(this).parentNode).insertBefore(o.root,i),this.__instances[e]=o,o}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),o=n.indexOf("."),r=o<0?n:n.substring(0,o);if(r==parseInt(r,10)){let t=o<0?"":n.substring(o+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[r],s=this.__instances[i];if(s){let n=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(n,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Object(r.a)(this.template,t)}}customElements.define(m.is,m)},,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return Q}));n(3);var o=n(17),r=n(16),i=n(43),s=n(66),a=n(67);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};let c=!1,u=!1;function d(t){(function(){if(!c){c=!0;const t=document.createElement("textarea");t.placeholder="a",u=t.placeholder===t.textContent}return u})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function h(t){let e=t.getAttribute("is");if(e&&l[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function p(t,e){let n=e.parentInfo&&p(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,o=0;t;t=t.nextSibling)if(e.parentIndex===o++)return t}function m(t,e,n,o){o.id&&(e[o.id]=n)}function f(t,e,n){if(n.events&&n.events.length)for(let o,r=0,i=n.events;r<i.length&&(o=i[r]);r++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function _(t,e,n,o){n.templateInfo&&(e._templateInfo=n.templateInfo,e._parentTemplateInfo=o)}const y=Object(r.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(e),n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let o=!1,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(r,e,n)||o,d(r),r.firstChild&&this._parseTemplateChildNodes(r,e,n),r.hasAttributes&&r.hasAttributes()&&(o=this._parseTemplateNodeAttributes(r,e,n)||o),o||n.noted}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let o,r=t.firstChild,i=0;r;r=o){if("template"==r.localName&&(r=h(r)),o=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=o;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,o=n.nextSibling,t.removeChild(n),n=o;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let s={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,n){let o=t,r=this._parseTemplate(o,e);return(r.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(t,e,n){let o=!1,r=Array.from(t.attributes);for(let i,s=r.length-1;i=r[s];s--)o=this._parseTemplateNodeAttribute(t,e,n,i.name,i.value)||o;return o}static _parseTemplateNodeAttribute(t,e,n,o,r){return"on-"===o.slice(0,3)?(t.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:r}),!0):"id"===o&&(n.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let n=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,o=e.content||t.content,r=document.importNode(o,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let i=r.nodeList=new Array(n.length);r.$={};for(let t,o=0,s=n.length;o<s&&(t=n[o]);o++){let n=i[o]=p(r,t);m(0,r.$,n,t),_(0,n,t,e),f(this,n,t)}return r=r,r}_addMethodEventListenerToNode(t,e,n,o){let r=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(o=o||t,0,n);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}});var b=n(14);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let g=0;const v=[],w={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},P=/[A-Z]/;function A(t,e,n){let o=t[e];if(o){if(!t.hasOwnProperty(e)&&(o=t[e]=Object.create(t[e]),n))for(let t in o){let e=o[t],n=o[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}else o=t[e]={};return o}function C(t,e,n,o,r,s){if(e){let a=!1;const l=g++;for(let c in n){let u=e[r?Object(i.g)(c):c];if(u)for(let e,i=0,d=u.length;i<d&&(e=u[i]);i++)e.info&&e.info.lastRun===l||r&&!x(c,e.trigger)||(e.info&&(e.info.lastRun=l),e.fn(t,c,n,o,e.info,r,s),a=!0)}return a}return!1}function O(t,e,n,o,r,s,a,l){let c=!1,u=e[a?Object(i.g)(o):o];if(u)for(let e,i=0,d=u.length;i<d&&(e=u[i]);i++)e.info&&e.info.lastRun===n||a&&!x(o,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,o,r,s,e.info,a,l),c=!0);return c}function x(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!Object(i.b)(n,t))||!(!e.wildcard||!Object(i.c)(n,t))}return!0}function S(t,e,n,o,r){let i="string"==typeof r.method?t[r.method]:r.method,s=r.property;i?i.call(t,t.__data[s],o[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function T(t,e,n){let o=Object(i.g)(e);if(o!==e){return E(t,Object(s.a)(o)+"-changed",n[e],e),!0}return!1}function E(t,e,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),Object(o.a)(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function N(t,e,n,o,r,s){let a=(s?Object(i.g)(e):e)!=e?e:null,l=a?Object(i.a)(t,a):t.__data[e];a&&void 0===l&&(l=n[e]),E(t,r.eventName,l,a)}function j(t,e,n,o,r){let i=t.__data[e];b.l&&(i=Object(b.l)(i,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,i)}function z(t,e,n,o){let r=t[w.COMPUTE];if(r)if(b.h){g++;const i=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const n=t[w.COMPUTE];let o,{counts:r,ready:i,total:s}=function(t){const e=t.__computeInfo,n={},o=t[w.COMPUTE],r=[];let i=0;for(let t in e){const o=e[t];i+=n[t]=o.args.filter(t=>!t.literal).length+(o.dynamicFn?1:0)}for(let t in o)e[t]||r.push(t);return{counts:n,ready:r,total:i}}(t);for(;o=i.shift();){e.set(o,e.size);const t=n[o];t&&t.forEach(t=>{const e=t.info.methodInfo;--s,0==--r[e]&&i.push(e)})}if(0!==s){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)I(t,r,s,i,o);let a;for(;a=s.shift();)F(t,"",e,n,a)&&I(a.methodInfo,r,s,i,o);Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;C(t,r,i,n,o);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const k=(t,e,n)=>{let o=0,r=e.length-1,i=-1;for(;o<=r;){const s=o+r>>1,a=n.get(e[s].methodInfo)-n.get(t.methodInfo);if(a<0)o=s+1;else{if(!(a>0)){i=s;break}r=s-1}}i<0&&(i=r+1),e.splice(i,0,t)},I=(t,e,n,o,r)=>{const s=e[r?Object(i.g)(t):t];if(s)for(let e=0;e<s.length;e++){const i=s[e];i.info.lastRun===g||r&&!x(t,i.trigger)||(i.info.lastRun=g,k(i.info,n,o))}};function F(t,e,n,o,r){let i=Y(t,e,n,o,r);if(i===v)return!1;let s=r.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,i,!0):(t[s]=i,!1)}function L(t,e,n,o,r,i,a){n.bindings=n.bindings||[];let l={kind:o,target:r,parts:i,literal:a,isCompound:1!==i.length};if(n.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(s.a)(r)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let n=0;n<l.parts.length;n++){let o=l.parts[n];o.compoundIndex=n,M(t,e,l,o,c)}}function M(t,e,n,o,r){if(!o.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=o.dependencies,s={index:r,binding:n,part:o,evaluator:t};for(let n=0;n<i.length;n++){let o=i[n];"string"==typeof o&&(o=J(o),o.wildcard=!0),t._addTemplatePropertyEffect(e,o.rootProperty,{fn:D,info:s,trigger:o})}}}function D(t,e,n,o,r,s,a){let l=a[r.index],c=r.binding,u=r.part;if(s&&u.source&&e.length>u.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let o=n[e];e=Object(i.i)(u.source,c.target,e),l._setPendingPropertyOrPath(e,o,!1,!0)&&t._enqueueClient(l)}else{let i=r.evaluator._evaluateBinding(t,u,e,n,o,s);i!==v&&function(t,e,n,o,r){r=function(t,e,n,o){if(n.isCompound){let r=t.__dataCompoundStorage[n.target];r[o.compoundIndex]=e,e=r.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,r,n,o),b.l&&(r=Object(b.l)(r,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,r,n.target);else{let o=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?e[w.READ_ONLY]&&e[w.READ_ONLY][o]||e._setPendingProperty(o,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,r)}}(t,l,c,u,i)}}function R(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,i=new Array(r.length);for(let t=0;t<r.length;t++)i[t]=r[t].literal;let s=e.target;n[s]=i,e.literal&&"property"==e.kind&&("className"===s&&(t=Object(o.a)(t)),t[s]=e.literal)}}function H(t,e,n){if(n.listenerEvent){let o=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,o,r){let s,a=t.detail,l=a&&a.path;l?(o=Object(i.i)(n,o,l),s=a&&a.value):s=t.currentTarget[n],s=r?!s:s,e[w.READ_ONLY]&&e[w.READ_ONLY][o]||!e._setPendingPropertyOrPath(o,s,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,n.target,o.source,o.negate)}))}}function B(t,e,n,o,r,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:i};for(let r,i=0;i<e.args.length&&(r=e.args[i]);i++)r.literal||t._addPropertyEffect(r.rootProperty,n,{fn:o,info:s,trigger:r});return i&&t._addPropertyEffect(e.methodName,n,{fn:o,info:s}),s}function Y(t,e,n,o,r){let i=t._methodHost||t,s=i[r.methodName];if(s){let o=t._marshalArgs(r.args,e,n);return o===v?v:s.apply(i,o)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const U=[],G=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function W(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function q(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:U};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let n=J(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function J(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},o=e[0];switch("-"===o&&(o=e[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=Object(i.g)(e),n.structured=Object(i.d)(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function V(t,e,n){let o=Object(i.a)(t,n);return void 0===o&&(o=e[n]),o}function X(t,e,n,o){const r={indexSplices:o};b.f&&!t._overrideLegacyUndefined&&(e.splices=r),t.notifyPath(n+".splices",r),t.notifyPath(n+".length",e.length),b.f&&!t._overrideLegacyUndefined&&(r.indexSplices=[])}function Z(t,e,n,o,r,i){X(t,e,n,[{index:o,addedCount:r,removed:i,object:e,type:"splice"}])}const Q=Object(r.a)(t=>{const e=y(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return w}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(K.length){let t=K[K.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[w.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==w.READ_ONLY);let o=A(this,e,!0)[t];o||(o=this[e][t]=[]),o.push(n)}_removePropertyEffect(t,e,n){let o=A(this,e,!0)[t],r=o.indexOf(n);r>=0&&o.splice(r,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,w.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,w.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,w.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,w.COMPUTE)}_setPendingPropertyOrPath(t,e,n,o){if(o||Object(i.g)(Array.isArray(t)?t[0]:t)!==t){if(!o){let n=Object(i.a)(this,t);if(!(t=Object(i.h)(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let o=t.__dataLinkedPaths;if(o){let r;for(let s in o){let a=o[s];Object(i.c)(s,e)?(r=Object(i.i)(s,a,e),t._setPendingPropertyOrPath(r,n,!0,!0)):Object(i.c)(a,e)&&(r=Object(i.i)(a,s,e),t._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=Object(o.a)(t)),t[e]=n)}_setPendingProperty(t,e,n){let o=this.__dataHasPaths&&Object(i.d)(t),r=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),o?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(o||this[w.NOTIFY]&&this[w.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[w.READ_ONLY]&&this[w.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let o,r=this.__dataHasPaths;this.__dataHasPaths=!1,z(this,e,n,r),o=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,n,r),this._flushClients(),C(this,this[w.REFLECT],e,n,r),C(this,this[w.OBSERVE],e,n,r),o&&function(t,e,n,o,r){let i,s,a=t[w.NOTIFY],l=g++;for(let s in e)e[s]&&(a&&O(t,a,l,s,n,o,r)||r&&T(t,s,n))&&(i=!0);i&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,o,e,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[w.PROPAGATE]&&C(this,this[w.PROPAGATE],t,e,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,n)}_runEffectsForTemplate(t,e,n,o){const r=(e,o)=>{C(this,t.propertyEffects,e,n,o,t.nodeList);for(let r=t.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,e,n,o)};t.runEffects?t.runEffects(r,e,o):r(e,o)}linkPaths(t,e){t=Object(i.f)(t),e=Object(i.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(i.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};X(this,Object(i.a)(this,t,n),n.path,e)}get(t,e){return Object(i.a)(e||this,t)}set(t,e,n){n?Object(i.h)(n,t,e):this[w.READ_ONLY]&&this[w.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},o=Object(i.a)(this,t,n),r=o.length,s=o.push(...e);return e.length&&Z(this,o,n.path,r,e.length,[]),s}pop(t){let e={path:""},n=Object(i.a)(this,t,e),o=Boolean(n.length),r=n.pop();return o&&Z(this,n,e.path,n.length,0,[r]),r}splice(t,e,n,...o){let r,s={path:""},a=Object(i.a)(this,t,s);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?a.splice(e):a.splice(e,n,...o),(o.length||r.length)&&Z(this,a,s.path,e,o.length,r),r}shift(t){let e={path:""},n=Object(i.a)(this,t,e),o=Boolean(n.length),r=n.shift();return o&&Z(this,n,e.path,0,0,[r]),r}unshift(t,...e){let n={path:""},o=Object(i.a)(this,t,n),r=o.unshift(...e);return e.length&&Z(this,o,n.path,0,e.length,[]),r}notifyPath(t,e){let n;if(1==arguments.length){let o={path:""};e=Object(i.a)(this,t,o),n=o.path}else n=Array.isArray(t)?Object(i.f)(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,w.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let o={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,w.OBSERVE,{fn:S,info:o,trigger:{name:t}}),n&&this._addPropertyEffect(e,w.OBSERVE,{fn:S,info:o,trigger:{name:e}})}_createMethodObserver(t,e){let n=q(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");B(this,n,w.OBSERVE,Y,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,w.NOTIFY,{fn:N,info:{eventName:Object(s.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,w.REFLECT,{fn:j,info:{attrName:e}})}_createComputedProperty(t,e,n){let o=q(e);if(!o)throw new Error("Malformed computed expression '"+e+"'");const r=B(this,o,w.COMPUTE,F,t,n);A(this,"__computeInfo")[t]=r}_marshalArgs(t,e,n){const o=this.__data,r=[];for(let s=0,a=t.length;s<a;s++){let{name:a,structured:l,wildcard:c,value:u,literal:d}=t[s];if(!d)if(c){const t=Object(i.c)(a,e),r=V(o,n,t?e:a);u={path:t?e:a,value:r,base:t?Object(i.a)(o,a):r}}else u=l?V(o,n,a):o[a];if(b.f&&!this._overrideLegacyUndefined&&void 0===u&&t.length>1)return v;r[s]=u}return r}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),o=this.__preBoundTemplateInfo==n;if(!o)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e)if(n=Object.create(n),n.wasPreBound=o,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,o=e.lastChild;n.parent=e,e.lastChild=n,n.previousSibling=o,o?o.nextSibling=n:e.firstChild=n}else this.__templateInfo=n;else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let o=t.propertyEffects=t.propertyEffects||{};(o[e]=o[e]||[]).push(n)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),K.push(this);let n=super._stampTemplate(t,e);if(K.pop(),e.nodeList=n.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=n.firstChild;e;e=e.nextSibling)t.push(e)}return n.templateInfo=e,function(t,e){let{nodeList:n,nodeInfoList:o}=e;if(o.length)for(let e=0;e<o.length;e++){let r=o[e],i=n[e],s=r.bindings;if(s)for(let e=0;e<s.length;e++){let n=s[e];R(i,n),H(i,t,n)}i.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=e;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),e.nextSibling=e.previousSibling=null;let s=e.childNodes;for(let t=0;t<s.length;t++){let e=s[t];Object(o.a)(Object(o.a)(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,n,o){let r=e._parseTemplateNode.call(this,t,n,o);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=W(e)||" ",L(this,n,o,"text","textContent",e),r=!0)}return r}static _parseTemplateNodeAttribute(t,n,o,r,i){let a=this._parseBindings(i,n);if(a){let e=r,i="property";P.test(r)?i="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),i="attribute");let l=W(a);return l&&"attribute"==i&&("class"==r&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(r)),t.setAttribute(r,l)),"attribute"==i&&"disable-upgrade$"==e&&t.setAttribute(r,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(r=Object(s.b)(r)),L(this,n,o,i,r,a,l),!0}return e._parseTemplateNodeAttribute.call(this,t,n,o,r,i)}static _parseTemplateNestedTemplate(t,n,o){let r=e._parseTemplateNestedTemplate.call(this,t,n,o);const i=t.parentNode,s=o.templateInfo,a="dom-if"===i.localName,l="dom-repeat"===i.localName;b.j&&(a||l)&&(i.removeChild(t),(o=o.parentInfo).templateInfo=s,o.noted=!0,r=!1);let c=s.hostProps;if(b.c&&a)c&&(n.hostProps=Object.assign(n.hostProps||{},c),b.j||(o.parentInfo.noted=!0));else{let t="{";for(let e in c){L(this,n,o,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return r}static _parseBindings(t,e){let n,o=[],r=0;for(;null!==(n=G.exec(t));){n.index>r&&o.push({literal:t.slice(r,n.index)});let i=n[1][0],s=Boolean(n[2]),a=n[3].trim(),l=!1,c="",u=-1;"{"==i&&(u=a.indexOf("::"))>0&&(c=a.substring(u+2),a=a.substring(0,u),l=!0);let d=q(a),h=[];if(d){let{args:t,methodName:n}=d;for(let e=0;e<t.length;e++){let n=t[e];n.literal||h.push(n)}let o=e.dynamicFns;(o&&o[n]||d.static)&&(h.push(n),d.dynamicFn=!0)}else h.push(a);o.push({source:a,mode:i,negate:s,customEvent:l,signature:d,dependencies:h,event:c}),r=G.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&o.push({literal:e})}return o.length?o:null}static _evaluateBinding(t,e,n,o,r,s){let a;return a=e.signature?Y(t,n,o,0,e.signature):n!=e.source?Object(i.a)(t,e.source):s&&Object(i.d)(n)?Object(i.a)(t,n):t.__data[n],e.negate&&(a=!a),a}}}),K=[]},function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return h}));var o=n(22),r=n(42);function i(t){return o.a.import(t)}function s(t){let e=t.body?t.body:t;const n=Object(r.b)(e.textContent,t.baseURI),o=document.createElement("style");return o.textContent=n,o}function a(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...l(e[t]));return n}function l(t){const e=i(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...d(e));const n=e.querySelector("template");n&&t.push(...c(n,e.assetpath)),e._styles=t}return e._styles}function c(t,e){if(!t._styles){const n=[],o=t.content.querySelectorAll("style");for(let t=0;t<o.length;t++){let i=o[t],s=i.getAttribute("include");s&&n.push(...a(s).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(i.textContent=Object(r.b)(i.textContent,e)),n.push(i)}t._styles=n}return t._styles}function u(t){let e=i(t);return e?d(e):[]}function d(t){const e=[],n=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<n.length;t++){let o=n[t];if(o.import){const t=o.import,n=o.hasAttribute("shady-unscoped");if(n&&!t._unscopedStyle){const e=s(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=s(t));e.push(n?t._unscopedStyle:t._style)}}return e}function h(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=p(e[t]);return n}function p(t){let e=i(t);if(e&&void 0===e._cssText){let t=m(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const o=c(t,e);for(let t=0;t<o.length;t++){let e=o[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function m(t){let e="",n=d(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}},function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));n(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const o={},r=/-[a-z]/g,i=/([A-Z])/g;function s(t){return o[t]||(o[t]=t.indexOf("-")<0?t:t.replace(r,t=>t[1].toUpperCase()))}function a(t){return o[t]||(o[t]=t.replace(i,"-$1").toLowerCase())}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(3);var o=n(16),r=n(66),i=n(68);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)s[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(o.a)(t=>{const e=Object(i.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(r.b)(t[e]))}static attributeNameForProperty(t){return Object(r.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!s[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(3);var o=n(16),r=n(8),i=n(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=r.c,a=Object(o.a)(t=>class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let o=this.__data[t],r=this._shouldPropertyChange(t,e,o);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=o),this.__data[t]=e,this.__dataPending[t]=e),r}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n)),this.__dataCounter--}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,o){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,o)}_attributeToProperty(t,e,n){if(!this.__serializing){const o=this.__dataAttributes,r=o&&o[t]||t;this[r]=this._deserializeValue(e,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const o=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=Object(i.a)(t)),void 0===o?t.removeAttribute(n):t.setAttribute(n,o)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));function o(){0}const r=[];function i(t){r.push(t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class o{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,n){const{scrollLeft:o}=n;if("rtl"!==e||!t)return o;switch(t){case"negative":return n.scrollWidth-n.clientWidth+o;case"reverse":return n.scrollWidth-n.clientWidth-o}return o}static setNormalizedScrollLeft(t,e,n,o){if("rtl"===e&&t)switch(t){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+o;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-o;break;default:n.scrollLeft=o}else n.scrollLeft=o}}},function(t,e,n){"use strict";n(4),n(12),n(6),n(7),n(11);const o=n(1).a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content)},,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o,r=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame((function(){i?i(t):(r||(r=new Promise(t=>{o=t}),"complete"===document.readyState?o():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&o()})),r.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a="__shadyCSSCachedStyle";let l=null,c=null;class u{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,s(c))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[a])return t[a];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[a])continue;const o=this.getStyleForCustomStyle(n);if(o){const t=o.__appliedElement||o;l&&l(t),n[a]=t}}return t}}u.prototype.addCustomStyle=u.prototype.addCustomStyle,u.prototype.getStyleForCustomStyle=u.prototype.getStyleForCustomStyle,u.prototype.processStyles=u.prototype.processStyles,Object.defineProperties(u.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})}]]);