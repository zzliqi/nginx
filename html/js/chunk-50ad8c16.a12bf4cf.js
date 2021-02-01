(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50ad8c16"],{"1c25":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NamedType",name:{kind:"Name",value:"MaterialWhereInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderBy"}},type:{kind:"NamedType",name:{kind:"Name",value:"MaterialOrderByInput"}},defaultValue:{kind:"EnumValue",value:"updatedAt_DESC"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"100"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"skip"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"0"},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"list"},name:{kind:"Name",value:"materials"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}},{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"skip"},value:{kind:"Variable",name:{kind:"Name",value:"skip"}}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"Variable",name:{kind:"Name",value:"orderBy"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sampleRule"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"hazardPreventions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"total"},name:{kind:"Name",value:"materialsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:472}};i.loc.source={body:"query(\r\n  $where: MaterialWhereInput\r\n  $orderBy: MaterialOrderByInput = updatedAt_DESC\r\n  $first: Int = 100\r\n  $skip: Int = 0\r\n) {\r\n  list: materials(\r\n    where: $where\r\n    first: $first\r\n    skip: $skip\r\n    orderBy: $orderBy\r\n  ) {\r\n    id\r\n    code\r\n    sampleRule {\r\n      id\r\n    }\r\n    hazardPreventions {\r\n      id\r\n    }\r\n  }\r\n  total: materialsConnection(where: $where) {\r\n    aggregate {\r\n      count\r\n    }\r\n    pageInfo {\r\n      hasNextPage\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var t={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),t[e.name.value]=n}}))})(),e.exports=i},"5ff8":function(e,n,i){"use strict";i.r(n);var a=i("2909"),t=(i("96cf"),i("1da1")),r=i("b893"),d=i("1c25"),u=i.n(d),l=i("79a9"),s=i.n(l),o=i("3569");function c(){return m.apply(this,arguments)}function m(){return m=Object(t["a"])(regeneratorRuntime.mark((function e(){var n,i,a,t,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:{},i=r.length>1?r[1]:void 0,a=r.length>2?r[2]:void 0,t=r.length>3&&void 0!==r[3]?r[3]:0,e.next=6,Object(o["b"])(u.a,n,i,a,t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(){return k.apply(this,arguments)}function k(){return k=Object(t["a"])(regeneratorRuntime.mark((function e(){var n,i,a,t,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:{},i=r.length>1?r[1]:void 0,a=r.length>2?r[2]:void 0,t=r.length>3&&void 0!==r[3]?r[3]:0,e.next=6,Object(o["b"])(s.a,n,i,a,t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}var f=i("2742"),p=i("9d26"),h=i.n(p),b=i("7b36"),N=i.n(b);function g(e,n){return y.apply(this,arguments)}function y(){return y=Object(t["a"])(regeneratorRuntime.mark((function e(n,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["a"])(h.a,n,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function S(e,n){return w.apply(this,arguments)}function w(){return w=Object(t["a"])(regeneratorRuntime.mark((function e(n,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["a"])(N.a,n,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var V=i("f121"),D=i("1693"),O={methods:{materialTransfer:function(){var e=Object(t["a"])(regeneratorRuntime.mark((function e(n){var i,a,t,d,u,l,s,o,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=n.archiveObj,a=n.day,t=0,d=0,u=Object(r["c"])(a),l={updatedAt_lte:u},this.showPercentStatus(i),e.next=7,Object(r["f"])(c,Object.assign(l,{status:V["o"].O}));case 7:if(s=e.sent,o=s.map((function(e){return e.code})),!o.length){e.next=19;break}return e.next=12,this.delMaterial(o);case 12:return m=e.sent,t=m.result&&m.result.count?m.result.count:0,e.next=16,this.queryAndDelHazardPreventions(s);case 16:return d=e.sent,e.next=19,Object(D["b"])();case 19:return clearInterval(this.timer),i.percent=100,e.abrupt("return",t+d);case 22:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}(),delMaterial:function(){var e=Object(t["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g({code_in:n},V["w"]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),queryAndDelHazardPreventions:function(){var e=Object(t["a"])(regeneratorRuntime.mark((function e(n){var i,t,d,u,l,s,o,c,m,k,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i=[],t=n.length,d=0,u=0;u<t;u++)l=n[u],s=l.hazardPreventions,i.push.apply(i,Object(a["a"])(s));return o=i.map((function(e){return e.id})),e.next=5,Object(r["f"])(v,{id_in:o});case 5:if(c=e.sent,m=c.filter((function(e){return!e.materials.length})),k=m.map((function(e){return e.code})),!k.length){e.next=13;break}return e.next=11,this.delHazardPreventions(k);case 11:f=e.sent,d=f.result&&f.result.count?f.result.count:0;case 13:return e.abrupt("return",d);case 14:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}(),delHazardPreventions:function(){var e=Object(t["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({code_in:n},V["w"]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()}};n["default"]=O},"79a9":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NamedType",name:{kind:"Name",value:"HazardPreventionWhereInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderBy"}},type:{kind:"NamedType",name:{kind:"Name",value:"HazardPreventionOrderByInput"}},defaultValue:{kind:"EnumValue",value:"updatedAt_DESC"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"100"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"skip"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"0"},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"list"},name:{kind:"Name",value:"hazardPreventions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}},{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"skip"},value:{kind:"Variable",name:{kind:"Name",value:"skip"}}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"Variable",name:{kind:"Name",value:"orderBy"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"materials"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"total"},name:{kind:"Name",value:"hazardPreventionsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:461}};i.loc.source={body:"query(\r\n  $where: HazardPreventionWhereInput\r\n  $orderBy: HazardPreventionOrderByInput = updatedAt_DESC\r\n  $first: Int = 100\r\n  $skip: Int = 0\r\n) {\r\n  list: hazardPreventions(\r\n    where: $where\r\n    first: $first\r\n    skip: $skip\r\n    orderBy: $orderBy\r\n  ) {\r\n    id\r\n    code\r\n    materials {\r\n      id\r\n    }\r\n  }\r\n  total: hazardPreventionsConnection(where: $where) {\r\n    aggregate {\r\n      count\r\n    }\r\n    pageInfo {\r\n      hasNextPage\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var t={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),t[e.name.value]=n}}))})(),e.exports=i},"7b36":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NamedType",name:{kind:"Name",value:"HazardPreventionWhereInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"result"},name:{kind:"Name",value:"deleteManyHazardPreventions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:123}};i.loc.source={body:"mutation($where: HazardPreventionWhereInput) {\r\n  result: deleteManyHazardPreventions(where: $where) {\r\n    count\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var t={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),t[e.name.value]=n}}))})(),e.exports=i},"9d26":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NamedType",name:{kind:"Name",value:"MaterialWhereInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"result"},name:{kind:"Name",value:"deleteManyMaterials"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107}};i.loc.source={body:"mutation($where: MaterialWhereInput) {\r\n  result: deleteManyMaterials(where: $where) {\r\n    count\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var t={};(function(){i.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),t[e.name.value]=n}}))})(),e.exports=i}}]);