(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-261021ba","chunk-3071a10d","chunk-632b8d57"],{3339:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"client-grid"},[s("ag-grid",t._g({staticClass:"ag-theme-material full-size",attrs:{gridOptions:t.op,modules:t.modules,rowData:t.rowData}},t.$listeners))],1)},a=[],o=(s("8e6e"),s("ac6a"),s("456d"),s("53ca")),n=s("ade3"),c=s("9974b"),r=s("2f62");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"common-grid",inheritAttrs:!1,props:{sizeColumnsToFit:{type:Boolean,default:!1},columnDefs:{type:Array,default:function(){return[]}},rowData:{type:Array,default:function(){return[]}}},computed:u({},Object(r["c"])("app",["pageResize"])),watch:{pageResize:function(){this.sizeColumnsToFit&&this.gridApi.sizeColumnsToFit()}},data:function(){return{modules:c["a"],gridApi:null,columnApi:null,op:{onGridReady:this.gridReady.bind(this),context:{componentParent:this},localeTextFunc:this.$agLocaleTextFunc.bind(this),editType:"fullRow",rowSelection:"single",rowDeselection:!0,suppressMultiSort:!0,suppressContextMenu:!0,getRowNodeId:function(t){return t.id},defaultColDef:{resizable:!0,enableValue:!1,enableRowGroup:!1,enablePivot:!1,width:150,minWidth:50},columnTypes:{rowNumberColumn:{headerName:this.$t("common.labels.rowIndex"),headerClass:"col-row-index",cellClass:"col-row-index",width:50,valueGetter:function(t){return t.node.rowIndex+1},suppressColumnsToolPanel:!0,suppressFiltersToolPanel:!0,suppressMenu:!0,sortable:!1,filter:!1,lockPosition:!0,pinned:"left",suppressMovable:!0}},columnDefs:this.columnDefs}}},methods:{$agLocaleTextFunc:function(t,e){var s="agGrid.",i=s+t,a=this.$t(i),n=e;return!0===this.$te(i)&&"object"!==Object(o["a"])(a)&&(n=a),n},gridReady:function(t){this.gridApi=t.api,this.columnApi=t.columnApi,this.sizeColumnsToFit&&this.gridApi.sizeColumnsToFit(),this.$emit("gridReady",this.gridApi)}}},h=d,p=(s("b3f5"),s("2877")),f=Object(p["a"])(h,i,a,!1,null,"27b5ab62",null);e["default"]=f.exports},5336:function(t,e,s){},"65ae":function(t,e,s){"use strict";s.r(e);var i=s("3339");e["default"]=i["default"]},"7d38":function(t,e,s){"use strict";var i=s("5336"),a=s.n(i);a.a},"986f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",[s("Col",{attrs:{span:"11"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n        "+t._s(t.$t("product.factory.associate"))+"("+t._s(t.associateSitesCount)+")\n      ")]),s("associate-grid",{attrs:{columnDefs:t.columnDefs,rowData:t.associateSitesRowData,sizeColumnsToFit:!0},on:{gridReady:t.associateGridReady,selectionChanged:t.associateSelectChange}})],1)],1),s("Col",{staticClass:"content-center",attrs:{span:"2"}},[s("Button",{attrs:{disabled:t.cancelDisabled},on:{click:t.cancelAssociate}},[s("b",[t._v(">")])]),s("Button",{staticClass:"mt-3",attrs:{disabled:t.addDisabled},on:{click:t.addAssociate}},[s("b",[t._v("<")])])],1),s("Col",{attrs:{span:"11"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n        "+t._s(t.$t("product.factory.unAssociate"))+"("+t._s(t.unAssociateSitesCount)+")\n      ")]),s("associate-grid",{attrs:{columnDefs:t.columnDefs,rowData:t.unAssociateSitesRowData,sizeColumnsToFit:!0},on:{gridReady:t.unAssociateGridReady,selectionChanged:t.unAssociateSelectChange}})],1)],1)],1)},a=[],o=s("2909"),n=s("65ae"),c={name:"associate-bottom",inheritAttrs:!1,props:{modal:{type:Object},unAssociateData:{type:Object}},components:{AssociateGrid:n["default"]},data:function(){return{columnDefs:[{headerName:this.$t("product.factory.code"),field:"code"},{headerName:this.$t("product.factory.name"),field:"name"}],cancelDisabled:!0,addDisabled:!0,unAssociateGridApi:null,associateGridApi:null,unAssociateSitesRowData:this.unAssociateData.list,associateSitesRowData:Object(o["a"])(this.modal.rows)}},computed:{associateSitesCount:function(){return this.associateSitesRowData&&this.associateSitesRowData.length||0},unAssociateSitesCount:function(){return this.unAssociateSitesRowData&&this.unAssociateSitesRowData.length||0}},watch:{associateSitesCount:function(){!this.associateSitesCount&&(this.cancelDisabled=!0)},unAssociateSitesCount:function(){!this.unAssociateSitesCount&&(this.addDisabled=!0)}},methods:{associateSelectChange:function(){this.cancelDisabled=!1},unAssociateSelectChange:function(){this.addDisabled=!1},associateGridReady:function(t){this.associateGridApi=t},unAssociateGridReady:function(t){this.unAssociateGridApi=t},disableBtn:function(){this.cancelDisabled=!0,this.addDisabled=!0},cancelAssociate:function(){var t=this.associateGridApi.getSelectedNodes();if(!t||!t.length)return this.$dialog.notify.warning(this.$t("common.messages.plsSelectRow")),!1;this.unAssociateSitesRowData.push(t[0].data),this.associateSitesRowData.splice(t[0].rowIndex,1),this.disableBtn(),this.$emit("change",this.associateSitesRowData,this.associateSitesCount)},addAssociate:function(){var t=this.unAssociateGridApi.getSelectedNodes();if(!t||!t.length)return this.$dialog.notify.warning(this.$t("common.messages.plsSelectRow")),!1;this.associateSitesRowData.push(t[0].data),this.unAssociateSitesRowData.splice(t[0].rowIndex,1),this.disableBtn(),this.$emit("change",this.associateSitesRowData,this.associateSitesCount)}}},r=c,l=(s("7d38"),s("2877")),u=Object(l["a"])(r,i,a,!1,null,"48017b9d",null);e["default"]=u.exports},b3f5:function(t,e,s){"use strict";var i=s("ee1e"),a=s.n(i);a.a},ee1e:function(t,e,s){}}]);