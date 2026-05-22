import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.RH_Wq4ov.js";/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(...s)=>s.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=s=>{const t=S(s);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},$=o.createContext({}),M=()=>o.useContext($),W=o.forwardRef(({color:s,size:t,strokeWidth:a,absoluteStrokeWidth:r,className:l="",children:i,iconNode:w,...x},y)=>{const{size:n=24,strokeWidth:m=2,absoluteStrokeWidth:v=!1,color:N="currentColor",className:k=""}=M()??{},C=r??v?Number(a??m)*24/Number(t??n):a??m;return o.createElement("svg",{ref:y,...c,width:t??n??c.width,height:t??n??c.height,stroke:s??N,strokeWidth:C,className:u("lucide",k,l),...!i&&!z(x)&&{"aria-hidden":"true"},...x},[...w.map(([L,A])=>o.createElement(L,A)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(s,t)=>{const a=o.forwardRef(({className:r,...l},i)=>o.createElement(W,{ref:i,iconNode:t,className:u(`lucide-${E(h(s))}`,`lucide-${s}`,r),...l}));return a.displayName=h(s),a};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],p=f("layout-grid",P);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],b=f("list",B),d="/shows/bg.png",g=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"}),D=()=>e.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url('${d}')`}}),e.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,poster:d,className:"absolute inset-0 w-full h-full object-cover",children:[e.jsx("source",{src:"/shows/bg.webm",type:"video/webm"}),e.jsx("source",{src:"/shows/bg.mp4",type:"video/mp4"}),e.jsx("img",{className:"w-full h-full object-cover",src:d,alt:"Shows background"})]}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/95 to-[#131313]"}),e.jsx("div",{className:"absolute inset-0 bg-grain transition-opacity duration-300"})]}),_=()=>e.jsxs("header",{className:"mb-12",children:[e.jsx("nav",{className:"mx-auto flex items-center justify-between font-bold max-sm:hidden opacity-80",children:e.jsx("a",{href:"/",children:" ⟵ Back to main "})}),e.jsx("h1",{className:"text-5xl md:text-7xl text-[#e5e2e1] uppercase mb-4 opacity-90 font-bold tracking-tighter",children:"Stack Trace"}),e.jsx("p",{className:"text-base md:text-lg text-[#e9bcba]",children:"No complex algorithms here — just a simple, chronological log of my favorite nights spent in the pit."})]}),j=({children:s})=>e.jsxs("div",{className:"relative z-10 py-12 px-6 md:px-12 max-w-6xl mx-auto min-h-screen",children:[e.jsx(_,{}),s]}),U=({events:s})=>e.jsx(j,{children:e.jsxs("div",{className:"flex flex-col gap-0 w-full",children:[e.jsxs("div",{className:"flex items-center py-4 px-4 gap-2 border-b border-white/10 opacity-50 mb-2",children:[e.jsx("div",{className:"hidden md:block basis-1/5 text-xs tracking-widest text-[#e9bcba] uppercase font-mono",children:"Date"}),e.jsx("div",{className:"md:basis-3/5 text-xs tracking-widest text-[#e9bcba] uppercase font-mono",children:"Show"}),e.jsx("div",{className:"hidden md:block basis-1/5 text-right text-xs tracking-widest text-[#e9bcba] uppercase font-mono",children:"Venue"})]}),s.filter(t=>!t.hidden).map((t,a)=>e.jsxs("div",{className:"group flex flex-col border-b border-white/5 hover:bg-[#2a2a2a]/40 transition-colors duration-300 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-[#ffb3b2]/5 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out z-0 pointer-events-none"}),e.jsxs("div",{className:"flex-col md:flex-row flex gap-1 md:gap-2 md:items-center py-6 px-4 relative z-10",children:[e.jsxs("div",{className:"basis-full md:basis-1/5 text-sm tracking-wider text-[#929090] uppercase font-mono",children:[g(t.startDate),e.jsxs("span",{className:"inline md:hidden",children:[" ","//"," ",t.location?.address?.addressLocality||t.location?.name]})]}),e.jsxs("div",{className:"basis-full md:basis-3/5 flex flex-col justify-center",children:[e.jsx("div",{className:"text-2xl md:text-4xl text-[#e5e2e1] hover:text-[#ffb3b2] transition-colors duration-300 uppercase tracking-tight font-bold",children:t.name}),e.jsx("span",{className:"text-xs tracking-wider text-[#e9bcba] uppercase font-mono opacity-80 mt-1",children:[...t.performer].reverse().map(r=>r.name).join(" • ")})]}),e.jsxs("div",{className:"hidden md:block basis-full md:basis-1/5 md:text-right text-sm tracking-wider text-[#ffb3b2] uppercase font-mono",children:[t.location?.name,e.jsx("br",{}),e.jsx("span",{className:"text-[#e9bcba] text-[10px] opacity-70 uppercase",children:t.location?.address?.addressLocality||"UNKNOWN"})]})]})]},a))]})}),V=({events:s})=>e.jsx(j,{children:e.jsx("div",{className:"columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8",children:s.filter(t=>!t.hidden).map((t,a)=>{const r=t.image;return e.jsxs("article",{className:"relative break-inside-avoid overflow-hidden bg-[#201f1f] rounded-md group transition-transform duration-300 hover:scale-105",children:[e.jsx("img",{alt:t.name,className:"w-full h-auto object-cover grayscale mix-blend-luminosity opacity-80 hover:grayscale-0 transition-all duration-500 block",src:r}),e.jsxs("div",{className:"absolute inset-0 bg-[#bf002a] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10",children:[e.jsx("h3",{className:"text-2xl font-bold text-white uppercase leading-tight",children:t.name}),e.jsxs("div",{className:"flex flex-col gap-1 mt-1",children:[e.jsx("span",{className:"text-xs tracking-wider text-white uppercase font-mono font-bold",children:t.performer.map(l=>l.name).join(" • ")}),e.jsxs("span",{className:"text-xs tracking-widest text-white uppercase font-mono",children:[g(t.startDate)," //"," ",t.location?.address?.addressLocality||t.location?.name]})]})]})]},a)})})});function K({events:s}){const t=[...s].reverse(),[a,r]=o.useState("list");return e.jsxs("div",{className:"relative min-h-screen w-full font-sans overflow-x-hidden",children:[e.jsx("style",{children:`
          .bg-grain {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.8;
            mix-blend-mode: overlay;
            pointer-events: none;
          }
        `}),e.jsx(D,{}),e.jsxs("aside",{className:"fixed right-0 top-0 h-full flex-col justify-center items-center gap-6 z-50 bg-[#0e0e0e]/60 backdrop-blur-md border-l border-white/5 w-16 hidden md:flex",children:[e.jsx("button",{onClick:()=>r("list"),className:`p-3 rounded-full transition-all group cursor-pointer ${a==="list"?"text-[#ffb3b2] bg-[#ffb3b2]/10":"text-[#e9bcba] hover:bg-[#ffb3b2]/10 hover:text-[#ffb3b2]"}`,title:"List View",children:e.jsx(b,{className:"w-6 h-6"})}),e.jsx("button",{onClick:()=>r("poster"),className:`p-3 rounded-full transition-all group cursor-pointer ${a==="poster"?"text-[#ffb3b2] bg-[#ffb3b2]/10":"text-[#e9bcba] hover:bg-[#ffb3b2]/10 hover:text-[#ffb3b2]"}`,title:"Poster View",children:e.jsx(p,{className:"w-6 h-6"})})]}),e.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0e0e0e]/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center py-4",children:[e.jsxs("button",{onClick:()=>r("list"),className:`flex flex-col items-center gap-1 ${a==="list"?"text-[#ffb3b2]":"text-[#e9bcba]"}`,children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"text-[10px] uppercase tracking-wider font-mono",children:"List"})]}),e.jsxs("button",{onClick:()=>r("poster"),className:`flex flex-col items-center gap-1 ${a==="poster"?"text-[#ffb3b2]":"text-[#e9bcba]"}`,children:[e.jsx(p,{className:"w-5 h-5"}),e.jsx("span",{className:"text-[10px] uppercase tracking-wider font-mono",children:"Poster"})]})]}),a==="list"&&e.jsx(U,{events:t}),a==="poster"&&e.jsx(V,{events:t})]})}export{K as default};
