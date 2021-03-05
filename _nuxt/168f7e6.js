(window.webpackJsonp=window.webpackJsonp||[]).push([[47,26,32],{474:function(e,t,n){"use strict";n.r(t);var o={name:"HeroSetVoken"},r=n(12),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-indigo-800"},[n("div",{staticClass:"resp-container border-t border-indigo-600 py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[n("div",{staticClass:"px-0 sm:px-4"},[n("h1",{staticClass:"text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},[e._v("\n        Set VOKEN Address\n      ")]),e._v(" "),n("p",{staticClass:"mt-5 leading-9 text-xl text-indigo-300"},[e._v("\n        Set your VOKEN Wallet Address, you will receive VOKEN on vnCHAIN (Susitna beta, and future main network)\n      ")])])])])}],!1,null,"3dd4659c",null);t.default=component.exports},484:function(e,t,n){"use strict";n.r(t);var o={name:"LayoutWProse"},r=n(12),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("article",{staticClass:"prose lg:prose-lg xl:prose-xl max-w-none"},[e._t("default")],2)}),[],!1,null,"6a3d2caa",null);t.default=component.exports},556:function(e,t,n){"use strict";n.r(t);var o=n(481),r=n.n(o);function d(template,style,script,e,t,n,o,r,d,l){"boolean"!=typeof o&&(d=r,r=o,o=!1);const c="function"==typeof script?script.options:script;let v;if(template&&template.render&&(c.render=template.render,c.staticRenderFns=template.staticRenderFns,c._compiled=!0,t&&(c.functional=!0)),e&&(c._scopeId=e),n?(v=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),style&&style.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=v):style&&(v=o?function(e){style.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){style.call(this,r(e))}),v)if(c.functional){const e=c.render;c.render=function(t,n){return v.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,v):[v]}return script}const l=d({render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{attrs:{src:e.dataUri,alt:"avatar: "+e.value}})},staticRenderFns:[]},undefined,{name:"VueAvatar",props:{value:String},computed:{dataUri(){return r.a.svgDataUriFromSeed(this.value)}}},undefined,false,undefined,!1,void 0,void 0,void 0),c=function(e){c.installed||(c.installed=!0,e.component("VueAvatar",l))};l.install=c;var v=l,f=n(474),m=n(471),_=n(484),h=n(438),x={name:"set-voken",middleware:["dapp"],components:{LayoutWProse:_.default,LayoutBgA:h.default,HeroSetVoken:f.default,CompSetVoken:m.default,VueAvatar:v},computed:{vokenAddressNotSet:function(){return this.$store.state.accountStatus.voken.eq(0)},vokenAddress:function(){return this.$store.state.accountStatus.vokenAddress}}},y=n(12),component=Object(y.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("hero-set-voken"),e._v(" "),n("layout-bg-a",{attrs:{theme:"RIGHT"}},[n("comp-set-voken",{directives:[{name:"show",rawName:"v-show",value:e.vokenAddressNotSet,expression:"vokenAddressNotSet"}]}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.vokenAddressNotSet,expression:"!vokenAddressNotSet"}],staticClass:"resp-container"},[n("layout-w-prose",{staticClass:"resp-my"},[n("h2",[e._v("\n          You've already set up your VOKEN Address:\n        ")])]),e._v(" "),n("div",{staticClass:"resp-my flex items-end justify-center space-x-4"},[n("vue-avatar",{staticClass:"resp-avatar",attrs:{value:e.vokenAddress}}),e._v(" "),n("div",{staticClass:"w-full sm:max-w-xl"},[n("label",{attrs:{for:"voken-address"}}),e._v(" "),n("div",{staticClass:"relative mt-1"},[n("input",{staticClass:"input-indigo w-full py-3 px-4 font-mono text-sm md:text-base text-gray-500",attrs:{type:"text",id:"voken-address",readonly:"",disabled:""},domProps:{value:e.vokenAddress}})])])],1)],1),e._v(" "),n("div",{staticClass:"resp-container"},[n("layout-w-prose",{staticClass:"resp-my"},[n("h3",[e._v("\n          Susitna VOKEN on vnCHAIN Susitna (beta network)\n        ")]),e._v(" "),n("p",[e._v("\n          After you set up your VOKEN Address,\n          you would receive some Susitna VOKEN on vnCHAIN Susitna (beta network) within 48 hours.\n          Meanwhile, you can experience the Proxy ClientBase by using it,\n          even send some to your friends.\n        ")]),e._v(" "),n("h3",[e._v("\n          VOKEN on vnCHAIN main network\n        ")]),e._v(" "),n("p",[e._v("\n          The transfer function of VokenTB will not be disabled\n          in order to facilitate user transfer, distribution, or trade.\n        ")]),e._v(" "),n("p",[e._v("\n          Once the main network is online, you can map the ERC20 version of VokenTB\n          to the vnCHAIN main network by transferring all or part of your funds to a specific address.\n        ")])])],1)],1)],1)}),[],!1,null,"96d23dfa",null);t.default=component.exports;installComponents(component,{HeroSetVoken:n(474).default,CompSetVoken:n(471).default,LayoutBgA:n(438).default})}}]);