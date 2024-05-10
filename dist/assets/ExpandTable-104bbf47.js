import{B as d}from"./BasicTable-bd92faf8.js";import{T as f}from"./componentMap-db59878c.js";import"./TableImg.vue_vue_type_style_index_0_lang-12724fee.js";import{u as B}from"./useTable-810eaf48.js";import{P as C}from"./index-dd53ef4b.js";import{getBasicColumns as F}from"./tableData-34a1305b.js";import{d as b}from"./table-9286518d.js";import{d as g,a8 as n,_ as u,a9 as l,aa as i,f as _,a0 as E,a1 as T,ac as w}from"./vue-625a50e2.js";import{_ as A}from"./index.js";import"./BasicForm-e261a333.js";import"./FormItem.vue_vue_type_script_lang-c8c36622.js";import"./index-1afce7c1.js";import"./index-8f3da8aa.js";import"./antd-d44a863f.js";import"./helper-d16d18bc.js";import"./BasicForm.vue_vue_type_style_index_0_lang-03718be0.js";import"./uniqBy-19b91793.js";import"./index-0a9e2861.js";import"./useWindowSizeFn-6fb3a97e.js";import"./useForm-84c9b2f9.js";import"./RadioButtonGroup-8412b0f8.js";import"./useFormItem-413320fc.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-6a3fbc2b.js";import"./download-3152d4ec.js";import"./base64Conver-39fc0d26.js";import"./index-dfb5c92c.js";import"./IconPicker.vue_vue_type_style_index_0_lang-319d661f.js";import"./useCopyToClipboard-2275284e.js";import"./index-c51e4158.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-52d56a6c.js";import"./select-93eac05e.js";const h=g({components:{BasicTable:d,TableAction:f,PageWrapper:C},setup(){const[o]=B({api:b,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:F(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function a(t){console.log("点击了删除",t)}function r(t){console.log("点击了启用",t)}return{registerTable:o,handleDelete:a,handleOpen:r}}});function k(o,a,r,t,x,y){const s=n("TableAction"),m=n("BasicTable"),c=n("PageWrapper");return u(),l(c,{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:i(()=>[_(m,{onRegister:o.registerTable},{expandedRowRender:i(({record:e})=>[E("span",null,"No: "+T(e.no),1)]),bodyCell:i(({column:e,record:p})=>[e.key==="action"?(u(),l(s,{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,p)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:o.handleOpen.bind(null,p)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])]),_:1})}const uo=A(h,[["render",k]]);export{uo as default};
