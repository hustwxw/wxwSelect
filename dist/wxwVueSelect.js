!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WxwVueSelect",[],t):"object"==typeof exports?exports.WxwVueSelect=t():e.WxwVueSelect=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"wxwVueSelect",data:function(){return{showList:!1,sliderClass:!1,text:"",_selectItem:null,self_placeholder:"",scrollClass:!1}},props:["items","placeholder"],methods:{select:function(e){this.text=e.value,this._selectItem=e,this.$emit("onchange",e),this.self_placeholder=""},list:function(){this.showList=!this.showList,this.sliderClass=this.showList}},mounted:function(){var e=this;e.self_placeholder=e.placeholder,e.items.length>10&&(e.scrollClass=!0),document.onclick=function(t){1!=(t.target||t.srcElement).getAttribute("data-wxw-vue-select")&&(e.showList=!1,e.sliderClass=!1)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);"undefined"!=typeof window&&window.Vue&&window.Vue.use(r.a);var o={install:function(e,t){e.component(r.a.name,r.a)}};t.default=o},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),s=n(9),i=n(8),a=r,l=i(o.a,s.a,!1,a,"data-v-07cd8976",null);t.a=l.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("728a8ec2",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".wxw-vue-select-container[data-v-07cd8976]{display:inline-block;width:200px;height:30px;border-radius:6px;border:1px solid #ddd;position:relative;cursor:pointer;text-align:center}.wxw-vue-select-container.wxw-vue-select-slider[data-v-07cd8976]{border-bottom-left-radius:0;border-bottom-right-radius:0}.phl[data-v-07cd8976]{line-height:30px;height:30px;color:#a9a9a9;font-family:\\'Microsoft Yahei\\'}[data-placeholder][data-v-07cd8976],[data-text][data-v-07cd8976]{display:inline-block;width:auto;height:30px;vertical-align:middle;line-height:30px;font-size:14px}ul[data-v-07cd8976]{padding:0;margin:0;position:absolute;background-color:#fff;border:1px solid #ddd;left:-1px;z-index:1000;height:auto;width:100%}ul.wxw-vue-scroll[data-v-07cd8976]{height:150px;overflow-y:scroll}ul li[data-v-07cd8976]{list-style:none;width:100%;height:30px;line-height:30px;text-align:center;font-size:14px;transition:all .3s linear;cursor:pointer}ul li[data-v-07cd8976]:hover{background-color:#ddd}ul li a[data-v-07cd8976]{color:#000;text-decoration:none}i[data-v-07cd8976]{float:right;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAAXNSR0IArs4c6QAAAERJREFUCB1j/O/kt4qBgSEUiJHBaiYGdvZsoMhrJNHXIDEmxu2rXzMwMeXAJYBssBhM4L+z/2oQhvFZYAwGZiaQkXAAAG5uEG+klpNKAAAAAElFTkSuQmCC\") 50% no-repeat;height:30px;width:30px;vertical-align:middle;position:absolute;right:0;cursor:pointer}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var s=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function s(e){var t,n,r=document.querySelector("style["+w+'~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(g){var s=p++;r=f||(f=o()),t=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),x.ssrId&&e.setAttribute(w,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},x=null,w="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,x=o||{};var s=c(e,t);return r(s),function(t){for(var n=[],o=0;o<s.length;o++){var i=s[o],a=d[i.id];a.refs--,n.push(a)}t?(s=c(e,t),r(s)):s=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],l=s[2],c=s[3],d={id:e+":"+o,css:a,media:l,sourceMap:c};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,s){var i,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(i=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=d):r&&(d=r),d){var u=c.functional,f=u?c.render:c.beforeCreate;u?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:i,exports:a,options:c}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",class:{"wxw-vue-select-container":!0,"wxw-vue-select-slider":e.sliderClass},attrs:{onselectstart:"return false;","data-wxw-vue-select":"1"},on:{click:e.list}},[n("span",{staticClass:"plh",attrs:{"data-placeholder":"","data-wxw-vue-select":"1"}},[e._v(e._s(e.self_placeholder))]),e._v(" "),n("span",{staticStyle:{display:"inline-block"},attrs:{"data-text":"","data-wxw-vue-select":"1"}},[e._v(e._s(e.text))]),e._v(" "),n("input",{attrs:{type:"hidden","data-wxw-vue-select":"1"}}),e._v(" "),n("i",{attrs:{"data-wxw-vue-select":"1"}}),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}],ref:"ul",class:{"wxw-vue-scroll":e.scrollClass},attrs:{"data-wxw-vue-select":"1"}},e._l(e.items,function(t,r){return n("li",{attrs:{"data-wxw-vue-select":"1"},on:{click:function(n){e.select(t)}}},[n("a",{attrs:{"data-wxw-vue-select":"1",href:"javascript:void(0)"}},[e._v(e._s(t.value))])])}))])},o=[],s={render:r,staticRenderFns:o};t.a=s}])});
//# sourceMappingURL=wxwVueSelect.js.map