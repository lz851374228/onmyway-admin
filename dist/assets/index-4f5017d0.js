import{B as b}from"./BasicTable-bd92faf8.js";import{T as g}from"./componentMap-db59878c.js";import"./TableImg.vue_vue_type_style_index_0_lang-12724fee.js";import{u as C}from"./useTable-810eaf48.js";import{c as T}from"./system-66b8f942.js";import{u as _}from"./index-13c024b3.js";import{M as w,c as S,s as D}from"./MenuDrawer-93c53a70.js";import{d as k,q as B,a8 as t,_ as h,$ as F,f as c,aa as l,E as M,a9 as y,ac as E}from"./vue-625a50e2.js";import{_ as A}from"./index.js";import"./BasicForm-e261a333.js";import"./FormItem.vue_vue_type_script_lang-c8c36622.js";import"./index-1afce7c1.js";import"./index-8f3da8aa.js";import"./antd-d44a863f.js";import"./helper-d16d18bc.js";import"./BasicForm.vue_vue_type_style_index_0_lang-03718be0.js";import"./uniqBy-19b91793.js";import"./index-0a9e2861.js";import"./useWindowSizeFn-6fb3a97e.js";import"./useForm-84c9b2f9.js";import"./RadioButtonGroup-8412b0f8.js";import"./useFormItem-413320fc.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-6a3fbc2b.js";import"./download-3152d4ec.js";import"./base64Conver-39fc0d26.js";import"./index-dfb5c92c.js";import"./IconPicker.vue_vue_type_style_index_0_lang-319d661f.js";import"./useCopyToClipboard-2275284e.js";import"./index-c51e4158.js";import"./sortable.esm-4ae27e0b.js";const R=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:w,TableAction:g},setup(){const[e,{openDrawer:n}]=_(),[m,{reload:u,expandAll:p}]=C({title:"菜单列表",api:T,columns:S,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function d(){n(!0,{isUpdate:!1})}function r(o){n(!0,{record:o,isUpdate:!0})}function a(o){console.log(o)}function i(){u()}function s(){B(p)}return{registerTable:m,registerDrawer:e,handleCreate:d,handleEdit:r,handleDelete:a,handleSuccess:i,onFetchSuccess:s}}});function $(e,n,m,u,p,d){const r=t("a-button"),a=t("TableAction"),i=t("BasicTable"),s=t("MenuDrawer");return h(),F("div",null,[c(i,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(r,{type:"primary",onClick:e.handleCreate},{default:l(()=>[M(" 新增菜单 ")]),_:1},8,["onClick"])]),bodyCell:l(({column:o,record:f})=>[o.key==="action"?(h(),y(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const me=A(R,[["render",$]]);export{me as default};
