import{k as r,o as i,b as f}from"./vue-625a50e2.js";function p(a){const o=r(!1),s=r(!1),t=r(!1);let e;const n=new Promise((u,c)=>{i(()=>{e=document.createElement("script"),e.type="text/javascript",e.onload=function(){o.value=!1,t.value=!0,s.value=!1,u("")},e.onerror=function(l){o.value=!1,t.value=!1,s.value=!0,c(l)},e.src=a.src,document.head.appendChild(e)})});return f(()=>{e&&e.remove()}),{isLoading:o,error:s,success:t,toPromise:()=>n}}export{p as u};
