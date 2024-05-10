import{B as h}from"./BasicTable-bd92faf8.js";import{T as g}from"./componentMap-db59878c.js";import"./TableImg.vue_vue_type_style_index_0_lang-12724fee.js";import{u as _}from"./useTable-810eaf48.js";import{b as C}from"./system-66b8f942.js";import{u as T}from"./index-0a9e2861.js";import{D as B,c as k,s as D}from"./DeptModal-fc384c57.js";import{d as E,a8 as t,_ as u,$ as M,f as r,aa as s,E as S,a9 as y,ac as R}from"./vue-625a50e2.js";import{_ as $}from"./index.js";import"./BasicForm-e261a333.js";import"./FormItem.vue_vue_type_script_lang-c8c36622.js";import"./index-1afce7c1.js";import"./index-8f3da8aa.js";import"./antd-d44a863f.js";import"./helper-d16d18bc.js";import"./BasicForm.vue_vue_type_style_index_0_lang-03718be0.js";import"./uniqBy-19b91793.js";import"./useForm-84c9b2f9.js";import"./RadioButtonGroup-8412b0f8.js";import"./useFormItem-413320fc.js";import"./uuid-31b8b5a4.js";import"./useWindowSizeFn-6fb3a97e.js";import"./onMountedOrActivated-6a3fbc2b.js";import"./download-3152d4ec.js";import"./base64Conver-39fc0d26.js";import"./index-dfb5c92c.js";import"./IconPicker.vue_vue_type_style_index_0_lang-319d661f.js";import"./useCopyToClipboard-2275284e.js";import"./index-c51e4158.js";import"./sortable.esm-4ae27e0b.js";const w=E({name:"DeptManagement",components:{BasicTable:h,DeptModal:B,TableAction:g},setup(){const[e,{openModal:n}]=T(),[l,{reload:m}]=_({title:"部门列表",api:C,columns:k,formConfig:{labelWidth:120,schemas:D},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function c(){n(!0,{isUpdate:!1})}function p(o){n(!0,{record:o,isUpdate:!0})}function a(o){console.log(o)}function i(){m()}return{registerTable:l,registerModal:e,handleCreate:c,handleEdit:p,handleDelete:a,handleSuccess:i}}});function A(e,n,l,m,c,p){const a=t("a-button"),i=t("TableAction"),o=t("BasicTable"),f=t("DeptModal");return u(),M("div",null,[r(o,{onRegister:e.registerTable},{toolbar:s(()=>[r(a,{type:"primary",onClick:e.handleCreate},{default:s(()=>[S(" 新增部门 ")]),_:1},8,["onClick"])]),bodyCell:s(({column:b,record:d})=>[b.key==="action"?(u(),y(i,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,d)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:e.handleDelete.bind(null,d)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),r(f,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const le=$(w,[["render",A]]);export{le as default};
