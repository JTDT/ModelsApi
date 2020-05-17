(function(e){function t(t){for(var r,i,s=t[0],l=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("c21b"),n=a.n(r);n.a},"0bb5":function(e,t,a){},"0f77":function(e,t,a){"use strict";var r=a("defb"),n=a.n(r);n.a},"3d10":function(e,t,a){"use strict";var r=a("0bb5"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);var r,n,o=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),a("Navigation")],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Navigation bar")]),a("nav",e._l(e.links,function(t){return a("router-link",{key:t.id,staticClass:"spacing",attrs:{to:""+t.page}},[e._v(e._s(t.text))])}))])},u=[],m={name:"Navigation",data:function(){return{links:[{id:0,text:"Home",page:"/Home"},{id:1,text:"Jobs",page:"/Jobs"},{id:2,text:"Model",page:"/Model"},{id:3,text:"Manager",page:"/Manager"}]}}},p=m,d=(a("9028"),a("2877")),c=Object(d["a"])(p,l,u,!1,null,null,null),v=c.exports,f={name:"app",components:{Navigation:v}},h=f,g=(a("034f"),Object(d["a"])(h,i,s,!1,null,null,null)),y=g.exports,b=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home",attrs:{id:"login"}},[a("h1",[e._v("ModelManagement")]),a("p",[e._v("Welcome to ModelsManagement. Please log in!")]),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{attrs:{type:"button"},on:{click:function(t){e.login()}}},[e._v("Login")])])])},N=[],x=(a("96cf"),a("1da1")),_={data:function(){return{email:"",password:""}},methods:{login:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://localhost:44368/api/Account/login",{method:"POST",body:JSON.stringify({email:this.email,password:this.password}),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("token",e.jwt),t.$router.push("Jobs")}).catch(function(e){return alert("Error:",e)});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},P=_,O=(a("7c66"),Object(d["a"])(P,w,N,!1,null,"ca4fe5cc",null)),C=O.exports,M={},j=Object(d["a"])(M,r,n,!1,null,null,null),k=j.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"modelsPage"}},[a("h1",[e._v(e._s(e.msg))]),a("h3",[e._v("Models")]),a("form",{attrs:{id:"createModelform"}},[a("h4",[e._v("Add models")]),a("label",{attrs:{for:"name"}},[e._v("First Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",id:"firstName",name:"firstName"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),a("label",{attrs:{for:"name"}},[e._v("Last Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"lastName",name:"lastName"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Email: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Phone No: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNo,expression:"phoneNo"}],attrs:{type:"text",id:"phoneNo",name:"phoneNo"},domProps:{value:e.phoneNo},on:{input:function(t){t.target.composing||(e.phoneNo=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("AddresLine1: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addresLine1,expression:"addresLine1"}],attrs:{type:"text",id:"addresLine1",name:"addresLine1"},domProps:{value:e.addresLine1},on:{input:function(t){t.target.composing||(e.addresLine1=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("AddresLine2: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addresLine2,expression:"addresLine2"}],attrs:{type:"text",id:"addresLine2",name:"addresLine2"},domProps:{value:e.addresLine2},on:{input:function(t){t.target.composing||(e.addresLine2=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Zip: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.zip,expression:"zip"}],attrs:{type:"text",id:"zip",name:"zip"},domProps:{value:e.zip},on:{input:function(t){t.target.composing||(e.zip=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("City: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],attrs:{type:"text",id:"city",name:"city"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Country: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],attrs:{type:"text",id:"country",name:"country"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Birth date: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.birthDate,expression:"birthDate"}],attrs:{type:"text",id:"birthDate",name:"birthDate"},domProps:{value:e.birthDate},on:{input:function(t){t.target.composing||(e.birthDate=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Nationality: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.nationality,expression:"nationality"}],attrs:{type:"text",id:"nationality",name:"nationality"},domProps:{value:e.nationality},on:{input:function(t){t.target.composing||(e.nationality=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Height: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"height"}],attrs:{type:"text",id:"height",name:"height"},domProps:{value:e.height},on:{input:function(t){t.target.composing||(e.height=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Shoe size: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shoeSize,expression:"shoeSize"}],attrs:{type:"text",id:"shoeSize",name:"shoeSize"},domProps:{value:e.shoeSize},on:{input:function(t){t.target.composing||(e.shoeSize=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Hair Color: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.hairColor,expression:"hairColor"}],attrs:{type:"text",id:"hairColor",name:"hairColor"},domProps:{value:e.hairColor},on:{input:function(t){t.target.composing||(e.hairColor=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Eye Color: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.eyeColor,expression:"eyeColor"}],attrs:{type:"text",id:"eyeColor",name:"eyeColor"},domProps:{value:e.eyeColor},on:{input:function(t){t.target.composing||(e.eyeColor=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Comment: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],attrs:{type:"text",id:"comment",name:"comment"},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Password: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",id:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("input",{attrs:{type:"submit",value:"Add model",id:"submit"},on:{click:function(t){e.addModel()}}}),a("input",{attrs:{type:"reset",value:"Reset fields"}})]),a("table",{attrs:{border:"0"}}),a("br"),a("br"),a("button",{attrs:{type:"button"},on:{click:function(t){e.deleteModel()}}},[e._v("Delete model")])])},L=[],z={data:function(){return{firstName:"",lastName:"",email:"",phoneNo:"",addresLine1:"",addresLine2:"",zip:"",city:"",country:"",birthDate:"",nationality:"",height:"",shoeSize:"",hairColor:"",eyeColor:"",comment:"",password:""}},methods:{addModel:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://localhost:44368/api/Models",{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({firstName:this.firstName,lastName:this.lastName,email:this.email,phoneNo:this.phoneNo,addresLine1:this.addresLine1,addresLine2:this.addresLine2,zip:this.zip,city:this.city,country:this.country,birthDate:this.birthDate,nationality:this.nationality,height:this.height,shoeSize:this.shoeSize,hairColor:this.hairColor,eyeColor:this.eyeColor,comment:this.comment,password:this.password})}).then(function(e){if(!e.ok)throw 400==e.status?new Error(e.statusText):new Error("Network response failed");t.createstatus="OK"});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},deleteModel:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,fetch("https://localhost:44368/api/models/${id}"),e.next=7;break;case 4:throw e.prev=4,e.t0=e["catch"](0),DOMException;case 7:case"end":return e.stop()}},e,null,[[0,4]])}));function t(){return e.apply(this,arguments)}return t}()},E=z,D=(a("0f77"),Object(d["a"])(E,S,L,!1,null,null,null)),R=D.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.msg))]),a("h3",[e._v("Managers")]),a("form",{attrs:{id:"createManagerform"}},[a("label",{attrs:{for:"name"}},[e._v("First Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",id:"firstName",name:"firstName"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),a("label",{attrs:{for:"name"}},[e._v("Last Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"lastName",name:"lastName"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Email: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" />\n        "),a("label",{attrs:{for:"password"}},[e._v("Password: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("button",{attrs:{type:"button"},on:{click:function(t){e.addManager()}}},[e._v("Add manager")]),a("input",{attrs:{type:"reset"}})]),a("br"),a("br"),a("button",{attrs:{type:"button"},on:{click:function(t){e.deleteManager()}}},[e._v("Delete manager")])])},J=[],$={data:function(){return{firstName:"",lastName:"",email:"",password:""}},methods:{addManager:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://localhost:44368/api/Managers",{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password})}).then(function(e){if(!e.ok)throw 400==e.status?new Error(e.statusText):new Error("Network response failed");t.createstatus="OK"});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),deleteManager:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://localhost:44368/api/Managers/${id}");case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}},A=$,H=(a("3d10"),Object(d["a"])(A,T,J,!1,null,null,null)),B=H.exports;o["a"].use(b["a"]);var I=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:C},{path:"/jobs",name:"Jobs",component:k},{path:"/model",name:"Model",component:R},{path:"/manager",name:"Manager",component:B}]});o["a"].config.productionTip=!0,new o["a"]({router:I,render:function(e){return e(y)}}).$mount("#app")},6207:function(e,t,a){},"7c66":function(e,t,a){"use strict";var r=a("6207"),n=a.n(r);n.a},9028:function(e,t,a){"use strict";var r=a("cf30"),n=a.n(r);n.a},c21b:function(e,t,a){},cf30:function(e,t,a){},defb:function(e,t,a){}});
//# sourceMappingURL=app.06bf830d.js.map