var h=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var M=(e,o,t)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))g.call(o,t)&&M(e,t,o[t]);if(c)for(var t of c(o))k.call(o,t)&&M(e,t,o[t]);return e},v=(e,o)=>w(e,A(o));var b=(e,o,t)=>new Promise((p,m)=>{var u=r=>{try{n(t.next(r))}catch(i){m(i)}},s=r=>{try{n(t.throw(r))}catch(i){m(i)}},n=r=>r.done?p(r.value):Promise.resolve(r.value).then(u,s);n((t=t.apply(e,o)).next())});import V from"./index-2afe09f1.js";import{b as D}from"./index-803c64a0.js";import S from"./JsonModal-e9becba9.js";import{P as U}from"./antd-d44a863f.js";import{d as $,k as y,r as B,H as E,a8 as f,_ as J,a9 as O,aa as F,f as d}from"./vue-625a50e2.js";import{_ as P}from"./index.js";import"./FormRender-c8c68f8d.js";import"./index-5e22aaa9.js";import"./formItemConfig-7a2acbe6.js";import"./componentMap-db59878c.js";import"./useFormItem-413320fc.js";import"./RadioButtonGroup-8412b0f8.js";import"./index-0a9e2861.js";import"./index-1afce7c1.js";import"./index-8f3da8aa.js";import"./useWindowSizeFn-6fb3a97e.js";import"./uuid-31b8b5a4.js";import"./download-3152d4ec.js";import"./base64Conver-39fc0d26.js";import"./index-dfb5c92c.js";import"./IconPicker.vue_vue_type_style_index_0_lang-319d661f.js";import"./useCopyToClipboard-2275284e.js";import"./index-c51e4158.js";import"./useFormDesignState-40932730.js";import"./PreviewCode-3e989729.js";import"./index-44546e2d.js";const G=$({name:"VFormPreview",components:{JsonModal:S,VFormCreate:V,Modal:U},setup(){const e=y(null),o=B({formModel:{},formConfig:{},visible:!1,fApi:{}}),t=n=>{console.log("showModal-",n),D(n.schemas),o.formConfig=n,o.visible=!0},p=()=>{o.visible=!1,o.formModel={}},m=()=>b(this,null,function*(){var r,i,a,l;const n=yield(i=(r=o.fApi).submit)==null?void 0:i.call(r);(l=(a=e.value)==null?void 0:a.showModal)==null||l.call(a,n)}),u=n=>{},s=()=>{o.formModel={}};return v(C({handleGetData:m,handleCancel:p},E(o)),{showModal:t,jsonModal:e,onSubmit:u,onCancel:s})}});function N(e,o,t,p,m,u){const s=f("a-input"),n=f("VFormCreate"),r=f("JsonModal"),i=f("Modal");return J(),O(i,{title:"预览(支持布局)",visible:e.visible,onOk:e.handleGetData,onCancel:e.handleCancel,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:F(()=>[d(n,{"form-config":e.formConfig,fApi:e.fApi,"onUpdate:fApi":o[0]||(o[0]=a=>e.fApi=a),formModel:e.formModel,"onUpdate:formModel":o[1]||(o[1]=a=>e.formModel=a),onSubmit:e.onSubmit},{slotName:F(({formModel:a,field:l})=>[d(s,{value:a[l],"onUpdate:value":_=>a[l]=_,placeholder:"我是插槽传递的输入框"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(r,{ref:"jsonModal"},null,512)]),_:1},8,["visible","onOk","onCancel"])}const fo=P(G,[["render",N]]);export{fo as default};
