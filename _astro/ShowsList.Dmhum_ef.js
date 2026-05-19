import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as i}from"./index.RH_Wq4ov.js";/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(...s)=>s.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,a)=>a?a.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=s=>{const t=L(s);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},z=i.createContext({}),E=()=>i.useContext(z),M=i.forwardRef(({color:s,size:t,strokeWidth:r,absoluteStrokeWidth:a,className:n="",children:o,iconNode:g,...d},w)=>{const{size:c=24,strokeWidth:x=2,absoluteStrokeWidth:y=!1,color:j="currentColor",className:v=""}=E()??{},N=a??y?Number(r??x)*24/Number(t??c):r??x;return i.createElement("svg",{ref:w,...l,width:t??c??l.width,height:t??c??l.height,stroke:s??j,strokeWidth:N,className:u("lucide",v,n),...!o&&!S(d)&&{"aria-hidden":"true"},...d},[...g.map(([k,C])=>i.createElement(k,C)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(s,t)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(M,{ref:o,iconNode:t,className:u(`lucide-${A(m(s))}`,`lucide-${s}`,a),...n}));return r.displayName=m(s),r};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],h=b("layout-grid",_);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],p=b("list",B),f=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"}),O=({events:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-30",style:{backgroundImage:"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDm8rGeAKDi7Qp9opVj8exc849kJ07VR_-gisO04g_8OOWlscyQCy62TBdjTSmmI2F2oiy249i_u8rD1ulSVZckfuxjcBYzri_I56ygkwkeBuZAILo9IzU4u0cFNHK20e-M0i8sED6QqSgMYjOZzGrV78XqteC0XbbuIdlH4Fei7RXp8quLZakzli6ziu9Yv3y19Zyq_fzv9oeu5cCsLHmyEAA6wHLbEYyPTLt4-ngtUQunoSN7MCgRqN3tONv9ZsAzERePqLyIz9Q')"}}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/80 to-[#131313]"}),e.jsx("div",{className:"absolute inset-0 bg-grain transition-opacity duration-300 opacity-10"})]}),e.jsxs("div",{className:"relative z-10 pt-24 pb-48 px-6 md:px-16 md:pr-32 max-w-7xl mx-auto min-h-screen flex flex-col",children:[e.jsxs("header",{className:"mb-16",children:[e.jsx("h1",{className:"text-5xl md:text-7xl text-[#e5e2e1] uppercase mb-4 opacity-90 font-bold tracking-tighter",children:"Archive Directory"}),e.jsx("p",{className:"text-base md:text-lg text-[#e9bcba] max-w-xl",children:"A chronological record of aural decimation. Raw data extracted from the touring history."})]}),e.jsxs("div",{className:"flex flex-col gap-0 w-full",children:[e.jsxs("div",{className:"flex items-center py-4 px-4 border-b border-white/10 opacity-50 mb-2",children:[e.jsx("div",{className:"w-1/4 md:w-1/5 text-xs tracking-widest text-[#e9bcba] uppercase font-mono",children:"Date"}),e.jsx("div",{className:"w-1/2 md:w-3/5 text-xs tracking-widest text-[#e9bcba] uppercase font-mono",children:"Show"}),e.jsx("div",{className:"w-1/4 md:w-1/5 text-right text-xs tracking-widest text-[#e9bcba] uppercase font-mono",children:"Venue"})]}),s.map((t,r)=>e.jsxs("div",{className:"group flex flex-col border-b border-white/5 hover:bg-[#2a2a2a]/40 transition-colors duration-300 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-[#ffb3b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0 pointer-events-none"}),e.jsxs("div",{className:"flex items-center py-6 px-4 relative z-10",children:[e.jsx("div",{className:"w-1/4 md:w-1/5 text-sm tracking-wider text-[#929090] uppercase font-mono",children:f(t.startDate)}),e.jsxs("div",{className:"w-1/2 md:w-3/5 flex flex-col justify-center",children:[e.jsx("div",{className:"text-2xl md:text-4xl text-[#e5e2e1] group-hover:text-[#ffb3b2] transition-colors duration-300 uppercase tracking-tight font-bold",children:t.name}),e.jsx("span",{className:"text-xs tracking-wider text-[#e9bcba] uppercase font-mono opacity-80 mt-1",children:[...t.performer].reverse().map(a=>a.name).join(" • ")})]}),e.jsxs("div",{className:"w-1/4 md:w-1/5 text-right text-sm tracking-wider text-[#ffb3b2] uppercase font-mono",children:[t.location?.name,e.jsx("br",{}),e.jsx("span",{className:"text-[#e9bcba] text-[10px] opacity-70 uppercase",children:t.location?.address?.addressLocality||"UNKNOWN"})]})]})]},r))]})]})]}),q=({events:s})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(circle,_rgba(255,179,178,0.05)_0%,_rgba(19,19,19,0)_70%)] pointer-events-none z-0"}),e.jsxs("div",{className:"relative z-10 pt-24 pb-48 px-6 md:px-16 md:pr-32 max-w-7xl mx-auto min-h-screen",children:[e.jsxs("header",{className:"mb-16 border-b border-white/10 pb-8",children:[e.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-[#e5e2e1] mb-2 tracking-tighter uppercase",children:"Visual Archive"}),e.jsx("p",{className:"text-base md:text-lg text-[#e9bcba] max-w-xl",children:"A curated collection of brutalist tour graphics from the underground circuit. High contrast. High distortion."})]}),e.jsx("div",{className:"columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8",children:s.map((t,r)=>{const a=["https://lh3.googleusercontent.com/aida-public/AB6AXuBCK4CKWg78LSOkRWj3HlVB_LOiMaiWD7uNAO5iH6HVOsHfakVE3jDsHojg7DYBgvsbZh_vF9Y5zdC-fgDYVSdDM6WGy1laAjqpWUsm0_PI5pEm35uxyz8orlyVDFVCq7_2yy7urIHM6easuXBs4lOU2QTZ-2uv_4qTJ2obULenbTBllhoIcoAMPSn-GD10Bb7oqXbQvHdtRQnMU9trixnmtjEMnF93C3yRqSRpV5oSABLjRwwZEr-DQdNW31xqYAiZi8PYxd8LQy8","https://lh3.googleusercontent.com/aida-public/AB6AXuDI3ooxX0PS_wXpltXGvzQhMgsBVuUGXuGwBrCAKcvFmmnICjtteO6CgmlLL01XqOY2eyTfSoAVjCRS5M1pyhOIdFLxOEysTvsfwex2XaO6IYy3U_N4GHwRN7JTDeNEqvPourP3_qqSgWtxIM2XicynEddMcTteCmAHv3l85DtnsVI88PzRF2BQebaS7Vy3LwAxjjQm8YfI0PZinGezskxjOSZTuOcHuCLXb9gtCEvouKf5qP-E_kYWhs_-0OR-ux5zYoyBW0CphqI","https://lh3.googleusercontent.com/aida-public/AB6AXuBtmYdXsu8fkFMn94rL5Hk6CCm2Ds5KnzGDgGgp0Z8_4M75QEvmCrn5PB6uETt82rYcP6vXi3mShoQKQk4irGNQLYqZhtJPFl2KX-sgERZjGqHtNqWeNy55SKlM2M8Qha7tc_CG0ilhpPVSqqaWIr1BOwXjeeZ-WZjYiASWn8r3PYamhyk4tL2dkORPAl71escaKiOMgECMB1b-eFIx4iuYQSAnKytrMm7WQlZ0QbdYoH0vG6Sm6lcvt9jXcmOAnuAbtRPe2rwUlH4"],n=t.image||a[r%a.length];return e.jsxs("article",{className:"poster-card relative break-inside-avoid overflow-hidden bg-[#201f1f] cursor-pointer rounded-md group",children:[e.jsx("img",{alt:t.name,className:"w-full h-auto object-cover grayscale mix-blend-luminosity opacity-80 group-hover:grayscale-0 transition-all duration-500 block",src:n}),e.jsxs("div",{className:"absolute inset-0 bg-[#bf002a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10",children:[e.jsx("h3",{className:"text-2xl font-bold text-white uppercase leading-tight",children:t.name}),e.jsxs("div",{className:"flex flex-col gap-1 mt-1",children:[e.jsx("span",{className:"text-xs tracking-wider text-white uppercase font-mono font-bold",children:t.performer.map(o=>o.name).join(" • ")}),e.jsxs("span",{className:"text-xs tracking-widest text-white uppercase font-mono",children:[f(t.startDate)," // ",t.location?.address?.addressLocality||t.location?.name]})]})]})]},r)})})]})]});function V({events:s}){const t=[...s].reverse(),[r,a]=i.useState("list");return e.jsxs("div",{className:"relative min-h-screen w-full font-sans overflow-x-hidden",children:[e.jsx("style",{children:`
          .bg-grain {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.05;
            mix-blend-mode: overlay;
            pointer-events: none;
          }
          .poster-card {
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease;
          }
          .poster-card:hover {
            transform: scale(1.02);
            box-shadow: 0 0 20px rgba(255, 0, 60, 0.4), inset 0 0 0 1px rgba(255, 0, 60, 0.8);
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}),e.jsxs("aside",{className:"fixed right-0 top-0 h-full flex-col justify-center items-center gap-6 z-50 bg-[#0e0e0e]/60 backdrop-blur-md border-l border-white/5 w-16 hidden md:flex",children:[e.jsx("button",{onClick:()=>a("list"),className:`p-3 rounded-full transition-all group cursor-pointer ${r==="list"?"text-[#ffb3b2] bg-[#ffb3b2]/10":"text-[#e9bcba] hover:bg-[#ffb3b2]/10 hover:text-[#ffb3b2]"}`,title:"List View",children:e.jsx(p,{className:"w-6 h-6"})}),e.jsx("button",{onClick:()=>a("poster"),className:`p-3 rounded-full transition-all group cursor-pointer ${r==="poster"?"text-[#ffb3b2] bg-[#ffb3b2]/10":"text-[#e9bcba] hover:bg-[#ffb3b2]/10 hover:text-[#ffb3b2]"}`,title:"Poster View",children:e.jsx(h,{className:"w-6 h-6"})})]}),e.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0e0e0e]/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center py-4",children:[e.jsxs("button",{onClick:()=>a("list"),className:`flex flex-col items-center gap-1 ${r==="list"?"text-[#ffb3b2]":"text-[#e9bcba]"}`,children:[e.jsx(p,{className:"w-5 h-5"}),e.jsx("span",{className:"text-[10px] uppercase tracking-wider font-mono",children:"List"})]}),e.jsxs("button",{onClick:()=>a("poster"),className:`flex flex-col items-center gap-1 ${r==="poster"?"text-[#ffb3b2]":"text-[#e9bcba]"}`,children:[e.jsx(h,{className:"w-5 h-5"}),e.jsx("span",{className:"text-[10px] uppercase tracking-wider font-mono",children:"Poster"})]})]}),r==="list"&&e.jsx(O,{events:t}),r==="poster"&&e.jsx(q,{events:t})]})}export{V as default};
