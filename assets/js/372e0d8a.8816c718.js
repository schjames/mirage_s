"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>d});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},k=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return r?a.createElement(h,n(n({ref:t},k),{},{components:r})):a.createElement(h,n({ref:t},k))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,n=new Array(l);n[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var c=2;c<l;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(87462),i=(r(67294),r(3905));const l={id:"NetworkProximityChecker",title:"NetworkProximityChecker"},n="Class NetworkProximityChecker",o={unversionedId:"reference/Mirage/NetworkProximityChecker",id:"reference/Mirage/NetworkProximityChecker",title:"NetworkProximityChecker",description:"Component that controls visibility of networked objects for players.",source:"@site/docs/reference/Mirage/NetworkProximityChecker.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkProximityChecker",permalink:"/Mirage/docs/reference/Mirage/NetworkProximityChecker",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/NetworkProximityChecker.md",tags:[],version:"current",frontMatter:{id:"NetworkProximityChecker",title:"NetworkProximityChecker"},sidebar:"api",previous:{title:"NetworkPongMessage",permalink:"/Mirage/docs/reference/Mirage/NetworkPongMessage"},next:{title:"NetworkSceneChecker",permalink:"/Mirage/docs/reference/Mirage/NetworkSceneChecker"}},s={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"VisibilityRange",id:"visibilityrange",level:4},{value:"Declaration",id:"declaration",level:5},{value:"VisibilityUpdateInterval",id:"visibilityupdateinterval",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"ForceHidden",id:"forcehidden",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Methods",id:"methods",level:3},{value:"Awake()",id:"awake",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"OnCheckObserver(INetworkPlayer)",id:"oncheckobserverinetworkplayer",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"OnRebuildObservers(HashSet&lt;INetworkPlayer&gt;, Boolean)",id:"onrebuildobservershashsetinetworkplayer-boolean",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-1",level:5}],k={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-networkproximitychecker"},"Class NetworkProximityChecker"),(0,i.kt)("p",null,"Component that controls visibility of networked objects for players.\nAny object with this component on it will not be visible to players more than a (configurable) distance away."),(0,i.kt)("div",{class:"inheritance"},(0,i.kt)("h5",{id:"inheritance"},"Inheritance"),(0,i.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,i.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.NetworkBehaviour"),(0,i.kt)("div",{class:"level",style:{"--data-index":2}},"Mirage.NetworkVisibility")),(0,i.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Show"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.syncMode"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.syncInterval"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.IsServer"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.IsClient"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalClient"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalPlayer"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.IsServerOnly"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.IsClientOnly"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.HasAuthority"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.NetId"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.Server"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.ServerObjectManager"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.Client"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.ClientObjectManager"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.Owner"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.World"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.NetworkTime"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.BehaviourId"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarDirtyBits"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.syncObjects"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.Identity"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.COMPONENT_INDEX_NOT_FOUND"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.ComponentIndex"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.InitSyncObject(Mirage.Collections.ISyncObject)"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarEqual","<","T",">","(T, T)"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.ClearAllDirtyBits()"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.IsDirty()"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.StillDirty()"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsAll(Mirage.Serialization.NetworkWriter)"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsDelta(Mirage.Serialization.NetworkWriter)"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.GetRpcCount()"),(0,i.kt)("p",null,"Mirage.NetworkBehaviour.RemoteCallCollection")),(0,i.kt)("h5",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkProximityChecker : NetworkVisibility\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"visibilityrange"},"VisibilityRange"),(0,i.kt)("p",null,"The maximim range that objects will be visible at."),(0,i.kt)("h5",{id:"declaration"},"Declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public int VisibilityRange\n")),(0,i.kt)("h4",{id:"visibilityupdateinterval"},"VisibilityUpdateInterval"),(0,i.kt)("p",null,"How often (in seconds) that this object should update the list of observers that can see it."),(0,i.kt)("h5",{id:"declaration-1"},"Declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public float VisibilityUpdateInterval\n")),(0,i.kt)("h4",{id:"forcehidden"},"ForceHidden"),(0,i.kt)("p",null,"Flag to force this object to be hidden for players.\nIf this object is a player object, it will not be hidden for that player."),(0,i.kt)("h5",{id:"declaration-2"},"Declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public bool ForceHidden\n")),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("h4",{id:"awake"},"Awake()"),(0,i.kt)("h5",{id:"declaration-3"},"Declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public void Awake()\n")),(0,i.kt)("h4",{id:"oncheckobserverinetworkplayer"},"OnCheckObserver(INetworkPlayer)"),(0,i.kt)("p",null,"Callback used by the visibility system to determine if an observer (player) can see this object.\nIf this function returns true, the network connection will be added as an observer."),(0,i.kt)("h5",{id:"declaration-4"},"Declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool OnCheckObserver(INetworkPlayer player)\n")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,i.kt)("td",{parentName:"tr",align:null},"player"),(0,i.kt)("td",{parentName:"tr",align:null},"Network connection of a player.")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"True if the player can see this object.")))),(0,i.kt)("h4",{id:"onrebuildobservershashsetinetworkplayer-boolean"},"OnRebuildObservers(HashSet","<","INetworkPlayer",">",", Boolean)"),(0,i.kt)("p",null,"Callback used by the visibility system to (re)construct the set of observers that can see this object.\nImplementations of this callback should add network connections of players that can see this object to the observers set."),(0,i.kt)("h5",{id:"declaration-5"},"Declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public override void OnRebuildObservers(HashSet<INetworkPlayer> observers, bool initialize)\n")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.HashSet","<","Mirage.INetworkPlayer",">"),(0,i.kt)("td",{parentName:"tr",align:null},"observers"),(0,i.kt)("td",{parentName:"tr",align:null},"The new set of observers for this object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"initialize"),(0,i.kt)("td",{parentName:"tr",align:null},"True if the set of observers is being built for the first time.")))))}u.isMDXComponent=!0}}]);