(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9523f36","chunk-f406c6ce","chunk-5d44363e","chunk-2d0efcfd"],{"0463":function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));t("8e6e"),t("456d"),t("ac6a"),t("7514");var i=t("ade3"),o=t("2f62"),c=t("f121");function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){Object(i["a"])(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s=Object(o["a"])("user"),d=s.mapGetters,u={methods:{fireEvent:function(n,e){this.setActionIdToLocalStorage(e),this.$emit(n)},setActionIdToLocalStorage:function(n){window.sessionStorage.setItem(c["a"],n)}}},l={methods:{getProp:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{visible:n,disabled:!1,loading:!1}}},computed:a({permissionActions:function(){var n=this,e=this.$groupActions,t=[];if(!e.length)return{};if(this.groupCode){var i=e.find((function(e){return e.group.code===n.groupCode}));t=i&&i.actions}else t=e[0].actions;var o=this.defOptions,c={};return t&&t.forEach((function(e){var t=o[e.code];c[e.code]=t&&t.visible?Object.assign(t,e):n.mergeAction(e)})),c},actionsOptions:function(){var n=this.options,e=Object.assign({},this.defaultOptions);for(var t in n)e[t]=Object.assign({},e[t],n[t]);return e}},d({$groupActions:"groupActions"}))};e["b"]=l},"0ddd":function(n,e,t){"use strict";var i=t("983c"),o=t.n(i);o.a},"5c97":function(n,e,t){},6151:function(n,e,t){"use strict";t.r(e);var i=t("9a65");e["default"]=i["default"]},7665:function(n,e,t){"use strict";t.r(e);var i=t("f88e"),o=t("a250"),c=t("8eac"),r=t("6151");e["default"]={name:"permission",components:{actions:i["a"],editModal:c["a"],flexPanel:o["a"],menuTree:r["default"]},props:{groupId:{type:String,default:""}}}},"7d9e":function(n,e,t){"use strict";var i=t("5c97"),o=t.n(i);o.a},"8eac":function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Modal",{ref:"modal",attrs:{closable:!1,"mask-closable":!1,width:n.modalWidth},model:{value:n.visible,callback:function(e){n.visible=e},expression:"visible"}},[t("p",{attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:n.icon}}),t("span",[n._v(n._s(n.title))])],1),n._t("default"),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{disabled:n.loading},on:{click:n.cancelEvent}},[n._v("\n      "+n._s(n.canceltext)+"\n    ")]),n.isOk?t("Button",{attrs:{loading:n.loading,type:"primary"},on:{click:n.okEvent}},[n._v(n._s(n.$t("common.buttons.ok")))]):n._e()],1)],2)},o=[],c=(t("c5f6"),{name:"edit-modal",props:{value:{type:Boolean,default:!1},isAdding:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},modalWidth:{type:Number,default:520},subtitle:{type:String,default:""},isOk:{type:Boolean,default:!0},subIcon:{type:String,default:""},subCanceltext:{type:String,default:""}},data:function(){return{icon:this.subIcon||"md-create",title:this.subtitle||this.$t("common.actions.edit"),visible:this.value,editing:!this.isAdding,canceltext:this.subCanceltext||this.$t("common.buttons.cancel")}},methods:{cancelEvent:function(){this.$emit("cancel")},okEvent:function(){this.$emit("ok")},open:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.editing=n,this.icon=!0===n?"md-create":"md-add",this.title=this.subtitle?this.subtitle:!0===n?this.$t("common.actions.edit")+this.subtitle:this.$t("common.actions.add")+this.subtitle,this.visible=!0},close:function(){this.visible=!1,this.icon="md-create",this.title=this.$t("common.actions.edit"),this.editing=!1},scrollTop:function(){var n=this.$refs.modal.$el,e=n.getElementsByClassName("ivu-modal-body");if(e&&e.length>0){var t=e[0];t&&t.scroll&&this.$nextTick((function(){return t.scroll(0,0)}))}}},watch:{value:function(n){this.visible=n,this.title=this.subtitle},visible:function(n){!0===n&&this.scrollTop()},subtitle:function(n){this.title=n}}}),r=c,a=(t("7d9e"),t("2877")),s=Object(a["a"])(r,i,o,!1,null,"0f32854a",null),d=s.exports;e["a"]=d},"983c":function(n,e,t){},"9a65":function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("flex-panel",{attrs:{"hide-footer":!0,"hide-header":!0}},[t("menu-tree-item",{attrs:{groupId:n.groupId,model:n.nested},on:{actionsChanged:n.actionsChanged}}),t("Spin",{directives:[{name:"show",rawName:"v-show",value:n.isLoading,expression:"isLoading"}],attrs:{fix:""}})],1)},o=[],c=(t("8e6e"),t("456d"),t("ac6a"),t("ac4d"),t("8a81"),t("5df3"),t("1c4c"),t("7f7f"),t("6b54"),t("8785")),r=(t("20d6"),t("7514"),t("ade3")),a=t("c9e5"),s=t("1863"),d=t("4c31"),u=t("6689"),l=t("9530"),m=t.n(l),f=t("cb37"),h=t("a250"),p=t("b12b"),g=t("2f62"),v=t("f121");function b(){var n=Object(c["a"])(["\n      mutation {\n        deleteManyPermissions(where: {\n          menu: {\n            id_in: [",']\n          },\n          userGroup:{ id:"','"} }) {\n          count\n        }\n\n        ',"\n      }\n\n      ",""]);return b=function(){return n},n}function $(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?$(Object(t),!0).forEach((function(e){Object(r["a"])(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function w(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=k(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var i=0,o=function(){};return{s:o,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,r=!0,a=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return r=n.done,n},e:function(n){a=!0,c=n},f:function(){try{r||null==t.return||t.return()}finally{if(a)throw c}}}}function k(n,e){if(n){if("string"===typeof n)return N(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?N(n,e):void 0}}function N(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var O=Object(g["a"])("app"),A=O.mapGetters,j={name:"menu-tree",components:{menuTreeItem:p["default"],flexPanel:h["a"]},props:{groupId:{type:String,default:""}},apollo:{menus:{query:a["b"],client:u["client"],manual:!0,result:function(n){var e=n.data;this.generateMenus(e)}}},data:function(){return{permissionGroupCode:v["v"].system.signManage.signPermControl,menus:{},nested:{menus:[],$opened:[]},group:"base",mutateLoading:!1,loading:!1,rawFlatMenus:[],permissionList:[]}},beforeMount:function(){},mounted:function(){},methods:{getSignPermission:function(){var n=this,e=this;this.$apollo.query({client:u["client"],query:d["c"],variables:{where:{}}}).then((function(t){e.permissionList=t.data.list,n.checkMenus()})).catch((function(e){console.error(e),n.loading=!1}))},generateMenus:function(n){var e=this;n=JSON.parse(JSON.stringify(n));var t=n.menus;this.buildFlatData(t),t&&t.length>0&&this.$set(this.nested,"menus",t),this.$nextTick().then((function(){e.$set(e.nested,"$opened",t.map((function(n){return n.id})))}))},buildFlatData:function(n){var e,t=this,i=w(n);try{var o=function(){var n=e.value;n.$parentId=n.parent&&n.parent.id?n.parent.id:null,n.$checked=!1,n.$indeterminate=!1,n.$permission=null,n.menuType===f["a"].internal&&0===n.menus.length?n.actionGroups=n.actionGroups.map((function(e){var t=y(y({},e),{},{$checked:!1,$menu:n});return t})):n.actionGroups=[],n.$isChanged=function(){return t.isMenuChanged(n)},n.$opened=n.menus.map((function(n){return n.id})),t.menus[n.id]=n,n.menus&&n.menus.length>0&&t.buildFlatData(n.menus)};for(i.s();!(e=i.n()).done;)o()}catch(c){i.e(c)}finally{i.f()}},refresh:function(){},expandAll:function(){},collapsedAll:function(){},uncheckedAll:function(){for(var n in this.menus){this.$set(this.menus[n],"$checked",!1),this.$set(this.menus[n],"$indeterminate",!1),this.$set(this.menus[n],"$permission",null);for(var e=this.menus[n].actionGroups,t=e&&e.length,i=0;i<t;i++)for(var o=e[i].actions,c=o.length,r=0;r<c;r++)this.$set(o[r],"$checked",!1)}},checkIndeterminate:function(n){if(n=n||this.nested,n&&n.children&&n.children.length>0){var e=this.$_.filter(n.children,(function(n){return!0===n.$checked||!0===n.$indeterminate})),t=e.length>0&&e.length<n.children.length;n.$indeterminate=t;for(var i=0;i<n.children.length;i++)this.checkIndeterminate(n.children[i])}},actionsChangedMethod:function(n,e,t,i){var o=this;if(n&&n.id&&this.menus[n.id]&&e){var c,r;this.loading=!0,n.module&&n.module.id?(c=n.module.id,r={connect:{id:c}}):r=null;var a=!0===t?{id:e.id}:"",s={connect:a},u="";this.permissionList.length>0&&(u=this.permissionList.find((function(n){return n.action.id==e.id})));var l={connect:{id:this.groupId}},m={id:u?u.id:""},f={module:r,action:s,group:l};this.$apollo.mutate({mutation:d["b"],variables:{where:m,create:f,update:f},context:{headers:{"module-code":i,"action-id":this.addActionId}}}).then((function(n){n.data.node&&n.data.node.id&&o.getSignPermission()})).catch((function(n){o.getSignPermission(),console.error(n)}))}},actionsDeleteMethod:function(n,e){var t=this;if(n&&n.id){var i=this.$_.find(this.permissionList,(function(e){return e.action.id===n.id}));this.loading=!0;var o={id:i.id};this.$apollo.mutate({mutation:d["a"],variables:{where:o},context:{headers:{"module-code":e,"action-id":this.cancelActionId}},client:u["client"]}).then((function(){t.getSignPermission(),t.$Message.success(t.$t("common.messages.removeSuccess"))})).catch((function(){t.getSignPermission(),t.$Message.error(t.$t("common.messages.removeFailure"))}))}},actionsChanged:function(n,e,t){var i=window.sessionStorage.getItem(v["n"]);t?this.actionsChangedMethod(n,e,t,i):this.actionsDeleteMethod(e,i)},getCheckedMenus:function(){var n=[];for(var e in this.menus){var t=this.menus[e];if(!0===t.$checked||!0===t.$indeterminate){var i=[];if(t.children&&t.children.length>0);else{var o,c=w(t.actions);try{for(c.s();!(o=c.n()).done;){var r=o.value;!0===r.$checked&&i.push(r.id)}}catch(a){c.e(a)}finally{c.f()}}n.push({menu:{id:e},actions:i})}}return n},setCheckedMenus:function(n){var e=this;if(this.uncheckedAll(),n&&Array.isArray(n)&&!(n.length<1)){var t,i=w(n);try{var o=function(){var n=t.value;if(n.menu&&n.menu.id&&e.menus[n.menu.id]){var i,o=e.menus[n.menu.id];if(e.$set(o,"$permission",n),e.$set(o,"$checked",!0),n.permissionGroups&&(i=n.permissionGroups.length)&&i)for(var c=function(t){for(var i=n.permissionGroups[t].actions,c=e.$_.find(o.actionGroups,(function(e){return e.id===n.permissionGroups[t].actionGroup.id})),r=c&&c.actions.length||0,a=function(n){e.$set(c.actions[n],"$checked",-1!==e.$_.findIndex(e.permissionList,(function(e){return e.action.id===c.actions[n].id}))),e.$set(c.actions[n],"$group",e.$_.find(e.permissionList,(function(e){return e.action.id===c.actions[n].id})));var t=-1!==e.$_.findIndex(i,(function(e){return e.id===c.actions[n].id})),o=e.$_.find(i,(function(e){return e.id===c.actions[n].id})),r=!1,a=!!t&&o.signature;t?r=!(!a&&"undefined"!=typeof a&&0!=a)&&o.signature:a=!1,e.$set(c.actions[n],"$disabled",t&&r)},s=0;s<r;s++)a(s)},r=0;r<i;r++)c(r)}};for(i.s();!(t=i.n()).done;)o()}catch(c){i.e(c)}finally{i.f()}this.checkIndeterminate()}},getParents:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(n&&n.parent&&n.parent.id&&this.menus[n.parent.id]){var t=this.menus[n.parent.id];this.getParents(t,e),e.push(t)}return e},getChildren:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(n&&n.children&&n.children.length>0)for(var t=0;t<n.children.length;t++)e.push(n.children[t]),this.getChildren(n.children[t],e);return e},isMenuChanged:function(n){if(!n)return!1;var e=n.$permission;if((!0===n.$checked||!0===n.$indeterminate)&&!e)return!0;if(!0!==n.$checked&&!0!==n.$indeterminate&&e)return!0;if(!0!==n.$checked&&!0!==n.$indeterminate&&!e)return!1;var t=n.actions,i=e.actions;if(t&&t.length>0&&i){var o=this.$_.filter(t,(function(n){return!0===n.$checked}));if(o.length!==i.length)return!0;if(o.length>0){var c=o.map((function(n){return n.id})),r=i.map((function(n){return n.id})),a=this.$_.xor(c,r);if(a.length>0)return!0}}return!1},generateGraphqlVariables:function(n){var e={},t={group:this.group,userGroup:{connect:{id:this.userGroup.id,code:this.userGroup.code}}},i={};e.id=n.$permission&&n.$permission.id?n.$permission.id:"",t.menu={connect:{id:n.id}},t.actions={connect:this.$_.filter(n.actions,(function(n){return!0===n.$checked})).map((function(n){return{id:n.id}}))};var o=n.actions.map((function(n){return n.id})),c=n.$permission&&n.$permission.actions&&n.$permission.actions.length>0?n.$permission.actions.map((function(n){return n.id})):[],r=this.$_.difference(o,c).map((function(n){return{id:n}})),a=this.$_.difference(c,o).map((function(n){return{id:n}}));return i.actions={connect:r,disconnect:a},{where:e,create:t,update:i}},generateCreateGraphql:function(n){var e="[",t=n.actionGroups.length;if(n.actionGroups&&t)for(var i=0;i<t;i++){for(var o=n.actionGroups[i].actions,c=o.length,r="",a=0;a<c;a++)!0===o[a].$checked&&(r+='{id: "'.concat(o[a].id,'"}, '));e+='{\n            actionGroup: {\n              connect: {\n                id: "'.concat(n.actionGroups[i].id,'"\n              }\n            }\n            actions: {\n              connect: [').concat(r,"]\n            }\n          }, ")}e+="]";var s="\n      ".concat(n.id,': createPermission(\n        data: {\n          menu: { connect: { id: "').concat(n.id,'" } }\n          userGroup: {\n            connect: {\n              id: "').concat(this.groupId,'"\n            }\n          }\n          permissionGroups: {\n            create: ').concat(e,"\n          }\n        }\n      ) {\n        ...fields\n      }\n      ");return s},generateGraphql:function(){var n="",e="";for(var t in this.menus){var i=this.menus[t];e+=', "'.concat(i.id,'"'),!0!==i.$checked&&!0!==i.$indeterminate||(n+="\n          ".concat(this.generateCreateGraphql(i),"\n          "))}if(""===e)return"";e=this.$_.trim(e,",");var o=""===n?"":"\n      fragment fields on Permission {\n        id\n        userGroup {\n          id\n          code\n          name\n        }\n        menu {\n          id\n          name\n        }\n        permissionGroups {\n          id\n          actionGroup {\n            id\n            code\n            name\n            i18N\n          }\n          actions {\n            id\n            code\n            name\n            i18N\n          }\n        }\n      }",c=m()(b(),e,this.groupId,n,o);return c},checkMenus:function(){var n=this;this.$apollo.query({client:u["client"],query:s["c"],variables:{where:{}}}).then((function(e){var t=e.data.permissions||[];n.setCheckedMenus(t),n.loading=!1})).catch((function(e){console.error(e),n.loading=!1}))}},watch:{groupId:function(){this.loading=!0,this.getSignPermission()}},computed:y({isLoading:function(){return this.loading||this.$apollo.loading},groupActions:function(){var n=this,e=function n(e,t){for(var i=e.length,o=0;o<i;o++){var c=e[o];if(c.url===t)return c;if(c.menus.length){var r=n(c.menus,t);if(r)return r}}},t=e(this.$menus,v["t"]),i=t.actionGroups,o=i.find((function(e){return e.code===n.permissionGroupCode}));return o&&o.actions||[]},addActionId:function(){var n=this.groupActions.find((function(n){return n.code===v["b"]}));return n&&n.id||""},cancelActionId:function(){var n=this.groupActions.find((function(n){return n.code===v["f"]}));return n&&n.id||""}},A({$menus:"menus",$groupActions:"groupActions"}))},P=j,x=t("2877"),C=Object(x["a"])(P,i,o,!1,null,null,null);e["default"]=C.exports},b752:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return o}));var i={add:{icon:"md-add"},edit:{icon:"md-create"},copy:{},remove:{icon:"md-remove"},refresh:{icon:"md-refresh"},upCopy:{},export:{icon:"md-cloud-download"},print:{icon:"md-print"},upload:{icon:"ios-clund-upload-outline"},download:{icon:"ios-clund-download-outline"},expandAll:{icon:"ios-arrow-dropdown"},collapsedAll:{icon:"ios-arrow-dropup"},checkedAll:{icon:"ios-checkbox-outline"},uncheckedAll:{icon:"ios-square-outline"},start:{icon:"md-play"},stop:{icon:"md-square"},finish:{icon:"md-done-all"},pause:{icon:"md-pause"},goon:{icon:"md-play"},forward:{icon:"md-skip-forward"},backward:{icon:"md-skip-backward"},move:{icon:"md-move"},redo:{icon:"md-redo"},undo:{icon:"md-undo"},reset:{icon:"md-ionic"},import:{icon:"md-cloud-upload"},resetPassword:{},lock:{},upgrade:{icon:"md-arrow-back"},degrade:{icon:"md-arrow-forward"},downward:{icon:"md-arrow-down"},upward:{icon:"md-arrow-up"},design:{}},o=[{code:"add",i18N:"common.actions.add"},{code:"edit",i18N:"common.actions.edit"},{code:"associate",i18N:"common.actions.associate"},{code:"tag",i18N:"common.actions.tag"},{code:"copy",i18N:"common.actions.copy"},{code:"remove",i18N:"common.actions.remove"},{code:"refresh",i18N:"common.actions.refresh"},{code:"upCopy",i18N:"common.actions.upCopy"},{code:"export",i18N:"common.actions.export"},{code:"print",i18N:"common.actions.print"},{code:"upload",i18N:"common.actions.upload"},{code:"download",i18N:"common.actions.download"},{code:"expandAll",i18N:"common.actions.expandAll"},{code:"collapsedAll",i18N:"common.actions.collapsedAll"},{code:"checkedAll",i18N:"common.actions.checkedAll"},{code:"uncheckedAll",i18N:"common.actions.uncheckedAll"},{code:"start",i18N:"common.actions.start"},{code:"stop",i18N:"common.actions.stop"},{code:"finish",i18N:"common.actions.finish"},{code:"pause",i18N:"common.actions.pause"},{code:"forward",i18N:"common.actions.forward"},{code:"backward",i18N:"common.actions.backward"},{code:"move",i18N:"common.actions.move"},{code:"redo",i18N:"common.actions.redo"},{code:"undo",i18N:"common.actions.undo"},{code:"reset",i18N:"common.actions.reset"},{code:"commit",i18N:"common.actions.commit"},{code:"allow",i18N:"common.actions.allow"},{code:"withdraw",i18N:"common.actions.withdraw"},{code:"Verification",i18N:"common.actions.Verification"},{code:"cancelVerification",i18N:"common.actions.cancelVerification"},{code:"loseEfficacy",i18N:"common.actions.loseEfficacy"},{code:"takeEfficacy",i18N:"common.actions.takeEfficacy"},{code:"correct",i18N:"common.actions.correct"},{code:"release",i18N:"common.actions.release"},{code:"cancel",i18N:"common.actions.cancel"},{code:"termination",i18N:"common.actions.termination"},{code:"close",i18N:"common.actions.close"},{code:"Printing",i18N:"common.actions.Printing"},{code:"save",i18N:"common.actions.save"},{code:"import",i18N:"common.actions.import"},{code:"resetPassword",i18N:"common.actions.resetPassword"},{code:"lock",i18N:"common.actions.lock",confirm:!0,confrimTip:"common.messages.lockConfirm"},{code:"unLock",i18N:"common.actions.unlock",confirm:!0,confrimTip:"common.messages.unLockConfirm"},{code:"upgrade",i18N:"common.actions.upgrade"},{code:"degrade",i18N:"common.actions.degrade"},{code:"downward",i18N:"common.actions.downward"},{code:"upward",i18N:"common.actions.upward"},{code:"design",i18N:"common.actions.design"},{code:"invertSelection",i18N:"common.actions.invertSelection"},{code:"searchBtn",i18N:"common.actions.searchBtn"},{code:"execute",i18N:"common.actions.execute"},{code:"search",i18N:"common.actions.search"},{code:"loadMore",i18N:"common.actions.loadMore"},{code:"see",i18N:"common.actions.see"},{code:"equipment",i18N:"common.actions.equipment"},{code:"detail",i18N:"common.actions.detail"},{code:"signatureConfig",i18N:"common.actions.signatureConfig"}]},f88e:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"actions-mini"},[n._l(n.permissionActions,(function(e){return t("ActionButton",n._g({key:e.code,attrs:{action:e}},n.$listeners))})),n._t("default")],2)},o=[],c=(t("ac6a"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.action.confirm?t("Poptip",{attrs:{"cancel-text":n.$t("common.buttons.cancel"),"ok-text":n.$t("common.buttons.ok"),title:n.$t(n.action.confrimTip),confirm:""},on:{"on-ok":function(e){return n.fireEvent(n.action.code,n.action.id)}}},[t("Tooltip",{attrs:{content:n.$t(n.action.i18N)}},[t("Button",{attrs:{disabled:n.action.disabled,icon:n.action.icon,loading:n.action.loading,size:"small"}})],1)],1):t("Tooltip",{attrs:{content:n.$t(n.action.i18N)}},[t("Button",{attrs:{disabled:n.action.disabled,icon:n.action.icon,loading:n.action.loading,size:"small"},on:{click:function(e){return n.fireEvent(n.action.code,n.action.id)}}})],1)}),r=[],a=t("0463"),s={props:{action:{type:Object,required:!0}},mixins:[a["a"]]},d=s,u=t("2877"),l=Object(u["a"])(d,c,r,!1,null,null,null),m=l.exports,f=t("b752"),h=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{visible:n,disabled:!1,loading:!1}},p={add:{visible:!0},edit:{visible:!0},remove:{visible:!0,confirm:!0,confrimTip:"common.messages.deleteConfirm"},refresh:{visible:!0}},g={name:"actions-mini",mixins:[a["b"]],components:{ActionButton:m},props:{groupCode:{type:String},options:{type:Object,default:function(){return{}}}},data:function(){return{defaultOptions:this.getOptions()}},methods:{mergeAction:function(n){var e=n.code;return Object.assign({},this.getProp(),p[e],f["b"][e],n)},getOptions:function(){var n=f["a"].map((function(n){return Object.assign(h(),n)})),e={};return n.forEach((function(n){e[n.code]=Object.assign({},n,p[n.code],f["b"][n.code])})),e}},computed:{defOptions:function(){var n=this.options,e=Object.assign({},n);for(var t in e)e[t]=Object.assign({},this.getProp(),p[t],f["b"][t],e[t]);return e}}},v=g,b=(t("0ddd"),Object(u["a"])(v,i,o,!1,null,"7e1afda0",null)),$=b.exports;e["a"]=$}}]);