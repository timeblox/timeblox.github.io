(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{86:function(e,t,a){},87:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),s=(a(86),a(69)),l=a(46),o=a(51),d=a(39),u=(a(87),a(68)),j=a.n(u),m=a(144),b=a(147),x=a(138),h=a(142),p=a(132),O=a(148),g=a(149),f=a(150),v=a(141),k=a(145),y=a(143),C=a(135),T=a(137),D=a(97),N=a(52),S=a.n(N),w=a(61),A=a(67),I=a.n(A),F=a(6),q=["yeshanbe","doshanbe","seshanbe","charshanbe","panshanbe","jome","shanbe"],L=new Date,W=Object(p.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginTop:e.spacing(1),marginLeft:e.spacing(1),marginRight:e.spacing(1),width:300},formControl:{margin:e.spacing(1),minWidth:120},Task:{marginTop:"10px",marginBottom:"10px",marginLeft:"16px",marginRight:"16px"},TaskContent:{paddingTop:"24px",paddingBottom:"24px",display:"grid",gridTemplateColumns:"20fr 1fr",gridTemplateAreas:'"task trash"'},TaskText:{gridArea:"task",cursor:"default"},DeleteIcon:{gridArea:"trash",color:"#808080",cursor:"pointer"}}}));function R(e){var t=e.value,a=W(),r=Object(n.useState)(Object(w.randomColor)()),c=Object(d.a)(r,2),i=c[0];c[1];return Object(F.jsx)(C.a,{className:a.Task,style:{backgroundColor:i},children:Object(F.jsxs)(T.a,{className:a.TaskContent,children:[Object(F.jsx)(S.a,{minDeviceWidth:700,children:Object(F.jsxs)(D.a,{variant:"body1",color:"textSecondary",component:"p",className:a.TaskText,children:[t.text," for "+t.time.duration+" minutes"]})}),Object(F.jsx)(S.a,{maxDeviceWidth:699,children:Object(F.jsxs)(D.a,{variant:"body1",color:"textSecondary",component:"p",className:a.TaskText,children:[t.text," for "+t.time.duration+" minutes"]})}),Object(F.jsx)(I.a,{className:a.DeleteIcon})]})})}function B(e){return Object(F.jsxs)("div",{children:[e.value.map((function(e,t){return Object(F.jsx)(R,{value:e})})),"    "]})}function M(e){var t,a=e.value,n=[];for(t=0;t<a.length;t++){var r=new Date(a[t].time.start);(r.getFullYear()===L.getFullYear()&&r.getMonth()===L.getMonth()&&r.getDate()===L.getDate()||"weekly"===a[t].time.recurse&&r.getDay()===L.getDay())&&n.push(a[t])}return Object(F.jsx)("div",{children:Object(F.jsx)(B,{value:n})})}function P(e){var t=e.onAdd,a=e.onClose,r=e.open,c=W(),i=Object(n.useState)({}),s=Object(d.a)(i,2),u=s[0],j=s[1],m=function(){a()},p=function(e){e.persist(),j((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))};return Object(F.jsxs)(b.a,{onClose:m,"aria-labelledby":"form-dialog-title",open:r,children:[Object(F.jsx)(x.a,{id:"form-dialog-title",children:"Create a new Timeblock"}),Object(F.jsx)(O.a,{name:"start",value:u.start,onChange:p,required:!0,id:"datetime-local",label:"Choose start date and time",type:"datetime-local",defaultValue:L.toString,className:c.textField,InputLabelProps:{shrink:!0}}),Object(F.jsx)(O.a,{name:"end",value:u.end,onChange:p,required:!0,id:"time",label:"End time",type:"time",className:c.textField,InputLabelProps:{shrink:!0},inputProps:{step:300}}),Object(F.jsx)(O.a,{required:!0,id:"standard-required",label:"Task",defaultValue:"Study",className:c.textField,name:"text",value:u.text,onChange:p}),Object(F.jsxs)(v.a,{className:c.formControl,required:!0,children:[Object(F.jsx)(g.a,{id:"demo-simple-select-label",children:"Recurse"}),Object(F.jsxs)(k.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"recurse",value:u.recurse,onChange:p,children:[Object(F.jsx)(f.a,{value:"weekly",children:"Weekly"}),Object(F.jsx)(f.a,{value:"onetime",children:"One time"})]})]}),Object(F.jsxs)(h.a,{children:[Object(F.jsx)(y.a,{onClick:m,color:"primary",children:"Cancel"}),Object(F.jsx)(y.a,{color:"primary",onClick:function(e){e.preventDefault();var n={time:{start:u.start,recurse:u.recurse,duration:u.end},text:u.text};t(n),a()},children:"Add"})]})]})}var E=function(){var e=r.a.useState(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([{time:{start:"2021-03-28T12:00:00+04:30",recurse:"weekly",duration:120},text:"study"},{time:{start:"2021-03-28T20:00:00+04:30",recurse:"onetime",duration:15},text:"train something"}]),l=Object(d.a)(i,2),o=l[0],u=l[1];return Object(F.jsx)("div",{className:"App",children:Object(F.jsxs)("header",{className:"App-header",children:[Object(F.jsxs)("div",{id:"kk",children:[L.toLocaleString("fa-IR").toString(),Object(F.jsx)(m.a,{"aria-label":"delete",color:"primary",onClick:function(){c(!0)},children:Object(F.jsx)(j.a,{})}),Object(F.jsx)(P,{onAdd:function(e){u([].concat(Object(s.a)(o),[e]))},open:a,onClose:function(){c(!1)}})]}),Object(F.jsx)("div",{children:q[L.getDay()]}),Object(F.jsx)(M,{value:o})]})})};i.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(E,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.01e0bae1.chunk.js.map