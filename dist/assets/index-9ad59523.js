var w=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))E.call(t,a)&&B(e,a,t[a]);if(D)for(var a of D(t))I.call(t,a)&&B(e,a,t[a]);return e},F=(e,t)=>A(e,C(t));import{P as V}from"./index-dd53ef4b.js";import{b6 as L,b1 as O,_ as S}from"./index.js";import{$ as f,al as $}from"./antd-d44a863f.js";import{d as x,r as N,s as P,e as g,H as W,a8 as r,_ as h,a9 as M,aa as u,a0 as s,f as l,E as d,a1 as c,$ as k,F as R,ab as U}from"./vue-625a50e2.js";import"./useContentViewHeight-52d56a6c.js";import"./useWindowSizeFn-6fb3a97e.js";import"./onMountedOrActivated-6a3fbc2b.js";const H=x({components:{PageWrapper:V,[f.name]:f,InputTextArea:f.TextArea,Tag:$},setup(){const e=N({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:a,send:v,close:b,open:T}=L(e.server,{autoReconnect:!1,heartbeat:!0});P(()=>{if(a.value)try{const o=JSON.parse(a.value);e.recordList.push(o)}catch(o){e.recordList.push({res:a.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=g(()=>t.value==="OPEN"),p=g(()=>n.value?"success":"red"),i=g(()=>[...e.recordList].reverse());function m(){v(e.sendValue),e.sendValue=""}function _(){n.value?b():T()}return F(y({status:t,formatToDateTime:O},W(e)),{handlerSend:m,getList:i,toggle:_,getIsOpen:n,getTagColor:p})}}),J={class:"flex"},j={class:"w-1/3 bg-white p-4"},q={class:"flex items-center"},z=s("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),G=s("hr",{class:"my-4"},null,-1),K={class:"flex"},Q=s("p",{class:"text-lg font-medium mt-4"},"设置",-1),X=s("hr",{class:"my-4"},null,-1),Y={class:"w-2/3 bg-white ml-4 p-4"},Z=s("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),ee=s("hr",{class:"my-4"},null,-1),te={class:"max-h-80 overflow-auto"},se={class:"flex items-center"},ae=s("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1);function oe(e,t,a,v,b,T){const n=r("Tag"),p=r("a-input"),i=r("a-button"),m=r("InputTextArea"),_=r("PageWrapper");return h(),M(_,{title:"WebSocket 示例"},{default:u(()=>[s("div",J,[s("div",j,[s("div",q,[z,l(n,{color:e.getTagColor},{default:u(()=>[d(c(e.status),1)]),_:1},8,["color"])]),G,s("div",K,[l(p,{value:e.server,"onUpdate:value":t[0]||(t[0]=o=>e.server=o),disabled:""},{addonBefore:u(()=>[d(" 服务地址 ")]),_:1},8,["value"]),l(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:u(()=>[d(c(e.getIsOpen?"关闭连接":"开启连接"),1)]),_:1},8,["type","onClick"])]),Q,X,l(m,{placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=o=>e.sendValue=o),allowClear:""},null,8,["disabled","value"]),l(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:u(()=>[d(" 发送 ")]),_:1},8,["disabled","onClick"])]),s("div",Y,[Z,ee,s("div",te,[s("ul",null,[(h(!0),k(R,null,U(e.getList,o=>(h(),k("li",{class:"mt-2",key:o.time},[s("div",se,[ae,s("span",null,c(e.formatToDateTime(o.time)),1)]),s("div",null,c(o.res),1)]))),128))])])])])]),_:1})}const me=S(H,[["render",oe]]);export{me as default};
