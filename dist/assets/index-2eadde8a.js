import{_ as o}from"./index-afd7ef17.js";import{t as d}from"./data-1ad4e56f.js";import{P as C}from"./index-dd53ef4b.js";import{al as K}from"./index.js";import{as as E,ar as s,a8 as m,a2 as R,M as y,ab as b}from"./antd-d44a863f.js";import{d as $,k as i,a8 as A,_ as B,a9 as w,aa as t,f as a,u as e,E as p,q as L}from"./vue-625a50e2.js";import"./index-1afce7c1.js";import"./index-8f3da8aa.js";import"./useContextMenu-94133f3c.js";import"./useContentViewHeight-52d56a6c.js";import"./useWindowSizeFn-6fb3a97e.js";import"./onMountedOrActivated-6a3fbc2b.js";const O=$({__name:"index",setup(P){const _=i(null),f=i(null),v=i(null),c=i([]),l=i(!1);function k(n,u){console.log("onChecked",n,u)}function D(){l.value=!0,setTimeout(()=>{c.value=y(d),l.value=!1,L(()=>{var n;console.log(e(f)),(n=e(f))==null||n.expandAll(!0)})},2e3)}function h(){l.value=!0,setTimeout(()=>{c.value=y(d),l.value=!1},2e3)}const x=i([{title:"parent ",key:"0-0"}]);function T(n){return new Promise(u=>{if(K(n.children)&&n.children.length>0){u();return}setTimeout(()=>{const r=e(_);if(r){const g=[{title:`Child Node ${n.eventKey}-0`,key:`${n.eventKey}-0`},{title:`Child Node ${n.eventKey}-1`,key:`${n.eventKey}-1`}];r.updateNodeByKey(n.eventKey,{children:g}),r.setExpandedKeys(b([n.eventKey,...r.getExpandedKeys()]))}u()},300)})}return(n,u)=>{const r=A("a-button");return B(),w(e(C),{title:"Tree基础示例"},{default:t(()=>[a(e(E),{gutter:[16,16]},{default:t(()=>[a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"基础示例，默认展开第一层",treeData:e(d),defaultExpandLevel:"1"},{title:t(()=>[p(" 123123 ")]),_:1},8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"可勾选，默认全部展开",treeData:e(d),checkable:!0,defaultExpandAll:"",onCheck:k},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"指定默认展开/勾选示例",treeData:e(d),checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"懒加载异步树",ref_key:"asyncTreeRef",ref:_,treeData:x.value,"load-data":T},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(m),{title:"异步数据，默认展开"},{extra:t(()=>[a(r,{onClick:D,loading:l.value},{default:t(()=>[p("加载数据")]),_:1},8,["loading"])]),default:t(()=>[a(e(R),{spinning:l.value},{default:t(()=>[a(e(o),{ref_key:"asyncExpandTreeRef",ref:f,treeData:c.value},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(m),{title:"BasicTree内置加载"},{extra:t(()=>[a(r,{onClick:h,loading:l.value},{default:t(()=>[p("请求数据")]),_:1},8,["loading"])]),default:t(()=>[a(e(o),{ref_key:"loadTreeRef",ref:v,treeData:c.value,loading:l.value},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{O as default};
