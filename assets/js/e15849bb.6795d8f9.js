"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),s=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?l.createElement(g,o(o({ref:t},p),{},{components:r})):l.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=r(87462),n=(r(67294),r(3905));const a={id:"Mirage.RemoteCalls",title:"Mirage.RemoteCalls"},o="Mirage.RemoteCalls",i={unversionedId:"reference/Mirage.RemoteCalls/Mirage.RemoteCalls",id:"reference/Mirage.RemoteCalls/Mirage.RemoteCalls",title:"Mirage.RemoteCalls",description:"Classes",source:"@site/docs/reference/Mirage.RemoteCalls/index.md",sourceDirName:"reference/Mirage.RemoteCalls",slug:"/reference/Mirage.RemoteCalls/",permalink:"/Mirage/docs/reference/Mirage.RemoteCalls/",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.RemoteCalls/index.md",tags:[],version:"current",frontMatter:{id:"Mirage.RemoteCalls",title:"Mirage.RemoteCalls"},sidebar:"api",previous:{title:"LogSettingsSO",permalink:"/Mirage/docs/reference/Mirage.Logging/LogSettingsSO"},next:{title:"ClientRpcSender",permalink:"/Mirage/docs/reference/Mirage.RemoteCalls/ClientRpcSender"}},c={},s=[{value:"Classes",id:"classes",level:2},{value:"ClientRpcSender",id:"clientrpcsender",level:4},{value:"RemoteCall",id:"remotecall",level:4},{value:"RemoteCallCollection",id:"remotecallcollection",level:4},{value:"ServerRpcSender",id:"serverrpcsender",level:4},{value:"Enums",id:"enums",level:2},{value:"RpcInvokeType",id:"rpcinvoketype",level:4},{value:"Delegates",id:"delegates",level:2},{value:"RequestDelegate&lt;T&gt;",id:"requestdelegatet",level:4},{value:"RpcDelegate",id:"rpcdelegate",level:4}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mirageremotecalls"},"Mirage.RemoteCalls"),(0,n.kt)("h2",{id:"classes"},"Classes"),(0,n.kt)("h4",{id:"clientrpcsender"},(0,n.kt)("a",{parentName:"h4",href:"./ClientRpcSender"},"ClientRpcSender")),(0,n.kt)("h4",{id:"remotecall"},(0,n.kt)("a",{parentName:"h4",href:"./RemoteCall"},"RemoteCall")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Used for invoking a RPC methods")),(0,n.kt)("h4",{id:"remotecallcollection"},(0,n.kt)("a",{parentName:"h4",href:"./RemoteCallCollection"},"RemoteCallCollection")),(0,n.kt)("h4",{id:"serverrpcsender"},(0,n.kt)("a",{parentName:"h4",href:"./ServerRpcSender"},"ServerRpcSender")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Methods used by weaver to send RPCs")),(0,n.kt)("h2",{id:"enums"},"Enums"),(0,n.kt)("h4",{id:"rpcinvoketype"},(0,n.kt)("a",{parentName:"h4",href:"./RpcInvokeType"},"RpcInvokeType")),(0,n.kt)("h2",{id:"delegates"},"Delegates"),(0,n.kt)("h4",{id:"requestdelegatet"},(0,n.kt)("a",{parentName:"h4",href:"./RequestDelegate-1"},"RequestDelegate","<","T",">")),(0,n.kt)("h4",{id:"rpcdelegate"},(0,n.kt)("a",{parentName:"h4",href:"./RpcDelegate"},"RpcDelegate")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Delegate for ServerRpc functions.")))}d.isMDXComponent=!0}}]);