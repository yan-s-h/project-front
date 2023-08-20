import{p as V,m as _,aE as H,a as j,f as M,g as w,aF as N,l as W,o as p,q as $,t as S,u as P,c as n,aG as F,aH as A,aI as z,ao as L,ap as J,w as K,aw as k,aJ as Q,h as B,aK as X,a0 as Y,d as Z,aL as ee,e as ae,aM as te,j as se,k as ne,aN as oe,x as le,Q as q,S as ie,T as d,R as re,Z as ue,W as ce,ak as de,al as E,K as I,a2 as T,ab as x}from"./index-267745d2.js";import{c as me,a as b,V as pe}from"./index.esm-389cc94a.js";import{V as ve}from"./VContainer-1a652348.js";import{a as y,V as fe}from"./VRow-c27cac70.js";import{V as xe}from"./VTextarea-3e6a1390.js";import"./_commonjsHelpers-725317a4.js";const v=Symbol.for("vuetify:v-expansion-panel"),ge=["default","accordion","inset","popout"],he=V({color:String,variant:{type:String,default:"default",validator:e=>ge.includes(e)},readonly:Boolean,..._(),...H(),...j(),...M()},"VExpansionPanels"),be=w()({name:"VExpansionPanels",props:he(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a}=s;N(e,v);const{themeClasses:t}=W(e),i=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return $({VExpansionPanel:{color:S(e,"color")},VExpansionPanelTitle:{readonly:S(e,"readonly")}}),P(()=>n(e.tag,{class:["v-expansion-panels",t.value,i.value,e.class],style:e.style},a)),{}}}),ye=V({..._(),...F()},"VExpansionPanelText"),Ve=w()({name:"VExpansionPanelText",props:ye(),setup(e,s){let{slots:a}=s;const t=A(v);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:r}=z(e,t.isSelected);return P(()=>n(K,{onAfterLeave:r},{default:()=>{var o;return[L(n("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&i.value&&n("div",{class:"v-expansion-panel-text__wrapper"},[(o=a.default)==null?void 0:o.call(a)])]),[[J,t.isSelected.value]])]}})),{}}}),R=V({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,..._()},"VExpansionPanelTitle"),_e=w()({name:"VExpansionPanelTitle",directives:{Ripple:Q},props:R(),setup(e,s){let{slots:a}=s;const t=A(v);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:r}=B(e,"color"),o=p(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return P(()=>{var l;return L(n("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value},i.value,e.class],style:[r.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[n("span",{class:"v-expansion-panel-title__overlay"},null),(l=a.default)==null?void 0:l.call(a,o.value),!e.hideActions&&n("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(o.value):n(Y,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[X("ripple"),e.ripple]])}),{}}}),we=V({title:String,text:String,bgColor:String,..._(),...Z(),...ee(),...F(),...ae(),...j(),...R()},"VExpansionPanel"),Pe=w()({name:"VExpansionPanel",props:we(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:a}=s;const t=te(e,v),{backgroundColorClasses:i,backgroundColorStyles:r}=B(e,"bgColor"),{elevationClasses:o}=se(e),{roundedClasses:l}=ne(e),u=p(()=>(t==null?void 0:t.disabled.value)||e.disabled),g=p(()=>t.group.items.value.reduce((m,c,h)=>(t.group.selected.value.includes(c.id)&&m.push(h),m),[])),U=p(()=>{const m=t.group.items.value.findIndex(c=>c.id===t.id);return!t.isSelected.value&&g.value.some(c=>c-m===1)}),G=p(()=>{const m=t.group.items.value.findIndex(c=>c.id===t.id);return!t.isSelected.value&&g.value.some(c=>c-m===-1)});return oe(v,t),P(()=>{const m=!!(a.text||e.text),c=!!(a.title||e.title);return n(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":U.value,"v-expansion-panel--after-active":G.value,"v-expansion-panel--disabled":u.value},l.value,i.value,e.class],style:[r.value,e.style]},{default:()=>{var h;return[n("div",{class:["v-expansion-panel__shadow",...o.value]},null),c&&n(_e,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),m&&n(Ve,{key:"text",eager:e.eager},{default:()=>[a.text?a.text():e.text]}),(h=a.default)==null?void 0:h.call(a)]}})}),{}}}),f={_origin:"https://api.emailjs.com"},Ee=(e,s="https://api.emailjs.com")=>{f._userID=e,f._origin=s},D=(e,s,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class C{constructor(s){this.status=s.status,this.text=s.responseText}}const O=(e,s,a={})=>new Promise((t,i)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:o})=>{const l=new C(o);l.status===200||l.text==="OK"?t(l):i(l)}),r.addEventListener("error",({target:o})=>{i(new C(o))}),r.open("POST",f._origin+e,!0),Object.keys(a).forEach(o=>{r.setRequestHeader(o,a[o])}),r.send(s)}),Se=(e,s,a,t)=>{const i=t||f._userID;return D(i,e,s),O("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:i,service_id:e,template_id:s,template_params:a}),{"Content-type":"application/json"})},ke=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},qe=(e,s,a,t)=>{const i=t||f._userID,r=ke(a);D(i,e,s);const o=new FormData(r);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",s),o.append("user_id",i),O("/api/v1.0/email/send-form",o)},Ie={init:Ee,send:Se,sendForm:qe};const Te=x("h1",{class:"mb-3"},"About Us",-1),Ce=x("p",{class:"subheading"},"Welcome to Taealam, your gateway to learning Arabic!",-1),je=x("p",{class:"about-text"},"We are a passionate group of language enthusiasts dedicated to helping you explore the beauty of the Arabic language and culture.",-1),Fe=x("h2",{class:"subtitle-1"},"Frequently Asked Questions",-1),Ae=x("h2",{class:"subtitle-1"},"Contact Us",-1),Ge={__name:"AboutUsView",setup(e){const s=[{question:"What courses are currently available?",answer:"We currently offer beginner-level language courses in a variety of languages. Stay tuned for upcoming advanced and intermediate courses in the near future!"},{question:"How can I register for a course?",answer:'Registering for a course is a simple process. Begin by creating an account, then explore our course offerings and select the one that aligns with your learning objectives. Click the "Get Startedl" button to commence your learning journey. Please note that while our courses are free, but an account is required for access.'},{question:"Can I access the courses on mobile devices?",answer:"Absolutely! Our courses are designed to be accessible on various devices, including smartphones and tablets, so you can learn on the go."},{question:"What if I need additional help or support?",answer:"If you need assistance or have questions, our support team is available. Contact us via the form on this page for help with inquiries or any issues you encounter. We're dedicated to ensuring a seamless experience for you."},{question:"Is there a community or discussion forum for learners?",answer:"Yes, we have an active community of learners and a discussion forum where you can connect with fellow learners, ask questions, and share your experiences."}],a=le({name:"",email:"",subject:"",message:""}),t=me().shape({name:b().required(),email:b().email().required(),subject:b().required(),message:b().required()}),i=async()=>{try{await t.validate(a.value,{abortEarly:!1});const o={to_email:"machichioz79@gmail.com",from_name:a.value.name,from_email:a.value.email,subject:a.value.subject,message:a.value.message},l=await Ie.send("service_dgqnwlj","template_grnvf2q",o,"E9O3osL8tLn5HfqTG");console.log("Email sent successfully:",l),a.value={name:"",email:"",subject:"",message:""}}catch(o){console.error("Validation errors or sending email error:",o)}},r=()=>{a.value={name:"",email:"",subject:"",message:""}};return(o,l)=>(q(),ie(ve,null,{default:d(()=>[n(fe,{class:"max-width-1080"},{default:d(()=>[n(y,{cols:"12",class:"text-center"},{default:d(()=>[Te,Ce,je]),_:1}),n(y,{cols:"12",class:"mt-5"},{default:d(()=>[Fe,n(be,{variant:"accordion"},{default:d(()=>[(q(),re(ce,null,ue(s,(u,g)=>n(Pe,{key:g,title:u.question,text:u.answer,readonly:""},null,8,["title","text"])),64))]),_:1})]),_:1}),n(y,{cols:"12",class:"mt-5 max-width-512"},{default:d(()=>[Ae,n(pe,{onSubmit:de(i,["prevent"]),id:"myForm"},{default:d(()=>[n(E,{label:"Name",modelValue:a.value.name,"onUpdate:modelValue":l[0]||(l[0]=u=>a.value.name=u),required:""},null,8,["modelValue"]),n(E,{label:"Email",modelValue:a.value.email,"onUpdate:modelValue":l[1]||(l[1]=u=>a.value.email=u),required:""},null,8,["modelValue"]),n(E,{label:"Subject",modelValue:a.value.subject,"onUpdate:modelValue":l[2]||(l[2]=u=>a.value.subject=u),required:""},null,8,["modelValue"]),n(xe,{label:"Message",modelValue:a.value.message,"onUpdate:modelValue":l[3]||(l[3]=u=>a.value.message=u),required:""},null,8,["modelValue"]),n(y,{col:"12",class:"d-flex justify-end mt-3"},{default:d(()=>[n(I,{variant:"text",type:"reset",color:"error",onClick:r},{default:d(()=>[T("Reset")]),_:1}),n(I,{variant:"elevated",type:"submit",color:"primary",class:"ml-2"},{default:d(()=>[T("Submit")]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1}))}};export{Ge as default};