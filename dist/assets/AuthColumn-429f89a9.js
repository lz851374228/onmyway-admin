import{B as d}from"./BasicTable-bd92faf8.js";import{T as m}from"./componentMap-db59878c.js";import"./TableImg.vue_vue_type_style_index_0_lang-12724fee.js";import{u as c}from"./useTable-810eaf48.js";import{d as h}from"./table-9286518d.js";import{d as b,a8 as l,_ as u,$ as f,f as F,aa as w,a9 as C,ac as T}from"./vue-625a50e2.js";import{_}from"./index.js";import"./BasicForm-e261a333.js";import"./FormItem.vue_vue_type_script_lang-c8c36622.js";import"./index-1afce7c1.js";import"./index-8f3da8aa.js";import"./antd-d44a863f.js";import"./helper-d16d18bc.js";import"./BasicForm.vue_vue_type_style_index_0_lang-03718be0.js";import"./uniqBy-19b91793.js";import"./index-0a9e2861.js";import"./useWindowSizeFn-6fb3a97e.js";import"./useForm-84c9b2f9.js";import"./RadioButtonGroup-8412b0f8.js";import"./useFormItem-413320fc.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-6a3fbc2b.js";import"./download-3152d4ec.js";import"./base64Conver-39fc0d26.js";import"./index-dfb5c92c.js";import"./IconPicker.vue_vue_type_style_index_0_lang-319d661f.js";import"./useCopyToClipboard-2275284e.js";import"./index-c51e4158.js";import"./sortable.esm-4ae27e0b.js";const A=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",width:200,auth:"test"},{title:"状态",dataIndex:"status"},{title:"状态1",dataIndex:"status1"},{title:"状态2",dataIndex:"status2"},{title:"状态3",dataIndex:"status3"},{title:"状态4",dataIndex:"status4"},{title:"状态5",dataIndex:"status5"},{title:"地址",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],I=b({components:{BasicTable:d,TableAction:m},setup(){const[t]=c({title:"TableAction组件及固定列示例",api:h,columns:A,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function n(o){console.log("点击了编辑",o)}function i(o){console.log("点击了删除",o)}function a(o){console.log("点击了启用",o)}return{registerTable:t,handleEdit:n,handleDelete:i,handleOpen:a}}}),x={class:"p-4"};function g(t,n,i,a,o,k){const r=l("TableAction"),s=l("BasicTable");return u(),f("div",x,[F(s,{onRegister:t.registerTable},{bodyCell:w(({column:p,record:e})=>[p.key==="action"?(u(),C(r,{key:0,actions:[{label:"编辑",onClick:t.handleEdit.bind(null,e),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,e),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:t.handleOpen.bind(null,e)},ifShow:B=>e.status!=="enable"},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:t.handleOpen.bind(null,e)},ifShow:()=>e.status==="enable"},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:t.handleOpen.bind(null,e)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):T("",!0)]),_:1},8,["onRegister"])])}const nt=_(I,[["render",g]]);export{nt as default};
