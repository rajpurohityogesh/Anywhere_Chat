(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{216:function(e,s,t){},217:function(e,s,t){},243:function(e,s){},453:function(e,s,t){},455:function(e,s,t){},456:function(e,s,t){},457:function(e,s,t){},465:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t.n(c),n=t(197),r=t.n(n),l=(t(216),t(217),t(33)),i=t(7);const o=Object(c.createContext)(null);var j=t(82),d=t.n(j),m=t(211),b=(t(453),t(1));var u=e=>{let{message:{name:s,user_id:t,text:c},current_uid:a}=e,n=!1;return a===t&&(n=!0),n?Object(b.jsx)("div",{className:"row right-align",children:Object(b.jsx)("div",{className:"col s12 m8 16 right",children:Object(b.jsxs)("p",{className:"sentbyme",children:[" ",s," : ",c," "]})})}):Object(b.jsx)("div",{className:"row left-align",children:Object(b.jsx)("div",{className:"col s12 m8 16 left",children:Object(b.jsxs)("p",{className:"opponent",children:[" ",s," : ",c," "]})})})};t(455);var h=e=>{let{messages:s,user_id:t}=e;return Object(b.jsx)(m.a,{className:"messages",children:s.map(((e,s)=>Object(b.jsx)(u,{message:e,current_uid:t},e._id)))})};t(456);var O=e=>{let{message:s,setMessage:t,sendMessage:c}=e;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{action:"",onSubmit:c,className:"form",children:[Object(b.jsx)("input",{className:"input",placeholder:"Type a Message",value:s,onChange:e=>t(e.target.value),onKeyPress:e=>"Enter"===e.key?c(e):null}),Object(b.jsx)("button",{className:"sendButton",children:"Send"})]})})},x=(t(457),"https://anywhere-chat.onrender.com");let g;var v=()=>{const e=x,{room_id:s,room_name:t}=Object(i.g)(),{user:a,setUser:n}=Object(c.useContext)(o),[r,l]=Object(c.useState)(""),[j,m]=Object(c.useState)([]);Object(c.useEffect)((()=>{g=d()(e),g.emit("join",{name:a.name,room_id:s,user_id:a._id}),g.on("stored-messages",(e=>m(e)))}),[]),Object(c.useEffect)((()=>{g.on("message",(e=>{m([...j,e])}))}),[j]);return Object(b.jsx)("div",{className:"outerContainer",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{messages:j,user_id:a._id}),Object(b.jsx)(O,{message:r,setMessage:l,sendMessage:e=>{e.preventDefault(),r&&(console.log(r),g.emit("sendMessage",r,s,(()=>l(""))))}})]})})};var p=e=>Object(b.jsx)("div",{children:Object(b.jsx)("div",{style:{borderRadius:"0.5em"},className:"card horizontal",children:Object(b.jsx)("div",{className:"card-stacked",children:Object(b.jsx)("div",{className:"card-content",children:Object(b.jsx)("p",{children:e.name})})})})});var N=e=>Object(b.jsx)("div",{children:e.rooms&&e.rooms.map((e=>Object(b.jsx)(l.b,{to:"/chat/"+e._id+"/"+e.name,children:Object(b.jsx)(p,{name:e.name})},e._id)))});let f;var w=()=>{const e=x,{user:s,setUser:t}=Object(c.useContext)(o),[a,n]=Object(c.useState)(""),[r,l]=Object(c.useState)([]);Object(c.useEffect)((()=>(f=d()(e),()=>{f.emit("disconnect"),f.off()})),[e]),Object(c.useEffect)((()=>{f.on("output-rooms",(e=>{l(e)}))}),[]),Object(c.useEffect)((()=>{f.on("room-created",(e=>l([...r,e]))),console.log(r)}),[r]);return s?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{marginTop:"2em"},className:"row",children:[Object(b.jsx)("div",{className:"col s12 m6",children:Object(b.jsx)("div",{style:{borderRadius:"0.5em"},className:"card blue-grey darken-1",children:Object(b.jsxs)("div",{className:"card-content white-text",children:[Object(b.jsxs)("span",{className:"card-title",children:["Welcome ",s?s.name:""]}),Object(b.jsxs)("form",{onSubmit:e=>{e.preventDefault(),f.emit("create-room",a),console.log(a),n("")},children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"input-field col s12",children:[Object(b.jsx)("input",{placeholder:"Enter Room Name",id:"room",type:"text",className:"validate",value:a,onChange:e=>n(e.target.value)}),Object(b.jsx)("label",{htmlFor:"room",children:"Room"})]})}),Object(b.jsx)("button",{style:{borderRadius:"0.5em"},className:"btn",children:" Create Room "})]})]})})}),Object(b.jsx)("div",{className:"col s6 m5 offset-1",children:Object(b.jsx)(N,{rooms:r})})]})}):Object(b.jsx)(i.a,{to:"/login"})};var y=e=>{let{logout:s}=e;return Object(b.jsx)("li",{children:Object(b.jsx)("a",{onClick:s,href:"/#",children:"LogOut"})})};var S=()=>Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/login",children:"LogIN"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/signup",children:"SignUp"})})]});var C=()=>{const{user:e,setUser:s}=Object(c.useContext)(o),t=e?Object(b.jsx)(y,{logout:async()=>{try{const e=(await fetch("".concat(x,"/logout"),{credentials:"include"})).json();console.log("Logout Data",e),s(null)}catch(e){console.log(e)}}}):Object(b.jsx)(S,{});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"green",children:Object(b.jsxs)("div",{className:"nav-wrapper",children:[Object(b.jsx)("a",{style:{width:"fit-content",margin:"0 auto"},href:"/",className:"brand-logo",children:"Chat"}),Object(b.jsx)("a",{href:"/#","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(b.jsx)("i",{className:"material-icons",children:"menu"})}),Object(b.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:t})]})}),Object(b.jsx)("ul",{className:"sidenav",id:"mobile-demo",children:t})]})};var _=()=>{const{user:e,setUser:s}=Object(c.useContext)(o),[t,a]=Object(c.useState)(""),[n,r]=Object(c.useState)(""),[l,j]=Object(c.useState)(""),[d,m]=Object(c.useState)(""),[u,h]=Object(c.useState)(""),[O,g]=Object(c.useState)("");return e?(console.log("Thisssssssssssssssssssss"),Object(b.jsx)(i.a,{to:"/"})):Object(b.jsxs)("div",{style:{width:"20em",margin:"0 auto"},className:"row",children:[Object(b.jsx)("h4",{children:"Log In"}),Object(b.jsxs)("form",{className:"col s12",onSubmit:async e=>{e.preventDefault(),m(""),h(""),g(""),console.log(t,n,l);try{const e=await fetch("".concat(x,"/login"),{method:"POST",credentials:"include",body:JSON.stringify({name:t,email:n,password:l}),headers:{"Content-Type":"application/json"}}),c=await e.json();console.log(c),c.errors&&(h(c.errors.email),m(c.errors.name),g(c.errors.password)),c.user&&s(c.user)}catch(e){console.log(e)}},children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"input-field col s12",children:[Object(b.jsx)("input",{id:"email",type:"email",className:"validate",value:n,onChange:e=>r(e.target.value)}),Object(b.jsx)("div",{className:"email error red-text",children:u}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"})]})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"input-field col s12",children:[Object(b.jsx)("input",{id:"password",type:"password",className:"validate",value:l,onChange:e=>j(e.target.value)}),Object(b.jsx)("div",{className:"password error red-text",children:O}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"})]})}),Object(b.jsx)("button",{className:"btn",children:"Log In"})]})]})};var F=()=>{const{user:e,setUser:s}=Object(c.useContext)(o),[t,a]=Object(c.useState)(""),[n,r]=Object(c.useState)(""),[l,j]=Object(c.useState)(""),[d,m]=Object(c.useState)(""),[u,h]=Object(c.useState)(""),[O,g]=Object(c.useState)("");return e?(console.log("Thisssssssssssssssssssss"),Object(b.jsx)(i.a,{to:"/"})):Object(b.jsxs)("div",{style:{width:"20em",margin:"0 auto"},className:"row",children:[Object(b.jsx)("h4",{style:{width:"fit-content",margin:"1em auto"},children:"Sign Up"}),Object(b.jsxs)("form",{className:"col s12",onSubmit:async e=>{e.preventDefault(),m(""),h(""),g(""),console.log(t,n,l);try{const e=await fetch("".concat(x,"/signup"),{method:"POST",credentials:"include",body:JSON.stringify({name:t,email:n,password:l}),headers:{"Content-Type":"application/json"}}),c=await e.json();console.log(c),c.errors&&(h(c.errors.email),m(c.errors.name),g(c.errors.password)),c.user&&s(c.user)}catch(e){console.log(e)}},children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"input-field col s12",children:[Object(b.jsx)("input",{id:"name",type:"text",className:"validate",value:t,onChange:e=>a(e.target.value)}),Object(b.jsx)("div",{className:"name error red-text",children:d}),Object(b.jsx)("label",{htmlFor:"name",children:"Name"})]})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"input-field col s12",children:[Object(b.jsx)("input",{id:"email",type:"email",className:"validate",value:n,onChange:e=>r(e.target.value)}),Object(b.jsx)("div",{className:"email error red-text",children:u}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"})]})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"input-field col s12",children:[Object(b.jsx)("input",{id:"password",type:"password",className:"validate",value:l,onChange:e=>j(e.target.value)}),Object(b.jsx)("div",{className:"password error red-text",children:O}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"})]})}),Object(b.jsx)("button",{className:"btn",children:" Sign Up"})]})]})};var E=function(){const[e,s]=Object(c.useState)(null);return Object(c.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(x,"/verifyUser"),{credentials:"include",headers:{"Content-Type":"application/json"}}),t=await e.json();console.log(t),s(t)}catch(e){console.log(e)}})()}),[]),Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.Provider,{value:{user:e,setUser:s},children:[Object(b.jsx)(C,{}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",component:w}),Object(b.jsx)(i.b,{exact:!0,path:"/login",component:_}),Object(b.jsx)(i.b,{exact:!0,path:"/signup",component:F}),Object(b.jsx)(i.b,{path:"/chat/:room_id/:room_name",component:v})]})]})})})};var T=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,466)).then((s=>{let{getCLS:t,getFID:c,getFCP:a,getLCP:n,getTTFB:r}=s;t(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),T()}},[[465,1,2]]]);
//# sourceMappingURL=main.b01cf453.chunk.js.map