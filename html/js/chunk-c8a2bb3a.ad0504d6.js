(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8a2bb3a","chunk-4fd24150","chunk-add68e04","chunk-d09ead7c"],{"0ab3":function(e,n,i){},"35da":function(e,n,i){"use strict";var t=i("0ab3"),a=i.n(t);a.a},"4c31":function(e,n,i){"use strict";var t=i("829c"),a=i.n(t);i.d(n,"c",(function(){return a.a}));var r=i("e4e5"),d=i.n(r);i.d(n,"a",(function(){return d.a}));var o=i("ccf3"),s=i.n(o);i.d(n,"b",(function(){return s.a}));i("77cc"),i("be12"),i("52ea"),i("cd06")},"52ea":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"metaData"},name:{kind:"Name",value:"sys_SignaturePermissionMetadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Mutation"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fields"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"Query"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fields"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:283}};i.loc.source={body:"{\r\n  metaData: sys_SignaturePermissionMetadata {\r\n    Mutation {\r\n      name\r\n      description\r\n      fields {\r\n        name\r\n        description\r\n      }\r\n    }\r\n    Query {\r\n      name\r\n      description\r\n      fields {\r\n        name\r\n        description\r\n      }\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}}))})(),e.exports=i},"77cc":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"groupList"},name:{kind:"Name",value:"signatureGroups"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"100"}},{kind:"Argument",name:{kind:"Name",value:"skip"},value:{kind:"IntValue",value:"0"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:82}};i.loc.source={body:"{\r\n  groupList: signatureGroups(first: 100, skip: 0) {\r\n    id\r\n    name\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}}))})(),e.exports=i},"829c":function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NamedType",name:{kind:"Name",value:"SignaturePermissionWhereInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"list"},name:{kind:"Name",value:"signaturePermissions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"fields"},directives:[]},{kind:"Field",name:{kind:"Name",value:"module"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"group"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:297}};t.loc.source={body:"#import './_fragment.gql'\r\nquery($where: SignaturePermissionWhereInput) {\r\n  list: signaturePermissions(where: $where) {\r\n    ...fields\r\n    module {\r\n      id\r\n      name\r\n      code\r\n    }\r\n    action {\r\n      id\r\n      code\r\n      name\r\n    }\r\n    group {\r\n      id\r\n      name\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}t.definitions=t.definitions.concat(r(i("82f1").definitions));var o={};(function(){t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),o[e.name.value]=n}}))})(),e.exports=t},"82f1":function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"fields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SignaturePermission"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]}]}}],loc:{start:0,end:92}};i.loc.source={body:"fragment fields on SignaturePermission {\r\n  id\r\n  description\r\n  createdAt\r\n  updatedAt\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},a75f:function(e,n,i){"use strict";i.r(n);var t=i("be16");n["default"]=t["default"]},b12b:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return e.model.menus&&e.model.menus.length>0?i("Collapse",{ref:"collapse",staticClass:"menu-tree",model:{value:e.model.$opened,callback:function(n){e.$set(e.model,"$opened",n)},expression:"model.$opened"}},e._l(e.model.menus,(function(n){return i("Panel",{key:n.id,staticClass:"menu-tree-item",class:{leaf:e.isLeaf(n)},attrs:{"hide-arrow":e.isLeaf(n),name:n.id}},[i("span",{staticClass:"title",on:{click:function(e){return e.stopPropagation(),function(){return!1}()}}},[i("Icon",{attrs:{type:n.icon}}),e._v("\n      "+e._s(e.existI18N(n.i18N)?e.$t(n.i18N):n.name)+"\n    ")],1),!e.isFolder(n)&&n.actionGroups&&n.actionGroups.length>0?i("div",{staticClass:"actions",attrs:{slot:"content"},slot:"content"},e._l(n.actionGroups,(function(t){return i("Row",{key:t.id},[t.code!=e.signPermissionGroupCode?i("Col",{attrs:{span:"4"}},[i("div",{staticClass:"label"},[i("b",[e._v(e._s(t.name))])])]):e._e(),t.code!==e.signPermissionGroupCode?i("Col",{attrs:{span:"20"}},[i("actions-checkboxs",{staticClass:"items",attrs:{groupId:e.groupId},on:{changed:function(i,a){return e.actionsChanged(n,i,a,t)}},model:{value:t.actions,callback:function(n){e.$set(t,"actions",n)},expression:"group.actions"}})],1):e._e()],1)})),1):i("div",{attrs:{slot:"content"},slot:"content"},[i("menu-tree-item",{attrs:{groupId:e.groupId,model:n},on:{actionsChanged:e.actionsChanged,changed:function(i,t){return e.cldChkChed(n,i,t)}}})],1)])})),1):e._e()},a=[],r=i("53ca"),d=i("a75f"),o=i("f121"),s={name:"menu-tree-item",components:{actionsCheckboxs:d["default"]},props:{model:{type:Object},groupId:{type:String}},data:function(){return{signPermissionGroupCode:o["v"].system.signManage.signPermControl}},methods:{existI18N:function(e){var n=this.$t(e);return!0===this.$te(e)&&"object"!==Object(r["a"])(n)},isFolder:function(e){return e&&e.menus&&e.menus.length>0},isLeaf:function(e){return(!e.menus||e.menus.length<1)&&(!e.actions||e.actions.length<1)},actionsChanged:function(e,n,i,t){this.$emit("actionsChanged",e,n,i,t)},cldChkChed:function(e,n,i){var t=this.$_.filter(e.menus,(function(e){return!0===e.$checked||!0===e.$indeterminate})),a=t.length>0&&t.length===e.menus.length,r=t.length>0&&t.length<e.menus.length;this.$set(e,"$checked",a),this.$set(e,"$indeterminate",r),this.$emit("changed",n,i)}}},l=s,c=(i("35da"),i("2877")),u=Object(c["a"])(l,t,a,!1,null,"0e918e72",null);n["default"]=u.exports},b6a9:function(e,n,i){"use strict";var t=i("eff2"),a=i.n(t);a.a},be12:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"moduleList"},name:{kind:"Name",value:"modules"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"enable"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:86}};i.loc.source={body:"{\r\n  moduleList: modules {\r\n    id\r\n    name\r\n    code\r\n    path\r\n    enable\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}}))})(),e.exports=i},be16:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"actions-checkboxs"},[e.value&&e.value.length>0?i("div",{staticClass:"actions-checkboxs-items"},[e._l(e.value,(function(n,t){return[i("Checkbox",{key:n.id,attrs:{disabled:!n.$disabled,title:n.$disabled?n.$group&&n.$group.group&&n.$group.group.name:e.$t("system.signPermission.noOperationalPermission")},on:{"on-change":function(i){return e.actionChange(n,i)}},model:{value:n.$checked,callback:function(i){e.$set(n,"$checked",i)},expression:"v.$checked"}},[e._v("\n        "+e._s(e.existI18N("common.actions."+n.code)?e.$t("common.actions."+n.code):n.name)+"\n        "),n.$disabled&&n.$group&&n.$group.group&&n.$group.group.id==e.groupId?[i("Icon",{attrs:{color:"green",type:"md-egg"}})]:n.$disabled&&n.$group&&n.$group.group&&n.$group.group.id!=e.groupId?[i("Icon",{attrs:{color:"orange",type:"md-egg"}})]:n.$disabled?e._e():[i("Icon",{attrs:{color:"red",type:"md-egg"}})]],2),t!=e.value.length-1?i("span",{key:t,staticStyle:{width:"5px"}}):e._e()]}))],2):e._e()])},a=[],r=(i("ac6a"),i("ac4d"),i("8a81"),i("5df3"),i("1c4c"),i("6b54"),i("53ca"));i("7f7f");function d(e,n){var i;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=o(e))||n&&e&&"number"===typeof e.length){i&&(e=i);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,d=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return d=e.done,e},e:function(e){s=!0,r=e},f:function(){try{d||null==i.return||i.return()}finally{if(s)throw r}}}}function o(e,n){if(e){if("string"===typeof e)return s(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,n):void 0}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var l={name:"actions-checkboxs",props:{value:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},groupId:{type:String,default:""}},data:function(){return{checkedAll:!1,indeterminate:!1}},methods:{actionChange:function(e,n){n||e.$disabled&&e.$group&&e.$group.group&&e.$group.group.id==this.groupId?this.$emit("changed",e,n):this.confirm(e,n)},confirm:function(e,n){var i=this,t=e.$group.group.name,a=e.name;this.$Modal.confirm({title:this.$t("system.signPermission.isDelete"),content:this.$t("system.signPermission.deleteContent",{actionName:a,content:t}),onOk:function(){i.$emit("changed",e,n)},onCancel:function(){for(var n=0;n<i.value.length;n++)e.id==i.value[n].id&&i.$set(i.value[n],"$checked",!0)}})},checkAll:function(e){this.indeterminate=!1;var n,i=d(this.value);try{for(i.s();!(n=i.n()).done;){var t=n.value;this.$set(t,"$checked",e)}}catch(r){i.e(r)}finally{i.f()}var a=this.getCheckedItems();this.$emit("changed",a)},getCheckedItems:function(){var e=this.$_.filter(this.value,"$checked",!0);return e&&e.length>0?this.$_.map(e,(function(e){return{id:e.id,code:e.code,name:e.name}})):[]},existI18N:function(e){var n=this.$t(e);return!0===this.$te(e)&&"object"!==Object(r["a"])(n)}}},c=l,u=(i("b6a9"),i("2877")),m=Object(u["a"])(c,t,a,!1,null,"9905bf86",null);n["default"]=m.exports},ccf3:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SignaturePermissionWhereUniqueInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"create"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SignaturePermissionCreateInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"update"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SignaturePermissionUpdateInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"node"},name:{kind:"Name",value:"upsertSignaturePermission"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}},{kind:"Argument",name:{kind:"Name",value:"create"},value:{kind:"Variable",name:{kind:"Name",value:"create"}}},{kind:"Argument",name:{kind:"Name",value:"update"},value:{kind:"Variable",name:{kind:"Name",value:"update"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"fields"},directives:[]},{kind:"Field",name:{kind:"Name",value:"module"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"group"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:460}};t.loc.source={body:"#import './_fragment.gql'\r\n\r\nmutation(\r\n  $where: SignaturePermissionWhereUniqueInput!\r\n  $create: SignaturePermissionCreateInput!\r\n  $update: SignaturePermissionUpdateInput!\r\n) {\r\n  node: upsertSignaturePermission(\r\n    where: $where\r\n    create: $create\r\n    update: $update\r\n  ) {\r\n    ...fields\r\n    module {\r\n      id\r\n      name\r\n      code\r\n    }\r\n    action {\r\n      id\r\n      code\r\n      name\r\n    }\r\n    group {\r\n      id\r\n      name\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}t.definitions=t.definitions.concat(r(i("82f1").definitions));var o={};(function(){t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),o[e.name.value]=n}}))})(),e.exports=t},cd06:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"module"},name:{kind:"Name",value:"module"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:94}};i.loc.source={body:"query($id: ID) {\r\n  module: module(where: { id: $id }) {\r\n    id\r\n    name\r\n    code\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}}))})(),e.exports=i},e4e5:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SignaturePermissionWhereUniqueInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteSignaturePermission"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"module"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"group"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:212}};i.loc.source={body:"mutation($where: SignaturePermissionWhereUniqueInput!) {\r\n  deleteSignaturePermission(where: $where) {\r\n    id\r\n    module {\r\n      id\r\n    }\r\n    action {\r\n      id\r\n    }\r\n    group {\r\n      id\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}}))})(),e.exports=i},eff2:function(e,n,i){}}]);