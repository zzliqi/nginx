(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab4f12f8"],{"121f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("one-tabel",{staticClass:"one-tabel"},[a("actions",{staticClass:"actions",attrs:{slot:"header",options:e.actionsOptions},on:{add:function(t){return e.openEditModal("add")},edit:function(t){return e.openEditModal("edit")},remove:e.remove},slot:"header"}),a("div",{staticClass:"data-table"},[a("ag-grid",{staticClass:"ag-theme-material",staticStyle:{width:"100%",height:"100%"},attrs:{gridOptions:e.gridOptions,modules:e.modules}})],1),a("edit-modal",{ref:"editModalVueComponent",attrs:{loading:e.editModal.loading},on:{cancel:e.cancelEditModal,ok:e.confirmEditModal}},[a("Form",{ref:"editModalFormVueComponent",attrs:{"label-width":80,model:e.editModal.data,rules:e.editModal.rules}},[a("FormItem",{attrs:{label:e.$t("common.labels.name"),prop:"code"}},[a("Select",{attrs:{disabled:"edit"==e.modalConfirmActionType},on:{"on-change":e.handleCodeChange},model:{value:e.editModal.data.code,callback:function(t){e.$set(e.editModal.data,"code",t)},expression:"editModal.data.code"}},e._l(e.applicationResourceEnum,(function(e){return a("Option",{key:e.code,attrs:{disabled:e.disabled,label:e.description,value:e.code}})})),1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:""!=e.editModal.data.type,expression:"editModal.data.type != ''"}],attrs:{label:e.$t("common.labels.type"),prop:"type"}},[e._v(e._s(e.editModal.data.type))]),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"FILE"==e.editModal.data.type,expression:"editModal.data.type == 'FILE'"}],attrs:{label:e.$t("common.actions.upload")}},[a("Upload",{attrs:{action:e.uploadUrl,"before-upload":e.beforeUpload,"max-size":1024,"on-exceeded-size":e.handleExceedSize,"on-progress":e.handleUploadProgress,"on-success":e.uploadSuccess,"show-upload-list":!1,accept:".jpg, .jpeg, .gif, .png, .ico","with-credentials":""}},[a("Button",{attrs:{loading:e.uploadDisabled,icon:"ios-cloud-upload-outline"}},[e._v("上传图片")]),a("span",{staticClass:"file-tips"})],1),a("Alert",{staticStyle:{"margin-top":"12px"},attrs:{"show-icon":"",type:"info"}},[e._v("\n          提示：\n          "),a("template",{slot:"desc"},[a("p",[e._v("1.文件最大支持1M，格式支持.jpeg,.jpg,.png,.gif,.ico,文件名若包含空格等其它字符可能会无法显示")]),a("p",[e._v("2.网页小图标文件格式必须是.ico，文件名称必须是favicon")]),a("p",[e._v("\n              3.ico文件由于其特殊性，部分网站制作的ico文件并不被浏览器支持，我们推荐\n              "),a("a",{attrs:{href:"https://realfavicongenerator.net/",target:"_blank"}},[e._v("realfavicongenerator")])])])],2)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"FILE"==e.editModal.data.type,expression:"editModal.data.type == 'FILE'"}],attrs:{label:e.$t("common.labels.info"),prop:"info"}},[a("p",[e._v(e._s(e.editModal.data.info))]),e.editModal.data.info.length>0&&"FILE"==e.editModal.data.type?a("p",[a("a",{attrs:{href:e.imageUrlPrefix+e.editModal.data.info.substring(1),target:"_blank"}},[a("img",{staticClass:"image",attrs:{src:e.imageUrlPrefix+e.editModal.data.info.substring(1)+"?timestamp="+e.timestamp}})])]):e._e()]),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"TEXT"==e.editModal.data.type,expression:"editModal.data.type == 'TEXT'"}],attrs:{label:e.$t("common.labels.info"),prop:"info"}},[e.isTextarea?a("Input",{attrs:{rows:5,type:"textarea"},model:{value:e.editModal.data.info,callback:function(t){e.$set(e.editModal.data,"info",t)},expression:"editModal.data.info"}}):a("Input",{model:{value:e.editModal.data.info,callback:function(t){e.$set(e.editModal.data,"info",t)},expression:"editModal.data.info"}})],1)],1)],1)],1)},o=[],n=(a("6762"),a("2fdb"),a("28a5"),a("ac6a"),a("96cf"),a("1da1")),r=(a("4917"),a("7f7f"),a("3b2b"),a("7514"),a("53ca")),s=a("23f4"),d=a("9b95"),l=a("9974b"),c=a("e7f7"),u=a("db25"),p=a("3595"),m=a("cdde"),h=a("8eac"),f=a("a434"),g=a("b441"),b=a("5db7"),v={name:"application-resource-manager",components:{oneTabel:s["b"],actions:d["a"],editModal:h["a"]},mixins:[c["a"],u["a"]],data:function(){var e=this,t=this,a=30,i=5e3,o=function(o,n,r){a=e.isTextarea?i:a,""===n.trim()?r(new Error(t.$t("common.rules.plsInputOrUpload"))):("TEXT"===t.editModal.data.type&&n.trim().length>a&&r(new Error(t.$t("common.rules.limitLength",{max:a}))),r())};return{textareaTypeCode:["copyrightActivationCode"],applicationResourceEnum:f["DEFAULT_APPLICATION_RESOURCE_ENUM"],imageUrlPrefix:g["VUE_APP_FILES_ROOT"],uploadUrl:g["VUE_APP_FILES_ROOT"]+"upload/appresource",timestamp:(new Date).getTime(),imgPreviewSrc:"",uploadDisabled:!1,modules:l["a"],gridOptions:this.$_.assign(this.$agGetDefaultGridOptions(),{onGridReady:t.onGridReady,onSelectionChanged:t.onSelectionChanged,pagination:!0,columnDefs:[{type:["rowNumberColumn"]},{headerName:this.$t("common.labels.code"),field:"code",sort:"asc"},{headerName:this.$t("common.labels.type"),field:"type"},{headerName:this.$t("common.labels.info"),field:"info"},{headerName:this.$t("common.labels.createdAt"),field:"createdAt",cellRendererFramework:p["a"],filter:"agDateColumnFilter",width:200},{headerName:this.$t("common.labels.updatedAt"),cellRendererFramework:p["a"],field:"updatedAt",filter:"agDateColumnFilter",width:200},{headerName:this.$t("common.labels.description"),field:"description",filter:"agTextColumnFilter"}]}),gridApi:null,columnApi:null,selectedRow:null,modalConfirmActionType:"add",actionsOptions:{add:{visible:!0,disabled:!1,loading:!1},edit:{visible:!0,disabled:!0},remove:{visible:!0,disabled:!0}},editModal:{loading:!1,visible:!1,data:t.getDefaultSqlFragment(),rules:{code:[{required:!0,message:this.$t("common.rules.plsSelect"),trigger:"change"}],info:[{validator:o,trigger:"change"}]}}}},methods:{onGridReady:function(e){var t=e.api,a=e.columnApi;this.gridApi=t,this.columnApi=a,this.gridApi.sizeColumnsToFit();var i=this.createDatasource();this.gridApi.setServerSideDatasource(i)},existI18N:function(e){var t=this.$t(e);return!0===this.$te(e)&&"object"!==Object(r["a"])(t)},cancelEditModal:function(){this.disabledSomeAction(),this.$refs.editModalVueComponent.close(),this.$refs.editModalFormVueComponent.resetFields(),this.gridApi.deselectAll(),this.uploadDisabled=!1},getDefaultSqlFragment:function(){return{code:"",info:"",description:"",type:""}},handleCodeChange:function(e){if(e){var t=this.applicationResourceEnum.find((function(t){return t.code==e}));try{this.editModal.data.type=t.type,this.editModal.data.info="",this.editModal.data.description=t.description,this.editModal.data.code=e}catch(a){this.$Message.error(this.$t("common.messages.empty"))}}},handleUploadProgress:function(){},handleExceedSize:function(){this.uploadDisabled=!1,this.$Message.error(this.$t("common.messages.fileExceedSize"))},beforeUpload:function(e){var t=new RegExp(/.jpg|.jpeg|.gif|.png|.ico/i),a=e.name.substring(e.name.lastIndexOf("."));return a.match(t)?(this.uploadDisabled=!0,!0):(this.$Message.error(this.$t("common.messages.errorFileType")),this.uploadDisabled=!1,!1)},uploadSuccess:function(e,t,a){var i=this,o=e.data,r=e.error,s=e.code;if(o&&o[0].url)return this.editModal.data.info=o[0].url,this.uploadDisabled=!1,void(this.timestamp=(new Date).getTime());r&&(s&&"EXISTSFILE"===s||"DUPLICATENAME"===s?this.$Modal.confirm({title:this.$t("common.messages.tips"),content:this.$t("common.messages.fileExistAndWantToDelete"),loading:!0,onOk:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.deleteFile(t.name);case 3:e.sent,i.$Message.info(i.$t("common.messages.removeSuccess")),i.$Modal.remove(),i.editModal.data.info="",e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),i.$Message.error(i.$t("common.messages.removeFailure"));case 12:return e.prev=12,i.uploadDisabled=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));function a(){return e.apply(this,arguments)}return a}(),onCancel:function(){i.uploadDisabled=!1}}):(this.$Message.error(r),this.uploadDisabled=!1))},uploadError:function(e,t,a){this.$Message.error(e),this.uploadDisabled=!1},enabledSomeAction:function(){this.actionsOptions.remove.disabled=!1,this.actionsOptions.edit.disabled=!1},disabledSomeAction:function(){this.actionsOptions.remove.disabled=!0,this.actionsOptions.edit.disabled=!0},deleteFile:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["a"])({url:"".concat(this.uploadUrl,"/").concat(t),baseURL:"",method:"DELETE"});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkPostDataValide:function(){return""!=this.editModal.data.code.trim()&&""!=this.editModal.data.info.trim()},confirmEditModal:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,i,o,n,r,s,d,l,c,u,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.editModalFormVueComponent.validate();case 2:if(t=e.sent,a=this.checkPostDataValide(),t&&a){e.next=8;break}return this.editModal.loading=!1,this.$Message.error(this.$t("common.rules.validateFailure")),e.abrupt("return");case 8:return this.editModal.loading=!0,i=this.editModal.data,"add"==this.modalConfirmActionType&&(o={data:i},n=m["a"],r="createdAt"),"edit"==this.modalConfirmActionType&&(s=i.code,d=i.type,l=i.info,c=i.description,o={data:{code:s,type:d,info:l,description:c}},n=m["d"],u={id:i.id},o.where=u,r="updatedAt"),e.prev=12,e.next=15,this.callGraphQlMution(n,o,"system");case 15:p=e.sent,p.data.createAppResource||p.data.updateAppResource,this.$Message.success(this.$t("common.messages.saveSuccess")),this.gridApi.setSortModel([{colId:r,sort:"desc"}]),e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](12),this.$Message.error(this.$t("common.messages.saveFailure"));case 24:return e.prev=24,this.disabledSomeAction(),this.$refs.editModalVueComponent.close(),this.$refs.editModalFormVueComponent.resetFields(),this.gridApi.deselectAll(),this.editModal.data=this.getDefaultSqlFragment(),e.finish(24);case 31:case"end":return e.stop()}}),e,this,[[12,21,24,31]])})));function t(){return e.apply(this,arguments)}return t}(),openEditModal:function(e){var t=!1,a=this;if(this.applicationResourceEnum.every((function(e){return e.disabled=!1,!0})),"add"==e){this.editModal.data=this.getDefaultSqlFragment();var i=this.gridApi.getRenderedNodes();i.forEach((function(e){var t=e.data,i=t.code;a.applicationResourceEnum.find((function(e){e.code===i&&(e.disabled=!0)}))}))}"edit"==e&&(this.editModal.data=Object.assign({},this.selectedRow),t=!0),this.timestamp=(new Date).getTime(),this.modalConfirmActionType=e,this.$refs.editModalVueComponent.open(t),this.editModal.loading=!1},remove:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,i,o,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.selectedRow,a=t.id,t.code,i=t.type,o=t.info,n={where:{id:a}},r=m["b"],e.prev=3,e.next=6,this.callGraphQlMution(r,n,"system");case 6:if(s=e.sent,s.data.deleteAppResource,this.$Message.success(this.$t("common.messages.removeSuccess")),"FILE"!=i){e.next=12;break}return e.next=12,this.deleteFile(o.split("/").pop());case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](3),this.$Message.error(this.$t("common.messages.removeFailure"));case 17:return e.prev=17,this.disabledSomeAction(),this.gridApi.deselectAll(),this.gridApi.purgeServerSideCache(),e.finish(17);case 22:case"end":return e.stop()}}),e,this,[[3,14,17,22]])})));function t(){return e.apply(this,arguments)}return t}(),onSelectionChanged:function(e){e.type;var t=e.api,a=(e.columnApi,t.getSelectedRows());a.length>0&&(this.selectedRow=a[0],this.enabledSomeAction())},callGraphQlMution:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a,i){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$apollo.mutate({mutation:t,variables:a,path:i});case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e,this)})));function t(t,a,i){return e.apply(this,arguments)}return t}(),queryAllData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a,i){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$apollo.query({query:t,variables:a,client:i});case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e,this)})));function t(t,a,i){return e.apply(this,arguments)}return t}(),createDatasource:function(){var e=this;return{getRows:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var i,o,n,r,s,d,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=a.request,o=i.startRow,n=i.endRow-i.startRow,r=e.$agGenerateOrderByFromSortModel(i.sortModel),s=e.$agGenerateWhereFromFiltersModel(i.filterModel),d={skip:o,first:n,orderBy:r,where:s},t.prev=2,t.next=5,e.queryAllData(m["c"],d,"system");case 5:l=t.sent,c=l.data,a.successCallback(c.list,c.total.aggregate.count),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),e.$Message.info(e.$t("common.messages.empty"));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));function a(e){return t.apply(this,arguments)}return a}()}}},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),computed:{isTextarea:function(){return this.textareaTypeCode.includes(this.editModal.data.code)}}},M=v,w=(a("eb94"),a("2877")),y=Object(w["a"])(M,i,o,!1,null,"408e38df",null);t["default"]=y.exports},1802:function(e,t,a){},eb94:function(e,t,a){"use strict";var i=a("1802"),o=a.n(i);o.a}}]);