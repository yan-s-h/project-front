import{o as y,Q as c,S as d,T as t,c as s,al as C,ab as f,ak as b,K as g,an as v,_ as k,L as w,M as x,ai as L,x as i,ad as B,aa as S,a8 as p,a9 as N,R,Z as T,W as A}from"./index-03b18e03.js";import{V as M}from"./VContainer-595c4185.js";import{V as m,a as D}from"./VRow-2888a60f.js";const E=["innerHTML"],H={__name:"CourseContent",props:{content:{type:String,default:()=>""}},setup(_){const a=_,o=new Audio;o.src=new URL("/tts/"+a.content.split("<br>")[0],"https://bdhsfbjdhfehguhihtryhbd.onrender.com");const n=async()=>{o.play()},r=y(()=>a.content.replace(/\n/g,"<br>"));return(l,u)=>(c(),d(v,null,{default:t(()=>[s(C,null,{default:t(()=>[f("div",{innerHTML:r.value},null,8,E)]),_:1}),s(b,null,{default:t(()=>[s(g,{icon:"mdi-volume-medium",color:"primary",onClick:n})]),_:1})]),_:1}))}};const P={class:"text-center"},U={__name:"LessonView",setup(_){const a=w(),o=x(),n=L(),r=i([]),l=i(""),u=i("");return(async()=>{try{const{data:e}=await B.get("/courses/"+n.params.id);l.value=e.result.lessonNo,u.value=e.result.topic,r.value=[...e.result.content]}catch(e){console.log(e),a({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(async()=>{try{const{data:e}=await S.patch("/users/currentLesson",{_id:n.params.id});o.profile=e.result}catch(e){console.log(e),a({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(e,$)=>(c(),d(M,null,{default:t(()=>[s(D,{class:"max-width-1080"},{default:t(()=>[s(m,{cols:"12"},{default:t(()=>[f("h1",P,"Lesson "+p(l.value)+": "+p(u.value),1)]),_:1}),s(N),(c(!0),R(A,null,T(r.value,(h,V)=>(c(),d(m,{cols:"12",sm:"4",md:"2",key:V},{default:t(()=>[s(H,{content:h},null,8,["content"])]),_:2},1024))),128))]),_:1})]),_:1}))}},K=k(U,[["__scopeId","data-v-01f27f5e"]]);export{K as default};
