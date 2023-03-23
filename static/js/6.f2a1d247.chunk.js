"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{213:function(n,e,t){t.d(e,{Z:function(){return g}});var r,o,c,i,a=t(168),u=t(87),s=t(444),p=s.ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  // justify-content: space-between;\n  gap: 20px;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n"]))),d=(0,s.ZP)(u.rU)(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 150px;\n  border-radius: 2px;\n  background-color: #e1e0de;\n  text-align: center;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),l=s.ZP.img(c||(c=(0,a.Z)(["\n  width: 142px;\n  margin: 4px;\n  margin-bottom: 0;\n"]))),f=s.ZP.p(i||(i=(0,a.Z)(["\n  margin: 10px 0;\n  font-size: 18px;\n"]))),x=t(2),h=t(689),m=t(184);function g(n){var e=n.movies,t=(0,h.TH)();return(0,m.jsx)(p,{children:e.map((function(n){return(0,m.jsxs)(d,{to:"/movies/".concat(n.id),state:{from:t},children:[n.poster_path?(0,m.jsx)(l,{src:"".concat("https://image.tmdb.org/t/p/original/").concat(n.poster_path),alt:n.title,width:"142"}):(0,m.jsx)(l,{src:x,alt:n.title}),(0,m.jsx)(f,{children:n.title})]},n.id)}))})}},6:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,o,c,i=t(439),a=t(791),u=t(14),s=t(213),p=t(402),d=t(87),l=t(502),f=t(168),x=t(444),h=x.ZP.form(r||(r=(0,f.Z)(["\n  margin-bottom: 16px;\n"]))),m=x.ZP.input(o||(o=(0,f.Z)(["\n  margin-right: 16px;\n  padding: 4px;\n"]))),g=x.ZP.button(c||(c=(0,f.Z)(["\n  border: 1px solid orange;\n  border-radius: 4px;\n  padding: 8px 16px;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: orange;\n  }\n"]))),v=t(184);function b(){var n,e=(0,a.useState)("idle"),t=(0,i.Z)(e,2),r=t[0],o=t[1],c=(0,a.useState)([]),f=(0,i.Z)(c,2),x=f[0],b=f[1],j=(0,d.lr)(),Z=(0,i.Z)(j,2),w=Z[0],y=Z[1],k=null!==(n=w.get("query"))&&void 0!==n?n:"";(0,a.useEffect)((function(){""!==k&&(b([]),o("pending"),(0,l.Wf)(k).then((function(n){return n.ok?n.json():Promise.reject("Error")})).then((function(n){0!==n.results.length?(b(n.results),o("resolved")):o("rejected")})).catch((function(n){o("rejected")})))}),[k]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e=n.target.elements[0].value.trim().toLowerCase();if(""===e)return u.ZP.error("Please, enter your search request"),void y({});y({query:e})},children:[(0,v.jsx)(m,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies..."}),(0,v.jsx)(g,{type:"submit",children:"Search"})]}),(0,v.jsxs)("div",{children:["pending"===r&&(0,v.jsx)(p.s5,{strokeColor:"#F9721F",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0}),"rejected"===r&&(0,v.jsx)("h1",{children:"Something went wrong. Please, try again"}),"resolved"===r&&(0,v.jsx)(s.Z,{movies:x})]})]})}},502:function(n,e,t){t.d(e,{TP:function(){return a},Wd:function(){return u},Wf:function(){return i},XT:function(){return c},tx:function(){return s}});var r="https://api.themoviedb.org/3/",o="5e4720626ca4c6cc9f658e6222926a8a",c=function(n){return fetch("".concat(r).concat(n,"?api_key=").concat(o))},i=function(n){return fetch("".concat(r,"search/movie?api_key=").concat(o,"&query=").concat(n))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o))},s=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o))}},2:function(n,e,t){n.exports=t.p+"static/media/noPoster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=6.f2a1d247.chunk.js.map