(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39676330","chunk-4b7e9ca0"],{"1d64":function(t,e,i){"use strict";var n=i("46f9"),s=i.n(n);s.a},4548:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"link"},[i("span",{on:{click:function(e){return t.openBtn()}}},[t._v("["+t._s(t.$t("system.copyrightNotice"))+"]")]),i("edit-modal",t._b({ref:"editModal",on:{cancel:t.closeBtn}},"edit-modal",t.detailModal,!1),[i("iframe",{staticStyle:{height:"600px"},attrs:{src:t.link,border:"0",frameborder:"no",scrolling:"no",width:"100%"}})])],1)},s=[],a=i("8eac"),o=i("b441"),c={name:"copyright-notice",components:{editModal:a["a"]},data:function(){return{link:o["VUE_APP_MI_DESIGN_URL"]+"copyRight/",detailModal:{isOk:!1,subCanceltext:this.$t("common.actions.close"),subtitle:this.$t("system.copyrightNotice"),modalWidth:1e3}}},methods:{openBtn:function(){this.$refs.editModal.open()},closeBtn:function(){this.$refs.editModal.close()}}},l=c,r=(i("1d64"),i("2877")),u=Object(r["a"])(l,n,s,!1,null,"c1efcf9c",null);e["a"]=u.exports},"46f9":function(t,e,i){},"4e21":function(t,e,i){},"5c97":function(t,e,i){},"7d9e":function(t,e,i){"use strict";var n=i("5c97"),s=i.n(n);s.a},"8eac":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{ref:"modal",attrs:{closable:!1,"mask-closable":!1,width:t.modalWidth},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("p",{attrs:{slot:"header"},slot:"header"},[i("Icon",{attrs:{type:t.icon}}),i("span",[t._v(t._s(t.title))])],1),t._t("default"),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{disabled:t.loading},on:{click:t.cancelEvent}},[t._v("\n      "+t._s(t.canceltext)+"\n    ")]),t.isOk?i("Button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.okEvent}},[t._v(t._s(t.$t("common.buttons.ok")))]):t._e()],1)],2)},s=[],a=(i("c5f6"),{name:"edit-modal",props:{value:{type:Boolean,default:!1},isAdding:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},modalWidth:{type:Number,default:520},subtitle:{type:String,default:""},isOk:{type:Boolean,default:!0},subIcon:{type:String,default:""},subCanceltext:{type:String,default:""}},data:function(){return{icon:this.subIcon||"md-create",title:this.subtitle||this.$t("common.actions.edit"),visible:this.value,editing:!this.isAdding,canceltext:this.subCanceltext||this.$t("common.buttons.cancel")}},methods:{cancelEvent:function(){this.$emit("cancel")},okEvent:function(){this.$emit("ok")},open:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.editing=t,this.icon=!0===t?"md-create":"md-add",this.title=this.subtitle?this.subtitle:!0===t?this.$t("common.actions.edit")+this.subtitle:this.$t("common.actions.add")+this.subtitle,this.visible=!0},close:function(){this.visible=!1,this.icon="md-create",this.title=this.$t("common.actions.edit"),this.editing=!1},scrollTop:function(){var t=this.$refs.modal.$el,e=t.getElementsByClassName("ivu-modal-body");if(e&&e.length>0){var i=e[0];i&&i.scroll&&this.$nextTick((function(){return i.scroll(0,0)}))}}},watch:{value:function(t){this.visible=t,this.title=this.subtitle},visible:function(t){!0===t&&this.scrollTop()},subtitle:function(t){this.title=t}}}),o=a,c=(i("7d9e"),i("2877")),l=Object(c["a"])(o,n,s,!1,null,"0f32854a",null),r=l.exports;e["a"]=r},c796:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"welcome",style:t.welcomeStyle},[i("div",{staticClass:"animated fadeIn delay-3s welcome-footer text-smaller"},[i("div",{staticClass:"company"},[t._v(t._s(t.$t("system.company"))+"\n      "),i("copyright-notice")],1),i("div",{staticClass:"logo"}),i("div",{staticClass:"copyright"},[t._v("© "+t._s((new Date).getFullYear()))]),i("div",{staticClass:"appinfo"},[t._v(t._s(t.appName)+" "+t._s(t.$version))])])])},s=[],a=(i("96cf"),i("1da1")),o=i("25af"),c=i("4548"),l={name:"welcome",mixins:[o["a"]],components:{copyrightNotice:c["a"]},data:function(){return{appName:"",welcomeStyle:{backgroundImage:""}}},beforeMount:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$appResourceSystemName;case 2:return this.appName=t.sent,t.next=5,this.$appResourceWelcomeBackgroundImage;case 5:e=t.sent,this.welcomeStyle.backgroundImage=e?"url('".concat(e,"')"):"";case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){}},r=l,u=(i("d28a"),i("2877")),d=Object(u["a"])(r,n,s,!1,null,"130056ad",null);e["default"]=d.exports},cb51:function(t,e,i){"use strict";i.r(e);var n=i("c796");e["default"]=n["default"]},d28a:function(t,e,i){"use strict";var n=i("4e21"),s=i.n(n);s.a}}]);