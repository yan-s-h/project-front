import{ai as P,Q as i,S as _,T as o,c as s,am as U,ah as u,a7 as c,a1 as n,ak as M,ao as D,ap as B,M as q,N as A,ay as j,L as z,x as V,ar as w,a9 as E,P as K,R as x,W as C,X as r,as as O,K as Q,U as k,Z as W,a5 as X,a6 as Z}from"./index-312db973.js";import{c as G,a as H,u as J,d as Y,V as tt}from"./index.esm-825a6f64.js";import{F as et}from"./footeR-9e5280b0.js";import{_ as at}from"./BackButton-31d9913a.js";import{V as st}from"./VContainer-92104929.js";import{V as ot,a as m}from"./VRow-2bb95814.js";import{V as nt}from"./VTextarea-1f157062.js";import"./_commonjsHelpers-725317a4.js";const F=e=>(D("data-v-c831684c"),e=e(),B(),e),lt=F(()=>u("br",null,null,-1)),rt=F(()=>u("br",null,null,-1)),ct={__name:"CommentCard",props:{_id:{type:String,default:()=>""},account:{type:String,default:()=>""},date:{type:Date,default:()=>""},content:{type:String,default:()=>""}},setup(e){return(h,p)=>(i(),_(M,{variant:"text",class:"bgColor"},{default:o(()=>[s(U,null,{default:o(()=>[u("b",null,c(e.account),1),lt,n(" "+c(e.content),1),rt,n(" "+c(new Date(e.date).toLocaleString("en-US")),1)]),_:1})]),_:1}))}},ut=P(ct,[["__scopeId","data-v-c831684c"]]);const it=e=>(D("data-v-186bef0d"),e=e(),B(),e),dt=it(()=>u("br",null,null,-1)),mt={class:"d-flex justify-end"},_t={class:"login-message"},pt={__name:"DiscussionPost",setup(e){const h=q(),{isLogin:p}=A(h),f=j(),v=z(),a=V({_id:"",title:"",content:"",account:"",date:"",status:""}),b=V([]);(async()=>{try{const{data:t}=await w.get("/discussion/"+f.params.id);a.value._id=t.result._id,a.value.title=t.result.title,a.value.content=t.result.content,a.value.account=t.result.account,a.value.status=t.result.status,a.value.date=t.result.date,document.title="Taealam | "+a.value.title,b.value.push(...t.commentResult)}catch(t){v({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const I=G({content:H().required("Content is required")}),{handleSubmit:R,isSubmitting:y,resetForm:$}=J({validationSchema:I,initialValues:{content:""}}),g=Y("content"),T=R(async t=>{try{const l=new FormData;l.append("content",t.content),l.append("date",new Date().toISOString()),await E.post("/discussion/"+f.params.id,l),v({text:"Submitted successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),$();const{data:S}=await w.get("/discussion/"+f.params.id);b.value=[...S.commentResult]}catch(l){v({text:l.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),L=t=>t*50;return(t,l)=>{const S=K("router-link");return i(),x(C,null,[s(st,{class:"h-100"},{default:o(()=>[s(ot,{class:"max-width-1080"},{default:o(()=>[s(m,{cols:"12"},{default:o(()=>[n(" Poster: "+c(a.value.account),1),dt,n(" "+c(new Date(a.value.date).toLocaleString("en-US"))+" ",1),u("h1",null,c(a.value.title),1),n(" "+c(a.value.content),1)]),_:1}),r(p)?(i(),_(m,{key:0,cols:"12"},{default:o(()=>[s(tt,{disabled:r(y),onSubmit:O(r(T),["prevent"])},{default:o(()=>[s(nt,{label:"Add a Comment",modelValue:r(g).value.value,"onUpdate:modelValue":l[0]||(l[0]=d=>r(g).value.value=d),"error-messages":r(g).errorMessage.value,variant:"outlined",clearable:"",rows:"2"},null,8,["modelValue","error-messages"]),u("div",mt,[s(Q,{color:"primary",type:"submit",loading:r(y)},{default:o(()=>[n("Submit")]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})):k("",!0),r(p)?k("",!0):(i(),_(m,{key:1,cols:"12",class:"text-center"},{default:o(()=>[u("p",_t,[n("Please "),s(S,{to:"/login",class:"login-link"},{default:o(()=>[n("log in")]),_:1}),n(" to leave a comment.")])]),_:1})),(i(!0),x(C,null,W(b.value,(d,N)=>(i(),_(m,{cols:"12",key:d._id,"data-aos":"fade-down","data-aos-duration":"600","data-aos-delay":L(N),"data-aos-offset":"-100"},{default:o(()=>[s(ut,X(Z(d)),null,16)]),_:2},1032,["data-aos-delay"]))),128))]),_:1}),s(at)]),_:1}),s(et)],64)}}},wt=P(pt,[["__scopeId","data-v-186bef0d"]]);export{wt as default};
