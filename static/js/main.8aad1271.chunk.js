(this.webpackJsonpdianaguney=this.webpackJsonpdianaguney||[]).push([[0],{28:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(1),c=i(21),s=i.n(c),r=i(4),o=(i(28),i(11)),d=i(5),l=i(9),j=i.n(l),h=i(12),u=i(3),p=i.p+"static/media/1.2a49edef.jpg",m=i.p+"static/media/Signature.8b1b3ab8.svg";function b(e){var t=e.color;return Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"16",fill:"none",viewBox:"0 0 8 16",children:Object(n.jsx)("path",{fill:t||"#6E6E6E",d:"M5.5 12.01a.5.5 0 01-.5-.5V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v11.01a.5.5 0 01-.5.5H1.21a.5.5 0 00-.354.854l2.79 2.784a.5.5 0 00.707 0l2.79-2.784a.5.5 0 00-.352-.854H5.5z"})})}function g(){return Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"8",fill:"none",viewBox:"0 0 16 8",children:Object(n.jsx)("path",{fill:"#6E6E6E",d:"M12.01 2.5a.5.5 0 01-.5.5H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h11.01a.5.5 0 01.5.5v1.29a.5.5 0 00.854.354l2.784-2.79a.5.5 0 000-.707L12.864.857a.5.5 0 00-.854.352V2.5z"})})}var O=i.p+"static/media/projectsIcon.7647a5eb.svg",f=i(2);function x(e){var t=e.toggle,i=t.menuOpen,a=t.setMenuOpen;return Object(n.jsx)("div",{className:"menu-section",onClick:function(){a(!i)},children:Object(n.jsx)(f.c.svg,{width:"34",height:"18",viewBox:"0 0 34 18",fill:"none",initial:"initial",animate:i?"animate":"initial",exit:"initial",children:Object(n.jsxs)("g",{id:"Simplified Menu",children:[Object(n.jsx)(f.c.path,{id:"Bottom",variants:{initial:{d:"M0 17L25 17"},animate:{d:"M1 1L26 17"}},exit:"initial",stroke:"#6E6E6E","stroke-width":"2",transition:{type:"spring",stiffness:300,damping:50}}),Object(n.jsx)(f.c.path,{id:"Middle",d:"M0 9L25 9",variants:{initial:{opacity:1,transition:{delay:.2}},animate:{opacity:0,transition:{duration:.2}}},stroke:"#6E6E6E","stroke-width":"2"}),Object(n.jsx)(f.c.path,{id:"Top",variants:{initial:{d:"M0 1L25 1"},animate:{d:"M1 17L26 1"}},exit:"initial",transition:{type:"spring",stiffness:300,damping:50},stroke:"#6E6E6E","stroke-width":"2"})]})})})}function v(e){var t=e.tranSwipe,i=e.tranSmooth;return Object(n.jsx)("div",{className:"signature-section",children:Object(n.jsx)("svg",{width:"42",height:"54",viewBox:"0 0 42 54",fill:"none",children:Object(n.jsx)(f.c.path,{d:"M11.2312 30.6449C-11.6283 30.6449 10.6803 1 12.6082 1M12.6082 3.77055C14.5361 6.81816 11.664 35.0369 13.2182 28.2875M21.4806 19.0086C13.7893 19.0086 15.6378 26.4891 22.5232 29.8137C29.685 33.2719 20.3198 19.0086 22.5232 19.0086C37.3955 19.0086 1.59166 1 22.5232 1C24.4511 1 65.4193 1 18.7894 53",stroke:"#6E6E6E",initial:{pathLength:0},animate:{pathLength:1},exit:{pathLength:0,transition:t(.8)},transition:i(3),"stroke-width":"0.6"})})})}function w(e){var t=e.title,i=e.tranSwipe,c=Object(a.useState)(t),s=Object(r.a)(c,2),o=s[0],d=(s[1],{initial:{y:30,transition:i(.4)},animate:{y:0,transition:i(1)}});return Object(n.jsx)(f.c.div,{className:"title-container",initial:"initial",animate:"animate",exit:"initial",variants:{initial:{y:0,transition:{staggerChildren:.008}},animate:{y:0,transition:{staggerChildren:.008}}},children:o.map((function(e,t){return Object(n.jsx)(f.c.span,{variants:d,children:e},t)}))})}var y=i.p+"static/media/contactIcon.1dc67bad.svg",N=i.p+"static/media/skillsIcon.3871ad18.svg",k=i.p+"static/media/meIcon.2b24cbe7.svg",S=[{icon:O,title:"Projects",text:"PROJECTS",link:"projects",fromDashboard:!1},{icon:N,title:"Skills",text:"SKILLS",link:"skills",fromDashboard:!1},{icon:y,title:"Contact",text:"CONTACT",link:"contact",fromDashboard:!1},{icon:k,title:"Home",text:"DIANA GUNEY",link:"",fromDashboard:!0}];function E(e){var t=e.toggle,i=e.tranSwipe,c=e.tranSmooth,s=(e.preview,Object(a.useState)("")),l=Object(r.a)(s,2),j=l[0],h=l[1],p=t.menuOpen,m=t.setMenuOpen,b=Object(d.g)(),g=S.filter((function(e){return b.pathname==="/".concat(e.link)}))[0].text.split(""),O={initial:{height:0,transition:Object(u.a)(Object(u.a)({},i(.4)),{},{delay:.2,staggerChildren:.05,staggerDirection:-1})},animate:{height:300,transition:Object(u.a)(Object(u.a)({},i(.4)),{},{staggerChildren:.05})}},y={initial:{y:20,opacity:0,transition:c(.2)},animate:{y:0,opacity:1,transition:c(.2)}},N=Object(f.d)(),k={initial:{opacity:0,transition:Object(u.a)(Object(u.a)({},i(.4)),{},{delay:.3})},animate:{opacity:1,transition:Object(u.a)({},i(.4))}};return Object(a.useEffect)((function(){var e=S.filter((function(e){return"/".concat(e.link)===b.pathname}));"/"===b.pathname?(h(Object(n.jsx)(v,{tranSwipe:i,tranSmooth:c})),N.start({backgroundColor:"#ffffff"})):(h(Object(n.jsx)("div",{className:"menu-icon",children:Object(n.jsx)(f.c.img,{src:e[0].icon,alt:e[0].title,initial:{y:70},animate:{y:0},transition:i(1),exit:{y:70}})})),N.start({backgroundColor:"#fff8f0"}))}),[]),Object(n.jsxs)(f.c.div,{className:"navbar-container",children:[Object(n.jsx)(f.c.div,{className:"background freeze",initial:"initial",exit:"initial",animate:p?"animate":"initial",variants:k}),Object(n.jsxs)(f.c.div,{className:"navbar-section",initial:"initial",animate:p?"animate":"initial",variants:{initial:{opacity:1},animate:{opacity:1}},exit:"initial",children:[Object(n.jsxs)(f.c.div,{className:"navbar-header",animate:N,initial:{backgroundColor:"#fff8f0"},transition:i(1),children:[Object(n.jsx)(x,{toggle:{menuOpen:p,setMenuOpen:m}}),Object(n.jsx)(w,{title:g,tranSwipe:i}),j]}),Object(n.jsx)(f.c.div,{className:"menu-items",variants:O,children:S.map((function(e,t){return Object(n.jsx)(o.b,{to:{pathname:"/".concat(e.link),state:e.fromDashboard},children:Object(n.jsxs)(f.c.div,{className:"menu-item-container",variants:y,onClick:function(){return m(!p)},children:[Object(n.jsx)("div",{className:"menu-item",children:Object(n.jsx)("img",{src:e.icon,alt:e.title})}),Object(n.jsx)("h2",{children:e.title})]})},t)}))})]})]})}function I(){return Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"16",fill:"none",viewBox:"0 0 8 16",children:Object(n.jsx)("path",{fill:"#6E6E6E",d:"M2.5 3.99a.5.5 0 01.5.5V15.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4.49a.5.5 0 01.5-.5h1.29a.5.5 0 00.354-.854L4.354.352a.5.5 0 00-.707 0L.857 3.136a.5.5 0 00.352.854H2.5z"})})}function T(){return Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"8",fill:"none",viewBox:"0 0 16 8",children:Object(n.jsx)("path",{fill:"#6E6E6E",d:"M3.99 5.5a.5.5 0 01.5-.5H15.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H4.49a.5.5 0 01-.5-.5V1.21a.5.5 0 00-.854-.354L.352 3.646a.5.5 0 000 .707l2.784 2.79a.5.5 0 00.854-.352V5.5z"})})}i(20);function M(e){var t=e.state,i=e.index,c=e.tranSwipe,s=e.toggle,r=e.toggleHide,o=e.scroll,d=e.enableReference,l=e.disableReference,j=Object(a.useRef)(null),h=Object(a.useRef)(null),p=t.element,m=t.elements,O=t.setElements,x=s.preview,v=s.setPreview,w=r.hide,y=r.cycleHide,N=Object(f.f)(0),k=Object(f.g)(N,[0,500],[420,window.innerHeight]),S=Object(f.g)(N,[0,500],["70%","130%"]),E=Object(f.g)(N,[0,500],[1,0]),M=Object(f.g)(N,[0,500],[0,30]),C=Object(f.g)(N,[0,500],[0,-100]),L=Object(f.f)(0),H=Object(f.g)(L,[0,500],[25,0]),z=Object(f.g)(L,[0,500],[0,1]),B=Object(f.f)(0),W=Object(f.g)(B,[0,500],[0,-350]),P=Object(f.g)(B,[0,500],[0,1]),A=Object(f.g)(B,[0,500],[1,0]),D=Object(f.g)(B,[0,500],["0%","-100%"]);return Object(a.useEffect)((function(){p.active?function(){var e=o.onChange((function(e){window.scrollTo({top:e})}));if(j.current&&p.active){var t=j.current.getBoundingClientRect().top+window.scrollY-window.innerHeight/6;Object(f.b)(o,t,Object(u.a)(Object(u.a)({},c(1.2)),{},{onComplete:function(){Object(f.b)(N,500,c(.8)),Object(f.b)(L,500,Object(u.a)({delay:.5},c(.8))),e()}}))}}():(Object(f.b)(N,0,Object(u.a)({delay:.5},c(.8))),Object(f.b)(L,0,c(.8)))}),[p]),Object(a.useEffect)((function(){p.active?l(h.current):d(h.current)}),[x]),Object(n.jsxs)(f.c.div,{ref:j,id:p.id,className:"project-container",animate:!p.active&&w,style:{height:k,marginTop:C},layout:!0,children:[Object(n.jsx)(f.c.div,{className:"preview-background",animate:p.active?{opacity:1,transition:c(.8)}:{opacity:0,transition:Object(u.a)({delay:.5},c(.8))}}),Object(n.jsxs)(f.c.div,{className:"text-container",children:[Object(n.jsx)("h1",{children:p.title}),Object(n.jsx)("p",{children:p.text})]}),Object(n.jsxs)(f.c.div,{className:"button-section",children:[Object(n.jsxs)(f.c.div,{className:"button-container",style:{x:M,opacity:E},children:[Object(n.jsx)(f.c.button,{onClick:function(){return function(e){document.querySelector(".navbar-container").classList.add("behind");var t=m.map((function(t,i){return e===i?t.active?Object(u.a)(Object(u.a)({},t),{},{active:!1}):Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));O(t),v(!0),y()}(i)},className:"primary-button",children:Object(n.jsx)("span",{children:"See more"})}),Object(n.jsx)(g,{})]}),Object(n.jsxs)(f.c.div,{className:p.active?"button-container":"button-container freeze",style:{x:H,opacity:z},children:[Object(n.jsx)(T,{}),Object(n.jsx)(f.c.button,{onClick:function(){return function(){if(x){var e=m.map((function(e){return e.active?Object(u.a)(Object(u.a)({},e),{},{active:!1}):e}));y(),O(e),v(!1)}setTimeout((function(){document.querySelector(".navbar-container").classList.remove("behind")}),1500)}()},className:"primary-button",children:Object(n.jsx)("span",{children:"Go back"})})]})]}),Object(n.jsx)(f.c.div,{className:"project-slider",layout:!0,children:Object(n.jsx)(f.c.div,{ref:h,className:"slider-container",transition:c(.8),layout:!0,children:p.photos.map((function(e,t){return Object(n.jsx)(f.c.div,{className:"image-container",transition:c(.8),style:{width:S},layout:!0,children:Object(n.jsx)("div",{className:"image-layout",children:Object(n.jsx)(f.c.img,{src:e,alt:t,transition:c(.8),layout:!0})})},t)}))})},i),Object(n.jsx)(f.c.div,{className:"description-background",style:{opacity:P}}),Object(n.jsx)(f.a,{children:p.active&&Object(n.jsxs)(f.c.div,{className:"project-description",initial:{x:30,opacity:0},animate:{x:0,opacity:1,transition:Object(u.a)({delay:1.5},c(.8))},exit:{x:30,opacity:0,height:0,transition:c(.6)},style:{y:W},layout:!0,children:[Object(n.jsx)(f.c.div,{className:"description-overlay",style:{opacity:A}}),Object(n.jsxs)("div",{className:"description-title",children:[Object(n.jsx)("h2",{children:"Description"}),Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsxs)(f.c.div,{className:"button-container",style:{x:D,opacity:A},children:[Object(n.jsx)("button",{className:"primary-button",onClick:function(){0===B.current?Object(f.b)(B,500,Object(u.a)({},c(.6))):Object(f.b)(B,0,Object(u.a)({},c(.6)))},children:Object(n.jsx)("span",{style:{fontSize:"16px"},children:"Press for more"})}),Object(n.jsx)(I,{})]}),Object(n.jsxs)(f.c.div,{className:"button-container",style:{x:D,opacity:P},children:[Object(n.jsx)("button",{className:"primary-button",onClick:function(){0===B.current?Object(f.b)(B,500,Object(u.a)({},c(.6))):Object(f.b)(B,0,Object(u.a)({},c(.6)))},children:Object(n.jsx)("span",{style:{fontSize:"16px"},children:"Press for less"})}),Object(n.jsx)(b,{})]})]})]}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:p.paragraph})})]})})]},i)}var C=i.p+"static/media/1.cbf6428d.jpg",L=i.p+"static/media/2.af2cd72f.jpg",H=i.p+"static/media/3.e55abf8e.jpg",z=i.p+"static/media/4.def2f4c0.jpg",B=i.p+"static/media/5.b40e6e42.jpg",W=i.p+"static/media/6.fa8c36d4.jpg",P=i.p+"static/media/7.6647f85e.jpg",A=i.p+"static/media/8.968cf53e.jpg",D=i.p+"static/media/9.0fe5cd9a.jpg",R=i.p+"static/media/10.7538b6e5.jpg",F=i.p+"static/media/11.fce776e3.jpg",G=i.p+"static/media/1.12c1f2d0.jpg",V=i.p+"static/media/2.6a32a9ee.jpg",Y=i.p+"static/media/3.d6270ddb.jpg",q=i.p+"static/media/4.f18f7997.jpg",J=i.p+"static/media/5.b154b085.jpg",Z=i.p+"static/media/6.b44997ec.jpg",K=i.p+"static/media/1.0eefb0fd.jpg",U=i.p+"static/media/2.e769701b.jpg",Q=i.p+"static/media/3.a6d8c0c5.jpg",X=i.p+"static/media/4.df7b8aa7.jpg",$=i.p+"static/media/5.9cb9e3ac.jpg",_=i.p+"static/media/6.22030cb6.jpg",ee=i.p+"static/media/7.ddd67540.jpg",te=i.p+"static/media/8.8568a5cc.jpg",ie=i.p+"static/media/1.3cf89481.jpg",ne=i.p+"static/media/2.f80726be.jpg",ae=i.p+"static/media/3.49b7f6cf.jpg",ce=i.p+"static/media/4.bde0914b.jpg",se=i.p+"static/media/5.40348e88.jpg",re=i.p+"static/media/6.f5dde9b9.jpg",oe=i.p+"static/media/7.0eda9f25.jpg",de=i.p+"static/media/2.e34deba5.jpg",le=i.p+"static/media/3.b639f098.jpg",je=i.p+"static/media/4.69e13e72.jpg",he=i.p+"static/media/5.34f22315.jpg",ue=i.p+"static/media/6.0b2f9b8f.jpg",pe=i.p+"static/media/1.2eed13e2.jpg",me=i.p+"static/media/2.4e443e15.jpg",be=i.p+"static/media/3.6919e56a.jpg",ge=i.p+"static/media/4.f4e91f00.jpg",Oe=i.p+"static/media/5.aec9e9ff.jpg",fe=i.p+"static/media/6.5efc9de1.jpg",xe=i.p+"static/media/7.ebc587ef.jpg",ve=i.p+"static/media/8.03e01e7b.jpg",we=i.p+"static/media/9.25641022.jpg",ye=i.p+"static/media/1.957d46c8.jpg",Ne=i.p+"static/media/2.357d1623.jpg",ke=i.p+"static/media/3.c39ca86d.jpg",Se=i.p+"static/media/4.b8a74fd1.jpg",Ee=i.p+"static/media/5.3a710313.jpg",Ie=i.p+"static/media/6.f96fd1e1.jpg",Te=i.p+"static/media/7.75ff27f5.jpg",Me=i.p+"static/media/1.611e765d.jpg",Ce=i.p+"static/media/2.07faced9.jpg",Le=[{id:0,projectTitle:"Paper Tubes",title:"Paper Tubes",text:"A house made of cardboard tubes.",paragraph:"The location of this house is in a villa district in southern Stockholm. The aim was to increase housing in Stockholm by building on land owned by someone else, this way housing would increase with maximum use of property. The land owner could either sell or rent his property. I tried to create a generous house for one or two students, with courtesy, non extravagant touch on this shared land. Just like a butterfly, the house was supposed to be gentle without any harsh intervention on the ground, It was going to be spacious and affordable. These were my primary criterias. My references were taken from Shigeru Ban and his use of Cardboard tubes on different edifices around the world. Hence my construction is formed by the help of paper tube constructions by Shigeru Ban. This project has taught me loads and allowed me to experiment and invent new construction elements that can serve to cardboard tube architecture.",photos:[C,L,H,z,B,W,P,A,D,R,F],active:!1},{id:1,projectTitle:"Boring Architecture",title:"Boring Architecture",text:"Explore the role of architecture with our feelings and reactions to certain rooms and urban spaces.",paragraph:"Boring architecture is a research and experimentation that explores the role of architecture in regards to\n    how we feel and react to certain rooms and urban spaces. What triggers boring architecture, can architecture affect our mood\n    and emotions? This is a research project that aims to understand the links between architecture and human psychology.\n    Starting off with getting to know myself and what I find boring and what boring means to me.\n    Resulting with a model of my childhood bedroom has led me into understanding typologies around my neighborhood and\n    why some of them speak boring to me. I found myself in the middle of this more aware of my own architecture and\n    a widening knowledge of my surroundings. In the end I appreciate and understand \u200bInvisible Cities b\u200by Italo Calvino\n    and in the end I found the cities and neighborhoods that I would like to live in in some reality different than this.",photos:[G,V,Y,q,J,Z],active:!1},{id:2,projectTitle:"Gamla Stan",title:"Gamla Stan",text:"Capturing a culture.",paragraph:"This is a project aimed to lift and \u200bstrengthen\u200b the character of this urban area, located at the central of Stockholm city. Gamla Stan has been the spot for skinheads since 1980.\n    A place where skinheads would come to listen to music, make graffiti and simply spend time together.\n    Although Skinheads is a culture that has been neglected and denied for years, with my design of my graffiti walls I am to increase their visibility and get their voices heard, from pedestrians to the sea, the graffiti walls will be visible on all urban levels.\n    The concrete walls which will create unsafe semi-private rooms will be used for Graffiti painting.\n    By activating the place in this way I strongly believe I will catch a broader audience to the place (Skinheads, Hipsters, Gothics and indie kids etc).\n    By dedicating such a central place in Stockholm to subcultures I believe it can give the smaller groups a chance to integrate with the rest of the society and get their voices heard.",photos:[K,U,Q,X,$,_,ee,te],active:!1},{id:3,projectTitle:"Frames",title:"Frames",text:"To tell stories",paragraph:"To tell stories, through film, paintings, photography or architecture. To tell stories is my passion. In this day and age there are immense ways of expressing oneself and creating art. I am trying to find my own way to tell stories. Feelings, thoughts, people, buildings, words, the sun and the skies. To create something that tells a story must be the most satisfying thing so here I am experimenting with hand drawings, paintings and sketches and computer aided design. To experiment and explore ways to tell thoughts, express feelings, understand the surrounding and ultimately tell a story.",photos:[ie,ne,ae,ce,se,re,oe],active:!1},{id:4,projectTitle:"Balconies",title:"Balconies",text:"Balcony additions for the concrete facade",paragraph:"The Balconies project is an experimentation of how to work and play with an existing element / building. It is not necessarily aimed to fix anything but rather understand the existing beauty and brutality of a concrete structure and work with extending and creating new opportunities to its plan and facade. This project is proposing ways to add balconies to an existing concrete structure that is undergoing an interior change from office space to a hotel.\n    ",photos:[p,de,le,je,he,ue],active:!1},{id:5,projectTitle:"Furniture",title:"Furniture",text:"Outdoor seating, outdoor furniture",paragraph:"From baking bread to sketching, from tango dancing to understanding human motion, from sketching to model iteration and from the model to real life construction resulting in an outdoor seating. This is a creative journey that resulted in outdoor seating for the whole summer of 2020. This is a furniture project done for a restaurant in Stockholm. The owner wanted designer furniture for his outdoor seating that would highlight the essence of his restaurant and brand. The furniture was designed, made and constructed by me and my colleague.",photos:[pe,me,be,ge,Oe,fe,xe,ve,we],active:!1},{id:6,projectTitle:"Living On Edge",title:"Living On Edge",text:"A promenade on the edge of a mountain",paragraph:"The yoros castle is situated in a mountain chain in Istanbul overlooking the black sea. Tourists and visitors come to visit the castle and enjoy the extraordinary experience of the view. A\n    structure primarily made because of the need for a public bathroom, Living on the edge aims to not only provide public restrooms but to also give that little extra to its visitors. By placing niches just on the edge of the mountain, sitting will now feel like floating, and the view will be experienced through a birds-eye view. How would you like to live like a bird for a while, floating on the edge of this mountain.",photos:[ye,Ne,ke,Se,Ee,Ie,Te],active:!1},{id:7,projectTitle:"Pantheon",title:"Pantheon",text:"Exploring the undiscovered",paragraph:"This is an experiment based on discovering hidden architecture in Pantheon. What if we exaggerate, change, reorder and disorder certain elements. How can we rediscover Pantheon. Symbolism and architecture, Pantheon and Rome. Learning 3D printing and ways to connect facade, plan and section, we can continue endlessly to learn and rediscover treasures.",photos:[Me,Ce],active:!1}];function He(e){var t=e.toggle,i=e.transition,c=t.menuOpen,s=t.setMenuOpen,l=Object(a.useState)(Le),x=Object(r.a)(l,2),v=x[0],w=x[1],y=Object(a.useState)(!1),N=Object(r.a)(y,2),k=N[0],S=N[1],I=i.tranSwipe,T=i.tranSmooth,C=Object(d.g)(),L=Object(d.f)(),H=Object(f.e)({opacity:1,transition:Object(u.a)({delay:.8},I(.8))},{opacity:0,transition:I(.8)}),z=Object(r.a)(H,2),B=z[0],W=z[1],P=Object(f.f)(0);function A(){P.set(window.scrollY)}var D=function(e){e&&console.log("reference",e)},R=function(e){e&&console.log("reference",e)};Object(a.useEffect)((function(){var e=document.querySelector("html");return k?(window.removeEventListener("scroll",A),D(),e.classList.add("no-scroll")):(window.addEventListener("scroll",A),R(),e.classList.remove("no-scroll")),function(){window.removeEventListener("scroll",A)}}),[k]);var F=Object(f.d)();return Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.start({x:window.innerWidth,transition:I(1)});case 2:return e.next=4,F.start({width:0,transition:{duration:.1}});case 4:return e.next=6,F.start({x:0,transition:{duration:.1}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){L.replace()}),[]),Object(n.jsxs)(f.c.div,{className:"home-page",transition:I(1),children:[Object(n.jsx)(f.c.div,{className:"page-transition-element",initial:C.state?{width:"100%"}:"",animate:F,exit:{width:"100%",transition:I(1)}}),Object(n.jsx)(E,{toggle:{menuOpen:c,setMenuOpen:s},tranSwipe:I,tranSmooth:T,preview:k}),Object(n.jsxs)(f.c.div,{className:"home-content",transition:Object(u.a)({delay:.4},I(.8)),children:[Object(n.jsxs)("div",{className:"cover-image",children:[Object(n.jsx)("div",{className:"overlay"}),Object(n.jsx)("img",{src:p,alt:"Cover"})]}),Object(n.jsxs)(f.c.div,{className:"introduction-section",animate:B,children:[Object(n.jsx)("h1",{children:"About Me"}),Object(n.jsx)("h2",{style:{fontSize:"14px"},children:"I am a passionate designer with love for story telling through architecture and cinema."}),Object(n.jsx)("p",{children:"My background is in Architecture and design and I have a major interest for film and set design. Combining digital media and physcial modeling I love to come up with new designs, scenes and stories to tell.I Have a record of working with model making, graphical and technical presentations, conceptual design and art, sketches and drawings."}),Object(n.jsx)("img",{src:m}),Object(n.jsxs)("div",{className:"scroll-for-more",children:[Object(n.jsx)("p",{children:"scroll for projects"}),Object(n.jsx)(b,{})]})]}),Object(n.jsxs)("div",{className:"home-projects-section",children:[v.map((function(e,t){return t<3&&Object(n.jsx)(M,{index:t,state:{elements:v,element:e,setElements:w},toggle:{preview:k,setPreview:S},toggleHide:{hide:B,cycleHide:W},tranSwipe:I,scroll:P,enableReference:R,disableReference:D},t)})),Object(n.jsx)("img",{className:"projects-icon",src:O,alt:"projects-icon"}),Object(n.jsxs)(o.b,{to:{pathname:"/projects",state:!0},children:[Object(n.jsx)(f.c.button,{className:"link-button",whileTap:{scale:.9},children:Object(n.jsx)("span",{children:"Go to Projects"})}),Object(n.jsx)(g,{})]})]}),Object(n.jsx)("div",{className:"footer"})]})]})}var ze=i.p+"static/media/ProjectsCover.cb032996.jpg";function Be(e){var t=e.toggle,i=e.transition,c=Object(a.useState)(!1),s=Object(r.a)(c,2),o=s[0],d=s[1],l=t.menuOpen,p=t.setMenuOpen,m=i.tranSwipe,g=i.tranSmooth,O=Object(a.useState)(Le),x=Object(r.a)(O,2),v=x[0],w=x[1],y=Object(f.e)({opacity:1,transition:Object(u.a)({delay:.8},m(.8))},{opacity:0,transition:m(.8)}),N=Object(r.a)(y,2),k=N[0],S=N[1];Object(a.useEffect)((function(){0!==window.scrollY&&window.scrollTo(0,0)}),[]);var I=Object(f.f)(0);function T(){console.log("scrolled"),I.set(window.scrollY)}var C=function(e){},L=function(e){};Object(a.useEffect)((function(){var e=document.querySelector("html");return o?(e.classList.add("no-scroll"),window.removeEventListener("scroll",T)):(window.addEventListener("scroll",T),e.classList.remove("no-scroll")),function(){window.removeEventListener("scroll",T)}}),[o]);var H=Object(f.d)();return Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.start({x:window.innerWidth,transition:m(1)});case 2:return e.next=4,H.start({width:0,transition:{duration:.1}});case 4:return e.next=6,H.start({x:0,transition:{duration:.1}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[H]),Object(n.jsxs)("div",{className:"projects-page",children:[Object(n.jsx)(f.c.div,{className:"page-transition-element",initial:{width:"100%"},animate:H,exit:{width:"100%",transition:m(1)},transition:m(1)}),Object(n.jsx)(E,{toggle:{menuOpen:l,setMenuOpen:p},tranSwipe:m,tranSmooth:g,preview:o}),Object(n.jsxs)(f.c.div,{className:"projects-content",children:[Object(n.jsxs)("div",{className:"intro-to-projects",children:[Object(n.jsx)("p",{children:"Below you'll find the projects I did throughout my education in architecture. The projects are sorted out by priority."}),Object(n.jsxs)("div",{className:"image-container",children:[Object(n.jsx)("img",{src:ze}),Object(n.jsxs)("div",{className:"scroll-container",children:[Object(n.jsx)("p",{children:"scroll for projects"}),Object(n.jsx)(b,{color:"white"})]})]})]}),v.map((function(e,t){return Object(n.jsx)(M,{state:{element:e,elements:v,setElements:w},toggle:{preview:o,setPreview:d},index:t,toggleHide:{hide:k,cycleHide:S},tranSwipe:m,scroll:I,disableReference:C,enableReference:L},t)}))]})]})}function We(e){var t=e.advanced,i={parent:{initial:{opacity:1},animate:{opacity:1,transition:{staggerChildren:.3}}},child:{initial:{x:0},animate:{x:3,transition:{yoyo:1/0,duration:1.4}}}};return Object(n.jsx)("div",{className:"level-icon",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"9",fill:"none",viewBox:"0 0 12 9",children:Object(n.jsxs)(f.c.g,{id:"Advanced",fill:"#6E6E6E",initial:"initial",animate:"animate",variants:i.parent,children:[Object(n.jsx)(f.c.path,{id:"Right",d:"M8.753 9l-.61-.491L11.035 4.5 8.143.491 8.753 0 12 4.5 8.753 9z",variants:i.child}),Object(n.jsx)(f.c.path,{id:"Middle",d:"M4.896 9l-.61-.491L7.178 4.5 4.286.491 4.896 0l3.247 4.5L4.896 9z",variants:i.child}),t&&Object(n.jsx)(f.c.path,{id:"Left",d:"M1.04 9l-.611-.491L3.32 4.5.429.491 1.039 0l3.247 4.5L1.039 9z",variants:i.child})]})})})}var Pe=i.p+"static/media/CheckIcon.8f41f104.svg";function Ae(e){var t=e.toggle,i=e.transition,c=t.menuOpen,s=t.setMenuOpen,r=i.tranSwipe,o=i.tranSmooth,d=Object(f.d)();return Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.start({x:window.innerWidth,transition:r(1)});case 2:return e.next=4,d.start({width:0,transition:{duration:.1}});case 4:return e.next=6,d.start({x:0,transition:{duration:.1}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsxs)("div",{className:"skills-page",children:[Object(n.jsx)(f.c.div,{className:"page-transition-element",initial:{width:"100%"},animate:d,exit:{width:"100%",transition:r(1)},transition:r(1)}),Object(n.jsx)(E,{toggle:{menuOpen:c,setMenuOpen:s},tranSwipe:r,tranSmooth:o}),Object(n.jsxs)(f.c.div,{className:"skills-content",children:[Object(n.jsx)("div",{className:"skills-text",children:Object(n.jsxs)("p",{children:["I work with\xa0",Object(n.jsxs)("span",{children:["3D design ","&"," modelling, 2D illustrations and sketching and editing with Adobe CS6."]})]})}),Object(n.jsxs)("div",{className:"skills-info",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(We,{advanced:!0}),Object(n.jsx)("p",{children:"Advanced"})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(We,{advanced:!1}),Object(n.jsx)("p",{children:"Intermediate"})]}),Object(n.jsx)("div",{className:"row"})]}),Object(n.jsx)("div",{className:"skills-section",children:Object(n.jsx)("div",{className:"column",children:[{title:"2D Modeling",list:[{name:"AutoCad 2D",advanced:!0}]},{title:"3D Modeling",list:[{name:"Rhino 3D",advanced:!0},{name:"Sketch-up 3D",advanced:!1},{name:"Microstation",advanced:!0},{name:"3D point cloud",advanced:!0},{name:"Physical Modelling",advanced:!0}]},{title:"Editing",list:[{name:"Photoshop CS6",advanced:!0},{name:"Indesign CS6",advanced:!0},{name:"Illustrator CS6",advanced:!0}]}].map((function(e,t){return Object(n.jsxs)("div",{className:"skill-container",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsx)("div",{className:"skill-list-container",children:e.list.map((function(e,t){return Object(n.jsxs)("div",{className:"skill-row",children:[Object(n.jsx)("img",{src:Pe,alt:"check"}),Object(n.jsx)("p",{children:e.name}),Object(n.jsx)(We,{advanced:e.advanced})]})}))})]})}))})})]})]})}var De=i.p+"static/media/ContactCover.bcaf9beb.jpg",Re=i.p+"static/media/phoneIcon.c36c2833.svg";function Fe(e){var t=e.toggle,i=e.transition,c=t.menuOpen,s=t.setMenuOpen,r=i.tranSwipe,o=i.tranSmooth,d=Object(f.d)();return Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.start({x:window.innerWidth,transition:r(1)});case 2:return e.next=4,d.start({width:0,transition:{duration:.1}});case 4:return e.next=6,d.start({x:0,transition:{duration:.1}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsxs)("div",{className:"contact-page",children:[Object(n.jsx)(f.c.div,{className:"page-transition-element",initial:{width:"100%"},animate:d,exit:{width:"100%",transition:r(1)},transition:r(1)}),Object(n.jsx)(E,{toggle:{menuOpen:c,setMenuOpen:s},tranSwipe:r,tranSmooth:o}),Object(n.jsxs)(f.c.div,{className:"contact-content",children:[Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"text-aligner",children:Object(n.jsx)("p",{children:"Thank you for taking the time to browse through what I\u2019ve been doing. You can reach me using the contact information below."})}),Object(n.jsx)("div",{className:"signature",children:Object(n.jsx)("img",{src:m,alt:"signature"})}),Object(n.jsx)("h2",{children:"Contact Information"}),Object(n.jsxs)("div",{className:"email-container",children:[Object(n.jsx)("img",{src:y,alt:"email"}),Object(n.jsx)("p",{children:"diana.guney.93@gmail.com"})]}),Object(n.jsxs)("div",{className:"phone-container",children:[Object(n.jsx)("img",{src:Re,alt:"phone"}),Object(n.jsx)("p",{children:"+46 73 779 99 93"})]})]}),Object(n.jsxs)("div",{className:"image-container",children:[Object(n.jsx)("div",{className:"overlay"}),Object(n.jsx)("img",{src:De,alt:"contact-cover"})]})]})]})}function Ge(e){var t=e.tranSwipe,i=e.tranSmooth,c=Object(d.g)(),s=Object(a.useState)(null),l=Object(r.a)(s,2),j=l[0],h=l[1],u=S.filter((function(e){return c.pathname==="/".concat(e.link)}))[0].text.split("");return Object(a.useEffect)((function(){var e=S.filter((function(e){return"/".concat(e.link)===c.pathname}));"Home"===e[0].title?h(Object(n.jsx)(v,{tranSmooth:i,tranSwipe:t})):h(Object(n.jsx)("img",{src:e[0].icon,alt:e[0].title})),console.log("item",[e,c.pathname])}),[]),Object(n.jsxs)("div",{className:"navbar-desktop",children:[Object(n.jsx)("div",{className:"menu-icon",children:j}),Object(n.jsx)("div",{className:"menu-title",children:Object(n.jsx)(w,{title:u,tranSwipe:t})}),Object(n.jsx)("div",{className:"menu-items",children:S.map((function(e,t){return Object(n.jsx)(o.b,{to:{pathname:e.link,state:e.fromDashboard},children:Object(n.jsx)("h2",{children:e.text})},t)}))})]})}function Ve(e){var t=e.transition,i=t.tranSwipe,a=t.tranSmooth,c=Object(f.d)();return Object(n.jsxs)(f.c.div,{className:"home-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[Object(n.jsx)("div",{className:"navbar-container",children:Object(n.jsx)(Ge,{tranSmooth:a,tranSwipe:i})}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"text-column",children:[Object(n.jsxs)("div",{className:"text-container",children:[Object(n.jsxs)("h1",{children:["Archituecture ",Object(n.jsx)("br",{}),"&"," Illustrations"]}),Object(n.jsx)("h2",{children:"I am a passionate designer with love for story telling through architecture and cinema."}),Object(n.jsx)("p",{children:"My background is in Architecture and design and I have a major interest for film and set design. Combining digital media and physcial modeling I love to come up with new designs, scenes and stories to tell.I Have a record of working with model making, graphical and technical presentations, conceptual design and art, sketches and drawings."})]}),Object(n.jsxs)(f.c.div,{className:"button-container",children:[Object(n.jsx)(f.c.div,{className:"button",whileHover:function(){return c.start({x:0,y:0,rotateZ:0,scale:1})},onHoverEnd:function(){return c.start({x:-2,y:3,rotateZ:-3,scale:1.05})},children:Object(n.jsx)(o.b,{to:{pathname:"/projects",state:!1},children:Object(n.jsx)("button",{children:Object(n.jsx)("span",{children:"MY PORTFOLIO"})})})}),Object(n.jsx)(f.c.div,{className:"shadow",initial:{x:-2,y:3,rotateZ:-3,scale:1.05},animate:c})]})]}),Object(n.jsx)("div",{className:"visual-column",children:Object(n.jsxs)("div",{className:"circle-container",children:[Object(n.jsx)(f.c.div,{className:"circle-1",animate:{rotate:360},transition:{loop:1/0,duration:20,ease:"linear"}}),Object(n.jsx)("div",{className:"circle-2",children:Object(n.jsx)("div",{className:"circle-2-interior",children:Le[0].photos.map((function(e,t){return t<9&&Object(n.jsx)(f.c.div,{className:"image-container",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2*t},children:Object(n.jsx)("img",{src:e,alt:t})},t)}))})})]})})]})]})}function Ye(e){e.tranSwipe;var t=e.project,i=e.block,c=Object(a.useState)([]),s=Object(r.a)(c,2),o=s[0],d=s[1];return Object(a.useEffect)((function(){if(i.count){var e=t.photos.reduce((function(e,t,n){return n/i.count%1===0&&e.push(n),e}),[]);console.log("divide by",[e,t.photos.length]),d(e)}}),[i]),Object(n.jsxs)("div",{className:"project-container",children:[Object(n.jsx)("h1",{children:t.title}),Object(n.jsx)("p",{children:t.text}),Object(n.jsx)("div",{className:"slider-container",children:o.map((function(e,a){return Object(n.jsx)("div",{className:"slider-mask",children:t.photos.map((function(e,t){return t<i.count&&Object(n.jsx)("div",{className:"card",style:{width:i.width},children:Object(n.jsx)("div",{className:"slider-image-container",children:Object(n.jsx)("img",{className:"slider-image",src:e,alt:t})})},t)}))},a)}))})]})}function qe(e){var t=e.transition.tranSwipe,i=[{size:800,width:"".concat(25,"%"),count:4},{size:1100,width:"".concat(20,"%"),count:5},{size:3e3,width:"".concat(100/6,"%"),count:6}],c=Object(a.useState)({}),s=Object(r.a)(c,2),o=s[0],d=s[1],l=Object(a.useState)([]),j=Object(r.a)(l,2);j[0],j[1];return Object(a.useEffect)((function(){return window.innerWidth>1100?d({size:window.innerWidth,width:"".concat(100/6,"%"),count:6}):window.innerWidth<1100&&window.innerWidth>800?d({size:window.innerWidth,width:"".concat(20,"%"),count:5}):window.innerWidth<800&&d({size:window.innerWidth,width:"".concat(25,"%"),count:4}),window.addEventListener("resize",(function(){var e=[];i.map((function(t){window.innerWidth<t.size&&e.push(t)}));var t=e.reduce((function(e,t){return e.size<t.size?e:t}),e[0]);d(t)})),function(){window.removeEventListener("resize",(function(){var e=[];i.map((function(t){window.innerWidth<t.size&&e.push(t)}));var t=e.reduce((function(e,t){return e.size<t.size?e:t}),e[0]);d(t)}))}}),[]),Object(a.useEffect)((function(){}),[o]),Object(n.jsxs)("div",{className:"projects",children:[Object(n.jsx)(Ge,{tranSwipe:t}),Le.map((function(e,i){return Object(n.jsx)(Ye,{project:e,tranSwipe:t,block:o},i)}))]})}function Je(){return Object(n.jsx)(f.c.svg,{width:"10%",height:"50%",fill:"none",viewBox:"0 0 93 200",initial:"initial",animate:"animate",variants:{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:[0,.5,.7,1,1,1,0]}},transition:{repeat:1/0,duration:2,delay:1,ease:"easeInOut"},children:Object(n.jsxs)("g",{id:"Phone",stroke:"#6E6E6E",children:[Object(n.jsx)("rect",{id:"Device",width:"91.143",height:"199",x:"0.5",y:"0.5",rx:"14.5"}),Object(n.jsx)("path",{id:"Bottom",d:"M28 193.5L64 193.5"}),Object(n.jsx)("path",{id:"Top",fill:"#6E6E6E",d:"M21.519.5H70.48A6.5 6.5 0 0164 6.5H28a6.5 6.5 0 01-6.481-6z"})]})})}function Ze(){return Object(a.useEffect)((function(){document.querySelector(".landscape-text").scrollIntoView({behavior:"smooth"}),window.scrollTo({top:"40px",behavior:"smooth"})}),[]),Object(n.jsxs)(f.c.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2},className:"landscape",children:[Object(n.jsxs)("div",{className:"landscape-text",children:[Object(n.jsx)("h1",{children:"Move to Portrait Mode please"}),Object(n.jsx)("p",{children:"This is a portrait-only website. I'd kindly like to ask you to use my website in portrait mode please."}),Object(n.jsx)("h2",{children:"Thank you :)"})]}),Object(n.jsx)("div",{className:"landscape-visual",children:Object(n.jsx)("div",{className:"phone-container",children:Object(n.jsx)("div",{className:"phone",children:Object(n.jsx)(Je,{})})})})]})}var Ke=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),i=t[0],c=t[1],s=Object(a.useState)(window.innerWidth>500&&window.innerWidth<900&&window.innerHeight<500),l=Object(r.a)(s,2),j=l[0],h=l[1],u=Object(a.useState)(window.innerWidth>500&&window.innerHeight>500),p=Object(r.a)(u,2),m=p[0],b=p[1],g=function(e){return{duration:e,ease:[.6,.01,-.05,.9]}},O=function(e){return{duration:e,ease:[.43,.13,.23,.96]}};return Object(a.useEffect)((function(){return window.addEventListener("resize",(function(){h(window.innerWidth>500&&window.innerWidth<900&&window.innerHeight<500),b(window.innerWidth>500&&window.innerHeight>500)})),function(){window.removeEventListener("resize",(function(){h(window.innerWidth>500&&window.innerWidth<900&&window.innerHeight<500),b(window.innerWidth>500&&window.innerHeight>500)}))}})),Object(n.jsx)(n.Fragment,{children:j?Object(n.jsx)(Ze,{}):Object(n.jsx)(o.a,{basename:"/dianaguney",children:Object(n.jsx)(d.a,{render:function(e){var t=e.location;return Object(n.jsx)(f.a,{exitBeforeEnter:!0,children:Object(n.jsxs)(d.c,{location:t,children:[Object(n.jsx)(d.a,{exact:!0,path:"/",render:function(){return m?Object(n.jsx)(Ve,{transition:{tranSwipe:g,tranSmooth:O}}):Object(n.jsx)(He,{toggle:{menuOpen:i,setMenuOpen:c},transition:{tranSwipe:g,tranSmooth:O}})}}),Object(n.jsx)(d.a,{exact:!0,path:"/projects",render:function(){return m?Object(n.jsx)(qe,{transition:{tranSwipe:g,tranSmooth:O}}):Object(n.jsx)(Be,{toggle:{menuOpen:i,setMenuOpen:c},transition:{tranSwipe:g,tranSmooth:O}})}}),Object(n.jsx)(d.a,{exact:!0,path:"/skills",render:function(){return Object(n.jsx)(Ae,{toggle:{menuOpen:i,setMenuOpen:c},transition:{tranSwipe:g,tranSmooth:O}})}}),Object(n.jsx)(d.a,{exact:!0,path:"/contact",render:function(){return Object(n.jsx)(Fe,{toggle:{menuOpen:i,setMenuOpen:c},transition:{tranSwipe:g,tranSmooth:O}})}})]},t.pathname)})}})})})};s.a.render(Object(n.jsx)(Ke,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8aad1271.chunk.js.map