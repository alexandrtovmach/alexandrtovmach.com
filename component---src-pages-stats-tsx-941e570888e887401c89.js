(self.webpackChunkalexandrtovmach_com=self.webpackChunkalexandrtovmach_com||[]).push([[284],{7870:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(7294),a=n(8010),o=n(4748),u=n(5785),c=n(9734),i=n.n(c),l=n(4184),s=n.n(l),f="stats-module--author--a09f5",v="stats-module--side--a2d92",m="stats-module--title--39cee";var p=t=>{let{books:e,bookCovers:n}=t;const{0:a,1:o}=(0,r.useState)(""),c=i()(e,"author").map((t=>({...t,coverPath:(n.find((e=>e.name===t.workId))||{}).publicURL}))),l=t=>e=>{e.stopPropagation(),o(t)};return r.createElement("main",{className:"stats-module--stats--c97a6",onClick:l("")},r.createElement("section",null,r.createElement("ul",{className:"stats-module--booksList--88163"},c.map((t=>{let{title:e,author:n,id:o,openLibUrl:c,authorId:i,pagesCount:p,coverPath:d}=t;return r.createElement("li",{key:o,className:s()("stats-module--book--58148",{"stats-module--active--e62e8":a===o}),style:{backgroundColor:`#${i.slice(2,5)}`,flexBasis:p?.3*p+"px":"50px"},onClick:l(o)},r.createElement("div",{className:s()("stats-module--left--f57e3",v)}),r.createElement("a",{href:c,target:"_blank",className:s()("stats-module--right--10b4c",v)},d&&r.createElement("img",{className:"stats-module--cover--d6740",src:d,alt:`cover for "${e}" by DALL-E 2`}),r.createElement("span",{className:f},n),r.createElement("h3",{className:m},e)),r.createElement("div",{className:s()("stats-module--top--20126",v)}),r.createElement("div",{className:s()("stats-module--front--de7f6",v)},r.createElement("p",{className:f},(t=>{const e=t.split(" "),n=e.pop();return[].concat((0,u.Z)(e.map((t=>`${t[0]}.`))),[n]).join(" ")})(n)),r.createElement("span",{className:m},e.replace(/\(.*\)/,"").replace(/[;.].+/,""))))})))))};var d=t=>{let{data:{allOpenLibBooks:e,allFile:n}}=t;return r.createElement(a.Z,{withoutFooter:!0},r.createElement(o.Z,{title:"Read List"}),r.createElement(p,{books:e.nodes,bookCovers:n.nodes}))}},6874:function(t){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},9881:function(t,e,n){var r=n(7816),a=n(9291)(r);t.exports=a},1078:function(t,e,n){var r=n(2488),a=n(7285);t.exports=function t(e,n,o,u,c){var i=-1,l=e.length;for(o||(o=a),c||(c=[]);++i<l;){var s=e[i];n>0&&o(s)?n>1?t(s,n-1,o,u,c):r(c,s):u||(c[c.length]=s)}return c}},8483:function(t,e,n){var r=n(5063)();t.exports=r},7816:function(t,e,n){var r=n(8483),a=n(3674);t.exports=function(t,e){return t&&r(t,e,a)}},9199:function(t,e,n){var r=n(9881),a=n(8612);t.exports=function(t,e){var n=-1,o=a(t)?Array(t.length):[];return r(t,(function(t,r,a){o[++n]=e(t,r,a)})),o}},9556:function(t,e,n){var r=n(9932),a=n(7786),o=n(7206),u=n(9199),c=n(1131),i=n(1717),l=n(5022),s=n(6557),f=n(1469);t.exports=function(t,e,n){e=e.length?r(e,(function(t){return f(t)?function(e){return a(e,1===t.length?t[0]:t)}:t})):[s];var v=-1;e=r(e,i(o));var m=u(t,(function(t,n,a){return{criteria:r(e,(function(e){return e(t)})),index:++v,value:t}}));return c(m,(function(t,e){return l(t,e,n)}))}},5976:function(t,e,n){var r=n(6557),a=n(5357),o=n(61);t.exports=function(t,e){return o(a(t,e,r),t+"")}},6560:function(t,e,n){var r=n(5703),a=n(8777),o=n(6557),u=a?function(t,e){return a(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:o;t.exports=u},1131:function(t){t.exports=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}},6393:function(t,e,n){var r=n(3448);t.exports=function(t,e){if(t!==e){var n=void 0!==t,a=null===t,o=t==t,u=r(t),c=void 0!==e,i=null===e,l=e==e,s=r(e);if(!i&&!s&&!u&&t>e||u&&c&&l&&!i&&!s||a&&c&&l||!n&&l||!o)return 1;if(!a&&!u&&!s&&t<e||s&&n&&o&&!a&&!u||i&&n&&o||!c&&o||!l)return-1}return 0}},5022:function(t,e,n){var r=n(6393);t.exports=function(t,e,n){for(var a=-1,o=t.criteria,u=e.criteria,c=o.length,i=n.length;++a<c;){var l=r(o[a],u[a]);if(l)return a>=i?l:l*("desc"==n[a]?-1:1)}return t.index-e.index}},9291:function(t,e,n){var r=n(8612);t.exports=function(t,e){return function(n,a){if(null==n)return n;if(!r(n))return t(n,a);for(var o=n.length,u=e?o:-1,c=Object(n);(e?u--:++u<o)&&!1!==a(c[u],u,c););return n}}},5063:function(t){t.exports=function(t){return function(e,n,r){for(var a=-1,o=Object(e),u=r(e),c=u.length;c--;){var i=u[t?c:++a];if(!1===n(o[i],i,o))break}return e}}},8777:function(t,e,n){var r=n(852),a=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=a},7285:function(t,e,n){var r=n(2705),a=n(5694),o=n(1469),u=r?r.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||a(t)||!!(u&&t&&t[u])}},6612:function(t,e,n){var r=n(7813),a=n(8612),o=n(5776),u=n(3218);t.exports=function(t,e,n){if(!u(n))return!1;var c=typeof e;return!!("number"==c?a(n)&&o(e,n.length):"string"==c&&e in n)&&r(n[e],t)}},5357:function(t,e,n){var r=n(6874),a=Math.max;t.exports=function(t,e,n){return e=a(void 0===e?t.length-1:e,0),function(){for(var o=arguments,u=-1,c=a(o.length-e,0),i=Array(c);++u<c;)i[u]=o[e+u];u=-1;for(var l=Array(e+1);++u<e;)l[u]=o[u];return l[e]=n(i),r(t,this,l)}}},61:function(t,e,n){var r=n(6560),a=n(1275)(r);t.exports=a},1275:function(t){var e=Date.now;t.exports=function(t){var n=0,r=0;return function(){var a=e(),o=16-(a-r);if(r=a,o>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}},5703:function(t){t.exports=function(t){return function(){return t}}},9734:function(t,e,n){var r=n(1078),a=n(9556),o=n(5976),u=n(6612),c=o((function(t,e){if(null==t)return[];var n=e.length;return n>1&&u(t,e[0],e[1])?e=[]:n>2&&u(e[0],e[1],e[2])&&(e=[e[0]]),a(t,r(e,1),[])}));t.exports=c}}]);
//# sourceMappingURL=component---src-pages-stats-tsx-941e570888e887401c89.js.map