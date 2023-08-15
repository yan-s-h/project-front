import{L as z,x as r,aa as B,P as J,Q as k,R as A,c as l,T as o,ay as X,W as F,a9 as ee,K as C,a2 as h,af as w,aG as ae,V as le,S as I,U as te,Y as t,ae as oe,an as se,al as re,a8 as ne,am as ue,Z as ie,ak as de,a4 as ce,ab as pe,a0 as me}from"./index-03b18e03.js";import{c as ve,a as _,e as ge,f as be,u as Ve,g as fe,d as S,V as ye}from"./index.esm-10a26dfd.js";import{V as ke}from"./VContainer-595c4185.js";import{a as Ce,V as $}from"./VRow-2888a60f.js";import{V as he}from"./VTextarea-30cf6036.js";import{V as we}from"./VCheckbox-863120b4.js";import"./_commonjsHelpers-39b5b250.js";const _e=pe("h1",{class:"text-center"},"Courses",-1),De={__name:"CoursesView",setup(Se){const p=z(),x=r(5),m=r([{key:"title",order:"asc"}]),v=r(1),P=r([]),M=[{title:"Lesson No.",align:"center",sortable:!0,key:"lessonNo"},{title:"Topic",align:"center",sortable:!0,key:"topic"},{title:"Description",align:"center",sortable:!0,key:"description"},{title:"Content",align:"center",sortable:!0,key:"content"},{title:"Publish",align:"center",sortable:!0,key:"publish"},{title:"Edit",align:"center",sortable:!1,key:"edit"}],N=r(!1),T=r(0),g=r(""),q=()=>{v.value=1,n()},n=async()=>{var s,a;N.value=!0;try{const{data:u}=await B.get("/courses/all",{params:{page:v.value,itemsPerPage:x.value,sortBy:((s=m.value[0])==null?void 0:s.key)||"title",sortOrder:((a=m.value[0])==null?void 0:a.order)||"asc",search:g.value}});P.value.splice(0,P.value.length,...u.result.data),T.value=u.result.count}catch(u){p({text:u.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}N.value=!1};n();const E=s=>{d.value=s._id,b.value.value=s.lessonNo,f.value.value=s.topic,V.value.value=s.description,Z(s.content),y.value.value=s.publish,i.value=!0},i=r(!1),d=r(""),K=()=>{d.value="",i.value=!0},D=()=>{i.value=!1,G()},O=ve({lessonNo:_().required("Lesson No. is required"),topic:_().required("Topic is required"),description:_().required("Description is required"),content:ge().of(_().required("Content is required")),publish:be()}),{handleSubmit:R,isSubmitting:U,resetForm:G,errors:H}=Ve({validationSchema:O,initialValues:{lessonNo:"",topic:"",description:"",content:[""],publish:!1},validateOnMount:!1}),{remove:Q,push:W,fields:Y,replace:Z}=fe("content"),b=S("lessonNo"),V=S("description"),f=S("topic"),y=S("publish"),j=R(async s=>{try{d.value.length>0?(await B.patch("/courses/"+d.value,s),p({text:"Updated Successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})):(await B.post("/courses",s),p({text:"Added Successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})),D(),n()}catch(a){p({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(s,a)=>{const u=J("v-data-table-server");return k(),A(F,null,[l(ke,null,{default:o(()=>[l(Ce,null,{default:o(()=>[l($,{cols:"12"},{default:o(()=>[_e]),_:1}),l(ee),l($,{cols:"12"},{default:o(()=>[l(C,{color:"green",onClick:K},{default:o(()=>[h("Add Course")]),_:1}),l(u,{"items-per-page":x.value,"onUpdate:itemsPerPage":[a[1]||(a[1]=e=>x.value=e),n],"sort-by":m.value,"onUpdate:sortBy":[a[2]||(a[2]=e=>m.value=e),n],page:v.value,"onUpdate:page":[a[3]||(a[3]=e=>v.value=e),n],items:P.value,headers:M,loading:N.value,"items-length":T.value,search:g.value,hover:""},{top:o(()=>[l(w,{label:"Search","append-icon":"mdi-magnify","onClick:append":q,onKeydown:ae(q,["enter"]),modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e)},null,8,["onKeydown","modelValue"])]),"item.image":o(({item:e})=>[l(le,{src:e.raw.image,height:"50px"},null,8,["src"])]),"item.publish":o(({item:e})=>[e.raw.publish?(k(),I(me,{key:0,icon:"mdi-check"})):te("",!0)]),"item.edit":o(({item:e})=>[l(C,{icon:"mdi-pencil",onClick:c=>E(e.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),l(X,{persistent:"",modelValue:i.value,"onUpdate:modelValue":a[8]||(a[8]=e=>i.value=e),width:"500px"},{default:o(()=>[l(ye,{disabled:t(U),onSubmit:oe(t(j),["prevent"])},{default:o(()=>[l(se,{class:"dialog-card"},{default:o(()=>[l(re,null,{default:o(()=>[h(ne(d.value.length>0?"Edit Course":"Add Course"),1)]),_:1}),l(ue,null,{default:o(()=>[l(w,{label:"Lesson No.",modelValue:t(b).value.value,"onUpdate:modelValue":a[4]||(a[4]=e=>t(b).value.value=e),"error-messages":t(b).errorMessage.value},null,8,["modelValue","error-messages"]),l(w,{label:"Topic",modelValue:t(f).value.value,"onUpdate:modelValue":a[5]||(a[5]=e=>t(f).value.value=e),"error-messages":t(f).errorMessage.value},null,8,["modelValue","error-messages"]),l(he,{label:"Description",modelValue:t(V).value.value,"onUpdate:modelValue":a[6]||(a[6]=e=>t(V).value.value=e),"error-messages":t(V).errorMessage.value},null,8,["modelValue","error-messages"]),(k(!0),A(F,null,ie(t(Y),(e,c)=>(k(),I(w,{key:e.key,modelValue:e.value,"onUpdate:modelValue":L=>e.value=L,"error-messages":t(H)[`content[${c}]`],"onClick:append":L=>c===0?t(W)(""):t(Q)(c),"append-icon":c===0?"mdi-plus":"mdi-delete"},null,8,["modelValue","onUpdate:modelValue","error-messages","onClick:append","append-icon"]))),128)),l(we,{label:"Publish",modelValue:t(y).value.value,"onUpdate:modelValue":a[7]||(a[7]=e=>t(y).value.value=e),"error-messages":t(y).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),l(de,null,{default:o(()=>[l(ce),l(C,{color:"red",onClick:D,loading:t(U)},{default:o(()=>[h("Cancel")]),_:1},8,["loading"]),l(C,{color:"green",type:"submit",loading:t(U)},{default:o(()=>[h("Submit")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{De as default};