(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3071a10d","chunk-632b8d57"],{3339:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"client-grid"},[n("ag-grid",e._g({staticClass:"ag-theme-material full-size",attrs:{gridOptions:e.op,modules:e.modules,rowData:e.rowData}},e.$listeners))],1)},r=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("53ca")),s=n("ade3"),a=n("9974b"),l=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"common-grid",inheritAttrs:!1,props:{sizeColumnsToFit:{type:Boolean,default:!1},columnDefs:{type:Array,default:function(){return[]}},rowData:{type:Array,default:function(){return[]}}},computed:c({},Object(l["c"])("app",["pageResize"])),watch:{pageResize:function(){this.sizeColumnsToFit&&this.gridApi.sizeColumnsToFit()}},data:function(){return{modules:a["a"],gridApi:null,columnApi:null,op:{onGridReady:this.gridReady.bind(this),context:{componentParent:this},localeTextFunc:this.$agLocaleTextFunc.bind(this),editType:"fullRow",rowSelection:"single",rowDeselection:!0,suppressMultiSort:!0,suppressContextMenu:!0,getRowNodeId:function(e){return e.id},defaultColDef:{resizable:!0,enableValue:!1,enableRowGroup:!1,enablePivot:!1,width:150,minWidth:50},columnTypes:{rowNumberColumn:{headerName:this.$t("common.labels.rowIndex"),headerClass:"col-row-index",cellClass:"col-row-index",width:50,valueGetter:function(e){return e.node.rowIndex+1},suppressColumnsToolPanel:!0,suppressFiltersToolPanel:!0,suppressMenu:!0,sortable:!1,filter:!1,lockPosition:!0,pinned:"left",suppressMovable:!0}},columnDefs:this.columnDefs}}},methods:{$agLocaleTextFunc:function(e,t){var n="agGrid.",i=n+e,r=this.$t(i),s=t;return!0===this.$te(i)&&"object"!==Object(o["a"])(r)&&(s=r),s},gridReady:function(e){this.gridApi=e.api,this.columnApi=e.columnApi,this.sizeColumnsToFit&&this.gridApi.sizeColumnsToFit(),this.$emit("gridReady",this.gridApi)}}},d=p,f=(n("b3f5"),n("2877")),b=Object(f["a"])(d,i,r,!1,null,"27b5ab62",null);t["default"]=b.exports},"65ae":function(e,t,n){"use strict";n.r(t);var i=n("3339");t["default"]=i["default"]},b3f5:function(e,t,n){"use strict";var i=n("ee1e"),r=n.n(i);r.a},ee1e:function(e,t,n){}}]);