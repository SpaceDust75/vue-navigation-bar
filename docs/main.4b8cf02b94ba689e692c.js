!function(t){function n(n){for(var i,a,p=n[0],u=n[1],r=n[2],_=0,c=[];_<p.length;_++)a=p[_],e[a]&&c.push(e[a][0]),e[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);for(l&&l(n);c.length;)c.shift()();return s.push.apply(s,r||[]),o()}function o(){for(var t,n=0;n<s.length;n++){for(var o=s[n],i=!0,p=1;p<o.length;p++){var u=o[p];0!==e[u]&&(i=!1)}i&&(s.splice(n--,1),t=a(a.s=o[0]))}return t}var i={},e={0:0},s=[];function a(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,n,o){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(o,i,function(n){return t[n]}.bind(null,i));return o},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="./";var p=window.webpackJsonp=window.webpackJsonp||[],u=p.push.bind(p);p.push=n,p=p.slice();for(var r=0;r<p.length;r++)n(p[r]);var l=u;s.push([22,1]),o()}([,,,,function(t,n,o){},function(t,n,o){},function(t,n,o){},function(t,n,o){},function(t,n,o){},function(t,n,o){},function(t,n,o){},function(t,n,o){},function(t,n,o){},,function(t,n,o){"use strict";var i=o(1);var e=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0;return("x"==t?n:3&n|8).toString(16)})},s={name:"dynamic-link",render:function(t){return this.isUsingVueRouter?t("router-link",{props:{to:{path:this.path}}},this.$slots.default):t("a",{attrs:{href:this.path}},this.$slots.default)},props:{isUsingVueRouter:{type:Boolean,required:!0},path:{type:String,required:!0}}},a=o(0),p=Object(a.a)(s,void 0,void 0,!1,null,null,null).exports,u={name:"brand-image",props:{options:{type:Object,required:!0}},data:function(){return{}},computed:{},methods:{},components:{DynamicLink:p}},r=(o(28),Object(a.a)(u,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"vnb__brand-image-wrapper"},[n("dynamic-link",{staticClass:"vnb__brand-image-wrapper__link",attrs:{path:this.options.brandImagePath,isUsingVueRouter:this.options.isUsingVueRouter,"aria-label":"Homepage"}},[this.options.brandImage?n("img",{staticClass:"vnb-image vnb__brand-image-wrapper__link__image",attrs:{src:this.options.brandImage,alt:this.options.brandImageAltText}}):this._e()])],1)},[],!1,null,null,null).exports),l=o(18),_=o.n(l),c=(o(33),o(19)),m={name:"desktop-menu-item-link",props:{option:{type:Object,required:!0},options:{type:Object,required:!0}},data:function(){return{currentExpandedStatus:"closed"}},computed:{isExpanded:function(){return"open"===this.currentExpandedStatus}},methods:{subMenuItemSelected:function(t){this.closeAllTooltips()},subMenuItemTabbed:function(t){this.option.subMenuOptions[this.option.subMenuOptions.length-1].text===t&&this.closeAllTooltips()},menuShown:function(){this.currentExpandedStatus="open"},menuHidden:function(){this.currentExpandedStatus="closed"},closeAllTooltips:function(){var t=document.querySelectorAll(".tippy-popper");t.length>0&&t[0]._tippy.hide()},initTippy:function(){var t=this,n=document.getElementById("dropdown-menu-parent-"+this.option.id),o=document.getElementById("sub-menu-options-"+this.option.id);o.style.display="block",Object(c.a)(n,{theme:"light",content:o,interactive:!0,animation:"perspective",animateFill:!1,role:"Menu",trigger:"click mouseenter focus",appendTo:"parent",arrow:!0,inertia:!1,onShow:function(){_()(document.querySelectorAll(".tippy-popper")).forEach(function(t){t&&t._tippy&&t._tippy.hide(0)}),t.menuShown()},onHide:function(){t.menuHidden()}})}},mounted:function(){this.option.subMenuOptions&&this.option.subMenuOptions.length&&this.initTippy()},components:{DynamicLink:p}},b=(o(34),Object(a.a)(m,function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.option.subMenuOptions&&t.option.subMenuOptions.length?i("span",{staticClass:"vnb__menu-options__option__link",attrs:{id:"dropdown-menu-parent-"+t.option.id,"aria-haspopup":"true","aria-expanded":t.isExpanded?"true":"false","aria-label":t.option.text,tabindex:"0"}},[t.option.iconLeft?i("span",{staticClass:"vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left",domProps:{innerHTML:t._s(t.option.iconLeft)}}):t._e(),t._v("\n\n    "+t._s(t.option.text)+"\n\n    "),t.option.iconRight?i("span",{staticClass:"vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right",domProps:{innerHTML:t._s(t.option.iconRight)}}):t._e(),t._v(" "),i("img",{class:["vnb__menu-options__option__arrow",{"vnb__menu-options__option__arrow--hover":t.isExpanded}],attrs:{src:o(29),alt:"arrow"}}),t._v(" "),"link"===t.option.type?i("div",{staticClass:"vnb__sub-menu-options",attrs:{id:"sub-menu-options-"+t.option.id}},[i("div",{staticClass:"vnb__sub-menu-options__option",attrs:{tabindex:"-1"}},t._l(t.option.subMenuOptions,function(n,o){return"link"===n.type?i("dynamic-link",{key:o,staticClass:"vnb__sub-menu-options__option__link",attrs:{path:n.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":n.text,tabindex:"0"},nativeOn:{click:function(o){return t.subMenuItemSelected(n.text)},keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"tab",9,o.key,"Tab")?null:t.subMenuItemTabbed(n.text)}}},[n.iconLeft?i("span",{staticClass:"vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--left",domProps:{innerHTML:t._s(n.iconLeft)}}):t._e(),t._v(" "),i("span",{staticClass:"vnb__sub-menu-options__option__link__text-wrapper"},[i("span",{staticClass:"vnb__sub-menu-options__option__link__text-wrapper__text"},[t._v("\n                        "+t._s(n.text)+"\n                    ")]),t._v(" "),n.subText?i("span",{staticClass:"vnb__sub-menu-options__option__link__text-wrapper__sub-text"},[t._v("\n                        "+t._s(n.subText)+"\n                    ")]):t._e()]),t._v(" "),n.iconRight?i("span",{staticClass:"vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--right",domProps:{innerHTML:t._s(n.iconRight)}}):t._e()]):i("hr",{staticClass:"vnb__sub-menu-options__option__hr",attrs:{tabindex:"-1"}})}),1)]):t._e()]):i("dynamic-link",{staticClass:"vnb__menu-options__option__link",attrs:{path:t.option.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":t.option.text,tabindex:"0"}},[t.option.iconLeft?i("span",{staticClass:"vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left",domProps:{innerHTML:t._s(t.option.iconLeft)}}):t._e(),t._v("\n\n    "+t._s(t.option.text)+"\n\n    "),t.option.iconRight?i("span",{staticClass:"vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right",domProps:{innerHTML:t._s(t.option.iconRight)}}):t._e()])},[],!1,null,null,null).exports),d={name:"desktop-menu-item-button",props:{option:{type:Object,required:!0},options:{type:Object,required:!0}},data:function(){return{}},computed:{},methods:{},components:{DynamicLink:p}},h=(o(35),Object(a.a)(d,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("dynamic-link",{class:["vnb__menu-options__option__button","vnb-button",t.option.class],attrs:{path:t.option.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":t.option.text}},[t.option.iconLeft?o("span",{staticClass:"vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--left",domProps:{innerHTML:t._s(t.option.iconLeft)}}):t._e(),t._v("\n\n    "+t._s(t.option.text)+"\n\n    "),t.option.iconRight?o("span",{staticClass:"vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--right",domProps:{innerHTML:t._s(t.option.iconRight)}}):t._e()])},[],!1,null,null,null).exports),v={name:"desktop-menu-item-spacer",props:{option:{type:Object,required:!0}},data:function(){return{}},computed:{},methods:{}},f=(o(36),Object(a.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vnb__menu-options__option__spacer"})},[],!1,null,null,null).exports),g={name:"menu-options",mixins:[i.a.VueScreenSizeMixin],props:{options:{type:Object,required:!0},type:{type:String,required:!0}},data:function(){return{}},computed:{},methods:{},components:{DesktopMenuItemLink:b,DesktopMenuItemButton:h,DesktopMenuItemSpacer:f}},x=(o(37),Object(a.a)(g,function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.$vssWidth>t.options.mobileBreakpoint?o("div",{class:["vnb__menu-options",{"vnb__menu-options--left":"left"===t.type},{"vnb__menu-options--right":"right"===t.type}]},t._l("left"===t.type?t.options.menuOptionsLeft:t.options.menuOptionsRight,function(n){return o("div",{staticClass:"vnb__menu-options__option"},["link"===n.type?o("desktop-menu-item-link",{attrs:{option:n,options:t.options}}):"button"===n.type?o("desktop-menu-item-button",{attrs:{option:n,options:t.options}}):o("desktop-menu-item-spacer",{attrs:{option:n}})],1)}),0):t._e()},[],!1,null,null,null).exports),k={name:"collapse-button",mixins:[i.a.VueScreenSizeMixin],props:{options:{type:Object,required:!0},menuIsVisible:{type:Boolean,required:!0}},data:function(){return{}},computed:{},methods:{collapseButtonClicked:function(){this.$emit("collapse-button-clicked")}}},y=(o(38),Object(a.a)(k,function(){var t=this.$createElement,n=this._self._c||t;return this.$vssWidth<this.options.mobileBreakpoint?n("button",{staticClass:"vnb__collapse-button",attrs:{type:"button","aria-expanded":this.menuIsVisible?"true":"false"},on:{click:this.collapseButtonClicked}},[this.options.collapseButtonImageOpen?n("img",{staticClass:"vnb__collapse-button__image",attrs:{src:this.options.collapseButtonImageOpen,alt:"Menu"}}):n("img",{staticClass:"vnb__collapse-button__image",attrs:{src:o(15),alt:"Menu"}})]):this._e()},[],!1,null,null,null).exports),C=o(21),w={name:"popup",props:{options:{type:Object,required:!0},menuIsVisible:{type:Boolean,required:!0}},data:function(){return{}},computed:{combinedMenuItems:function(){return this.options.menuOptionsLeft.concat(this.options.menuOptionsRight)}},methods:{closeButtonClicked:function(){this.$emit("close-button-clicked")},itemSelected:function(){console.log("123"),this.closeButtonClicked()}},components:{DynamicLink:p,SlideYDownTransition:C.a}},O=(o(39),Object(a.a)(w,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("slide-y-down-transition",[t.menuIsVisible?i("div",{staticClass:"vnb__popup"},[i("div",{staticClass:"vnb__popup__top"},[t.options.showBrandImageInMobilePopup&&t.options.brandImage?i("img",{staticClass:"vnb-image vnb__popup__top__image",attrs:{src:t.options.brandImage,alt:t.options.brandImageAltText}}):t._e(),t._v(" "),i("button",{staticClass:"vnb__popup__top__close-button",attrs:{"aria-label":"Close Button",title:"Close","aria-expanded":t.menuIsVisible?"true":"false"},on:{click:t.closeButtonClicked}},[t.options.collapseButtonImageClose?i("img",{staticClass:"vnb__popup__top__close-button__image",attrs:{src:t.options.collapseButtonImageClose,alt:"Close button"}}):i("img",{staticClass:"vnb__popup__top__close-button__image",attrs:{src:o(16),alt:"Close button"}})])]),t._v(" "),i("div",{staticClass:"vnb__popup__bottom"},[this.$slots["custom-section"]?i("div",{staticClass:"vnb__popup__bottom__custom-section"},[t._t("custom-section")],2):t._e(),t._v(" "),i("ul",{staticClass:"vnb__popup__bottom__menu-options"},t._l(t.combinedMenuItems,function(n){return i("li",{staticClass:"vnb__popup__bottom__menu-options__option"},[n.subMenuOptions?i("span",{staticClass:"vnb__popup__bottom__menu-options__option__link vnb__popup__bottom__menu-options__option__link--no-highlight"},[t._v("\n                        "+t._s(n.text)+"\n                    ")]):i("dynamic-link",{staticClass:"vnb__popup__bottom__menu-options__option__link",attrs:{path:n.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":n.text},nativeOn:{click:function(n){return t.itemSelected(n)}}},[n.iconLeft?i("span",{staticClass:"vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--left",domProps:{innerHTML:t._s(n.iconLeft)}}):t._e(),t._v("\n\n                        "+t._s(n.text)+"\n\n                        "),n.iconRight?i("span",{staticClass:"vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--right",domProps:{innerHTML:t._s(n.iconRight)}}):t._e()]),t._v(" "),i("div",{staticClass:"vnb__popup__bottom__sub-menu-options"},t._l(n.subMenuOptions,function(n){return i("div",{staticClass:"vnb__popup__bottom__sub-menu-options__option"},["link"===n.type?i("dynamic-link",{staticClass:"vnb__popup__bottom__sub-menu-options__option__link",attrs:{path:n.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":n.text},nativeOn:{click:function(n){return t.itemSelected(n)}}},[t._v("\n                                "+t._s(n.text)+"\n\n                                "),i("span",{staticClass:"vnb__popup__bottom__sub-menu-options__option__link__sub-text"},[t._v(t._s(n.subText))])]):t._e()],1)}),0)],1)}),0)])]):t._e()])},[],!1,null,null,null).exports),I={name:"vue-navigation-bar",mixins:[i.a.VueScreenSizeMixin],props:{options:{type:Object,required:!0}},data:function(){return{menuIsVisible:!1}},computed:{finalOptions:function(){if(this.options.menuOptionsLeft)for(var t=0;t<this.options.menuOptionsLeft.length;t++)this.$set(this.options.menuOptionsLeft[t],"id",e());if(this.options.menuOptionsRight)for(var n=0;n<this.options.menuOptionsRight.length;n++)this.$set(this.options.menuOptionsRight[n],"id",e());return{elementId:this.options.elementId?this.options.elementId:e(),isUsingVueRouter:!!this.options.isUsingVueRouter,mobileBreakpoint:this.options.mobileBreakpoint?this.options.mobileBreakpoint:992,brandImagePath:this.options.brandImagePath?this.options.brandImagePath:"/",brandImage:this.options.brandImage?this.options.brandImage:null,brandImageAltText:this.options.brandImageAltText?this.options.brandImageAltText:"brand-image",collapseButtonImageOpen:this.options.collapseButtonImageOpen?this.options.collapseButtonImageOpen:null,collapseButtonImageClose:this.options.collapseButtonImageClose?this.options.collapseButtonImageClose:null,showBrandImageInMobilePopup:!!this.options.showBrandImageInMobilePopup,ariaLabelMainNav:this.options.ariaLabelMainNav?this.options.ariaLabelMainNav:"Main Navigation",menuOptionsLeft:this.options.menuOptionsLeft?this.options.menuOptionsLeft:[],menuOptionsRight:this.options.menuOptionsRight?this.options.menuOptionsRight:[]}}},methods:{closeMobilePopup:function(){this.menuIsVisible=!1,this.$emit("mobile-popup-hidden")},showMobilePopup:function(){this.menuIsVisible=!0,this.$emit("mobile-popup-shown")}},components:{BrandImage:r,MenuOptions:x,CollapseButton:y,Popup:O}},M=(o(40),Object(a.a)(I,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("nav",{staticClass:"vnb",attrs:{id:t.finalOptions.elementId,"aria-label":t.finalOptions.ariaLabelMainNav}},[o("brand-image",{attrs:{options:t.finalOptions}}),t._v(" "),o("menu-options",{attrs:{options:t.finalOptions,type:"left"}}),t._v(" "),t.$vssWidth>t.options.mobileBreakpoint?t._t("custom-section"):t._e(),t._v(" "),o("menu-options",{attrs:{options:t.finalOptions,type:"right"}}),t._v(" "),o("collapse-button",{attrs:{options:t.finalOptions,menuIsVisible:t.menuIsVisible},on:{"collapse-button-clicked":t.showMobilePopup}}),t._v(" "),o("popup",{attrs:{options:t.finalOptions,menuIsVisible:t.menuIsVisible},on:{"close-button-clicked":t.closeMobilePopup},scopedSlots:t._u([{key:"custom-section",fn:function(){return[t._t("custom-section")]},proxy:!0}],null,!0)})],2)},[],!1,null,null,null));n.a=M.exports},function(t,n,o){t.exports=o.p+"317c6d696549a7fa4ea063daf3874075.png"},function(t,n,o){t.exports=o.p+"bd51c71cc1eae2b01291eb3bf7885a70.png"},function(t,n,o){"use strict";(function(t){var i=o(14);var e={install:function t(n){t.installed||(t.installed=!0,n.component("VueNavigationBar",i.a))}},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(e),n.a=i.a}).call(this,o(3))},,,,,function(t,n,o){t.exports=o(41)},function(t,n,o){t.exports=o.p+"6f1be17055c044d186660dd4b49e4a22.png"},function(t,n,o){"use strict";var i=o(4);o.n(i).a},,,,function(t,n,o){"use strict";var i=o(5);o.n(i).a},function(t,n,o){t.exports=o.p+"1bdcc02f316f4ec44968366c9c71bbf0.png"},,,,,function(t,n,o){"use strict";var i=o(6);o.n(i).a},function(t,n,o){"use strict";var i=o(7);o.n(i).a},function(t,n,o){"use strict";var i=o(8);o.n(i).a},function(t,n,o){"use strict";var i=o(9);o.n(i).a},function(t,n,o){"use strict";var i=o(10);o.n(i).a},function(t,n,o){"use strict";var i=o(11);o.n(i).a},function(t,n,o){"use strict";var i=o(12);o.n(i).a},function(t,n,o){"use strict";o.r(n);var i=o(2),e={name:"app",data:function(){return{navbarOptions:{elementId:"main-navbar",isUsingVueRouter:!0,mobileBreakpoint:992,brandImagePath:"./",brandImage:o(23),brandImageAltText:"brand-image",collapseButtonImageOpen:o(15),collapseButtonImageClose:o(16),showBrandImageInMobilePopup:!0,ariaLabelMainNav:"Main Navigation",menuOptionsLeft:[{type:"link",text:"Why Dunder Mifflin",iconLeft:'<i class="fa fa-star fa-fw"></i>',subMenuOptions:[{type:"link",text:"About",subText:"Stupid corporate wet blankets. Like booze ever killed anyone.",path:"./about",iconLeft:'<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>'},{type:"hr"},{type:"link",text:"Locations",subText:"You're a presentation tool!",path:"./locations"},{type:"hr"},{type:"link",text:"Blog",subText:"I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.",path:"./blog"}]},{type:"link",text:"Contact",subMenuOptions:[{type:"link",text:"Customer Service",path:"./customer-service"},{type:"link",text:"Accounting",path:"./accounting"},{type:"hr"},{type:"link",text:"Reception",path:"./reception",iconLeft:'<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>'}]}],menuOptionsRight:[{type:"button",text:"Signup",path:"./signup",class:"button-red",iconLeft:'<svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentcolor" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" /> </svg>'},{type:"button",text:"Login",path:"./login",iconRight:'<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'}]}}}},s=(o(24),o(0)),a=Object(s.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("section",{staticClass:"main-navbar-section"},[o("div",{staticClass:"container"},[o("vue-navigation-bar",{attrs:{options:t.navbarOptions},scopedSlots:t._u([{key:"custom-section",fn:function(){return[o("div",{staticClass:"custom-section-content"},[o("div",{staticClass:"input-group input-group-sm"},[o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1"}}),t._v(" "),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"button-addon1"}},[o("i",{staticClass:"fa fa-search"})])])])])]},proxy:!0}])})],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container py-4"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-12 text-center"},[n("h3",[n("strong",[this._v("vue-navigation-bar")])])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container pt-3 pb-4"},[n("div",{staticClass:"row justify-content-center mb-4"},[n("div",{staticClass:"col-lg-6"},[n("span",{staticClass:"badge badge-primary mb-1"},[this._v("install")]),this._v(" "),n("div",{staticClass:"code-text"},[this._v("npm i vue-navigation-bar")])])]),this._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"list-group"},[n("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://github.com/johndatserakis/vue-navigation-bar",target:"_blank"}},[this._v("View on GitHub")]),this._v(" "),n("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://www.npmjs.com/package/vue-navigation-bar",target:"_blank"}},[this._v("View on NPM")])])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container py-2"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-10"},[n("hr")])])])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container py-3"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("p",[o("code",[t._v("vue-navigation-bar")]),t._v(" is a simple, pretty navbar for your Vue projects. And wouldn't you know it - this page is using it right now!")]),t._v(" "),o("p",[t._v("Check out "),o("a",{attrs:{href:"https://github.com/johndatserakis/vue-navigation-bar"}},[t._v("the GitHub")]),t._v(" page to see how you can use "),o("code",[t._v("vue-navigation-bar")]),t._v(" in your Vue projects.")])])])])}],!1,null,null,null).exports,p=o(13),u=o(17);i.a.use(p.a);var r=new p.a({mode:"history",routes:[{path:"/"},{path:"/about"},{path:"/locations"},{path:"/blog"},{path:"/pricing"},{path:"/pricing/pro"},{path:"/pricing/starter"},{path:"/contact"},{path:"/customer-service"},{path:"/accounting"},{path:"/reception"},{path:"/signup"},{path:"/login"}]});i.a.component("vue-navigation-bar",u.a),new i.a({el:"#app",router:r,render:function(t){return t(a)}})}]);