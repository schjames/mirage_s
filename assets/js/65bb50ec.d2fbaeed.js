"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"NetworkWriterPool",title:"NetworkWriterPool"},l="Class NetworkWriterPool",o={unversionedId:"reference/Mirage.Serialization/NetworkWriterPool",id:"reference/Mirage.Serialization/NetworkWriterPool",title:"NetworkWriterPool",description:"Inheritance",source:"@site/docs/reference/Mirage.Serialization/NetworkWriterPool.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/NetworkWriterPool",permalink:"/Mirage/docs/reference/Mirage.Serialization/NetworkWriterPool",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.Serialization/NetworkWriterPool.md",tags:[],version:"current",frontMatter:{id:"NetworkWriterPool",title:"NetworkWriterPool"},sidebar:"api",previous:{title:"NetworkWriter",permalink:"/Mirage/docs/reference/Mirage.Serialization/NetworkWriter"},next:{title:"PackedExtensions",permalink:"/Mirage/docs/reference/Mirage.Serialization/PackedExtensions"}},c={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"BufferSize",id:"buffersize",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Methods",id:"methods",level:3},{value:"Configure(Int32, Int32, Int32)",id:"configureint32-int32-int32",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters",level:5},{value:"GetWriter()",id:"getwriter",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Returns",id:"returns",level:5}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-networkwriterpool"},"Class NetworkWriterPool"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static class NetworkWriterPool\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"buffersize"},"BufferSize"),(0,a.kt)("p",null,"Current Size of buffers, or null before Configure has been called"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static int? BufferSize { get; }\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"configureint32-int32-int32"},"Configure(Int32, Int32, Int32)"),(0,a.kt)("p",null,"Configures an exist pool or creates a new one\nDoes not create a new pool if bufferSize is less that current "),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static void Configure(int bufferSize, int startPoolSize = 5, int maxPoolSize = 100)\n")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"bufferSize"),(0,a.kt)("td",{parentName:"tr",align:null},"starting capacity of buffer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"startPoolSize"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"maxPoolSize"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"getwriter"},"GetWriter()"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static PooledNetworkWriter GetWriter()\n")),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.PooledNetworkWriter"),(0,a.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);