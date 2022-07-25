"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[2214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"ClientRpcAttribute",title:"ClientRpcAttribute"},l="Class ClientRpcAttribute",c={unversionedId:"reference/Mirage/ClientRpcAttribute",id:"reference/Mirage/ClientRpcAttribute",title:"ClientRpcAttribute",description:"The server uses a Remote Procedure Call (RPC) to run this function on specific clients.",source:"@site/docs/reference/Mirage/ClientRpcAttribute.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/ClientRpcAttribute",permalink:"/Mirage/docs/reference/Mirage/ClientRpcAttribute",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/ClientRpcAttribute.md",tags:[],version:"current",frontMatter:{id:"ClientRpcAttribute",title:"ClientRpcAttribute"},sidebar:"api",previous:{title:"ClientObjectManager",permalink:"/Mirage/docs/reference/Mirage/ClientObjectManager"},next:{title:"ClientStoppedReason",permalink:"/Mirage/docs/reference/Mirage/ClientStoppedReason"}},o={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"channel",id:"channel",level:4},{value:"Declaration",id:"declaration",level:5},{value:"target",id:"target",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"excludeOwner",id:"excludeowner",level:4},{value:"Declaration",id:"declaration-2",level:5}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-clientrpcattribute"},"Class ClientRpcAttribute"),(0,a.kt)("p",null,"The server uses a Remote Procedure Call (RPC) to run this function on specific clients.\nNote that if you set the target as Connection, you need to pass a specific connection as a parameter of your method"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,a.kt)("div",{class:"level",style:{"--data-index":1}},"System.Attribute")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[AttributeUsage(AttributeTargets.Method)]\npublic class ClientRpcAttribute : Attribute, _Attribute\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"channel"},"channel"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public int channel\n")),(0,a.kt)("h4",{id:"target"},"target"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public RpcTarget target\n")),(0,a.kt)("h4",{id:"excludeowner"},"excludeOwner"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public bool excludeOwner\n")))}p.isMDXComponent=!0}}]);