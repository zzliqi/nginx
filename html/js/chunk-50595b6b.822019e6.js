(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50595b6b"],{"1d64":function(t,e,n){"use strict";var i=n("46f9"),s=n.n(i);s.a},4548:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"link"},[n("span",{on:{click:function(e){return t.openBtn()}}},[t._v("["+t._s(t.$t("system.copyrightNotice"))+"]")]),n("edit-modal",t._b({ref:"editModal",on:{cancel:t.closeBtn}},"edit-modal",t.detailModal,!1),[n("iframe",{staticStyle:{height:"600px"},attrs:{src:t.link,border:"0",frameborder:"no",scrolling:"no",width:"100%"}})])],1)},s=[],o=n("8eac"),a=n("b441"),l={name:"copyright-notice",components:{editModal:o["a"]},data:function(){return{link:a["VUE_APP_MI_DESIGN_URL"]+"copyRight/",detailModal:{isOk:!1,subCanceltext:this.$t("common.actions.close"),subtitle:this.$t("system.copyrightNotice"),modalWidth:1e3}}},methods:{openBtn:function(){this.$refs.editModal.open()},closeBtn:function(){this.$refs.editModal.close()}}},r=l,c=(n("1d64"),n("2877")),u=Object(c["a"])(r,i,s,!1,null,"c1efcf9c",null);e["a"]=u.exports},"46f9":function(t,e,n){},"4d78":function(t,e,n){},"5c97":function(t,e,n){},"64dd":function(t,e,n){"use strict";var i=n("4d78"),s=n.n(i);s.a},"7d9e":function(t,e,n){"use strict";var i=n("5c97"),s=n.n(i);s.a},"8eac":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{ref:"modal",attrs:{closable:!1,"mask-closable":!1,width:t.modalWidth},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("p",{attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:t.icon}}),n("span",[t._v(t._s(t.title))])],1),t._t("default"),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{disabled:t.loading},on:{click:t.cancelEvent}},[t._v("\n      "+t._s(t.canceltext)+"\n    ")]),t.isOk?n("Button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.okEvent}},[t._v(t._s(t.$t("common.buttons.ok")))]):t._e()],1)],2)},s=[],o=(n("c5f6"),{name:"edit-modal",props:{value:{type:Boolean,default:!1},isAdding:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},modalWidth:{type:Number,default:520},subtitle:{type:String,default:""},isOk:{type:Boolean,default:!0},subIcon:{type:String,default:""},subCanceltext:{type:String,default:""}},data:function(){return{icon:this.subIcon||"md-create",title:this.subtitle||this.$t("common.actions.edit"),visible:this.value,editing:!this.isAdding,canceltext:this.subCanceltext||this.$t("common.buttons.cancel")}},methods:{cancelEvent:function(){this.$emit("cancel")},okEvent:function(){this.$emit("ok")},open:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.editing=t,this.icon=!0===t?"md-create":"md-add",this.title=this.subtitle?this.subtitle:!0===t?this.$t("common.actions.edit")+this.subtitle:this.$t("common.actions.add")+this.subtitle,this.visible=!0},close:function(){this.visible=!1,this.icon="md-create",this.title=this.$t("common.actions.edit"),this.editing=!1},scrollTop:function(){var t=this.$refs.modal.$el,e=t.getElementsByClassName("ivu-modal-body");if(e&&e.length>0){var n=e[0];n&&n.scroll&&this.$nextTick((function(){return n.scroll(0,0)}))}}},watch:{value:function(t){this.visible=t,this.title=this.subtitle},visible:function(t){!0===t&&this.scrollTop()},subtitle:function(t){this.title=t}}}),a=o,l=(n("7d9e"),n("2877")),r=Object(l["a"])(a,i,s,!1,null,"0f32854a",null),c=r.exports;e["a"]=c},dc3f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login",style:t.loginBgStyle},[n("div",{staticClass:"login-container animated fadeInUp"},[n("Card",[n("div",{staticClass:"login-title",attrs:{slot:"title"},slot:"title"},[t._v("\n        "+t._s(t.systemName)+"\n      ")]),n("div",{attrs:{slot:"extra"},slot:"extra"},["en-US"==t.$language?n("Button",{attrs:{icon:"md-globe",size:"small"},on:{click:function(e){return t.changeLang("zh-CN")}}},[t._v(t._s(t.languages[0]))]):n("Button",{attrs:{icon:"md-globe",size:"small"},on:{click:function(e){return t.changeLang("en-US")}}},[t._v(t._s(t.languages[1]))])],1),n("login-form",{on:{"on-success-valid":t.handleLogin}})],1)],1),n("div",{staticClass:"animated fadeIn login-footer text-smaller"},[n("div",{staticClass:"company"},[t._v(t._s(t.$t("system.company"))+"\n       "),n("copyright-notice")],1),n("div",{staticClass:"logo"}),n("div",{staticClass:"copyright"},[t._v("© "+t._s((new Date).getFullYear()))]),n("div",{staticClass:"appinfo"},[t._v(t._s(t.systemName)+" "+t._s(t.$version))])])])},s=[],o=(n("96cf"),n("1da1")),a=(n("ac6a"),n("5df3"),n("f400"),n("b627")),l=n("25af"),r=n("9225"),c=n("33e3"),u=n("b441"),d=n("4548"),g={name:"login",mixins:[a["a"],l["a"]],components:{LoginForm:c["a"],copyrightNotice:d["a"]},data:function(){return{languages:["中文","EN"],systemName:"",loginBgStyle:{backgroundImage:""},logoStyle:{backgroundImage:""},loginErrorMap:new Map([["USERPWD",function(t){this.$Message.error(this.$t("login.incorrectUsernameOrPassword",{times:t.retries}))}],["LOCK",function(t){this.$Message.error(this.$t("login.loginLocked",{minutes:t.minute}))}],["SYSLOCK",function(t){this.$Message.error(this.$t("login.userLocked",{uname:t.userName}))}],["USERINFO",function(){this.$Message.error(this.$t("login.loginFailure"))}],["REQLOGIN",function(){this.$Message.error(this.$t("login.reqlogin"))}],["USEREXPIRED",function(){this.$Message.error(this.$t("login.userexpired"))}],["OTHER",function(){this.$Message.error(this.$t("login.other"))}]])}},methods:{handleLogin:function(t){var e=this;this.$login(t).then((function(){e.$router.push({name:u["VUE_APP_DEFAULT_ROUTER_NAME"]}).catch((function(t){console.log(t)}))})).catch((function(n){var i=n.code,s=n.message,o=n.error,a=s&&s.minute||"",l=s&&s.retries||"";if(i=i.toUpperCase(),e.loginErrorMap.has(i)){var r={minute:a,userName:t.userName,retries:l};e.loginErrorMap.get(i).call(e,r)}else i&&o?e.$Message.error(o):e.$Message.error(e.$t("login.loginFailure"))}))},changeLang:function(t){Object(r["a"])(t),this.$setLanguage(t)}},beforeRouteEnter:function(t,e,n){var i=t.params.loginOver;n((function(t){!0===i&&t.$Message.warning(t.$t("login.overtime"))}))},beforeMount:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$appResourceSystemName;case 2:return this.systemName=t.sent,t.next=5,this.$appResourceLoginImage;case 5:e=t.sent,this.loginBgStyle.backgroundImage=e?"url('".concat(e,"')"):"";case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},h=g,m=(n("64dd"),n("2877")),f=Object(m["a"])(h,i,s,!1,null,"ac8f15ae",null);e["default"]=f.exports}}]);