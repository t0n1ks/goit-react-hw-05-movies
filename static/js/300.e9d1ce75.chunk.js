"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[300],{528:function(e,t,r){r.d(t,{Hx:function(){return m},Y5:function(){return f},wr:function(){return o},xc:function(){return v},z1:function(){return i}});var n=r(861),a=r(757),s=r.n(a),c="b07e0fe67ef678118a4e6eba95afb560";function o(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n.cast);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},300:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),s=r(757),c=r.n(s),o=r(791),u=r(689),i=r(528),p=r(87),f="MoviesList_moviesListContainer__biLP6",h="MoviesList_movieItem__hvWxA",v="MoviesList_movieImage__LKxH9",l="MoviesList_movieTitle__WbhsQ",m="MoviesList_moviesList__WLLGS",x=r(351),d=r(184);var _=function(e){var t=e.searchQuery,r=e.movies,s=(0,o.useState)([]),u=(0,a.Z)(s,2),_=u[0],b=u[1],w=(0,o.useCallback)((0,n.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,(0,i.z1)(t);case 4:r=e.sent,b(r.results),e.next=12;break;case 8:return e.next=10,(0,i.wr)();case 10:n=e.sent,b(n.results);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),[t]);(0,o.useEffect)((function(){w()}),[w]);var y=r.length>0?r:_;return(0,d.jsx)("div",{className:f,children:(0,d.jsx)("ul",{className:m,children:y&&y.map((function(e){return(0,d.jsx)("li",{className:h,children:(0,d.jsxs)(p.rU,{to:"/movies/".concat(e.id),children:[(0,d.jsx)("img",{className:v,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):x,alt:e.title}),(0,d.jsx)("p",{className:l,children:e.title})]})},e.id)}))})})},b="SearchForm_form__YhZ2F",w="SearchForm_input__tPSXA",y="SearchForm_button__OGyWA";var k=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),r=t[0],n=t[1],s=(0,u.s0)();return(0,d.jsxs)("form",{className:b,onSubmit:function(e){e.preventDefault(),s("/movies?query=".concat(r)),n("")},children:[(0,d.jsx)("input",{className:w,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:r,onChange:function(e){n(e.target.value)}}),(0,d.jsx)("button",{type:"submit",className:y,children:"Search"})]})};var g=function(){var e=(0,u.TH)(),t=(0,o.useState)([]),r=(0,a.Z)(t,2),s=r[0],p=r[1],f=(0,o.useState)(""),h=(0,a.Z)(f,2),v=h[0],l=h[1];(0,o.useEffect)((function(){if(e.search){var t=new URLSearchParams(e.search).get("query");if(t)return l(t),void x(t)}m()}),[e.search,v]);var m=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.wr)();case 3:t=e.sent,p(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.z1)(t);case 3:r=e.sent,p(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"Movies"}),(0,d.jsx)(k,{onSearch:function(e){e.trim()&&(l(e),x(e))}}),(0,d.jsx)(_,{movies:s})]})}},351:function(e,t,r){e.exports=r.p+"static/media/noImg.baba1a7394e8054d69cf.png"},861:function(e,t,r){function n(e,t,r,n,a,s,c){try{var o=e[s](c),u=o.value}catch(i){return void r(i)}o.done?t(u):Promise.resolve(u).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var c=e.apply(t,r);function o(e){n(c,a,s,o,u,"next",e)}function u(e){n(c,a,s,o,u,"throw",e)}o(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=300.e9d1ce75.chunk.js.map