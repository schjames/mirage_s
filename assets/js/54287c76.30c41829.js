"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||v[u]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={id:"AddLateEventBase",title:"AddLateEventBase"},i="Class AddLateEventBase",o={unversionedId:"reference/Mirage.Events/AddLateEventBase",id:"reference/Mirage.Events/AddLateEventBase",title:"AddLateEventBase",description:"Inheritance",source:"@site/docs/reference/Mirage.Events/AddLateEventBase.md",sourceDirName:"reference/Mirage.Events",slug:"/reference/Mirage.Events/AddLateEventBase",permalink:"/Mirage/docs/reference/Mirage.Events/AddLateEventBase",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.Events/AddLateEventBase.md",tags:[],version:"current",frontMatter:{id:"AddLateEventBase",title:"AddLateEventBase"},sidebar:"api",previous:{title:"AddLateEvent",permalink:"/Mirage/docs/reference/Mirage.Events/AddLateEvent"},next:{title:"BoolAddLateEvent",permalink:"/Mirage/docs/reference/Mirage.Events/BoolAddLateEvent"}},s={},d=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"baseEvent",id:"baseevent",level:4},{value:"Declaration",id:"declaration",level:5},{value:"hasInvoked",id:"hasinvoked",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Methods",id:"methods",level:3},{value:"MarkInvoked()",id:"markinvoked",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Reset()",id:"reset",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"RemoveAllListeners()",id:"removealllisteners",level:4},{value:"Declaration",id:"declaration-4",level:5}],c={toc:d};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-addlateeventbase"},"Class AddLateEventBase"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract class AddLateEventBase\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"baseevent"},"baseEvent"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"protected abstract UnityEventBase baseEvent { get; }\n")),(0,a.kt)("h4",{id:"hasinvoked"},"hasInvoked"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"protected bool hasInvoked { get; }\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"markinvoked"},"MarkInvoked()"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"protected void MarkInvoked()\n")),(0,a.kt)("h4",{id:"reset"},"Reset()"),(0,a.kt)("p",null,"Resets invoked flag, meaning new handles wont be invoked untill invoke is called again\nReset does not remove listeners"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public void Reset()\n")),(0,a.kt)("h4",{id:"removealllisteners"},"RemoveAllListeners()"),(0,a.kt)("p",null,"Remove all non-persisent (ie created from script) listeners from the event."),(0,a.kt)("h5",{id:"declaration-4"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveAllListeners()\n")))}v.isMDXComponent=!0}}]);