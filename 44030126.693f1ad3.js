(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(119)),i={id:"github-workflow",title:"GitHub workflow",sidebar_label:"GitHub workflow"},c={id:"github-workflow",title:"GitHub workflow",description:"If you have never used git or GitHub, you may also need to check Hello World in GitHub Guides.",source:"@site/docs/github-workflow.md",permalink:"/docs/github-workflow",editUrl:"https://github.com/gogearbox/website/edit/master/docs/github-workflow.md",sidebar_label:"GitHub workflow",sidebar:"docs",previous:{title:"Cloning and Installing",permalink:"/docs/cloning-and-installing"},next:{title:"Contributing",permalink:"/docs/contributing"}},b=[],l={rightToc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you have ",Object(o.b)("strong",{parentName:"p"},"never")," used git or GitHub, you may also need to check ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://guides.github.com/activities/hello-world/"}),"Hello World in GitHub Guides"),"."),Object(o.b)("p",null,"Firstly, You need to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo/"}),"Fork")," gearbox repository ",Object(o.b)("inlineCode",{parentName:"p"},"gogearbox/gearbox")," then clone it on your local machine using"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"git clone https://github.com/YOUR-USER_NAME/gearbox ")),Object(o.b)("h4",{id:"according-to-github-naming-we-will-call-"},"According to GitHub naming we will call :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The repository you have forked ",Object(o.b)("strong",{parentName:"li"},"origin")," and its link is ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/YOUR-USER_NAME/gearbox ")),Object(o.b)("li",{parentName:"ul"},"This repository ",Object(o.b)("strong",{parentName:"li"},"upstream")," and its link is ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/gogearbox/gearbox "))),Object(o.b)("h4",{id:"the-previous-steps-are-done-once-then-these-steps-that-you-should-follow-every-time-you-work-on-patches-or-features"},"The previous steps are done once, then these steps that you should follow every time you work on patch(es) or feature(s):"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fetch code and create a local branch"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git fetch upstream\ngit checkout -b LOCAL_BRANCH_NAME upstream/master\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Do your code changes then commit"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'git commit -a -m "Issue #ISSUE_NUMBER: BRIEF_DESCRIPTION."\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Push commit you have made to your fork"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'git push -u origin "LOCAL_BRANCH_NAME"\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/using-pull-requests/"}),"Pull Request(PR)")," to the branch ",Object(o.b)("strong",{parentName:"p"},"master"),". To notify the reviewer that will review this PR, you can write r? @USER_NAME")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After getting reviewers' feedback - if something needs to be changed, added, removed or fixed and these changes  are minor (means you didn't get ",Object(o.b)("strong",{parentName:"p"},"r+"),", just fix it in a new commit on the same branch"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git commit --fixup SHA1_OF_THE_PREVIOUS_COMMIT (You can get it using **git log**)\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use step 3 to update the Pull Request. Repeat steps 5-6 until the review is accepted.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When you notice that there is a change on ",Object(o.b)("strong",{parentName:"p"},"upstream")," that affects your patch or files you have worked on, you need to update and rebase your local branch"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git fetch upstream\ngit rebase upstream/master\n")))))}p.isMDXComponent=!0},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);