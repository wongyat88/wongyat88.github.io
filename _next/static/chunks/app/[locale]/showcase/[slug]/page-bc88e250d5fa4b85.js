(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569],{7695:function(e,t,r){Promise.resolve().then(r.t.bind(r,7792,23)),Promise.resolve().then(r.bind(r,6456)),Promise.resolve().then(r.t.bind(r,5878,23))},1360:function(e,t,r){"use strict";function n(e,t){var r=t&&t.cache?t.cache:c,n=t&&t.serializer?t.serializer:o;return(t&&t.strategy?t.strategy:function(e,t){var r,n,o=1===e.length?a:i;return r=t.cache.create(),n=t.serializer,o.bind(this,e,r,n)})(e,{cache:r,serializer:n})}function a(e,t,r,n){var a=null==n||"number"==typeof n||"boolean"==typeof n?n:r(n),i=t.get(a);return void 0===i&&(i=e.call(this,n),t.set(a,i)),i}function i(e,t,r){var n=Array.prototype.slice.call(arguments,3),a=r(n),i=t.get(a);return void 0===i&&(i=e.apply(this,n),t.set(a,i)),i}r.r(t),r.d(t,{memoize:function(){return n},strategies:function(){return s}});var o=function(){return JSON.stringify(arguments)};function l(){this.cache=Object.create(null)}l.prototype.get=function(e){return this.cache[e]},l.prototype.set=function(e,t){this.cache[e]=t};var c={create:function(){return new l}},s={variadic:function(e,t){var r,n;return r=t.cache.create(),n=t.serializer,i.bind(this,e,r,n)},monadic:function(e,t){var r,n;return r=t.cache.create(),n=t.serializer,a.bind(this,e,r,n)}}},6456:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}r.d(t,{default:function(){return o}});var a=r(2265),i=r(9362);function o(e){let{locale:t,...r}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return a.createElement(i.P,n({locale:t},r))}},5523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(7043)._(r(2265)).default.createContext(null)},3442:function(e,t,r){"use strict";let n=r(2265).createContext(void 0);t.IntlContext=n},9362:function(e,t,r){"use strict";var n=r(2265),a=r(4563),i=r(3442);r(1360);var o=n&&n.__esModule?n:{default:n};t.P=function(e){let{children:t,defaultTranslationValues:r,formats:l,getMessageFallback:c,locale:s,messages:u,now:f,onError:m,timeZone:g}=e,d=n.useMemo(()=>a.createCache(),[s]),h=n.useMemo(()=>a.createIntlFormatters(d),[d]),v=n.useMemo(()=>({...a.initializeConfig({locale:s,defaultTranslationValues:r,formats:l,getMessageFallback:c,messages:u,now:f,onError:m,timeZone:g}),formatters:h,cache:d}),[d,r,l,h,c,s,u,f,m,g]);return o.default.createElement(i.IntlContext.Provider,{value:v},t)}},4563:function(e,t,r){"use strict";var n=r(1360);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(".")}function i(e){return a(e.namespace,e.key)}function o(e){console.error(e)}function l(e,t){return n.memoize(e,{cache:{create:()=>({get:e=>t[e],set(e,r){t[e]=r}})},strategy:n.strategies.variadic})}function c(e,t){return l(function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return new e(...r)},t)}t.createCache=function(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}},t.createIntlFormatters=function(e){return{getDateTimeFormat:c(Intl.DateTimeFormat,e.dateTime),getNumberFormat:c(Intl.NumberFormat,e.number),getPluralRules:c(Intl.PluralRules,e.pluralRules),getRelativeTimeFormat:c(Intl.RelativeTimeFormat,e.relativeTime),getListFormat:c(Intl.ListFormat,e.list),getDisplayNames:c(Intl.DisplayNames,e.displayNames)}},t.defaultGetMessageFallback=i,t.defaultOnError=o,t.initializeConfig=function(e){let{getMessageFallback:t,messages:r,onError:n,...a}=e;return{...a,messages:r,onError:n||o,getMessageFallback:t||i}},t.joinPath=a,t.memoFn=l}},function(e){e.O(0,[851,553,971,117,744],function(){return e(e.s=7695)}),_N_E=e.O()}]);