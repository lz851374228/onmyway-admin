var c=(e,r,t)=>new Promise((o,n)=>{var i=a=>{try{s(t.next(a))}catch(p){n(p)}},f=a=>{try{s(t.throw(a))}catch(p){n(p)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(i,f);s((t=t.apply(e,r)).next())});import{u as d}from"./useScript-2b1c15fe.js";import{d as m,k as u,o as l,q as w,u as h,_,$ as M,ag as g}from"./vue-625a50e2.js";import{_ as y}from"./index.js";import"./antd-d44a863f.js";const k="https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b",A=m({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=u(null),{toPromise:r}=d({src:k});function t(){return c(this,null,function*(){yield r(),yield w();const o=h(e);if(!o)return;const n=window.AMap;new n.Map(o,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})})}return l(()=>{t()}),{wrapRef:e}}});function $(e,r,t,o,n,i){return _(),M("div",{ref:"wrapRef",style:g({height:e.height,width:e.width})},null,4)}const z=y(A,[["render",$]]);export{z as default};
