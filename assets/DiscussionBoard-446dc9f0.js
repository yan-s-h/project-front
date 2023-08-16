import{x as L,at as te,p as le,au as $,b as ne,m as se,av as ie,d as oe,e as re,aw as ue,a as de,f as ce,ax as ve,g as fe,D as ge,ay as me,n as be,l as pe,O as ye,s as _e,q as j,az as Ve,o as V,aA as N,t as P,u as xe,c as a,K as x,H as B,aB as G,aC as H,_ as he,P as Pe,Q as A,S as O,T as i,an as ee,ao as ae,a2 as h,a8 as M,ap as W,ab as X,ag as Se,ah as ke,M as Le,N as Ce,L as we,ad as De,aa as Ie,R as Q,aD as Be,W as Z,a9 as Ae,X as b,U as Re,Z as Fe,ae as $e,af as Ne,as as Me,a4 as Te,a6 as ze,a7 as Ue}from"./index-a8ce216d.js";import{c as qe,a as J,u as Ee,d as Y,V as Ke}from"./index.esm-8d5c7c80.js";import{V as Oe}from"./VContainer-2aeaea17.js";import{a as We,V as T}from"./VRow-9c2501b5.js";import{V as Xe}from"./VTextarea-1af87a5e.js";import"./_commonjsHelpers-39b5b250.js";function je(){const e=L([]);te(()=>e.value=[]);function S(u,y){e.value[y]=u}return{refs:e,updateRef:S}}const Ge=le({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:$,default:"$first"},prevIcon:{type:$,default:"$prev"},nextIcon:{type:$,default:"$next"},lastIcon:{type:$,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...ne(),...se(),...ie(),...oe(),...re(),...ue(),...de({tag:"nav"}),...ce(),...ve({variant:"text"})},"VPagination"),He=fe()({name:"VPagination",props:Ge(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,S){let{slots:u,emit:y}=S;const s=ge(e,"modelValue"),{t:m,n:z}=me(),{isRtl:k}=be(),{themeClasses:R}=pe(e),{width:U}=ye(),C=_e(-1);j(void 0,{scoped:!0});const{resizeRef:w}=Ve(t=>{if(!t.length)return;const{target:n,contentRect:o}=t[0],g=n.querySelector(".v-pagination__list > *");if(!g)return;const p=o.width,I=g.offsetWidth+parseFloat(getComputedStyle(g).marginRight)*2;C.value=F(p,I)}),c=V(()=>parseInt(e.length,10)),r=V(()=>parseInt(e.start,10)),v=V(()=>e.totalVisible?parseInt(e.totalVisible,10):C.value>=0?C.value:F(U.value,58));function F(t,n){const o=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((t-n*o)/n).toFixed(2)))}const D=V(()=>{if(c.value<=0||isNaN(c.value)||c.value>Number.MAX_SAFE_INTEGER)return[];if(v.value<=1)return[s.value];if(c.value<=v.value)return N(c.value,r.value);const t=v.value%2===0,n=t?v.value/2:Math.floor(v.value/2),o=t?n:n+1,g=c.value-n;if(o-s.value>=0)return[...N(Math.max(1,v.value-1),r.value),e.ellipsis,c.value];if(s.value-g>=(t?1:0)){const p=v.value-1,I=c.value-p+r.value;return[r.value,e.ellipsis,...N(p,I)]}else{const p=Math.max(1,v.value-3),I=p===1?s.value:s.value-Math.ceil(p/2)+r.value;return[r.value,e.ellipsis,...N(p,I),e.ellipsis,c.value]}});function _(t,n,o){t.preventDefault(),s.value=n,o&&y(o,n)}const{refs:q,updateRef:E}=je();j({VPaginationBtn:{color:P(e,"color"),border:P(e,"border"),density:P(e,"density"),size:P(e,"size"),variant:P(e,"variant"),rounded:P(e,"rounded"),elevation:P(e,"elevation")}});const f=V(()=>D.value.map((t,n)=>{const o=g=>E(g,n);if(typeof t=="string")return{isActive:!1,key:`ellipsis-${n}`,page:t,props:{ref:o,ellipsis:!0,icon:!0,disabled:!0}};{const g=t===s.value;return{isActive:g,key:t,page:z(t),props:{ref:o,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:g?e.activeColor:e.color,ariaCurrent:g,ariaLabel:m(g?e.currentPageAriaLabel:e.pageAriaLabel,t),onClick:p=>_(p,t)}}}})),l=V(()=>{const t=!!e.disabled||s.value<=r.value,n=!!e.disabled||s.value>=r.value+c.value-1;return{first:e.showFirstLastPage?{icon:k.value?e.lastIcon:e.firstIcon,onClick:o=>_(o,r.value,"first"),disabled:t,ariaLabel:m(e.firstAriaLabel),ariaDisabled:t}:void 0,prev:{icon:k.value?e.nextIcon:e.prevIcon,onClick:o=>_(o,s.value-1,"prev"),disabled:t,ariaLabel:m(e.previousAriaLabel),ariaDisabled:t},next:{icon:k.value?e.prevIcon:e.nextIcon,onClick:o=>_(o,s.value+1,"next"),disabled:n,ariaLabel:m(e.nextAriaLabel),ariaDisabled:n},last:e.showFirstLastPage?{icon:k.value?e.firstIcon:e.lastIcon,onClick:o=>_(o,r.value+c.value-1,"last"),disabled:n,ariaLabel:m(e.lastAriaLabel),ariaDisabled:n}:void 0}});function d(){var n;const t=s.value-r.value;(n=q.value[t])==null||n.$el.focus()}function K(t){t.key===G.left&&!e.disabled&&s.value>+e.start?(s.value=s.value-1,H(d)):t.key===G.right&&!e.disabled&&s.value<r.value+c.value-1&&(s.value=s.value+1,H(d))}return xe(()=>a(e.tag,{ref:w,class:["v-pagination",R.value,e.class],style:e.style,role:"navigation","aria-label":m(e.ariaLabel),onKeydown:K,"data-test":"v-pagination-root"},{default:()=>[a("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&a("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[u.first?u.first(l.value.first):a(x,B({_as:"VPaginationBtn"},l.value.first),null)]),a("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[u.prev?u.prev(l.value.prev):a(x,B({_as:"VPaginationBtn"},l.value.prev),null)]),f.value.map((t,n)=>a("li",{key:t.key,class:["v-pagination__item",{"v-pagination__item--is-active":t.isActive}],"data-test":"v-pagination-item"},[u.item?u.item(t):a(x,B({_as:"VPaginationBtn"},t.props),{default:()=>[t.page]})])),a("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[u.next?u.next(l.value.next):a(x,B({_as:"VPaginationBtn"},l.value.next),null)]),e.showFirstLastPage&&a("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[u.last?u.last(l.value.last):a(x,B({_as:"VPaginationBtn"},l.value.last),null)])])]})),{}}});const Qe=e=>(Se("data-v-8d1e1d1e"),e=e(),ke(),e),Ze=Qe(()=>X("br",null,null,-1)),Je={__name:"PostCard",props:{_id:{type:String,default:()=>""},account:{type:String,default:()=>""},date:{type:Date,default:()=>""},title:{type:String,default:()=>""},content:{type:String,default:()=>""}},setup(e){return(S,u)=>{const y=Pe("router-link");return A(),O(y,{to:"/discussion/"+e._id,class:"text-decoration-none"},{default:i(()=>[a(ee,{class:"discussion-card"},{default:i(()=>[a(ae,{class:"text-primary"},{default:i(()=>[h(M(e.title),1)]),_:1}),a(W,null,{default:i(()=>[h(M(e.content),1)]),_:1}),a(W,null,{default:i(()=>[h(" Poster: "),X("b",null,M(e.account),1),Ze,h(" "+M(new Date(e.date).toLocaleString("en-US")),1)]),_:1})]),_:1})]),_:1},8,["to"])}}},Ye=he(Je,[["__scopeId","data-v-8d1e1d1e"]]),ea=X("h1",{class:"text-center"},"Discussion Board",-1),oa={__name:"DiscussionBoard",setup(e){const S=Le(),{isLogin:u}=Ce(S),y=we(),s=L([]);(async()=>{try{const{data:f}=await De.get("/discussion"),l=f.result.sort((d,K)=>new Date(K.date)-new Date(d.date));s.value.push(...l)}catch(f){y({text:f.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const m=L(!1),z=L(""),k=()=>{z.value="",m.value=!0},R=()=>{m.value=!1,c()},U=qe({title:J().required("Title is required"),content:J().required("Content is required")}),{handleSubmit:C,isSubmitting:w,resetForm:c}=Ee({validationSchema:U,initialValues:{title:"",content:""}}),r=Y("title"),v=Y("content"),F=C(async f=>{try{const l=new FormData;l.append("title",f.title),l.append("content",f.content),l.append("date",new Date().toISOString()),await Ie.post("/discussion",l),y({text:"Submitted successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),R()}catch(l){y({text:l.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),D=L(5),_=L(1),q=V(()=>{const f=(_.value-1)*D.value,l=f+D.value;return s.value.slice(f,l)}),E=V(()=>Math.ceil(s.value.length/D.value));return(f,l)=>(A(),Q(Z,null,[a(Oe,null,{default:i(()=>[a(We,{class:"max-width-1080"},{default:i(()=>[a(T,{cols:"12"},{default:i(()=>[ea]),_:1}),a(Ae),b(u)?(A(),O(T,{key:0,cols:"12",class:"d-flex justify-end"},{default:i(()=>[a(x,{color:"secondary",onClick:k},{default:i(()=>[h("Add New Post")]),_:1})]),_:1})):Re("",!0),a(T,{cols:"12"},{default:i(()=>[a(He,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=d=>_.value=d),length:E.value},null,8,["modelValue","length"])]),_:1}),(A(!0),Q(Z,null,Fe(q.value,d=>(A(),O(T,{cols:"12",key:d._id},{default:i(()=>[a(Ye,ze(Ue(d)),null,16)]),_:2},1024))),128))]),_:1})]),_:1}),a(Be,{persistent:"",modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=d=>m.value=d),width:"500px"},{default:i(()=>[a(Ke,{disabled:b(w),onSubmit:$e(b(F),["prevent"])},{default:i(()=>[a(ee,null,{default:i(()=>[a(ae,null,{default:i(()=>[h("Add New Post")]),_:1}),a(W,null,{default:i(()=>[a(Ne,{label:"Title",modelValue:b(r).value.value,"onUpdate:modelValue":l[1]||(l[1]=d=>b(r).value.value=d),"error-messages":b(r).errorMessage.value},null,8,["modelValue","error-messages"]),a(Xe,{label:"Content",modelValue:b(v).value.value,"onUpdate:modelValue":l[2]||(l[2]=d=>b(v).value.value=d),"error-messages":b(v).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),a(Me,null,{default:i(()=>[a(Te),a(x,{color:"red",onClick:R,loading:b(w)},{default:i(()=>[h("Cancel")]),_:1},8,["loading"]),a(x,{color:"primary",type:"submit",loading:b(w)},{default:i(()=>[h("Submit")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64))}};export{oa as default};
