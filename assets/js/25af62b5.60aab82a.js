"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[6553],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,v=u["".concat(o,".").concat(g)]||u[g]||d[g]||c;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=u;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<c;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24503:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const c={id:"ServerRpcMessage",title:"ServerRpcMessage"},i="Struct ServerRpcMessage",l={unversionedId:"reference/Mirage/ServerRpcMessage",id:"reference/Mirage/ServerRpcMessage",title:"ServerRpcMessage",description:"Syntax",source:"@site/docs/reference/Mirage/ServerRpcMessage.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/ServerRpcMessage",permalink:"/Mirage/docs/reference/Mirage/ServerRpcMessage",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/ServerRpcMessage.md",tags:[],version:"current",frontMatter:{id:"ServerRpcMessage",title:"ServerRpcMessage"},sidebar:"api",previous:{title:"ServerRpcAttribute",permalink:"/Mirage/docs/reference/Mirage/ServerRpcAttribute"},next:{title:"ServerRpcReply",permalink:"/Mirage/docs/reference/Mirage/ServerRpcReply"}},o={},p=[{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"netId",id:"netid",level:4},{value:"Declaration",id:"declaration",level:5},{value:"componentIndex",id:"componentindex",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"functionIndex",id:"functionindex",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"payload",id:"payload",level:4},{value:"Declaration",id:"declaration-3",level:5}],s={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-serverrpcmessage"},"Struct ServerRpcMessage"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public struct ServerRpcMessage\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"netid"},"netId"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public uint netId\n")),(0,a.kt)("h4",{id:"componentindex"},"componentIndex"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public int componentIndex\n")),(0,a.kt)("h4",{id:"functionindex"},"functionIndex"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public int functionIndex\n")),(0,a.kt)("h4",{id:"payload"},"payload"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public ArraySegment<byte> payload\n")))}d.isMDXComponent=!0}}]);