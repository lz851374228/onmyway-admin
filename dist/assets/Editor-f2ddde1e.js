import{B as m}from"./BasicForm-e261a333.js";import"./componentMap-db59878c.js";import"./RadioButtonGroup-8412b0f8.js";import{d as u}from"./index-1afce7c1.js";import{a6 as l,_ as c}from"./index.js";import{T as d}from"./index-b607a075.js";import{P as f}from"./index-dd53ef4b.js";import{d as C,n as _,a8 as o,_ as h,a9 as B,aa as a,f as s}from"./vue-625a50e2.js";import"./FormItem.vue_vue_type_script_lang-c8c36622.js";import"./helper-d16d18bc.js";import"./antd-d44a863f.js";import"./BasicForm.vue_vue_type_style_index_0_lang-03718be0.js";import"./uniqBy-19b91793.js";import"./index-0a9e2861.js";import"./useWindowSizeFn-6fb3a97e.js";import"./useFormItem-413320fc.js";import"./uuid-31b8b5a4.js";import"./download-3152d4ec.js";import"./base64Conver-39fc0d26.js";import"./index-dfb5c92c.js";import"./IconPicker.vue_vue_type_style_index_0_lang-319d661f.js";import"./useCopyToClipboard-2275284e.js";import"./index-c51e4158.js";import"./index-8f3da8aa.js";import"./onMountedOrActivated-6a3fbc2b.js";import"./useContentViewHeight-52d56a6c.js";const b=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>_(d,{value:e[t],onChange:r=>{e[t]=r}})}],g=C({components:{BasicForm:m,CollapseContainer:u,PageWrapper:f},setup(){const{createMessage:e}=l();return{schemas:b,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});function P(e,t,r,S,V,y){const n=o("BasicForm"),i=o("CollapseContainer"),p=o("PageWrapper");return h(),B(p,{title:"富文本嵌入表单示例"},{default:a(()=>[s(i,{title:"富文本表单"},{default:a(()=>[s(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}const X=c(g,[["render",P]]);export{X as default};
