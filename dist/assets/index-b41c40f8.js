var A=Object.defineProperty;var _=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))E.call(t,o)&&f(e,o,t[o]);if(_)for(var o of _(t))k.call(t,o)&&f(e,o,t[o]);return e};import x from"./Step1-75702beb.js";import R from"./Step2-3f65f3ac.js";import y from"./Step3-655b5897.js";import{P as D}from"./index-dd53ef4b.js";import{d as $,k as w,r as V,H as W,a8 as p,_ as a,a9 as i,aa as v,a0 as h,f as r,t as s,A as m,ac as F}from"./vue-625a50e2.js";import{bt as u}from"./antd-d44a863f.js";import{_ as b}from"./index.js";import"./BasicForm-e261a333.js";import"./FormItem.vue_vue_type_script_lang-c8c36622.js";import"./componentMap-db59878c.js";import"./useFormItem-413320fc.js";import"./RadioButtonGroup-8412b0f8.js";import"./index-0a9e2861.js";import"./index-1afce7c1.js";import"./index-8f3da8aa.js";import"./useWindowSizeFn-6fb3a97e.js";import"./uuid-31b8b5a4.js";import"./download-3152d4ec.js";import"./base64Conver-39fc0d26.js";import"./index-dfb5c92c.js";import"./IconPicker.vue_vue_type_style_index_0_lang-319d661f.js";import"./useCopyToClipboard-2275284e.js";import"./index-c51e4158.js";import"./helper-d16d18bc.js";import"./BasicForm.vue_vue_type_style_index_0_lang-03718be0.js";import"./uniqBy-19b91793.js";import"./useForm-84c9b2f9.js";import"./data-6b084658.js";import"./useContentViewHeight-52d56a6c.js";import"./onMountedOrActivated-6a3fbc2b.js";const H=$({name:"FormStepPage",components:{Step1:x,Step2:R,Step3:y,PageWrapper:D,[u.name]:u,[u.Step.name]:u.Step},setup(){const e=w(0),t=V({initSetp2:!1,initSetp3:!1});function o(n){e.value++,t.initSetp2=!0,console.log(n)}function c(){e.value--}function l(n){e.value++,t.initSetp3=!0,console.log(n)}function d(){e.value=0,t.initSetp2=!1,t.initSetp3=!1}return S({current:e,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},W(t))}});const I={class:"step-form-form"},j={class:"mt-5"};function q(e,t,o,c,l,d){const n=p("a-step"),B=p("a-steps"),C=p("Step1"),N=p("Step2"),P=p("Step3"),g=p("PageWrapper");return a(),i(g,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:v(()=>[h("div",I,[r(B,{current:e.current},{default:v(()=>[r(n,{title:"填写转账信息"}),r(n,{title:"确认转账信息"}),r(n,{title:"完成"})]),_:1},8,["current"])]),h("div",j,[s(r(C,{onNext:e.handleStep1Next},null,8,["onNext"]),[[m,e.current===0]]),e.initSetp2?s((a(),i(N,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[m,e.current===1]]):F("",!0),e.initSetp3?s((a(),i(P,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[m,e.current===2]]):F("",!0)])]),_:1})}const he=b(H,[["render",q],["__scopeId","data-v-c7580c9f"]]);export{he as default};
