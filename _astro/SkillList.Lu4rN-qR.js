import{r as x}from"./index.RH_Wq4ov.js";var c={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function p(){if(h)return i;h=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function a(u,e,t){var n=null;if(t!==void 0&&(n=""+t),e.key!==void 0&&(n=""+e.key),"key"in e){t={};for(var s in e)s!=="key"&&(t[s]=e[s])}else t=e;return e=t.ref,{$$typeof:r,type:u,key:n,ref:e!==void 0?e:null,props:t}}return i.Fragment=o,i.jsx=a,i.jsxs=a,i}var v;function f(){return v||(v=1,c.exports=p()),c.exports}var l=f();const R=({name:r,isText:o})=>{const[a,u]=x.useState(!1),e="inline font-bold text-xs px-2 rounded-full transition-all duration-[200ms] text-sm border border-gray-300 cursor-default opacity-70",t="bg-black text-white border-white";x.useEffect(()=>{const s=()=>{console.log("Checking hash for",r);const d=decodeURIComponent(window.location.hash.slice(1));console.log(d===r),u(d===r)};return s(),window.addEventListener("hashchange",s),()=>window.removeEventListener("hashchange",s)},[r]);const n=()=>{window.location.hash=encodeURIComponent(r)};return o?l.jsx("span",{className:`${e} ${a?t:""}`,onMouseOver:n,children:r}):l.jsx("li",{className:`${e} ${a?t:""}`,onMouseOver:n,children:r})},m=({skills:r})=>l.jsx("ul",{className:"flex flex-wrap gap-1",children:r.map(o=>l.jsx(R,{name:o},o))});export{R as S,m as a,l as j};
