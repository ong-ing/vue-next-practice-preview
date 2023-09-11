import{j as C,k as S,e as v,l as L,m as U,n as B,f as I,o as z,p as M}from"./element-plus-8ea99873.js";import{T as N}from"./vue-codemirror-a73c6375.js";import{F as T,G as R}from"./@codemirror-7230f411.js";import{Y as x,h as $,o as y,c as h,T as o,u as _,b as A,R as l,a,a5 as D,b9 as G,b7 as J}from"./@vue-cba46ac6.js";import{r as O,B as q}from"./@element-plus-b5389a85.js";import{d as P}from"./vuedraggable-ee8dd772.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import"./dayjs-45a61459.js";import"./@ctrl-f8748455.js";import"./@vueuse-172c92d7.js";import"./lodash-es-1f027512.js";import"./@popperjs-c75af06c.js";import"./codemirror-537d30e5.js";import"./@lezer-e43a2c15.js";import"./crelt-7bb88e1d.js";import"./style-mod-fd510d21.js";import"./w3c-keyname-9fb136d3.js";import"./vue-cbdc0a9f.js";import"./sortablejs-0c8a4bb3.js";const H={__name:"index",props:{code:{type:String,default:()=>"请传入需要格式化的代码！"}},setup(r){const s=r,f=[T(),R];x({codeStr:"",extensions:f,log:console.log});const d=(p,e)=>{console.log(p,e)},m=$({get(){return s.code},set(p){}});return(p,e)=>(y(),h("div",null,[o(_(N),{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=t=>m.value=t),placeholder:"Code gose here...",style:{height:"400px"},autofocus:!1,"indent-with-tab":!0,tabSize:2,extensions:f,readOnly:!0,onReady:e[1]||(e[1]=t=>d("ready",t)),onChange:e[2]||(e[2]=t=>d("change",t)),onFocus:e[3]||(e[3]=t=>d("focus",t)),onBlur:e[4]||(e[4]=t=>d("blur",t))},null,8,["modelValue"])]))}};const K=r=>(G("data-v-51f2131f"),r=r(),J(),r),Q={class:"layout-padding"},W={class:"drag-element",style:{display:"inline-block",width:"100px",height:"100px",margin:"10px",color:"gray"}},X={class:"drag-btns"},Z=["onClick"],F=["onClick"],ee={style:{"margin-top":"30px"}},oe=K(()=>a("div",{class:"card-header"},[a("span",null,"上传结果")],-1)),te={__name:"index",setup(r){const s=x({uploadUrl:"",drag:!0,preview:{visible:!1,url:""},fileList:[{id:1,name:"json",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{id:2,name:"jack",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}]}),f=(e,t)=>{console.log(e,t)},d=e=>e.type!="image/jpeg"?(v.error("Avatar picture must be JPG format!"),!1):e.size/1024/1024>2?(v.error("Avatar picture size can not exceed 2MB!"),!1):(s.fileList.push({id:e.uid,name:e.name,url:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"}),!0),m=e=>{s.preview.visible=!0,s.preview.url=e},p=e=>{let t=-1,c=s.fileList;for(let n=0;n<c.length;n++)c[n].id===e.id&&(t=n);t!=-1&&s.fileList.splice(t,1)};return A(()=>{}),(e,t)=>{const c=L,n=U,u=B,g=C,b=I,j=z,w=H,V=M,k=S;return y(),h("div",Q,[o(g,null,{default:l(()=>[o(u,{span:24,style:{border:"1px solid #e4e7ed"}},{default:l(()=>[o(_(P),{modelValue:s.fileList,"onUpdate:modelValue":t[0]||(t[0]=i=>s.fileList=i),"item-key":"id"},{item:l(({element:i})=>[a("div",W,[o(c,{src:i.url,fit:"fill",class:"drag-img",style:{width:"100px",height:"100px"}},null,8,["src"]),a("div",X,[o(g,null,{default:l(()=>[o(u,{span:1},{default:l(()=>[a("a",{href:"javascript:void(0);",onClick:E=>m(i.url),style:{float:"left",color:"gray"}},[o(n,null,{default:l(()=>[o(_(O))]),_:1})],8,Z)]),_:2},1024),o(u,{span:20}),o(u,{span:1},{default:l(()=>[a("a",{href:"javascript:void(0);",onClick:E=>p(i),style:{float:"right",color:"gray"}},[o(n,null,{default:l(()=>[o(_(q))]),_:1})],8,F)]),_:2},1024)]),_:2},1024)])])]),footer:l(()=>[a("div",ee,[o(j,{class:"avatar-uploader",action:s.uploadUrl,"show-file-list":!1,"on-success":f,"before-upload":d},{default:l(()=>[o(b,{type:"primary"},{default:l(()=>[D("点击上传")]),_:1})]),_:1},8,["action"])])]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(g,{style:{"margin-top":"30px"}},{default:l(()=>[o(u,{span:24},{default:l(()=>[o(V,{class:"box-card"},{header:l(()=>[oe]),default:l(()=>[a("div",null,[o(w,{code:JSON.stringify(s.fileList,null,"	")},null,8,["code"])])]),_:1})]),_:1})]),_:1}),o(k,{modelValue:s.preview.visible,"onUpdate:modelValue":t[1]||(t[1]=i=>s.preview.visible=i)},{default:l(()=>[o(c,{src:s.preview.url,fit:"fill"},null,8,["src"])]),_:1},8,["modelValue"])])}}},je=Y(te,[["__scopeId","data-v-51f2131f"]]);export{je as default};
