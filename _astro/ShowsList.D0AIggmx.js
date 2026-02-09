import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as t}from"./index.RH_Wq4ov.js";function x({events:d}){const o=t.useRef({}),[c,n]=t.useState(null),l=(r,i)=>{if(Object.values(o.current).forEach(s=>s.pause()),i.audio?.url){const s=`${r}-${i.name}`;if(!o.current[s]){const a=new Audio(i.audio.url);o.current[s]=a}o.current[s].currentTime=0,o.current[s].play().catch(a=>console.error("Audio play error:",a)),n(s)}},m=()=>{Object.values(o.current).forEach(r=>r.pause()),n(null)},h=r=>new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsxs("div",{className:"shows-container",children:[e.jsx("div",{className:"shows-grid",children:d.map((r,i)=>e.jsxs("div",{className:"show-card",children:[r.image&&e.jsx("div",{className:"show-poster",children:e.jsx("img",{src:r.image,alt:r.name})}),e.jsxs("div",{className:"show-content",children:[e.jsx("h3",{className:"show-title",children:r.name}),e.jsxs("div",{className:"show-date",children:["📅 ",h(r.startDate)]}),e.jsxs("div",{className:"show-location",children:["📍 ",r.location.name,r.location.address?.addressLocality&&e.jsxs("span",{children:[", ",r.location.address.addressLocality]})]}),r.description&&e.jsx("p",{className:"show-description",children:r.description}),e.jsxs("div",{className:"performers",children:[e.jsx("h4",{children:"Artists"}),e.jsx("div",{className:"performers-list",children:r.performer.map((s,a)=>e.jsxs("div",{className:`performer ${c===`${r.name}-${s.name}`?"active":""}`,onMouseEnter:()=>l(r.name,s),onMouseLeave:m,children:[s.image&&e.jsx("img",{src:s.image,alt:s.name,className:"performer-image"}),e.jsxs("div",{className:"performer-info",children:[e.jsx("p",{className:"performer-name",children:s.name}),s.description&&e.jsx("p",{className:"performer-description",children:s.description}),s.audio&&e.jsxs("p",{className:"audio-hint",children:["🔊 Hover to listen: ",s.audio.description]})]})]},a))})]})]})]},i))}),e.jsx("style",{children:`
        .shows-container {
          padding: 2rem 0;
        }

        .shows-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .show-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }

        .show-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .show-poster {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .show-poster img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .show-content {
          padding: 1.5rem;
        }

        .show-title {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
          font-weight: 600;
          color: #333;
        }

        .show-date,
        .show-location {
          margin: 0.5rem 0;
          font-size: 0.95rem;
          color: #666;
          line-height: 1.4;
        }

        .show-description {
          margin: 1rem 0;
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
        }

        .performers {
          margin-top: 1.5rem;
          border-top: 1px solid #e0e0e0;
          padding-top: 1rem;
        }

        .performers h4 {
          margin: 0 0 1rem 0;
          font-size: 1rem;
          font-weight: 600;
          color: #333;
        }

        .performers-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .performer {
          display: flex;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #f9f9f9;
        }

        .performer:hover,
        .performer.active {
          background: #f0f0f0;
          transform: translateX(4px);
        }

        .performer-image {
          width: 60px;
          height: 60px;
          border-radius: 4px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .performer-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .performer-name {
          margin: 0;
          font-weight: 600;
          font-size: 0.95rem;
          color: #333;
        }

        .performer-description {
          margin: 0.25rem 0 0 0;
          font-size: 0.85rem;
          color: #777;
          line-height: 1.3;
        }

        .audio-hint {
          margin: 0.5rem 0 0 0;
          font-size: 0.8rem;
          color: #999;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .shows-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}export{x as default};
