import{D as _,G as C,S as y}from"./siteSetting-efd6ab5b.js";import{f as F,z as g,b as h,_ as L}from"./index.js";import{u as S}from"./useRootSetting-1b749135.js";import{d as v,U as w,k as R,e as $,u as a,a8 as m,_ as I,a9 as U,aa as k,a2 as u,ac as b,a0 as n,a1 as c,f as D,a3 as G,a4 as B}from"./vue-625a50e2.js";import{a as H}from"./useContentViewHeight-52d56a6c.js";import{a0 as T,bm as V}from"./antd-d44a863f.js";import"./useWindowSizeFn-6fb3a97e.js";const W=v({name:"LayoutFooter",components:{Footer:T.Footer,GithubFilled:V},setup(){const{t:o}=h(),{getShowFooter:e}=S(),{currentRoute:p}=w(),{prefixCls:d}=F("layout-footer"),r=R(null),{setFooterHeight:i}=H();return{getShowLayoutFooter:$(()=>{var s,t;if(a(e)){const l=(s=a(r))==null?void 0:s.$el;i((l==null?void 0:l.offsetHeight)||0)}else i(0);return a(e)&&!((t=a(p).meta)!=null&&t.hiddenFooter)}),prefixCls:d,t:o,DOC_URL:_,GITHUB_URL:C,SITE_URL:y,openWindow:g,footerRef:r}}});const N=o=>(G("data-v-0f5faecd"),o=o(),B(),o),z=N(()=>n("div",null,"Copyright ©2020 Vben Admin",-1));function A(o,e,p,d,r,i){const f=m("GithubFilled"),s=m("Footer");return o.getShowLayoutFooter?(I(),U(s,{key:0,class:u(o.prefixCls),ref:"footerRef"},{default:k(()=>[n("div",{class:u(`${o.prefixCls}__links`)},[n("a",{onClick:e[0]||(e[0]=t=>o.openWindow(o.SITE_URL))},c(o.t("layout.footer.onlinePreview")),1),D(f,{onClick:e[1]||(e[1]=t=>o.openWindow(o.GITHUB_URL)),class:u(`${o.prefixCls}__github`)},null,8,["class"]),n("a",{onClick:e[2]||(e[2]=t=>o.openWindow(o.DOC_URL))},c(o.t("layout.footer.onlineDocument")),1)],2),z]),_:1},8,["class"])):b("",!0)}const K=L(W,[["render",A],["__scopeId","data-v-0f5faecd"]]);export{K as default};
