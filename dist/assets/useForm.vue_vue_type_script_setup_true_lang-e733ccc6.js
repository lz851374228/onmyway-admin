var h=Object.defineProperty;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var _=(a,o,e)=>o in a?h(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e,v=(a,o)=>{for(var e in o||(o={}))x.call(o,e)&&_(a,e,o[e]);if(u)for(var e of u(o))M.call(o,e)&&_(a,e,o[e]);return a};var C=(a,o,e)=>new Promise((t,i)=>{var c=s=>{try{r(e.next(s))}catch(n){i(n)}},f=s=>{try{r(e.throw(s))}catch(n){i(n)}},r=s=>s.done?t(s.value):Promise.resolve(s.value).then(c,f);r((e=e.apply(a,o)).next())});import{B as b}from"./BasicForm-e261a333.js";import"./componentMap-db59878c.js";import{u as k}from"./useForm-84c9b2f9.js";import"./RadioButtonGroup-8412b0f8.js";import w from"./JsonModal-e9becba9.js";import{P as y}from"./antd-d44a863f.js";import{d as B,k as F,r as j,e as O,_ as P,a9 as R,aa as T,f as g,u as d,ad as D}from"./vue-625a50e2.js";const H=B({__name:"useForm",setup(a,{expose:o}){const e=F(null),t=j({formModel:{},formConfig:{},visible:!1}),i=O(()=>v({},t.formConfig)),c=m=>{t.formConfig=m,t.visible=!0},[f,{validate:r}]=k(),s=()=>{t.visible=!1},n=()=>C(this,null,function*(){var l,p;let m=yield r();(p=(l=e.value)==null?void 0:l.showModal)==null||p.call(l,m)});return o({showModal:c}),(m,l)=>(P(),R(d(y),{title:"预览(不支持布局)",visible:t.visible,onOk:n,onCancel:s,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:T(()=>[g(d(b),D(i.value,{onRegister:d(f)}),null,16,["onRegister"]),g(w,{ref_key:"jsonModal",ref:e},null,512)]),_:1},8,["visible"]))}});export{H as _};
