(this["webpackJsonpportfolio-aaron"]=this["webpackJsonpportfolio-aaron"]||[]).push([[0],{53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(6),i=t.n(c),o=(t.p,t.p,t(53),t(10)),l=(t(54),t(55),{en:{sectionTitle:"About Me",sectionContent:["Hi, I'm Aaron \u2013 UX/UI designer, Graphic Artist & Illustrator from Montreal. I'm captivated by innovative and out-of-the-box design.","","Always looking foreward to adding my personal flair onto quality projects."]},fr:{sectionTitle:"\xc0 Propos de Moi",sectionContent:["Bonjour, je suis Aaron - Designer UX / UI, graphiste et illustrateur de Montr\xe9al. Je suis captiv\xe9 par le design innovant et cr\xe9atif.","","Toujours pr\xeat d'ajouter mon flair personnel \xe0 des projets de qualit\xe9."]}}),r=t(2);function m(e){var a=Object(n.useState)(l[e.language]),t=Object(o.a)(a,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){c(l[e.language])}),[e.language]),Object(r.jsx)("div",{className:"aboutContainer",children:Object(r.jsxs)("div",{className:"aboutInner",children:[Object(r.jsx)("div",{className:"title",children:s.sectionTitle}),Object(r.jsx)("div",{className:"content",children:s.sectionContent.map((function(e){return Object(r.jsxs)("div",{children:[e," ",Object(r.jsx)("br",{})]})}))})]})})}t(57);var j=t.p+"static/media/RotatingProfile.5ae78218.mp4",d={en:{myName:["Aaron","Elkeslassy"],role:"UX | UI designer, Montreal"},fr:{myName:["Aaron","Elkeslassy"],role:"UX | UI designer, Montr\xe9al"}};function u(e){var a=Object(n.useState)(d[e.language]),t=Object(o.a)(a,2),s=t[0],c=t[1],i=function(a){e.changeLanguage(a)};return Object(n.useEffect)((function(){c(d[e.language])}),[e.language]),Object(r.jsxs)("div",{className:"heroContainer",children:[Object(r.jsxs)("div",{className:"heroTop",children:[Object(r.jsxs)("div",{className:"heroTopItem name",children:[s.myName[0],Object(r.jsx)("br",{}),s.myName[1]]}),Object(r.jsx)("div",{className:"heroTopItem role",children:s.role}),Object(r.jsx)("div",{className:"heroTopItem language",children:Object(r.jsxs)("div",{className:"languageChoice",children:[Object(r.jsx)("div",{className:"languageFr ".concat("fr"===e.language?"selected":""),onClick:function(){return i("fr")},children:"FR"}),Object(r.jsx)("span",{className:"languageDivider",children:" | "}),Object(r.jsx)("span",{className:"languageEn ".concat("en"===e.language?"selected":""),onClick:function(){return i("en")},children:"ENG"})]})})]}),Object(r.jsx)("div",{className:"heroCicleImage",children:Object(r.jsx)("video",{className:"CircleSpin",autoPlay:!0,muted:!0,src:j})})]})}var g=t(90),b=t(95),f=t(93),v=t(94),O=t(43),p=t.n(O),h=(t(58),{en:{menuItems:[{name:"Home",classRef:"mainContainer"},{name:"About",classRef:"aboutContainer"},{name:"Skills",classRef:"skillsContainer"},{name:"Projects",classRef:"projectsContainer"},{name:"Contact",classRef:"contactContainer"}]},fr:{menuItems:[{name:"Acceuil",classRef:"mainContainer"},{name:"Moi",classRef:"aboutContainer"},{name:"Comp\xe9tences",classRef:"skillsContainer"},{name:"Projets",classRef:"projectsContainer"},{name:"Contact",classRef:"contactContainer"}]}});function x(e){var a=Object(n.useState)(h[e.language]),t=Object(o.a)(a,2),s=t[0],c=t[1];Object(n.useEffect)((function(){c(h[e.language])}),[e.language]);var i=Object(n.useState)(!1),l=Object(o.a)(i,2),m=l[0],j=l[1],d=Object(n.useState)(s.menuItems[0].name),u=Object(o.a)(d,2),O=u[0],x=u[1],N=function(e){j(!1),setTimeout((function(){document.getElementsByClassName(e.classRef)[0].scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),50),x(e.name)},C=function(){x(s.menuItems[0].name)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}})),Object(r.jsxs)(n.Fragment,{children:[Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("div",{className:"navContainer",children:s.menuItems.map((function(e){return Object(r.jsx)("div",{className:"navItem ".concat(O===e.name?"selected":"inactive"),onClick:function(){return N(e)},children:e.name})}))}),Object(r.jsx)("div",{className:"navSeperator"})]}),Object(r.jsxs)("div",{className:"navbar-mobile",children:[Object(r.jsx)(g.a,{onClick:function(){return j(!0)},children:Object(r.jsx)(p.a,{})}),Object(r.jsx)(b.a,{anchor:"left",open:m,onClose:function(){return j(!1)},children:Object(r.jsx)(f.a,{children:s.menuItems.map((function(e){return Object(r.jsxs)(v.a,{className:"navItem",onClick:function(){return N(e)},children:[" ",e.name," "]})}))})})]})]})}t(67);var N=t.p+"static/media/florida-natural.7a6625f8.svg",C=t.p+"static/media/jazztown.39eb8b08.svg",k=t.p+"static/media/teatime.221b4c79.svg",I=t.p+"static/media/garden.d88b954d.png",T=t.p+"static/media/SpaceX.3ca29f14.svg",z=t.p+"static/media/florida.5990a5cb.mp4",A=t.p+"static/media/jazz.6a3d7bea.mp4",S=t.p+"static/media/space.d18cf18b.mp4",w={en:{sectionTitle:"My Projects",projects:[{name:"SpaceX",image:T,size:"full",video:S},{name:"Jazztown",image:C,size:"half",video:A},{name:"TeaTime",image:k,size:"half"},{name:"Florida's Natural",image:N,size:"full",video:z},{name:"Auto-Garden",image:I,size:"full"}]},fr:{sectionTitle:"Projets",projects:[{name:"SpaceX",image:T,size:"full",video:S},{name:"Jazztown",image:C,size:"half",video:A},{name:"TeaTime",image:k,size:"half"},{name:"Florida's Natural",image:N,size:"full",video:z},{name:"Auto-Garden",image:I,size:"full"}]}},y=t(96);function E(e){var a=Object(n.useState)({active:!1,video:""}),t=Object(o.a)(a,2),s=t[0],c=t[1],i=Object(n.useState)(w[e.language]),l=Object(o.a)(i,2),m=l[0],j=l[1];Object(n.useEffect)((function(){j(w[e.language])}),[e.language]);return Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)("div",{className:"projectsContainer",children:Object(r.jsxs)("div",{className:"projectsInner",children:[Object(r.jsx)("div",{className:"projectsTitle",children:m.sectionTitle}),Object(r.jsx)("div",{className:"projectContent",children:m.projects.map((function(e){return Object(r.jsxs)("div",{className:"projectContainer ".concat(e.size," ").concat(e.video?"clickable":""),onClick:function(){return function(e){e.video&&c({active:!0,video:e.video})}(e)},children:[Object(r.jsx)("img",{className:"projectImage",src:e.image}),Object(r.jsx)("div",{className:"projectTitle",children:e.name})]})}))})]})}),Object(r.jsx)(y.a,{open:s.active,onClose:function(){return c({active:!1,video:""})},onClick:function(){return c({active:!1,video:""})},children:Object(r.jsx)("div",{className:"modalContainer",children:Object(r.jsx)("video",{autoPlay:!0,children:Object(r.jsx)("source",{src:s.video})})})})]})}t(68);var R=t.p+"static/media/ps.5175f318.svg",F=t.p+"static/media/illu.42d021c6.svg",P=t.p+"static/media/ae.6518757e.svg",M=t.p+"static/media/figma.bef500ad.svg",L={en:{sectionTitle:"Skills",sectionContent:"Programs I use regularely...",skills:[{name:"Adobe \n Photoshop",img:R},{name:"Adobe \n Illustrator",img:F},{name:"Adobe \n After Effects",img:P},{name:"Figma",img:M}]},fr:{sectionTitle:"Comp\xe9tences",sectionContent:"Les logiciels que j'utulise souvent...",skills:[{name:"Adobe \n Photoshop",img:R},{name:"Adobe \n Illustrator",img:F},{name:"Adobe \n After Effects",img:P},{name:"Figma",img:M}]}};function U(e){var a=Object(n.useState)(L[e.language]),t=Object(o.a)(a,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){c(L[e.language])}),[e.language]),Object(r.jsx)("div",{className:"skillsContainer",children:Object(r.jsxs)("div",{className:"skillsInner",children:[Object(r.jsx)("div",{className:"titleSkills",children:s.sectionTitle}),Object(r.jsx)("div",{className:"contentSkills",children:s.sectionContent}),Object(r.jsx)("div",{className:"skillItems",children:s.skills.map((function(e){return Object(r.jsxs)("div",{className:"skillContainer",children:[Object(r.jsx)("img",{src:e.img}),Object(r.jsx)("div",{className:"skillName",children:e.name})]})}))})]})})}t(69);var X=t.p+"static/media/instagram.5d610827.svg",J=t.p+"static/media/dribble.3ad033bd.svg",D=t.p+"static/media/linkedin.c8e66468.svg",G={en:{sectionTitle:"Contact Me",sectionFooter:"Like me on LinkedIn, Instagram, Dribble",images:[{img:D,url:"http://linkedin.com"},{img:X,url:"https://www.instagram.com/aaronelkeslassy/"},{img:J,url:"https://dribbble.com/"}]},fr:{sectionTitle:"Contactez moi",sectionFooter:"Aimez-moi sur LinkedIn, Instagram, Dribble",images:[{img:D,url:"http://linkedin.com"},{img:X,url:"https://www.instagram.com/aaronelkeslassy/"},{img:J,url:"https://dribbble.com/"}]}};function q(e){var a=Object(n.useState)(G[e.language]),t=Object(o.a)(a,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){c(G[e.language])}),[e.language]),Object(r.jsx)("div",{className:"contactContainer",children:Object(r.jsxs)("div",{className:"contactInner",children:[Object(r.jsx)("div",{className:"contactTitle",children:s.sectionTitle}),Object(r.jsx)("div",{className:"contactIcons",children:s.images.map((function(e){return Object(r.jsx)("a",{className:"contactIcon",href:e.url,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:e.img})})}))}),Object(r.jsx)("div",{className:"contactFooter",children:s.sectionFooter})]})})}function B(){var e=Object(n.useState)("en"),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsx)(x,{language:t}),Object(r.jsx)(u,{changeLanguage:s,language:t}),Object(r.jsx)(m,{language:t}),Object(r.jsx)(U,{language:t}),Object(r.jsx)(E,{language:t}),Object(r.jsx)(q,{language:t})]})}i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.0bdc8930.chunk.js.map