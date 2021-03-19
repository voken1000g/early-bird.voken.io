(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{512:function(t,e,r){(function(e){const o=r(179);class n extends Error{constructor(t){super(t),this.name="InvalidStartError",this.code="INVALID_START"}}class c extends Error{constructor(t){super(t),this.name="InvalidLengthError",this.code="INVALID_LENGTH"}}t.exports={fromVPriv:function(input){if(!input instanceof String)throw TypeError("Except: String");if("vpriv"!==input.slice(0,5))throw new n("A VOKEN Private Key should start with `vpriv`");if(52!==(input=input.slice(5)).length)throw new c("The length of a VOKEN Private Key should be `57`");let t=e.from(o.decode(input));for(;t.length<32;)t=e.concat([e.from("00","hex"),t]);return t},toVPriv:function(input){if(32!==input.length)throw new c("The length of a Private Key should be `32`");return"vpriv"+o.encode(input)},InvalidStartError:n,InvalidLengthError:c}}).call(this,r(9).Buffer)},522:function(t,e,r){"use strict";(function(t){var o,n=r(1),c=(r(18),r(19),r(66),r(67),r(37),r(512)),l=r.n(c),m=r(126),d=r.n(m),f=r(69),v=r.n(f),h=r(523),y=r.n(h),_=r(182),w=r.n(_),x=r(179),C=r.n(x),E=r(524),D=r.n(E),S=r(178);e.a={name:"index",layout:"indigoWaveClear",components:{VueAvatar:S.a},head:function(){return{title:this.$t("nav.Messenger")}},data:function(){return{publicKey:d.a,vpriv:"",vprivError:"",passwordSet:"",passwordRepeat:"",bufPrivateKey:t.from(""),bufPrivateKeyEncrypted:t.from(""),password:"",bufTestEncrypted:t.from(""),showEncryptLayer:!1,showDecryptLayer:!1,toVpub:"",toVpubError:"",toMessage:"",fromData:"",fromDataSig:t.from(""),fromDataPublicKey:t.from(""),fromDataAddress:"",fromDataDecrypted:t.from(""),fromDataError:""}},watch:{vpriv:function(){try{var t=l.a.fromVPriv(this.vpriv),e=d.a.fromPrivateKey(t);v.a.fromPublicKey(e);this.vprivError=""}catch(t){this.vprivError=t.message}},fromData:function(){this.fromData||(this.fromDataError="")}},computed:{passwordSame:function(){return this.passwordSet===this.passwordRepeat},passwordConfirmed:function(){return this.passwordSet&&this.passwordSame},cached:function(){return 32===this.bufPrivateKeyEncrypted.length&&this.bufTestEncrypted.length>0},bufPassword:function(){return t.from(this.password)},passwordMatched:function(){return"VOKEN Message Helper"===y.a.decrypt(this.bufTestEncrypted,this.bufPassword).toString()},bufPublicKey:function(){return this.$store.state.bufPublicKey},address:function(){return this.$store.state.address},ready:function(){return 32===this.bufPrivateKey.length&&33===this.bufPublicKey.length&&this.address},toMessageEncrypted:function(){if(this.toMessage&&this.ready&&33===this.bufToPublicKey.length){var e=t.from(this.toMessage),r=w.a.sha1(e),o=D.a.encrypt(r,this.bufToPublicKey),n=D.a.sign(r,this.bufPrivateKey),c=t.from([n.length]),l=y.a.encrypt(t.concat([this.bufPublicKey,e]),r),m=t.concat([o,c,n,l]);return C.a.encode(m)}return""},bufToPublicKey:function(){if(this.toVpub)try{return this.toVpubError="",d.a.fromVPub(this.toVpub)}catch(t){this.toVpubError=t.message}return t.from("")},bufToMessage:function(){return this.toMessage?t.from(this.toMessage):t.from("")},bufToAESKey:function(){return this.bufToMessage.length>0?w.a.sha1(this.bufToMessage):t.from("")},bufToAESKeyEncrypted:function(){return 33===this.bufToPublicKey.length&&this.bufToAESKey.length>0?D.a.encrypt(this.bufToAESKey,this.bufToPublicKey):t.from("")},bufToSig:function(){return this.bufToAESKey.length>0?D.a.sign(this.bufToAESKey,this.bufPrivateKey):t.from("")},strToSig:function(){return this.bufToSig.length>0?C.a.encode(this.bufToSig):t.from("")},bufToSigLength:function(){return this.bufToSig.length>0?t.from([this.bufToSig.length]):t.from([0])},bufToBodyEncrypted:function(){return 33===this.bufPublicKey.length&&this.bufToMessage.length>0?y.a.encrypt(t.concat([this.bufPublicKey,this.bufToMessage]),this.bufToAESKey):t.from("")},bufToMergedData:function(){return this.bufToAESKeyEncrypted.length>0&&this.bufToBodyEncrypted.length>0?t.concat([this.bufToAESKeyEncrypted,this.bufToSigLength,this.bufToSig,this.bufToBodyEncrypted]):t.from("")},strToBodyEncrypted:function(){return this.bufToMergedData.length>0?C.a.encode(this.bufToMergedData):""},bufFromDataDecoded:function(){if(this.fromData&&this.ready)try{var e=C.a.decode(this.fromData);return this.fromDataError="",e}catch(t){this.fromDataError="[Base32 Decode Error] "+t.message}return t.from("")},bufFromDataKeyEncrypted:function(){return this.bufFromDataDecoded.length>0?this.bufFromDataDecoded.slice(0,117):t.from("")},bufFromDataKey:function(){if(this.bufFromDataKeyEncrypted.length>0)try{var e=D.a.decrypt(this.bufFromDataKeyEncrypted,this.bufPrivateKey);return this.fromDataError="",e}catch(t){this.fromDataError="[Decrypt Error] "+t.message}return t.from("")},intFromDataSigLength:function(){if(this.bufFromDataKey.length>0)try{var t=this.bufFromDataDecoded.slice(117,118).toString("hex"),e=parseInt(t,16);return this.fromDataError="",e}catch(t){this.fromDataError="[Parse Error] Cannot parse signature length: "+t.message}return 0},bufFromDataSig:function(){if(this.intFromDataSigLength>0)try{var e=this.bufFromDataDecoded.slice(118,118+this.intFromDataSigLength);return this.fromDataError="",e}catch(t){this.fromDataError="[Slice Error] Cannot parse signature: "+t.message}return t.from("")},bufFromDataPdEncrypted:function(){if(this.bufFromDataSig.length>0)try{var e=this.bufFromDataDecoded.slice(118+this.intFromDataSigLength);return this.fromDataError="",e}catch(t){this.fromDataError="[Slice Error] Cannot parse encrypted sig_&_data body: "+t.message}return t.from("")},bufFromDataPd:function(){if(this.bufFromDataSig.length>0)try{var e=y.a.decrypt(this.bufFromDataPdEncrypted,this.bufFromDataKey);return this.fromDataError="",e}catch(t){this.fromDataError="[Decrypt Error] Cannot decrypt sig_&_data body: "+t.message}return t.from("")},bufFromDataPublicKey:function(){if(this.bufFromDataPd.length>0)try{var e=this.bufFromDataPd.slice(0,33);return this.fromDataError="",e}catch(t){this.fromDataError="[Slice Error] Cannot parse sender's Public Key body: "+t.message}return t.from("")},strFromDataPublicKey:function(){if(33===this.bufFromDataPublicKey.length)try{var t=d.a.toVPub(this.bufFromDataPublicKey);return this.fromDataError="",t}catch(t){this.fromDataError="[Public Key Error] Cannot convert sender's Public Key: "+t.message}return""},boolFromDataSigVerified:function(){if(this.bufFromDataPublicKey.length>0)try{var t=D.a.verify(this.bufFromDataKey,this.bufFromDataSig,this.bufFromDataPublicKey);return this.fromDataError="",t}catch(t){this.fromDataError="[Verify Signature Error] "+t.message}return!1},strFromDataSig:function(){if(this.boolFromDataSigVerified)try{var t=C.a.encode(this.bufFromDataSig);return this.fromDataError="",t}catch(t){this.fromDataError="[Encode Error] Cannot encode the signature of the message: "+t.message}return""},strFromDataAddress:function(){if(33===this.bufFromDataPublicKey.length)try{var t=v.a.fromPublicKey(this.bufFromDataPublicKey);return this.fromDataError="",t}catch(t){this.fromDataError="[Address Error] Cannot convert sender's Address: "+t.message}return""},bufFromDataOriginalData:function(){if(this.bufFromDataPd.length>0)try{var e=this.bufFromDataPd.slice(33);return this.fromDataError="",e}catch(t){this.fromDataError="[Slice Error] Cannot parse original message body: "+t.message}return t.from("")}},mounted:(o=Object(n.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=this.getCache("bufPrivateKeyEncrypted"))&&(this.bufPrivateKeyEncrypted=t.from(r.data)),(o=this.getCache("bufTestEncrypted"))&&(this.bufTestEncrypted=t.from(o.data));case 4:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),methods:{start:function(){if(this.vpriv){if(!this.vprivError){if(this.passwordSet){if(this.passwordSet===this.passwordRepeat){this.bufPrivateKey=l.a.fromVPriv(this.vpriv);var e=y.a.encrypt(this.bufPrivateKey,t.from(this.passwordSet));this.setCache("bufPrivateKeyEncrypted",e);var r=d.a.fromPrivateKey(this.bufPrivateKey);this.$store.dispatch("SET_PUBLIC_KEY",r);var o=y.a.encrypt(t.from("VOKEN Message Helper"),t.from(this.passwordSet));return void this.setCache("bufTestEncrypted",o)}return void this.$toast.error("Please confirm the `Password`...")}return void this.$toast.error("`Password` is empty...")}this.$toast.error("Invalid `Private Key`...")}else this.$toast.error("`Private Key` could not be empty...")},unlock:function(){if(this.passwordMatched){this.bufPrivateKey=y.a.decrypt(this.bufPrivateKeyEncrypted,this.bufPassword);var t=d.a.fromPrivateKey(this.bufPrivateKey);this.$store.dispatch("SET_PUBLIC_KEY",t)}else this.$toast.error("The `Password` does not work")},reset:function(){this.vpriv="",this.vprivError="",this.passwordSet="",this.passwordRepeat="",this.bufPrivateKey=t.from(""),this.bufPrivateKeyEncrypted=t.from(""),this.password="",this.bufTestEncrypted=t.from(""),this.removeCache("bufPrivateKeyEncrypted"),this.removeCache("bufTestEncrypted")},showEncrypt:function(){this.showEncryptLayer=!0,this.showDecryptLayer=!1},hideEncrypt:function(){this.showEncryptLayer=!1,this.showDecryptLayer=!1},showDecrypt:function(){this.showDecryptLayer=!0,this.showEncryptLayer=!1},hideDecrypt:function(){this.showDecryptLayer=!1,this.showEncryptLayer=!1},copyEncryptedData:function(){this.$refs["to-message-encrypted"].select(),document.execCommand("copy")?this.$toast.info("Copied"):this.$toast.info("Copy failed")},setCache:function(e,r){var o=w.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.setLocalStorage(o,r)},getCache:function(e){var r=w.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.getLocalStorage(r)},removeCache:function(e){var r=w.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.removeLocalStorage(r)}}}}).call(this,r(9).Buffer)},542:function(t,e,r){var content=r(562);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("92f63d3c",content,!0,{sourceMap:!1})},561:function(t,e,r){"use strict";r(542)},562:function(t,e,r){var o=r(16)((function(i){return i[1]}));o.push([t.i,'.initialize[data-v-7e490f18]{\n  max-width:36rem;\n  width:100%;\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#fdf2f2;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 242, 242, 0));\n  --tw-gradient-to:#fcd9bd;\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.initialize label[data-v-7e490f18]{\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.initialize input[data-v-7e490f18]{\n  font-family:Hack, monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n.initialize .btn[data-v-7e490f18]{\n  font-weight:700;\n  font-size:1.125rem;\n  line-height:1.75rem\n}\n.encrypt[data-v-7e490f18]{\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#fdf2f2;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 242, 242, 0));\n  --tw-gradient-to:#f8b4d9;\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.decrypt[data-v-7e490f18], .decrypt-details[data-v-7e490f18]{\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#f3faf7;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(243, 250, 247, 0));\n  --tw-gradient-to:#7edce2;\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}',""]),t.exports=o},621:function(t,e,r){"use strict";r.r(e);var o=r(522).a,n=(r(561),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"resp-wide pb-12"},[r("article",{staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[r("h1",[t._v("\n      "+t._s(t.$t("nav.Messenger"))+"\n    ")]),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("messenger.This_is_a_purely__"))+"\n      "),r("a",{attrs:{target:"_blank",href:t.$t("link_to_github.href")}},[t._v("\n        "+t._s(t.$t("link_to_github.text"))+"...\n      ")])]),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("messenger.Always_help_secure__"))+"\n    ")]),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("messenger.What_you_can_do_here_"))+"\n    ")]),t._v(" "),r("ul",[r("li",[r("div",[t._v("\n          "+t._s(t.$t("messenger.Encrypt_and_sign_messages"))+"\n        ")]),t._v(" "),r("div",{staticClass:"mt-2"},[r("button",{staticClass:"w-full max-w-sm btn btn-pink justify-center py-2 px-4",attrs:{type:"button"},on:{click:t.showEncrypt}},[t._v("\n            "+t._s(t.$t("messenger.Encrypt__Sign_A_Message"))+"\n          ")])])]),t._v(" "),r("li",[r("div",[t._v("\n          "+t._s(t.$t("messenger.Decrypt_and_verify_the__"))+"\n        ")]),t._v(" "),r("div",{staticClass:"mt-2"},[r("button",{staticClass:"w-full max-w-sm btn justify-center py-2 px-4",attrs:{type:"button"},on:{click:t.showDecrypt}},[t._v("\n            "+t._s(t.$t("messenger.Decrypt__Verify_A_Message"))+"\n          ")])])])]),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("messenger.All_data_is_encrypted_and_stored__"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"my-6 border-t border-indigo-300"}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.cached&&!t.ready,expression:"!cached && !ready"}],staticClass:"initialize py-4 px-2 sm:px-4"},[r("div",{staticClass:"font-bold text-gray-800 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Set_your_Private_Key_to_start"))+"...\n    ")]),t._v(" "),r("div",{staticClass:"mt-6 space-y-3"},[r("div",{class:{success:t.vpriv&&!t.vprivError,error:t.vpriv&&t.vprivError}},[r("label",{attrs:{for:"vpriv"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!t.vpriv||!t.vprivError,expression:"!vpriv || !vprivError"}]},[t._v("\n            "+t._s(t.$t("messenger.Set_your_Private_Key"))+"\n          ")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.vpriv&&t.vprivError,expression:"vpriv && vprivError"}]},[t._v("\n            "+t._s(t.vprivError)+"\n          ")])]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.vpriv,expression:"vpriv"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"text",id:"vpriv",placeholder:"vpriv..."},domProps:{value:t.vpriv},on:{input:function(e){e.target.composing||(t.vpriv=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])]),t._v(" "),r("div",{class:{success:t.passwordConfirmed}},[r("label",{attrs:{for:"password_set"}},[t._v("\n          "+t._s(t.$t("messenger.Set_a_password"))+"\n        ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordSet,expression:"passwordSet"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password_set"},domProps:{value:t.passwordSet},on:{input:function(e){e.target.composing||(t.passwordSet=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])]),t._v(" "),r("div",{class:{success:t.passwordConfirmed,error:t.passwordRepeat&&!t.passwordSame}},[r("label",{attrs:{for:"password_repeat"}},[t._v("\n          "+t._s(t.$t("messenger.Confirm_the_password"))+"\n        ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordRepeat,expression:"passwordRepeat"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password_repeat"},domProps:{value:t.passwordRepeat},on:{input:function(e){e.target.composing||(t.passwordRepeat=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])])]),t._v(" "),r("div",{staticClass:"mt-4 space-y-2 md:flex md:space-y-0 md:space-x-4"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.start}},[t._v("\n        "+t._s(t.$t("messenger.Start"))+"\n      ")]),t._v(" "),r("a",{staticClass:"w-full btn justify-center py-3",attrs:{target:"_blank",href:t.localePath("/wallet/generator")}},[t._v("\n        "+t._s(t.$t("messenger.Visit_Generator"))+"\n      ")])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.cached&&!t.ready,expression:"cached && !ready"}],staticClass:"initialize py-4 px-2 sm:px-4 space-y-4"},[r("div",{staticClass:"font-bold text-gray-800 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Your_Private_Key_is_encrypted__"))+"\n    ")]),t._v(" "),r("div",{class:{success:t.passwordMatched}},[r("label",{attrs:{for:"password"}},[t._v("\n        "+t._s(t.$t("messenger.Input_the_password_to_unlock"))+"\n      ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)]),t._v(" "),r("div",{staticClass:"mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.unlock}},[t._v("\n          "+t._s(t.$t("messenger.Unlock"))+"\n        ")]),t._v(" "),r("button",{staticClass:"w-full btn btn-gray justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.reset}},[t._v("\n          "+t._s(t.$t("messenger.Reset"))+"\n        ")])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showEncryptLayer&&t.ready,expression:"showEncryptLayer && ready"}],staticClass:"encrypt mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 px-2 sm:px-4"},[r("h2",{staticClass:"font-bold text-2xl text-gray-700 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Encrypt__Sign_A_Message"))+"\n    ")]),t._v(" "),r("div",{staticClass:"h-full w-full space-y-4"},[r("div",{staticClass:"w-full",class:{success:t.toVpub&&!t.toVpubError,error:t.toVpub&&t.toVpubError}},[r("label",{staticClass:"text-sm",attrs:{for:"to_vpub"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!t.toVpub||!t.toVpubError,expression:"!toVpub || !toVpubError"}]},[t._v("\n            "+t._s(t.$t("messenger.To_Public_Key"))+"\n          ")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.toVpub&&t.toVpubError,expression:"toVpub && toVpubError"}]},[t._v("\n            "+t._s(t.toVpubError)+"\n          ")])]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.toVpub,expression:"toVpub"}],staticClass:"input-indigo w-full py-3 px-4 font-mono text-xs sm:text-sm md:text-base",attrs:{type:"text",id:"to_vpub",placeholder:"vpub..."},domProps:{value:t.toVpub},on:{input:function(e){e.target.composing||(t.toVpub=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])]),t._v(" "),r("div",{staticClass:"w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0"},[r("div",{staticClass:"w-full"},[r("label",{staticClass:"text-sm",attrs:{for:"to_message"}},[t._v("\n            "+t._s(t.$t("messenger.Text_Message"))+"\n          ")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.toMessage,expression:"toMessage"}],staticClass:"textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none",attrs:{id:"to_message",rows:"10",placeholder:t.$t("messenger.Input_the_original_message_here_")},domProps:{value:t.toMessage},on:{input:function(e){e.target.composing||(t.toMessage=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-full"},[r("label",{staticClass:"text-sm",attrs:{for:"to_message_encrypted"}},[t._v("\n            "+t._s(t.$t("messenger.Encrypted_data__with__"))+"\n          ")]),t._v(" "),r("textarea",{ref:"to-message-encrypted",staticClass:"textarea-indigo w-full mt-1 py-3 px-4 bg-indigo-100 font-mono text-sm lg:text-base text-indigo-600 resize-none",attrs:{id:"to_message_encrypted",rows:"10",readonly:""},domProps:{value:t.strToBodyEncrypted}})])]),t._v(" "),r("div",{staticClass:"mt-2 sm:flex sm:justify-end"},[r("div",{staticClass:"w-full sm:max-w-xl"},[r("div",{staticClass:"space-y-2 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 font-bold",attrs:{type:"button"},on:{click:t.copyEncryptedData}},[t._v("\n              "+t._s(t.$t("messenger.Copy_the_encrypted_data"))+"\n            ")]),t._v(" "),r("button",{staticClass:"w-full btn btn-gray justify-center py-3 font-bold uppercase",attrs:{type:"button"},on:{click:t.hideEncrypt}},[t._v("\n              "+t._s(t.$t("messenger.Close"))+"\n            ")])])])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showDecryptLayer&&t.ready,expression:"showDecryptLayer && ready"}],staticClass:"decrypt mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 px-2 sm:px-4"},[r("h2",{staticClass:"font-bold text-2xl text-gray-700 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Decrypt__Verify_A_Message"))+"\n    ")]),t._v(" "),r("div",{staticClass:"w-full"},[r("div",{staticClass:"w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0"},[r("div",{staticClass:"w-full",class:{error:t.fromData&&t.fromDataError}},[r("label",{staticClass:"text-sm",attrs:{for:"from_message"}},[t._v("\n            "+t._s(t.$t("messenger.From_encrypted_data"))+"\n          ")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fromData,expression:"fromData"}],staticClass:"textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none",attrs:{id:"from_message",rows:"10",placeholder:t.$t("messenger.Input_the_encrypted_data__")},domProps:{value:t.fromData},on:{input:function(e){e.target.composing||(t.fromData=e.target.value)}}}),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.fromDataError,expression:"fromDataError"}],staticClass:"ml-2 font-bold text-red-700"},[t._v("\n            "+t._s(t.fromDataError)+"\n          ")])]),t._v(" "),t.bufFromDataOriginalData.length>0?r("div",{staticClass:"w-full"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.boolFromDataSigVerified,expression:"boolFromDataSigVerified"}],staticClass:"pt-6 pb-2 break-all"},[r("div",{staticClass:"w-14 h-14 mx-auto bg-white rounded-md shadow-md"},[r("vue-avatar",{attrs:{value:t.strFromDataAddress}})],1),t._v(" "),r("div",{staticClass:"mt-4 mx-auto"},[r("div",{staticClass:"text-sm text-gray-500 text-center"},[t._v("\n                "+t._s(t.strFromDataAddress)+"\n              ")]),t._v(" "),r("div",{staticClass:"py-4 px-6 font-bold text-gray-700 break-all"},[t._v("\n                "+t._s(t.bufFromDataOriginalData.toString())+"\n              ")])])])]):t._e()]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.boolFromDataSigVerified,expression:"boolFromDataSigVerified"}],staticClass:"mt-10 lg:mt-4 px-4 flex text-green-600 space-x-4"},[r("fa",{staticClass:"text-3xl",attrs:{icon:["fas","signature"]}}),t._v(" "),r("div",{staticClass:"font-mono"},[r("div",[t._v("\n            "+t._s(t.$t("messenger.Signature_Verification_Passed_"))+"\n          ")]),t._v(" "),r("div",{staticClass:"mt-1 text-xs md:text-sm break-all"},[t._v("\n            "+t._s(t.strFromDataSig)+"\n          ")])])],1),t._v(" "),r("div",{staticClass:"mt-6 sm:flex sm:justify-end"},[r("div",{staticClass:"w-full sm:max-w-xl"},[r("div",{staticClass:"space-y-2 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4"},[r("span",{staticClass:"w-full"}),t._v(" "),r("button",{staticClass:"w-full btn btn-gray justify-center py-3 font-bold uppercase",attrs:{type:"button"},on:{click:t.hideDecrypt}},[t._v("\n              "+t._s(t.$t("messenger.Close"))+"\n            ")])])])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showEncryptLayer&&t.ready,expression:"showEncryptLayer && ready"}],staticClass:"decrypt-details mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 px-2 sm:px-4"},[r("h2",{staticClass:"font-bold text-2xl text-gray-700 text-center"},[t._v("\n      Encryption details\n    ")]),t._v(" "),r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[t._m(0),t._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[r("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Original message\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[t._v("\n              "+t._s(t.toMessage)+"\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Hash the message\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[t._v("\n              "+t._s(t.bufToAESKey.toString("hex"))+"\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Encrypted hash\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[r("div",{staticClass:"text-teal-600 break-normal"},[t._v("\n                Encrypt the hash with the recipient's Public Key\n              ")]),t._v(" "),r("p",{staticClass:"mt-2"},[t._v("\n                "+t._s(t.bufToAESKeyEncrypted.toString("hex"))+"\n              ")])])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Signature (in hex)\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[r("div",{staticClass:"text-teal-600 break-normal"},[t._v("\n                Sign the hash with your Private Key\n              ")]),t._v(" "),r("p",{staticClass:"mt-2"},[t._v("\n                "+t._s(t.bufToSig.toString("hex"))+"\n              ")])])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Signature (Base32 encoded)\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[t._v("\n              "+t._s(t.strToSig)+"\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Signature length\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[t._v("\n              "+t._s(t.bufToSig.length)+"\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Encrypted body\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[r("div",{staticClass:"text-teal-600 break-normal"},[t._v("\n                Encrypt (your Public Key + Original Text Message) with the hash:\n              ")]),t._v(" "),r("p",{staticClass:"mt-2"},[t._v("\n                "+t._s(t.bufToBodyEncrypted.toString("hex"))+"\n              ")])])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Encrypted data\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[r("div",{staticClass:"text-teal-600 break-normal"},[t._v("\n                Merge the all the encrypted data above (encrypted hash + signature length + signature + encrypted\n                body):\n              ")]),t._v(" "),r("p",{staticClass:"mt-2"},[t._v("\n                "+t._s(t.bufToMergedData.toString("hex"))+"\n              ")])])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              Base32 encoded\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all"},[t._v("\n              "+t._s(t.strToBodyEncrypted)+"\n            ")])])])])])]),t._v(" "),r("article",{staticClass:"mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 prose lg:prose-lg xl:prose-xl max-w-none"},[r("p",[t._v("\n      "+t._s(t.$t("messenger.Share_your_Public_Key_to__"))+"\n    ")])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n          How it works?\n        ")]),t._v(" "),r("p",{staticClass:"mt-1 max-w-2xl text-sm text-gray-500"},[t._v("\n          Showing the signature and encryption process...\n        ")])])}],!1,null,"7e490f18",null);e.default=component.exports}}]);