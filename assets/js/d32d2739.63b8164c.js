"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},s="Network Scene Manager",c={unversionedId:"components/network-scene-manager",id:"components/network-scene-manager",title:"Network Scene Manager",description:"The Network Scene Manager component controls the Unity Scenes running over the network.",source:"@site/docs/components/network-scene-manager.md",sourceDirName:"components",slug:"/components/network-scene-manager",permalink:"/Mirage/docs/components/network-scene-manager",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/components/network-scene-manager.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Network Scene Checker",permalink:"/Mirage/docs/components/network-scene-checker"},next:{title:"Network Start Position",permalink:"/Mirage/docs/components/network-start-position"}},i={},l=[{value:"How does it work",id:"how-does-it-work",level:2},{value:"How do I change scenes",id:"how-do-i-change-scenes",level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-scene-manager"},"Network Scene Manager"),(0,o.kt)("p",null,"The Network Scene Manager component controls the Unity Scenes running over the network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Network Scene Checker component",src:n(69957).Z,width:"672",height:"477"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client Change Scene"),(0,o.kt)("br",{parentName:"li"}),"The event that fires before the client changes scenes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client Changed Scene"),(0,o.kt)("br",{parentName:"li"}),"The event that fires after the client changes scenes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server Change Scene"),(0,o.kt)("br",{parentName:"li"}),"The event that fires before the server changes scenes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server Changed Scene"),(0,o.kt)("br",{parentName:"li"}),"The event that fires after the server changes scenes.")),(0,o.kt)("p",null,"The Network Scene Manager allows the user to change network scenes during runtime. There are three types of scene changes broadly supported by Mirage: Normal, Additive Load, and Additive Unload."),(0,o.kt)("p",null,"Normal: In a Normal scene change all currently loaded assets are unspawned and unloaded. The new scene is loaded and set active. Then all of the scene or instance network objects can be spawned. Under this operation, the client waits for the server to finish before spawning starts to prevent any race conditions."),(0,o.kt)("p",null,"Additive Load: The specified scene will be loaded on the Server and Client in addition to the currently active network scene."),(0,o.kt)("p",null,"Additive Unload: Unload a previously loaded additive scene from the Server and Client."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,o.kt)("p",null,"When the NetworkServer starts it assumes the initial scene is the one you plan on running the network on. If this is not correct you can either change scenes before starting the network or after. The order on the server will likely only matter to you if you are running in Host mode."),(0,o.kt)("p",null,"Once a NetworkClient connects and passes authentication the NetworkServer will send a message notifying them of the currently active scene and any additive scenes they should load. Once that task is complete then the server will start spawning network objects on the NetworkClient."),(0,o.kt)("h2",{id:"how-do-i-change-scenes"},"How do I change scenes"),(0,o.kt)("p",null,"If the scene change involves network objects then it is strongly recommended to make any scene changes via the NetworkSceneManager. Doing so via Unity's SceneManager directly may function but give undesired results with network objects."),(0,o.kt)("p",null,"To do a network scene change you initiate the process via the server NetworkSceneManager via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'sceneManager.ChangeServerScene("Assets/GameScene.unity");\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You don't have to provide the full scene path when initiating a scene change. But the 'NetworkSceneName' will be saved as the full path.")))}d.isMDXComponent=!0},69957:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/NetworkSceneManager-7d9b531c9491d703c5640cd4edcaaa5e.png"}}]);