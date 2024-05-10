var me=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ee=(e,o,a)=>o in e?me(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,v=(e,o)=>{for(var a in o||(o={}))be.call(o,a)&&ee(e,a,o[a]);if(x)for(var a of x(o))Ce.call(o,a)&&ee(e,a,o[a]);return e},_=(e,o)=>he(e,ye(o));var I=(e,o,a)=>new Promise((i,l)=>{var c=d=>{try{n(a.next(d))}catch(u){l(u)}},t=d=>{try{n(a.throw(d))}catch(u){l(u)}},n=d=>d.done?i(d.value):Promise.resolve(d.value).then(c,t);n((a=a.apply(e,o)).next())});import{b as se,j as ve,as as Me,aA as He,r as Se,q as ke,aB as Fe,_ as j,f as re,o as ie,aC as $e,ax as Be,az as ce,a7 as Oe,a8 as Pe}from"./index.js";import{s as z,u as s,d as R,H as Te,f as M,i as we,k as m,e as H,w as ue,o as Re,b as de,q as B,a8 as y,v as Ne,_ as b,a9 as P,aa as g,t as De,$ as q,R as O,ag as We,F as _e,ac as X,a2 as Ee,E as Y,a1 as G,ad as E,g as K,z as je,af as te,ab as ne,ae as oe,ah as le,r as fe,J as V}from"./vue-625a50e2.js";import{P as Le,W as Ae,ah as Ie,ai as Ve,aU as qe,K as U,G as ze}from"./antd-d44a863f.js";import{S as Ue,B as Xe}from"./index-1afce7c1.js";import{u as Ye}from"./useWindowSizeFn-6fb3a97e.js";const{t:ae}=se(),Ge={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ae("common.cancelText")},okText:{type:String,default:ae("common.okText")},closeFunc:Function},Q=Object.assign({},Ge,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Je(e){const o=(l,c)=>getComputedStyle(l)[c],a=l=>{if(!l)return;l.setAttribute("data-drag",s(e.draggable));const c=l.querySelector(".ant-modal-header"),t=l.querySelector(".ant-modal");!c||!t||!s(e.draggable)||(c.style.cursor="move",c.onmousedown=n=>{if(!n)return;const d=n.clientX,u=n.clientY,f=document.body.clientWidth,p=document.documentElement.clientHeight,h=t.offsetWidth,C=t.offsetHeight,S=t.offsetLeft,k=f-t.offsetLeft-h,$=t.offsetTop,L=p-t.offsetTop-C,T=o(t,"left"),N=o(t,"top");let D=+T,W=+N;T.includes("%")?(D=+document.body.clientWidth*(+T.replace(/%/g,"")/100),W=+document.body.clientHeight*(+N.replace(/%/g,"")/100)):(D=+T.replace(/px/g,""),W=+N.replace(/px/g,"")),document.onmousemove=function(A){let r=A.clientX-d,F=A.clientY-u;-r>S?r=-S:r>k&&(r=k),-F>$?F=-$:F>L&&(F=L),t.style.cssText+=`;left:${r+D}px;top:${F+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const l=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(l)){if(!c)continue;const t=o(c,"display"),n=c.getAttribute("data-drag");t!=="none"&&(n===null||s(e.destroyOnClose))&&a(c)}};z(()=>{!s(e.visible)||!s(e.draggable)||ve(()=>{i()},30)})}function Ke(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!we(e)}const Qe=R({name:"Modal",inheritAttrs:!1,props:Q,emits:["cancel"],setup(e,{slots:o,emit:a}){const{visible:i,draggable:l,destroyOnClose:c}=Te(e),t=Me();Je({visible:i,destroyOnClose:c,draggable:l});const n=d=>{a("cancel",d)};return()=>{let d;const u=_(v(v({},s(t)),e),{onCancel:n});return M(Le,u,Ke(d=He(o))?d:{default:()=>[d]})}}}),pe=Symbol();function Ze(e){return ke(e,pe)}function St(){return Se(pe)}const xe={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},et=R({name:"ModalWrapper",components:{ScrollContainer:Ue},inheritAttrs:!1,props:xe,emits:["height-change","ext-height"],setup(e,{emit:o}){const a=m(null),i=m(null),l=m(0),c=m(0);let t=0;Ye(u.bind(null,!1)),Fe(i,()=>{u()},{attributes:!0,subtree:!0}),Ze({redoModalHeight:u});const n=H(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${s(l)}px`}));z(()=>{e.useWrapper&&u()}),ue(()=>e.fullScreen,f=>{u(),f?c.value=l.value:l.value=c.value}),Re(()=>{const{modalHeaderHeight:f,modalFooterHeight:p}=e;o("ext-height",f+p)}),de(()=>{});function d(){return I(this,null,function*(){B(()=>{var p;const f=s(a);f&&((p=f==null?void 0:f.scrollTo)==null||p.call(f,0))})})}function u(){return I(this,null,function*(){if(!e.visible)return;const f=s(a);if(!f)return;const p=f.$el.parentElement;if(p){p.style.padding="0",yield B();try{const h=p.parentElement&&p.parentElement.parentElement;if(!h)return;const C=getComputedStyle(h).top,S=Number.parseInt(C);let k=window.innerHeight-S*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;S<40&&(k-=26),yield B();const $=s(i);if(!$)return;yield B(),t=$.scrollHeight,e.fullScreen?l.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:l.value=e.height?e.height:t>k?k:t,o("height-change",s(l))}catch(h){console.log(h)}}})}return{wrapperRef:a,spinRef:i,spinStyle:n,scrollTop:d,setModalHeight:u}}}),tt=["loading-tip"];function nt(e,o,a,i,l,c){const t=y("ScrollContainer"),n=Ne("loading");return b(),P(t,{ref:"wrapperRef"},{default:g(()=>[De((b(),q("div",{ref:"spinRef",style:We(e.spinStyle),"loading-tip":e.loadingTip},[O(e.$slots,"default")],12,tt)),[[n,e.loading]])]),_:3},512)}const ot=j(et,[["render",nt]]),lt=R({name:"ModalClose",components:{Tooltip:Ae,FullscreenExitOutlined:Ie,FullscreenOutlined:Ve,CloseOutlined:qe},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:o}){const{prefixCls:a}=re("basic-modal-close"),{t:i}=se(),l=H(()=>[a,`${a}--custom`,{[`${a}--can-full`]:e.canFullscreen}]);function c(n){o("cancel",n)}function t(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),o("fullscreen")}return{t:i,getClass:l,prefixCls:a,handleCancel:c,handleFullScreen:t}}});function at(e,o,a,i,l,c){const t=y("FullscreenExitOutlined"),n=y("Tooltip"),d=y("FullscreenOutlined"),u=y("CloseOutlined");return b(),q("div",{class:Ee(e.getClass)},[e.canFullscreen?(b(),q(_e,{key:0},[e.fullScreen?(b(),P(n,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:g(()=>[M(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(b(),P(n,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:g(()=>[M(d,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):X("",!0),M(n,{title:e.t("component.modal.close"),placement:"bottom"},{default:g(()=>[M(u,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}const st=j(lt,[["render",at]]),rt=R({name:"BasicModalFooter",props:Q,emits:["ok","cancel"],setup(e,{emit:o}){function a(l){o("ok",l)}function i(l){o("cancel",l)}return{handleOk:a,handleCancel:i}}});function it(e,o,a,i,l,c){const t=y("a-button");return b(),q("div",null,[O(e.$slots,"insertFooter"),e.showCancelBtn?(b(),P(t,E({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:g(()=>[Y(G(e.cancelText),1)]),_:1},16,["onClick"])):X("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(b(),P(t,E({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:g(()=>[Y(G(e.okText),1)]),_:1},16,["type","onClick","loading"])):X("",!0),O(e.$slots,"appendFooter")])}const ct=j(rt,[["render",it]]),ut=R({name:"BasicModalHeader",components:{BasicTitle:Xe},props:{helpMessage:{type:[String,Array]},title:{type:String}}});function dt(e,o,a,i,l,c){const t=y("BasicTitle");return b(),P(t,{helpMessage:e.helpMessage},{default:g(()=>[Y(G(e.title),1)]),_:1},8,["helpMessage"])}const ft=j(ut,[["render",dt]]);function pt(e){const o=m(!1),a=H(()=>{const l=s(e.wrapClassName)||"";return s(o)?`fullscreen-modal ${l} `:s(l)});function i(l){l&&l.stopPropagation(),o.value=!s(o)}return{getWrapClassName:a,handleFullScreen:i,fullScreenRef:o}}const gt=R({name:"BasicModal",components:{Modal:Qe,ModalWrapper:ot,ModalClose:st,ModalFooter:ct,ModalHeader:ft},inheritAttrs:!1,props:Q,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:o,attrs:a}){const i=m(!1),l=m(null),c=m(null),{prefixCls:t}=re("basic-modal"),n=m(0),d={setModalProps:T,emitVisible:void 0,redoModalHeight:()=>{B(()=>{s(c)&&s(c).setModalHeight()})}},u=K();u&&o("register",d,u.uid);const f=H(()=>v(v({},e),s(l))),{handleFullScreen:p,getWrapClassName:h,fullScreenRef:C}=pt({modalWrapperRef:c,extHeightRef:n,wrapClassName:je(f.value,"wrapClassName")}),S=H(()=>{const r=_(v({},s(f)),{visible:s(i),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return _(v({},r),{wrapClassName:s(h)})}),k=H(()=>{const r=_(v(v({},a),s(f)),{visible:s(i)});return r.wrapClassName=`${(r==null?void 0:r.wrapClassName)||""} ${s(h)}`,s(C)?U(r,["height","title"]):U(r,"title")}),$=H(()=>{if(!s(C))return s(S).height});z(()=>{i.value=!!e.visible,C.value=!!e.defaultFullscreen}),ue(()=>s(i),r=>{o("visible-change",r),o("update:visible",r),B(()=>{e.scrollTop&&r&&s(c)&&s(c).scrollTop()})},{immediate:!1});function L(r){return I(this,null,function*(){var F,Z;if(r==null||r.stopPropagation(),!((Z=(F=r.target)==null?void 0:F.classList)!=null&&Z.contains(t+"-close--custom"))){if(e.closeFunc&&ie(e.closeFunc)){const ge=yield e.closeFunc();i.value=!ge;return}i.value=!1,o("cancel",r)}})}function T(r){l.value=$e(s(l)||{},r),Reflect.has(r,"visible")&&(i.value=!!r.visible),Reflect.has(r,"defaultFullscreen")&&(C.value=!!r.defaultFullscreen)}function N(r){o("ok",r)}function D(r){o("height-change",r)}function W(r){n.value=r}function A(r){e.canFullscreen&&(r.stopPropagation(),p(r))}return{handleCancel:L,getBindValue:k,getProps:S,handleFullScreen:p,fullScreenRef:C,getMergeProps:f,handleOk:N,visibleRef:i,omit:U,modalWrapperRef:c,handleExtHeight:W,handleHeightChange:D,handleTitleDbClick:A,getWrapperHeight:$}}});function mt(e,o,a,i,l,c){const t=y("ModalClose"),n=y("ModalHeader"),d=y("ModalFooter"),u=y("ModalWrapper"),f=y("Modal");return b(),P(f,E(e.getBindValue,{onCancel:e.handleCancel}),te({default:g(()=>[M(u,E({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:g(()=>[O(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:g(()=>[M(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]),key:"0"},e.$slots.title?void 0:{name:"title",fn:g(()=>[M(n,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]),key:"1"},e.$slots.footer?void 0:{name:"footer",fn:g(()=>[M(d,E(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),te({_:2},[ne(Object.keys(e.$slots),p=>({name:p,fn:g(h=>[O(e.$slots,p,oe(le(h||{})))])}))]),1040,["onOk","onCancel"])]),key:"2"},ne(Object.keys(e.omit(e.$slots,"default")),p=>({name:p,fn:g(h=>[O(e.$slots,p,oe(le(h||{})))])}))]),1040,["onCancel"])}const ht=j(gt,[["render",mt]]),w=fe({}),J=fe({});function kt(){const e=m(null),o=m(!1),a=m("");function i(t,n){if(!K())throw new Error("useModal() can only be used inside setup() or functional components!");a.value=n,de(()=>{e.value=null,o.value=!1,w[s(a)]=null}),!(s(o)&&Be()&&t===s(e))&&(e.value=t,o.value=!0,t.emitVisible=(d,u)=>{J[u]=d})}const l=()=>{const t=s(e);return t||ce("useModal instance is undefined!"),t},c={setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},getVisible:H(()=>J[~~s(a)]),redoModalHeight:()=>{var t,n;(n=(t=l())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t=!0,n,d=!0)=>{var p;if((p=l())==null||p.setModalProps({visible:t}),!n)return;const u=s(a);if(d){w[u]=null,w[u]=V(n);return}ze(V(w[u]),V(n))||(w[u]=V(n))},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})}};return[i,c]}const Ft=e=>{const o=m(null),a=K(),i=m(""),l=()=>{const t=s(o);return t||ce("useModalInner instance is undefined!"),t},c=(t,n)=>{Oe(()=>{o.value=null}),i.value=n,o.value=t,a==null||a.emit("register",t,n)};return z(()=>{const t=w[s(i)];t&&(!e||!ie(e)||B(()=>{e(t)}))}),[c,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({loading:t})},getVisible:H(()=>J[~~s(i)]),changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({confirmLoading:t})},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})},setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=l())==null?void 0:n.redoModalHeight;t&&t()}}]},$t=Pe(ht);export{$t as B,St as a,Ft as b,kt as u};
