(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-503b5e37"],{"0102":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-manager-container"},[n("div",{staticClass:"one-table"},[n("actions",{attrs:{slot:"toolbar",options:e.actionsOptions},on:{add:e.add,edit:e.edit,refresh:e.refresh,remove:e.remove},slot:"toolbar"}),n("div",{staticClass:"data-table"},[n("ag-grid",{staticClass:"ag-theme-material",staticStyle:{width:"100%",height:"100%"},attrs:{gridOptions:e.gridOptions,modules:e.modules}})],1),n("edit-modal",{ref:"editModal",attrs:{loading:e.editModal.loading,modalWidth:996},on:{cancel:e.cancel,ok:e.ok}},[n("Form",{ref:"editModalForm",attrs:{"label-width":120,model:e.editModal.data,rules:e.editModal.rules}},[n("Row",[n("Col",{attrs:{span:"11"}},[n("FormItem",{attrs:{label:e.$t("system.moduleManager.code"),prop:"code"}},[n("Input",{attrs:{disabled:e.editOpen,placeholder:e.$t("common.rules.validateFailure")},model:{value:e.editModal.data.code,callback:function(t){e.$set(e.editModal.data,"code",t)},expression:"editModal.data.code"}})],1)],1),n("Col",{attrs:{span:"11"}},[n("FormItem",{attrs:{label:e.$t("system.moduleManager.name"),prop:"name"}},[n("Input",{attrs:{placeholder:e.$t("common.rules.validateFailure")},model:{value:e.editModal.data.name,callback:function(t){e.$set(e.editModal.data,"name",t)},expression:"editModal.data.name"}})],1)],1)],1),n("Row",[n("Col",{attrs:{span:"22"}},[n("FormItem",{attrs:{label:e.$t("system.moduleManager.description"),prop:"description"}},[n("Input",{attrs:{autosize:!1,rows:5,title:e.editModal.data.description,type:"textarea"},model:{value:e.editModal.data.description,callback:function(t){e.$set(e.editModal.data,"description",t)},expression:"editModal.data.description"}})],1)],1)],1)],1)],1)],1)])},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("96cf"),n("1da1")),s=n("ade3"),o=n("e7f7"),d=n("9974b"),l=n("db25"),c=n("9b95"),u=n("8eac"),p=n("ad5e"),m=n("083f"),h=n("6689"),f=n("3595");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={components:{actions:c["a"],editModal:u["a"]},mixins:[o["a"],l["a"]],data:function(){return{modules:d["a"],actionsOptions:{add:{visible:!0,disabled:!1},edit:{visible:!0,disabled:!0},refresh:{visible:!0,disabled:!1},remove:{visible:!0,disabled:!0}},editOpen:!1,addOpen:!1,gridApi:null,columnApi:null,gridOptions:this.getGridOptions(),editModal:this.getEditModal(),isAllowDefaultSelected:!0}},methods:{getDefaultData:function(){return{code:"",name:"",description:"",enable:!0}},add:function(){this.addOpen=!0,this.$refs.editModal.open(),this.$refs.editModalForm.resetFields(),this.$set(this.editModal,"data",this.getDefaultData())},edit:function(){this.$refs.editModalForm.resetFields();var e=this.getSelectedNode();e?(this.editOpen=!0,this.$set(this.editModal,"data",b({},e.data)),this.editModal.loading=!1,this.$refs.editModal.open(!0)):this.$Message.warning(this.$t("common.messages.plsSelectRow"))},refresh:function(){this.gridApi.purgeServerSideCache()},remove:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.getSelectedNode(),t){e.next=4;break}return this.$Message.warning(this.$t("common.messages.plsSelectRow")),e.abrupt("return");case 4:return n=t.id,a=t.code,e.next=7,this.queryById(n);case 7:if(i=e.sent,i){e.next=11;break}return this.refresh(),e.abrupt("return");case 11:if(!i.path||""===i.path){e.next=14;break}return this.$Message.error(this.$t("system.moduleManager.prohibitDeletion")),e.abrupt("return");case 14:return e.next=16,this.findMenuCount(n);case 16:if(r=e.sent,!(r>0)){e.next=20;break}return this.$Message.error(this.$t("system.moduleManager.alreadyRefNotDelete")),e.abrupt("return");case 20:p["remove"](this.$apollo,{id:n,code:a}).then((function(){s.gridApi.deselectAll(),s.refresh(),s.$Message.success(s.$t("common.messages.removeSuccess"))})).catch((function(){s.$Message.error(s.$t("common.messages.removeFailure"))}));case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),ok:function(){var e=this;this.$refs.editModalForm.validate((function(t){if(e.editModal.loading=!0,t){var n=e.editModal.data,a=n.id,i=n.code;Object(m["b"])(h["client"],"Module",{id_not:a,code:i},(function(t){t?(e.$Message.warning(e.$t("system.moduleManager.codeExists",{code:i})),e.editModal.loading=!1):e.upsertExec(a)}),i)}else e.editModal.loading=!1,e.$Message.error(e.$t("common.rules.validateFailure"))}))},upsertExec:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.editModal.data,n.name=n.name.trim(),this.deleteUnusedField(n),a={where:{id:t||"undefined"},create:n,update:n},e.prev=4,e.next=7,p["upsert"](this.$apollo,a);case 7:i=e.sent,t?(r=this.getSelectedNode(),r.setData(Object.assign(r.data,b({},i.node)))):this.gridApi.setSortModel([{colId:"createdAt",sort:"desc"}]),this.editModal.loading=!1,this.$Message.success(this.$t("common.messages.saveSuccess")),this.cancel(),e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](4),this.editModal.loading=!1,this.$Message.error(this.$t("common.messages.saveFailure")),this.cancel();case 19:case"end":return e.stop()}}),e,this,[[4,14]])})));function t(t){return e.apply(this,arguments)}return t}(),deleteUnusedField:function(e){e&&(delete e.id,delete e.createdAt,delete e.updatedAt,delete e.__typename)},cancel:function(){1!=this.editModal.loading&&(this.$set(this.editModal,"data",this.getDefaultData()),this.editModal.loading=!1,this.$refs.editModal.close(),this.editOpen=!1,this.addOpen=!1)},queryById:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["queryById"](this.$apollo,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),findMenuCount:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["findMenuCount"](this.$apollo,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getEditModal:function(){return{loading:!1,visible:!1,data:{},rules:{code:[{required:!0,message:this.$t("system.moduleManager.fieldRules",{field:this.$t("system.moduleManager.code")}),trigger:"blur"},{validator:this.validateCode()}],name:[{required:!0,message:this.$t("system.moduleManager.fieldRules",{field:this.$t("system.moduleManager.name")}),trigger:"blur"},{validator:this.validateName()}]}}},validateCode:function(){var e=this;return function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n,a,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$regex.commonUse().test(e.editModal.data.code)||i(new Error(e.$t("validate.commonUse.infinite",{name:e.$t("system.moduleManager.code")})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},validateName:function(){var e=this;return function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n,a,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""===a.trim()&&i(new Error(e.$t("system.moduleManager.fieldRules",{field:e.$t("system.moduleManager.name")})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},getSelectedNode:function(){if(!this.gridApi)return null;var e=this.gridApi.getSelectedNodes();return e&&e.length>0&&e[0]&&e[0].id?e[0]:null},getGridOptions:function(){return this.$_.assign(this.$agGetDefaultGridOptions(),{onGridReady:this.gridReady.bind(this),onSelectionChanged:this.selectionChanged.bind(this),pagination:!0,columnDefs:this.getColumnDef()})},gridReady:function(e){this.gridApi=e.api,this.columnApi=e.columnApi,this.gridApi.sizeColumnsToFit(),e.api.setServerSideDatasource(this.serverSideDatasource())},serverSideDatasource:function(){var e=this;return{getRows:function(t){var n=t.request,a={skip:n.startRow,first:n.endRow-n.startRow};a.orderBy=e.$agGenerateOrderByFromSortModel(n.sortModel);var i=e.$agGenerateWhereFromFiltersModel(t.request.filterModel);a.where=i,p["pagination"](e.$apollo,b({},a)).then(function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(a){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.successCallback(a.list,a.total.aggregate.count),i=e.gridApi.getSelectedNodes(),e.isAllowDefaultSelected)if(i.length>0)for(r=0;r<a.list.length;r++)a.list[r].id!=i[0].id&&e.gridApi.getRenderedNodes()[0].setSelected(!0);else e.gridApi.getRenderedNodes()[0].setSelected(!0);else i.length>0&&e.deselectAll();case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(){e.$Message.error(e.$t("common.messages.queryDataError"))}))}}},selectionChanged:function(e){var t=e.api.getSelectedRows();this.editModal.data=b({},t[0]),this.actionsOptions.remove.disabled=this.actionsOptions.edit.disabled=!(t&&t.length>0),this.changeButtonStatus(this.editModal)},changeButtonStatus:function(e){e&&e.data&&(e.data.path&&""!==e.data.path?this.actionsOptions.remove.disabled=!0:this.actionsOptions.remove.disabled=!1)},enableFormatter:function(e){if(e&&e.data&&e.data.enable)return this.$t("system.moduleManager.".concat(e.data.enable,"Value"))},getColumnDef:function(){return[{type:["rowNumberColumn"]},{headerName:this.$t("system.moduleManager.code"),field:"code",filter:"agTextColumnFilter"},{headerName:this.$t("system.moduleManager.name"),field:"name",filter:"agTextColumnFilter"},{headerName:this.$t("system.moduleManager.description"),field:"description",width:260,filter:"agTextColumnFilter"},{headerName:this.$t("system.moduleManager.enable"),field:"enable",valueFormatter:this.enableFormatter,sortable:!1,filter:!1,hide:!0},{headerName:this.$t("common.labels.createdAt"),field:"createdAt",width:200,cellRendererFramework:f["a"],filter:"agDateColumnFilter"},{headerName:this.$t("common.labels.updatedAt"),field:"updatedAt",filter:"agDateColumnFilter",width:200,cellRendererFramework:f["a"],sort:"desc"}]}}},y=v,w=(n("3aaf"),n("2877")),O=Object(w["a"])(y,a,i,!1,null,"4b272a4c",null);t["default"]=O.exports},"083f":function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));n("96cf");var a=n("1da1"),i=n("6fab"),r=n("19914"),s=n.n(r),o=n("f121"),d=n("9225");function l(e,t,n){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].clients[t].query({query:s.a,variables:{type:n,where:a}});case 2:return r=e.sent,e.abrupt("return",r.data.exist||!1);case 4:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function u(e,t,n,a,i){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r,o){var d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].clients[t].query({query:s.a,variables:{type:n,where:a}});case 2:d=e.sent,d&&d.data&&!d.data.exist?r&&r():r&&r(new Error(o));case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function m(e,t,n,a,i){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r,l){var c,u,p,m,h,f=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=f.length>5&&void 0!==f[5]?f[5]:null,e.next=3,i["a"].clients[t].query({query:s.a,variables:{type:n,where:a}});case 3:u=e.sent,u&&u.data&&!u.data.exist?r&&r():(p=o["h"].PRODUCT==u.data.exist,m=c||l,h=p?m+d["b"].t("common.messages.alreadyExist"):m+d["b"].t("common.messages.alreadyExistArchive"),r&&r(new Error(h)));case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},19914:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"exist"},name:{kind:"Name",value:"db_exists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[]}]}}],loc:{start:0,end:84}};n.loc.source={body:"query($type:String!,$where:JSON!) {\r\n  exist:db_exists(type:$type,where:$where)\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,t)})),e.definitions&&e.definitions.forEach((function(e){a(e,t)}))}var i={};(function(){n.definitions.forEach((function(e){if(e.name){var t=new Set;a(e,t),i[e.name.value]=t}}))})(),e.exports=n},"3aaf":function(e,t,n){"use strict";var a=n("cb334"),i=n.n(a);i.a},"5ac6":function(e,t,n){"use strict";var a=n("b853"),i=n.n(a);i.a},"9b95":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-toolbar"},[e.options.onlyChoose&&e.options.onlyChoose.type&&"radio"==e.options.onlyChoose.type?n("Select",{staticStyle:{width:"90px",margin:"0px"},on:{"on-change":e.onlyChoose},model:{value:e.isdelete,callback:function(t){e.isdelete=t},expression:"isdelete"}},e._l(e.deleteitems,(function(t,a){return n("Option",{key:a,attrs:{value:t.value}},[e._v(e._s(t.name))])})),1):e._e(),e.options.search&&e.options.search.visible?n("Input",{staticStyle:{"padidng-left":"0px",width:"auto",padding:"0:height:100%"},attrs:{placeholder:e.placeholder},on:{"on-blur":e.searchEvent,"on-click":e.searchEvent,"on-keydown":e.searchEvent},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}},[n("Select",{directives:[{name:"show",rawName:"v-show",value:e.lableitems.length>0,expression:"lableitems.length > 0"}],staticStyle:{width:"100px",margin:"0px","padding-top":"0px",padding:"0px"},attrs:{slot:"prepend",value:e.value},on:{"on-change":e.change,input:function(t){return e.$emit("input",t)}},slot:"prepend"},e._l(e.items,(function(t,a){return n("Option",{key:a,attrs:{value:t.value}},[e._v(e._s(t.text))])})),1)],1):e._e(),e._l(e.permissionActions,(function(t){return n("action-button",e._g({key:t.code,attrs:{action:t}},e.$listeners))})),e._t("default")],2)},i=[],r=(n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.action.confirm?n("Poptip",{attrs:{"cancel-text":e.$t("common.buttons.cancel"),"ok-text":e.$t("common.buttons.ok"),title:e.$t(e.action.confrimTip),confirm:""},on:{"on-ok":function(t){return e.fireEvent(e.action.code,e.action.id)}}},[n("Button",{attrs:{disabled:e.action.disabled,loading:e.action.loading,type:e.action.type}},[e._v(e._s(e.$t(e.action.i18N)))])],1):e.action.visible?n("Button",{attrs:{disabled:e.action.disabled,loading:e.action.loading,type:e.action.type},on:{click:function(t){return e.fireEvent(e.action.code,e.action.id)}}},[e._v(e._s(e.$t(e.action.i18N)))]):e._e()}),s=[],o=n("0463"),d={props:{action:{type:Object,required:!0}},mixins:[o["a"]]},l=d,c=n("2877"),u=Object(c["a"])(l,r,s,!1,null,null,null),p=u.exports,m=n("b752"),h=n("9225"),f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{visible:e,disabled:!1,loading:!1,type:"default"}},g={add:{visible:!0},edit:{visible:!0},remove:{visible:!0,confirm:!0,confrimTip:"common.messages.deleteConfirm"},refresh:{visible:!0}},b={name:"actions",mixins:[o["b"]],components:{ActionButton:p},props:{groupCode:{type:String},options:{type:Object,default:function(){return{}}},placeholder:{type:String,default:function(){return h["b"].t("common.placeholders.plsInput")}},value:{type:[String,Array],default:"",required:!1},lableitems:{type:Array,default:function(){return[]}},isDelete:{type:[String,Array],default:"NODELETE",required:!1}},data:function(){return{deleteitems:[{value:"DELETE",name:h["b"].t("common.actions.remove")},{value:"NODELETE",name:h["b"].t("common.actions.noRemove")}],defaultOptions:this.getOptions(),searchText:"",items:[],isdelete:this.isDelete,select:this.value}},computed:{defOptions:function(){var e=this.options,t=Object.assign({},e);for(var n in t)t[n]=Object.assign({},this.getProp(),g[n],t[n]);return t}},methods:{onlyChoose:function(e){this.$emit("onlyChoose",e)},getOptions:function(){var e=m["a"].map((function(e){return Object.assign(f(),e)}));e.push({code:"search",visible:!1,disabled:!1,autofocus:!1});var t={};return e.forEach((function(e){t[e.code]=Object.assign({},e,g[e.code])})),t},searchEvent:function(e){this.$emit("search",this.searchText,e)},mergeAction:function(e){var t=this.options,n=Object.assign({},t);return Object.assign({},this.getProp(),g[e.code],n[e.code],e)},clear:function(){this.$emit("search","")},change:function(e){this.$emit("change",e)}},watch:{lableitems:function(){this.lableitems.length>0&&(this.items=this.lableitems)}}},v=b,y=(n("5ac6"),Object(c["a"])(v,a,i,!1,null,"4b97ecc2",null)),w=y.exports;t["a"]=w},b853:function(e,t,n){},cb334:function(e,t,n){},db25:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var a=n("ade3"),i=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=Object(i["a"])("user"),d=o.mapGetters,l={computed:s({},d({$curActions:"actions",$appUserInfo:"userInfo",$isArchive:"isArchive"}))};t["a"]=l}}]);