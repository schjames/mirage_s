"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={id:"ShowInInspectorAttribute",title:"ShowInInspectorAttribute"},o="Class ShowInInspectorAttribute",c={unversionedId:"reference/Mirage/ShowInInspectorAttribute",id:"reference/Mirage/ShowInInspectorAttribute",title:"ShowInInspectorAttribute",description:"Used to show private SyncList in the inspector,",source:"@site/docs/reference/Mirage/ShowInInspectorAttribute.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/ShowInInspectorAttribute",permalink:"/Mirage/docs/reference/Mirage/ShowInInspectorAttribute",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/ShowInInspectorAttribute.md",tags:[],version:"current",frontMatter:{id:"ShowInInspectorAttribute",title:"ShowInInspectorAttribute"},sidebar:"api",previous:{title:"ServerRpcWithReplyMessage",permalink:"/Mirage/docs/reference/Mirage/ServerRpcWithReplyMessage"},next:{title:"SpawnEvent",permalink:"/Mirage/docs/reference/Mirage/SpawnEvent"}},s={},l=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-showininspectorattribute"},"Class ShowInInspectorAttribute"),(0,i.kt)("p",null,"Used to show private SyncList in the inspector,\nUse instead of SerializeField for non Serializable types "),(0,i.kt)("div",{class:"inheritance"},(0,i.kt)("h5",{id:"inheritance"},"Inheritance"),(0,i.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,i.kt)("div",{class:"level",style:{"--data-index":1}},"System.Attribute")),(0,i.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Show")),(0,i.kt)("h5",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[AttributeUsage(AttributeTargets.Field)]\npublic sealed class ShowInInspectorAttribute : Attribute, _Attribute\n")))}u.isMDXComponent=!0}}]);