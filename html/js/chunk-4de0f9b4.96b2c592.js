(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4de0f9b4","chunk-d4e93438","chunk-71fb1f0e","chunk-f2e95c8a"],{"0ca1":function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"actions-checkboxs"},[n.value&&n.value.length>0?t("div",{staticClass:"actions-checkboxs-items"},n._l(n.value,(function(e){return t("Checkbox",{key:e.id,attrs:{disabled:n.disabled},on:{"on-change":function(t){return n.actionChange(e,t)}},model:{value:e.$checked,callback:function(t){n.$set(e,"$checked",t)},expression:"v.$checked"}},[n._v("\n      "+n._s(n.existI18N(""+e.i18N)?n.$t(""+e.i18N):e.name)+"\n    ")])})),1):n._e()])},i=[],o=(t("ac6a"),t("ac4d"),t("8a81"),t("5df3"),t("1c4c"),t("6b54"),t("53ca"));t("7f7f");function c(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=a(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return c=n.done,n},e:function(n){s=!0,o=n},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw o}}}}function a(n,e){if(n){if("string"===typeof n)return s(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(n,e):void 0}}function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var u={name:"actions-checkboxs",props:{value:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1}},data:function(){return{checkedAll:!1,indeterminate:!1}},methods:{actionChange:function(n,e){this.$emit("changed",n,e)},checkAll:function(n){this.indeterminate=!1;var e,t=c(this.value);try{for(t.s();!(e=t.n()).done;){var r=e.value;this.$set(r,"$checked",n)}}catch(o){t.e(o)}finally{t.f()}var i=this.getCheckedItems();this.$emit("changed",i)},getCheckedItems:function(){var n=this.$_.filter(this.value,"$checked",!0);return n&&n.length>0?this.$_.map(n,(function(n){return{id:n.id,code:n.code,name:n.name}})):[]},existI18N:function(n){var e=this.$t(n);return!0===this.$te(n)&&"object"!==Object(o["a"])(e)}}},d=u,l=(t("7280"),t("2877")),h=Object(l["a"])(d,r,i,!1,null,"20643fc3",null);e["default"]=h.exports},2518:function(n,e,t){"use strict";t.r(e);var r=t("0ca1");e["default"]=r["default"]},"32df":function(n,e,t){"use strict";var r=t("37b7"),i=t.n(r);i.a},"37b7":function(n,e,t){},7280:function(n,e,t){"use strict";var r=t("c7c7"),i=t.n(r);i.a},"7ca3":function(n,e,t){"use strict";t.r(e);t("8e6e"),t("456d"),t("ac6a"),t("ac4d"),t("8a81"),t("5df3"),t("1c4c"),t("7f7f"),t("6b54"),t("20d6"),t("7514"),t("96cf");var r=t("1da1"),i=t("8785"),o=t("ade3"),c=t("c9e5"),a=t("1863"),s=t("6689"),u=t("9530"),d=t.n(u),l=t("cb37"),h=t("a250"),f=t("95c2"),m=t("2f62"),p=t("f121");function g(){var n=Object(i["a"])(["\n        ","\n      "]);return g=function(){return n},n}function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function $(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){Object(o["a"])(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function b(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=y(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return c=n.done,n},e:function(n){a=!0,o=n},f:function(){try{c||null==t.return||t.return()}finally{if(a)throw o}}}}function y(n,e){if(n){if("string"===typeof n)return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(n,e):void 0}}function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var C=Object(m["a"])("app"),G=C.mapGetters;e["default"]={name:"menu-tree",components:{menuTreeItem:f["default"],flexPanel:h["a"]},props:{userGroupId:{type:String,default:""}},apollo:{menus:{query:c["b"],client:s["client"],manual:!0,result:function(n){var e=n.data;this.generateMenus(e)}}},data:function(){return{permissionGroupCode:p["v"].system.roleManager.permControl,menuLoaded:!1,menus:{},nested:{menus:[],$opened:[]},group:"base",mutateLoading:!1,loading:!1,rawFlatMenus:[]}},beforeMount:function(){},methods:{generateMenus:function(n){var e=this;n=JSON.parse(JSON.stringify(n));var t=n.menus;this.buildFlatData(t),t&&t.length>0&&this.$set(this.nested,"menus",t),this.$nextTick().then((function(){e.$set(e.nested,"$opened",t.map((function(n){return n.id})))})),this.menuLoaded=!0,this.setMenuCheck()},buildFlatData:function(n){var e,t=this,r=b(n);try{var i=function(){var n=e.value;n.$parentId=n.parent&&n.parent.id?n.parent.id:null,n.$checked=!1,n.$indeterminate=!1,n.$permission=null,n.menuType===l["a"].internal&&0===n.menus.length?n.actionGroups=n.actionGroups.map((function(e){var t=$($({},e),{},{$checked:!1,$menu:n});return t})):n.actionGroups=[],n.$isChanged=function(){return t.isMenuChanged(n)},n.$opened=n.menus.map((function(n){return n.id})),t.menus[n.id]=n,n.menus&&n.menus.length>0&&t.buildFlatData(n.menus)};for(r.s();!(e=r.n()).done;)i()}catch(o){r.e(o)}finally{r.f()}},refresh:function(){},expandAll:function(){},collapsedAll:function(){},uncheckedAll:function(){for(var n in this.menus){this.$set(this.menus[n],"$checked",!1),this.$set(this.menus[n],"$indeterminate",!1),this.$set(this.menus[n],"$permission",null);for(var e=this.menus[n].actionGroups,t=e&&e.length,r=0;r<t;r++)for(var i=e[r].actions,o=i.length,c=0;c<o;c++)this.$set(i[c],"$checked",!1)}},checkIndeterminate:function(n){if(n=n||this.nested,n&&n.children&&n.children.length>0){var e=this.$_.filter(n.children,(function(n){return!0===n.$checked||!0===n.$indeterminate})),t=e.length>0&&e.length<n.children.length;n.$indeterminate=t;for(var r=0;r<n.children.length;r++)this.checkIndeterminate(n.children[r])}},getAperm:function(n){var e=n.actionGroups,t="[",r=e.length;if(e&&r)for(var i=0;i<r;i++){for(var o=e[i].actions,c=o.length,a="",s=0;s<c;s++)!0===o[s].$checked&&(a+='{id: "'.concat(o[s].id,'"}, '));t+='{\n            actionGroup: {\n              connect: {\n                id: "'.concat(e[i].id,'"\n              }\n            }\n            actions: {\n              connect: [').concat(a,"]\n            }\n          }, ")}return t+="]","".concat(n.id,': createPermission(\n        data: {\n          menu: { connect: { id: "').concat(n.id,'" } }\n          userGroup: {\n            connect: {\n              id: "').concat(this.userGroupId,'"\n            }\n          }\n          permissionGroups: {\n            create: ').concat(t,"\n          }\n        }\n      ) {\n        id\n        userGroup {\n          id\n          code\n          name\n        }\n        menu {\n          id\n          name\n          menus{\n            code\n            name\n          }\n        }\n        permissionGroups {\n          id\n          description\n          actionGroup {\n            id\n            code\n            name\n          }\n          actions {\n            id\n            code\n            name\n          }\n        }\n      }\n\n      ")},getSubIds:function(n){var e=[],t=function n(t){if(t.menus&&t.menus.length)for(var r=t.menus.length,i=0;i<r;i++)n(t.menus[i]);e.push(t.id)};return t(n),e},getMutations:function(n){for(var e=this.getSubIds(n),t=e.length,r="",i=0;i<t;i++){var o=this.menus[e[i]];r+=this.getAperm(o)}return r},genCeatePermission:function(n){var e=this.getMutations(n),t="\n        mutation {\n          ".concat(e,"\n        }\n        ");return t},getPermSubIds:function(n){var e=[],t=function n(t){if(t.menus&&t.menus.length)for(var r=t.menus.length,i=0;i<r;i++)n(t.menus[i]);t.$permission&&e.push(t.$permission.id)};return t(n),e},getDeleteAperm:function(n){return"".concat(n,': deletePermission(where: {id: "').concat(n,'"}) {\n        id\n\n      }\n\n      ')},getDeleteMutations:function(n){for(var e=this.getPermSubIds(n),t=e.length,r="",i=0;i<t;i++)r+=this.getDeleteAperm(e[i]);return r},gendeletePermission:function(n){var e=this.getDeleteMutations(n),t="\n        mutation {\n          ".concat(e,"\n        }\n        ");return t},generateMenuUpdateGql:function(n,e){var t;return t=!n.$permission&&e?this.genCeatePermission(n):this.gendeletePermission(this.$_.cloneDeep(n)),d()(g(),t)},checkCurrentMenu:function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(e){var t,r,i,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=this.getSubIds(e),n.next=3,Object(a["e"])({menu:{id_in:t},userGroup:{id:this.userGroupId}});case 3:if(r=n.sent,i=r.list,o=i.length,!o){n.next=10;break}return c=i.map((function(n){return n.id})),n.next=10,Object(a["a"])({id_in:c});case 10:case"end":return n.stop()}}),n,this)})));function e(e){return n.apply(this,arguments)}return e}(),changed:function(n,e){var t=this;this.loading=!0,!n.$permission&&e&&this.checkCurrentMenu(n);var r=this.generateMenuUpdateGql(n,e),i=window.sessionStorage.getItem(p["n"]);this.$apollo.mutate({mutation:r,client:s["client"],context:{headers:{"module-code":i,"action-id":e?this.addActionId:this.cancelActionId}}}).then((function(){t.setMenuCheck()})).catch((function(n){t.setMenuCheck(),console.error(n)}))},actionsChanged:function(n,e,t,r){var i=this;if(n&&n.id&&this.menus[n.id]&&n.$permission&&e){this.loading=!0;var o=this.menus[n.id],c=n.$permission,s=c.id,u=this.$_.find(c.permissionGroups,(function(n){return n.actionGroup.id===r.id})),d=u?a["d"]:a["b"],l=!0===t?[{id:e.id}]:[],h=!0!==t?[{id:e.id}]:[],f={id:s,connect:l};if(u){var m=u.id;f.disconnect=h,f.permissionGroupId=m}else f.actionGroupId=r.id;var g=window.sessionStorage.getItem(p["n"]);this.$apollo.mutate({mutation:d,variables:f,context:{headers:{"module-code":g,"action-id":t?this.addActionId:this.cancelActionId}}}).then((function(n){o.$permission=n.data.node,i.loading=!1})).catch((function(n){i.setMenuCheck(),console.error(n)}))}},getCheckedMenus:function(){var n=[];for(var e in this.menus){var t=this.menus[e];if(!0===t.$checked||!0===t.$indeterminate){var r=[];if(t.children&&t.children.length>0);else{var i,o=b(t.actions);try{for(o.s();!(i=o.n()).done;){var c=i.value;!0===c.$checked&&r.push(c.id)}}catch(a){o.e(a)}finally{o.f()}}n.push({menu:{id:e},actions:r})}}return n},setCheckedMenus:function(n){var e=this;if(this.uncheckedAll(),n&&Array.isArray(n)&&!(n.length<1)){var t,r=b(n);try{var i=function(){var n=t.value;if(n.menu&&n.menu.id&&e.menus[n.menu.id]){var r,i=e.menus[n.menu.id];if(e.$set(i,"$permission",n),e.$set(i,"$checked",!0),n.permissionGroups&&(r=n.permissionGroups.length)&&r)for(var o=function(t){for(var r=n.permissionGroups[t].actions,o=e.$_.find(i.actionGroups,(function(e){return e.id===n.permissionGroups[t].actionGroup.id})),c=o&&o.actions.length||0,a=function(n){e.$set(o.actions[n],"$checked",-1!==e.$_.findIndex(r,(function(e){return e.id===o.actions[n].id})))},s=0;s<c;s++)a(s)},c=0;c<r;c++)o(c)}};for(r.s();!(t=r.n()).done;)i()}catch(o){r.e(o)}finally{r.f()}this.checkIndeterminate()}},getParents:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(n&&n.parent&&n.parent.id&&this.menus[n.parent.id]){var t=this.menus[n.parent.id];this.getParents(t,e),e.push(t)}return e},getChildren:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(n&&n.children&&n.children.length>0)for(var t=0;t<n.children.length;t++)e.push(n.children[t]),this.getChildren(n.children[t],e);return e},isMenuChanged:function(n){if(!n)return!1;var e=n.$permission;if((!0===n.$checked||!0===n.$indeterminate)&&!e)return!0;if(!0!==n.$checked&&!0!==n.$indeterminate&&e)return!0;if(!0!==n.$checked&&!0!==n.$indeterminate&&!e)return!1;var t=n.actions,r=e.actions;if(t&&t.length>0&&r){var i=this.$_.filter(t,(function(n){return!0===n.$checked}));if(i.length!==r.length)return!0;if(i.length>0){var o=i.map((function(n){return n.id})),c=r.map((function(n){return n.id})),a=this.$_.xor(o,c);if(a.length>0)return!0}}return!1},generateGraphqlVariables:function(n){var e={},t={group:this.group,userGroup:{connect:{id:this.userGroup.id,code:this.userGroup.code}}},r={};e.id=n.$permission&&n.$permission.id?n.$permission.id:"",t.menu={connect:{id:n.id}},t.actions={connect:this.$_.filter(n.actions,(function(n){return!0===n.$checked})).map((function(n){return{id:n.id}}))};var i=n.actions.map((function(n){return n.id})),o=n.$permission&&n.$permission.actions&&n.$permission.actions.length>0?n.$permission.actions.map((function(n){return n.id})):[],c=this.$_.difference(i,o).map((function(n){return{id:n}})),a=this.$_.difference(o,i).map((function(n){return{id:n}}));return r.actions={connect:c,disconnect:a},{where:e,create:t,update:r}},getPermissionFragment:function(){return"\n      fragment fields on Permission {\n        id\n        userGroup {\n          id\n          code\n          name\n        }\n        menu {\n          id\n          name\n        }\n        permissionGroups {\n          id\n          actionGroup {\n            id\n            code\n            name\n            i18N\n          }\n          actions {\n            id\n            code\n            name\n            i18N\n          }\n        }\n      }"},setMenuCheck:function(n){var e=this,t=n||this.userGroupId;this.$apollo.query({client:s["client"],query:a["c"],variables:{where:{userGroup:{id:t}}}}).then((function(n){var t=n.data.permissions||[];e.setCheckedMenus(t),e.loading=!1})).catch((function(n){console.error(n),e.loading=!1}))}},watch:{userGroupId:function(n){this.loading=!0,this.menuLoaded&&this.setMenuCheck(n)}},computed:$({isLoading:function(){return this.loading||this.$apollo.loading},groupActions:function(){var n=this,e=function n(e,t){for(var r=e.length,i=0;i<r;i++){var o=e[i];if(o.url===t)return o;if(o.menus.length){var c=n(o.menus,t);if(c)return c}}},t=e(this.$menus,p["r"]),r=t.actionGroups,i=r.find((function(e){return e.code===n.permissionGroupCode}));return i&&i.actions||[]},addActionId:function(){var n=this.groupActions.find((function(n){return n.code===p["b"]}));return n&&n.id||""},cancelActionId:function(){var n=this.groupActions.find((function(n){return n.code===p["f"]}));return n&&n.id||""}},G({$menus:"menus"}))}},"95c2":function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.model.menus&&n.model.menus.length>0?t("Collapse",{ref:"collapse",staticClass:"menu-tree",model:{value:n.model.$opened,callback:function(e){n.$set(n.model,"$opened",e)},expression:"model.$opened"}},n._l(n.model.menus,(function(e){return t("Panel",{key:e.id,staticClass:"menu-tree-item",class:{leaf:n.isLeaf(e)},attrs:{"hide-arrow":n.isLeaf(e),name:e.id}},[t("span",{staticClass:"title",on:{click:function(n){return n.stopPropagation(),function(){return!1}()}}},[t("Checkbox",{attrs:{indeterminate:e.$indeterminate},on:{"on-change":function(t){return n.onChange(e,t)}},nativeOn:{click:function(t){return n.menuCheckedChanged(e,!e.$checked)}},model:{value:e.$checked,callback:function(t){n.$set(e,"$checked",t)},expression:"item.$checked"}}),t("Icon",{attrs:{type:e.icon}}),n._v("\n      "+n._s(n.existI18N(e.i18N)?n.$t(e.i18N):e.name)+"\n    ")],1),!n.isFolder(e)&&e.actionGroups&&e.actionGroups.length>0?t("div",{staticClass:"actions",attrs:{slot:"content"},slot:"content"},n._l(e.actionGroups,(function(r){return t("Row",{key:r.id},[r.code!=n.permissionGroupCode&&r.code!=n.signPermissionGroupCode?t("Col",{attrs:{span:"3"}},[t("div",{staticClass:"label"},[t("b",[n._v(n._s(r.name))])])]):n._e(),r.code!=n.permissionGroupCode&&r.code!=n.signPermissionGroupCode?t("Col",{attrs:{span:"21"}},[t("actions-checkboxs",{staticClass:"items",attrs:{disabled:!e.$checked},on:{changed:function(t,i){return n.actionsChanged(e,t,i,r)}},model:{value:r.actions,callback:function(e){n.$set(r,"actions",e)},expression:"group.actions"}})],1):n._e()],1)})),1):t("div",{attrs:{slot:"content"},slot:"content"},[t("menu-tree-item",{attrs:{model:e},on:{actionsChanged:n.actionsChanged,changed:function(t,r){return n.cldChkChed(e,t,r)}}})],1)])})),1):n._e()},i=[],o=(t("ac6a"),t("ac4d"),t("8a81"),t("5df3"),t("1c4c"),t("7f7f"),t("6b54"),t("53ca")),c=t("2518"),a=t("f121");function s(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=u(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return c=n.done,n},e:function(n){a=!0,o=n},f:function(){try{c||null==t.return||t.return()}finally{if(a)throw o}}}}function u(n,e){if(n){if("string"===typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(n,e):void 0}}function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var l={name:"menu-tree-item",components:{actionsCheckboxs:c["default"]},props:{model:{type:Object}},data:function(){return{permissionGroupCode:a["v"].system.roleManager.permControl,signPermissionGroupCode:a["v"].system.signManage.signPermControl}},methods:{existI18N:function(n){var e=this.$t(n);return!0===this.$te(n)&&"object"!==Object(o["a"])(e)},isFolder:function(n){return n&&n.menus&&n.menus.length>0},isLeaf:function(n){return(!n.menus||n.menus.length<1)&&(!n.actions||n.actions.length<1)},menuCheckedChanged:function(n,e){this.setChildrenChecked(n,e),this.$set(n,"$checked",e),this.$set(n,"$indeterminate",!1)},setChildrenChecked:function(n,e){if(n.menus&&n.menus.length>0){var t,r=s(n.menus);try{for(r.s();!(t=r.n()).done;){var i=t.value;this.setChildrenChecked(i,e),this.$set(i,"$checked",e)}}catch(h){r.e(h)}finally{r.f()}}else if(n.actionGroups&&n.actionGroups.length>0){var o,c=s(n.actionGroups);try{for(c.s();!(o=c.n()).done;){var a,u=o.value,d=s(u.actions);try{for(d.s();!(a=d.n()).done;){var l=a.value;this.$set(l,"$checked",e)}}catch(h){d.e(h)}finally{d.f()}}}catch(h){c.e(h)}finally{c.f()}}},actionsChanged:function(n,e,t,r){this.$emit("actionsChanged",n,e,t,r)},onChange:function(n,e){this.$emit("changed",n,e)},cldChkChed:function(n,e,t){var r=this.$_.filter(n.menus,(function(n){return!0===n.$checked||!0===n.$indeterminate})),i=r.length>0&&r.length===n.menus.length,o=r.length>0&&r.length<n.menus.length;this.$set(n,"$checked",i),this.$set(n,"$indeterminate",o),this.$emit("changed",e,t)}}},h=l,f=(t("32df"),t("2877")),m=Object(f["a"])(h,r,i,!1,null,"7eaa4731",null);e["default"]=m.exports},c7c7:function(n,e,t){}}]);