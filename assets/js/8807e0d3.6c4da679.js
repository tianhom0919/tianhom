"use strict";(self.webpackChunkth_ws=self.webpackChunkth_ws||[]).push([[184],{121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"my-tutorials/mcut-tutorials/week-1/1-6","title":"1-6 Installation of Docusaurus and Source Control Using Git","description":"In this tutorial, we will install Docusaurus in a Dev Container and perform source control using Git and GitHub.","source":"@site/docs/my-tutorials/mcut-tutorials/week-1/1-6.md","sourceDirName":"my-tutorials/mcut-tutorials/week-1","slug":"/my-tutorials/mcut-tutorials/week-1/1-6","permalink":"/tianhom/docs/my-tutorials/mcut-tutorials/week-1/1-6","draft":false,"unlisted":false,"editUrl":"https://github.com/tianhom0919/tianhom/tree/main/th-ws/docs/my-tutorials/mcut-tutorials/week-1/1-6.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"1-5 Creating Docker Containers","permalink":"/tianhom/docs/my-tutorials/mcut-tutorials/week-1/1-5"},"next":{"title":"1-7 Deployment of Docusaurus","permalink":"/tianhom/docs/my-tutorials/mcut-tutorials/week-1/1-7"}}');var i=t(4848),r=t(8453);const o={sidebar_position:6},a="1-6 Installation of Docusaurus and Source Control Using Git",l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Docusaurus Guide",id:"docusaurus-guide",level:2},{value:"Step 1: Install Docusaurus",id:"step-1-install-docusaurus",level:3},{value:"Step 2: Start the Docusaurus Development Server",id:"step-2-start-the-docusaurus-development-server",level:3},{value:"Step 3: Start Editing!",id:"step-3-start-editing",level:3},{value:"Git Source Control Guide",id:"git-source-control-guide",level:2},{value:"Step 1: Ensure Git is Installed",id:"step-1-ensure-git-is-installed",level:3},{value:"Step 2: Configure GitHub",id:"step-2-configure-github",level:3},{value:"Step 3: Initialize the Repository",id:"step-3-initialize-the-repository",level:3},{value:"Step 4: Stage and Commit Changes",id:"step-4-stage-and-commit-changes",level:3},{value:"Step 5: Publish to GitHub",id:"step-5-publish-to-github",level:3},{value:"References",id:"references",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1-6-installation-of-docusaurus-and-source-control-using-git",children:"1-6 Installation of Docusaurus and Source Control Using Git"})}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial, we will install Docusaurus in a Dev Container and perform source control using Git and GitHub."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"Before starting, ensure you have the following installed and set up:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Git"}),": Install ",(0,i.jsx)(n.a,{href:"https://git-scm.com/",children:"Git"})," for source control."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GitHub Account"}),": Create an account on ",(0,i.jsx)(n.a,{href:"https://github.com/",children:"GitHub"})," if you don\u2019t already have one."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Node.js"}),": Ensure Node.js is installed. You can download it from ",(0,i.jsx)(n.a,{href:"https://nodejs.org/",children:"nodejs.org"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"docusaurus-guide",children:"Docusaurus Guide"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-install-docusaurus",children:"Step 1: Install Docusaurus"}),"\n",(0,i.jsx)(n.p,{children:"Inside the container's terminal in VS Code, navigate to your project folder. Install Docusaurus by running the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic\n"})}),"\n",(0,i.jsx)(n.p,{children:"When prompted to select a language, choose JavaScript."}),"\n",(0,i.jsx)(n.h3,{id:"step-2-start-the-docusaurus-development-server",children:"Step 2: Start the Docusaurus Development Server"}),"\n",(0,i.jsxs)(n.p,{children:["Then, go to ",(0,i.jsx)(n.code,{children:"my-website"})," and start the server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd my-website\r\nnpm run start\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Open your browser and navigate to ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," to see your Docusaurus site in action."]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-start-editing",children:"Step 3: Start Editing!"}),"\n",(0,i.jsxs)(n.p,{children:["In Docusaurus, Markdown is used for creating documentation and content. It is a lightweight markup language used for creating formatted text using plain text. Markdown files typically have the ",(0,i.jsx)(n.code,{children:".md"})," extension. Start editing those and create your own documentation or notes."]}),"\n",(0,i.jsx)(n.p,{children:"After editing, you will need to build the website again into a directory of static contents to view the changes. To build and serve the website:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run build\r\nnpm run serve\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information, visit ",(0,i.jsx)(n.a,{href:"https://www.markdownguide.org/getting-started/",children:"here"})," to get started learning Markdown."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"git-source-control-guide",children:"Git Source Control Guide"}),"\n",(0,i.jsx)(n.p,{children:"Git source control is a version control system that tracks changes in files and enables collaborative software development. It allows developers to manage their codebase efficiently by creating snapshots (commits) of their work, which can be reverted or reviewed at any time."}),"\n",(0,i.jsx)(n.h3,{id:"step-1-ensure-git-is-installed",children:"Step 1: Ensure Git is Installed"}),"\n",(0,i.jsx)(n.p,{children:"Verify whether or not Git has been installed on your system by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git --version\n"})}),"\n",(0,i.jsx)(n.p,{children:"If not, install by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install git\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"git --version"})," again to ensure that Git has been installed."]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-configure-github",children:"Step 2: Configure GitHub"}),"\n",(0,i.jsx)(n.p,{children:"Set your username:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git config --global user.name "Your Name"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Set your email:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git config --global user.email "youremail@example.com"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Confirm the configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git config --list\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the configuration is successful, your username and email will be shown."}),"\n",(0,i.jsx)(n.h3,{id:"step-3-initialize-the-repository",children:"Step 3: Initialize the Repository"}),"\n",(0,i.jsx)(n.p,{children:"Open your project folder in VS Code and initialize Git:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git init\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can also select ",(0,i.jsx)(n.strong,{children:'"Source Control"'})," at the side panel and click ",(0,i.jsx)(n.strong,{children:'"Initialize Repository"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"init_repo",src:t(8632).A+"",width:"1398",height:"870"})}),"\n",(0,i.jsx)(n.h3,{id:"step-4-stage-and-commit-changes",children:"Step 4: Stage and Commit Changes"}),"\n",(0,i.jsxs)(n.p,{children:["After the initialization, you may start editing your contents. Then, stage and commit your changes in ",(0,i.jsx)(n.strong,{children:'"Source Control"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"source_ctrl",src:t(9761).A+"",width:"1398",height:"870"})}),"\n",(0,i.jsx)(n.h3,{id:"step-5-publish-to-github",children:"Step 5: Publish to GitHub"}),"\n",(0,i.jsxs)(n.p,{children:["Next, select ",(0,i.jsx)(n.strong,{children:'"Publish Branch"'})," and depending on your preference, publish privately or publicly."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"publish",src:t(8682).A+"",width:"1398",height:"870"})}),"\n",(0,i.jsx)(n.p,{children:"Now, you will be able to see your files on your GitHub repository."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For more information on source control: ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/sourcecontrol/overview",children:"Using Git source control in VS Code"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/installation",children:"Docusaurus"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8632:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1-6-0-87f8071a6347485e974f209059a263b4.png"},9761:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1-6-1-0b58db9339215a77e401e8213cd4513c.png"},8682:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1-6-2-25c413707b8e39f222811f8ce4b73731.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);