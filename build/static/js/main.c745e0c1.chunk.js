(this.webpackJsonpex3front=this.webpackJsonpex3front||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),d=n(18),s=n.n(d),a=(n(23),n(3)),c=n(4),o=n(8),l=n(7),m=n(6),u=n(5),h=n.n(u),j=n(0),b=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).removeReminder=function(e){window.confirm("Haluatko todella poistaa?")&&(h.a.delete("/api/reminders/"+e.target.id).then((function(t){console.log("deleted: ",e.target.id)})),i.props.deleteReminder(e.target.id))},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return this.props.reminders.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Reminders"}),Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:this.props.reminders.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.timestamp}),Object(j.jsx)("td",{children:t.name}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{id:t.id,onClick:e.removeReminder,children:"Poista"})})]},t.id)}))})})]}):Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Reminders"})})}}]),n}(r.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).addReminder=function(e){if(e.preventDefault(),-1==i.props.reminders.findIndex((function(e){return e.name===i.state.newReminder}))){var t=0;i.props.reminders.map((function(e){e.id>t&&(t=e.id)})),t+=1;var n={name:i.state.newReminder,timestamp:i.state.newTime,id:t},r=i.props.reminders.concat(n);i.props.setReminder(r),h.a.post("/api/reminders",n).then((function(e){console.log("post promise fulfilled for id: ",t)})),i.state.newReminder=""}else alert("A duplicate reminder exists already!")},i.handleReminderChange=function(e){i.setState({newReminder:e.target.value})},i.handleTimeChange=function(e){i.setState({newTime:e.target.value})},i.state={newReminder:"",newTime:(new Date).toLocaleString()},i}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.addReminder,children:[Object(j.jsxs)("div",{children:["Aihe: ",Object(j.jsx)("input",{value:this.state.newReminder,onChange:this.handleReminderChange})]}),Object(j.jsxs)("div",{children:["Aika: ",Object(j.jsx)("input",{value:this.state.newTime,onChange:this.handleTimeChange})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"Lis\xe4\xe4"})})]})})}}]),n}(r.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={reminders:[]},i.setReminder=i.setReminder.bind(Object(o.a)(i)),i.deleteReminder=i.deleteReminder.bind(Object(o.a)(i)),i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/api/reminders").then((function(t){console.log("get promise fulfilled"),e.setState({reminders:t.data})}))}},{key:"setReminder",value:function(e){this.setState({reminders:e})}},{key:"deleteReminder",value:function(e){var t=this.state.reminders.filter((function(t){return t.id!=e}));this.setState({reminders:t})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Add Reminder"}),Object(j.jsx)(f,{reminders:this.state.reminders,setReminder:this.setReminder}),Object(j.jsx)(b,{reminders:this.state.reminders,deleteReminder:this.deleteReminder})]})}}]),n}(r.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,d=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),d(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.c745e0c1.chunk.js.map