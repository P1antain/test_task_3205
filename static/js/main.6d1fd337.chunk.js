(this.webpackJsonpreact_ts_redux=this.webpackJsonpreact_ts_redux||[]).push([[0],{10:function(e,a,t){e.exports={header:"Layout_header__3-Nto",navs:"Layout_navs__ZuuHf",navs_active:"Layout_navs_active__ZejiG",main:"Layout_main__1C0PE",footer:"Layout_footer__WMODn",link:"Layout_link__2m2cF"}},14:function(e,a,t){e.exports={block:"Main_block__V9ezX",form:"Main_form__7BFpd",wrapper:"Main_wrapper__2-eyc",input:"Main_input__2nKy7",btn:"Main_btn__1MHrV",err:"Main_err__3_AML",lists:"Main_lists__3diCn",list:"Main_list__XfCti",noSearch:"Main_noSearch__3ISGK"}},45:function(e,a,t){},46:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),s=t(23),i=t.n(s),u=(t(45),t(46),t(4)),l=t(3),j=t.n(l),o=t(12),b=t(2),d=t(6),h=t(25),f=t(14),O=t.n(f),m=t(20),p=function(){return Object(m.b)()},_=m.c,g=t(5),x=t(24),v=Object(x.b)({name:"Default",initialState:{language:{lang:"",currency:""},item:[],searching:{count:"",value:[],result:[]}},reducers:{getLanguageReduce:function(e,a){return Object(b.a)(Object(b.a)({},e),{},{language:Object(b.a)(Object(b.a)({},e.language),{},{lang:a.payload})})},getCurrencyReduce:function(e,a){return Object(b.a)(Object(b.a)({},e),{},{language:Object(b.a)(Object(b.a)({},e.language),{},{currency:a.payload})})},getItem:function(e,a){return Object(b.a)(Object(b.a)({},e),{},{item:Object(g.a)(a.payload)})},getCount:function(e,a){return Object(b.a)(Object(b.a)({},e),{},{searching:Object(b.a)(Object(b.a)({},e.searching),{},{count:a.payload})})},getValue:function(e,a){return Object(b.a)(Object(b.a)({},e),{},{searching:Object(b.a)(Object(b.a)({},e.searching),{},{value:Object(g.a)(a.payload)})})},getSearchResult:function(e,a){return Object(b.a)(Object(b.a)({},e),{},{searching:Object(b.a)(Object(b.a)({},e.searching),{},{result:Object(g.a)(a.payload)})})}}}),y=v.actions,N=y.getLanguageReduce,k=y.getCurrencyReduce,C=y.getItem,S=y.getValue,R=y.getCount,U=y.getSearchResult,w=v.reducer,M=t(39),E=t.n(M).a.create({baseURL:"https://freecurrencyapi.net/api/v2"}),L="143c5c20-3d55-11ec-a0b7-770eb5c13def",F=t(1),D=function(){var e=p(),a=Object(h.a)(),t=a.register,n=a.handleSubmit,c=a.formState.errors,s=_((function(e){return e.default.searching.count})),i=_((function(e){return e.default.searching.value})),u=_((function(e){return e.default.searching.result})),l=_((function(e){return e.default.language.lang}));function f(){return f=Object(d.a)(j.a.mark((function a(){var t,n,c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.get("/latest?apikey=".concat(L,"&base_currency=").concat(i[0])).then((function(e){return e.data.data}));case 2:t=a.sent,n=Object.entries(t).map((function(e){var a=Object(o.a)(e,2);return{name:a[0],price:a[1]}})),c=n.filter((function(e){return e.name.includes(i[1])})),e(U(c));case 6:case"end":return a.stop()}}),a)}))),f.apply(this,arguments)}r.a.useEffect((function(){!function(){f.apply(this,arguments)}()}),[i]);var m="";return"en"===l?m="Search again":"ru"===l&&(m="\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a"),Object(F.jsxs)("div",{className:O.a.block,children:[Object(F.jsxs)("form",{onSubmit:n((function(a){var t,n=a.search.toUpperCase(),c=null===n||void 0===n||null===(t=n.match(/\d/g))||void 0===t?void 0:t.join(""),r=n.match(/[A-Z]{3}/gi);e(R(c)),e(S(r))})),className:O.a.form,children:[Object(F.jsxs)("div",{className:O.a.wrapper,children:[Object(F.jsx)("input",Object(b.a)(Object(b.a)({defaultValue:"15 usd in rub"},t("search",{required:!0})),{},{className:O.a.input})),Object(F.jsx)("button",{className:O.a.btn,children:"Seach"})]}),c.search&&Object(F.jsx)("span",{className:O.a.err,children:"This field is required"})]}),0!==u.length?Object(F.jsxs)("ul",{className:O.a.lists,children:[Object(F.jsxs)("h2",{children:[s," ",i[0]," ="," "]}),u.map((function(e,a){return Object(F.jsxs)("li",{className:O.a.list,children:[Object(F.jsx)("span",{children:Math.floor(e.price*s*100)/100}),Object(F.jsx)("span",{children:e.name})]},a)}))]}):Object(F.jsx)(F.Fragment,{children:""!==s&&Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("h2",{className:O.a.noSearch,children:m})})})]})},B=t(8),V=t.n(B);!function(e){e.USD="USD",e.RUB="RUB",e.EUR="EUR"}(n||(n={}));var I=function(){var e=Object(h.a)(),a=e.register,t=e.handleSubmit,n=_((function(e){return e.default.language.currency})),c=_((function(e){return e.default.language.lang})),s=p();function i(){return(i=Object(d.a)(j.a.mark((function e(){var a,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/latest?apikey=".concat(L,"&base_currency=").concat(n)).then((function(e){return e.data.data}));case 2:a=e.sent,t=Object.entries(a).map((function(e){var a=Object(o.a)(e,2);return{name:a[0],price:a[1]}})),s(C(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.useEffect((function(){!function(){i.apply(this,arguments)}()}),[n]);var u=_((function(e){return e.default.item})),l="",f="",O="",m="",g="";return"en"===c?(l="Request your currency",f="Currency",O="Price",m="Price for",g="Request"):"ru"===c&&(l="\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0446\u0435\u043d\u0443",f="\u0412\u0430\u043b\u044e\u0442\u0430",O="\u0426\u0435\u043d\u0430",m="\u0426\u0435\u043d\u0430 \u0437\u0430 ",g="\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c"),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:V.a.block,children:[Object(F.jsxs)("form",{onSubmit:t((function(e){s(k(e.currency))})),className:V.a.form,children:[Object(F.jsx)("label",{children:l}),Object(F.jsxs)("div",{className:V.a.wrapper,children:[Object(F.jsxs)("select",Object(b.a)(Object(b.a)({},a("currency")),{},{className:V.a.select,children:[Object(F.jsx)("option",{value:"USD",children:"USD"}),Object(F.jsx)("option",{value:"RUB",children:"RUB"}),Object(F.jsx)("option",{value:"EUR",children:"EUR"})]})),Object(F.jsx)("input",{type:"submit",value:g,className:V.a.btn})]})]}),Object(F.jsxs)("h2",{className:V.a.header,children:[m," 1 ",n]}),Object(F.jsxs)("ul",{className:V.a.items,children:[Object(F.jsxs)("div",{className:V.a.item,children:[Object(F.jsxs)("span",{className:V.a.span,children:[f,":"]}),Object(F.jsxs)("span",{className:V.a.span,children:[O,":"]})]}),u.slice(0,10).map((function(e,a){return Object(F.jsxs)("li",{className:V.a.item,children:[Object(F.jsx)("span",{className:V.a.span,children:e.name})," ",Object(F.jsx)("span",{className:V.a.span,children:e.price})]},a)}))]})]})})},P=t(10),q=t.n(P),A=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("footer",{className:q.a.footer,children:[Object(F.jsxs)("a",{href:"https://github.com/P1antain",target:"_blank",rel:"noreferrer",className:q.a.link,children:[" ","Git"]}),Object(F.jsxs)("a",{href:"https://t.me/p1antain",target:"_blank",rel:"noreferrer",className:q.a.link,children:[" ","Telegram"]}),Object(F.jsxs)("a",{href:"mailto: lifeg1alce@yandex.ru",target:"_blank",rel:"noreferrer",className:q.a.link,children:[" ","Email"]})]})})},G=t(17),H=function(){var e=_((function(e){return e.default.language.lang})),a=Object(u.g)(),t="",n="";return"en"===e?(t="Home",n="Exchange Rates"):"ru"===e&&(t="\u0414\u043e\u043c\u043e\u0439",n="\u041e\u0431\u043c\u0435\u043d\u043d\u044b\u0439 \u043a\u0443\u0440\u0441"),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("header",{className:q.a.header,children:[Object(F.jsx)(G.b,{to:"/",className:q.a.navs,activeClassName:q.a.navs_active,isActive:function(){return"/"===a.pathname},children:t}),Object(F.jsx)(G.b,{to:"/currency",className:q.a.navs,activeClassName:q.a.navs_active,children:n})]})})},J=function(e){var a=e.children;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(H,{}),Object(F.jsx)("main",{className:q.a.main,children:a}),Object(F.jsx)(A,{})]})},T=function(){Object(u.g)();var e=Object(u.f)();r.a.useEffect((function(){e.push("/")}),[]);var a=p();return r.a.useEffect((function(){!function(){var e=navigator.language.slice(0,2).toLowerCase();a(N(e)),"en"===e?a(k("USD")):"ru"===e&&a(k("RUB"))}()}),[]),Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(J,{children:Object(F.jsxs)(u.c,{children:[Object(F.jsx)(u.a,{exact:!0,path:"/",component:D}),Object(F.jsx)(u.a,{path:"/currency",component:I})]})})})},X=Object(x.a)({reducer:{default:w}});t(76);i.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(m.a,{store:X,children:Object(F.jsx)(G.a,{children:Object(F.jsx)(T,{})})})}),document.getElementById("root"))},8:function(e,a,t){e.exports={block:"Currency_block__2r4Gk",form:"Currency_form__2zcko",wrapper:"Currency_wrapper__2-xDU",select:"Currency_select__1yl64",btn:"Currency_btn__2UJPV",header:"Currency_header__AOFxk",items:"Currency_items__cwboD",item:"Currency_item__2XTNH",span:"Currency_span__1UI94"}}},[[77,1,2]]]);
//# sourceMappingURL=main.6d1fd337.chunk.js.map