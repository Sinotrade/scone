import{a as C,f as D,i as l,c as o,F as O,g as c,s as m,h as N,t as u,M as y,m as $,S as G,j as f,k as z,d as w,o as U,l as g,e as j,u as K}from"./index-00a73181.js";import{m as R,b as q,d as W,e as Y,r as B,f as H,h as k,A as T,i as F,j as J,k as Q,u as X,a as L,s as E}from"./index-4892ecd6.js";import{c as h,$ as _}from"./AppHeader-1b7c0777.js";import{S as Z}from"./Sbutton-b4ad16f4.js";var ee=h({defaultClassName:"sro2250",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),te=h({defaultClassName:"sro2254",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),ae=h({defaultClassName:"sro2252",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),ne=h({defaultClassName:"sro2253",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),se=h({defaultClassName:"sro2251",variantClassNames:{},defaultVariants:{},compoundVariants:[]});const re={display:"flex","align-items":"center",color:"#363636",background:"white","box-shadow":"0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)","max-width":"350px","pointer-events":"auto",padding:"8px 10px","border-radius":"4px","line-height":"1.3","will-change":"transform"},ie={display:"flex","align-items":"center",flex:"1 1 auto",margin:"4px 10px","white-space":"pre-line"},b={"flex-shrink":0,"min-width":"20px","min-height":"20px",display:"flex","align-items":"center","justify-content":"center","text-align":"center"},S=t=>({calcMode:"spline",keyTimes:"0; 1",keySplines:t}),oe=u("<div><style>.sldt-active{z-index:9999;}.sldt-active>*{pointer-events:auto;}</style></div>"),we=t=>(C(()=>{R(t)}),C(()=>{const a=q();D(()=>{a&&a.forEach(e=>e&&clearTimeout(e))})}),(()=>{const a=oe.cloneNode(!0);return a.firstChild,l(a,o(O,{get each(){return W.toasts},children:e=>o(ue,{toast:e})}),null),c(e=>{const n={...Y,...t.containerStyle},r=t.containerClassName;return e._v$=m(a,n,e._v$),r!==e._v$2&&N(a,e._v$2=r),e},{_v$:void 0,_v$2:void 0}),a})()),p=u("<div></div>"),le=u("<div><div></div></div>"),ce=t=>{let a;return C(()=>{if(!a)return;const e=H(t.toast,t.position);t.toast.visible?a.animate([{transform:`translate3d(0,${e*-200}%,0) scale(.6)`,opacity:.5},{transform:"translate3d(0,0,0) scale(1)",opacity:1}],{duration:350,fill:"forwards",easing:"cubic-bezier(.21,1.02,.73,1)"}):a.animate([{transform:"translate3d(0,0,-1px) scale(1)",opacity:1},{transform:`translate3d(0,${e*-150}%,-1px) scale(.4)`,opacity:0}],{duration:400,fill:"forwards",easing:"cubic-bezier(.06,.71,.55,1)"})}),(()=>{const e=le.cloneNode(!0),n=e.firstChild,r=a;return typeof r=="function"?z(r,e):a=e,l(e,o(G,{get children(){return[o(y,{get when(){return t.toast.icon},get children(){const s=p.cloneNode(!0);return l(s,()=>t.toast.icon),c(i=>m(s,b,i)),s}}),o(y,{get when(){return t.toast.type==="loading"},get children(){const s=p.cloneNode(!0);return l(s,o(ye,$(()=>t.toast.iconTheme))),c(i=>m(s,b,i)),s}}),o(y,{get when(){return t.toast.type==="success"},get children(){const s=p.cloneNode(!0);return l(s,o($e,$(()=>t.toast.iconTheme))),c(i=>m(s,b,i)),s}}),o(y,{get when(){return t.toast.type==="error"},get children(){const s=p.cloneNode(!0);return l(s,o(he,$(()=>t.toast.iconTheme))),c(i=>m(s,b,i)),s}})]}}),n),f(n,$(()=>t.toast.ariaProps),!1,!0),l(n,()=>B(t.toast.message,t.toast)),c(s=>{const i=t.toast.className,d={...re,...t.toast.style},v=ie;return i!==s._v$&&N(e,s._v$=i),s._v$2=m(e,d,s._v$2),s._v$3=m(n,v,s._v$3),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})()},de=u("<div></div>"),ue=t=>{const a=()=>{const r=t.toast.position||F.position,s=J(t.toast,r);return Q(r,s)},e=w(()=>a());let n;return U(()=>{n&&X(n,t.toast)}),(()=>{const r=de.cloneNode(!0);r.addEventListener("mouseleave",()=>k({type:T.END_PAUSE,time:Date.now()})),r.addEventListener("mouseenter",()=>k({type:T.START_PAUSE,time:Date.now()}));const s=n;return typeof s=="function"?z(s,r):n=r,l(r,(()=>{const i=w(()=>t.toast.type==="custom");return()=>i()?B(t.toast.message,t.toast):o(ce,{get toast(){return t.toast},get position(){return t.toast.position||F.position}})})()),c(i=>{const d=e(),v=t.toast.visible?"sldt-active":"";return i._v$=m(r,d,i._v$),v!==i._v$2&&N(r,i._v$2=v),i},{_v$:void 0,_v$2:void 0}),r})()},me=u('<svg><circle cx="16" cy="16" r="0"><animate attributeName="opacity" values="0; 1; 1"></animate><animate attributeName="r" values="0; 17.5; 16"></animate></circle></svg>',8,!0),fe=u('<svg><circle cx="16" cy="16" r="12" opacity="0"><animate attributeName="opacity" values="1; 0"></animate><animate attributeName="r" values="12; 26"></animate></circle></svg>',8,!0),I=t=>{const a={dur:"0.35s",begin:"100ms",fill:"freeze",calcMode:"spline",keyTimes:"0; 0.6; 1",keySplines:"0.25 0.71 0.4 0.88; .59 .22 .87 .63"};return(()=>{const e=me.cloneNode(!0),n=e.firstChild,r=n.nextSibling;return f(n,a,!0,!1),f(r,a,!0,!1),c(()=>g(e,"fill",t.fill)),e})()},A=t=>{const a={dur:"1s",begin:t.begin||"320ms",fill:"freeze",...S("0.0 0.0 0.2 1")};return(()=>{const e=fe.cloneNode(!0),n=e.firstChild,r=n.nextSibling;return f(n,a,!0,!1),f(r,a,!0,!1),c(()=>g(e,"fill",t.fill)),e})()},ve=u('<svg viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><path fill="none" stroke-width="4" stroke-dasharray="22" stroke-dashoffset="22" stroke-linecap="round" stroke-miterlimit="10" d="M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7"><animate attributeName="stroke-dashoffset" values="22;0" dur="0.25s" begin="250ms" fill="freeze"></animate></path></svg>'),$e=t=>{const a=t.primary||"#34C759";return(()=>{const e=ve.cloneNode(!0),n=e.firstChild,r=n.firstChild;return e.style.setProperty("overflow","visible"),l(e,o(I,{fill:a}),n),l(e,o(A,{fill:a,begin:"350ms"}),n),f(r,$(()=>S("0.0, 0.0, 0.58, 1.0")),!0,!1),c(()=>g(n,"stroke",t.secondary||"#FCFCFC")),e})()},ge=u('<svg viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><path fill="none" stroke-width="4" stroke-dasharray="9" stroke-dashoffset="9" stroke-linecap="round" d="M16,7l0,9"><animate attributeName="stroke-dashoffset" values="9;0" dur="0.2s" begin="250ms" fill="freeze"></animate></path><circle cx="16" cy="23" r="2.5" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.25s" begin="350ms" fill="freeze"></animate></circle></svg>'),he=t=>{const a=t.primary||"#FF3B30";return(()=>{const e=ge.cloneNode(!0),n=e.firstChild,r=n.firstChild,s=n.nextSibling,i=s.firstChild;return e.style.setProperty("overflow","visible"),l(e,o(I,{fill:a}),n),l(e,o(A,{fill:a}),n),f(r,$(()=>S("0.0, 0.0, 0.58, 1.0")),!0,!1),f(i,$(()=>S("0.0, 0.0, 0.58, 1.0")),!0,!1),c(d=>{const v=t.secondary||"#FFFFFF",x=t.secondary||"#FFFFFF";return v!==d._v$&&g(n,"stroke",d._v$=v),x!==d._v$2&&g(s,"fill",d._v$2=x),d},{_v$:void 0,_v$2:void 0}),e})()},_e=u('<svg viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><path fill="none" stroke-width="4" stroke-miterlimit="10" d="M16,6c3,0,5.7,1.3,7.5,3.4c1.5,1.8,2.5,4,2.5,6.6c0,5.5-4.5,10-10,10S6,21.6,6,16S10.5,6,16,6z"></path><path fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M16,6c3,0,5.7,1.3,7.5,3.4c0.6,0.7,1.1,1.4,1.5,2.2"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.75s" repeatCount="indefinite"></animateTransform></path></svg>'),ye=t=>(()=>{const a=_e.cloneNode(!0),e=a.firstChild,n=e.nextSibling;return a.style.setProperty("overflow","visible"),c(r=>{const s=t.primary||"#E5E7EB",i=t.secondary||"#4b5563";return s!==r._v$&&g(e,"stroke",r._v$=s),i!==r._v$2&&g(n,"stroke",r._v$2=i),r},{_v$:void 0,_v$2:void 0}),a})(),be=_("div",ee),pe=_("h1",se),P=_("div",ae),V=_("label",ne),M=_("input",te),ke=()=>{j();const[t,a]=K();return o(be,{get children(){return[o(pe,{children:"SCONE"}),o(P,{get children(){return[o(M,{required:!0,onKeyUp:e=>{let n=e.target;a("setPersonID",n.value),L("loginSecret",{person_id:n.value})}}),o(V,{children:"Person ID"})]}}),o(P,{get children(){return[o(M,{required:!0,type:"password",onKeyUp:e=>{let n=e.target;L("loginSecret",{password:n.value})},onKeyPress:e=>{e.target,e.key==="Enter"&&a("login",E.loginSecret)}}),o(V,{children:"Password"})]}}),o(Z,{onClick:e=>{console.log(e),a("login",E.loginSecret)},children:"LOGIN"})]}})};export{ke as L,P as S,we as T,M as a,V as b};
