"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[2577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=o(a),m=n,k=g["".concat(d,".").concat(m)]||g[m]||c[m]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},69991:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={id:"IClientObjectManager",title:"IClientObjectManager"},i="Interface IClientObjectManager",p={unversionedId:"reference/Mirage/IClientObjectManager",id:"reference/Mirage/IClientObjectManager",title:"IClientObjectManager",description:"Syntax",source:"@site/docs/reference/Mirage/IClientObjectManager.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/IClientObjectManager",permalink:"/Mirage/docs/reference/Mirage/IClientObjectManager",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/IClientObjectManager.md",tags:[],version:"current",frontMatter:{id:"IClientObjectManager",title:"IClientObjectManager"},sidebar:"api",previous:{title:"IAuthenticatedObject",permalink:"/Mirage/docs/reference/Mirage/IAuthenticatedObject"},next:{title:"IMessageReceiver",permalink:"/Mirage/docs/reference/Mirage/IMessageReceiver"}},d={},o=[{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"GetPrefab(Int32)",id:"getprefabint32",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"RegisterPrefab(NetworkIdentity)",id:"registerprefabnetworkidentity",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"RegisterPrefab(NetworkIdentity, Int32)",id:"registerprefabnetworkidentity-int32",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"RegisterPrefab(NetworkIdentity, SpawnHandlerDelegate, UnSpawnDelegate)",id:"registerprefabnetworkidentity-spawnhandlerdelegate-unspawndelegate",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"UnregisterPrefab(NetworkIdentity)",id:"unregisterprefabnetworkidentity",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"RegisterSpawnHandler(Int32, SpawnHandlerDelegate, UnSpawnDelegate)",id:"registerspawnhandlerint32-spawnhandlerdelegate-unspawndelegate",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"UnregisterSpawnHandler(Int32)",id:"unregisterspawnhandlerint32",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"ClearSpawners()",id:"clearspawners",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"DestroyAllClientObjects()",id:"destroyallclientobjects",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"PrepareToSpawnSceneObjects()",id:"preparetospawnsceneobjects",level:4},{value:"Declaration",id:"declaration-9",level:5}],s={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interface-iclientobjectmanager"},"Interface IClientObjectManager"),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IClientObjectManager\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"getprefabint32"},"GetPrefab(Int32)"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"NetworkIdentity GetPrefab(int prefabHash)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"prefabHash"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"registerprefabnetworkidentity"},"RegisterPrefab(NetworkIdentity)"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void RegisterPrefab(NetworkIdentity identity)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,n.kt)("td",{parentName:"tr",align:null},"identity"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"registerprefabnetworkidentity-int32"},"RegisterPrefab(NetworkIdentity, Int32)"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void RegisterPrefab(NetworkIdentity identity, int newPrefabHash)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,n.kt)("td",{parentName:"tr",align:null},"identity"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"newPrefabHash"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"registerprefabnetworkidentity-spawnhandlerdelegate-unspawndelegate"},"RegisterPrefab(NetworkIdentity, SpawnHandlerDelegate, UnSpawnDelegate)"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void RegisterPrefab(NetworkIdentity identity, SpawnHandlerDelegate spawnHandler, UnSpawnDelegate unspawnHandler)\n")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,n.kt)("td",{parentName:"tr",align:null},"identity"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.SpawnHandlerDelegate"),(0,n.kt)("td",{parentName:"tr",align:null},"spawnHandler"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.UnSpawnDelegate"),(0,n.kt)("td",{parentName:"tr",align:null},"unspawnHandler"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"unregisterprefabnetworkidentity"},"UnregisterPrefab(NetworkIdentity)"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void UnregisterPrefab(NetworkIdentity identity)\n")),(0,n.kt)("h5",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,n.kt)("td",{parentName:"tr",align:null},"identity"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"registerspawnhandlerint32-spawnhandlerdelegate-unspawndelegate"},"RegisterSpawnHandler(Int32, SpawnHandlerDelegate, UnSpawnDelegate)"),(0,n.kt)("h5",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void RegisterSpawnHandler(int prefabHash, SpawnHandlerDelegate spawnHandler, UnSpawnDelegate unspawnHandler)\n")),(0,n.kt)("h5",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"prefabHash"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.SpawnHandlerDelegate"),(0,n.kt)("td",{parentName:"tr",align:null},"spawnHandler"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.UnSpawnDelegate"),(0,n.kt)("td",{parentName:"tr",align:null},"unspawnHandler"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"unregisterspawnhandlerint32"},"UnregisterSpawnHandler(Int32)"),(0,n.kt)("h5",{id:"declaration-6"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void UnregisterSpawnHandler(int prefabHash)\n")),(0,n.kt)("h5",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"prefabHash"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"clearspawners"},"ClearSpawners()"),(0,n.kt)("h5",{id:"declaration-7"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void ClearSpawners()\n")),(0,n.kt)("h4",{id:"destroyallclientobjects"},"DestroyAllClientObjects()"),(0,n.kt)("h5",{id:"declaration-8"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void DestroyAllClientObjects()\n")),(0,n.kt)("h4",{id:"preparetospawnsceneobjects"},"PrepareToSpawnSceneObjects()"),(0,n.kt)("h5",{id:"declaration-9"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void PrepareToSpawnSceneObjects()\n")))}c.isMDXComponent=!0}}]);