import{c as e,$ as r}from"./AppHeader-5a986e33.js";import{s,a as i}from"./index-1b236eed.js";import{u as d,c as a}from"./index-03e5f1d1.js";import{S as m}from"./LoaderIcon-ab75df5c.js";import"./_commonjsHelpers-042e6b4d.js";import"./toast-0f51d593.js";var p=e({defaultClassName:"sro2250",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),g=e({defaultClassName:"sro2254",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),S=e({defaultClassName:"sro2252",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),$=e({defaultClassName:"sro2253",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),f=e({defaultClassName:"sro2251",variantClassNames:{},defaultVariants:{},compoundVariants:[]});const v=r("div",p),C=r("h1",f),l=r("div",S),u=r("label",$),c=r("input",g),P=()=>{const[L,o]=d();return a(v,{get children(){return[a(C,{children:"SCONE"}),a(l,{get children(){return[a(c,{required:!0,onKeyUp:t=>{let n=t.target;o("setPersonID",n.value),s("loginSecret",{person_id:n.value})}}),a(u,{children:"Person ID"})]}}),a(l,{get children(){return[a(c,{required:!0,type:"password",onKeyUp:t=>{let n=t.target;s("loginSecret",{password:n.value})},onKeyPress:t=>{t.target,t.key==="Enter"&&o("login",i.loginSecret)}}),a(u,{children:"Password"})]}}),a(m,{onClick:t=>{console.log(t),o("login",i.loginSecret)},children:"LOGIN"})]}})};export{c as SLoginInput,l as SLoginInputGroup,u as SLoginLabel,P as default};
