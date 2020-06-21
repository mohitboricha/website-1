(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),O=n,m=l["".concat(o,".").concat(O)]||l[O]||d[O]||c;return r?a.a.createElement(m,b(b({ref:t},p),{},{components:r})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(119)),o={id:"roadmap",title:"Roadmap",sidebar_label:"Roadmap"},b={id:"roadmap",title:"Roadmap",description:"Here is our roadmap for 2020",source:"@site/docs/roadmap.md",permalink:"/docs/roadmap",editUrl:"https://github.com/gogearbox/website/edit/master/docs/roadmap.md",sidebar_label:"Roadmap",sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Routing Architecture",permalink:"/docs/routing-architecture"}},i=[{value:"Here is our roadmap for 2020",id:"here-is-our-roadmap-for-2020",children:[{value:"14 June 2020 (v1.0.0)",id:"14-june-2020-v100",children:[]},{value:"October, 2020",id:"october-2020",children:[]}]}],p={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"here-is-our-roadmap-for-2020"},"Here is our roadmap for 2020"),Object(c.b)("h3",{id:"14-june-2020-v100"},"14 June 2020 (v1.0.0)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("strong",{parentName:"th"},"Feature / Task")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("strong",{parentName:"th"},"Current Status")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Routing: Basics"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Done")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Routing: Support matching all routes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Done")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Routing: Support parameters"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Done")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Routing: Support Grouping"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Done")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Middleware & Next support"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Done")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Caching"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Done")))),Object(c.b)("h3",{id:"october-2020"},"October, 2020"),Object(c.b)("p",null,"(",Object(c.b)("strong",{parentName:"p"},"Not finished TBD Later"),")"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("strong",{parentName:"th"},"Feature / Task")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("strong",{parentName:"th"},"Current Status")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Routing: Support static routes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);