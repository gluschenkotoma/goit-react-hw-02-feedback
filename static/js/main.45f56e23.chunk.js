(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,n,t){e.exports={item:"FeedbackOptions_item__15mKA"}},23:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var c,o=t(0),a=t.n(o),i=t(7),s=t.n(i),r=(t(23),t(8)),l=t(9),d=t(10),b=t(18),u=t(17),j=t(11),h=t(12),p=Object(h.a)(c||(c=Object(j.a)(["\n\n* {\n  box-sizing: border-box;\n  }\n\n  html {\n    scroll-behavior: smooth;\n\n  }\n\n  body {\n    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',\n      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\n      sans-serif;\n    background-color: #fff;\n    color: #010101;\n  }\n\n  img {\n    display: block;\n    max-width: 100%;\n    \n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    margin: 0;\n  \n\n  }\n"]))),f=t(1);var v=function(e){var n=e.title,t=void 0===n?"":n,c=e.children;return Object(f.jsxs)("section",{children:[t&&Object(f.jsx)("h2",{children:t}),c]})},O=t(16),g=t.n(O);var m=function(e){var n=e.options,t=e.onLeaveFeedback;return console.log("options",n),Object(f.jsx)("ul",{children:n.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)("button",{type:"button",feedbackRating:e,onClick:function(){return t(e)},className:g.a.item,children:e})},e)}))})},x=t(3),k=t.n(x);function y(e){var n=e.options,t=e.total,c=void 0===t?0:t,o=e.positivePercentage,a=void 0===o?0:o;return Object(f.jsxs)("div",{children:[F(n),Object(f.jsxs)("p",{className:k.a.points,children:["Total: ",c]}),Object(f.jsxs)("p",{className:k.a.points,children:["Positive feedback: ",a,"%"]})]})}function F(e){return e.map((function(n){return Object(f.jsxs)("p",{className:k.a.point,children:[n,": ",e[n]]},n)}))}function S(e){var n=e.message,t=void 0===n?"":n;return Object(f.jsx)("div",{children:t})}var _=function(e){Object(b.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={good:0,neutral:0,bad:0},e.addFeedback=function(n){e.setState((function(e){return Object(r.a)({},n,e[n]+1)})),console.log([n])},e.countTotalFeedback=function(){var n=e.state;return n.good+n.neutral+n.bad},e.countPositiveFeedbackPercentage=function(){var n=e.countTotalFeedback();return n>0?Math.round(e.state.good/n*100):0},e}return Object(d.a)(t,[{key:"render",value:function(){var e=Object.keys(this.state),n=this.countTotalFeedback();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{}),Object(f.jsx)(v,{title:"Please leave feedback",children:Object(f.jsx)(m,{options:e,onLeaveFeedback:this.addFeedback})}),Object(f.jsx)(v,{title:"Statistics",children:n>0?Object(f.jsx)(y,{options:e,total:n,positivePercentage:this.countPositiveFeedbackPercentage()}):Object(f.jsx)(S,{message:"No feedback given"})})]})}}]),t}(o.Component),P=_;s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))},3:function(e,n,t){e.exports={points:"Statistics_points__24Sj6",point:"Statistics_point__14fzA"}}},[[27,1,2]]]);
//# sourceMappingURL=main.45f56e23.chunk.js.map