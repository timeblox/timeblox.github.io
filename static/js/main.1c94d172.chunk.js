(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),i=(a(95),a(39)),o=a.n(i),l=a(51),d=a(46),u=a(52),j=a(40),m=(a(97),a(78)),p=a.n(m),b=a(172),h=a(175),x=a(166),f=a(170),O=a(160),g=a(176),v=a(177),y=a(178),k=a(169),C=a(173),T=a(171),w=a(163),S=a(165),D=a(125),N=a(53),A=a.n(N),I=a(70),F=a(77),q=a.n(F),L=a(71),P=a.n(L),W=a(6),R=["yeshanbe","doshanbe","seshanbe","charshanbe","panshanbe","jome","shanbe"],B=new Date,E=Object(O.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginTop:e.spacing(1),marginLeft:e.spacing(1),marginRight:e.spacing(1),width:300},formControl:{margin:e.spacing(1),minWidth:120},Task:{marginTop:"10px",marginBottom:"10px",marginLeft:"16px",marginRight:"16px"},TaskContent:{paddingTop:"24px",paddingBottom:"24px",display:"grid",gridTemplateColumns:"20fr 1fr",gridTemplateAreas:'"task trash"'},TaskText:{gridArea:"task",cursor:"default"},DeleteIcon:{gridArea:"trash",color:"#808080",cursor:"pointer"}}}));function J(e){var t=e.value,a=E(),r=Object(n.useState)(Object(I.randomColor)()),c=Object(j.a)(r,2),s=c[0];c[1];return Object(W.jsx)(w.a,{className:a.Task,style:{backgroundColor:s},children:Object(W.jsxs)(S.a,{className:a.TaskContent,children:[Object(W.jsx)(A.a,{minDeviceWidth:700,children:Object(W.jsxs)(D.a,{variant:"body1",color:"textSecondary",component:"p",className:a.TaskText,children:[t.text," for "+t.time.duration+" minutes"]})}),Object(W.jsx)(A.a,{maxDeviceWidth:699,children:Object(W.jsxs)(D.a,{variant:"body1",color:"textSecondary",component:"p",className:a.TaskText,children:[t.text," for "+t.time.duration+" minutes"]})}),Object(W.jsx)(q.a,{className:a.DeleteIcon})]})})}function M(e){return Object(W.jsxs)("div",{children:[e.value.map((function(e,t){return Object(W.jsx)(J,{value:e})})),"    "]})}function V(e){var t,a=e.value,n=[];for(t=0;t<a.length;t++){var r=new Date(a[t].time.start);(r.getFullYear()===B.getFullYear()&&r.getMonth()===B.getMonth()&&r.getDate()===B.getDate()||"weekly"===a[t].time.recurse&&r.getDay()===B.getDay())&&n.push(a[t])}return Object(W.jsx)("div",{children:Object(W.jsx)(M,{value:n})})}function Y(e){var t=e.onAdd,a=e.onClose,r=e.open,c=E(),s=Object(n.useState)({}),i=Object(j.a)(s,2),o=i[0],l=i[1],m=function(){a()},p=function(e){e.persist(),l((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))};return Object(W.jsxs)(h.a,{onClose:m,"aria-labelledby":"form-dialog-title",open:r,children:[Object(W.jsx)(x.a,{id:"form-dialog-title",children:"Create a new Timeblock"}),Object(W.jsx)(g.a,{name:"start",value:o.start,onChange:p,required:!0,id:"datetime-local",label:"Choose start date and time",type:"datetime-local",defaultValue:B.toString,className:c.textField,InputLabelProps:{shrink:!0}}),Object(W.jsx)(g.a,{name:"end",value:o.end,onChange:p,required:!0,id:"time",label:"End time",type:"time",className:c.textField,InputLabelProps:{shrink:!0},inputProps:{step:300}}),Object(W.jsx)(g.a,{required:!0,id:"standard-required",label:"Task",defaultValue:"Study",className:c.textField,name:"text",value:o.text,onChange:p}),Object(W.jsxs)(k.a,{className:c.formControl,required:!0,children:[Object(W.jsx)(v.a,{id:"demo-simple-select-label",children:"Recurse"}),Object(W.jsxs)(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"recurse",value:o.recurse,onChange:p,children:[Object(W.jsx)(y.a,{value:"weekly",children:"Weekly"}),Object(W.jsx)(y.a,{value:"onetime",children:"One time"})]})]}),Object(W.jsxs)(f.a,{children:[Object(W.jsx)(T.a,{onClick:m,color:"primary",children:"Cancel"}),Object(W.jsx)(T.a,{color:"primary",onClick:function(e){e.preventDefault();var n={time:{start:o.start,recurse:o.recurse,duration:o.end},text:o.text};t(n),a()},children:"Add"})]})]})}function z(){return(z=Object(l.a)(o.a.mark((function e(){var t,a,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(){var e=r.a.useState(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),i=Object(j.a)(s,2),d=i[0],u=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://cloud.pdcommunity.ir/timeblox/showjson.php");case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(W.jsx)("div",{className:"App",children:Object(W.jsxs)("header",{className:"App-header",children:[Object(W.jsxs)("div",{id:"kk",children:[B.toLocaleString("fa-IR").toString(),Object(W.jsx)(b.a,{"aria-label":"delete",color:"primary",onClick:function(){c(!0)},children:Object(W.jsx)(p.a,{})}),Object(W.jsx)(Y,{onAdd:function(e){(function(){return z.apply(this,arguments)})("https://cloud.pdcommunity.ir/timeblox/setjson.php",e).then((function(e){console.log(e)}))},open:a,onClose:function(){c(!1)}})]}),Object(W.jsx)("div",{children:R[B.getDay()]}),Object(W.jsx)(V,{value:d})]})})};s.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(G,{})}),document.getElementById("root"))},95:function(e,t,a){},97:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.1c94d172.chunk.js.map