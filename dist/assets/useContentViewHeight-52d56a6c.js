var H=(t,i,e)=>new Promise((a,o)=>{var f=n=>{try{u(e.next(n))}catch(s){o(s)}},m=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?a(n.value):Promise.resolve(n.value).then(f,m);u((e=e.apply(t,i)).next())});import{q as w}from"./index.js";import{u as d}from"./useWindowSizeFn-6fb3a97e.js";import{k as r,e as p,u as c}from"./vue-625a50e2.js";const l=Symbol();function v(t){return w(t,l,{native:!0})}const g=r(0),h=r(0);function F(){function t(e){g.value=e}function i(e){h.value=e}return{headerHeightRef:g,footerHeightRef:h,setHeaderHeight:t,setFooterHeight:i}}function P(){const t=r(window.innerHeight),i=r(window.innerHeight),e=p(()=>c(t)-c(g)-c(h)||0);d(()=>{t.value=window.innerHeight},{wait:100,immediate:!0});function a(o){return H(this,null,function*(){i.value=o})}v({contentHeight:e,setPageHeight:a,pageHeight:i})}export{F as a,P as u};
