(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),b=(a(0),a(73)),c={id:"gearbox",title:"Gearbox",sidebar_label:"Gearbox"},l={unversionedId:"gearbox",id:"gearbox",isDocsHomePage:!1,title:"Gearbox",description:"Gearbox instance that provides functionalities of Gearbox",source:"@site/docs/gearbox.md",slug:"/gearbox",permalink:"/docs/gearbox",editUrl:"https://github.com/gogearbox/website/edit/master/docs/gearbox.md",version:"current",sidebar_label:"Gearbox",sidebar:"docs",previous:{title:"Benchmarks",permalink:"/docs/benchmarks"},next:{title:"Context",permalink:"/docs/context"}},i=[{value:"New",id:"new",children:[]},{value:"Settings",id:"settings",children:[]},{value:"HTTP Methods",id:"http-methods",children:[]},{value:"Not Found",id:"not-found",children:[]},{value:"Use",id:"use",children:[]},{value:"Static",id:"static",children:[]},{value:"Group",id:"group",children:[]}],o={rightToc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Gearbox")," \u2699\ufe0f instance that provides functionalities of Gearbox"),Object(b.b)("h3",{id:"new"},"New"),Object(b.b)("p",null,"creates a new instance of Gearbox with ",Object(b.b)("em",{parentName:"p"},"optional settings")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"New(settings ...*Settings) Gearbox \n")),Object(b.b)("h3",{id:"settings"},"Settings"),Object(b.b)("p",null,"You can pass application settings when calling New"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'func main() {\n    // Setup gearbox\n    g := gearbox.New(&gearbox.Settings{\n        CaseInSensitive: true\n        ServerName:      "gearbox"\n    })\n\n    // ...\n\n    // Start service\n    g.Start(":3000")\n}\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Settings")," ",Object(b.b)("strong",{parentName:"p"},"fields")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ServerName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enables the ",Object(b.b)("inlineCode",{parentName:"td"},"Server")," HTTP header with the given value"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},'""'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CaseInSensitive"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When disabled, ",Object(b.b)("inlineCode",{parentName:"td"},"/Foo")," and ",Object(b.b)("inlineCode",{parentName:"td"},"/foo")," are different routes. When enabled, ",Object(b.b)("inlineCode",{parentName:"td"},"/Foo"),"and ",Object(b.b)("inlineCode",{parentName:"td"},"/foo")," are treated the same"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HandleMethodNotAllowed"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enables answering with HTTP status code 405 if request does not match with any route, but there are another methods are allowed for that route otherwise answer with Not Found handlers or status code 404."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HandleOPTIONS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enables automatic replies to OPTIONS requests if there are no handlers registered for that route"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AutoRecover"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enables automatic recovering from panic while executing handlers by answering with HTTP status code 500 and logging error message without stopping service"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MaxRequestBodySize"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends ",Object(b.b)("inlineCode",{parentName:"td"},"413 - Request Entity Too Large")," response"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"4 * 1024 * 1024"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Concurrency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum number of concurrent connections"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"256 * 1024"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CacheSize"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum size of LRU cache if it's enabled"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"1000"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DisableCaching"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Disable LRU caching (used for speed up route matching) for recent ",Object(b.b)("inlineCode",{parentName:"td"},"CacheSize")," matched routes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DisableKeepalive"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Disable keep-alive connections, the server will close incoming connections after sending the first response to client"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DisableDefaultDate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to true causes the default date header to be excluded from the response"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DisableDefaultContentType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to true, causes the default Content-Type header to be excluded from the Response"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DisableStartupMessage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to true, it will not print out Gearbox banner"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DisableHeaderNormalizing"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"By default all header names are normalized: conteNT-tYPE -",">"," Content-Type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadTimeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"time.Duration")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The amount of time allowed to read the full request, including body"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"unlimited"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WriteTimeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"time.Duration")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum duration before timing out writes of the response"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"unlimited"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IdleTimeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"time.Duration")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum amount of time to wait for the next request when keep-alive is enabled. If ",Object(b.b)("inlineCode",{parentName:"td"},"IdleTimeout")," is zero, the value of ",Object(b.b)("inlineCode",{parentName:"td"},"ReadTimeout")," is used"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"unlimited"))))),Object(b.b)("h3",{id:"http-methods"},"HTTP Methods"),Object(b.b)("p",null,"Routes an HTTP request, where ",Object(b.b)("strong",{parentName:"p"},"METHOD")," is the HTTP method of the request"),Object(b.b)("h4",{id:"get"},"Get"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"GET")," method requests a representation of the specified resource. Requests using GET should only retrieve data"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Get(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h4",{id:"head"},"Head"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"HEAD")," method asks for a response identical to that of a GET request, but without the response body"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Head(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h4",{id:"post"},"Post"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"POST")," method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Post(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h4",{id:"put"},"Put"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"PUT")," method replaces all current representations of the target resource with the request payload"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Put(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h4",{id:"delete"},"Delete"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"DELETE")," method deletes the specified resource"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Delete(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h4",{id:"connect"},"Connect"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"CONNECT")," method establishes a tunnel to the server identified by the target resource"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Connect(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h4",{id:"options"},"Options"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"OPTIONS")," method is used to describe the communication options for the target resource"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Options(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h4",{id:"trace"},"Trace"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"TRACE")," method performs a message loop-back test along the path to the target resource"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Trace(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h4",{id:"patch"},"Patch"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"PATCH")," method is used to apply partial modifications to a resource"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Patch(path string, handlers ...handlerFunc) *Route\n")),Object(b.b)("h3",{id:"not-found"},"Not Found"),Object(b.b)("p",null,"A default handlers that will be called if there is no matches for requested route"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"NotFound(handlers ...handlerFunc)\n")),Object(b.b)("h3",{id:"use"},"Use"),Object(b.b)("p",null,"Applies middlware(s) to be called in order they were defined before calling handlers"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Use(middlewares ...handlerFunc)\n")),Object(b.b)("h3",{id:"static"},"Static"),Object(b.b)("p",null,"Serves static file(s) in root directory uder specific prefix"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Static(prefix, root string)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"For Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'// Serve files in assets directory for prefix static\n// requests will be like \n// http://localhost:3000/static/gearbox.png\ngb.Static("/static", "./assets")\n')),Object(b.b)("h3",{id:"group"},"Group"),Object(b.b)("p",null,"Groups registered routes under specific prefix"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"Group(prefix string, routes []*Route) []*Route\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"For Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'gb.Group("/account",  []*gearbox.Route{\n    gb.Get("/id", func(ctx gearbox.Context) {\n        ctx.SendString("User X")\n    })\n})\n')),Object(b.b)("p",null,"Handles requests for ",Object(b.b)("inlineCode",{parentName:"p"},"/account/id")))}d.isMDXComponent=!0},73:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,j=p["".concat(c,".").concat(O)]||p[O]||s[O]||b;return a?r.a.createElement(j,l(l({ref:t},o),{},{components:a})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);