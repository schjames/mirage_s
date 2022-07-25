"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[2246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||l[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:8},r="Pickups, Drops, and Child Objects",p={unversionedId:"guides/game-objects/pickup-drop-child",id:"guides/game-objects/pickup-drop-child",title:"Pickups, Drops, and Child Objects",description:"Frequently the question comes up about how to handle objects that are attached as children of the player prefab that all clients need to know about and synchronize, such as which weapon is equipped, picking up networked scene objects, and players dropping objects into the scene.",source:"@site/docs/guides/game-objects/pickup-drop-child.md",sourceDirName:"guides/game-objects",slug:"/guides/game-objects/pickup-drop-child",permalink:"/Mirage/docs/guides/game-objects/pickup-drop-child",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/guides/game-objects/pickup-drop-child.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docs",previous:{title:"Scene Objects",permalink:"/Mirage/docs/guides/game-objects/scene-objects"},next:{title:"Loading scenes in Mirage",permalink:"/Mirage/docs/guides/scene-loading/"}},c={},s=[{value:"Child Objects",id:"child-objects",level:2},{value:"Dropping Items",id:"dropping-items",level:2},{value:"Pickup Items",id:"pickup-items",level:2}],d={toc:s};function l(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pickups-drops-and-child-objects"},"Pickups, Drops, and Child Objects"),(0,i.kt)("p",null,"Frequently the question comes up about how to handle objects that are attached as children of the player prefab that all clients need to know about and synchronize, such as which weapon is equipped, picking up networked scene objects, and players dropping objects into the scene."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Mirage cannot support multiple Network Identity components within an object hierarchy. Since the character object must have a Network Identity, none of its descendant objects can have one.")),(0,i.kt)("h2",{id:"child-objects"},"Child Objects"),(0,i.kt)("p",null,"Let's start with the simple case of a single attachment point that is somewhere down the hierarchy of our Player, such as a hand at the end of an arm. In a script that inherits from NetworkBehaviour on the Player Prefab, we'd have a ",(0,i.kt)("inlineCode",{parentName:"p"},"GameObject")," reference where the attachment point can be assigned in the inspector, a SyncVar enum with various choices of what the player is holding, and a Hook for the SyncVar to swap out the art of the held item based on the new value."),(0,i.kt)("p",null,"In the image below, Kyle has an empty game object, ",(0,i.kt)("inlineCode",{parentName:"p"},"RightHand"),", added to the wrist, and some prefabs to be equipped (Ball, Box, Cylinder), and a Player Equip script to handle them."),(0,i.kt)("p",null,"The inspector shows ",(0,i.kt)("inlineCode",{parentName:"p"},"RightHand")," assigned in 2 places, the Player Equip script, as well as the target of the Network Transform Child component, so we could adjust the relative position of the attachment point (not the art) for all clients as needed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of Player with Equip Script",src:n(30536).Z,width:"1218",height:"725"})),(0,i.kt)("p",null,"Below is the Player Equip script to handle the changing of the equipped item, and some notes for consideration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"While we could just have all the art items attached at design time and just enable/disable them based on the enum, this doesn't scale well to a lot of items and if they have scripts on them for how they behave in the game, such as animations, special effects, etc. it could get ugly pretty fast, so this example locally instantiates and destroys instead as a design choice."),(0,i.kt)("li",{parentName:"ul"},"The example makes no effort to deal with position offset between the item and the attach point, e.g. having the grip or handle of an item aligns with the hand. This is best dealt with in a MonoBehaviour script on the item that has public fields for the local position and rotation that can be set in the designer and a bit of code in Start to apply those values in local coordinates relative to the parent attach point.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using UnityEngine;\nusing System.Collections;\nusing Mirage;\n\npublic enum EquippedItem : byte\n{\n    nothing,\n    ball,\n    box,\n    cylinder\n}\n\npublic class PlayerEquip : NetworkBehaviour\n{\n    public GameObject sceneObjectPrefab;\n\n    public GameObject rightHand;\n\n    public GameObject ballPrefab;\n    public GameObject boxPrefab;\n    public GameObject cylinderPrefab;\n\n    [SyncVar(hook = nameof(OnChangeEquipment))]\n    public EquippedItem equippedItem;\n\n    void OnChangeEquipment(EquippedItem oldEquippedItem, EquippedItem newEquippedItem)\n    {\n        StartCoroutine(ChangeEquipment(newEquippedItem));\n    }\n\n    // Since Destroy is delayed to the end of the current frame, we use a coroutine\n    // to clear out any child objects before instantiating the new one\n    IEnumerator ChangeEquipment(EquippedItem newEquippedItem)\n    {\n        while (rightHand.transform.childCount > 0)\n        {\n            Destroy(rightHand.transform.GetChild(0).gameObject);\n            yield return null;\n        }\n\n        switch (newEquippedItem)\n        {\n            case EquippedItem.ball:\n                Instantiate(ballPrefab, rightHand.transform);\n                break;\n            case EquippedItem.box:\n                Instantiate(boxPrefab, rightHand.transform);\n                break;\n            case EquippedItem.cylinder:\n                Instantiate(cylinderPrefab, rightHand.transform);\n                break;\n        }\n    }\n\n    void Update()\n    {\n        if (!IsLocalPlayer) return;\n\n        if (Input.GetKeyDown(KeyCode.Alpha0) && equippedItem != EquippedItem.nothing)\n            CmdChangeEquippedItem(EquippedItem.nothing);\n        if (Input.GetKeyDown(KeyCode.Alpha1) && equippedItem != EquippedItem.ball)\n            CmdChangeEquippedItem(EquippedItem.ball);\n        if (Input.GetKeyDown(KeyCode.Alpha2) && equippedItem != EquippedItem.box)\n            CmdChangeEquippedItem(EquippedItem.box);\n        if (Input.GetKeyDown(KeyCode.Alpha3) && equippedItem != EquippedItem.cylinder)\n            CmdChangeEquippedItem(EquippedItem.cylinder);\n    }\n\n    [ServerRpc]\n    void CmdChangeEquippedItem(EquippedItem selectedItem)\n    {\n        equippedItem = selectedItem;\n    }\n}\n")),(0,i.kt)("h2",{id:"dropping-items"},"Dropping Items"),(0,i.kt)("p",null,"Now that we can equip the items, we need a way to drop the current item into the world as a networked item. Remember that, as child art, the item prefabs have no networking components on them at all."),(0,i.kt)("p",null,"First, let's add one more Input to the Update method above and a ",(0,i.kt)("inlineCode",{parentName:"p"},"CmdDropItem")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"void Update()\n{\n    if (!IsLocalPlayer) return;\n\n    if (Input.GetKeyDown(KeyCode.Alpha0) && equippedItem != EquippedItem.nothing)\n        CmdChangeEquippedItem(EquippedItem.nothing);\n    if (Input.GetKeyDown(KeyCode.Alpha1) && equippedItem != EquippedItem.ball)\n        CmdChangeEquippedItem(EquippedItem.ball);\n    if (Input.GetKeyDown(KeyCode.Alpha2) && equippedItem != EquippedItem.box)\n        CmdChangeEquippedItem(EquippedItem.box);\n    if (Input.GetKeyDown(KeyCode.Alpha3) && equippedItem != EquippedItem.cylinder)\n        CmdChangeEquippedItem(EquippedItem.cylinder);\n\n    if (Input.GetKeyDown(KeyCode.X) && equippedItem != EquippedItem.nothing)\n        CmdDropItem();\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[ServerRpc]\nvoid CmdDropItem()\n{\n    // Instantiate the scene object on the server\n    Vector3 pos = rightHand.transform.position;\n    Quaternion rot = rightHand.transform.rotation;\n    GameObject newSceneObject = Instantiate(sceneObjectPrefab, pos, rot);\n\n    // set the RigidBody as non-kinematic on the server only (isKinematic = true in prefab)\n    newSceneObject.GetComponent<Rigidbody>().isKinematic = false;\n\n    SceneObject sceneObject = newSceneObject.GetComponent<SceneObject>();\n\n    // set the child object on the server\n    sceneObject.SetEquippedItem(equippedItem);\n\n    // set the SyncVar on the scene object for clients\n    sceneObject.equippedItem = equippedItem;\n\n    // set the player's SyncVar to nothing so clients will destroy the equipped child item\n    equippedItem = EquippedItem.nothing;\n\n    // Spawn the scene object on the network for all to see\n    ServerObjectManager.Spawn(newSceneObject);\n}\n")),(0,i.kt)("p",null,"In the image above, there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneObjectPrefab")," field that is assigned to a prefab that will act as a container for our item prefabs. The SceneObject prefab has a SceneObject script with a SyncVar like the Player Equip script, and a SetEquippedItem method that takes the shared enum value as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using UnityEngine;\nusing System.Collections;\nusing Mirage;\n\npublic class SceneObject : NetworkBehaviour\n{\n    [SyncVar(hook = nameof(OnChangeEquipment))]\n    public EquippedItem equippedItem;\n\n    public GameObject ballPrefab;\n    public GameObject boxPrefab;\n    public GameObject cylinderPrefab;\n\n    void OnChangeEquipment(EquippedItem oldEquippedItem, EquippedItem newEquippedItem)\n    {\n        StartCoroutine(ChangeEquipment(newEquippedItem));\n    }\n\n    // Since Destroy is delayed to the end of the current frame, we use a coroutine\n    // to clear out any child objects before instantiating the new one\n    IEnumerator ChangeEquipment(EquippedItem newEquippedItem)\n    {\n        while (transform.childCount > 0)\n        {\n            Destroy(transform.GetChild(0).gameObject);\n            yield return null;\n        }\n\n        // Use the new value, not the SyncVar property value\n        SetEquippedItem(newEquippedItem);\n    }\n\n    // SetEquippedItem is called on the client from OnChangeEquipment (above),\n    // and on the server from CmdDropItem in the PlayerEquip script.\n    public void SetEquippedItem(EquippedItem newEquippedItem)\n    {\n        switch (newEquippedItem)\n        {\n            case EquippedItem.ball:\n                Instantiate(ballPrefab, transform);\n                break;\n            case EquippedItem.box:\n                Instantiate(boxPrefab, transform);\n                break;\n            case EquippedItem.cylinder:\n                Instantiate(cylinderPrefab, transform);\n                break;\n        }\n    }\n}\n")),(0,i.kt)("p",null,"In the run-time image below, the Ball(Clone) is attached to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RightHand")," object, and the Box(Clone) is attached to the SceneObject(Clone), which is shown in the inspector."),(0,i.kt)("p",null,"The art prefabs have simple colliders on them (sphere, box, capsule).  If your art item has a mesh collider, it must be marked as Convex to work with the RigidBody on the SceneObject container."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of Kyle with equipped item and scene object",src:n(19089).Z,width:"1231",height:"659"})),(0,i.kt)("h2",{id:"pickup-items"},"Pickup Items"),(0,i.kt)("p",null,"Now that we have a box dropped in the scene, we need to pick it up again. To do that, a ",(0,i.kt)("inlineCode",{parentName:"p"},"CmdPickupItem")," method is added to the Player Equip script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// CmdPickupItem is public because it's called from a script on the SceneObject\n[ServerRpc]\npublic void CmdPickupItem(GameObject sceneObject)\n{\n    // set the player's SyncVar so clients can show the equipped item\n    equippedItem = sceneObject.GetComponent<SceneObject>().equippedItem;\n\n    // Destroy the scene object\n    ServerObjectManager.Destroy(sceneObject);\n}\n")),(0,i.kt)("p",null,"This method is simply called from ",(0,i.kt)("inlineCode",{parentName:"p"},"OnMouseDown")," in the Scene Object script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"private void OnMouseDown()\n{\n    Client.Player.Identity.GetComponent<PlayerEquip>().CmdPickupItem(gameObject);\n}\n")),(0,i.kt)("p",null,"Since the SceneObject(Clone) is networked, we can pass it directly through to ",(0,i.kt)("inlineCode",{parentName:"p"},"CmdPickupItem")," on the character object to set the equipped item SyncVar and destroy the scene object."),(0,i.kt)("p",null,"For this entire example, the only prefab that needs to be registered with Network Manager besides the Player is the SceneObject prefab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of inspector",src:n(45648).Z,width:"420",height:"561"})))}l.isMDXComponent=!0},30536:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/child-objects1-cacb0aebef9b0a5cc31911c10cacf626.png"},19089:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/child-objects2-4aee0695e2d49dba533e3f96c106d7a0.png"},45648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/child-objects3-76306f96399ff8d8d8547738f485e505.png"}}]);