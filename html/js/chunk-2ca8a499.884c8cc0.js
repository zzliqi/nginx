(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ca8a499","chunk-08697e0b"],{"5a4c":function(t,e,a){"use strict";a.r(e);var n=a("fee2");e["default"]=n["default"]},"899a":function(t,e,a){"use strict";var n=a("6fab"),s=n["a"].clients.archive;e["a"]=s},ce63:function(t,e,a){},ef7af:function(t,e,a){"use strict";var n=a("ce63"),s=a.n(n);s.a},fee2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("one-tabel",{staticClass:"one-table"},[a("Card",{staticStyle:{height:"100%"}},[a("Row",[a("Col",[a("h4",[t._v(t._s(t.$t("product.archiving.info")))])])],1),a("Row",[a("Col",{attrs:{span:"3"}},[t._v(t._s(t.$t("product.archiving.curStatus")))]),a("Col",{attrs:{span:"6"}},[t._v(t._s(t.isEnabled?t.$t("product.archiving.enable"):t.$t("product.archiving.disable")))]),a("Col",{attrs:{span:"3"}},[a("Button",{attrs:{type:"primary"},on:{click:t.changeStatus}},[t._v(t._s(t.isEnabled?t.$t("system.menu.disable"):t.$t("system.menu.enable")))])],1)],1),a("Row",[a("Col",{attrs:{span:"3"}},[t._v(t._s(t.$t("system.workStation.description")))]),a("Col",{attrs:{span:"9"}},[t._v(t._s(t.archiveStatus.comment))])],1),a("Row",[a("Col",{attrs:{span:"3"}},[t._v(t._s(t.$t("product.archiving.lastArchiveTime")))]),a("Col",{attrs:{span:"9"}},[t._v(t._s(t.archiveStatus.lastExecTime))])],1)],1)],1)],1)},s=[],r=(a("96cf"),a("1da1")),i=a("23f4"),c=a("3727"),u=a("f121"),o={name:"archive-setting",inheritAttrs:!1,props:{},components:{oneTabel:i["b"]},data:function(){return{isEnabled:!1,archiveStatus:{comment:"",lastExecTime:""}}},computed:{},created:function(){},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["c"])();case 2:e=t.sent,this.archiveStatus=e,this.isEnabled=e.status==u["d"].ENABLED;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),watch:{},methods:{changeStatus:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["d"])({status:this.isEnabled?"DISABLE":"ENABLE"});case 2:e=t.sent,this.isEnabled=e.status==u["d"].ENABLED,this.$Message.warning(this.$t("common.messages.archive",{status:this.isEnabled?this.$t("system.menu.enable"):this.$t("system.menu.disable")}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},l=o,h=(a("ef7af"),a("2877")),p=Object(h["a"])(l,n,s,!1,null,"071c5c2a",null);e["default"]=p.exports}}]);