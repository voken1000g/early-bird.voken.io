(window.webpackJsonp=window.webpackJsonp||[]).push([[45,17,18,19,20,22,25],{507:function(t,e,r){"use strict";r.r(e);r(508);var n={name:"SvgPatternRect",props:{width:{type:Number,default:404},height:{type:Number,default:784}},computed:{viewBox:function(){return"0 0 "+this.width+" "+this.height}}},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{fill:"none",width:t.width,height:t.height,viewBox:t.viewBox}},[r("defs",[r("pattern",{attrs:{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[r("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),r("rect",{attrs:{width:t.width,height:t.height,fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"}})])}),[],!1,null,"4766f43b",null);e.default=component.exports},508:function(t,e,r){"use strict";var n=r(15),l=r(53),o=r(54),c=r(181),d=r(125),f=r(25),v=r(101).f,_=r(102).f,h=r(28).f,x=r(509).trim,m="Number",y=n.Number,w=y,C=y.prototype,k=o(r(126)(C))==m,R="trim"in String.prototype,B=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,l,o=(e=R?e.trim():x(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(k?f((function(){C.valueOf.call(r)})):o(r)!=m)?c(new w(B(e)),r,y):B(e)};for(var $,E=r(23)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)l(w,$=E[N])&&!l(y,$)&&h(y,$,_(w,$));y.prototype=C,C.constructor=y,r(32)(n,m,y)}},509:function(t,e,r){var n=r(11),l=r(67),o=r(25),c=r(510),d="["+c+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),_=function(t,e,r){var l={},d=o((function(){return!!c[t]()||"​"!="​"[t]()})),f=l[t]=d?e(h):c[t];r&&(l[r]=f),n(n.P+n.F*d,"String",l)},h=_.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=_},510:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},511:function(t,e,r){"use strict";r.r(e);var n={name:"LayoutBgA",components:{SvgPatternRect:r(507).default},props:{theme:{type:String,default:"RL"}}},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative overflow-hidden"},[r("div",{staticClass:"hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"},[r("div",{staticClass:"relative h-full max-w-screen-xl mx-auto"},["RL"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute bottom-0 left-full transform -translate-y-40 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:786}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute top-0 right-full transform translate-y-40 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:786}})]:"RLR"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-12 left-full transform -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute top-1/2 right-full transform -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute bottom-12 left-full transform -translate-x-1/4 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}})]:"CORNER"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4\n                                          lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",attrs:{width:394,height:786}})]:"LEFT"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:"RIGHT"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:t._e()],2)]),t._v(" "),r("div",{staticClass:"relative"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgPatternRect:r(507).default})},519:function(t,e,r){var content=r(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("6dfd80b4",content,!0,{sourceMap:!1})},536:function(t,e,r){"use strict";r(519)},537:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,'li[data-v-b399c53c]{\n  font-family:Hack, monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\nli .eth-account-avatar[data-v-b399c53c]{\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    border-radius:9999px;\n    border-width:1px;\n    height:1.75rem;\n    width:1.75rem\n}\na[data-v-b399c53c]:hover{\n    --tw-text-opacity:1;\n    color:rgba(22, 30, 46, var(--tw-text-opacity))\n}',""]),t.exports=n},555:function(t,e,r){"use strict";r.r(e);var n=r(0),l=(r(14),r(179)),o=r(4),c="https://etherscan.io",d="https://ropsten.etherscan.io",f="https://rinkeby.etherscan.io",v="https://goerli.etherscan.io",_="https://kovan.etherscan.io",h={block:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;switch(e){case 1:return c+"/block/"+t;case 3:return d+"/block/"+t;case 4:return f+"/block/"+t;case 5:return v+"/block/"+t;case 42:return _+"/block/"+t;default:return"javascript:void()"}},tx:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;switch(e){case 1:return c+"/tx/"+t;case 3:return d+"/tx/"+t;case 4:return f+"/tx/"+t;case 5:return v+"/tx/"+t;case 42:return _+"/tx/"+t;default:return"javascript:void()"}},address:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;switch(e){case 1:return c+"/address/"+t;case 3:return d+"/address/"+t;case 4:return f+"/address/"+t;case 5:return v+"/address/"+t;case 42:return _+"/address/"+t;default:return"javascript:void()"}},token:function(address){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;switch(t){case 1:return c+"/token/"+address;case 3:return d+"/token/"+address;case 4:return f+"/token/"+address;case 5:return v+"/token/"+address;case 42:return _+"/token/"+address;default:return"javascript:void()"}}},x={name:"EarlyBirdReferralRewards",components:{VueAvatar:l.a},data:function(){return{fnEtherscan:h,rewards:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRewards();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRewards:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.state.vokenEarlyBirdSale.contract().getPastEvents("Reward",{filter:{referrer:t.$store.state.ether.account},fromBlock:0,toBlock:"latest"}).then(t.onRewards);case 2:case"end":return e.stop()}}),e)})))()},onRewards:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.length>0){for(n=[],i=0;i<t.length;i++)n.push({blockNumber:o.a.ns2Str(t[i].blockNumber,0),transactionHash:t[i].transactionHash,account:t[i].returnValues.account,level:t[i].returnValues.level,ether:e.$store.state.ether.web3().utils.fromWei(t[i].returnValues.weiReward,"ether")});e.rewards=n}case 1:case"end":return r.stop()}}),r)})))()}}},m=(r(536),r(7)),component=Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-16 lg:py-24"},[r("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"max-w-4xl mx-auto text-center"},[r("h2",{staticClass:"text-3xl font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n        "+t._s(t.$t("earlyBird.rules.Referral_Rewards"))+"\n      ")])])]),t._v(" "),r("div",{staticClass:"resp-mt mx-auto max-w-2xl px-2"},[t.rewards.length>0?r("ul",{staticClass:"divide-y divide-gray-200"},t._l(t.rewards,(function(e){return r("li",[r("div",{staticClass:"flex space-x-3"},[r("vue-avatar",{staticClass:"eth-account-avatar",attrs:{value:e.account}}),t._v(" "),r("div",{staticClass:"flex-1 space-y-1"},[r("div",{staticClass:"flex items-center justify-between"},[r("h3",{staticClass:"text-base font-bold"},[t._v("\n                "+t._s(e.ether)+" ETH\n              ")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-500"},[r("a",{attrs:{target:"_blank",href:t.fnEtherscan.tx(e.transactionHash)}},[t._v("\n                  #"+t._s(e.blockNumber)+"\n                ")])])]),t._v(" "),r("p",{staticClass:"text-xs md:text-sm text-gray-500 break-all"},[t._v("\n              "+t._s(t.$t("earlyBird.referral.Depth"))+" #"+t._s(e.level)+" - "+t._s(e.account)+"\n            ")])])],1)])})),0):r("div",{staticClass:"text-center text-gray-500"},[t._v("\n      No Referrals Yet\n    ")])])])}),[],!1,null,"b399c53c",null);e.default=component.exports},560:function(t,e,r){"use strict";r.r(e);var n={name:"EarlyBirdReferralHero"},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-indigo-800"},[r("div",{staticClass:"resp-wide border-t border-indigo-700 py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[r("div",{staticClass:"px-4"},[r("div",{staticClass:"max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl"},[r("h1",{staticClass:"text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},[t._v("\n          "+t._s(t.$t("earlyBird.referral.Referral_System"))+"\n        ")]),t._v(" "),r("p",{staticClass:"mt-6 sm:mt-10 text-xl text-indigo-300"},[t._v("\n          "+t._s(t.$t("earlyBird.referral.Earn_ETH_up_to_22percent__"))+"\n        ")])])])])])}),[],!1,null,"dc0350c4",null);e.default=component.exports},561:function(t,e,r){"use strict";r.r(e);var n=r(531),l={name:"EarlyBirdReferralLink",components:{VueQr:r.n(n).a},computed:{vokenAddressReady:function(){return this.$store.state.voken.account.vokenInt>"0"},referralLink:function(){return this.vokenAddressReady?"https://get.voken.io/r="+this.$store.state.voken.account.vokenAddress:""}},methods:{copyReferralLink:function(){this.$refs["referral-link"].select(),document.execCommand("copy")?this.$toast.success("Copied"):this.$toast.error("Copy Failed")}}},o=r(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-bg-a",{staticClass:"py-16 lg:py-24"},[r("div",{staticClass:"resp-wide"},[r("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"max-w-4xl mx-auto text-center"},[r("h2",{staticClass:"text-3xl font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n          "+t._s(t.$t("earlyBird.referral.Referral_Link"))+"\n        ")])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.vokenAddressReady,expression:"vokenAddressReady"}],staticClass:"resp-mt mx-auto max-w-md flex items-center justify-center"},[r("div",{staticClass:"w-1/2"},[r("vue-qr",{staticClass:"border-cool-gray-300 border",attrs:{text:t.referralLink,size:640,margin:32,colorDark:"#27303f"}})],1)]),t._v(" "),r("div",{staticClass:"resp-mt mx-auto max-w-3xl"},[r("label",{attrs:{for:"referral-link"}}),t._v(" "),r("input",{ref:"referral-link",staticClass:"input-indigo w-full py-3 px-4 font-mono text-sm md:text-base",attrs:{type:"text",id:"referral-link",placeholder:"Please set your Voken address",readonly:""},domProps:{value:t.referralLink},on:{click:t.copyReferralLink}}),t._v(" "),t.vokenAddressReady?r("div",{staticClass:"mt-8 max-w-sm mx-auto"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-2 text-lg text-center break-normal",on:{click:t.copyReferralLink}},[t._v("\n          "+t._s(t.$t("earlyBird.referral.Copy"))+"\n        ")])]):r("div",{staticClass:"mt-8 max-w-md mx-auto"},[r("nuxt-link",{staticClass:"w-full btn btn-pink justify-center py-2 text-lg text-center break-normal",attrs:{to:t.localePath("/wallet/bind")}},[t._v("\n          "+t._s(t.$t("nav.Wallet_Bind"))+"\n        ")])],1)])])])}),[],!1,null,"29c07a13",null);e.default=component.exports;installComponents(component,{LayoutBgA:r(511).default})},562:function(t,e,r){"use strict";r.r(e);r(508);var n={name:"EarlyBirdReferralRules",computed:{referred:function(){return Number(this.$store.state.ether.web3().utils.fromWei(this.$store.state.vokenEarlyBirdSale.account.referred,"ether"))}}},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-16 lg:py-24"},[r("div",{staticClass:"resp-wide"},[r("div",{staticClass:"refer space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:gap-8"},[r("div",{staticClass:"col-span-2 prose sm:prose-md lg:prose-lg xl:prose-xl max-w-none"},[r("h3",[t._v("\n          "+t._s(t.$t("earlyBird.referral.Referral_Rewards__22percent"))+"\n        ")]),t._v(" "),r("p",[t._v("\n          "+t._s(t.$t("The_"))),r("a",{attrs:{target:"_blank",href:t.$t("link.VokenTB_Early_Bird_Sale_Contract.href")}},[t._v(t._s(t.$t("link.VokenTB_Early_Bird_Sale_Contract.text")))]),t._v("\n          "+t._s(t.$t("earlyBird.referral.has_a_10_levels__"))+"\n        ")]),t._v(" "),r("p",[t._v("\n          "+t._s(t.$t("earlyBird.referral.Tell_your_friends_and__"))+"\n        ")]),t._v(" "),r("ul",[r("li",[t._v("\n            "+t._s(t.$t("earlyBird.referral.The_reward_ETH__"))+"\n            "),r("a",{attrs:{target:"_blank",href:t.$t("link.VokenTB_Early_Bird_Sale_Contract.href")}},[t._v("\n              "+t._s(t.$t("link.VokenTB_Early_Bird_Sale_Contract.text"))+"\n            ")])]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("earlyBird.referral.The_referral_relationships__"))+"\n            "),r("a",{attrs:{target:"_blank",href:t.$t("link.VokenTB_Main_Contract.href")}},[t._v("\n              "+t._s(t.$t("link.VokenTB_Main_Contract.text"))+"\n            ")]),t._v("\n            "+t._s(t.$t("earlyBird.referral.on_the_Ethereum__"))+"\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("earlyBird.referral.Everyone_who_join_the"))+"\n            "),r("nuxt-link",{attrs:{to:t.localePath("/voken/early-bird")}},[t._v("\n              "+t._s(t.$t("voken.Early_Bird_Sale"))+"\n            ")]),t._v("\n            "+t._s(t.$t("earlyBird.referral.and_the"))+"\n            "),r("nuxt-link",{attrs:{to:t.localePath("/voken/public-sale")}},[t._v("\n              "+t._s(t.$t("voken.Public_Sale"))+"\n            ")]),t._v("\n            "+t._s(t.$t("earlyBird.referral.by_using_your__"))+"\n          ")],1)]),t._v(" "),r("p",[t._v("\n          "+t._s(t.$t("earlyBird.referral.You_will_get_rewarded__"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"pt-0 px-4 md:pt-2 md:px-0 feed-simple-with-icons"},[r("ul",{staticClass:"-mb-8"},[r("li",[r("div",{staticClass:"feed"},[r("span",{staticClass:"line",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"icon"},[r("fa",{staticClass:"text-green-500",attrs:{icon:["fas","handshake"]}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",[t._v("\n                    "+t._s(t.$t("earlyBird.referral.From_direct_referrals__"))+" #0\n                  ")]),t._v(" "),r("div",[t._v("\n                    10%\n                  ")])])])])]),t._v(" "),r("li",[r("div",{staticClass:"feed"},[r("span",{staticClass:"line",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"icon"},[r("fa",{staticClass:"text-green-500",attrs:{icon:["fas","user-friends"]}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",[t._v("\n                    "+t._s(t.$t("earlyBird.referral.From_indirect_referrals__"))+" #1\n                  ")]),t._v(" "),r("div",[t._v("\n                    3%\n                  ")])])])])]),t._v(" "),r("li",[r("div",{staticClass:"feed"},[r("span",{staticClass:"line",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"icon"},[r("fa",{staticClass:"text-green-500",attrs:{icon:["fas","user-friends"]}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",[t._v("\n                    "+t._s(t.$t("earlyBird.referral.From_indirect_referrals__"))+" #2\n                  ")]),t._v(" "),r("div",[t._v("\n                    2%\n                  ")])])])])]),t._v(" "),t._l([3,4,5,6,7,8,9],(function(e){return r("li",{key:e},[r("div",{staticClass:"feed"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e<9,expression:"level < 9"}],staticClass:"line",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"icon"},[t.referred<e?r("fa",{staticClass:"text-gray-300",attrs:{icon:["fas","user-friends"]}}):r("fa",{staticClass:"text-green-500",attrs:{icon:["fas","user-friends"]}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",[r("p",[t._v("\n                      "+t._s(t.$t("earlyBird.referral.From_indirect_referrals__"))+" #"+t._s(e)+"\n                    ")]),t._v(" "),t.referred<e?r("p",{staticClass:"mt-1 text-green-500"},[t._v("\n                      "+t._s(t.$t("earlyBird.referral.Refer"))+"\n                      "+t._s(e)+" ETH\n                      "+t._s(t.$t("earlyBird.referral.to_unlock"))+"\n                    ")]):r("p",{staticClass:"mt-1 text-orange-500"},[t._v("\n                      "+t._s(t.$t("earlyBird.referral.Unlocked"))+"\n                    ")])]),t._v(" "),r("div",[t._v("\n                    1%\n                  ")])])])])])}))],2)])])])])}),[],!1,null,"f039be1e",null);e.default=component.exports},621:function(t,e,r){"use strict";r.r(e);var n={name:"early-bird-referral",middleware:["web3","voken","vokenEarlyBirdSale"],layout:"white"},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("early-bird-referral-hero"),t._v(" "),r("early-bird-referral-link",{staticClass:"bg-indigo-50"}),t._v(" "),r("early-bird-referral-rules"),t._v(" "),r("early-bird-referral-rewards",{staticClass:"bg-indigo-50"})],1)}),[],!1,null,"711df9d7",null);e.default=component.exports;installComponents(component,{EarlyBirdReferralHero:r(560).default,EarlyBirdReferralLink:r(561).default,EarlyBirdReferralRules:r(562).default,EarlyBirdReferralRewards:r(555).default})}}]);