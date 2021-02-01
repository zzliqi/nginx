(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8745be8e"],{"41c8":function(e,t,a){"use strict";var n=a("cb33"),o=a.n(n);o.a},a905:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-body"},[a("Card",{staticClass:"app-body-left",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-list-box"}}),e._v("\n      "+e._s(e.getI18n("menuitems"))+"\n    ")],1),a("mini-actions",{staticClass:"actions",attrs:{slot:"extra",options:e.actionsOptions},on:{add:e.create,degrade:e.degrade,downward:e.downward,refresh:e.refreshTree,remove:e.remove,upgrade:e.upgrade,upward:e.upward},slot:"extra"}),a("sl-vue-tree",{ref:"slVueTree",attrs:{allowMultiselect:!1},on:{select:e.nodeSelected},scopedSlots:e._u([{key:"title",fn:function(t){var n=t.node;return[a("span",{staticClass:"item-icon"},[a("i",{class:["ivu-icon","ivu-icon-"+(n.data.icon||e.defaultIcon)]})]),e._v(" \n        "),a("span",[e._v(e._s(e.getNodeTitle(n.data)))]),e._v(" \n        "),a("span",{staticClass:"hy-font-color-assist"},[e._v("("+e._s(n.data.code)+")")])]}},{key:"toggle",fn:function(t){var n=t.node;return[!n.isLeaf&&n.children&&n.children.length>0?a("span",{staticClass:"hy-font-color-link"},[a("i",{class:["ivu-icon","ivu-icon-ios-arrow-drop"+(n.isExpanded?"up":"down")+"-circle"]})]):e._e()]}},{key:"sidebar",fn:function(t){var n=t.node;return[a("Tooltip",{attrs:{content:e.getI18n("plsSave")}},[n.data.$isNew?a("Icon",{staticStyle:{color:"#ff9900"},attrs:{type:"md-alert"}}):e._e()],1)]}}]),model:{value:e.nodes,callback:function(t){e.nodes=t},expression:"nodes"}}),e.$apolloData.queries.menus.loading?a("Spin",{attrs:{fix:"",size:"large"}}):e._e()],1),a("Card",{staticClass:"app-body-right",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-create"}}),e._v("\n      "+e._s(e.$t("common.edit"))+"\n    ")],1),a("Form",{ref:"frm",attrs:{"label-width":80,model:e.selectNode.data,rules:e.formRules}},[a("FormItem",{attrs:{label:e.getI18n("state")}},[a("i-switch",{attrs:{size:"large"},model:{value:e.selectNode.data.enable,callback:function(t){e.$set(e.selectNode.data,"enable",t)},expression:"selectNode.data.enable"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v(e._s(e.getI18n("enable")))]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v(e._s(e.getI18n("disable")))])])],1),a("FormItem",{attrs:{label:e.getI18n("type")}},[a("RadioGroup",{model:{value:e.selectNode.data.menuType,callback:function(t){e.$set(e.selectNode.data,"menuType",t)},expression:"selectNode.data.menuType"}},[a("Radio",{attrs:{label:"INTERNAL"}},[e._v(e._s(e.getI18n("internal")))]),a("Radio",{attrs:{label:"INTERNALLINK"}},[e._v("\n            "+e._s(e.getI18n("internalLink"))+"\n          ")]),a("Radio",{attrs:{label:"EXTERNAL"}},[e._v(e._s(e.getI18n("external")))]),a("Radio",{attrs:{label:"EXTERNALPOPUP"}},[e._v("\n            "+e._s(e.getI18n("externalPopup"))+"\n          ")])],1)],1),a("FormItem",{attrs:{label:e.getI18n("code"),prop:"code"}},[a("Input",{attrs:{maxlength:10,placeholder:e.getI18n("codePlaceholder"),disabled:""},model:{value:e.selectNode.data.code,callback:function(t){e.$set(e.selectNode.data,"code",t)},expression:"selectNode.data.code"}})],1),a("FormItem",{attrs:{label:e.getI18n("name"),prop:"name"}},[a("Input",{attrs:{maxlength:20,placeholder:e.getI18n("namePlaceholder")},model:{value:e.selectNode.data.name,callback:function(t){e.$set(e.selectNode.data,"name",t)},expression:"selectNode.data.name"}})],1),e.selectNode.isLeaf?a("FormItem",{attrs:{label:e.$t("system.menu.module")}},[a("Select",{attrs:{placeholder:e.$t("common.placeholders.plsSelect"),"filter-by-label":"",filterable:"","label-in-value":""},on:{"on-change":e.moduleChange},model:{value:e.selectNode.data.module.code,callback:function(t){e.$set(e.selectNode.data.module,"code",t)},expression:"selectNode.data.module.code"}},e._l(e.modules,(function(t){return a("Option",{key:t.code,attrs:{value:t.code}},[e._v(e._s(t.name))])})),1)],1):e._e(),a("FormItem",{attrs:{label:e.getI18n("i18N")}},[a("Input",{attrs:{placeholder:e.getI18n("i18NPlaceholder")},model:{value:e.selectNode.data.i18N,callback:function(t){e.$set(e.selectNode.data,"i18N",t)},expression:"selectNode.data.i18N"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("\n            "+e._s(e.existI18N(e.selectNode.data.i18N)?e.$t(e.selectNode.data.i18N):e.selectNode.data.name)+"\n          ")])])],1),a("FormItem",{attrs:{label:e.getI18n("icon")}},[a("Select",{attrs:{label:e.selectNode.data.icon,filterable:"",prefix:"ios-contact",transfer:""},model:{value:e.selectNode.data.icon,callback:function(t){e.$set(e.selectNode.data,"icon",t)},expression:"selectNode.data.icon"}},e._l(e.iconOptions,(function(t){return a("Option",{key:t,attrs:{label:t,value:t}},[a("i",{class:["ivu-icon","ivu-icon-"+t]}),a("span",{staticStyle:{float:"right"}},[e._v(e._s(t))])])})),1)],1),a("FormItem",{attrs:{label:"INTERNAL"==e.selectNode.data.menuType?e.getI18n("componentPath"):e.getI18n("url"),prop:"url"}},[a("Input",{attrs:{placeholder:"INTERNAL"==e.selectNode.data.menuType?e.getI18n("componentPathPlaceholder"):e.getI18n("urlPlaceholder")},model:{value:e.selectNode.data.url,callback:function(t){e.$set(e.selectNode.data,"url",t)},expression:"selectNode.data.url"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("\n            "+e._s(e.getUrlPrepend(e.selectNode.data.menuType))+"\n          ")])])],1),a("FormItem",{attrs:{label:e.getI18n("description")}},[a("Input",{attrs:{placeholder:e.getI18n("descriptionPlaceholder")},model:{value:e.selectNode.data.description,callback:function(t){e.$set(e.selectNode.data,"description",t)},expression:"selectNode.data.description"}})],1),e.selectNode.isLeaf?a("FormItem",{attrs:{label:e.$t("system.menu.groups")}},[a("Button",{on:{click:e.addMenuGroup}},[e._v(e._s(e.$t("common.add")))]),a("br"),e._l(e.selectNode.data.actionGroups,(function(t,n){return a("Collapse",{key:t.$id+"_"+n,attrs:{value:t.$id+"_"+n}},[a("Panel",{attrs:{"hide-arrow":!0,name:t.$id+"_"+n}},[a("p",{attrs:{slot:"content"},slot:"content"},[a("Row",[a("Col",{attrs:{span:"10"}},[e._v("\n                  "+e._s(e.$t("system.menu.groupName"))+"：\n                  "),a("Input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"group.name"}})],1),a("Col",{attrs:{span:"10"}},[e._v("\n                  "+e._s(e.$t("system.menu.groupCode"))+"：\n                  "),a("Input",{model:{value:t.code,callback:function(a){e.$set(t,"code",a)},expression:"group.code"}})],1),a("Col",{attrs:{span:"4"}},[a("mini-actions",{attrs:{groupCode:e.menuGroupCode,options:e.groupActionsOption},on:{add:function(t){return e.addGroupActions(n)},remove:function(a){return e.removeMenuGroup(n,t.id)}}})],1)],1),a("Row",[a("Col",{attrs:{span:"20"}},[e._v(e._s(e.getI18n("name")))]),a("Col",{attrs:{span:"4"}})],1),e._l(t.actions,(function(o,s){return a("Row",{key:"group"+n+"-"+o.code+"-"+s},[a("Col",{attrs:{span:"10"}},[a("Select",{attrs:{placeholder:e.$t("common.placeholders.plsSelect"),filterable:"","label-in-value":""},on:{"on-change":function(t){return e.changeOptionHandler(t,o)},"on-open-change":function(a){return e.openChangeBoxHandle(t.actions)}},model:{value:o.code,callback:function(t){e.$set(o,"code",t)},expression:"action.code"}},e._l(e.actionBases,(function(t,o){return a("Option",{key:n+"-"+s+"-"+o,attrs:{disabled:t.$disabled,value:t.code}},[e._v(e._s(e.$t(t.i18N)))])})),1)],1),a("Col",{attrs:{span:"10"}},[a("Checkbox",{model:{value:o.signature,callback:function(t){e.$set(o,"signature",t)},expression:"action.signature"}},[e._v(e._s(e.$t("system.signatureTitle")))])],1),a("Col",{attrs:{span:"4"}},[a("Poptip",{attrs:{"cancel-text":e.$t("common.buttons.cancel"),"ok-text":e.$t("common.buttons.ok"),title:e.$t("common.messages.deleteConfirm"),confirm:""},on:{"on-ok":function(a){return e.deleteGroupAction(n,s,t.id,o.id)}}},[a("Button",[e._v(e._s(e.$t("common.delete")))])],1)],1)],1)}))],2)])],1)})),a("br")],2):e._e(),a("FormItem",[a("common-actions",{staticClass:"actions",attrs:{groupCode:e.editGroupCode,options:e.editOptions},on:{reset:e.resetSelectNodeData,save:e.saveBefore}})],1)],1),e.$apolloData.queries.menus.loading||!0===e.selectNode.isLoading?a("Spin",{attrs:{fix:"",size:"large"}}):e._e()],1)],1)},o=[],s=(a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("6b54"),a("8e6e"),a("456d"),a("53ca")),i=a("ade3"),r=(a("ac6a"),a("2909")),c=(a("7514"),a("20d6"),a("7f7f"),a("6689")),l=a("cb37"),d=a("1884"),u=a("2448"),p=a("c536"),h=a.n(p),m=a("b354"),f=a.n(m),g=a("2e4b"),v=a.n(g),N=a("723c"),b=a.n(N),$=a("1491"),y=a.n($),I=a("9495"),_=a.n(I),w=a("88ee"),x=a.n(w),C=a("202d"),O=a.n(C),k=a("f121"),T=a("8dee"),S=a.n(T),D=a("f88e"),L=a("9b95");function P(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=M(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,r=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){r=!0,s=e},f:function(){try{i||null==a.return||a.return()}finally{if(r)throw s}}}}function M(e,t){if(e){if("string"===typeof e)return A(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=4,B="system.menu.",R=100,E={add:"add",edit:"edit",none:"none"},V=!1,q={code:S.a.generate(),name:"",menuType:"INTERNAL",url:"welcome",i18N:"",icon:d["DefaultIcon"],orderNo:R,description:"",actionGroups:[],enable:!0,$isNew:!0},U={name:"system-menu",components:{SlVueTree:h.a,MiniActions:D["a"],CommonActions:L["a"]},apollo:{modules:{query:O.a,client:c["client"]},actionBases:{query:v.a,client:c["client"]},menus:{query:f.a,client:c["client"],manual:!0,result:function(e){var t=this,a=e.data,n=e.loading,o=e.networkStatus;if(!n&&7===o&&a&&a.menus&&a.menus.length>0){this.menus=JSON.parse(JSON.stringify(a.menus));var s=this.buildNestNodes(this.menus);s[0].isSelected=!0,this.nodes=s,this.$nextTick((function(){t.$refs.slVueTree.select(t.selectNodePath,!0)}))}}}},data:function(){var e=this,t=this;return{menuGroupCode:k["v"].system.menu.groupOperate,editGroupCode:k["v"].system.menu.edit,editOptions:{save:{visible:!0,disabled:!1,type:"primary"},reset:{visible:!0,disabled:!1}},groupActionsOption:{add:{visible:!0,disabled:!1},remove:{visible:!0,disabled:!1},refresh:{visible:!1}},actionsOptions:{add:{visible:!0,disabled:!1},remove:{visible:!0,disabled:!1},upgrade:{visible:!0,disabled:!1},degrade:{visible:!0,disabled:!1},downward:{visible:!0,disabled:!1},upward:{visible:!0,disabled:!1}},i18nStart:B,maxLevel:j,defaultIcon:d["DefaultIcon"],state:E.none,selectNode:{data:{},isLoding:!0},selectNodeDataBackup:null,menus:[],nodes:[],groupIdDeletes:[],actionIdDeletes:{},selectNodePath:[0],formRules:{code:[{required:!0,pattern:/^[a-zA-Z0-9\-_]{1,20}$/,message:this.$t("".concat(B,"rules.code")),trigger:"change"}],name:[{required:!0,pattern:/^[a-zA-Z0-9\u4e00-\u9fa5\-_]{1,20}$/,message:this.$t("".concat(B,"rules.name")),trigger:"change"}],url:[{validator:function(a,n,o){if(t.selectNode){if(t.selectNode.children&&t.selectNode.children.length>0)return void o();""===n&&o(new Error(e.$t("".concat(B,"rules.url"))))}o()},trigger:"blur"}]},iconOptions:u["a"]}},methods:{moduleChange:function(e){!this.selectNode.data.name&&(this.selectNode.data.name=e.label)},openChangeBoxHandle:function(e){var t=this;this.actionBases=this.actionBases.map((function(a){return a.$disabled=t.$_.findIndex(e,(function(e){return e.code===a.code}))>-1,a.signature=!!a.signature,a}))},getActionByCode:function(e){return e&&this.actionBases.find((function(t){return t.code===e}))},changeOptionHandler:function(e,t){t.name=e&&e.label||"";var a=this.getActionByCode(e&&e.value);a&&(t.i18N=a.i18N)},addMenuGroup:function(){var e=this.$_.cloneDeep(this.actionBases[0]),t={name:this.selectNode.data.name,code:this.selectNode.data.code,actions:[Object.assign(e,{name:this.$t(e.i18N),signature:!1})]};this.selectNode.data.actionGroups.push(t)},removeMenuGroup:function(e,t){this.selectNode.data.actionGroups.splice(e,1),t&&this.groupIdDeletes.push({id:t})},addGroupActions:function(e){this.selectNode.data.actionGroups[e].actions.push({$id:this.$shortid(),code:"",name:""})},deleteGroupAction:function(e,t,a,n){this.selectNode.data.actionGroups[e].actions.splice(t,1),n&&a&&(this.actionIdDeletes[a]?this.actionIdDeletes[a].push(n):this.actionIdDeletes[a]=[n])},isUrlRequired:function(e){return!(e&&e.children&&e.children.length>0)},nodeSelected:function(e){this.selectNode=e[0],this.selectNodePath=this.selectNode.path,this.selectNodeDataBackup=this.$_.cloneDeep(e[0].data),this.updateActionStatus(this.selectNode)},resetSelectNodeData:function(){this.selectNode.data=this.$_.cloneDeep(this.selectNodeDataBackup)},getParentNode:function(e){var t=Object(r["a"])(e.path),a=this.$refs.slVueTree;return t.pop(),0===t.length?(this.$Notice.warning({name:this._noticeName,title:this.$t("common.tips"),duration:5,desc:this.$t(this.i18nStart+"tips",{maxLevel:this.maxLevel})}),null):a.getNode(t)},downward:function(){var e=this,t=this.selectNode;if(t.isLastChild)this.$Message.warning(this.getI18n("isLastChild"));else{var a=this.getParentNode(t),n=a.children[t.ind+1],o=n.data.orderNo,s=t.data.orderNo;this.$apollo.mutate({mutation:y.a,variables:{orgCode:t.data.code,orgOrderNo:o,targetCode:n.data.code,targetOrderNo:s},client:c["client"]}).then((function(){var a,n=e.$refs.slVueTree;n.traverse((function(e,n,i){if(n.data.code===t.data.code){var c=i[e.ind+1];a=Object(r["a"])(e.path);var l=i[e.ind];return l.data.orderNo=o,c.data.orderNo=s,i.splice(e.ind,1),i.splice(e.ind+1,0,l),!1}})),a[a.length-1]+=1,e.$nextTick((function(){n.select(a,!0)}))})).catch((function(){e.$Message.error(e.getI18n("downwardFailure"))}))}},upward:function(){var e=this,t=this.selectNode;if(t.isFirstChild||0===t.ind)this.$Message.warning(this.getI18n("isFirstChild"));else{var a=this.getParentNode(t),n=a.children[t.ind-1],o=n.data.orderNo,s=t.data.orderNo;this.$apollo.mutate({mutation:y.a,variables:{orgCode:t.data.code,orgOrderNo:o,targetCode:n.data.code,targetOrderNo:s},client:c["client"]}).then((function(){var a,n=e.$refs.slVueTree;n.traverse((function(e,n,i){if(n.data.code===t.data.code){var c=i[e.ind-1];a=Object(r["a"])(e.path);var l=i[e.ind];return l.data.orderNo=o,c.data.orderNo=s,i.splice(e.ind,1),i.splice(e.ind-1,0,l),!1}})),a[a.length-1]-=1,e.$nextTick((function(){n.select(a,!0)}))})).catch((function(){e.$Message.error(e.getI18n("upwardFailure"))}))}},degrade:function(){var e=this,t=this.selectNode,a=this.getMaxLevel(t);if(t.level===this.maxLevel||t.isFirstChild)this.$Message.warning(this.getI18n("notAllowDegrade"));else if(a>=this.maxLevel)this.$Message.warning(this.$t(this.i18nStart+"levelRule",{maxLevel:this.maxLevel}));else{var n=this.getParentNode(t),o=n.children[t.ind-1],s=R;o.children&&o.children.length>0&&(s=this.$_.maxBy(o.children,(function(e){return e.data.orderNo})).data.orderNo+1),this.$apollo.mutate({mutation:b.a,variables:{orgCode:n.data.code,code:t.data.code,targetCode:o.data.code,orderNo:s},client:c["client"]}).then((function(){var a,n,o,i=e.$refs.slVueTree;i.traverse((function(e,a,s){if(a.data.code===t.data.code)return 0!==e.ind&&(n=a,o=s[e.ind-1],s.splice(e.ind,1)),!1})),i.traverse((function(t,i){if(i.data.code===o.data.code)return i.children||(e.$set(i,"children",[]),e.$set(i,"isLeaf",!1)),a=t.path,n.data.orderNo=s,i.children.push(n),a.push(i.children.length-1),!1})),e.$nextTick((function(){e.$refs.slVueTree.select(a,!0)}))})).catch((function(){e.$Message.error(e.getI18n("degradeFailure"))}))}},upgrade:function(){var e=this,t=this.selectNode;if(t.level<=2)this.$Message.warning(this.getI18n("notAllowUpgrade"));else{var a=this.$refs.slVueTree,n=this.getParentNode(t),o=n.data,s=this.getParentNode(n),i=s.data;this.$apollo.mutate({mutation:b.a,variables:{orgCode:o.code,code:t.data.code,targetCode:i.code,orderNo:o.orderNo+1},client:c["client"]}).then((function(){var s;a.traverse((function(e,a,n){if(a.data.code===t.data.code)return s=a,n.splice(e.ind,1),!1}));var i=n.path;a.traverse((function(e,t,a){if(t.data.code===n.data.code)return s.data.orderNo=o.orderNo+1,a.splice(e.ind+1,0,s),!1})),e.$nextTick((function(){i[i.length-1]=i[i.length-1]+1,e.$refs.slVueTree.select(i,!0)}))})).catch((function(){e.$Message.error(e.getI18n("upgradeFailure"))}))}},remove:function(){var e=this,t=this.selectNode;if(1===t.level||t.children&&t.children.length)this.$Message.warning(this.getI18n("removeDisable"));else{var a=function(){var a=t.path,n=e.$refs.slVueTree;n.remove([a]),a.pop(),n.select(a,!0),t=e.selectNode,e.$set(t,"isLeaf",0===t.children.length),e.$Message.success(e.$t("common.removeSuccess"))};if(!0!==t.data.$isNew)this.$apollo.mutate({mutation:_.a,variables:{code:t.data.code},client:c["client"]}).then((function(){a()})).catch((function(){e.$Message.error(e.getI18n("removeFail"))}));else try{a()}catch(n){this.$Message.error(this.getI18n("removeFailure"))}}},create:function(){var e=this,t=this.selectNode;if(t.data.$isNew)this.$Message.warning(this.getI18n(NaN));else if(t.level!==this.maxLevel){var a=this.$refs.slVueTree,n=this.convertMenuToNode(Object.assign({},q));n.data.code=S.a.generate(),a.traverse((function(a,o){if(o.data.code!==t.data.code)return!0;if(o.children){var s=0;s=e.$_.minBy(o.children,(function(e){return e.data.orderNo})).data.orderNo,n.data.orderNo=s-1}else e.$set(o,"children",[]);o.children.splice(0,0,n);var i=e.selectNodePath;return e.$nextTick((function(){i.push(0),e.$refs.slVueTree.select(i,!0)})),!1}))}else this.$Message.warning(this.$t(this.i18nStart+"levelRule",{maxLevel:this.maxLevel}))},saveBefore:function(){var e=this;this.$refs.frm.validate((function(t){t?e.save():e.$Message.error(e.$t("common.rules.validateFailure"))}))},actionDataProcess:function(e){var t=this,a=[],n=[];return e.forEach((function(e){var o=e.code,s=e.name,i=e.i18N,r=e.description,c=e.signature;if(c=!!c,!i){var l=t.getActionByCode(o);i=l.i18N}e.id?n.push({where:{id:e.id},data:{code:o,name:s,i18N:i,description:r,signature:c}}):e.code&&a.push({code:o,name:s,i18N:i,description:r,signature:c})})),{createActions:a,updateActions:n}},groupDataProcess:function(e){var t=this,a=[],n=[];return e.forEach((function(e){e.__typename&&delete e.__typename,e.$id&&delete e.$id;var o=e.id;if(o){var s=t.actionDataProcess(e.actions),i=s.createActions,r=s.updateActions,c=t.actionIdDeletes[o]?t.actionIdDeletes[o].map((function(e){return{id:e}})):[],l=e.code,d=e.name,u=e.i18N,p=e.description;n.push({where:{id:e.id},data:{code:l,name:d,i18N:u,description:p,actions:{delete:c,create:i,update:r}}})}else e.actions={create:e.actions.map((function(e){return{code:e.code,name:e.name,i18N:e.i18N,description:e.i18N}}))},a.push(e)})),{groupCreate:a,groupUpdate:n}},getVariablesData:function(){var e=this.selectNode,t=this.$_.cloneDeep(e),a=this.getParentNode(t),n=a.data.code,o=F({},t.data),s=o.actionGroups.concat([]),i=this.groupDataProcess(s),r=i.groupCreate,c=i.groupUpdate;e.data.module.code&&(o.module={connect:{code:e.data.module.code}});var l=this.selectNodeDataBackup.code,d={connect:{code:n}};delete o.actionGroups,delete o.$isNew;var u={where:{code:l}};return e.data.$isNew?(u.update={},u.create=F(F({},o),{},{parent:d,actionGroups:{create:r}})):(u.create=F(F({},o),{},{parent:d}),u.update=F(F({},o),{},{parent:d,actionGroups:{disconnect:this.groupIdDeletes,update:c,create:r}})),u},save:function(){var e=this;this.$apollo.mutate({mutation:x.a,variables:this.getVariablesData(),client:c["client"]}).then((function(t){e.afterSaveSuccess(e.selectNode.data,t)})).catch((function(){e.$Message.error(e.$t("common.saveFailure"))}))},afterSaveSuccess:function(e,t){this.$set(e,"$isNew",!1),delete e.$isNew;var a=t.data.upsertMenu.actionGroups;e.actionGroups=a,this.$set(e,"actionGroups",a),this.groupIdDeletes=[],this.actionIdDeletes={},this.$Message.success(this.$t("common.saveSuccess"))},refreshTree:function(){this.$apollo.queries.menus.refresh()},getNodeTitle:function(e){return this.existI18N(e.i18N)?this.$t(e.i18N):e.name},existI18N:function(e){var t=this.$t(e);return!0===this.$te(e)&&"object"!==Object(s["a"])(t)},convertMenuToNode:function(e){return{title:e.name,isLeaf:!e.menus||0===e.menus.length,isExpanded:!0,isSelected:!1,isDraggable:V,isSelectable:!0,data:{code:e.code,name:e.name,actionGroups:e.actionGroups.map((function(e){return e.$id=e.id,e})),menuType:e.menuType,url:e.url,i18N:e.i18N,icon:e.icon,module:e.module||{},orderNo:e.orderNo,description:e.description,enable:e.enable,$isNew:!0===e.$isNew}}},buildNestNodes:function(e){var t,a=[],n=P(e);try{for(n.s();!(t=n.n()).done;){var o=t.value,s=this.convertMenuToNode(o);s.data.$isNew=!1,a.push(s),o.menus&&o.menus.length>0&&(s.children=this.buildNestNodes(o.menus))}}catch(i){n.e(i)}finally{n.f()}return this.$_.sortBy(a,[function(e){return e.data.orderNo}])},getMaxLevel:function(e){if(!e)return 0;var t=e.level;if(e.children&&e.children.length>0){var a,n=P(e.children);try{for(n.s();!(a=n.n()).done;){var o=a.value;t=o.children&&o.children.length>0?Math.max(this.getMaxLevel(o),t):Math.max(o.level,t)}}catch(s){n.e(s)}finally{n.f()}}return t},getI18n:function(e){return this.$t(this.i18nStart+e)},getUrlPrepend:function(e){return e==l["a"].internal?"/src/views/":e===l["a"].internalLink?"/":"http(s)://"},updateActionStatus:function(e){var t=e.level<this.maxLevel&&!0!==e.data.$isNew,a=e.level>1&&(!e.children||e.children.length<1),n=e.level>1&&!e.isLastChild,o=e.level>1&&!e.isFirstChild,s=e.level>1&&e.ind>0&&this.getMaxLevel(e)<this.maxLevel,i=e.level>2&&(!e.children||0===e.children.length);this.actionsOptions.add.disabled=!t,this.actionsOptions.remove.disabled=!a,this.actionsOptions.upgrade.disabled=!i,this.actionsOptions.degrade.disabled=!s,this.actionsOptions.downward.disabled=!n,this.actionsOptions.upward.disabled=!o}},watch:{},mounted:function(){this._noticeName=S.a.generate(),this.$Notice.warning({name:this._noticeName,title:this.$t("common.tips"),duration:5,desc:this.$t(this.i18nStart+"tips",{maxLevel:this.maxLevel})})},beforeDestroy:function(){this.$Notice.close(this._noticeName)}},z=U,H=(a("41c8"),a("2877")),J=Object(H["a"])(z,n,o,!1,null,"23d0cd58",null);t["default"]=J.exports},cb33:function(e,t,a){}}]);