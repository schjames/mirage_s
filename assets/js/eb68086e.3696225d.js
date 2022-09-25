"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),g=a,f=u["".concat(o,".").concat(g)]||u[g]||d[g]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const c={id:"RpcMessage",title:"RpcMessage"},i="Struct RpcMessage",l={unversionedId:"reference/Mirage/RpcMessage",id:"reference/Mirage/RpcMessage",title:"RpcMessage",description:"Syntax",source:"@site/docs/reference/Mirage/RpcMessage.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/RpcMessage",permalink:"/Mirage/docs/reference/Mirage/RpcMessage",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/RpcMessage.md",tags:[],version:"current",frontMatter:{id:"RpcMessage",title:"RpcMessage"},sidebar:"api",previous:{title:"RemoveCharacterMessage",permalink:"/Mirage/docs/reference/Mirage/RemoveCharacterMessage"},next:{title:"RpcTarget",permalink:"/Mirage/docs/reference/Mirage/RpcTarget"}},o={},s=[{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"netId",id:"netid",level:4},{value:"Declaration",id:"declaration",level:5},{value:"componentIndex",id:"componentindex",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"functionIndex",id:"functionindex",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"payload",id:"payload",level:4},{value:"Declaration",id:"declaration-3",level:5}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-rpcmessage"},"Struct RpcMessage"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public struct RpcMessage\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"netid"},"netId"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public uint netId\n")),(0,a.kt)("h4",{id:"componentindex"},"componentIndex"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public int componentIndex\n")),(0,a.kt)("h4",{id:"functionindex"},"functionIndex"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public int functionIndex\n")),(0,a.kt)("h4",{id:"payload"},"payload"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public ArraySegment<byte> payload\n")))}d.isMDXComponent=!0}}]);