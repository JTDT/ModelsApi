(function(e){function t(t){for(var r,u,s=t[0],l=t[1],i=t[2],p=0,f=[];p<s.length;p++)u=s[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21d6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r,o,a,u,s,l,i,c,p=n("2b0e"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"ModelsManagement"}})],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",attrs:{id:"login"}},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v("Welcome to ModelsManagement. Please log in!")]),n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"email"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{attrs:{type:"button"},on:{click:function(t){e.login()}}},[e._v("Login")])])])},v=[],h=(n("96cf"),n("1da1")),g={data:function(){return{}},methods:{login:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("http://localhost:44368/api/Account/login",{method:"POST",body:JSON.stringify({email:r,password:o}),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("token",e.jwt)}).catch(function(e){return alert("Error:",e)});case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}},b=g,w=(n("639e"),n("2877")),y=Object(w["a"])(b,m,v,!1,null,"6aa450e4",null),j=y.exports,O={name:"app",components:{Home:j}},_=O,x=Object(w["a"])(_,f,d,!1,null,null,null),P=x.exports,M=n("8c4f"),S={},k=Object(w["a"])(S,a,u,!1,null,null,null),T=k.exports,C={},E=Object(w["a"])(C,s,l,!1,null,null,null),H=E.exports,J={},N=Object(w["a"])(J,i,c,!1,null,null,null),$=N.exports;p["a"].use(M["a"]);var R=new M["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:j},{path:"/jobs",name:"Jobs",component:T},{path:"/model",name:"Model",component:H},{path:"/manager",name:"Manager",component:$}]});p["a"].config.productionTip=!0,new p["a"]({router:R,render:function(e){return e(P)}}).$mount("#app")},"639e":function(e,t,n){"use strict";var r=n("21d6"),o=n.n(r);o.a}});
//# sourceMappingURL=app.ece9eb64.js.map