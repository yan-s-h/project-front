import{p as T,m as $,a as ee,g as M,u as Y,c as t,b as oe,d as ne,e as se,f as re,h as ue,t as j,i as ie,j as ce,k as de,l as ve,n as Ae,s as D,o as B,q as ge,V as U,r as X,v as R,w as me,x as q,y as fe,z as H,A as Be,B as pe,C as be,D as he,E as ye,F as ke,G as Ve,H as W,I as we,J as xe,K as x,_ as Ce,L as De,M as Ge,N as Ie,O as Ne,P as Se,Q as u,R as I,S as b,T as l,U as m,W as Q,X as i,Y as _,Z as J,$ as h,a0 as L,a1 as P,a2 as f,a3 as F,a4 as Z,a5 as Qe,a6 as Le,a7 as Pe,a8 as O,a9 as z,aa as Te,ab as Me}from"./index-b7ca308c.js";import{V as Ye,a as Ee}from"./VNavigationDrawer-25f78332.js";import{V as Re}from"./VContainer-7ae32d44.js";const te=T({text:String,...$(),...ee()},"VToolbarTitle"),ae=M()({name:"VToolbarTitle",props:te(),setup(e,p){let{slots:a}=p;return Y(()=>{const s=!!(a.default||a.text||e.text);return t(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var r;return[s&&t("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(r=a.default)==null?void 0:r.call(a)])]}})}),{}}}),He=[null,"prominent","default","comfortable","compact"],le=T({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>He.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...oe(),...$(),...ne(),...se(),...ee({tag:"header"}),...re()},"VToolbar"),K=M()({name:"VToolbar",props:le(),setup(e,p){var d;let{slots:a}=p;const{backgroundColorClasses:s,backgroundColorStyles:r}=ue(j(e,"color")),{borderClasses:o}=ie(e),{elevationClasses:V}=ce(e),{roundedClasses:A}=de(e),{themeClasses:y}=ve(e),{rtlClasses:w}=Ae(),v=D(!!(e.extended||(d=a.extension)!=null&&d.call(a))),k=B(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=B(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),Y(()=>{var c;const n=!!(e.title||a.title),G=!!(a.image||e.image),E=(c=a.extension)==null?void 0:c.call(a);return v.value=!!(e.extended||E),t(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,o.value,V.value,A.value,y.value,w.value,e.class],style:[r.value,e.style]},{default:()=>[G&&t("div",{key:"image",class:"v-toolbar__image"},[a.image?t(X,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(U,{key:"image-img",cover:!0,src:e.image},null)]),t(X,{defaults:{VTabs:{height:R(k.value)}}},{default:()=>{var C,N,S;return[t("div",{class:"v-toolbar__content",style:{height:R(k.value)}},[a.prepend&&t("div",{class:"v-toolbar__prepend"},[(C=a.prepend)==null?void 0:C.call(a)]),n&&t(ae,{key:"title",text:e.title},{text:a.title}),(N=a.default)==null?void 0:N.call(a),a.append&&t("div",{class:"v-toolbar__append"},[(S=a.append)==null?void 0:S.call(a)])])]}}),t(X,{defaults:{VTabs:{height:R(g.value)}}},{default:()=>[t(me,null,{default:()=>[v.value&&t("div",{class:"v-toolbar__extension",style:{height:R(g.value)}},[E])]})]})]})}),{contentHeight:k,extensionHeight:g}}}),Ue=T({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Xe(e){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=p;let s=0;const r=q(null),o=D(0),V=D(0),A=D(0),y=D(!1),w=D(!1),v=B(()=>Number(e.scrollThreshold)),k=B(()=>fe((v.value-o.value)/v.value||0)),g=()=>{const d=r.value;!d||a&&!a.value||(s=o.value,o.value="window"in d?d.pageYOffset:d.scrollTop,w.value=o.value<s,A.value=Math.abs(o.value-v.value))};return H(w,()=>{V.value=V.value||o.value}),H(y,()=>{V.value=0}),Be(()=>{H(()=>e.scrollTarget,d=>{var G;const n=d?document.querySelector(d):window;n&&n!==r.value&&((G=r.value)==null||G.removeEventListener("scroll",g),r.value=n,r.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),pe(()=>{var d;(d=r.value)==null||d.removeEventListener("scroll",g)}),a&&H(a,g,{immediate:!0}),{scrollThreshold:v,currentScroll:o,currentThreshold:A,isScrollActive:y,scrollRatio:k,isScrollingUp:w,savedScroll:V}}const _e=T({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...le(),...be(),...Ue(),height:{type:[Number,String],default:64}},"VAppBar"),Fe=M()({name:"VAppBar",props:_e(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:a}=p;const s=q(),r=he(e,"modelValue"),o=B(()=>{var C;const c=new Set(((C=e.scrollBehavior)==null?void 0:C.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),V=B(()=>{const c=o.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!r.value}),{currentScroll:A,scrollThreshold:y,isScrollingUp:w,scrollRatio:v}=Xe(e,{canScroll:V}),k=B(()=>e.collapse||o.value.collapse&&(o.value.inverted?v.value>0:v.value===0)),g=B(()=>e.flat||o.value.elevate&&(o.value.inverted?A.value>0:A.value===0)),d=B(()=>o.value.fadeImage?o.value.inverted?1-v.value:v.value:void 0),n=B(()=>{var N,S;if(o.value.hide&&o.value.inverted)return 0;const c=((N=s.value)==null?void 0:N.contentHeight)??0,C=((S=s.value)==null?void 0:S.extensionHeight)??0;return c+C});ye(B(()=>!!e.scrollBehavior),()=>{we(()=>{o.value.hide?o.value.inverted?r.value=A.value>y.value:r.value=w.value||A.value<y.value:r.value=!0})});const{ssrBootStyles:G}=ke(),{layoutItemStyles:E}=Ve({id:e.name,order:B(()=>parseInt(e.order,10)),position:j(e,"location"),layoutSize:n,elementSize:D(void 0),active:r,absolute:j(e,"absolute")});return Y(()=>{const[c]=K.filterProps(e);return t(K,W({ref:s,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...E.value,"--v-toolbar-image-opacity":d.value,height:void 0,...G.value},e.style]},c,{collapse:k.value,flat:g.value}),a)}),{}}}),Oe=T({...xe({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),je=M()({name:"VAppBarNavIcon",props:Oe(),setup(e,p){let{slots:a}=p;return Y(()=>t(x,W(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),qe=M()({name:"VAppBarTitle",props:te(),setup(e,p){let{slots:a}=p;return Y(()=>t(ae,W(e,{class:"v-app-bar-title"}),a)),{}}}),We="data:image/png;base64,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";const Je={key:3,class:"text-center"},Ze={__name:"FrontLayout",setup(e){const p=De(),a=Ge(),{isLogin:s,isAdmin:r,avatar:o}=Ie(a),{mobile:V}=Ne(),A=B(()=>V.value),y=q(!1),w=B(()=>[{to:"/courses",text:"Courses",icon:"",show:s.value},{to:"/culture",text:"Culture Corner",icon:"",show:!0},{to:"/discussion",text:"Discussion Board",icon:"",show:!0},{to:"/aboutus",text:"About Us",icon:"",show:!0}]),v=async()=>{try{await Te.delete("/users/logout"),a.logout(),Me.push("/")}catch(k){p({text:k.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(k,g)=>{const d=Se("router-view");return u(),I(Q,null,[A.value?(u(),b(Ye,{key:0,modelValue:y.value,"onUpdate:modelValue":g[0]||(g[0]=n=>y.value=n),location:"left",temporary:""},{default:l(()=>[t(F,{nav:""},{default:l(()=>[t(x,{variant:"text",class:"v-btn__content",to:i(s)?"/profile":"/login"},{default:l(()=>[t(_,null,{default:l(()=>[t(U,{src:i(s)?i(a).image===void 0?i(o):i(a).image:i(o),cover:""},null,8,["src"])]),_:1})]),_:1},8,["to"]),(u(!0),I(Q,null,J(w.value,n=>(u(),I(Q,{key:n.to},[n.show?(u(),b(h,{key:0,to:n.to},{prepend:l(()=>[t(L,{icon:n.icon},null,8,["icon"])]),default:l(()=>[t(P,null,{default:l(()=>[f(O(n.text),1)]),_:2},1024)]),_:2},1032,["to"])):m("",!0)],64))),128)),i(s)?(u(),b(h,{key:0,to:"/admin"},{prepend:l(()=>[t(L,{icon:"mdi-cog"})]),default:l(()=>[t(P,null,{default:l(()=>[f("Admin")]),_:1})]),_:1})):m("",!0),i(s)?(u(),b(h,{key:1,onClick:v},{prepend:l(()=>[t(L,{icon:"mdi-logout"})]),default:l(()=>[t(P,null,{default:l(()=>[f("Sign Out")]),_:1})]),_:1})):m("",!0),i(s)?m("",!0):(u(),b(h,{key:2,to:"/login"},{prepend:l(()=>[t(L,{icon:"mdi-login"})]),default:l(()=>[t(P,null,{default:l(()=>[f("Log In")]),_:1})]),_:1})),i(s)?m("",!0):(u(),b(h,{key:3,to:"/register"},{prepend:l(()=>[t(L,{icon:"mdi-account-plus"})]),default:l(()=>[t(P,null,{default:l(()=>[f("Sign up")]),_:1})]),_:1}))]),_:1})]),_:1},8,["modelValue"])):m("",!0),t(Fe,{color:"primary"},{default:l(()=>[t(Re,{class:"d-flex align-center"},{default:l(()=>[t(x,{to:"/","selected-class":"",active:!1},{default:l(()=>[t(_,{class:"avatar me-2 pb-1"},{default:l(()=>[t(U,{src:We,class:"logo"})]),_:1}),t(qe,null,{default:l(()=>[f("Taealam")]),_:1})]),_:1}),t(Z),A.value?(u(),b(je,{key:0,onClick:g[1]||(g[1]=n=>y.value=!0)})):m("",!0),A.value?m("",!0):(u(!0),I(Q,{key:1},J(w.value,n=>(u(),I(Q,{key:n.to},[n.show?(u(),b(x,{key:0,variant:"text","prepend-icon":n.icon,to:n.to},{default:l(()=>[f(O(n.text),1)]),_:2},1032,["prepend-icon","to"])):m("",!0)],64))),128)),A.value?m("",!0):(u(),b(Z,{key:2})),A.value?m("",!0):(u(),I("div",Je,[t(Qe,{"open-on-hover":""},{activator:l(({props:n})=>[t(x,Le(Pe(n)),{default:l(()=>[t(_,null,{default:l(()=>[t(U,{src:i(s)?i(a).image===void 0?i(o):i(a).image:i(o),cover:""},null,8,["src"])]),_:1})]),_:2},1040)]),default:l(()=>[i(s)?(u(),b(F,{key:0},{default:l(()=>[t(h,{class:"text-center"},{default:l(()=>[f(" Welcome "+O(i(a).account),1)]),_:1}),t(z),t(h,null,{default:l(()=>[t(x,{variant:"text","prepend-icon":"mdi-account",to:"/profile"},{default:l(()=>[f("Profile")]),_:1})]),_:1}),t(z),i(r)?(u(),b(h,{key:0},{default:l(()=>[t(x,{variant:"text","prepend-icon":"mdi-cog",to:"/admin"},{default:l(()=>[f("Admin")]),_:1})]),_:1})):m("",!0),t(h,null,{default:l(()=>[t(x,{variant:"text","prepend-icon":"mdi-logout",onClick:v},{default:l(()=>[f("Sign Out")]),_:1})]),_:1})]),_:1})):m("",!0),i(s)?m("",!0):(u(),b(F,{key:1},{default:l(()=>[t(h,null,{default:l(()=>[f("Hi Visitor")]),_:1}),t(h,null,{default:l(()=>[t(x,{variant:"text","prepend-icon":"mdi-login",to:"/login"},{default:l(()=>[f("Log In")]),_:1})]),_:1}),t(h,null,{default:l(()=>[t(x,{variant:"text","prepend-icon":"mdi-account-plus",to:"/register"},{default:l(()=>[f("Sign up")]),_:1})]),_:1})]),_:1}))]),_:1})]))]),_:1})]),_:1}),t(Ee,null,{default:l(()=>[(u(),b(d,{key:k.$route.path}))]),_:1})],64)}}},et=Ce(Ze,[["__scopeId","data-v-5c812faa"]]);export{et as default};
