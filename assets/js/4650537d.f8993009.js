"use strict";(self.webpackChunkth_ws=self.webpackChunkth_ws||[]).push([[3035],{3264:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"my-tutorials/other-tutorials/1-5","title":"5\ufe0f\u20e3 How to Enlarge a VM\'s Disk in VirtualBox","description":"Enlarging a virtual disk in VirtualBox requires two main steps: resizing the virtual disk and expanding the partition within the guest operating system to utilize the new space.","source":"@site/docs/my-tutorials/other-tutorials/1-5.md","sourceDirName":"my-tutorials/other-tutorials","slug":"/my-tutorials/other-tutorials/1-5","permalink":"/tianhom/docs/my-tutorials/other-tutorials/1-5","draft":false,"unlisted":false,"editUrl":"https://github.com/tianhom0919/tianhom/tree/main/th-ws/docs/my-tutorials/other-tutorials/1-5.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"4\ufe0f\u20e3 Mounting an SD Card to VM and Writing a Disk Image","permalink":"/tianhom/docs/my-tutorials/other-tutorials/1-4"},"next":{"title":"6\ufe0f\u20e3 Code App for Docusaurus Documentation","permalink":"/tianhom/docs/my-tutorials/other-tutorials/1-6"}}');var s=i(4848),a=i(8453);const r={sidebar_position:5},o="5\ufe0f\u20e3 How to Enlarge a VM's Disk in VirtualBox",d={},l=[{value:"Step 1: Resize the Virtual Disk",id:"step-1-resize-the-virtual-disk",level:2},{value:"Option 1: Using Virtual Media Manager",id:"option-1-using-virtual-media-manager",level:3},{value:"Option 2: Using Commands",id:"option-2-using-commands",level:3},{value:"Step 2: Extend the Partition in Guest OS",id:"step-2-extend-the-partition-in-guest-os",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"5\ufe0f\u20e3-how-to-enlarge-a-vms-disk-in-virtualbox",children:"5\ufe0f\u20e3 How to Enlarge a VM's Disk in VirtualBox"})}),"\n",(0,s.jsx)(t.p,{children:"Enlarging a virtual disk in VirtualBox requires two main steps: resizing the virtual disk and expanding the partition within the guest operating system to utilize the new space."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Before proceeding, back up your ",(0,s.jsx)(t.code,{children:".vdi"})," file to prevent data loss in case of an issue."]})}),"\n",(0,s.jsx)(t.h2,{id:"step-1-resize-the-virtual-disk",children:"Step 1: Resize the Virtual Disk"}),"\n",(0,s.jsx)(t.p,{children:"There are two options to resize the virtual disk."}),"\n",(0,s.jsx)(t.h3,{id:"option-1-using-virtual-media-manager",children:"Option 1: Using Virtual Media Manager"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.strong,{children:"VirtualBox Manager"}),", go to ",(0,s.jsx)(t.strong,{children:"File"})," > ",(0,s.jsx)(t.strong,{children:"Tools"})," > ",(0,s.jsx)(t.strong,{children:"Virtual Media Manager"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vmm",src:i(2766).A+"",width:"618",height:"255"})}),"\n",(0,s.jsxs)(t.p,{children:["Next, select the hard disk associated to your virtual machine. Use the slider below to select the desired size and click ",(0,s.jsx)(t.strong,{children:"Apply"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"slide",src:i(1991).A+"",width:"1280",height:"856"})}),"\n",(0,s.jsx)(t.h3,{id:"option-2-using-commands",children:"Option 2: Using Commands"}),"\n",(0,s.jsxs)(t.p,{children:["Before making any changes, ensure that the virtual machine is ",(0,s.jsx)(t.strong,{children:"powered off"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Open a ",(0,s.jsx)(t.strong,{children:"Command Prompt"})," on your host Window machine and navigate to the VirtualBox installation directory."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'cd "C:\\Program Files\\Oracle\\VirtualBox"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Resize the disk using the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'VBoxManage modifymedium disk "C:\\Path\\To\\YourDisk.vdi" --resize <NewSizeInMB>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<NewSizeInMB>"})," with the desired size (e.g. ",(0,s.jsx)(t.code,{children:"204800"})," for 200GB)."]}),"\n",(0,s.jsx)(t.p,{children:"You now have a larger virtual hard disk. However, the operating system's partition on your virtual hard disk is the same size, so you won't be able to access any of this space yet."}),"\n",(0,s.jsx)(t.h2,{id:"step-2-extend-the-partition-in-guest-os",children:"Step 2: Extend the Partition in Guest OS"}),"\n",(0,s.jsx)(t.p,{children:"After resizing the disk, the new space will appear as unallocated. Extend the partition to use it."}),"\n",(0,s.jsx)(t.p,{children:"You can use a GParted live CD to resize your virtual machine's partition \u2014 simply boot the GParted ISO image in your virtual machine and you'll be taken to the GParted partition editor in a live Linux environment."}),"\n",(0,s.jsxs)(t.p,{children:["You can download the GParted live CD's ISO file ",(0,s.jsx)(t.a,{href:"http://gparted.sourceforge.net/download.php",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Load the ISO file into your virtual machine by going into the virtual machine's settings window."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"load-iso",src:i(3884).A+"",width:"1280",height:"856"})}),"\n",(0,s.jsx)(t.p,{children:"Restart your virtual machine after inserting the ISO image and the virtual machine will boot from the ISO image."}),"\n",(0,s.jsx)(t.p,{children:"GParted's live CD will ask you several questions while booting \u2014 you can press Enter to skip them for the default options."}),"\n",(0,s.jsx)(t.p,{children:"Once GParted is booted, you can look at how the virtual drive is partitioned."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gparted",src:i(6773).A+"",width:"796",height:"627"})}),"\n",(0,s.jsxs)(t.p,{children:["To resize the partition, simply right-click and select ",(0,s.jsx)(t.strong,{children:"Resize/Move"}),". A new window will appear that lets you move the partition."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"resize",src:i(9898).A+"",width:"797",height:"627"})}),"\n",(0,s.jsxs)(t.p,{children:["Enter the number after ",(0,s.jsx)(t.strong,{children:'"Maximum Size"'})," into the ",(0,s.jsx)(t.strong,{children:'"New Size"'})," field, or drag the right-hand side of the slider all the way to the right."]}),"\n",(0,s.jsx)(t.p,{children:"Click the green check mark button near the top to apply all of the changes you've made. Don't be worried if you have to wait a while. Applying the changes can take a few minutes, depending on how many move or resize operations you have queued, and how fast your computer is."}),"\n",(0,s.jsx)(t.p,{children:"After the resize operation completes, remove the GParted ISO file and restart your virtual machine."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"remove",src:i(8755).A+"",width:"1280",height:"856"})}),"\n",(0,s.jsx)(t.p,{children:"The virtual machine's partition will now take up the entire virtual hard disk, so you'll have access to the additional space."}),"\n",(0,s.jsx)(t.hr,{})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2766:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/1-5-0-a2de87bc295be0e9d57bffe93820ab31.png"},1991:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/1-5-1-f98a29d49327e42b57b5dae0b7b7d78e.png"},3884:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/1-5-2-1beb9ea50ebdcdd4ad6fcd1c88d62809.png"},6773:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/1-5-3-a82fe1abd2996ae6ed31ef36f2b571d1.png"},9898:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/1-5-4-b625e68f0819d8e024f1b88e84b7813a.png"},8755:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/1-5-5-c60605ff3cc3122c0ca8b1e27a99d705.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(6540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);