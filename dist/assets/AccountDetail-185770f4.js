import{d as C,ai as K,k as m,a8 as N,_ as n,a9 as P,aa as e,f as t,E as p,u as r,a0 as c,$ as f,ab as y,a1 as v,F as _,ac as k}from"./vue-625a50e2.js";import{P as V}from"./index-dd53ef4b.js";import{u as D,a as w}from"./index.js";import{a9 as b}from"./antd-d44a863f.js";import"./useContentViewHeight-52d56a6c.js";import"./useWindowSizeFn-6fb3a97e.js";import"./onMountedOrActivated-6a3fbc2b.js";const E={class:"pt-4 m-4 desc-wrap"},$=C({name:"AccountDetail",__name:"AccountDetail",setup(F){var i;const g=b,u=b.TabPane,T=K(),B=D(),o=m((i=T.params)==null?void 0:i.id),s=m("detail"),{setTitle:x}=w();x("详情：用户"+o.value);function A(){B("/system/account")}return(h,l)=>{const d=N("a-button");return n(),P(r(V),{title:"用户"+o.value+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:A},{extra:e(()=>[t(d,{type:"primary",danger:""},{default:e(()=>[p(" 禁用账号 ")]),_:1}),t(d,{type:"primary"},{default:e(()=>[p(" 修改密码 ")]),_:1})]),footer:e(()=>[t(r(g),{"default-active-key":"detail",activeKey:s.value,"onUpdate:activeKey":l[0]||(l[0]=a=>s.value=a)},{default:e(()=>[t(r(u),{key:"detail",tab:"用户资料"}),t(r(u),{key:"logs",tab:"操作日志"})]),_:1},8,["activeKey"])]),default:e(()=>[c("div",E,[s.value=="detail"?(n(),f(_,{key:0},y(10,a=>c("div",{key:a},"这是用户"+v(o.value)+"资料Tab",1)),64)):k("",!0),s.value=="logs"?(n(),f(_,{key:1},y(10,a=>c("div",{key:a},"这是用户"+v(o.value)+"操作日志Tab",1)),64)):k("",!0)])]),_:1},8,["title"])}}});export{$ as default};
