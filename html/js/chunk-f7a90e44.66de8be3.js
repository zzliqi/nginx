(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7a90e44","chunk-ae16525a"],{1101:function(e,n,i){"use strict";var s=i("a9e4"),t=i.n(s);t.a},"2ae2":function(e,n,i){"use strict";i.r(n);var s=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"mi-design-pane"},[i("Modal",{ref:"mi-design-panel",attrs:{closable:!1,"mask-closable":!1,width:e.maximize?"100%":"93%","class-name":"vertical-center-modal"},model:{value:e.designModal,callback:function(n){e.designModal=n},expression:"designModal"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",{staticClass:"m-title"},[e._v(e._s(e.$t("product.miManager.designPanel")))]),i("div",{staticClass:"w-c-bnt"},[i("Button",{attrs:{icon:e.maximize?"ios-browsers-outline":"ios-square-outline",size:"small"},on:{click:function(n){e.maximize=!e.maximize}}}),e._v("  \n        "),i("Button",{attrs:{icon:"md-close",size:"small",type:"error"},on:{click:function(n){return e.isClose()}}})],1)]),e.iframeStatus?i("iframe",{style:e.maximize?"height: calc(100vh - 83px);":"height: calc(100vh - 200px)",attrs:{src:e.designModalSrc,border:"0",frameborder:"no",scrolling:"no",width:"100%"}}):e._e()]),i("Modal",{attrs:{title:e.$t("common.messages.closeConfirm")},on:{"on-ok":function(n){return e.$emit("close-design")}},model:{value:e.designConfirm,callback:function(n){e.designConfirm=n},expression:"designConfirm"}},[i("p",[e._v(e._s(e.$t("common.messages.confirmClose")))])])],1)},t=[],a={props:{designModal:Boolean,designModalSrc:String,iframeStatus:Boolean},data:function(){return{designConfirm:!1,maximize:!1}},methods:{isClose:function(){this.getNodesChange()?this.designConfirm=!0:this.$emit("close-design")},getNodesChange:function(){try{return window.frames[0].window.nodesChange}catch(e){return!0}}}},o=a,r=(i("1101"),i("2877")),l=Object(r["a"])(o,s,t,!1,null,null,null);n["default"]=l.exports},"9e3a":function(e,n,i){"use strict";i.r(n);var s=i("2ae2");n["default"]=s["default"]},a9e4:function(e,n,i){}}]);