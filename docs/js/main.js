(()=>{"use strict";var e=[,(e,t,o)=>{function r(){console.log("done!")}o.r(t),o.d(t,{testFunction:()=>r})}],t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{o.r(r),(0,o(1).testFunction)();var e=document.querySelector(".js-burger"),t=document.querySelector(".js-shadow"),s=document.querySelector(".js-nav");e.addEventListener("click",(function(){e.classList.toggle("_active"),t.classList.toggle("shadow--active"),s.classList.toggle("nav--active")})),t.addEventListener("click",(function(){e.classList.remove("_active"),t.classList.remove("shadow--active"),s.classList.remove("nav--active")}))})()})();