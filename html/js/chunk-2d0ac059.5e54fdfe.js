(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac059"],{1884:function(e,t,n){"use strict";n.r(t),n.d(t,"DefaultIcon",(function(){return f}));n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("96cf");var r=n("1da1"),i=(n("7514"),n("7f7f"),n("53ca")),a=n("b441"),o=n("cb37"),s=n("25af"),u=n("b615");function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=m(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function m(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f="ios-radio-button-on";t["default"]={name:"side-menu",components:{"multi-menu":u["a"]},mixins:[s["a"]],data:function(){return{appName:"",appVersion:a["VUE_APP_SYSTEM_VERSION"],openNames:[],activeName:"",menuMap:{},menus:[],data:[],trialVersion:!1}},computed:{fontSize:function(){return this.appName.length>10?14:20}},methods:{getMenus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];e=e||JSON.parse(JSON.stringify(this.menus)),e=this.$_.sortBy(e,["orderNo"]);var r,i=c(e);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.menuMap[a.code.toLowerCase()]=a;var s={id:a.code.toLowerCase(),title:this.getMenuTitle(a),icon:a.icon||"md-link"};if(a.menus&&a.menus.length>0)s.children=this.getMenus(a.menus,"".concat(t,"/").concat(a.code));else{var u="";switch(a.menuType){case o["a"].internal:case o["a"].external:case o["a"].internalLink:u="".concat(t,"/").concat(a.code.toLowerCase());break;case o["a"].externalPopup:u="//".concat(this.$_.trimStart(a.url,"/"));break}s.to=u,s.target=a.menuType===o["a"].externalPopup?"_blank":"_self"}n.push(s)}}catch(m){i.e(m)}finally{i.f()}return n},goHome:function(){this.$router.push({name:a["VUE_APP_DEFAULT_ROUTER_NAME"]})},getMenuTitle:function(e){if(!e)return"";var t=this.$t(e.i18N),n=!0===this.$te(e.i18N)&&"object"!==Object(i["a"])(t);return!0===n?this.$t(e.i18N):e.name},setActiveName:function(e){this.activeName=e||"",this.trialVersion=Boolean(window.sessionStorage.getItem("TRIAL_VERSION"))},openCurSelectMenu:function(e){var t=e.fullPath,n=t.lastIndexOf("/");if(n>0){var r=this.$menus,i=t.substring(1,n);this.openNames=r.filter((function(e){if(e.code===i)return e}));var a=r.find((function(e){return e.code===i}));this.openNames=a&&[a.code.toLowerCase()]}}},watch:{$route:function(e){this.setActiveName(e.name),this.$setTitle(this.getMenuTitle(this.menuMap[e.name]))}},beforeMount:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 1===this.$menus.length?this.menus=this.$menus[0].menus:this.menus=this.$menus,this.data=this.getMenus(),this.openCurSelectMenu(this.$route),this.setActiveName(this.$route.name),e.next=6,this.$appResourceSystemName;case 6:this.appName=e.sent;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){this.$setTitle(this.getMenuTitle(this.menuMap[this.$route.name]))}}}}]);