import{c as v}from"./index-803c64a0.js";import{a as k}from"./useFormDesignState-40932730.js";import{I as g,_ as I}from"./index.js";import{d as D,e as $,a8 as b,_ as B,$ as N,a0 as d,f as i,a2 as p,B as m}from"./vue-625a50e2.js";import"./antd-d44a863f.js";const O=D({name:"FormNodeOperate",components:{Icon:g},props:{schema:{type:Object,default:()=>({})},currentItem:{type:Object,default:()=>({})}},setup(e){const{formConfig:o,formDesignMethods:s}=k();return{activeClass:$(()=>e.schema.key===e.currentItem.key?"active":"unactivated"),handleDelete:()=>{const n=t=>{t.some((l,a)=>{var c;const{component:y,key:h}=l;if(["Grid","Tabs"].includes(y)&&((c=l.columns)==null||c.forEach(r=>n(r.children))),h===e.currentItem.key){let r=t.length===1?{component:""}:t.length-1>a?t[a+1]:t[a-1];return s.handleSetSelectItem(r),v(t,a),!0}})};n(o.value.schemas)},handleCopy:()=>{s.handleCopy()}}}}),_={class:"copy-delete-box"};function F(e,o,s,u,f,C){const n=b("Icon");return B(),N("div",_,[d("a",{class:p(["copy",e.activeClass]),onClick:o[0]||(o[0]=m((...t)=>e.handleCopy&&e.handleCopy(...t),["stop"]))},[i(n,{icon:"ant-design:copy-outlined"})],2),d("a",{class:p(["delete",e.activeClass]),onClick:o[1]||(o[1]=m((...t)=>e.handleDelete&&e.handleDelete(...t),["stop"]))},[i(n,{icon:"ant-design:delete-outlined"})],2)])}const w=I(O,[["render",F]]);export{w as default};
