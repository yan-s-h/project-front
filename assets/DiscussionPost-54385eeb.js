import{_ as C,Q as i,S as m,T as s,c as l,am as R,ab as d,a8 as r,a2 as c,an as F,ag as w,ah as x,M as T,N as $,ai as L,L as N,x as V,ad as y,aa as U,Y as n,ae as M,K as q,U as A,R as j,Z as z,W as E,a6 as K,a7 as O}from"./index-03b18e03.js";import{c as Q,a as W,u as Y,d as Z,V as G}from"./index.esm-10a26dfd.js";import{V as H}from"./VContainer-595c4185.js";import{V as b,a as J}from"./VRow-2888a60f.js";import{V as X}from"./VTextarea-30cf6036.js";import"./_commonjsHelpers-39b5b250.js";const k=e=>(w("data-v-416815f0"),e=e(),x(),e),ee=k(()=>d("br",null,null,-1)),te=k(()=>d("br",null,null,-1)),ae={__name:"CommentCard",props:{_id:{type:String,default:()=>""},account:{type:String,default:()=>""},date:{type:Date,default:()=>""},content:{type:String,default:()=>""}},setup(e){return(g,S)=>(i(),m(F,{variant:"text",class:"bgColor"},{default:s(()=>[l(R,null,{default:s(()=>[d("b",null,r(e.account),1),ee,c(" "+r(e.content),1),te,c(" "+r(new Date(e.date).toLocaleString("en-US")),1)]),_:1})]),_:1}))}},se=C(ae,[["__scopeId","data-v-416815f0"]]);const oe=e=>(w("data-v-edd8e3bf"),e=e(),x(),e),ne=oe(()=>d("br",null,null,-1)),le={class:"d-flex justify-end"},re={__name:"DiscussionPost",setup(e){const g=T(),{isLogin:S}=$(g),_=L(),p=N(),a=V({_id:"",title:"",content:"",account:"",date:"",status:""}),f=V([]);(async()=>{try{const{data:t}=await y.get("/discussion/"+_.params.id);a.value._id=t.result._id,a.value.title=t.result.title,a.value.content=t.result.content,a.value.account=t.result.account,a.value.status=t.result.status,a.value.date=t.result.date,document.title="Taealam | "+a.value.title,f.value.push(...t.commentResult)}catch(t){p({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const D=Q({content:W().required("Content is required")}),{handleSubmit:B,isSubmitting:h,resetForm:P}=Y({validationSchema:D,initialValues:{content:""}}),v=Z("content"),I=B(async t=>{try{const o=new FormData;o.append("content",t.content),o.append("date",new Date().toISOString()),await U.post("/discussion/"+_.params.id,o),p({text:"Submitted successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),P();const{data:u}=await y.get("/discussion/"+_.params.id);f.value=[...u.commentResult]}catch(o){p({text:o.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(t,o)=>(i(),m(H,null,{default:s(()=>[l(J,{class:"max-width-1080"},{default:s(()=>[l(b,{cols:"12"},{default:s(()=>[c(" Poster: "+r(a.value.account),1),ne,c(" "+r(new Date(a.value.date).toLocaleString("en-US"))+" ",1),d("h1",null,r(a.value.title),1),c(" "+r(a.value.content),1)]),_:1}),n(S)?(i(),m(b,{key:0,cols:"12"},{default:s(()=>[l(G,{disabled:n(h),onSubmit:M(n(I),["prevent"])},{default:s(()=>[l(X,{label:"Add a Comment",modelValue:n(v).value.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n(v).value.value=u),"error-messages":n(v).errorMessage.value,variant:"outlined",clearable:"",rows:"2"},null,8,["modelValue","error-messages"]),d("div",le,[l(q,{color:"primary",type:"submit",loading:n(h)},{default:s(()=>[c("Submit")]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})):A("",!0),(i(!0),j(E,null,z(f.value,u=>(i(),m(b,{cols:"12",key:u._id},{default:s(()=>[l(se,K(O(u)),null,16)]),_:2},1024))),128))]),_:1})]),_:1}))}},pe=C(re,[["__scopeId","data-v-edd8e3bf"]]);export{pe as default};
