(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f0ce97c"],{"02dd":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mt-3"},[e("b-breadcrumb",[e("b-breadcrumb-item",{on:{click:function(a){return t.chwd("/")}}},[e("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),t._v("Home ")],1),t._l(t.navPathArr,(function(a){return e("b-breadcrumb-item",{key:a.href,on:{click:function(e){return t.chwd(a.href)}}},[t._v(t._s(a.path))])}))],2),e("div",{staticClass:"mt-3"},[e("b-dropdown",{attrs:{text:"Options",variant:"outline-primary"}},[e("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-touch",modifiers:{"modal-touch":!0}}]},[t._v("New File")]),e("b-dropdown-item",{on:{click:function(a){return t.optBtnClick("mkdir")}}},[t._v("New Folder")]),e("b-dropdown-divider"),e("b-dropdown-item",{on:{click:function(a){return t.uploadBtnClick("upload-files")}}},[t._v("Upload File")]),e("b-dropdown-item",{on:{click:function(a){return t.uploadBtnClick("upload-folder")}}},[t._v("Upload Folder")])],1),e("b-button",{staticClass:"ml-2",on:{click:function(a){return t.updateList()}}},[t._v("Sync")]),e("b-button",{directives:[{name:"show",rawName:"v-show",value:t.nextToken,expression:"nextToken"}],staticClass:"ml-2",on:{click:function(a){return t.updateList(t.nowPath,t.nextToken)}}},[t._v("LoadNext")]),e("b-button",{directives:[{name:"show",rawName:"v-show",value:t.uploadData.uploadNow||t.uploadData.uploadQueue.length||t.uploadData.uploadSucess.length||t.uploadData.uploadFail.length,expression:"uploadData.uploadNow || uploadData.uploadQueue.length || uploadData.uploadSucess.length || uploadData.uploadFail.length"},{name:"b-modal",rawName:"v-b-modal.modal-upload",modifiers:{"modal-upload":!0}}],staticClass:"ml-2"},[t._v("Upload Status")]),e("b-button",{directives:[{name:"show",rawName:"v-show",value:"mv"===t.cmdType&&t.srcPath,expression:"('mv' === cmdType) && srcPath"}],staticClass:"ml-2",attrs:{variant:"primary",title:t.srcPath},on:{click:function(a){return t.optBtnClick("mv")}}},[t._v("Move")]),e("b-button",{directives:[{name:"show",rawName:"v-show",value:"cp"===t.cmdType&&t.srcPath,expression:"('cp' === cmdType) && srcPath"}],staticClass:"ml-2",attrs:{variant:"primary",title:t.srcPath},on:{click:function(a){return t.optBtnClick("cp")}}},[t._v("Copy")]),e("b-button",{directives:[{name:"show",rawName:"v-show",value:t.srcPath,expression:"srcPath"}],staticClass:"ml-2",attrs:{variant:"primary"},on:{click:function(a){t.srcPath=""}}},[t._v("Cancel")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.loadingbarData.show,expression:"loadingbarData.show"}]},[e("span",{staticClass:"mx-3"},[t._v(t._s(t.loadingbarData.info))]),e("b-spinner",{staticClass:"float-right",attrs:{variant:"primary",label:"Spinning"}})],1)],1),e("b-table",{staticClass:"border rounded mt-2",attrs:{hover:"",responsive:"",id:"list-table",items:t.list,fields:t.fields,busy:t.loadingData.isBusy,"primary-key":"nameFormat","head-variant":"light","per-page":t.pageData.perPage,"current-page":t.pageData.currentPage},scopedSlots:t._u([{key:"cell(nameFormat)",fn:function(a){return[e("div",{staticClass:"opt-div"},[e("b-icon",{staticClass:"opt-icon",attrs:{icon:"command",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}}),e("div",{staticClass:"opt-btns"},[e("b-button-group",{attrs:{vertical:""}},[e("b-button",{on:{click:function(e){return t.optBtnClick("rm",a.item.name)}}},[t._v("Delete")]),e("b-button",{on:{click:function(e){return t.optBtnClick("ren",a.item.name)}}},[t._v("Rename")]),e("b-button",{on:{click:function(e){return t.optBtnClick("mv_",a.item.name)}}},[t._v("Move")]),e("b-button",{on:{click:function(e){return t.optBtnClick("cp_",a.item.name)}}},[t._v("Copy")])],1)],1)],1),a.item.type?e("a",{attrs:{href:"#"},on:{click:function(e){return t.chwd(a.item.name+"/")}}},[t._v(t._s(a.item.name)+"/")]):e("span",[t._v(t._s(a.item.name))])]}},{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center text-primary my-2"},[e("b-spinner",{staticClass:"align-middle"}),e("strong",[t._v(t._s(t.loadingData.info))])],1)]},proxy:!0}])}),e("div",{staticClass:"overflow-auto",staticStyle:{display:"flex","justify-content":"flex-end"}},[e("b-pagination",{attrs:{"total-rows":t.list.length,"per-page":t.pageData.perPage,"aria-controls":"list-table"},model:{value:t.pageData.currentPage,callback:function(a){t.$set(t.pageData,"currentPage",a)},expression:"pageData.currentPage"}}),e("b-form-select",{staticClass:"mb-3 ml-2",staticStyle:{width:"100px"},attrs:{options:t.pageData.pageOptions},model:{value:t.pageData.perPage,callback:function(a){t.$set(t.pageData,"perPage",a)},expression:"pageData.perPage"}})],1),e("div",{staticClass:"fixed-bottom"},[e("b-alert",{attrs:{show:t.alertData.dismissCountDown,dismissible:"",fade:"",variant:t.alertData.type},on:{"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.alertData.info))])],1),e("b-modal",{attrs:{id:"modal-confirm",title:t.confirmData.title},on:{ok:t.confirmData.okclick}},[e("p",{staticClass:"my-4"},[t._v(t._s(t.confirmData.info))])]),e("b-modal",{attrs:{id:"modal-prompt",title:t.promptData.title},on:{show:t.resetPrompt,ok:t.handleOkPrompt}},[e("form",{ref:"form-prompt",on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.handleOkPrompt()}}},[e("b-form-group",{attrs:{state:t.promptData.state,label:t.promptData.info,"invalid-feedback":"input is invalid"}},[e("b-form-input",{attrs:{state:t.promptData.state,required:""},model:{value:t.promptData.value,callback:function(a){t.$set(t.promptData,"value",a)},expression:"promptData.value"}})],1)],1)]),e("b-modal",{attrs:{id:"modal-touch",size:"lg",title:"touch a new file"},on:{ok:function(a){return t.optBtnClick("touch")}}},[e("form",{ref:"form-touch",on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[e("b-form-group",{attrs:{label:"file name:"}},[e("b-form-input",{model:{value:t.uploadData.uploadTouch.name,callback:function(a){t.$set(t.uploadData.uploadTouch,"name",a)},expression:"uploadData.uploadTouch.name"}})],1),e("b-form-group",{attrs:{label:"file content:"}},[e("b-form-textarea",{attrs:{placeholder:"here is the file content",rows:"8","max-rows":"16"},model:{value:t.uploadData.uploadTouch.content,callback:function(a){t.$set(t.uploadData.uploadTouch,"content",a)},expression:"uploadData.uploadTouch.content"}})],1)],1)]),e("b-modal",{attrs:{id:"modal-upload",size:"lg",title:"upload status",scrollable:"","hide-footer":"","hide-header":""}},[e("div",{staticClass:"container"},[t.uploadData.uploadNow?e("div",[e("p",[t._v("now")]),t._v(" "+t._s(t.uploadData.uploadNow.file.name)+" "),e("b-progress",{attrs:{value:t.uploadData.uploadSize,max:t.uploadData.uploadNow.file.size,"show-progress":"",animated:""}})],1):t._e(),e("p",[t._v("waiting")]),t._l(t.uploadData.uploadQueue,(function(a){return e("p",{key:a},[t._v(" "+t._s(a.file.name)+" -- "+t._s(t.common.formatSize(a.file.size))+" -- "+t._s(a.path)+" ")])})),e("p",[t._v("fail")]),t._l(t.uploadData.uploadFail,(function(a){return e("p",{key:a},[t._v(" "+t._s(a.file.name)+" -- "+t._s(t.common.formatSize(a.file.size))+" -- "+t._s(a.path)+" ")])})),e("p",[t._v("success")]),t._l(t.uploadData.uploadSucess,(function(a){return e("p",{key:a},[t._v(" "+t._s(a.file.name)+" -- "+t._s(t.common.formatSize(a.file.size))+" -- "+t._s(a.path)+" ")])}))],2)]),e("input",{ref:"upload-files",staticClass:"d-none",attrs:{type:"file",multiple:""},on:{change:t.uploadOnChange}}),e("input",{ref:"upload-folder",staticClass:"d-none",attrs:{type:"file",webkitdirectory:""},on:{change:t.uploadOnChange}})],1)},n=[],i=(e("99af"),e("7db0"),e("4160"),e("baa5"),e("fb6a"),e("a434"),e("b0c0"),e("a9e3"),e("ac1f"),e("8a79"),e("1276"),e("2ca0"),e("159b"),{data:function(){return{nowPath:"/",list:[],nextToken:"",listCache:{},pageData:{currentPage:1,perPage:10,pageOptions:[{text:"10/Page",value:10},{text:"50/Page",value:50}]},srcPath:"",cmdType:"",uploadData:{uploadQueue:[],uploadSucess:[],uploadFail:[],uploadNow:null,uploadSize:0,uploadTouch:{name:"",content:""}},searchData:{text:"",parentPath:"",content:[]},loadingbarData:{show:!1,info:"default info"},loadingData:{isBusy:!1,info:"default info"},alertData:{dismissCountDown:0,type:"primary",info:"default info"},confirmData:{title:"default title",info:"default info",okclick:function(){console.log("default click")}},promptData:{title:"default title",info:"default info",okclick:function(){console.log("default click")},value:"",state:null},fields:[{key:"nameFormat",label:"Name"},{key:"time",label:"Time",formatter:this.common.formatDate},{key:"size",label:"Size",class:"text-right",formatter:this.common.formatSize}]}},created:function(){this.updateList()},methods:{chwd:function(t){t.startsWith("/")?this.updateList(t):this.updateList(this.nowPath+t)},loadNextContent:function(t){console.log(t)},updateList:function(t,a){var e,o=this;return t||(t=this.nowPath,e=!0),!this.listCache[t]||e||a?this.loadingData.isBusy?this.showAlert("Processing other tasks, try again later","w"):(this.loadingData.isBusy=!0,this.loadingData.info="loading... "+t,console.log("try: ls "+t+(a?"?spPage="+a:"")),void this.common.axios.post("./api/cmd",{cmdType:"ls",cmdData:{path:t,spPage:a}}).then((function(e){o.loadingData.isBusy=!1,console.log(e.data),e.data.list?(o.nowPath=t,a?(e.data.list.forEach((function(a){return o.listCache[t].list.push(a)})),o.listCache[t].nextToken=e.data.nextToken):o.listCache[t]=e.data,o.list=o.listCache[t].list,o.nextToken=e.data.nextToken):console.log(e.data)})).catch((function(t){o.loadingData.isBusy=!1,console.log(t),void 0!==t.response?401===t.response.status?o.$router.push({path:"/login"}):o.showAlert("error: "+t.response.data.info,"d"):o.showAlert("error: "+t.message,"d")}))):(this.list=this.listCache[t].list,this.nextToken=this.listCache[t].nextToken,void(this.nowPath=t))},sendCmd:function(t,a){var e=this,o=this,n=i();function i(){switch(t){case"mkdir":return"mkdir "+a.path+a.name;case"mv":case"cp":return t+" "+a.srcPath+" "+a.desPath;case"rm":return"rm "+a.path;case"ren":return"ren "+a.path+" "+a.name;case"touch":case"upload":return t+" "+a.path+(a.name||"");case"find":return t+" "+a.path+" "+a.text;default:return"unknown: "+t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.endsWith("/")&&(t=t.slice(0,-1));var a=t.lastIndexOf("/")+1;return{path:t.slice(0,a),name:t.slice(a)}}console.log("try: "+n),this.loadingbarData.info=n,this.loadingbarData.show=!0,this.common.axios.post("./api/cmd",{cmdType:t,cmdData:a}).then((function(n){var i,r,l,c;switch(e.loadingbarData.show=!1,t){case"mkdir":return void o.listCache[a.path].list.unshift({type:1,name:a.name,size:0,mime:"folder/unknown",time:o.common.formatDate(new Date)});case"mv":case"cp":return i=s(a.srcPath),r=-1,l=o.listCache[i.path].list.find((function(t,a){return r=a,t.name===i.name})),"mv"===t&&o.listCache[i.path].list.splice(r,1),void o.listCache[a.desPath].list.unshift(l);case"rm":case"ren":return i=s(a.path),r=-1,l=o.listCache[i.path].list.find((function(t,a){return r=a,t.name===i.name})),void("rm"===t?o.listCache[i.path].list.splice(r,1):l.name=a.name);case"touch":return void o.listCache[a.path].list.unshift({type:0,name:a.name,size:o.common.formatSize(a.content.length),mime:"onepoint/unknown",time:o.common.formatDate(new Date)});case"upload":return c=n.data.json.uploadUrl,void o.common.axios.get(c,{withCredentials:!1}).then((function(t){o.fileUpload(t.data,c)}));case"find":return o.nowPath=n.data.parentPath,void(o.content=n.data.data.content);default:return void console.log("unknown: "+t)}})).catch((function(a){o.loadingbarData.show=!1,console.log(a),void 0!==a.response?o.showAlert("error: "+a.response.data.info,"d"):o.showAlert("error: "+a.message,"d"),"upload"===t&&o.uploadData.uploadNow&&(o.uploadData.uploadFail.unshift(o.uploadData.uploadNow),o.uploadData.uploadNow=null,a.response&&409===a.response.status&&o.optBtnClick("upload"))}))},optBtnClick:function(t){var a,e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this.nowPath+o,i=this;switch(t){case"mkdir":return void this.showPrompt("mkdir","make dir in: "+n,(function(a){i.sendCmd(t,{path:n,name:a})}));case"mv_":return this.cmdType="mv",void(this.srcPath=n);case"mv":if(!this.srcPath||this.srcPath.slice(0,this.srcPath.lastIndexOf("/")+1)===this.nowPath)return;return void this.showConfirm("mv","move :"+this.srcPath+" -> "+this.nowPath,(function(){i.sendCmd(t,{srcPath:e.srcPath,desPath:e.nowPath}),i.srcPath=""}));case"cp_":return this.cmdType="cp",void(this.srcPath=n);case"cp":if(!this.srcPath||this.srcPath.slice(0,this.srcPath.lastIndexOf("/")+1)===this.nowPath)return;return void this.showConfirm("cp","copy :"+this.srcPath+" -> "+this.nowPath,(function(){i.sendCmd(t,{srcPath:e.srcPath,desPath:e.nowPath}),i.srcPath=""}));case"rm":return void this.showConfirm("rm","remove: "+n,(function(){i.sendCmd(t,{path:n})}));case"ren":return void this.showPrompt("ren","rename: "+n,(function(a){i.sendCmd(t,{path:n,name:a})}));case"touch":if(!this.uploadData.uploadTouch.name)return;return this.sendCmd(t,{path:this.nowPath,name:this.uploadData.uploadTouch.name,content:this.uploadData.uploadTouch.content||""}),this.uploadData.uploadTouch.name="",void(this.uploadData.uploadTouch.content="");case"upload":if(this.uploadData.uploadNow||0===this.uploadData.uploadQueue.length)return;return this.uploadData.uploadNow=this.uploadData.uploadQueue.shift(),a=this.uploadData.uploadNow,void this.sendCmd(t,{path:a.path+a.file.name,fileSystemInfo:{lastModifiedDateTime:a.file.lastModifiedDate.toISOString()}});case"find":return void this.sendCmd(t,{path:this.nowPath,text:this.searchData.text});default:return void console.log("err: "+t)}},showAlert:function(t,a){this.alertData.dismissCountDown=5,this.alertData.type={i:"info",d:"danger",s:"success",w:"warning"}[a]||"primary",this.alertData.info=t},countDownChanged:function(t){this.alertData.dismissCountDown=t},showConfirm:function(t,a,e){this.confirmData.title=t,this.confirmData.info=a,this.confirmData.okclick=e,this.$bvModal.show("modal-confirm")},showPrompt:function(t,a,e){this.promptData.title=t,this.promptData.info=a,this.promptData.okclick=e,this.$bvModal.show("modal-prompt")},resetPrompt:function(){this.promptData.value="",this.promptData.state=null},handleOkPrompt:function(t){var a=this;t&&t.preventDefault();var e=this.$refs["form-prompt"].checkValidity();this.promptData.state=e,e&&(this.promptData.okclick(this.promptData.value),this.$nextTick((function(){a.$bvModal.hide("modal-prompt")})))},uploadBtnClick:function(t){this.$refs[t].click()},uploadOnChange:function(t){console.log(t.target.files);for(var a=t.target.files,e=0;e<a.length;e++)this.uploadData.uploadQueue.push({path:this.nowPath,file:a[e],time:new Date});this.optBtnClick("upload")},fileUpload:function(t,a){var e,o,n,i,s=this;i=this.uploadData.uploadNow.file;var r=t.nextExpectedRanges[0].split("-");e=Number(r[0]),o=r[1]?Number(r[1])+1:i.size,n=a||t.uploadUrl,o>e+10485760&&(o=e+10485760);var l=new FileReader;l.readAsArrayBuffer(i.slice(e,o)),l.onload=function(a){console.log("send: ["+e+","+o+")"),s.common.axios.put(n,a.target.result,{headers:{"Content-Range":"bytes ".concat(e,"-").concat(o-1,"/").concat(i.size)},onUploadProgress:function(t){var a=t.loaded;s.uploadData.uploadSize=e+a},withCredentials:!1}).then((function(a){if(console.log(a.data),console.log("success: ["+e+","+o+")"),201===a.status)return s.listCache[s.uploadData.uploadNow.path].list.unshift({type:1,name:s.uploadData.uploadNow.file.name,size:s.common.formatSize(s.uploadData.uploadNow.file.size),mime:"onepoint/unknown",time:s.common.formatDate(s.uploadData.uploadNow.file.lastModifiedDate)}),s.showAlert("success: upload"+s.uploadData.uploadNow.file.name,"i"),console.log("success: "+JSON.stringify(t)),s.uploadData.uploadSucess.push(s.uploadData.uploadNow),s.uploadData.uploadNow=null,void s.optBtnClick("upload");if(202!==a.status)throw a;s.fileUpload(a.data,n)})).catch((function(t){console.log(t),s.showAlert("error: "+t.message,"d"),s.uploadData.uploadNow&&(console.error("fail: upload "+i.name),s.uploadData.uploadFail.unshift(s.uploadData.uploadNow),s.uploadData.uploadNow=null)}))}}},computed:{navPathArr:function(){var t=this.nowPath,a="/",e=[];return t.split("/").forEach((function(t){t&&(a+=t,a+="/",e.push({path:t,href:a}))})),e}}}),s=i,r=(e("f50a"),e("2877")),l=Object(r["a"])(s,o,n,!1,null,null,null);a["default"]=l.exports},"7db0":function(t,a,e){"use strict";var o=e("23e7"),n=e("b727").find,i=e("44d2"),s=e("ae40"),r="find",l=!0,c=s(r);r in[]&&Array(1)[r]((function(){l=!1})),o({target:"Array",proto:!0,forced:l||!c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(r)},"8a79":function(t,a,e){"use strict";var o=e("23e7"),n=e("06cf").f,i=e("50c4"),s=e("5a34"),r=e("1d80"),l=e("ab13"),c=e("c430"),u="".endsWith,d=Math.min,p=l("endsWith"),h=!c&&!p&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();o({target:"String",proto:!0,forced:!h&&!p},{endsWith:function(t){var a=String(r(this));s(t);var e=arguments.length>1?arguments[1]:void 0,o=i(a.length),n=void 0===e?o:d(i(e),o),l=String(t);return u?u.call(a,l,n):a.slice(n-l.length,n)===l}})},"99af":function(t,a,e){"use strict";var o=e("23e7"),n=e("d039"),i=e("e8b5"),s=e("861d"),r=e("7b0b"),l=e("50c4"),c=e("8418"),u=e("65f0"),d=e("1dde"),p=e("b622"),h=e("2d00"),m=p("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",w=h>=51||!n((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=d("concat"),D=function(t){if(!s(t))return!1;var a=t[m];return void 0!==a?!!a:i(t)},b=!w||!g;o({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,o,n,i,s=r(this),d=u(s,0),p=0;for(a=-1,o=arguments.length;a<o;a++)if(i=-1===a?s:arguments[a],D(i)){if(n=l(i.length),p+n>f)throw TypeError(v);for(e=0;e<n;e++,p++)e in i&&c(d,p,i[e])}else{if(p>=f)throw TypeError(v);c(d,p++,i)}return d.length=p,d}})},a434:function(t,a,e){"use strict";var o=e("23e7"),n=e("23cb"),i=e("a691"),s=e("50c4"),r=e("7b0b"),l=e("65f0"),c=e("8418"),u=e("1dde"),d=e("ae40"),p=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,v=9007199254740991,w="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!p||!h},{splice:function(t,a){var e,o,u,d,p,h,g=r(this),D=s(g.length),b=n(t,D),k=arguments.length;if(0===k?e=o=0:1===k?(e=0,o=D-b):(e=k-2,o=f(m(i(a),0),D-b)),D+e-o>v)throw TypeError(w);for(u=l(g,o),d=0;d<o;d++)p=b+d,p in g&&c(u,d,g[p]);if(u.length=o,e<o){for(d=b;d<D-o;d++)p=d+o,h=d+e,p in g?g[h]=g[p]:delete g[h];for(d=D;d>D-o+e;d--)delete g[d-1]}else if(e>o)for(d=D-o;d>b;d--)p=d+o-1,h=d+e-1,p in g?g[h]=g[p]:delete g[h];for(d=0;d<e;d++)g[d+b]=arguments[d+2];return g.length=D-o+e,u}})},a66a:function(t,a,e){},baa5:function(t,a,e){var o=e("23e7"),n=e("e58c");o({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},e58c:function(t,a,e){"use strict";var o=e("fc6a"),n=e("a691"),i=e("50c4"),s=e("a640"),r=e("ae40"),l=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,d=s("lastIndexOf"),p=r("indexOf",{ACCESSORS:!0,1:0}),h=u||!d||!p;t.exports=h?function(t){if(u)return c.apply(this,arguments)||0;var a=o(this),e=i(a.length),s=e-1;for(arguments.length>1&&(s=l(s,n(arguments[1]))),s<0&&(s=e+s);s>=0;s--)if(s in a&&a[s]===t)return s||0;return-1}:c},f50a:function(t,a,e){"use strict";var o=e("a66a"),n=e.n(o);n.a}}]);
//# sourceMappingURL=chunk-6f0ce97c.45bb6d4c.js.map