(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{4130:function(e,t,r){Promise.resolve().then(r.bind(r,4930)),Promise.resolve().then(r.bind(r,6456)),Promise.resolve().then(r.t.bind(r,5878,23)),Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.bind(r,5208)),Promise.resolve().then(r.bind(r,7324)),Promise.resolve().then(r.bind(r,3894)),Promise.resolve().then(r.bind(r,6246)),Promise.resolve().then(r.bind(r,7948)),Promise.resolve().then(r.bind(r,1488))},5208:function(e,t,r){"use strict";var n=r(7437),i=r(3448),a=r(8614),s=r(1276),l=r(2265);t.default=e=>{let{text:t,className:r,variant:o,characterDelay:d=.03,delay:c=0,yOffset:f=8,animateByCharacter:u=!1}=e,m=o||{hidden:{y:f,opacity:0,filter:"blur(8px)"},visible:{y:-f,opacity:1,filter:"blur(0px)"}},x=(0,l.useMemo)(()=>Array.from(t),[t]);return u?(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(a.M,{children:x.map((e,t)=>(0,n.jsx)(s.E.span,{initial:"hidden",animate:"visible",exit:"hidden",variants:m,transition:{yoyo:1/0,delay:c+t*d,ease:"easeOut"},className:(0,i.cn)("inline-block",r),style:{width:""===e.trim()?"0.2em":"auto"},children:e},t))})}):(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(a.M,{children:(0,n.jsx)(s.E.span,{initial:"hidden",animate:"visible",exit:"hidden",variants:m,transition:{yoyo:1/0,delay:c,ease:"easeOut"},className:(0,i.cn)("inline-block",r),children:t})})})}},7324:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var n=r(7437),i=r(2265),a=r(4922),s=r(8614),l=r(1276);function o(e){let{children:t,className:r,variant:o,duration:d=.4,delay:c=0,yOffset:f=6,inView:u=!1,inViewMargin:m="-50px",blur:x="6px"}=e,h=(0,i.useRef)(null),p=(0,a.Y)(h,{once:!0,margin:m});return(0,n.jsx)(s.M,{children:(0,n.jsx)(l.E.div,{ref:h,initial:"hidden",animate:!u||p?"visible":"hidden",exit:"hidden",variants:o||{hidden:{y:f,opacity:0,filter:"blur(".concat(x,")")},visible:{y:-f,opacity:1,filter:"blur(0px)"}},transition:{delay:.04+c,duration:d,ease:"easeOut"},className:r,children:t})})}},3894:function(e,t,r){"use strict";r.d(t,{ResumeCard:function(){return k}});var n=r(7437),i=r(6246),a=r(2265),s=r(535),l=r(3448);let o=(0,s.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function d(e){let{className:t,variant:r,...i}=e;return(0,n.jsx)("div",{className:(0,l.cn)(o({variant:r}),t),...i})}let c=a.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg bg-card text-card-foreground",r),...i})});c.displayName="Card";let f=a.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col",r),...i})});f.displayName="CardHeader",a.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",r),...i})}).displayName="CardTitle",a.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...i})}).displayName="CardDescription",a.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("text-pretty font-sans text-sm text-muted-foreground",r),...i})}).displayName="CardContent",a.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center pt-2",r),...i})}).displayName="CardFooter";var u=r(1276),m=r(6605),x=r(3145),h=r(2239),p=r(1906),v=r(5318),g=r(8614),y=r(7648);let b=e=>{let t,{children:r,url:i,className:s,width:o=200,height:d=125,quality:c=50,layout:f="fixed",isStatic:b=!1,imageSrc:j=""}=e;if(b)t=j;else{let e=(0,h.c)({url:i,screenshot:!0,meta:!1,embed:"screenshot.url",colorScheme:"dark","viewport.isMobile":!0,"viewport.deviceScaleFactor":1,"viewport.width":3*o,"viewport.height":3*d});t="https://api.microlink.io/?".concat(e)}let[N,w]=a.useState(!1),[k,C]=a.useState(!1);a.useEffect(()=>{C(!0)},[]);let P=(0,p.c)(0),R=(0,v.q)(P,{stiffness:100,damping:15});return(0,n.jsxs)(n.Fragment,{children:[k?(0,n.jsx)("div",{className:"hidden",children:(0,n.jsx)(x.default,{src:t,width:o,height:d,quality:c,priority:!0,alt:"hidden image"})}):null,(0,n.jsxs)(m.fC,{openDelay:50,closeDelay:100,onOpenChange:e=>{w(e)},children:[(0,n.jsx)(m.xz,{onMouseMove:e=>{let t=e.target.getBoundingClientRect(),r=(e.clientX-t.left-t.width/2)/2;P.set(r)},className:(0,l.cn)("text-black dark:text-white",s),href:i,children:r}),(0,n.jsx)(m.VY,{className:"[transform-origin:var(--radix-hover-card-content-transform-origin)]",side:"top",align:"center",sideOffset:10,children:(0,n.jsx)(g.M,{children:N&&(0,n.jsx)(u.E.div,{initial:{opacity:0,y:20,scale:.6},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:260,damping:20}},exit:{opacity:0,y:20,scale:.6},className:"shadow-xl rounded-xl",style:{x:R},children:(0,n.jsx)(y.default,{href:i,className:"block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800",style:{fontSize:0},children:(0,n.jsx)(x.default,{src:b?j:t,width:o,height:d,quality:c,priority:!0,className:"rounded-lg",alt:"preview image"})})})})})]})]})};var j=r(1536),N=r(2158);function w(e){let{content:t}=e;return(0,n.jsx)("div",{className:"my-2",children:(0,n.jsx)(j.U,{className:"prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert",rehypePlugins:[N.Z],children:t})})}r(7792);let k=e=>{let{t,logoUrl:r,altText:s,title:l,subtitle:o,href:m,badges:x,period:h,description:p}=e,[v,g]=a.useState(!0);return(0,n.jsx)(b,{url:m||"#",className:"block cursor-pointer",children:(0,n.jsxs)(c,{className:"flex bg-transparent",children:[(0,n.jsx)("div",{className:"flex-none",children:(0,n.jsxs)(i.q,{className:"border size-12 m-auto bg-muted-background dark:bg-foreground",children:[(0,n.jsx)(i.AvatarImage,{src:r,alt:s,className:"object-contain"}),(0,n.jsx)(i.AvatarFallback,{children:s[0]})]})}),(0,n.jsxs)("div",{className:"flex-grow ml-4 items-center flex-col group",children:[(0,n.jsxs)(f,{children:[(0,n.jsxs)("div",{className:"flex items-center justify-between gap-x-2 text-base",children:[(0,n.jsxs)("h3",{className:"inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm",children:[t[l],x&&(0,n.jsx)("span",{className:"inline-flex gap-x-1",children:x.map((e,t)=>(0,n.jsx)(d,{variant:"secondary",className:"align-middle text-xs",children:e},t))})]}),(0,n.jsx)("div",{className:"text-xs sm:text-sm tabular-nums text-muted-foreground text-right",children:h})]}),o&&(0,n.jsx)("div",{className:"font-sans text-xs",children:t[o]})]}),p&&(0,n.jsx)(u.E.div,{initial:{opacity:0,height:0},animate:{opacity:v?1:0,height:v?"auto":0},transition:{duration:.7,ease:[.16,1,.3,1]},className:"mt-2 text-xs sm:text-sm ",children:(0,n.jsx)(w,{content:t[p]})})]})]})})}},6246:function(e,t,r){"use strict";r.d(t,{AvatarFallback:function(){return d},AvatarImage:function(){return o},q:function(){return l}});var n=r(7437),i=r(2265),a=r(4930),s=r(3448);let l=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(a.fC,{ref:t,className:(0,s.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...i})});l.displayName=a.fC.displayName;let o=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(a.Ee,{ref:t,className:(0,s.cn)("aspect-square h-full w-full",r),...i})});o.displayName=a.Ee.displayName;let d=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(a.NY,{ref:t,className:(0,s.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...i})});d.displayName=a.NY.displayName},7948:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(7437),i=r(2265),a=r(5922),s=r(9276);let l={containerProps:{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",paddingTop:40}},options:{reverse:!0,depth:1,wheelZoom:!1,imageScale:2,activeCursor:"default",tooltip:"native",initial:[.1,-.1],clickToFront:500,tooltipDelay:0,outlineColour:"#0000",maxSpeed:.04,minSpeed:.02}},o=(e,t)=>(0,s.lB)({icon:e,bgHex:"light"===t?"#f3f2ef":"#080510",fallbackHex:"light"===t?"#6e6e73":"#ffffff",minContrastRatio:"dark"===t?2:1.2,size:42,aProps:{href:void 0,target:void 0,rel:void 0,onClick:e=>e.preventDefault()}});function d(e){let{iconSlugs:t}=e,[r,d]=(0,i.useState)(null),{theme:c}=(0,a.F)();(0,i.useEffect)(()=>{(0,s.qU)({slugs:t}).then(d)},[t]);let f=(0,i.useMemo)(()=>r?Object.values(r.simpleIcons).map(e=>o(e,c||"light")):null,[r,c]);return(0,n.jsx)(s.ZJ,{...l,children:(0,n.jsx)(n.Fragment,{children:f})})}},1488:function(e,t,r){"use strict";r.r(t),r.d(t,{Tooltip:function(){return o},TooltipContent:function(){return c},TooltipProvider:function(){return l},TooltipTrigger:function(){return d}});var n=r(7437),i=r(9109),a=r(2265),s=r(3448);let l=i.zt,o=i.fC,d=i.xz,c=a.forwardRef((e,t)=>{let{className:r,sideOffset:a=4,...l}=e;return(0,n.jsx)(i.VY,{ref:t,sideOffset:a,className:(0,s.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})});c.displayName=i.VY.displayName},3448:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(1994),i=r(3335);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}}},function(e){e.O(0,[851,24,553,988,971,117,744],function(){return e(e.s=4130)}),_N_E=e.O()}]);