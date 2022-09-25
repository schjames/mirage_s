"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8905],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=u(r),p=a,v=k["".concat(c,".").concat(p)]||k[p]||s[p]||l;return r?i.createElement(v,n(n({ref:t},d),{},{components:r})):i.createElement(v,n({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,n=new Array(l);n[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,n[1]=o;for(var u=2;u<l;u++)n[u]=r[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}k.displayName="MDXCreateElement"},29151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=r(87462),a=(r(67294),r(3905));const l={id:"NetworkRigidbody",title:"NetworkRigidbody"},n="Class NetworkRigidbody",o={unversionedId:"reference/Mirage.Experimental/NetworkRigidbody",id:"reference/Mirage.Experimental/NetworkRigidbody",title:"NetworkRigidbody",description:"Inheritance",source:"@site/docs/reference/Mirage.Experimental/NetworkRigidbody.md",sourceDirName:"reference/Mirage.Experimental",slug:"/reference/Mirage.Experimental/NetworkRigidbody",permalink:"/Mirage/docs/reference/Mirage.Experimental/NetworkRigidbody",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.Experimental/NetworkRigidbody.md",tags:[],version:"current",frontMatter:{id:"NetworkRigidbody",title:"NetworkRigidbody"},sidebar:"api",previous:{title:"NetworkRigidbody.ClientSyncState",permalink:"/Mirage/docs/reference/Mirage.Experimental/NetworkRigidbody.ClientSyncState"},next:{title:"NetworkTransform",permalink:"/Mirage/docs/reference/Mirage.Experimental/NetworkTransform"}},c={},u=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"target",id:"target",level:4},{value:"Declaration",id:"declaration",level:5},{value:"clientAuthority",id:"clientauthority",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"syncVelocity",id:"syncvelocity",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"clearVelocity",id:"clearvelocity",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"velocitySensitivity",id:"velocitysensitivity",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"syncAngularVelocity",id:"syncangularvelocity",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"clearAngularVelocity",id:"clearangularvelocity",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"angularVelocitySensitivity",id:"angularvelocitysensitivity",level:4},{value:"Declaration",id:"declaration-7",level:5}],d={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-networkrigidbody"},"Class NetworkRigidbody"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,a.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.NetworkBehaviour")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.syncMode"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.syncInterval"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.IsServer"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.IsClient"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalClient"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalPlayer"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.IsServerOnly"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.IsClientOnly"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.HasAuthority"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.NetId"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.Server"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.ServerObjectManager"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.Client"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.ClientObjectManager"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.Owner"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.World"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.NetworkTime"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.BehaviourId"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarDirtyBits"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.syncObjects"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.Identity"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.COMPONENT_INDEX_NOT_FOUND"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.ComponentIndex"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.InitSyncObject(Mirage.Collections.ISyncObject)"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarEqual","<","T",">","(T, T)"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.ClearAllDirtyBits()"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.IsDirty()"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.StillDirty()"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsAll(Mirage.Serialization.NetworkWriter)"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsDelta(Mirage.Serialization.NetworkWriter)"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.GetRpcCount()"),(0,a.kt)("p",null,"Mirage.NetworkBehaviour.RemoteCallCollection")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkRigidbody : NetworkBehaviour\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"target"},"target"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public Rigidbody target\n")),(0,a.kt)("h4",{id:"clientauthority"},"clientAuthority"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public bool clientAuthority\n")),(0,a.kt)("h4",{id:"syncvelocity"},"syncVelocity"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public bool syncVelocity\n")),(0,a.kt)("h4",{id:"clearvelocity"},"clearVelocity"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public bool clearVelocity\n")),(0,a.kt)("h4",{id:"velocitysensitivity"},"velocitySensitivity"),(0,a.kt)("h5",{id:"declaration-4"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public float velocitySensitivity\n")),(0,a.kt)("h4",{id:"syncangularvelocity"},"syncAngularVelocity"),(0,a.kt)("h5",{id:"declaration-5"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public bool syncAngularVelocity\n")),(0,a.kt)("h4",{id:"clearangularvelocity"},"clearAngularVelocity"),(0,a.kt)("h5",{id:"declaration-6"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public bool clearAngularVelocity\n")),(0,a.kt)("h4",{id:"angularvelocitysensitivity"},"angularVelocitySensitivity"),(0,a.kt)("h5",{id:"declaration-7"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public float angularVelocitySensitivity\n")))}s.isMDXComponent=!0}}]);