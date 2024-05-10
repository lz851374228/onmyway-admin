var p=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(e,o,t)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))u.call(o,t)&&r(e,t,o[t]);if(s)for(var t of s(o))v.call(o,t)&&r(e,t,o[t]);return e},i=(e,o)=>c(e,f(o));import{r as b,b as C}from"./index-803c64a0.js";import _ from"./PreviewCode-3e989729.js";import{P as w}from"./antd-d44a863f.js";import{d as D,r as h,e as M,H as J,a8 as m,_ as V,a9 as $,aa as x,f as y}from"./vue-625a50e2.js";import{_ as A}from"./index.js";import"./index-44546e2d.js";import"./useWindowSizeFn-6fb3a97e.js";import"./useCopyToClipboard-2275284e.js";const P=`<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">提交</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: `;let g=`
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
     }
  }
}
<\/script>`;const j=D({name:"CodeModal",components:{PreviewCode:_,Modal:w},setup(){const e=h({visible:!1,jsonData:{}}),o=a=>{a.schemas&&C(a.schemas),e.visible=!0,e.jsonData=a},t=M(()=>P+JSON.stringify(b(e.jsonData),null,"	")+g);return i(n({},J(e)),{editorVueJson:t,showModal:o})}});function k(e,o,t,a,N,B){const l=m("PreviewCode"),d=m("Modal");return V(),$(d,{title:"代码",footer:null,visible:e.visible,onCancel:o[0]||(o[0]=E=>e.visible=!1),wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px",destroyOnClose:!0},{default:x(()=>[y(l,{editorJson:e.editorVueJson,fileFormat:"vue"},null,8,["editorJson"])]),_:1},8,["visible"])}const I=A(j,[["render",k]]);export{I as default};
