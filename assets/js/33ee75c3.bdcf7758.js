"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,y=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"IObjectLocator",title:"IObjectLocator"},o="Interface IObjectLocator",l={unversionedId:"reference/Mirage/IObjectLocator",id:"reference/Mirage/IObjectLocator",title:"IObjectLocator",description:"An object that implements this interface can find objects by their net id",source:"@site/docs/reference/Mirage/IObjectLocator.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/IObjectLocator",permalink:"/Mirage/docs/reference/Mirage/IObjectLocator",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/IObjectLocator.md",tags:[],version:"current",frontMatter:{id:"IObjectLocator",title:"IObjectLocator"},sidebar:"api",previous:{title:"INetworkPlayer",permalink:"/Mirage/docs/reference/Mirage/INetworkPlayer"},next:{title:"IObjectOwner",permalink:"/Mirage/docs/reference/Mirage/IObjectOwner"}},c={},d=[{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"TryGetIdentity(UInt32, out NetworkIdentity)",id:"trygetidentityuint32-out-networkidentity",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-iobjectlocator"},"Interface IObjectLocator"),(0,a.kt)("p",null,"An object that implements this interface can find objects by their net id\nThis is used by readers when trying to deserialize gameobjects"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IObjectLocator\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"trygetidentityuint32-out-networkidentity"},"TryGetIdentity(UInt32, out NetworkIdentity)"),(0,a.kt)("p",null,"Finds a network identity by id"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"bool TryGetIdentity(uint netId, out NetworkIdentity identity)\n")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.UInt32"),(0,a.kt)("td",{parentName:"tr",align:null},"netId"),(0,a.kt)("td",{parentName:"tr",align:null},"the id of the object to find")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"identity"),(0,a.kt)("td",{parentName:"tr",align:null},"The NetworkIdentity matching the netId or null if none is found")))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"true if identity is found and is not null")))))}p.isMDXComponent=!0}}]);