(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f24763a","chunk-adcf3a00","chunk-adcf3a00","chunk-adcf3a00","chunk-5d44363e","chunk-2d0cfeb7","chunk-adcf3a00","chunk-adcf3a00","chunk-adcf3a00"],{"00fd":function(e,n,t){var i=t("9e69"),o=Object.prototype,a=o.hasOwnProperty,r=o.toString,c=i?i.toStringTag:void 0;function d(e){var n=a.call(e,c),t=e[c];try{e[c]=void 0;var i=!0}catch(d){}var o=r.call(e);return i&&(n?e[c]=t:delete e[c]),o}e.exports=d},"03dd":function(e,n,t){var i=t("eac5"),o=t("57a5"),a=Object.prototype,r=a.hasOwnProperty;function c(e){if(!i(e))return o(e);var n=[];for(var t in Object(e))r.call(e,t)&&"constructor"!=t&&n.push(t);return n}e.exports=c},"0463":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));t("8e6e"),t("456d"),t("ac6a"),t("7514");var i=t("ade3"),o=t("2f62"),a=t("f121");function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){Object(i["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=Object(o["a"])("user"),s=d.mapGetters,u={methods:{fireEvent:function(e,n){this.setActionIdToLocalStorage(n),this.$emit(e)},setActionIdToLocalStorage:function(e){window.sessionStorage.setItem(a["a"],e)}}},l={methods:{getProp:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{visible:e,disabled:!1,loading:!1}}},computed:c({permissionActions:function(){var e=this,n=this.$groupActions,t=[];if(!n.length)return{};if(this.groupCode){var i=n.find((function(n){return n.group.code===e.groupCode}));t=i&&i.actions}else t=n[0].actions;var o=this.defOptions,a={};return t&&t.forEach((function(n){var t=o[n.code];a[n.code]=t&&t.visible?Object.assign(t,n):e.mergeAction(n)})),a},actionsOptions:function(){var e=this.options,n=Object.assign({},this.defaultOptions);for(var t in e)n[t]=Object.assign({},n[t],e[t]);return n}},s({$groupActions:"groupActions"}))};n["b"]=l},"07c7":function(e,n){function t(){return!1}e.exports=t},"0b07":function(e,n,t){var i=t("34ac"),o=t("3698");function a(e,n){var t=o(e,n);return i(t)?t:void 0}e.exports=a},"0d24":function(e,n,t){(function(e){var i=t("2b3e7"),o=t("07c7"),a=n&&!n.nodeType&&n,r=a&&"object"==typeof e&&e&&!e.nodeType&&e,c=r&&r.exports===a,d=c?i.Buffer:void 0,s=d?d.isBuffer:void 0,u=s||o;e.exports=u}).call(this,t("62e4")(e))},"0ddd":function(e,n,t){"use strict";var i=t("983c"),o=t.n(i);o.a},1310:function(e,n){function t(e){return null!=e&&"object"==typeof e}e.exports=t},"1368e":function(e,n,t){var i=t("da03"),o=function(){var e=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function a(e){return!!o&&o in e}e.exports=a},"1a8c":function(e,n){function t(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}e.exports=t},"253c":function(e,n,t){var i=t("3729"),o=t("1310"),a="[object Arguments]";function r(e){return o(e)&&i(e)==a}e.exports=r},"29f3":function(e,n){var t=Object.prototype,i=t.toString;function o(e){return i.call(e)}e.exports=o},"2b3e7":function(e,n,t){var i=t("585a"),o="object"==typeof self&&self&&self.Object===Object&&self,a=i||o||Function("return this")();e.exports=a},"30c9":function(e,n,t){var i=t("9520"),o=t("b218");function a(e){return null!=e&&o(e.length)&&!i(e)}e.exports=a},"32b3":function(e,n,t){var i=t("872a"),o=t("9638"),a=Object.prototype,r=a.hasOwnProperty;function c(e,n,t){var a=e[n];r.call(e,n)&&o(a,t)&&(void 0!==t||n in e)||i(e,n,t)}e.exports=c},"34ac":function(e,n,t){var i=t("9520"),o=t("1368e"),a=t("1a8c"),r=t("dc57"),c=/[\\^$.*+?()[\]{}|]/g,d=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,l=s.toString,f=u.hasOwnProperty,m=RegExp("^"+l.call(f).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(e){if(!a(e)||o(e))return!1;var n=i(e)?m:d;return n.test(r(e))}e.exports=p},3698:function(e,n){function t(e,n){return null==e?void 0:e[n]}e.exports=t},3729:function(e,n,t){var i=t("9e69"),o=t("00fd"),a=t("29f3"),r="[object Null]",c="[object Undefined]",d=i?i.toStringTag:void 0;function s(e){return null==e?void 0===e?c:r:d&&d in Object(e)?o(e):a(e)}e.exports=s},"3b4a":function(e,n,t){var i=t("0b07"),o=function(){try{var e=i(Object,"defineProperty");return e({},"",{}),e}catch(n){}}();e.exports=o},"50d8":function(e,n){function t(e,n){var t=-1,i=Array(e);while(++t<e)i[t]=n(t);return i}e.exports=t},5129:function(e,n,t){"use strict";var i=t("8917"),o=t.n(i);o.a},"57a5":function(e,n,t){var i=t("91e9"),o=i(Object.keys,Object);e.exports=o},"585a":function(e,n,t){(function(n){var t="object"==typeof n&&n&&n.Object===Object&&n;e.exports=t}).call(this,t("c8ba"))},"5c97":function(e,n,t){},6689:function(e,n,t){"use strict";t.r(n),t.d(n,"client",(function(){return i}));var i="system"},6747:function(e,n){var t=Array.isArray;e.exports=t},"6fcd":function(e,n,t){var i=t("50d8"),o=t("d370"),a=t("6747"),r=t("0d24"),c=t("c098"),d=t("73ac"),s=Object.prototype,u=s.hasOwnProperty;function l(e,n){var t=a(e),s=!t&&o(e),l=!t&&!s&&r(e),f=!t&&!s&&!l&&d(e),m=t||s||l||f,p=m?i(e.length,String):[],v=p.length;for(var b in e)!n&&!u.call(e,b)||m&&("length"==b||l&&("offset"==b||"parent"==b)||f&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||c(b,v))||p.push(b);return p}e.exports=l},"73ac":function(e,n,t){var i=t("743f"),o=t("b047"),a=t("99d3"),r=a&&a.isTypedArray,c=r?o(r):i;e.exports=c},"743f":function(e,n,t){var i=t("3729"),o=t("b218"),a=t("1310"),r="[object Arguments]",c="[object Array]",d="[object Boolean]",s="[object Date]",u="[object Error]",l="[object Function]",f="[object Map]",m="[object Number]",p="[object Object]",v="[object RegExp]",b="[object Set]",k="[object String]",h="[object WeakMap]",g="[object ArrayBuffer]",y="[object DataView]",N="[object Float32Array]",w="[object Float64Array]",S="[object Int8Array]",j="[object Int16Array]",x="[object Int32Array]",O="[object Uint8Array]",A="[object Uint8ClampedArray]",$="[object Uint16Array]",E="[object Uint32Array]",_={};function D(e){return a(e)&&o(e.length)&&!!_[i(e)]}_[N]=_[w]=_[S]=_[j]=_[x]=_[O]=_[A]=_[$]=_[E]=!0,_[r]=_[c]=_[g]=_[d]=_[y]=_[s]=_[u]=_[l]=_[f]=_[m]=_[p]=_[v]=_[b]=_[k]=_[h]=!1,e.exports=D},7638:function(e,n,t){"use strict";t.d(n,"h",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"g",(function(){return a})),t.d(n,"i",(function(){return r})),t.d(n,"a",(function(){return c})),t.d(n,"f",(function(){return d})),t.d(n,"e",(function(){return s})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return l}));var i="SECTOR_TYPE",o="Inv",a="PRINTER",r={edit:"edit",add:"add"},c={name:100,enterprise:2,site:2,area:4,sector:4,location:6,workCenter:20,workStation:20},d={area:"area",sector:"sector",location:"location"},s={Enterprise:"Enterprise",Site:"Site",Area:"Area",Sector:"Sector",Location:"Location",WorkCenter:"WorkCenter",WorkStation:"WorkStation",Device:"Device",AppCodeRule:"AppCodeRule",CodeInfo:"CodeInfo",UserGroup:"UserGroup",SignatureRule:"SignatureRule",MFGInstruction:"MFGInstruction"},u="XX[YYYY][MM][####]",l="MAX"},"7d9e":function(e,n,t){"use strict";var i=t("5c97"),o=t.n(i);o.a},"7f3a":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SignatureGroupWhereUniqueInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteSignatureGroup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:137}};t.loc.source={body:"mutation($where: SignatureGroupWhereUniqueInput!) {\r\n  deleteSignatureGroup(where: $where) {\r\n    id\r\n    name\r\n    description\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,n)})),e.definitions&&e.definitions.forEach((function(e){i(e,n)}))}var o={};(function(){t.definitions.forEach((function(e){if(e.name){var n=new Set;i(e,n),o[e.name.value]=n}}))})(),e.exports=t},"872a":function(e,n,t){var i=t("3b4a");function o(e,n,t){"__proto__"==n&&i?i(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}e.exports=o},8917:function(e,n,t){},"8eac":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Modal",{ref:"modal",attrs:{closable:!1,"mask-closable":!1,width:e.modalWidth},model:{value:e.visible,callback:function(n){e.visible=n},expression:"visible"}},[t("p",{attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:e.icon}}),t("span",[e._v(e._s(e.title))])],1),e._t("default"),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{disabled:e.loading},on:{click:e.cancelEvent}},[e._v("\n      "+e._s(e.canceltext)+"\n    ")]),e.isOk?t("Button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.okEvent}},[e._v(e._s(e.$t("common.buttons.ok")))]):e._e()],1)],2)},o=[],a=(t("c5f6"),{name:"edit-modal",props:{value:{type:Boolean,default:!1},isAdding:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},modalWidth:{type:Number,default:520},subtitle:{type:String,default:""},isOk:{type:Boolean,default:!0},subIcon:{type:String,default:""},subCanceltext:{type:String,default:""}},data:function(){return{icon:this.subIcon||"md-create",title:this.subtitle||this.$t("common.actions.edit"),visible:this.value,editing:!this.isAdding,canceltext:this.subCanceltext||this.$t("common.buttons.cancel")}},methods:{cancelEvent:function(){this.$emit("cancel")},okEvent:function(){this.$emit("ok")},open:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.editing=e,this.icon=!0===e?"md-create":"md-add",this.title=this.subtitle?this.subtitle:!0===e?this.$t("common.actions.edit")+this.subtitle:this.$t("common.actions.add")+this.subtitle,this.visible=!0},close:function(){this.visible=!1,this.icon="md-create",this.title=this.$t("common.actions.edit"),this.editing=!1},scrollTop:function(){var e=this.$refs.modal.$el,n=e.getElementsByClassName("ivu-modal-body");if(n&&n.length>0){var t=n[0];t&&t.scroll&&this.$nextTick((function(){return t.scroll(0,0)}))}}},watch:{value:function(e){this.visible=e,this.title=this.subtitle},visible:function(e){!0===e&&this.scrollTop()},subtitle:function(e){this.title=e}}}),r=a,c=(t("7d9e"),t("2877")),d=Object(c["a"])(r,i,o,!1,null,"0f32854a",null),s=d.exports;n["a"]=s},"8eeb":function(e,n,t){var i=t("32b3"),o=t("872a");function a(e,n,t,a){var r=!t;t||(t={});var c=-1,d=n.length;while(++c<d){var s=n[c],u=a?a(t[s],e[s],s,t,e):void 0;void 0===u&&(u=e[s]),r?o(t,s,u):i(t,s,u)}return t}e.exports=a},"91e9":function(e,n){function t(e,n){return function(t){return e(n(t))}}e.exports=t},9520:function(e,n,t){var i=t("3729"),o=t("1a8c"),a="[object AsyncFunction]",r="[object Function]",c="[object GeneratorFunction]",d="[object Proxy]";function s(e){if(!o(e))return!1;var n=i(e);return n==r||n==c||n==a||n==d}e.exports=s},9638:function(e,n){function t(e,n){return e===n||e!==e&&n!==n}e.exports=t},"983c":function(e,n,t){},"99d3":function(e,n,t){(function(e){var i=t("585a"),o=n&&!n.nodeType&&n,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,r=a&&a.exports===o,c=r&&i.process,d=function(){try{var e=a&&a.require&&a.require("util").types;return e||c&&c.binding&&c.binding("util")}catch(n){}}();e.exports=d}).call(this,t("62e4")(e))},"9bc3":function(e,n,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SignatureGroupWhereUniqueInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"create"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SignatureGroupCreateInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"update"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SignatureGroupUpdateInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"node"},name:{kind:"Name",value:"upsertSignatureGroup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}},{kind:"Argument",name:{kind:"Name",value:"create"},value:{kind:"Variable",name:{kind:"Name",value:"create"}}},{kind:"Argument",name:{kind:"Name",value:"update"},value:{kind:"Variable",name:{kind:"Name",value:"update"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"fields"},directives:[]}]}}]}}],loc:{start:0,end:270}};i.loc.source={body:"#import './_fragment.gql'\r\n\r\nmutation(\r\n  $where: SignatureGroupWhereUniqueInput!\r\n  $create: SignatureGroupCreateInput!\r\n  $update: SignatureGroupUpdateInput!\r\n) {\r\n  node: upsertSignatureGroup(where: $where, create: $create, update: $update) {\r\n    ...fields\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function a(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!o[n]&&(o[n]=!0,!0)}))}function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}i.definitions=i.definitions.concat(a(t("e223").definitions));var c={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),c[e.name.value]=n}}))})(),e.exports=i},"9e69":function(e,n,t){var i=t("2b3e7"),o=i.Symbol;e.exports=o},a250:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Card",{staticClass:"flex-panel",attrs:{border:e.border,"dis-hover":e.disHover,icon:e.icon,padding:0,shadow:e.shadow,title:e.title}},[e.hideHeader?e._e():e._t("title",null,{slot:"title"}),e.hideHeader?e._e():e._t("extra",null,{slot:"extra"}),t("div",{staticClass:"flex-panel-body",style:{padding:e.padding+"px"}},[e._t("default")],2),e.hideFooter?e._e():t("div",{staticClass:"flex-panel-footer"},[e._t("footer")],2)],2)},o=[],a=(t("c5f6"),{name:"flex-panel",props:{border:{type:Boolean,default:!0},disHover:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},padding:{type:Number,default:16},icon:{type:String,default:""},title:{type:String,default:""},hideFooter:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1}}}),r=a,c=(t("5129"),t("2877")),d=Object(c["a"])(r,i,o,!1,null,"7989b626",null),s=d.exports;n["a"]=s},b047:function(e,n){function t(e){return function(n){return e(n)}}e.exports=t},b218:function(e,n){var t=9007199254740991;function i(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t}e.exports=i},b752:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var i={add:{icon:"md-add"},edit:{icon:"md-create"},copy:{},remove:{icon:"md-remove"},refresh:{icon:"md-refresh"},upCopy:{},export:{icon:"md-cloud-download"},print:{icon:"md-print"},upload:{icon:"ios-clund-upload-outline"},download:{icon:"ios-clund-download-outline"},expandAll:{icon:"ios-arrow-dropdown"},collapsedAll:{icon:"ios-arrow-dropup"},checkedAll:{icon:"ios-checkbox-outline"},uncheckedAll:{icon:"ios-square-outline"},start:{icon:"md-play"},stop:{icon:"md-square"},finish:{icon:"md-done-all"},pause:{icon:"md-pause"},goon:{icon:"md-play"},forward:{icon:"md-skip-forward"},backward:{icon:"md-skip-backward"},move:{icon:"md-move"},redo:{icon:"md-redo"},undo:{icon:"md-undo"},reset:{icon:"md-ionic"},import:{icon:"md-cloud-upload"},resetPassword:{},lock:{},upgrade:{icon:"md-arrow-back"},degrade:{icon:"md-arrow-forward"},downward:{icon:"md-arrow-down"},upward:{icon:"md-arrow-up"},design:{}},o=[{code:"add",i18N:"common.actions.add"},{code:"edit",i18N:"common.actions.edit"},{code:"associate",i18N:"common.actions.associate"},{code:"tag",i18N:"common.actions.tag"},{code:"copy",i18N:"common.actions.copy"},{code:"remove",i18N:"common.actions.remove"},{code:"refresh",i18N:"common.actions.refresh"},{code:"upCopy",i18N:"common.actions.upCopy"},{code:"export",i18N:"common.actions.export"},{code:"print",i18N:"common.actions.print"},{code:"upload",i18N:"common.actions.upload"},{code:"download",i18N:"common.actions.download"},{code:"expandAll",i18N:"common.actions.expandAll"},{code:"collapsedAll",i18N:"common.actions.collapsedAll"},{code:"checkedAll",i18N:"common.actions.checkedAll"},{code:"uncheckedAll",i18N:"common.actions.uncheckedAll"},{code:"start",i18N:"common.actions.start"},{code:"stop",i18N:"common.actions.stop"},{code:"finish",i18N:"common.actions.finish"},{code:"pause",i18N:"common.actions.pause"},{code:"forward",i18N:"common.actions.forward"},{code:"backward",i18N:"common.actions.backward"},{code:"move",i18N:"common.actions.move"},{code:"redo",i18N:"common.actions.redo"},{code:"undo",i18N:"common.actions.undo"},{code:"reset",i18N:"common.actions.reset"},{code:"commit",i18N:"common.actions.commit"},{code:"allow",i18N:"common.actions.allow"},{code:"withdraw",i18N:"common.actions.withdraw"},{code:"Verification",i18N:"common.actions.Verification"},{code:"cancelVerification",i18N:"common.actions.cancelVerification"},{code:"loseEfficacy",i18N:"common.actions.loseEfficacy"},{code:"takeEfficacy",i18N:"common.actions.takeEfficacy"},{code:"correct",i18N:"common.actions.correct"},{code:"release",i18N:"common.actions.release"},{code:"cancel",i18N:"common.actions.cancel"},{code:"termination",i18N:"common.actions.termination"},{code:"close",i18N:"common.actions.close"},{code:"Printing",i18N:"common.actions.Printing"},{code:"save",i18N:"common.actions.save"},{code:"import",i18N:"common.actions.import"},{code:"resetPassword",i18N:"common.actions.resetPassword"},{code:"lock",i18N:"common.actions.lock",confirm:!0,confrimTip:"common.messages.lockConfirm"},{code:"unLock",i18N:"common.actions.unlock",confirm:!0,confrimTip:"common.messages.unLockConfirm"},{code:"upgrade",i18N:"common.actions.upgrade"},{code:"degrade",i18N:"common.actions.degrade"},{code:"downward",i18N:"common.actions.downward"},{code:"upward",i18N:"common.actions.upward"},{code:"design",i18N:"common.actions.design"},{code:"invertSelection",i18N:"common.actions.invertSelection"},{code:"searchBtn",i18N:"common.actions.searchBtn"},{code:"execute",i18N:"common.actions.execute"},{code:"search",i18N:"common.actions.search"},{code:"loadMore",i18N:"common.actions.loadMore"},{code:"see",i18N:"common.actions.see"},{code:"equipment",i18N:"common.actions.equipment"},{code:"detail",i18N:"common.actions.detail"},{code:"signatureConfig",i18N:"common.actions.signatureConfig"}]},c098:function(e,n){var t=9007199254740991,i=/^(?:0|[1-9]\d*)$/;function o(e,n){var o=typeof e;return n=null==n?t:n,!!n&&("number"==o||"symbol"!=o&&i.test(e))&&e>-1&&e%1==0&&e<n}e.exports=o},c3cc:function(e,n,t){"use strict";var i=t("f6a5"),o=t.n(i);t.d(n,"c",(function(){return o.a}));var a=t("7f3a"),r=t.n(a);t.d(n,"a",(function(){return r.a}));var c=t("9bc3"),d=t.n(c);t.d(n,"b",(function(){return d.a}))},d370:function(e,n,t){var i=t("253c"),o=t("1310"),a=Object.prototype,r=a.hasOwnProperty,c=a.propertyIsEnumerable,d=i(function(){return arguments}())?i:function(e){return o(e)&&r.call(e,"callee")&&!c.call(e,"callee")};e.exports=d},da03:function(e,n,t){var i=t("2b3e7"),o=i["__core-js_shared__"];e.exports=o},dc57:function(e,n){var t=Function.prototype,i=t.toString;function o(e){if(null!=e){try{return i.call(e)}catch(n){}try{return e+""}catch(n){}}return""}e.exports=o},e223:function(e,n){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"fields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SignatureGroup"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]}]}}],loc:{start:0,end:105}};t.loc.source={body:"fragment fields on SignatureGroup {\r\n    id\r\n    name\r\n    description\r\n    createdAt\r\n    updatedAt\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=t},eac5:function(e,n){var t=Object.prototype;function i(e){var n=e&&e.constructor,i="function"==typeof n&&n.prototype||t;return e===i}e.exports=i},ec69:function(e,n,t){var i=t("6fcd"),o=t("03dd"),a=t("30c9");function r(e){return a(e)?i(e):o(e)}e.exports=r},f6a5:function(e,n,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"100"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"skip"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"0"},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"signatureGroups"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"skip"},value:{kind:"Variable",name:{kind:"Name",value:"skip"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"fields"},directives:[]},{kind:"Field",name:{kind:"Name",value:"rules"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:187}};i.loc.source={body:"#import './_fragment.gql'\r\n\r\nquery($first: Int = 100, $skip: Int = 0) {\r\n  signatureGroups(first: $first, skip: $skip) {\r\n    ...fields\r\n    rules {\r\n      id\r\n      name\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function a(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!o[n]&&(o[n]=!0,!0)}))}function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}i.definitions=i.definitions.concat(a(t("e223").definitions));var c={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),c[e.name.value]=n}}))})(),e.exports=i},f88e:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"actions-mini"},[e._l(e.permissionActions,(function(n){return t("ActionButton",e._g({key:n.code,attrs:{action:n}},e.$listeners))})),e._t("default")],2)},o=[],a=(t("ac6a"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.action.confirm?t("Poptip",{attrs:{"cancel-text":e.$t("common.buttons.cancel"),"ok-text":e.$t("common.buttons.ok"),title:e.$t(e.action.confrimTip),confirm:""},on:{"on-ok":function(n){return e.fireEvent(e.action.code,e.action.id)}}},[t("Tooltip",{attrs:{content:e.$t(e.action.i18N)}},[t("Button",{attrs:{disabled:e.action.disabled,icon:e.action.icon,loading:e.action.loading,size:"small"}})],1)],1):t("Tooltip",{attrs:{content:e.$t(e.action.i18N)}},[t("Button",{attrs:{disabled:e.action.disabled,icon:e.action.icon,loading:e.action.loading,size:"small"},on:{click:function(n){return e.fireEvent(e.action.code,e.action.id)}}})],1)}),r=[],c=t("0463"),d={props:{action:{type:Object,required:!0}},mixins:[c["a"]]},s=d,u=t("2877"),l=Object(u["a"])(s,a,r,!1,null,null,null),f=l.exports,m=t("b752"),p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{visible:e,disabled:!1,loading:!1}},v={add:{visible:!0},edit:{visible:!0},remove:{visible:!0,confirm:!0,confrimTip:"common.messages.deleteConfirm"},refresh:{visible:!0}},b={name:"actions-mini",mixins:[c["b"]],components:{ActionButton:f},props:{groupCode:{type:String},options:{type:Object,default:function(){return{}}}},data:function(){return{defaultOptions:this.getOptions()}},methods:{mergeAction:function(e){var n=e.code;return Object.assign({},this.getProp(),v[n],m["b"][n],e)},getOptions:function(){var e=m["a"].map((function(e){return Object.assign(p(),e)})),n={};return e.forEach((function(e){n[e.code]=Object.assign({},e,v[e.code],m["b"][e.code])})),n}},computed:{defOptions:function(){var e=this.options,n=Object.assign({},e);for(var t in n)n[t]=Object.assign({},this.getProp(),v[t],m["b"][t],n[t]);return n}}},k=b,h=(t("0ddd"),Object(u["a"])(k,i,o,!1,null,"7e1afda0",null)),g=h.exports;n["a"]=g}}]);