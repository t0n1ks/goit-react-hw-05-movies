"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{528:function(t,e,n){n.d(e,{Hx:function(){return m},Y5:function(){return f},wr:function(){return u},xc:function(){return v},z1:function(){return o}});var r=n(861),c=n(757),a=n.n(c),s="b07e0fe67ef678118a4e6eba95afb560";function u(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.cast);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},149:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),c=n(439),a=n(757),s=n.n(a),u=n(791),i=n(689),o=n(184);var p=function(t){var e=t.cast;return(0,o.jsx)("div",{className:"castList",children:e.map((function(t){return(0,o.jsxs)("div",{className:"castItem",children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:"".concat(t.name," profile"),className:"castImage"}),(0,o.jsx)("p",{className:"castName",children:t.name}),(0,o.jsxs)("p",{className:"castCharacter",children:["Character: ",t.character]})]},t.id)}))})},f=n(528);var h=function(){var t=(0,i.UO)().movieId,e=(0,u.useState)([]),n=(0,c.Z)(e,2),a=n[0],h=n[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.xc)(t);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Cast"}),(0,o.jsx)(p,{cast:a})]})}},861:function(t,e,n){function r(t,e,n,r,c,a,s){try{var u=t[a](s),i=u.value}catch(o){return void n(o)}u.done?e(i):Promise.resolve(i).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,a){var s=t.apply(e,n);function u(t){r(s,c,a,u,i,"next",t)}function i(t){r(s,c,a,u,i,"throw",t)}u(void 0)}))}}n.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=149.5ed35519.chunk.js.map