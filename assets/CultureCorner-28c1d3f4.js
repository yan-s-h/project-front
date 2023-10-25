import{L as O,x as r,aa as S,P as I,Q as D,R as H,c as t,T as l,aw as Q,W,a9 as X,K as h,a2 as k,at as T,aB as G,V as J,S as Y,U as Z,X as o,as as ee,ak as ae,al as te,a8 as le,am as oe,an as se,a4 as re,ai as ne,a0 as ue}from"./index-f21d923d.js";import{c as ie,a as M,g as de,u as me,d as P,V as ce}from"./index.esm-f6564d1c.js";import{V as pe}from"./VContainer-dc6aba7d.js";import{V as ge,a as L}from"./VRow-d1aed83c.js";import{V as ve}from"./VTextarea-ebfb9ba3.js";import{V as be}from"./VCheckbox-0a0e8956.js";import"./_commonjsHelpers-725317a4.js";const fe=ne("h1",{class:"text-center"},"Culture Corner",-1),_e={__name:"CultureCorner",setup(Ve){const c=O(),y=r(5),p=r([{key:"title",order:"asc"}]),g=r(1),C=r([]),q=[{title:"Image",align:"center",sortable:!1,key:"image"},{title:"Title",align:"center",sortable:!0,key:"title"},{title:"Content",align:"center",sortable:!0,key:"content"},{title:"Date",align:"center",sortable:!0,key:"date"},{title:"Likes",align:"center",sortable:!0,key:"likes.length"},{title:"Publish",align:"center",sortable:!0,key:"publish"},{title:"Edit",align:"center",sortable:!1,key:"edit"}],w=r(!1),_=r(0),v=r(""),B=()=>{g.value=1,n()},n=async()=>{var s,e;w.value=!0;try{const{data:i}=await S.get("/culture/all",{params:{page:g.value,itemsPerPage:y.value,sortBy:((s=p.value[0])==null?void 0:s.key)||"title",sortOrder:((e=p.value[0])==null?void 0:e.order)||"asc",search:v.value}});C.value.splice(0,C.value.length,...i.result.data),_.value=i.result.count}catch(i){c({text:i.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}w.value=!1};n();const E=s=>{u.value=s._id,b.value.value=s.title,f.value.value=s.content,V.value.value=s.publish,d.value=!0},d=r(!1),u=r(""),K=()=>{u.value="",d.value=!0},U=()=>{d.value=!1,R(),F.value.deleteFileRecord()},N=ie({title:M().required("Title is required"),content:M().required("Content is required"),publish:de()}),{handleSubmit:$,isSubmitting:x,resetForm:R}=me({validationSchema:N,initialValues:{title:"",content:"",publish:!1}}),b=P("title"),f=P("content"),V=P("publish"),m=r([]),A=r([]),F=r(null),j=$(async s=>{if(!(u.value.length===0&&m.value.length===0))try{const e=new FormData;e.append("title",s.title),e.append("content",s.content),e.append("date",new Date().toISOString()),e.append("publish",s.publish),m.value.length>0&&e.append("image",m.value[0].file),u.value.length>0?(await S.patch("/culture/"+u.value,e),c({text:"Updated Successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})):(await S.post("/culture",e),c({text:"Added Successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})),U(),n()}catch(e){c({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(s,e)=>{const i=I("v-data-table-server"),z=I("vue-file-agent");return D(),H(W,null,[t(pe,null,{default:l(()=>[t(ge,null,{default:l(()=>[t(L,{cols:"12"},{default:l(()=>[fe]),_:1}),t(X),t(L,{cols:"12"},{default:l(()=>[t(h,{color:"green",onClick:K},{default:l(()=>[k("Add Article")]),_:1}),t(i,{"items-per-page":y.value,"onUpdate:itemsPerPage":[e[1]||(e[1]=a=>y.value=a),n],"sort-by":p.value,"onUpdate:sortBy":[e[2]||(e[2]=a=>p.value=a),n],page:g.value,"onUpdate:page":[e[3]||(e[3]=a=>g.value=a),n],items:C.value,headers:q,loading:w.value,"items-length":_.value,search:v.value,hover:""},{top:l(()=>[t(T,{label:"Search","append-icon":"mdi-magnify","onClick:append":B,onKeydown:G(B,["enter"]),modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=a=>v.value=a)},null,8,["onKeydown","modelValue"])]),"item.image":l(({item:a})=>[t(J,{src:a.raw.image,height:"50px"},null,8,["src"])]),"item.publish":l(({item:a})=>[a.raw.publish?(D(),Y(ue,{key:0,icon:"mdi-check"})):Z("",!0)]),"item.edit":l(({item:a})=>[t(h,{icon:"mdi-pencil",onClick:he=>E(a.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(Q,{persistent:"",modelValue:d.value,"onUpdate:modelValue":e[9]||(e[9]=a=>d.value=a),width:"500px"},{default:l(()=>[t(ce,{disabled:o(x),onSubmit:ee(o(j),["prevent"])},{default:l(()=>[t(ae,null,{default:l(()=>[t(te,null,{default:l(()=>[k(le(u.value.length>0?"Edit Article":"Add Article"),1)]),_:1}),t(oe,null,{default:l(()=>[t(T,{label:"Title",modelValue:o(b).value.value,"onUpdate:modelValue":e[4]||(e[4]=a=>o(b).value.value=a),"error-messages":o(b).errorMessage.value},null,8,["modelValue","error-messages"]),t(ve,{label:"Content",modelValue:o(f).value.value,"onUpdate:modelValue":e[5]||(e[5]=a=>o(f).value.value=a),"error-messages":o(f).errorMessage.value,rows:"12"},null,8,["modelValue","error-messages"]),t(be,{label:"Publish",modelValue:o(V).value.value,"onUpdate:modelValue":e[6]||(e[6]=a=>o(V).value.value=a),"error-messages":o(V).errorMessage.value},null,8,["modelValue","error-messages"]),t(z,{modelValue:m.value,"onUpdate:modelValue":e[7]||(e[7]=a=>m.value=a),"raw-model-value":A.value,"onUpdate:rawModelValue":e[8]||(e[8]=a=>A.value=a),"max-files":1,"max-size":"1MB",accept:"image/jpg,image/jpeg,image/png",multiple:!1,"error-text":{type:"Invalid file format",size:"File is too large"},deletable:"",ref_key:"fileAgent",ref:F},null,8,["modelValue","raw-model-value"])]),_:1}),t(se,null,{default:l(()=>[t(re),t(h,{color:"red",onClick:U,loading:o(x)},{default:l(()=>[k("Cancel")]),_:1},8,["loading"]),t(h,{color:"green",type:"submit",loading:o(x)},{default:l(()=>[k("Submit")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{_e as default};