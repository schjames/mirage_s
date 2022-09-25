"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7366],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),v=s(t),y=a,d=v["".concat(l,".").concat(y)]||v[y]||p[y]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},66327:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={id:"NetworkBehaviorSyncvar",title:"NetworkBehaviorSyncvar"},i="Struct NetworkBehaviorSyncvar",c={unversionedId:"reference/Mirage/NetworkBehaviorSyncvar",id:"reference/Mirage/NetworkBehaviorSyncvar",title:"NetworkBehaviorSyncvar",description:"backing struct for a NetworkIdentity when used as a syncvar",source:"@site/docs/reference/Mirage/NetworkBehaviorSyncvar.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkBehaviorSyncvar",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviorSyncvar",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/NetworkBehaviorSyncvar.md",tags:[],version:"current",frontMatter:{id:"NetworkBehaviorSyncvar",title:"NetworkBehaviorSyncvar"},sidebar:"api",previous:{title:"NetworkBehaviorSerializers",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviorSerializers"},next:{title:"NetworkBehaviour.Id",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviour.Id"}},l={},s=[{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"Value",id:"value",level:4},{value:"Declaration",id:"declaration",level:5}],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-networkbehaviorsyncvar"},"Struct NetworkBehaviorSyncvar"),(0,a.kt)("p",null,"backing struct for a NetworkIdentity when used as a syncvar\nthe weaver will replace the syncvar with this struct."),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public struct NetworkBehaviorSyncvar\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"value"},"Value"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkBehaviour Value { get; set; }\n")))}p.isMDXComponent=!0}}]);