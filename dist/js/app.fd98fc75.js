(function(t){function e(e){for(var a,i,n=e[0],l=e[1],c=e[2],u=0,d=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var l=r[n];0!==o[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},o={app:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var h=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),o=r.n(a);o.a},"0626":function(t,e,r){},"3cbd":function(t,e,r){"use strict";var a=r("0626"),o=r.n(a);o.a},"41f8":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[t.isMobile()?r("div",[r("mobile")],1):r("div",[r("desktop")],1),r("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"error"},on:{click:t.toTop}},[r("svg",{staticStyle:{width:"42px",height:"42px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}})])])],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",[r("v-app-bar",{attrs:{color:"navbarColor","elevate-on-scroll":"",app:"",height:"60"}},[r("v-toolbar-title",[r("h2",{staticClass:"mx-2",staticStyle:{"letter-spacing":"1px"}},[t._v("The Index")])]),r("v-spacer"),r("h3",{staticClass:"hidden-sm-and-down",staticStyle:{"font-spacing":"1px","font-weight":"500"}},[t._v("A curated list of design resources for developers")]),r("v-spacer"),r("v-btn",{attrs:{color:"svgColor",icon:""},on:{click:function(e){t.overlay=!t.overlay}}},[r("svg",{staticStyle:{width:"34px",height:"34px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}})])]),r("v-btn",{staticClass:"mx-2",staticStyle:{outline:"none"},attrs:{color:"svgColor",icon:""},on:{click:t.changeTheme}},[t.isThemeDark?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})]):r("svg",{staticStyle:{width:"36px",height:"36px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"}})])]),r("v-btn",{staticClass:"mr-2",staticStyle:{outline:"none"},attrs:{color:"svgColor",icon:"",href:"https://github.com/sumitkolhe/theindex",target:"_blank"}},[r("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",width:"26",height:"26",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}})])])],1),r("v-row",{staticClass:"mt-4"},[r("v-col",[r("v-sheet",{attrs:{color:"slideGroupColor"}},[r("v-chip-group",{attrs:{mandatory:"","active-class":"error--text","prev-icon":"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z","next-icon":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}},t._l(t.categories,(function(e,a){return r("v-chip",{key:e,attrs:{color:"chipsColor","show-arrows":""},on:{click:function(e){return t.selectCategory(a)}}},[r("a",{staticClass:"text-decoration-none error--text"},[t._v(t._s(e))])])})),1)],1)],1)],1),r("v-container",{attrs:{fluid:"",app:""}},[t.loading?r("div",{staticClass:"spinner"},[r("v-progress-circular",{attrs:{indeterminate:"",size:50,width:5,color:"svgColor"}})],1):t._e(),r("div",{staticClass:"my-2"},[r("v-row",{staticClass:"mx-4",attrs:{justify:"space-around"}},t._l(t.showWebsites,(function(e){return r("v-card",{key:e.id,staticClass:"mx-4 my-6 outer",attrs:{outlined:"",height:"300px",width:"320",href:e.link,target:"_blank"}},[r("v-col",{staticClass:"text-center"},[r("v-row",{staticClass:"justify-center mt-4"},[r("v-avatar",{attrs:{size:"60"}},[r("v-img",{attrs:{src:e.logo},on:{error:function(t){e.logo="https://raw.githubusercontent.com/sumitkolhe/Resources/master/404.png"}}})],1)],1),r("v-row",{attrs:{justify:"center",dense:""}},[r("v-card-title",[t._v(t._s(e.title))])],1),r("v-row",{attrs:{justify:"center",dense:""}},[r("v-card-subtitle",{staticClass:"mt-n4"},[t._v(t._s(e.description.substring(0,150)+"..."))])],1)],1)],1)})),1)],1)]),r("v-overlay",{attrs:{value:t.overlay,opacity:"1"}},[r("v-btn",{staticClass:"close",attrs:{icon:""},on:{click:function(e){t.overlay=!t.overlay}}},[r("svg",{staticStyle:{width:"40px",height:"40px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])]),r("v-row",[r("v-text-field",{attrs:{collapse:!0,"solo-inverted":"",rounded:"",flat:"","hide-details":"",placeholder:t.placeholder},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{align:"center"}},[r("v-btn",{staticClass:"mt-2",attrs:{color:"error",elevation:"0"},on:{click:t.searchWebsites}},[t._v("Search")])],1)],1)],1)],1)},n=[],l=(r("a4d3"),r("e01a"),r("caad"),r("ac1f"),r("2532"),r("841c"),r("9911"),r("96cf"),r("1da1")),c=r("d4ec"),h=r("bee2"),u=r("bc3a"),d=r.n(u),v="https://api.theindex.tech",p=function(){function t(){Object(c["a"])(this,t)}return Object(h["a"])(t,null,[{key:"getData",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.a.get(v).then((function(t){return t})).catch((function(t){console.log(t)})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),f=p,g={name:"desktop",data:function(){return{localStore:[],filteredWebsites:[],showWebsites:[],heading:"UI Graphics",placeholder:"Enter your keyword here",overlay:!1,drawer:!1,loading:!0,isThemeDark:!1,categories:["UI Graphics","Fonts","Colors","Icons","Icon Fonts","Stock Photos","Stock Videos","Stock Music & Sound Effects","Vectors & Clip Art","Product & Image Mockups","HTML & CSS Templates","CSS Frameworks","CSS Animations","Javascript Animation Libraries","UI Components & Kits","React UI","Vue UI","Angular UI","Design Systems & Style Guides","Online Design Tools","Downloadable Design Software","Design Inspiration","Image Compression","Others"],search:""}},methods:{searchWebsites:function(){if(""!=this.search){this.filteredWebsites=[];for(var t=0;t<this.localStore.length;t++){for(var e=0;e<this.localStore[t].length;e++)(this.localStore[t][e].title.toLowerCase().includes(this.search.toLowerCase())||this.localStore[t][e].description.toLowerCase().includes(this.search.toLowerCase()))&&this.filteredWebsites.push({title:this.localStore[t][e].title,description:this.localStore[t][e].description,link:this.localStore[t][e].link,logo:this.localStore[t][e].logo});this.showWebsites=this.filteredWebsites}this.heading="Search results for : "+this.search,this.overlay=!this.overlay}else this.search="",this.placeholder="Cannot leave empty!"},changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.isThemeDark=!this.isThemeDark,localStorage.setItem("isThemeDark",JSON.stringify(this.$vuetify.theme.dark))},selectCategory:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.loading=!1,e.drawer=!e.drawer,e.showWebsites=e.localStore[t],e.heading=e.localStore[t][0].category;case 4:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.$vuetify.theme.dark=JSON.parse(localStorage.getItem("isThemeDark"))||!1},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.next=3,f.getData();case 3:r=e.sent,t.localStore=r.data.websites,t.showWebsites=t.localStore[0],t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}},m=g,w=(r("3cbd"),r("2877")),C=r("6544"),b=r.n(C),y=r("40dc"),k=r("8212"),L=r("8336"),S=r("b0af"),x=r("99d9"),V=r("cc20"),M=r("ef9a"),_=r("62ad"),T=r("a523"),A=r("adda"),I=r("f6c4"),O=r("a797"),j=r("490a"),D=r("0fd9"),W=r("8dd9"),H=r("2fa4"),B=r("8654"),R=r("2a7f"),$=Object(w["a"])(m,i,n,!1,null,"326222f4",null),P=$.exports;b()($,{VAppBar:y["a"],VAvatar:k["a"],VBtn:L["a"],VCard:S["a"],VCardSubtitle:x["a"],VCardTitle:x["b"],VChip:V["a"],VChipGroup:M["a"],VCol:_["a"],VContainer:T["a"],VImg:A["a"],VMain:I["a"],VOverlay:O["a"],VProgressCircular:j["a"],VRow:D["a"],VSheet:W["a"],VSpacer:H["a"],VTextField:B["a"],VToolbarTitle:R["a"]});var z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{app:""}},[r("v-app-bar",{attrs:{color:"navbarColor",flat:"",app:"",height:"60"}},[r("v-btn",{staticStyle:{outline:"none"},attrs:{color:"svgColor",icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[r("svg",{staticStyle:{width:"34px",height:"34px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,13H14L10.5,16.5L11.92,17.92L17.84,12L11.92,6.08L10.5,7.5L14,11H6V13Z"}})])]),r("v-toolbar-title",[r("a",{staticStyle:{color:"currentColor","text-decoration":"none"},attrs:{href:"https://theindex.tech"}},[r("h2",{staticClass:"ml-n1",staticStyle:{"letter-spacing":"1px","font-weight":"800"}},[t._v("The Index")])])]),r("v-spacer"),r("v-btn",{attrs:{color:"svgColor",icon:""},on:{click:function(e){t.overlay=!t.overlay}}},[r("svg",{staticStyle:{width:"34px",height:"34px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}})])]),r("v-btn",{staticClass:"mr-1",staticStyle:{outline:"none"},attrs:{color:"svgColor",icon:"",href:"https://github.com/sumitkolhe/theindex",target:"_blank"}},[r("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",width:"27",height:"27",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}})])]),0==t.isThemeDark?r("v-btn",{staticClass:"mr-0",staticStyle:{outline:"none"},attrs:{color:"svgColor",icon:""},on:{click:t.changeTheme}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})])]):r("v-btn",{staticClass:"mr-0",staticStyle:{outline:"none"},attrs:{color:"svgColor",icon:""},on:{click:t.changeTheme}},[r("svg",{staticStyle:{width:"36px",height:"36px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"}})])])],1),r("v-navigation-drawer",{class:{navigationDrawerColor:!t.$vuetify.theme.dark,navigationDrawerColor:t.$vuetify.theme.dark},attrs:{width:"360",app:"",fixed:"",floating:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item-group",[r("v-row",{attrs:{cols:"6"}},[r("v-col",{staticClass:"text-center"},[r("v-list-item-content",[r("v-list-item-title",[r("h1",{staticClass:"mb-2 ml-2"},[t._v("The Index")])]),r("v-list-item-subtitle",[r("h4",[t._v("by Sumit kolhe")])])],1)],1),r("v-col",{staticClass:"text-center"},[r("v-list-item-content",[r("a",{attrs:{href:"http://github.com/sumitkolhe"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",color:"#f55555",width:"54",height:"54",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M24 24l-6-5.269-6 5.269v-24h12v24zm-14-23h-10v2h10v-2zm0 5h-10v2h10v-2zm0 5h-10v2h10v-2zm0 5h-10v2h10v-2z"}})])])])],1)],1)],1),r("v-divider"),r("h4",{staticClass:"px-6 py- text-center"},[t._v("A curated list of design resources for developers")]),r("v-divider"),r("v-list",{attrs:{dense:""}},t._l(t.categories,(function(e,a){return r("v-list-item",{key:a,attrs:{link:""},on:{click:function(e){return t.selectCategory(a)}}},[r("v-list-item-content",[r("v-list-item-title",[r("h3",[t._v(t._s(e))])])],1)],1)})),1)],1),r("v-container",{attrs:{app:""}},[r("v-row",{staticClass:"heading",attrs:{justify:"center"}},[r("h2",[t._v(t._s(t.heading))])]),r("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[t.loading?r("div",{staticClass:"text-center mt-12 spinner"},[r("v-progress-circular",{attrs:{indeterminate:"",size:50,width:5,color:"svgColor"}})],1):t._e(),r("v-overlay",{attrs:{value:t.overlay,opacity:"1"}},[r("v-btn",{staticClass:"close",attrs:{icon:""},on:{click:function(e){t.overlay=!t.overlay}}},[r("svg",{staticStyle:{width:"40px",height:"40px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])]),r("v-row",[r("v-text-field",{attrs:{collapse:!0,"solo-inverted":"",rounded:"",flat:"","hide-details":"",placeholder:t.placeholder},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{align:"center"}},[r("v-btn",{attrs:{color:"error",elevation:"0"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchWebsites(e)},click:t.searchWebsites}},[t._v("Search")])],1)],1)],1),t._l(t.showWebsites,(function(e){return r("v-card",{key:e.id,staticClass:"mx-6 my-4 outer",attrs:{outlined:"",height:"260px",width:"380px",href:e.link,target:"_blank"}},[r("v-col",{staticClass:"text-center"},[r("v-row",{staticClass:"justify-center mt-2"},[r("v-avatar",{attrs:{size:"60"}},[r("v-img",{attrs:{src:e.logo},on:{error:function(t){e.logo="https://raw.githubusercontent.com/sumitkolhe/Resources/master/404.png"}}})],1)],1),r("v-row",{attrs:{justify:"center",dense:""}},[r("v-card-title",[t._v(t._s(e.title))])],1),r("v-row",{attrs:{justify:"center",dense:""}},[r("v-card-subtitle",{staticClass:"mt-n6"},[t._v(t._s(e.description))])],1)],1)],1)}))],2)],1)],1)},U=[],G={name:"mobile",data:function(){return{localStore:[],filteredWebsites:[],showWebsites:[],heading:"UI Graphics",placeholder:"Enter your keyword here",overlay:!1,drawer:!1,loading:!0,isThemeDark:!1,categories:["UI Graphics","Fonts","Colors","Icons","Icon Fonts","Stock Photos","Stock Videos","Stock Music & Sound Effects","Vectors & Clip Art","Product & Image Mockups","HTML & CSS Templates","CSS Frameworks","CSS Animations","Javascript Animation Libraries","UI Components & Kits","React UI","Vue UI","Angular UI","Design Systems & Style Guides","Online Design Tools","Downloadable Design Software","Design Inspiration","Image Compression","Others"],search:""}},methods:{searchWebsites:function(){if(""!=this.search){this.filteredWebsites=[];for(var t=0;t<this.localStore.length;t++){for(var e=0;e<this.localStore[t].length;e++)(this.localStore[t][e].title.toLowerCase().includes(this.search.toLowerCase())||this.localStore[t][e].description.toLowerCase().includes(this.search.toLowerCase()))&&this.filteredWebsites.push({title:this.localStore[t][e].title,description:this.localStore[t][e].description,link:this.localStore[t][e].link,logo:this.localStore[t][e].logo});this.showWebsites=this.filteredWebsites}this.heading="Search results for : "+this.search,this.overlay=!this.overlay}else this.search="",this.placeholder="Cannot leave empty!"},changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.isThemeDark=!this.isThemeDark,localStorage.setItem("isThemeDark",JSON.stringify(this.$vuetify.theme.dark))},selectCategory:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.loading=!1,e.drawer=!e.drawer,e.showWebsites=e.localStore[t],e.heading=e.localStore[t][0].category;case 4:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.$vuetify.theme.dark=JSON.parse(localStorage.getItem("isThemeDark"))||!1},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.next=3,f.getData();case 3:r=e.sent,t.localStore=r.data.websites,t.showWebsites=t.localStore[0],t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}},Z=G,E=(r("f738"),r("7496")),F=r("ce7e"),J=r("8860"),N=r("da13"),q=r("5d23"),K=r("1baa"),Y=r("f774"),Q=Object(w["a"])(Z,z,U,!1,null,"1ca9339d",null),X=Q.exports;b()(Q,{VApp:E["a"],VAppBar:y["a"],VAvatar:k["a"],VBtn:L["a"],VCard:S["a"],VCardSubtitle:x["a"],VCardTitle:x["b"],VCol:_["a"],VContainer:T["a"],VDivider:F["a"],VImg:A["a"],VList:J["a"],VListItem:N["a"],VListItemContent:q["a"],VListItemGroup:K["a"],VListItemSubtitle:q["b"],VListItemTitle:q["c"],VNavigationDrawer:Y["a"],VOverlay:O["a"],VProgressCircular:j["a"],VRow:D["a"],VSpacer:H["a"],VTextField:B["a"],VToolbarTitle:R["a"]});var tt={name:"App",components:{desktop:P,mobile:X},data:function(){return{fab:!1}},methods:{isMobile:function(){return this.$vuetify.breakpoint.mobile},onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},et=tt,rt=(r("034f"),r("269a")),at=r.n(rt),ot=r("f977"),st=Object(w["a"])(et,o,s,!1,null,null,null),it=st.exports;b()(st,{VApp:E["a"],VBtn:L["a"]}),at()(st,{Scroll:ot["b"]});var nt=r("f309");a["a"].use(nt["a"]);var lt=new nt["a"]({theme:{dark:!1,themes:{light:{svgColor:"#000",navbarColor:"#fff",slideGroupColor:"#ffffff",chipsColor:"#f1f1f1",navigationDrawerColor:"#f55555"},dark:{svgColor:"#fff",slideGroupColor:"#121212",navbarColor:"#121212",chipsColor:"#1e1e1e",navigationDrawerColor:"#212121"}}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:lt,render:function(t){return t(it)}}).$mount("#app")},"85ec":function(t,e,r){},f738:function(t,e,r){"use strict";var a=r("41f8"),o=r.n(a);o.a}});
//# sourceMappingURL=app.fd98fc75.js.map