"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(m,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="Network Room Manager",i={unversionedId:"components/network-room-manager",id:"components/network-room-manager",title:"Network Room Manager",description:"Please see the Room example in the Examples folder in your Mirage folder",source:"@site/docs/components/network-room-manager.md",sourceDirName:"components",slug:"/components/network-room-manager",permalink:"/Mirage/docs/components/network-room-manager",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/components/network-room-manager.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Network Rigidbody",permalink:"/Mirage/docs/components/network-rigidbody"},next:{title:"Network Room Player",permalink:"/Mirage/docs/components/network-room-player"}},m={},p=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Server Virtual Methods",id:"server-virtual-methods",level:3},{value:"Client Virtual Methods",id:"client-virtual-methods",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-room-manager"},"Network Room Manager"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please see the Room example in the Examples folder in your Mirage folder")),(0,o.kt)("p",null,"The Network Room Manager is a specialized type of ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/network-manager"},"Network Manager")," that provides a multiplayer room before entering the main play scene of the game. It allows you to set up a network with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A maximum player limit"),(0,o.kt)("li",{parentName:"ul"},"Automatic start when all players are ready"),(0,o.kt)("li",{parentName:"ul"},"Option to prevent players from joining a game in progress"),(0,o.kt)("li",{parentName:"ul"},"Customizable ways for players to choose options while in the room \xa0")),(0,o.kt)("p",null,"There are two types of character objects with the Network Room Manager:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Room Player Prefab")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One for each player"),(0,o.kt)("li",{parentName:"ul"},"Created when client connects, or player is added"),(0,o.kt)("li",{parentName:"ul"},"Persists until client disconnects"),(0,o.kt)("li",{parentName:"ul"},"Holds ready flag and configuration data"),(0,o.kt)("li",{parentName:"ul"},"Handles commands in the room"),(0,o.kt)("li",{parentName:"ul"},"Must use the ",(0,o.kt)("a",{parentName:"li",href:"/docs/components/network-room-player"},"Network Room Player")," component")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Player Prefab")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One for each player"),(0,o.kt)("li",{parentName:"ul"},"Created when game scene is started"),(0,o.kt)("li",{parentName:"ul"},"Destroyed when leaving game scene"),(0,o.kt)("li",{parentName:"ul"},"Handles commands in the game \xa0")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Network Room Manager",src:n(82578).Z,width:"555",height:"946"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Show Room GUI"),(0,o.kt)("br",{parentName:"li"}),"Show the default OnGUI controls for the room."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Min Players"),(0,o.kt)("br",{parentName:"li"}),"Minimum number of players needed to start a game."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Room Player Prefab"),(0,o.kt)("br",{parentName:"li"}),"The prefab to create for players when they enter the room (requires Network Room Player component)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Room Scene"),(0,o.kt)("br",{parentName:"li"}),"The scene to use for the room."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Gameplay Scene"),(0,o.kt)("br",{parentName:"li"}),"The scene to use for main game play."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"pendingPlayers"),(0,o.kt)("br",{parentName:"li"}),"List\\<PendingPlayer",">"," that holds players that are ready to start playing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"roomSlots"),(0,o.kt)("br",{parentName:"li"}),"List\\<NetworkRoomPlayer",">"," that manages the slots for connected clients in the room."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allPlayersReady"),(0,o.kt)("br",{parentName:"li"}),"Bool indicating if all players are ready to start playing.  This value changes as players invoke ",(0,o.kt)("inlineCode",{parentName:"li"},"CmdChangeReadyState")," indicating true or false, and will be set false when a new client connects.")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"server-virtual-methods"},"Server Virtual Methods"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public virtual void OnRoomStartHost() {}\n\npublic virtual void OnRoomStopHost() {}\n\npublic virtual void OnRoomStartServer() {}\n\npublic virtual void OnRoomServerConnect(NetworkConnection conn) {}\n\npublic virtual void OnRoomServerDisconnect(NetworkConnection conn) {}\n\npublic virtual void OnRoomServerSceneChanged(string sceneName) {}\n\npublic virtual GameObject OnRoomServerCreateRoomPlayer(NetworkConnection conn)\n{\n    return null;\n}\n\npublic virtual GameObject OnRoomServerCreateGamePlayer(NetworkConnection conn)\n{\n    return null;\n}\n\npublic virtual bool OnRoomServerSceneLoadedForPlayer(GameObject roomPlayer, GameObject gamePlayer)\n{\n    return true;\n}\n\npublic virtual void OnRoomServerPlayersReady()\n{\n    ServerChangeScene(GameplayScene);\n}\n")),(0,o.kt)("h3",{id:"client-virtual-methods"},"Client Virtual Methods"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public virtual void OnRoomClientEnter() {}\n\npublic virtual void OnRoomClientExit() {}\n\npublic virtual void OnRoomClientConnect(NetworkConnection conn) {}\n\npublic virtual void OnRoomClientDisconnect(NetworkConnection conn) {}\n\npublic virtual void OnRoomStartClient() {}\n\npublic virtual void OnRoomStopClient() {}\n\npublic virtual void OnRoomClientSceneChanged(NetworkConnection conn) {}\n\npublic virtual void OnRoomClientAddPlayerFailed() {}\n")))}s.isMDXComponent=!0},82578:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/NetworkRoomManager-4d0e6adc620e71de5cba45bc1a9cd58e.png"}}]);