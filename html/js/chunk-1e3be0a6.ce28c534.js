(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e3be0a6"],{7495:function(t,e,n){"use strict";var r=n("ae0b"),a=n.n(r);a.a},"79db":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"printHead",staticStyle:{width:"100%"}},[n("thead",[n("tr",[n("th",{staticClass:"th1 text-left",attrs:{colspan:"2"}},[t._v(t._s(t.companyName))]),n("th",{staticClass:"th1 text-right"},[t._v("\n        "+t._s(t.$t("product.factory.printDate"))+"："+t._s(t.printDate)+"\n      ")])]),n("tr",[n("th",{staticClass:"th1"}),n("th",{staticClass:"th2"},[n("span",{staticClass:"borderBottom"},[t._v(t._s(t.title))])]),n("th",{staticClass:"th1 text-right"},[t._v("\n        "+t._s(t.$t("product.factory.time"))+"："+t._s(t.printTime)+"\n      ")])]),n("tr",[n("th"),n("th"),n("th",{staticClass:"text-right"},[t._v("\n        "+t._s(t.$t("product.factory.operator"))+"："+t._s(t.operator)+"\n      ")])])])])},a=[],s=(n("7f7f"),n("96cf"),n("1da1")),i=n("b893"),c=n("b627"),o={name:"print-basic",inheritAttrs:!1,mixins:[c["a"]],props:{title:{type:String,default:"EBR"}},data:function(){return{companyName:""}},beforeMount:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$appResourceCompanyName;case 2:this.companyName=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),computed:{printTime:function(){return Object(i["a"])(new Date,"yyyy-MM-dd hh:mm").substring(11,16)},printDate:function(){return Object(i["a"])(new Date,"yyyy-MM-dd hh:mm").substring(0,10)},operator:function(){var t=this.$userInfo.person;return t?t.name:""},address:function(){return this.$userInfo.workStationName}}},u=o,p=(n("7495"),n("2877")),h=Object(p["a"])(u,r,a,!1,null,"4b5d3184",null);e["default"]=h.exports},ae0b:function(t,e,n){}}]);