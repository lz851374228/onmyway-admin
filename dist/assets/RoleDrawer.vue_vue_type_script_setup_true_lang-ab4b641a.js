var D=Object.defineProperty;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(t,a,e)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,w=(t,a)=>{for(var e in a||(a={}))R.call(a,e)&&g(t,e,a[e]);if(h)for(var e of h(a))B.call(a,e)&&g(t,e,a[e]);return t};var p=(t,a,e)=>new Promise((o,u)=>{var c=s=>{try{i(e.next(s))}catch(r){u(r)}},m=s=>{try{i(e.throw(s))}catch(r){u(r)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(c,m);i((e=e.apply(t,a)).next())});import{B as P}from"./BasicForm-e261a333.js";import"./componentMap-db59878c.js";import{u as C}from"./useForm-84c9b2f9.js";import"./RadioButtonGroup-8412b0f8.js";import{s as F,c as N}from"./system-66b8f942.js";import{a6 as y}from"./index.js";import{n as V,d as L,k as b,e as U,u as l,_ as M,a9 as T,aa as v,f as _,ad as q}from"./vue-625a50e2.js";import{aP as A}from"./antd-d44a863f.js";import{a as G,B as $}from"./index-13c024b3.js";import{_ as O}from"./index-afd7ef17.js";const ae=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:120,customRender:({record:t})=>(Reflect.has(t,"pendingStatus")||(t.pendingStatus=!1),V(A,{checked:t.status==="1",checkedChildren:"停用",unCheckedChildren:"启用",loading:t.pendingStatus,onChange(a){t.pendingStatus=!0;const e=a?"1":"0",{createMessage:o}=y();F(t.id,e).then(()=>{t.status=e,o.success("已成功修改角色状态")}).catch(()=>{o.error("修改角色状态失败")}).finally(()=>{t.pendingStatus=!1})}}))},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],se=[{field:"roleNme",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]},colProps:{span:8}}],W=[{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}],oe=L({__name:"RoleDrawer",emits:["success","register"],setup(t,{emit:a}){const e=b(!0),o=b([]),[u,{resetFields:c,setFieldsValue:m,validate:i}]=C({labelWidth:90,baseColProps:{span:24},schemas:W,showActionButtonGroup:!1}),[s,{setDrawerProps:r,closeDrawer:I}]=G(n=>p(this,null,function*(){c(),r({confirmLoading:!1}),l(o).length===0&&(o.value=yield N()),e.value=!!(n!=null&&n.isUpdate),l(e)&&m(w({},n.record))})),S=U(()=>l(e)?"编辑角色":"新增角色");function k(){return p(this,null,function*(){try{const n=yield i();r({confirmLoading:!0}),console.log(n),I(),a("success")}finally{r({confirmLoading:!1})}})}return(n,j)=>(M(),T(l($),q(n.$attrs,{onRegister:l(s),showFooter:"",title:S.value,width:"500px",onOk:k}),{default:v(()=>[_(l(P),{onRegister:l(u)},{menu:v(({model:d,field:f})=>[_(l(O),{value:d[f],"onUpdate:value":x=>d[f]=x,treeData:o.value,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{oe as _,ae as c,se as s};
