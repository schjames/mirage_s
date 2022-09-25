"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>E});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),E=a,u=p["".concat(c,".").concat(E)]||p[E]||v[E]||i;return n?r.createElement(u,s(s({ref:t},d),{},{components:n})):r.createElement(u,s({ref:t},d))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"DisconnectAddLateEvent",title:"DisconnectAddLateEvent"},s="Class DisconnectAddLateEvent",o={unversionedId:"reference/Mirage.Events/DisconnectAddLateEvent",id:"reference/Mirage.Events/DisconnectAddLateEvent",title:"DisconnectAddLateEvent",description:"Event fires from a  when it fails to connect to the server",source:"@site/docs/reference/Mirage.Events/DisconnectAddLateEvent.md",sourceDirName:"reference/Mirage.Events",slug:"/reference/Mirage.Events/DisconnectAddLateEvent",permalink:"/Mirage/docs/reference/Mirage.Events/DisconnectAddLateEvent",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.Events/DisconnectAddLateEvent.md",tags:[],version:"current",frontMatter:{id:"DisconnectAddLateEvent",title:"DisconnectAddLateEvent"},sidebar:"api",previous:{title:"BoolUnityEvent",permalink:"/Mirage/docs/reference/Mirage.Events/BoolUnityEvent"},next:{title:"DisconnectEvent",permalink:"/Mirage/docs/reference/Mirage.Events/DisconnectEvent"}},c={},l=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5}],d={toc:l};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-disconnectaddlateevent"},"Class DisconnectAddLateEvent"),(0,a.kt)("p",null,"Event fires from a  when it fails to connect to the server"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,a.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.Events.AddLateEventBase"),(0,a.kt)("div",{class:"level",style:{"--data-index":2}},"Mirage.Events.AddLateEvent<Mirage.ClientStoppedReason, Mirage.Events.DisconnectEvent>")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show"),(0,a.kt)("p",null,"Mirage.Events.AddLateEvent","<","Mirage.ClientStoppedReason, Mirage.Events.DisconnectEvent",">",".baseEvent"),(0,a.kt)("p",null,"Mirage.Events.AddLateEvent","<","Mirage.ClientStoppedReason, Mirage.Events.DisconnectEvent",">",".AddListener(UnityAction","<","Mirage.ClientStoppedReason",">",")"),(0,a.kt)("p",null,"Mirage.Events.AddLateEvent","<","Mirage.ClientStoppedReason, Mirage.Events.DisconnectEvent",">",".RemoveListener(UnityAction","<","Mirage.ClientStoppedReason",">",")"),(0,a.kt)("p",null,"Mirage.Events.AddLateEvent","<","Mirage.ClientStoppedReason, Mirage.Events.DisconnectEvent",">",".Invoke(Mirage.ClientStoppedReason)"),(0,a.kt)("p",null,"Mirage.Events.AddLateEventBase.baseEvent"),(0,a.kt)("p",null,"Mirage.Events.AddLateEventBase.hasInvoked"),(0,a.kt)("p",null,"Mirage.Events.AddLateEventBase.MarkInvoked()"),(0,a.kt)("p",null,"Mirage.Events.AddLateEventBase.Reset()"),(0,a.kt)("p",null,"Mirage.Events.AddLateEventBase.RemoveAllListeners()")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[Serializable]\npublic class DisconnectAddLateEvent : AddLateEvent<ClientStoppedReason, DisconnectEvent>, IAddLateEvent<ClientStoppedReason>\n")))}v.isMDXComponent=!0}}]);