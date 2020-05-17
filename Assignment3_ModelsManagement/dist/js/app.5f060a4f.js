(function(e){function t(t){for(var r,i,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("c21b"),n=a.n(r);n.a},"0bb5":function(e,t,a){},"0d5a":function(e,t,a){"use strict";var r=a("e0c6"),n=a.n(r);n.a},"0f77":function(e,t,a){"use strict";var r=a("defb"),n=a.n(r);n.a},"3d10":function(e,t,a){"use strict";var r=a("0bb5"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),a("Navigation")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Navigation bar")]),a("nav",e._l(e.links,function(t){return a("router-link",{key:t.id,staticClass:"spacing",attrs:{to:""+t.page}},[e._v(e._s(t.text))])}))])},s=[],l={name:"Navigation",data:function(){return{links:[{id:0,text:"Home",page:"/Home"},{id:1,text:"Jobs",page:"/Jobs"},{id:2,text:"AddJob",page:"/AddJob"},{id:3,text:"Model",page:"/Model"},{id:4,text:"Manager",page:"/Manager"}]}}},u=l,m=(a("9028"),a("2877")),d=Object(m["a"])(u,i,s,!1,null,null,null),p=d.exports,c={name:"app",components:{Navigation:p}},v=c,f=(a("034f"),Object(m["a"])(v,n,o,!1,null,null,null)),h=f.exports,g=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home",attrs:{id:"login"}},[a("h1",[e._v("ModelManagement")]),a("p",[e._v("Welcome to ModelsManagement. Please log in!")]),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{attrs:{type:"button"},on:{click:function(t){e.login()}}},[e._v("Login")])])])},y=[],w=(a("96cf"),a("1da1")),N={data:function(){return{email:"",password:""}},methods:{login:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://localhost:44368/api/Account/login",{method:"POST",body:JSON.stringify({email:this.email,password:this.password}),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("token",e.jwt),t.$router.push("Jobs")}).catch(function(e){return alert("Error:",e)});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},_=N,x=(a("0d5a"),Object(m["a"])(_,b,y,!1,null,"8c6b1aba",null)),P=x.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Job list")]),a("div",[e._m(0),e._l(e.jobList,function(t){return a("div",[a("table",[a("tr",[a("td",[e._v(e._s(t.customer))]),a("td",[e._v(e._s(t.startDate))]),a("td",[e._v(e._s(t.days))]),a("td",[e._v(e._s(t.location))]),a("td",[e._v(e._s(t.comments))])])])])}),a("button",{attrs:{type:"button"},on:{click:function(t){e.addExpenses()}}},[e._v("Add expense")])],2)])},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("tr",[a("th",[e._v("Customer")]),a("th",[e._v("Start date")]),a("th",[e._v("Days")]),a("th",[e._v("Location")]),a("th",[e._v("Comments")]),a("th",[e._v("Models")])])])}],j={name:"job",created:function(){alert("Created hook has been called"),this.getJobs()},methods:{getJobs:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:44368/api/Jobs",{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:if(t=e.sent,!t.ok){e.next=8;break}return e.next=6,t.json();case 6:this.jobList=e.sent,console.log("getJobs response ok"+this.jobList);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},k=j,M=Object(m["a"])(k,L,C,!1,null,null,null),O=M.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"modelsPage"}},[a("h1",[e._v("Models")]),a("form",{attrs:{id:"createModelform"}},[a("p",[e._v("Please fill out the form below to sign new models!")]),a("label",{attrs:{for:"firstName"}},[e._v("First Name: * ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",id:"firstName",name:"firstName",required:""},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),a("label",{attrs:{for:"lastName"}},[e._v("Last Name: * ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"lastName",name:"lastName",required:""},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Email: * ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{attrs:{for:"phoneNo"}},[e._v("Phone No: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNo,expression:"phoneNo"}],attrs:{type:"text",id:"phoneNo",name:"phoneNo",required:""},domProps:{value:e.phoneNo},on:{input:function(t){t.target.composing||(e.phoneNo=t.target.value)}}}),a("label",{attrs:{for:"addresLine1"}},[e._v("AddresLine1: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addresLine1,expression:"addresLine1"}],attrs:{type:"text",id:"addresLine1",name:"addresLine1",required:""},domProps:{value:e.addresLine1},on:{input:function(t){t.target.composing||(e.addresLine1=t.target.value)}}}),a("label",{attrs:{for:"addresLine2"}},[e._v("AddresLine2: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addresLine2,expression:"addresLine2"}],attrs:{type:"text",id:"addresLine2",name:"addresLine2",required:""},domProps:{value:e.addresLine2},on:{input:function(t){t.target.composing||(e.addresLine2=t.target.value)}}}),a("label",{attrs:{for:"zip"}},[e._v("Zip: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.zip,expression:"zip"}],attrs:{type:"text",id:"zip",name:"zip",required:""},domProps:{value:e.zip},on:{input:function(t){t.target.composing||(e.zip=t.target.value)}}}),a("label",{attrs:{for:"city"}},[e._v("City: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],attrs:{type:"text",id:"city",name:"city",required:""},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}}),a("label",{attrs:{for:"country"}},[e._v("Country: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],attrs:{type:"text",id:"country",name:"country",required:""},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value)}}}),a("label",{attrs:{for:"birthDate"}},[e._v("Birth date: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.birthDate,expression:"birthDate"}],attrs:{type:"date",id:"birthDate",name:"birthDate",required:""},domProps:{value:e.birthDate},on:{input:function(t){t.target.composing||(e.birthDate=t.target.value)}}}),a("label",{attrs:{for:"nationality"}},[e._v("Nationality: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.nationality,expression:"nationality"}],attrs:{type:"text",id:"nationality",name:"nationality",required:""},domProps:{value:e.nationality},on:{input:function(t){t.target.composing||(e.nationality=t.target.value)}}}),a("label",{attrs:{for:"height"}},[e._v("Height: ")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.height,expression:"height",modifiers:{number:!0}}],attrs:{type:"number",id:"height",name:"height",required:""},domProps:{value:e.height},on:{input:function(t){t.target.composing||(e.height=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),a("label",{attrs:{for:"shoeSize"}},[e._v("Shoe size: ")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.shoeSize,expression:"shoeSize",modifiers:{number:!0}}],attrs:{type:"number",id:"shoeSize",name:"shoeSize",required:""},domProps:{value:e.shoeSize},on:{input:function(t){t.target.composing||(e.shoeSize=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),a("label",{attrs:{for:"hairColor"}},[e._v("Hair Color: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.hairColor,expression:"hairColor"}],attrs:{type:"text",id:"hairColor",name:"hairColor",required:""},domProps:{value:e.hairColor},on:{input:function(t){t.target.composing||(e.hairColor=t.target.value)}}}),a("label",{attrs:{for:"eyeColor"}},[e._v("Eye Color: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.eyeColor,expression:"eyeColor"}],attrs:{type:"text",id:"eyeColor",name:"eyeColor",required:""},domProps:{value:e.eyeColor},on:{input:function(t){t.target.composing||(e.eyeColor=t.target.value)}}}),a("label",{attrs:{for:"comment"}},[e._v("Comments: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.comments,expression:"comments"}],attrs:{type:"text",id:"comments",name:"comments",required:""},domProps:{value:e.comments},on:{input:function(t){t.target.composing||(e.comments=t.target.value)}}}),a("label",{attrs:{for:"password"}},[e._v("Password: * ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",id:"password",name:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("input",{attrs:{type:"submit",value:"Add model",id:"button"},on:{click:function(t){e.addModel()}}}),a("input",{attrs:{type:"reset",value:"Reset fields",id:"button"}})])])},z=[],J=(a("28a5"),localStorage.getItem("token")),E=J.split(".")[1],q=window.atob(E),T=JSON.parse(q),A=(T["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],{data:function(){return{firstName:"",lastName:"",email:"",phoneNo:"",addresLine1:"",addresLine2:"",zip:"",city:"",country:"",birthDate:"",nationality:"",height:0,shoeSize:0,hairColor:"",eyeColor:"",comments:"",password:""}},methods:{addModel:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://localhost:44368/api/Models",{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({firstName:this.firstName,lastName:this.lastName,email:this.email,phoneNo:this.phoneNo,addresLine1:this.addresLine1,addresLine2:this.addresLine2,zip:this.zip,city:this.city,country:this.country,birthDate:this.birthDate,nationality:this.nationality,height:this.height,shoeSize:this.shoeSize,hairColor:this.hairColor,eyeColor:this.eyeColor,comments:this.comments,password:this.password})}).then(function(e){if(!e.ok)throw 400==e.status?new Error(e.statusText):new Error("Network response failed");t.createstatus="OK"});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}}),D=A,R=(a("0f77"),Object(m["a"])(D,S,z,!1,null,null,null)),$=R.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.msg))]),a("h3",[e._v("Managers")]),a("form",{attrs:{id:"createManagerform"}},[a("label",{attrs:{for:"name"}},[e._v("First Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",id:"firstName",name:"firstName"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),a("label",{attrs:{for:"name"}},[e._v("Last Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"lastName",name:"lastName"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Email: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{attrs:{for:"password"}},[e._v("Password: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("input",{attrs:{type:"button",value:"Add manager",id:"button"},on:{click:function(t){e.addManager()}}}),a("input",{attrs:{type:"reset",id:"button"}}),a("label",{attrs:{for:"manager"}},[e._v("Select Manager: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.managerList,expression:"managerList"}],attrs:{type:"text",name:"manager",id:"managerList"},domProps:{value:e.managerList},on:{input:function(t){t.target.composing||(e.managerList=t.target.value)}}}),e._l(e.managerList,function(t){return a("datalist",{attrs:{id:"managerList"}},[a("option",[e._v(e._s(t.firstName))])])}),a("br"),a("br"),a("button",{attrs:{type:"button",id:"button"},on:{click:function(t){e.deleteManager()}}},[e._v("Delete manager")])],2)])},I=[],B={data:function(){return{firstName:"",lastName:"",email:"",password:""}},created:function(){this.getManagers()},methods:{getManagers:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:44368/api/Managers",{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:if(t=e.sent,!t.ok){e.next=8;break}return e.next=6,t.json();case 6:this.managerList=e.sent,console.log("getJobs response ok"+this.managerList);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addManager:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://localhost:44368/api/Managers",{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password})}).then(function(e){if(!e.ok)throw 400==e.status?new Error(e.statusText):new Error("Network response failed");t.createstatus="OK"});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),deleteManager:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://localhost:44368/api/Managers/${id}");case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}},F=B,G=(a("3d10"),Object(m["a"])(F,H,I,!1,null,null,null)),K=G.exports;r["a"].use(g["a"]);var U=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:P},{path:"/jobs",name:"Jobs",component:O},{path:"/addjob",name:"AddJob",component:AddJob},{path:"/model",name:"Model",component:$},{path:"/manager",name:"Manager",component:K}]});r["a"].config.productionTip=!0,new r["a"]({router:U,render:function(e){return e(h)}}).$mount("#app")},9028:function(e,t,a){"use strict";var r=a("cf30"),n=a.n(r);n.a},c21b:function(e,t,a){},cf30:function(e,t,a){},defb:function(e,t,a){},e0c6:function(e,t,a){}});
//# sourceMappingURL=app.5f060a4f.js.map