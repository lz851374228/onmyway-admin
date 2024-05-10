var R=Object.defineProperty,F=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(e,o,t)=>o in e?R(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,p=(e,o)=>{for(var t in o||(o={}))k.call(o,t)&&h(e,t,o[t]);if(w)for(var t of w(o))x.call(o,t)&&h(e,t,o[t]);return e},g=(e,o)=>F(e,M(o));var f=(e,o,t)=>new Promise((l,r)=>{var c=a=>{try{s(t.next(a))}catch(u){r(u)}},i=a=>{try{s(t.throw(a))}catch(u){r(u)}},s=a=>a.done?l(a.value):Promise.resolve(a.value).then(c,i);s((t=t.apply(e,o)).next())});import{B as V}from"./BasicForm-e261a333.js";import"./componentMap-db59878c.js";import{u as G}from"./useForm-84c9b2f9.js";import"./RadioButtonGroup-8412b0f8.js";import{I as $,_ as C}from"./index.js";import{n as v,d as T,k as _,e as q,u as I,a8 as y,_ as L,a9 as O,aa as N,f as j,ad as U}from"./vue-625a50e2.js";import{al as z}from"./antd-d44a863f.js";import{B as A,a as W}from"./index-13c024b3.js";import{g as E,u as H,c as J}from"./menu-75f428b1.js";const ce=[{title:"菜单名称",dataIndex:"name",width:200,align:"left"},{title:"图标",dataIndex:"icon",width:50,customRender:({record:e})=>v($,{icon:e.icon})},{title:"权限标识",dataIndex:"permission",width:180},{title:"组件",dataIndex:"component"},{title:"排序",dataIndex:"order",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=~~e.status===0,l=t?"green":"red",r=t?"启用":"停用";return v(z,{color:l},()=>r)}},{title:"创建时间",dataIndex:"created_at",width:180}],K=e=>e==="0",b=e=>e==="1",d=e=>e==="2",pe=[{field:"name",label:"菜单名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],Q=[{field:"type",label:"菜单类型",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"目录",value:"0"},{label:"菜单",value:"1"},{label:"按钮",value:"2"}]},colProps:{lg:24,md:24}},{field:"name",label:"菜单名称",component:"Input",required:!0},{field:"parent_id",label:"上级菜单",component:"TreeSelect",componentProps:{fieldNames:{label:"name",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"order",label:"排序",component:"InputNumber",required:!0},{field:"icon",label:"图标",component:"IconPicker",required:!0,ifShow:({values:e})=>!d(e.type)},{field:"path",label:"路由地址",component:"Input",required:!0,ifShow:({values:e})=>!d(e.type)},{field:"component",label:"组件路径",component:"Input",ifShow:({values:e})=>b(e.type)},{field:"permission",label:"权限标识",component:"Input",ifShow:({values:e})=>!K(e.type)},{field:"current_active_menu",label:"激活菜单",component:"Input",ifShow:({values:e})=>b(e.type)},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"禁用",value:"1"}]}},{field:"is_frame",label:"是否外链",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>!d(e.type)},{field:"is_cache",label:"是否缓存",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>b(e.type)},{field:"visible",label:"是否显示",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"是",value:"0"},{label:"否",value:"1"}]},ifShow:({values:e})=>!d(e.type)}],X=T({name:"MenuDrawer",components:{BasicDrawer:A,BasicForm:V},emits:["success","register"],setup(e,{emit:o}){const t=_(!0),l=_(null),[r,{resetFields:c,setFieldsValue:i,updateSchema:s,validate:a}]=G({labelWidth:100,schemas:Q,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[u,{setDrawerProps:m,closeDrawer:B}]=W(n=>f(this,null,function*(){c(),m({confirmLoading:!1}),t.value=!!(n!=null&&n.isUpdate),I(t)&&(i(p({},n.record)),l.value=n.record.id);const D=yield E();s({field:"parent_id",componentProps:{treeData:D}})})),P=q(()=>I(t)?"编辑菜单":"新增菜单");function S(){return f(this,null,function*(){try{const n=yield a();m({confirmLoading:!0}),t.value?yield H(g(p({},n),{id:l.value})):yield J(p({},n)),B(),o("success")}finally{m({confirmLoading:!1})}})}return{registerDrawer:u,registerForm:r,getTitle:P,handleSubmit:S}}});function Y(e,o,t,l,r,c){const i=y("BasicForm"),s=y("BasicDrawer");return L(),O(s,U(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:N(()=>[j(i,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const Z=C(X,[["render",Y]]),de=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{Z as M,de as a,ce as c,pe as s};
