import{I as l,c as m,b as _,P as d,_ as f}from"./index.js";import{d as g,U as E,e as C,a8 as e,_ as L,a9 as h,aa as a,f as c}from"./vue-625a50e2.js";import{W as B,aZ as I}from"./antd-d44a863f.js";const T=g({name:"ErrorAction",components:{Icon:l,Tooltip:B,Badge:I},setup(){const{t:o}=_(),{push:n}=E(),t=m(),r=C(()=>t.getErrorLogListCount);function s(){n(d.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function k(o,n,t,r,s,R){const u=e("Icon"),i=e("Badge"),p=e("Tooltip");return L(),h(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","onClick"])}const P=f(T,[["render",k]]);export{P as default};
