(this["webpackJsonptask-test-react-2"]=this["webpackJsonptask-test-react-2"]||[]).push([[0],{26:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(19),r=a.n(s),o=(a(26),a(3)),i=a(5),l=a(4),d=a(8),u=a.n(d);function j(e){e&&(console.log("service/token setToken ".concat(e.substr(0,10),"...")),localStorage.setItem("token",e))}function b(){return localStorage.getItem("token")}function m(){localStorage.removeItem("token")}var h="https://api-gateway-hackathon.herokuapp.com";console.log("service/api: Base URL is: ".concat(h));var p={baseURL:h,method:"get",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},O=u.a.create(p);O.interceptors.request.use((function(e){var t=b();return console.log("service/api: interceptor with token ".concat(t)),t&&(e.headers.Authorization="Authorization : ".concat(t)),e})),O.interceptors.response.use((function(e){return console.log("res : ",e),e}),(function(e){if(401===e.response.status)throw m(),new Error("Invalid token");throw e}));var f=O,x="/api/authenticationService/";function v(){return!!b()}var g=a(0);function k(e){var t=e.spec,a=e.handleChange,n=e.handleSubmit;return Object(g.jsxs)("div",{className:"col-sm",children:[Object(g.jsx)("h3",{children:t.header}),Object(g.jsxs)("form",{children:[Object(g.jsxs)("div",{className:"form-group text-left",children:[Object(g.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Nom d'utilisateur"}),Object(g.jsx)("input",{type:"username",className:"form-control",id:t.userId,"aria-describedby":"usernameHelp",placeholder:"Entrez votre nom d'utilisateur",value:t.state.username,onChange:a}),Object(g.jsx)("small",{id:"usernameHelp",className:"form-text text-muted",children:"Nom d'utilisateur (pas l'email)"})]}),Object(g.jsxs)("div",{className:"form-group text-left",children:[Object(g.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Mot de passe"}),Object(g.jsx)("input",{type:"password",className:"form-control",id:t.passId,placeholder:"Entrez votre mot de passe",autoComplete:"new-password",value:t.state.password,onChange:a})]}),Object(g.jsx)("div",{className:"form-check"}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:n,children:t.btnValue})]})]})}var N=function(e){var t=e.setIsLoggedIn,a=Object(n.useState)({signinUsername:"",signinPassword:""}),c=Object(o.a)(a,2),s=c[0],r=c[1],d=Object(n.useState)({loginUsername:"",loginPassword:""}),u=Object(o.a)(d,2),b=u[0],m=u[1],h={header:"Sign In",userId:Object.keys(s)[0],state:s,passId:Object.keys(s)[1],btnValue:"Cr\xe9er un compte"},p={header:"Log In",userId:Object.keys(b)[0],state:b,passId:Object.keys(b)[1],btnValue:"Se connecter"};return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)(k,{spec:h,handleChange:function(e){var t=e.target,a=t.id,n=t.value;r((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},a,n))}))},handleSubmit:function(e){e.preventDefault();var a,n,c=s.signinUsername,r=s.signinPassword;(a=c,n=r,f.post("".concat(x,"register"),{username:a,password:n}).then((function(e){var t=e.data.token;return j(t),t}))).then((function(e){alert("Success, your token is: ".concat(e)),t(v())})).catch((function(e){alert("Sorry, there was an error")})),console.log(e)}}),Object(g.jsx)(k,{spec:p,handleChange:function(e){var t=e.target,a=t.id,n=t.value;m((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},a,n))}))},handleSubmit:function(e){e.preventDefault();var a,n,c=b.loginUsername,s=b.loginPassword;(a=c,n=s,console.log("service/authentication login ".concat(a)),console.log("service/authentication login ".concat(n)),f.post("".concat(x,"authenticate"),{username:a,password:n}).then((function(e){var t=e.data.token;return j(t),t}))).then((function(e){alert("Success, your token is: ".concat(e)),t(v())})).catch((function(e){alert("Sorry, there was an error")})),console.log(e)}})]})})},y=a(10),S=a.n(y),w=a(20),I=a(21);var C=function(e){var t=e.tasks,a=Object(n.useState)({}),c=Object(o.a)(a,2),s=c[0],r=c[1],i=Object(n.useRef)(null),l=function(e){(function(e){return f.get("".concat("/api/taskService/","tasks/").concat(e)).then((function(e){return e.data}))})(e).then((function(e){console.log("response ",e),r(e)}))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{children:t.length?t.map((function(e,t){return Object(g.jsxs)("li",{onClick:function(){return l(e.id)},"data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:["the task : ",Object(g.jsx)("b",{children:e.name})," starts at ",Object(g.jsx)("b",{children:e.start})," and ends at"," ",Object(g.jsx)("b",{children:e.end})]},t)})):Object(g.jsx)("p",{children:"No tasks"})}),Object(g.jsx)("div",{className:"modal fade",ref:i,id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(g.jsx)("div",{className:"modal-dialog",children:Object(g.jsxs)("div",{className:"modal-content",children:[Object(g.jsxs)("div",{className:"modal-header",children:[Object(g.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:s.name}),Object(g.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(g.jsxs)("div",{className:"modal-body",children:[Object(g.jsxs)("p",{children:["Date d\xe9but : ",s.start]}),Object(g.jsxs)("p",{children:["Date fin : ",s.end]})]}),Object(g.jsx)("div",{className:"modal-footer",children:Object(g.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Fermer"})})]})})})]})};var E=function(){return Object(g.jsx)("p",{children:"TaskByUserId is to come"})};var D=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(o.a)(s,2),d=r[0],j=r[1],b=function(e){return e.toISOString().slice(0,19)},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return new Date(new Date(e).setHours(e.getHours()+t))},h=new Date,p=m(h,1),O=Object(n.useState)({taskName:"",dateStart:b(h),dateEnd:b(p)}),x=Object(o.a)(O,2),v=x[0],k=x[1],N=function(e){var t=e.target,a=t.id,n=t.value;if(k((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},a,n))})),"dateStart"===a){var c=b(m(new Date(n)));k((function(e){return Object(l.a)(Object(l.a)({},e),{},{dateEnd:c})})),console.log(c)}},y=function(e){return e.replace("T"," ")};return Object(n.useEffect)((function(){(function(){var e=Object(w.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://api-gateway-hackathon.herokuapp.com/api/taskService/tasks");case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("p",{children:"Home"}),Object(g.jsxs)("div",{className:"col-sm",children:[Object(g.jsx)("h3",{children:"Ajouter une t\xe2che"}),Object(g.jsxs)("form",{children:[Object(g.jsxs)("div",{className:"form-group text-left",children:[Object(g.jsx)("label",{htmlFor:"inputTache",children:"T\xe2che"}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"taskName","aria-describedby":"taskNameHelp",placeholder:"Entrez une t\xe2che",value:v.taskName,onChange:N})]}),Object(g.jsxs)("div",{className:"form-group text-left",children:[Object(g.jsx)("label",{htmlFor:"inputStart",children:"Date de d\xe9but"}),Object(g.jsx)("input",{type:"datetime-local",className:"form-control",id:"dateStart",placeholder:"Entrez date de d\xe9but",min:v.dateStart,max:"2022-06-01T00:00",value:v.dateStart,onChange:N})]}),Object(g.jsxs)("div",{className:"form-group text-left",children:[Object(g.jsx)("label",{htmlFor:"inputEnd",children:"Date de fin"}),Object(g.jsx)("input",{type:"datetime-local",className:"form-control",id:"dateEnd",placeholder:"Entrez date de fin",min:v.dateEnd,max:"2022-06-01T00:00",value:v.dateEnd,onChange:N})]}),Object(g.jsx)("div",{className:"form-check"}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault();var t,a,n,c=v.taskName,s=v.dateStart,r=v.dateEnd;(t=c,a=y(s),n=y(r),f.post("/api/compose/task",{name:t,start:a,end:n}).then((function(e){return e.data}))).then((function(e){j((function(t){return[].concat(Object(I.a)(t),[e])}))}))},children:"Ajout de la t\xe2che"})]})]}),Object(g.jsxs)("div",{className:"container mt-1",children:[["Liste de t\xe2ches","Mes t\xe2ches"].map((function(e,t){return Object(g.jsx)("button",{type:"button",className:"btn btn-primary mr-1",onClick:function(){return c(!a)},children:e},t)})),a?Object(g.jsx)(E,{}):Object(g.jsx)(C,{tasks:d})]})]})};var F=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return a?Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("button",{className:"btn btn-primary",onClick:function(){m(),c(!1)},children:"Log Out"}),Object(g.jsx)(D,{isLoggedIn:a})]}):Object(g.jsx)(N,{setIsLoggedIn:c})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),L()}},[[47,1,2]]]);
//# sourceMappingURL=main.ac8d1863.chunk.js.map