(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),c=(r(0),r(118)),o=r(120),i={id:"benchmarks",title:"Benchmarks",sidebar_label:"Benchmarks"},b={id:"benchmarks",isDocsHomePage:!1,title:"Benchmarks",description:"Go web framework benchmark",source:"@site/docs/benchmarks.md",permalink:"/docs/benchmarks",editUrl:"https://github.com/gogearbox/website/edit/master/docs/benchmarks.md",sidebar_label:"Benchmarks",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Gearbox",permalink:"/docs/gearbox"}},l=[{value:"Go web framework benchmark",id:"go-web-framework-benchmark",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"go-web-framework-benchmark"},"Go web framework benchmark"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/smallnest/go-web-framework-benchmark"}),"https://github.com/smallnest/go-web-framework-benchmark")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CPU")," 3.1 GHz Intel Xeon\xae Platinum 8175M (24 physical cores, 48 logical cores)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"MEMORY")," 192GB"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GO")," go 1.14.6 linux/amd64"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"OS")," Linux")),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:Object(o.a)("img/benchmark.png")}),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("img",{src:Object(o.a)("img/benchmark-latency.png")}),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("img",{src:Object(o.a)("img/benchmark-alloc.png")}),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("img",{src:Object(o.a)("img/benchmark-pipeline.png")})))}s.isMDXComponent=!0},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=u(r),p=n,f=s["".concat(o,".").concat(p)]||s[p]||m[p]||c;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},119:function(e,t,r){"use strict";var n=r(0),a=r(37);t.a=function(){return Object(n.useContext)(a.a)}},120:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(119),a=r(123);function c(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:c="/",url:o}={}}=Object(n.a)();if(!e)return e;if(t)return c+e;if(!Object(a.a)(e))return e;const i=c+e.replace(/^\//,"");return r?o+i:i}},123:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))}}]);