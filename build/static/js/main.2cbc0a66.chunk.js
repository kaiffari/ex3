(this.webpackJsonpex3front=this.webpackJsonpex3front||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),s=n(18),a=n.n(s),d=(n(23),n(3)),o=n(4),c=n(8),l=n(7),m=n(6),h=n(5),u=n.n(h),j=n(0),b=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).removeReminder=function(e){e.preventDefault(),window.confirm("Haluatko todella poistaa?")&&u.a.delete("https://thawing-bayou-48463.herokuapp.com/api/reminders/"+e.target.id).then((function(t){i.props.deleteReminder(e.target.id),console.log("deleted: ",e.target.id)})).catch((function(e){console.log("delete error: ",e.message)}))},i}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return console.log("render"),this.props.reminders.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Reminders"}),Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:this.props.reminders.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.timestamp.toLocaleString()}),Object(j.jsx)("td",{children:t.name}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{id:t.id,onClick:e.removeReminder,children:"Poista"})}),Object(j.jsx)("td",{children:t.important?"t\xe4rke\xe4!":"v\xe4hemm\xe4n t\xe4rke\xe4"})]},t.id)}))})})]}):Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Reminders"})})}}]),n}(r.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).addReminder=function(e){if(e.preventDefault(),-1==i.props.reminders.findIndex((function(e){return e.name===i.state.newReminder}))){var t=i.state.newTime.toISOString(),n={name:i.state.newReminder,timestamp:t,important:Math.random()>.7};u.a.post("https://thawing-bayou-48463.herokuapp.com/api/reminders",n).then((function(e){var t=i.props.reminders.concat(n);i.props.setReminder(t),i.setState({newReminder:""}),console.log("post promise fulfilled for: ",n.name,"id: ",e.id)})).catch((function(e){console.log(e.message),window.alert("Ei voitu lis\xe4t\xe4!")}))}else alert("A duplicate reminder exists already!")},i.handleReminderChange=function(e){console.log("new value: ",{newReminder:e.target.value}),i.setState({newReminder:e.target.value})},i.handleTimeChange=function(e){i.setState({newTime:e.target.value})},i.state={newReminder:"",newTime:new Date},i}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.addReminder,children:[Object(j.jsxs)("div",{children:["Aihe: ",Object(j.jsx)("input",{value:this.state.newReminder,onChange:this.handleReminderChange})]}),Object(j.jsxs)("div",{children:["Aika: ",Object(j.jsx)("input",{value:this.state.newTime,onChange:this.handleTimeChange})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"Lis\xe4\xe4"})})]})})}}]),n}(r.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={reminders:[],password:""},i.setReminder=i.setReminder.bind(Object(c.a)(i)),i.deleteReminder=i.deleteReminder.bind(Object(c.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://thawing-bayou-48463.herokuapp.com/api/reminders").then((function(t){console.log("get promise fulfilled"),console.log("response data: ",t.data),e.setState({reminders:t.data})}))}},{key:"setReminder",value:function(e){this.setState({reminders:e})}},{key:"deleteReminder",value:function(e){console.log("deleteReminder from status...",{id:e});var t=this.state.reminders.filter((function(t){return t.id!=e}));this.setState({reminders:t})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Add Reminder"}),Object(j.jsx)(p,{reminders:this.state.reminders,setReminder:this.setReminder}),Object(j.jsx)(b,{reminders:this.state.reminders,deleteReminder:this.deleteReminder})]})}}]),n}(r.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.2cbc0a66.chunk.js.map