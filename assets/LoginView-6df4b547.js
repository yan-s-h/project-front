import{_ as S,L as k,ac as y,M as P,ad as B,P as C,Q as L,S as I,T as s,c as a,a9 as q,X as o,ae as A,af as m,ab as h,K as F,a2 as u,ag as M,ah as N}from"./index-00ecb5f1.js";import{c as T,a as p,u as U,d as _,V as R}from"./index.esm-34b86d13.js";import{V as $}from"./VContainer-8e3682be.js";import{V as d,a as D}from"./VRow-36276361.js";import"./_commonjsHelpers-39b5b250.js";const K=t=>(M("data-v-40942175"),t=t(),N(),t),Q=K(()=>h("h1",null,"Login",-1)),X={class:"text-center"},j={__name:"LoginView",setup(t){const i=k(),g=y(),f=P(),V=T({account:p().required("Account is required").min(4,"Account should have at least 4 characters").max(20,"Account should not exceed 20 characters"),password:p().required("Password is required").min(4,"Password should have at least 4 characters").max(20,"Password should not exceed 20 characters")}),{handleSubmit:w,isSubmitting:v}=U({validationSchema:V}),r=_("account"),l=_("password"),x=w(async c=>{try{const{data:e}=await B.post("/users/login",{account:c.account,password:c.password});f.login({token:e.result.token,account:e.result.account,email:e.result.email,profile:e.result.profile,role:e.result.role}),i({text:"Login successful",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),g.push("/")}catch(e){i({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(c,e)=>{const b=C("router-link");return L(),I($,null,{default:s(()=>[a(D,{class:"max-width-512"},{default:s(()=>[a(d,{cols:"12"},{default:s(()=>[Q]),_:1}),a(q),a(d,{cols:"12"},{default:s(()=>[a(R,{disabled:o(v),onSubmit:A(o(x),["prevent"])},{default:s(()=>[a(m,{modelValue:o(r).value.value,"onUpdate:modelValue":e[0]||(e[0]=n=>o(r).value.value=n),"error-messages":o(r).errorMessage.value,label:"Account",counter:"",maxlength:"20"},null,8,["modelValue","error-messages"]),a(m,{modelValue:o(l).value.value,"onUpdate:modelValue":e[1]||(e[1]=n=>o(l).value.value=n),"error-messages":o(l).errorMessage.value,label:"Password",counter:"",maxlength:"20",type:"password"},null,8,["modelValue","error-messages"]),h("div",X,[a(F,{type:"submit",color:"primary"},{default:s(()=>[u("Log In")]),_:1})])]),_:1},8,["disabled","onSubmit"])]),_:1}),a(d,{cols:"12",class:"text-center"},{default:s(()=>[u(" Need a Taealam account? "),a(b,{to:"/register",class:"register-link"},{default:s(()=>[u(" Sign Up")]),_:1})]),_:1})]),_:1})]),_:1})}}},O=S(j,[["__scopeId","data-v-40942175"]]);export{O as default};