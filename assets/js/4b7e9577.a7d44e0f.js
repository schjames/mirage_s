"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,c(c({ref:t},h),{},{components:n})):r.createElement(b,c({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},c="Network Scene Checker",s={unversionedId:"components/network-scene-checker",id:"components/network-scene-checker",title:"Network Scene Checker",description:"The Network Scene Checker component controls the visibility of game objects for network clients, based on which scene they're in.",source:"@site/docs/components/network-scene-checker.md",sourceDirName:"components",slug:"/components/network-scene-checker",permalink:"/Mirage/docs/components/network-scene-checker",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/components/network-scene-checker.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Network Room Player",permalink:"/Mirage/docs/components/network-room-player"},next:{title:"Network Scene Manager",permalink:"/Mirage/docs/components/network-scene-manager"}},i={},l=[{value:"Use with Additive Scenes",id:"use-with-additive-scenes",level:2}],h={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-scene-checker"},"Network Scene Checker"),(0,a.kt)("p",null,"The Network Scene Checker component controls the visibility of game objects for network clients, based on which scene they're in."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Network Scene Checker component",src:n(3944).Z,width:"483",height:"56"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Force Hidden"),(0,a.kt)("br",{parentName:"li"}),"Tick this checkbox to hide this object from all players.")),(0,a.kt)("p",null,"With the Network Scene Checker, a game running on a client doesn\u2019t have information about game objects that are not visible. This has two main benefits: it reduces the amount of data sent across the network, and it makes your game more secure against hacking."),(0,a.kt)("p",null,"This component would typically be used when the server has several sub-scenes loaded and needs to isolate networked objects to the sub-scene they're in."),(0,a.kt)("p",null,"A game object with a Network Scene Checker component must also have a Network Identity component. When you create a Network Scene Checker component on a game object, Mirage also creates a Network Identity component on that game object if it does not already have one."),(0,a.kt)("p",null,"Scene objects with a Network Scene Checker component are disabled when they're not in the same scene, and spawned objects are destroyed when they're not in the same scene."),(0,a.kt)("h2",{id:"use-with-additive-scenes"},"Use with Additive Scenes"),(0,a.kt)("p",null,"In Mirage, the Server and connected Clients are always on the same main scene, however, the server and clients can have various combinations of smaller sub-scenes loaded additively. The server may load all sub-scenes at start, or it may dynamically load and unload sub-scenes where players or other activity is going on as needed."),(0,a.kt)("p",null,"All character objects are always first spawned in the main scene, which may or may not have visual content, networked objects, etc. With this component attached to all networked objects, whenever the character object is moved to a sub-scene (from the main or another sub-scene), the observer's lists for objects in both the new scene and the prior scene are updated accordingly."),(0,a.kt)("p",null,"Loading the sub-scene(s) on the server is through the normal process with ",(0,a.kt)("inlineCode",{parentName:"p"},"SceneManager"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"SceneManager.LoadSceneAsync(subScene, LoadSceneMode.Additive);\n")),(0,a.kt)("p",null,"Next, you will send a ",(0,a.kt)("inlineCode",{parentName:"p"},"SceneMessage")," to the client telling it to load a sub-scene additively:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"SceneMessage msg = new SceneMessage\n{\n    sceneName = subScene,\n    sceneOperation = SceneOperation.LoadAdditive\n};\n\nOwner.Send(msg);\n")),(0,a.kt)("p",null,"Then, on the server only, you just move the character object to the sub-scene:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"// Position the character object in world space first\n// This assumes it has a NetworkTransform component that will update clients\nplayer.transform.position = new Vector3(100, 1, 100);\n\n// Then move the character object to the subscene\nSceneManager.MoveGameObjectToScene(player, subScene);\n")),(0,a.kt)("p",null,"Optionally you can send another ",(0,a.kt)("inlineCode",{parentName:"p"},"SceneMessage")," to the client with ",(0,a.kt)("inlineCode",{parentName:"p"},"SceneOperation.UnloadAdditive")," to remove any previous additive scene the client no longer needs.  This would apply to a game that has levels after a level change. A short delay may be necessary before removal to allow the client to get fully synced."),(0,a.kt)("p",null,"Depending on the complexity of your game, you may find it helpful when switching a player between sub-scenes to move the character object to the main scene first, yield 100 ms, re-position it, and finally move it to the new sub-scene."))}d.isMDXComponent=!0},3944:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);