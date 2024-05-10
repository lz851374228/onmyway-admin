var y=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var h=(o,e,a)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,c=(o,e)=>{for(var a in e||(e={}))M.call(e,a)&&h(o,a,e[a]);if(_)for(var a of _(e))J.call(e,a)&&h(o,a,e[a]);return o},i=(o,e)=>E(o,I(e));import{a as U}from"./useFormDesignState-40932730.js";import{a as g,g as j}from"./index-803c64a0.js";import{C as D,M as F}from"./index-44546e2d.js";import{a6 as S,_ as k}from"./index.js";import{aK as w,P as O}from"./antd-d44a863f.js";import{d as B,r as N,H as x,a8 as r,_ as $,a9 as K,aa as n,f as l,E as u,a0 as C,a3 as T,a4 as V}from"./vue-625a50e2.js";import"./useWindowSizeFn-6fb3a97e.js";const A=B({name:"ImportJsonModal",components:{CodeEditor:D,Upload:w,Modal:O},setup(){const{createMessage:o}=S(),e=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=U(),d=()=>{e.visible=!1},m=()=>{e.visible=!0},p=()=>{try{const s=JSON.parse(e.json);s.schemas&&g(s.schemas,t=>{j(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),d(),o.success("导入成功")}catch(s){o.error("导入失败，数据格式不对")}};return i(c({handleImportJson:p,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){e.json=this.result,p()},!1},handleCancel:d,showModal:m},x(e)),{MODE:F})}});const L=o=>(T("data-v-d347df61"),o=o(),V(),o),R=L(()=>C("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function H(o,e,a,d,m,p){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),b=r("Modal");return $(),K(b,{title:"JSON数据",visible:o.visible,onOk:o.handleImportJson,onCancel:o.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:o.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:o.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:o.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,C("div",z,[l(f,{value:o.json,"onUpdate:value":e[0]||(e[0]=v=>o.json=v),ref:"myEditor",mode:o.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["visible","onOk","onCancel"])}const oo=k(A,[["render",H],["__scopeId","data-v-d347df61"]]);export{oo as default};
