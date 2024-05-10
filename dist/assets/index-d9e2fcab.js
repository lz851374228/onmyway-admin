import{d as k}from"./index-1afce7c1.js";import{u as B,a as g,a6 as A,_ as b}from"./index.js";import{P as T}from"./index-dd53ef4b.js";import{$ as E,aL as D}from"./antd-d44a863f.js";import{d as h,k as v,a8 as r,_,a9 as $,aa as a,f as u,a0 as P,E as o,$ as y,F as L,ab as w,a1 as N}from"./vue-625a50e2.js";import"./index-8f3da8aa.js";import"./useContentViewHeight-52d56a6c.js";import"./useWindowSizeFn-6fb3a97e.js";import"./onMountedOrActivated-6a3fbc2b.js";const V=h({name:"TabsDemo",components:{CollapseContainer:k,PageWrapper:T,[E.name]:E,[D.name]:D},setup(){const e=B(),l=v(""),{closeAll:p,closeLeft:C,closeRight:f,closeOther:F,closeCurrent:c,refreshPage:t,setTitle:i}=g(),{createMessage:n}=A();function m(){l.value?i(l.value):n.error("请输入要设置的Tab标题！")}function s(d){e(`/feat/tabs/detail/${d}`)}return{closeAll:p,closeLeft:C,closeRight:f,closeOther:F,closeCurrent:c,toDetail:s,refreshPage:t,setTabTitle:m,title:l}}}),W={class:"mt-2 flex flex-grow-0"};function M(e,l,p,C,f,F){const c=r("a-alert"),t=r("a-button"),i=r("a-input"),n=r("CollapseContainer"),m=r("PageWrapper");return _(),$(m,{title:"标签页操作示例"},{default:a(()=>[u(n,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:a(()=>[u(c,{banner:"",message:"该操作不会影响页面标题，仅修改Tab标题"}),P("div",W,[u(t,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:a(()=>[o(" 设置Tab标题 ")]),_:1},8,["onClick"]),u(i,{placeholder:"请输入",value:e.title,"onUpdate:value":l[0]||(l[0]=s=>e.title=s),class:"mr-4 w-12"},null,8,["value"])])]),_:1}),u(n,{class:"mt-4",title:"标签页操作"},{default:a(()=>[u(t,{class:"mr-2",onClick:e.closeAll},{default:a(()=>[o(" 关闭所有 ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:e.closeLeft},{default:a(()=>[o(" 关闭左侧 ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:e.closeRight},{default:a(()=>[o(" 关闭右侧 ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:e.closeOther},{default:a(()=>[o(" 关闭其他 ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:e.closeCurrent},{default:a(()=>[o(" 关闭当前 ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:e.refreshPage},{default:a(()=>[o(" 刷新当前 ")]),_:1},8,["onClick"])]),_:1}),u(n,{class:"mt-4",title:"标签页复用超出限制自动关闭(使用场景: 动态路由)"},{default:a(()=>[(_(),y(L,null,w(6,s=>u(t,{key:s,class:"mr-2",onClick:d=>e.toDetail(s)},{default:a(()=>[o(" 打开"+N(s)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}const H=b(V,[["render",M]]);export{H as default};
