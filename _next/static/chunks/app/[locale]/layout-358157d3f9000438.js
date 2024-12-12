(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{2204:function(e,t,n){Promise.resolve().then(n.bind(n,6456)),Promise.resolve().then(n.t.bind(n,2972,23)),Promise.resolve().then(n.bind(n,5173)),Promise.resolve().then(n.bind(n,394)),Promise.resolve().then(n.bind(n,2190)),Promise.resolve().then(n.bind(n,8447)),Promise.resolve().then(n.bind(n,3219)),Promise.resolve().then(n.bind(n,5310)),Promise.resolve().then(n.bind(n,1488))},5775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let r=n(7043);n(7437),n(2265);let o=r._(n(5602));function i(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let i={...r,...t};return(0,o.default)({...i,modules:null==(n=i.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(8993);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},5602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=n(7437),o=n(2265),i=n(1523),a=n(49);function l(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},d=function(e){let t={...s,...e},n=(0,o.lazy)(()=>t.loader().then(l)),d=t.loading;function c(e){let l=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,s=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(o.Suspense,{fallback:l,children:s})}return c.displayName="LoadableComponent",c}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let r=n(7437),o=n(544);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,o.getExpectedRequestStore)("next/dynamic css"),i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,r.jsx)(r.Fragment,{children:i.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},394:function(e,t,n){"use strict";var r=n(7437);let o=n(2265).forwardRef((e,t)=>(0,r.jsx)("button",{onClick:()=>{let t=window.location.href;t="en"===e.locale?t.replace("/en","/zh-tw"):t.replace("/zh-tw","/en"),window.location.href=t},children:e.t.lang}));t.default=o},5173:function(e,t,n){"use strict";var r=n(7437),o=n(2265);t.default=e=>{let[t,n]=o.useState(!1),i={en:{cookieTitle1:"Privacy settings and consent statement",cookieTitle2:"We use Google Analytics to improve your website experience.",cookieAccept:"Accept Cookies",cookieDenie:"Denie Cookies"},"zh-tw":{cookieTitle1:"隱私設定與同意聲明",cookieTitle2:"我們使用 Google Analytics 來改善網站體驗。",cookieAccept:"接受Cookies",cookieDenie:"拒絕Cookies"}},a=()=>{n(!0);let e={ad_storage:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied",security_storage:"granted"};window.gtag("consent","default",e),localStorage.setItem("ga_consent",JSON.stringify(e))},l=e=>{window.gtag("consent","update",e)},s=e=>{l(e),localStorage.setItem("ga_consent",JSON.stringify(e)),n(!1)};return(0,o.useEffect)(()=>{if("function"==typeof window.gtag){let e=localStorage.getItem("ga_consent");if(e)try{let t=JSON.parse(e);l(t)}catch(e){a()}else a()}},[]),t&&(0,r.jsx)("div",{className:"\n                fixed bottom-0 left-0 right-0 \n                bg-gray-200 text-black\n                dark:bg-gray-800 dark:text-white \n                transition-all duration-300 ease-in-out \n                lg:h-10\n                h-14 py-1\n                z-50 overflow-hidden\n            ",children:(0,r.jsxs)("div",{className:"grid grid-cols-12",children:[(0,r.jsx)("div",{className:"lg:col-span-8 col-span-12 px-4 flex items-center justify-center",children:(0,r.jsxs)("p",{className:"text-sm text-black dark:text-white ",children:["\uD83C\uDF6A ",i[e.locale].cookieTitle1+" ",(0,r.jsxs)("span",{className:"lg:inline hidden",children:["\uD83C\uDF6A ",i[e.locale].cookieTitle2]})]})}),(0,r.jsxs)("div",{className:"lg:col-span-4 col-span-12 px-4 flex gap-4 items-end justify-center",children:[(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm",onClick:()=>s({ad_storage:"granted",analytics_storage:"granted",functionality_storage:"granted",personalization_storage:"granted"}),children:i[e.locale].cookieAccept}),(0,r.jsx)("button",{className:"bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm",onClick:()=>s({ad_storage:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied"}),children:i[e.locale].cookieDenie})]})]})})}},2190:function(e,t,n){"use strict";n.d(t,{Dock:function(){return w},DockIcon:function(){return k}});var r=n(7437),o=n(3448),i=n(535),a=n(1906),l=n(1276),s=n(8843);let d=e=>e&&"object"==typeof e&&e.mix,c=e=>d(e)?e.mix:void 0;var u=n(1534),f=n(5414);function g(e,t){let n=(0,a.c)(t()),r=()=>n.set(t());return r(),(0,u.L)(()=>{let t=()=>f.Wi.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,f.Pn)(r)}}),n}var m=n(3576),p=n(3078);function h(e,t,n,r){if("function"==typeof e)return function(e){p.S1.current=[],e();let t=g(p.S1.current,e);return p.S1.current=void 0,t}(e);let o="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],o=e[1+n],i=e[2+n],a=e[3+n],l=(0,s.s)(o,i,{mixer:c(i[0]),...a});return t?l(r):l}(t,n,r);return Array.isArray(e)?x(e,o):x([e],([e])=>o(e))}function x(e,t){let n=(0,m.h)(()=>[]);return g(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}var y=n(5318),v=n(2265);let b=(0,i.j)("mx-auto w-max h-full p-2 flex items-end rounded-full border"),w=v.forwardRef((e,t)=>{let{className:n,children:i,magnification:s=60,distance:d=140,...c}=e,u=(0,a.c)(1/0);return(0,r.jsx)(l.E.div,{ref:t,onMouseMove:e=>u.set(e.pageX),onMouseLeave:()=>u.set(1/0),...c,className:(0,o.cn)(b({className:n})),children:v.Children.map(i,e=>v.isValidElement(e)?v.cloneElement(e,{mousex:u,magnification:s,distance:d}):e)})});w.displayName="Dock";let k=e=>{let{size:t,magnification:n=60,distance:i=140,mousex:a,className:s,children:d,...c}=e,u=(0,v.useRef)(null),f=h(a,e=>{var t,n;let r=null!==(n=null===(t=u.current)||void 0===t?void 0:t.getBoundingClientRect())&&void 0!==n?n:{x:0,width:0};return e-r.x-r.width/2}),g=h(f,[-i,0,i],[40,n,40]),m=(0,y.q)(g,{mass:.1,stiffness:150,damping:12});return(0,r.jsx)(l.E.div,{ref:u,style:{width:m},className:(0,o.cn)("flex aspect-square cursor-pointer items-center justify-center rounded-full",s),...c,children:d})};k.displayName="DockIcon"},8447:function(e,t,n){"use strict";n.d(t,{ModeToggle:function(){return g}});var r=n(7437),o=n(7053),i=n(535),a=n(2265),l=n(3448);let s=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 rounded-full"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:n,variant:i,size:a,asChild:d=!1,...c}=e,u=d?o.g7:"button";return(0,r.jsx)(u,{className:(0,l.cn)(s({variant:i,size:a,className:n})),ref:t,...c})});d.displayName="Button";var c=n(653),u=n(5922),f=n(1488);function g(e){let{theme:t,setTheme:n}=(0,u.F)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(f.TooltipTrigger,{asChild:!0,children:(0,r.jsxs)(d,{variant:"ghost",type:"button",size:"icon",className:"px-2",onClick:()=>{let e=t;"system"===t&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),n("dark"===e?"light":"dark")},children:[(0,r.jsx)(c.NWY,{className:"h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200"}),(0,r.jsx)(c.kLh,{className:"hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200"})]})}),(0,r.jsx)(f.TooltipContent,{children:(0,r.jsx)("p",{children:e.t.Theme})})]})}},3219:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(7437),o=n(5775),i=n.n(o),a=n(2265);let l=i()(()=>n.e(595).then(n.bind(n,8595)),{loadableGenerated:{webpack:()=>[8595]},ssr:!1});function s(e){let{className:t}=e,n=()=>"undefined"!=typeof navigator&&/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),o=()=>{if("undefined"==typeof navigator)return!1;let e=navigator.hardwareConcurrency||1;return console.log("cpuCores:",e," , you need at least 8 cores to unlock the background"),e>=8&&!n()},[i,s]=a.useState(!1);return(0,a.useEffect)(()=>{o()&&s(!0)},[]),i&&(0,r.jsx)(l,{className:t})}},5310:function(e,t,n){"use strict";n.d(t,{Separator:function(){return c}});var r=n(7437),o=n(2265),i=n(6840),a="horizontal",l=["horizontal","vertical"],s=o.forwardRef((e,t)=>{let{decorative:n,orientation:o=a,...s}=e,d=l.includes(o)?o:a;return(0,r.jsx)(i.WV.div,{"data-orientation":d,...n?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},...s,ref:t})});s.displayName="Separator";var d=n(3448);let c=o.forwardRef((e,t)=>{let{className:n,orientation:o="horizontal",decorative:i=!0,...a}=e;return(0,r.jsx)(s,{ref:t,decorative:i,orientation:o,className:(0,d.cn)("shrink-0 bg-border","horizontal"===o?"h-[1px] w-full":"h-full w-[1px]",n),...a})});c.displayName=s.displayName},1488:function(e,t,n){"use strict";n.r(t),n.d(t,{Tooltip:function(){return s},TooltipContent:function(){return c},TooltipProvider:function(){return l},TooltipTrigger:function(){return d}});var r=n(7437),o=n(9109),i=n(2265),a=n(3448);let l=o.zt,s=o.fC,d=o.xz,c=i.forwardRef((e,t)=>{let{className:n,sideOffset:i=4,...l}=e;return(0,r.jsx)(o.VY,{ref:t,sideOffset:i,className:(0,a.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l})});c.displayName=o.VY.displayName},3448:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var r=n(1994),o=n(3335);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,r.W)(t))}}},function(e){e.O(0,[310,24,971,117,744],function(){return e(e.s=2204)}),_N_E=e.O()}]);