(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c,o=n(0),i=n.n(o),r=n(8),a=n.n(r),l=(n(28),n(29),n(3)),d=n(11),s=n(5),u=n.n(s),j=n(12),b=n(4),p=n(13),f=n.n(p),O=Object(b.b)("todo/FaceTodo",Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),h=Object(b.b)("todo/Addface",function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:Object(b.d)(),title:t,completed:!1},e.next=3,f.a.post("https://jsonplaceholder.typicode.com/todos",n);case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(b.c)({name:"todo",initialState:{allTodo:[{id:1,title:"Cong Viec 1",completed:!1},{id:2,title:"Cong Viec 2",completed:!1},{id:3,title:"Cong Viec 3",completed:!1}]},reducers:{ComPleted:function(e,t){e.allTodo=e.allTodo.map((function(e){return e.id===t.payload&&(e.completed=!e.completed),e}))},DeLeTeTodo:function(e,t){e.allTodo=e.allTodo.filter((function(e){return e.id!==t.payload}))}},extraReducers:(c={},Object(d.a)(c,O.fulfilled,(function(e,t){console.log("Done"),e.allTodo=t.payload})),Object(d.a)(c,h.fulfilled,(function(e,t){e.allTodo.unshift(t.payload)})),c)}),x=m.reducer,v=Object(b.a)({reducer:{GiaTriStore:x}}),T=m.actions,y=T.ComPleted,g=T.DeLeTeTodo,w=function(e){return e.GiaTriStore.allTodo},k=v,C=n(1),S=function(){var e=Object(l.c)(w);return Object(C.jsxs)("div",{className:"navbar",children:[Object(C.jsx)("h1",{children:"My React App ReDuxx"}),Object(C.jsxs)("ul",{children:[Object(C.jsxs)("li",{children:["Home ",Object(C.jsx)("i",{className:"ti-angle-down"})]}),Object(C.jsx)("li",{children:"About"}),Object(C.jsxs)("li",{children:["Total Todos:",e.length]})]})]})},D=n(23),N=function(){var e=Object(l.b)(),t=Object(o.useState)(""),n=Object(D.a)(t,2),c=n[0],i=n[1];return Object(C.jsx)("div",{children:Object(C.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(h(c)),i("")},children:[Object(C.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){i(e.target.value)}}),Object(C.jsx)("input",{type:"submit"})]})})},A=void 0,R=function(){var e=Object(l.c)(w),t=Object(l.b)(),n=function(e){t(y(e))},c=function(e){t(g(e))};return Object(o.useEffect)((function(){t(O())}),[t]),Object(C.jsxs)("div",{className:"todo-list",children:[Object(C.jsx)(N,{}),Object(C.jsx)("ul",{children:e.map((function(e){return Object(C.jsxs)("li",{className:e.completed?"completed":"",children:[e.title,Object(C.jsx)("input",{type:"checkbox",checked:e.completed,onChange:n.bind(A,e.id)}),Object(C.jsx)("button",{onClick:c.bind(A,e.id),children:"delete"})]},e.id)}))})]})};var V=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(S,{}),Object(C.jsx)(R,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(l.a,{store:k,children:Object(C.jsx)(V,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.ee1cddb3.chunk.js.map