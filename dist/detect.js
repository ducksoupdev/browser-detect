!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var c=o?Object.getOwnPropertyDescriptor(t,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=t[i]}n.default=t,e&&e.set(t,n);return n}(n(1));function u(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=["class","const","let","arrowFunction","spread","symbols","customElement","promise","fetch","typeModule"];function a(t,e){var n=document.createElement("dt");n.textContent=t,e||n.classList.add("false");var r=document.createElement("dd");return r.textContent=e,[n,r]}document.addEventListener("DOMContentLoaded",(function(){var t=document.createElement("dl");c.forEach((function(e){var n=i(a(e,o.all(e)),2),r=n[0],u=n[1];t.appendChild(r),t.appendChild(u)}));var e=i(a("userAgent",navigator.userAgent.toString()),2),n=e[0],r=e[1];t.appendChild(n),t.appendChild(r);var u=i(a("appName",navigator.appName.toString()),2),l=u[0],f=u[1];t.appendChild(l),t.appendChild(f);var d=i(a("appVersion",navigator.appVersion.toString()),2),s=d[0],p=d[1];t.appendChild(s),t.appendChild(p),document.body.appendChild(t)}))},function(t,e,n){"use strict";function r(t){try{return new Function(t)(),!0}catch(t){return!1}}n.r(e);const o={class:function(){return r("class Something {}")},const:function(){return r("const a = 1")},let:function(){return r("let a = 1")},arrowFunction:function(){return r("var f = x => 1")},spread:function(){return r("Math.max(...[ 5, 10 ])")},symbols:function(){return"undefined"!=typeof Symbol&&"function"==typeof Symbol.for},customElement:function(){return r('window.customElements.define("mosaic-is-es6-and-custom-elements-test", class extends HTMLElement {})')},promise:function(){return void 0!==window.Promise&&"function"==typeof window.Promise.resolve},fetch:function(){return void 0!==window.fetch&&void 0!==window.Headers&&void 0!==window.Request&&void 0!==window.Response},typeModule:function(){return"noModule"in HTMLScriptElement.prototype}};function u(...t){return function(t,...e){return e.every((function(e){const n=t[e];return n&&"function"==typeof n?n():(console.warn(`No detection available for '${e}'`),!1)}))}(o,...t)}function i(){return u("symbols","class","const","arrowFunction","typeModule")}n.d(e,"esmTest",(function(){return i})),n.d(e,"all",(function(){return u}))}]);