"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[582],{528:function(t,e,n){n.d(e,{Hx:function(){return d},Y5:function(){return f},wr:function(){return s},xc:function(){return v},z1:function(){return o}});var r=n(861),c=n(757),u=n.n(c),a="b07e0fe67ef678118a4e6eba95afb560";function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.cast);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},582:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),c=n(439),u=n(757),a=n.n(u),s=n(791),i=n(528),o=n(87),p=n(184);var f=function(){var t=(0,s.useState)([]),e=(0,c.Z)(t,2),n=e[0],u=e[1];return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.wr)();case 3:e=t.sent,u(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending Movies"}),(0,p.jsx)("ul",{children:n.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"/movies/".concat(t.id),children:(0,p.jsx)("p",{children:t.title})})},t.id)}))})]})};var h=function(){var t=(0,s.useState)([]),e=(0,c.Z)(t,2),n=e[0],u=e[1],o=(0,s.useState)(!0),h=(0,c.Z)(o,2),v=h[0],l=h[1];(0,s.useEffect)((function(){d()}),[]);var d=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.wr)();case 3:e=t.sent,u(e.results),l(!1),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0),l(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return(0,p.jsx)("div",{children:v?(0,p.jsx)("p",{children:"Loading..."}):(0,p.jsx)(f,{movies:n||[]})})}},861:function(t,e,n){function r(t,e,n,r,c,u,a){try{var s=t[u](a),i=s.value}catch(o){return void n(o)}s.done?e(i):Promise.resolve(i).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,u){var a=t.apply(e,n);function s(t){r(a,c,u,s,i,"next",t)}function i(t){r(a,c,u,s,i,"throw",t)}s(void 0)}))}}n.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=582.34c3af7d.chunk.js.map