import{w as S,b as d,m as v,D as $,x as b,y as M,k as C,z as T,B as _,h as w,o as V,C as N}from"./index-22b88e5e.js";var x=(a,o,s)=>{for(const r of Object.keys(a))if(a[r]!==(o[r]??s[r]))return!1;return!0},u=a=>{const o=s=>{var r;let e=a.defaultClassName;const t={...a.defaultVariants,...s};for(const l in t){const n=t[l]??a.defaultVariants[l];if(n!=null){let i=n;typeof i=="boolean"&&(i=i===!0?"true":"false");const c=(r=a.variantClassNames[l])==null?void 0:r[i];c&&(e+=" "+c)}}for(const[l,n]of a.compoundVariants)x(l,t,a.defaultVariants)&&(e+=" "+n);return e};return o.macaronMeta={variants:Object.keys(a.variantClassNames),defaultClassName:a.defaultClassName,variantConcat(s){var r;let e=a.defaultClassName;for(const t in s){const l=s[t];if(l!=null){let n=l;typeof n=="boolean"&&(n=n===!0?"true":"false");const i=(r=a.variantClassNames[t])==null?void 0:r[n];i&&(e+=" "+i)}}return e}},o};function m(a,o){function s(r){const[e,t]=S(r,s.variants);return typeof a=="string"?d($,v(t,{component:a,get class(){return s.classes(e,r.class).join(" ")}})):d(a,v(r,{get class(){return s.classes(e,r.class).join(" ")}}))}return s.toString=()=>s.selector(null),s.variants=[...o.macaronMeta.variants??[],...a.variants??[]],s.variantConcat=o.macaronMeta.variantConcat,s.classes=(r,e,t=o)=>{const l=new Set(A(t(r)+(e?` ${e}`:"")));if(a.classes)for(const n of a.classes(r,e,a.variantConcat))l.add(n);return Array.from(l)},s.selector=r=>{const e=s.classes(r,void 0,o.macaronMeta.variantConcat);return e.length>0&&e[0].length>0?"."+e.join("."):e.join(".")},s}function A(a){return a.split(" ")}const p=M(),P=["title","meta"],h=a=>a.tag+(a.name?`.${a.name}"`:""),F=a=>{if(!b.context){const e=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(e,t=>t.parentNode.removeChild(t))}const o=new Map;function s(e){if(e.ref)return e.ref;let t=document.querySelector(`[data-sm="${e.id}"]`);return t?(t.tagName.toLowerCase()!==e.tag&&(t.parentNode&&t.parentNode.removeChild(t),t=document.createElement(e.tag)),t.removeAttribute("data-sm")):t=document.createElement(e.tag),t}const r={addClientTag:e=>{let t=h(e);if(P.indexOf(e.tag)!==-1){o.has(t)||o.set(t,[]);let n=o.get(t),i=n.length;n=[...n,e],o.set(t,n);{let c=s(e);e.ref=c,C(c,e.props);let f=null;for(var l=i-1;l>=0;l--)if(n[l]!=null){f=n[l];break}c.parentNode!=document.head&&document.head.appendChild(c),f&&f.ref&&document.head.removeChild(f.ref)}return i}{let n=s(e);e.ref=n,C(n,e.props),n.parentNode!=document.head&&document.head.appendChild(n)}return-1},removeClientTag:(e,t)=>{const l=h(e);if(e.ref){const n=o.get(l);if(n){if(e.ref.parentNode){e.ref.parentNode.removeChild(e.ref);for(let i=t-1;i>=0;i--)n[i]!=null&&document.head.appendChild(n[i].ref)}n[t]=null,o.set(l,n)}else e.ref.parentNode&&e.ref.parentNode.removeChild(e.ref)}}};return d(p.Provider,{value:r,get children(){return a.children}})},y=(a,o)=>{const s=T();if(!_(p))throw new Error("<MetaProvider /> should be in the tree");return g({tag:a,props:o,id:s,get name(){return o.name||o.property}}),null};function g(a){const{addClientTag:o,removeClientTag:s,addServerTag:r}=_(p);w(()=>{{let e=o(a);V(()=>s(a,e))}})}const I=a=>y("title",a),R=a=>y("meta",a);var j=u({defaultClassName:"tr0dw00",variantClassNames:{},defaultVariants:{},compoundVariants:[]});const D=m("div",j);var E=u({defaultClassName:"ra3ypv0",variantClassNames:{},defaultVariants:{},compoundVariants:[]});const L=m("div",E);var k=u({defaultClassName:"_1wtrfza0",variantClassNames:{},defaultVariants:{},compoundVariants:[]});const U=m("div",k);var H=u({defaultClassName:"_5yipa80",variantClassNames:{platform:{ios:"_5yipa81",web:"_5yipa82",android:"_5yipa83"}},defaultVariants:{platform:"web"},compoundVariants:[]});const B=m("header",H);var q=u({defaultClassName:"_17ismpw0",variantClassNames:{platform:{ios:"_17ismpw1",web:"_17ismpw2",android:"_17ismpw3"}},defaultVariants:{},compoundVariants:[]});const O=m("p",q),G=a=>d(B,{get platform(){return N.getPlatform()},get children(){return d(O,{get platform(){return N.getPlatform()},get children(){return a.title}})}});export{m as $,G as A,R as M,U as S,I as T,L as a,D as b,u as c,F as d};
