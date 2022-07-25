"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2,title:"Amazon Web Services (AWS)"},r="Amazon Web Services (AWS)",s={unversionedId:"guides/development-servers/aws",id:"guides/development-servers/aws",title:"Amazon Web Services (AWS)",description:"During this section, we will focus on using a Windows instance and connecting from a Windows computer.",source:"@site/docs/guides/development-servers/aws.md",sourceDirName:"guides/development-servers",slug:"/guides/development-servers/aws",permalink:"/Mirage/docs/guides/development-servers/aws",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/guides/development-servers/aws.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Amazon Web Services (AWS)"},sidebar:"docs",previous:{title:"Overview",permalink:"/Mirage/docs/guides/development-servers/"},next:{title:"Google Cloud Services",permalink:"/Mirage/docs/guides/development-servers/google-cloud"}},l={},c=[{value:"1. Account Creation",id:"1-account-creation",level:2},{value:"2. Setting up an instance with the EC2 Management Console",id:"2-setting-up-an-instance-with-the-ec2-management-console",level:2},{value:"Step 1: Choose an Amazon Machine Image",id:"step-1-choose-an-amazon-machine-image",level:4},{value:"Step 2: Choose Instance Type",id:"step-2-choose-instance-type",level:4},{value:"Step 3: Configure Instance",id:"step-3-configure-instance",level:4},{value:"Step 4: Add Storage",id:"step-4-add-storage",level:4},{value:"Step 5: Add Tags",id:"step-5-add-tags",level:4},{value:"Step 6: Configure Security Groups",id:"step-6-configure-security-groups",level:4},{value:"Step 7: Review",id:"step-7-review",level:4},{value:"3. Configuring the server via RDP (Remote Desktop)",id:"3-configuring-the-server-via-rdp-remote-desktop",level:2},{value:"RDP file with the key pair added to it",id:"rdp-file-with-the-key-pair-added-to-it",level:4},{value:"Configure RDP file for easy file access",id:"configure-rdp-file-for-easy-file-access",level:4},{value:"Setting up the firewall to allow connections through",id:"setting-up-the-firewall-to-allow-connections-through",level:4},{value:"4. Testing the connection",id:"4-testing-the-connection",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amazon-web-services-aws"},"Amazon Web Services (AWS)"),(0,i.kt)("p",null,"During this section, we will focus on using a Windows instance and connecting from a Windows computer."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"AWS requires a payment method/credit card added before being able to use a Windows server.")),(0,i.kt)("p",null,"Don't forget to read up on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html"},"free tier limitations"),".\nDuring this example, we will be using the free tier of the EC2 option, which gives us the possibility to use a Windows instance (if you have already added a payment method).\nFor more information about which services offer a Free Tier, see ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%2312monthsfree&awsf.Free%20Tier%20Categories=categories%23compute"},"AWS Free Tier"),"."),(0,i.kt)("p",null,"These are the steps we will go through from start to finish:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Account creation"),(0,i.kt)("li",{parentName:"ol"},"Setting up an instance with the EC2 Management Console"),(0,i.kt)("li",{parentName:"ol"},"Configuring the server via RDP (Remote Desktop)"),(0,i.kt)("li",{parentName:"ol"},"Setting up the firewall to allow connections through"),(0,i.kt)("li",{parentName:"ol"},"Testing the connection")),(0,i.kt)("h2",{id:"1-account-creation"},"1. Account Creation"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=default&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start"},"Account creation page")," and\nsign up with your details and payment method (e.g. credit card). Adding the payment method is necessary to run a Windows instance on AWS."),(0,i.kt)("h2",{id:"2-setting-up-an-instance-with-the-ec2-management-console"},"2. Setting up an instance with the EC2 Management Console"),(0,i.kt)("p",null,"After setting up your account you should be logged in.\nAlways make sure you're in your correct region so it's a good habit to check in the top right corner. Change it to the closest location to you now.\nAfter this click on Services in the top left corner and click on EC2. This will bring you to the EC2 instance dashboard and ready to Launch your instance!"),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},'"Launch Instance"'),".\n",(0,i.kt)("img",{alt:"EC2-Management-Dashboard",src:n(16765).Z,width:"2874",height:"1511"})),(0,i.kt)("p",null,"There are 7 steps to creating your AWS Instance:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose an Amazon Machine Image (AMI)"),(0,i.kt)("li",{parentName:"ol"},"Choose Instance Type"),(0,i.kt)("li",{parentName:"ol"},"Configure Instance"),(0,i.kt)("li",{parentName:"ol"},"Add Storage"),(0,i.kt)("li",{parentName:"ol"},"Add Tags"),(0,i.kt)("li",{parentName:"ol"},"Configure Security Group"),(0,i.kt)("li",{parentName:"ol"},"Review")),(0,i.kt)("h4",{id:"step-1-choose-an-amazon-machine-image"},"Step 1: Choose an Amazon Machine Image"),(0,i.kt)("p",null,'Scroll down until you see the Microsoft Windows Server 2019 Base (take the newest one if this is outdated).\nMake sure that the option you select has the "Free Tier Eligible" under the icon and click on "Select".\n',(0,i.kt)("img",{alt:"Amazon Machine Image: Microsoft Server 2019",src:n(34861).Z,width:"2309",height:"233"})),(0,i.kt)("h4",{id:"step-2-choose-instance-type"},"Step 2: Choose Instance Type"),(0,i.kt)("p",null,'Make sure you choose the instance type with the "free tier eligible", at the time of writing this is the t2.micro instance.\nClick on ',(0,i.kt)("strong",{parentName:"p"},'"Next: Configure Instance Details"'),". ",(0,i.kt)("strong",{parentName:"p"},"Do not")," click on Review and Launch."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Choose Instance Type",src:n(83398).Z,width:"2835",height:"1263"})),(0,i.kt)("h4",{id:"step-3-configure-instance"},"Step 3: Configure Instance"),(0,i.kt)("p",null,"Nothing has to be changed at this step. Keep it default. Click on ",(0,i.kt)("strong",{parentName:"p"},'"Next: Add Storage"'),"."),(0,i.kt)("h4",{id:"step-4-add-storage"},"Step 4: Add Storage"),(0,i.kt)("p",null,'Nothing has to be changed. Keep it default. The 30GB is more than you need but there will be an error if you choose a lower amount.\nKeep in mind that you can always click "Previous" if you need to return, you do not need to repeat the entire process if you make a mistake (unless you click Launch at the end).'),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},'"Next: Add Tags"')," to continue."),(0,i.kt)("h4",{id:"step-5-add-tags"},"Step 5: Add Tags"),(0,i.kt)("p",null,"Nothing has to be changed. Keep it default. Click on ",(0,i.kt)("strong",{parentName:"p"},'"Next: Configure Security Groups"')),(0,i.kt)("h4",{id:"step-6-configure-security-groups"},"Step 6: Configure Security Groups"),(0,i.kt)("admonition",{title:"IMPORTANT STEP",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This makes it possible to connect to your instance from outside for:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"RDP (needed for this example)"),(0,i.kt)("li",{parentName:"ul"},"For clients connecting through port 7777 for your Mirage Project."),(0,i.kt)("li",{parentName:"ul"},"SSH (if needed)"))),(0,i.kt)("p",null,"Create a new security group and you can give it your own name and description. Add the following rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'RDP with source "Anywhere", Description can be whatever but put it as Remote Desktop Program.'),(0,i.kt)("li",{parentName:"ul"},'Custom UDP Rule with port 7777 and source "Anywhere", Description can be whatever but put it as Mirage.'),(0,i.kt)("li",{parentName:"ul"},'SSH with source "Anywhere", Description can be whatever but put it as SSH.')),(0,i.kt)("p",null,"SSH is not strictly necessary but can be used to remotely connect to it through other means than the RDP."),(0,i.kt)("p",null,"You can ignore the warning about the source as this is just a testing environment. In the future, you might wish to restrict this but you will almost never know the clients' connection IP's beforehand."),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},'"Next: Review and Launch"')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuring Security Groups",src:n(18043).Z,width:"2850",height:"1361"})),(0,i.kt)("h4",{id:"step-7-review"},"Step 7: Review"),(0,i.kt)("p",null,"Almost there! Make sure everything is correct and you are using the free tier, then click on ",(0,i.kt)("strong",{parentName:"p"},'"Launch"'),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Review Of The Instance",src:n(65800).Z,width:"2852",height:"1281"})),(0,i.kt)("p",null,"One more thing: A window will pop up asking for your key pair. Just create a new one by selecting the dropdown: ",(0,i.kt)("strong",{parentName:"p"},'"Create a new key pair"')," and give it a name, click on ",(0,i.kt)("strong",{parentName:"p"},'"Download Key Pair"'),"."),(0,i.kt)("p",null,"Keep the key file (.PEM File) somewhere secure (To be 100% certain, back it up somewhere). "),(0,i.kt)("admonition",{title:"IMPROTANT NOTICE",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"You cannot access the created instance without this key!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Key Pair",src:n(95797).Z,width:"1314",height:"973"})),(0,i.kt)("p",null,"Now you can (finally) click on ",(0,i.kt)("strong",{parentName:"p"},'"Launch Instances"'),"!"),(0,i.kt)("p",null,'Go back to your EC2 dashboard by clicking on "Services" at the top left and clicking on EC2.\nNow you see you have "Running Instances: 1". ',(0,i.kt)("strong",{parentName:"p"},'Click on "Running Instances" to continue'),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Your Running Instances",src:n(72622).Z,width:"2454",height:"353"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A new instance might take around 5-10 minutes to set up. Refresh the page after 10 minutes if nothing changes.")),(0,i.kt)("p",null,"Now you did all this but you want to get ON the dedicated server right? Perfect! The next step will get you up and running!"),(0,i.kt)("h2",{id:"3-configuring-the-server-via-rdp-remote-desktop"},"3. Configuring the server via RDP (Remote Desktop)"),(0,i.kt)("p",null,"Time to get the RDP file so you can start connecting. There are a few things we'll need:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"RDP file with the key pair added to it"),(0,i.kt)("li",{parentName:"ol"},"Configure RDP file once downloaded to allow getting files from our C: drive or other drives (so you can easily get your zip project)"),(0,i.kt)("li",{parentName:"ol"},"Enter the Windows Admin password once you start the RDP file")),(0,i.kt)("p",null,"Once you've done this, you should be able to continue using the same RDP file."),(0,i.kt)("h4",{id:"rdp-file-with-the-key-pair-added-to-it"},"RDP file with the key pair added to it"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Get the password ",(0,i.kt)("strong",{parentName:"p"},"before")," clicking Download!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect To Your Instance 1",src:n(30813).Z,width:"1236",height:"855"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Copy the Password for later")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect To Your Instance 2",src:n(81492).Z,width:"1236",height:"859"})),(0,i.kt)("p",null,"Now click on ",(0,i.kt)("strong",{parentName:"p"},'"Download Remote Desktop File"'),". The RDP file will be downloaded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect To Your Instance 3",src:n(61928).Z,width:"1232",height:"825"})),(0,i.kt)("h4",{id:"configure-rdp-file-for-easy-file-access"},"Configure RDP file for easy file access"),(0,i.kt)("p",null,'Go to your freshly downloaded RDP file and right-click it and then click "Edit".'),(0,i.kt)("p",null,'Go to the third tab "Local sources", at the bottom click "more" under local devices and sources.\nOn the new window select your C: drive or any other drive. This is your own computer your connecting from. For easy file exchange.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuring the RDP file",src:n(39538).Z,width:"1375",height:"887"})),(0,i.kt)("p",null,'Perfect! Now you can run the RDP file! The RDP file will ask for a password. If you forgot your password you can get it back by right-clicking\nthe instance and clicking on "Get Windows Password". You will be asked to re-enter your key pair (.PEM) file and decrypt the message.\nOnce done you will be able to copy the password.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Retrieve Your Default Windows Administrator Password",src:n(74280).Z,width:"1351",height:"945"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Retrieve Your Default Windows Administrator Password 2",src:n(4086).Z,width:"1323",height:"851"})),(0,i.kt)("p",null,"There you have it! Now you have your password and Remote Desktop should show you logging into your dedicated server!"),(0,i.kt)("h4",{id:"setting-up-the-firewall-to-allow-connections-through"},"Setting up the firewall to allow connections through"),(0,i.kt)("p",null,"Go to the windows firewall settings, go to the advanced firewall settings, and go to inbound rules. ",(0,i.kt)("strong",{parentName:"p"},"Add a new rule")," and choose the port type.\nSelect UDP and enter the 7777 port (or any other if you use another port in Mirage). Continue clicking next and keep things default.\nClose all the windows when done."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Windows Firewall Exception",src:n(19818).Z,width:"2728",height:"1581"})),(0,i.kt)("p",null,"AWESOME! You now have everything set up to accept incoming requests on ",(0,i.kt)("strong",{parentName:"p"},"port 7777"),"."),(0,i.kt)("h2",{id:"4-testing-the-connection"},"4. Testing the connection"),(0,i.kt)("p",null,"Before you can (finally) test out the server build of your project you need to get it on the dedicated server!"),(0,i.kt)("p",null,"Place your (zipped) server build at the root of your added drive (C: or another) to make it easier to find it fast."),(0,i.kt)("p",null,"Go to ",(0,i.kt)("strong",{parentName:"p"},'"My Computer"'),' and because of our previous changes to the RDP we should now see your local drive under "Devices and Drives".\nDouble click it and because you placed your zipped server build on that drive, you should see it immediately when it\'s done loading.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Your Drive on the dedicated host",src:n(70449).Z,width:"2283",height:"1167"})),(0,i.kt)("p",null,"Now unzip the project in a new folder on the dedicated server's desktop and run it."),(0,i.kt)("p",null,"Want to test if it sees the 7777 port is open after you started your Mirage server?\nGet your IPv4 public IP from the EC2 Management Console from your instance and use it on your client to connect to that IP."),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://www.portcheckers.com/"},"PortChecker")," and enter the Dedicated Server IP address and enter port 7777."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are not running your game/project then the port will be closed. It's only open when the server is running.")))}d.isMDXComponent=!0},16765:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/aws-setup-9b36d01bc52cf92d655388a5514e4ea3.png"},39538:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/configure-rdp-887b883bb322213ade7239de2daff72a.png"},30813:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connect-instance-1-8278bf6beb0ee88bceceec3ec4a654d1.png"},81492:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connect-instance-2-2ba744f13f9f167eec8768ee17967e5d.png"},61928:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connect-instance-3-d0885421e233b29e437f3088df6e7f3c.png"},70449:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/drive-on-host-8387a61f5e7bb323417d1f14537bafa1.png"},19818:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/firewall-exception-76dc4748c007dcef21df7145fb11ef99.png"},95797:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/key-pair-a3114e0ebf34d667e8928740c2491b79.png"},34861:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/microsoft-server-2019-92a500bc3d044c9076b0abc83e6224b8.png"},65800:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/review-0d625f11d117703a06e8baf96020042f.png"},72622:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/running-instances-40b85e7a37007b9e0470331a1cb19c0f.png"},83398:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/step-2-91e61e62dc48080c3e5d2681c19592e1.png"},18043:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/step-6-8bcb1a1a012d28d85a0c43f91320f48e.png"},4086:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/windows-admin-pass-2-2164977395f8e54b25b1a37e02a43512.png"},74280:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/windows-admin-pass-8a69d39da472478a9d9685ecae81a67b.png"}}]);