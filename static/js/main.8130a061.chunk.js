(this["webpackJsonpportfolio-aaron"]=this["webpackJsonpportfolio-aaron"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(6),i=n.n(c),r=(n.p,n.p,n(53),n(10)),l=(n(54),n(55),{en:{sectionTitle:"About Me",sectionContent:["Hi, I'm Aaron \u2013 UX/UI designer, Graphic Artist & Illustrator from Montreal. I'm interested in design and everything associated with it.","","Always ready and commited to implement excellent projects with wonderful people"]},fr:{sectionTitle:"\xc0 propos de moi",sectionContent:["Bonjour, je suis Aaron - Designer UX / UI, graphiste et illustrateur de Montr\xe9al. Je m'int\xe9resse au design et \xe0 tout ce qui y est associ\xe9.","","Toujours pr\xeat et engag\xe9 \xe0 mettre en \u0153uvre d'excellents projets avec des personnes formidables"]}}),o=n(2);function m(e){var t=Object(a.useState)(l[e.language]),n=Object(r.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){c(l[e.language])}),[e.language]),Object(o.jsx)("div",{className:"aboutContainer",children:Object(o.jsxs)("div",{className:"aboutInner",children:[Object(o.jsx)("div",{className:"title",children:s.sectionTitle}),Object(o.jsx)("div",{className:"content",children:s.sectionContent.map((function(e){return Object(o.jsxs)("div",{children:[e," ",Object(o.jsx)("br",{})]})}))})]})})}n(57);var j=n.p+"static/media/heroimage.9f6ba360.svg",u={en:{myName:["Aaron","Elkeslassy"],role:"UX | UI designer Montreal"},fr:{myName:["Aaron","Elkeslassy"],role:"UX | Designer UI Montr\xe9al"}};function g(e){var t=Object(a.useState)(u[e.language]),n=Object(r.a)(t,2),s=n[0],c=n[1],i=function(t){e.changeLanguage(t)};return Object(a.useEffect)((function(){c(u[e.language])}),[e.language]),Object(o.jsxs)("div",{className:"heroContainer",children:[Object(o.jsxs)("div",{className:"heroTop",children:[Object(o.jsxs)("div",{className:"heroTopItem name",children:[s.myName[0],Object(o.jsx)("br",{}),s.myName[1]]}),Object(o.jsx)("div",{className:"heroTopItem role",children:s.role}),Object(o.jsx)("div",{className:"heroTopItem language",children:Object(o.jsxs)("div",{className:"languageChoice",children:[Object(o.jsx)("div",{className:"languageFr ".concat("fr"===e.language?"selected":""),onClick:function(){return i("fr")},children:"FR"}),Object(o.jsx)("span",{className:"languageEn ".concat("en"===e.language?"selected":""),onClick:function(){return i("en")},children:"| ENG"})]})})]}),Object(o.jsx)("div",{className:"heroCicleImage",children:Object(o.jsx)("img",{src:j})})]})}var d=n(90),b=n(95),f=n(93),O=n(94),h=n(43),v=n.n(h),p=(n(58),{en:{menuItems:[{name:"Home",classRef:"mainContainer"},{name:"About",classRef:"aboutContainer"},{name:"Skills",classRef:"skillsContainer"},{name:"Projects",classRef:"projectsContainer"},{name:"Contact",classRef:"contactContainer"}]},fr:{menuItems:[{name:"Maison",classRef:"mainContainer"},{name:"Moi",classRef:"aboutContainer"},{name:"Competences",classRef:"skillsContainer"},{name:"Projets",classRef:"projectsContainer"},{name:"Contact",classRef:"contactContainer"}]}});function x(e){var t=Object(a.useState)(p[e.language]),n=Object(r.a)(t,2),s=n[0],c=n[1];Object(a.useEffect)((function(){c(p[e.language])}),[e.language]);var i=Object(a.useState)(!1),l=Object(r.a)(i,2),m=l[0],j=l[1],u=Object(a.useState)(s.menuItems[0].name),g=Object(r.a)(u,2),h=g[0],x=g[1],N=function(e){j(!1),setTimeout((function(){document.getElementsByClassName(e.classRef)[0].scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),50),x(e.name)},C=function(){x(s.menuItems[0].name)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}})),Object(o.jsxs)(a.Fragment,{children:[Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("div",{className:"navContainer",children:s.menuItems.map((function(e){return Object(o.jsx)("div",{className:"navItem ".concat(h===e.name?"selected":"inactive"),onClick:function(){return N(e)},children:e.name})}))}),Object(o.jsx)("div",{className:"navSeperator"})]}),Object(o.jsxs)("div",{className:"navbar-mobile",children:[Object(o.jsx)(d.a,{onClick:function(){return j(!0)},children:Object(o.jsx)(v.a,{})}),Object(o.jsx)(b.a,{anchor:"left",open:m,onClose:function(){return j(!1)},children:Object(o.jsx)(f.a,{children:s.menuItems.map((function(e){return Object(o.jsxs)(O.a,{className:"navItem",onClick:function(){return N(e)},children:[" ",e.name," "]})}))})})]})]})}n(67);var N=n.p+"static/media/florida-natural.0b88c6a9.svg",C=n.p+"static/media/jazztown.d6f06697.svg",I=n.p+"static/media/teatime.dd93faad.svg",k="https://imgur.com/SpMeABR.gif",T="https://imgur.com/xAzPSbh.gif",U={en:{sectionTitle:"My Projects",projects:[{name:"Florida's Natural",image:N,size:"full",gifUrl:k},{name:"Jazztown",image:C,size:"half",gifUrl:T},{name:"TeaTime",image:I,size:"half"}]},fr:{sectionTitle:"Mes Projectiz",projects:[{name:"Florida's Natural",image:N,size:"full",gifUrl:k},{name:"Jazztown",image:C,size:"half",gifUrl:T},{name:"TeaTime",image:I,size:"half"}]}},A=n(96);function S(e){var t=Object(a.useState)({active:!1,gifUrl:""}),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(U[e.language]),l=Object(r.a)(i,2),m=l[0],j=l[1];Object(a.useEffect)((function(){j(U[e.language])}),[e.language]);return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("div",{className:"projectsContainer",children:Object(o.jsxs)("div",{className:"projectsInner",children:[Object(o.jsx)("div",{className:"projectsTitle",children:m.sectionTitle}),Object(o.jsx)("div",{className:"projectContent",children:m.projects.map((function(e){return Object(o.jsxs)("div",{className:"projectContainer ".concat(e.size," ").concat(e.gifUrl?"clickable":""),onClick:function(){return function(e){e.gifUrl&&c({active:!0,gifUrl:e.gifUrl})}(e)},children:[Object(o.jsx)("img",{className:"projectImage",src:e.image}),Object(o.jsx)("div",{className:"projectTitle",children:e.name})]})}))})]})}),Object(o.jsx)(A.a,{open:s.active,onClose:function(){return c({active:!1,gifUrl:""})},onClick:function(){return c({active:!1,gifUrl:""})},children:Object(o.jsx)("div",{className:"modalContainer",children:Object(o.jsx)("img",{className:"modalGif",src:s.gifUrl})})})]})}n(68);var z=n.p+"static/media/ps.8f7a592b.svg",E=n.p+"static/media/illu.1f0bf279.svg",w=n.p+"static/media/ae.129a4b4f.svg",y=n.p+"static/media/figma.e7e7b9a1.svg",F={en:{sectionTitle:"Skills",sectionContent:"Programs I Use",skills:[{name:"Adobe \n Photoshop",img:z},{name:"Adobe \n Illustrator",img:E},{name:"Adobe \n After Effects",img:w},{name:"Figma",img:y}]},fr:{sectionTitle:"French",sectionContent:"Programs I Use",skills:[{name:"Adobe \n Photoshop",img:z},{name:"Adobe \n Illustrator",img:E},{name:"Adobe \n After Effects",img:w},{name:"Figma",img:y}]}};function R(e){var t=Object(a.useState)(F[e.language]),n=Object(r.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){c(F[e.language])}),[e.language]),Object(o.jsx)("div",{className:"skillsContainer",children:Object(o.jsxs)("div",{className:"skillsInner",children:[Object(o.jsx)("div",{className:"titleSkills",children:s.sectionTitle}),Object(o.jsx)("div",{className:"contentSkills",children:s.sectionContent}),Object(o.jsx)("div",{className:"skillItems",children:s.skills.map((function(e){return Object(o.jsxs)("div",{className:"skillContainer",children:[Object(o.jsx)("img",{src:e.img}),Object(o.jsx)("div",{className:"skillName",children:e.name})]})}))})]})})}n(69);var M=n.p+"static/media/instagram.28175e8c.svg",P=n.p+"static/media/dribble.703a0ac6.svg",L=n.p+"static/media/linkedin.9411914e.svg",J={en:{sectionTitle:"Contact Me",sectionFooter:"Like me on LinkedIn, Instagram, Dribble",images:[{img:L,url:"http://linkedin.com"},{img:M,url:"https://instagram.com"},{img:P,url:"https://dribbble.com/"}]},fr:{sectionTitle:"Contactez moi",sectionFooter:"Aimez-moi sur LinkedIn, Instagram, Dribble",images:[{img:L,url:"http://linkedin.com"},{img:M,url:"https://instagram.com"},{img:P,url:"https://dribbble.com/"}]}};function B(e){var t=Object(a.useState)(J[e.language]),n=Object(r.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){c(J[e.language])}),[e.language]),Object(o.jsx)("div",{className:"contactContainer",children:Object(o.jsxs)("div",{className:"contactInner",children:[Object(o.jsx)("div",{className:"contactTitle",children:s.sectionTitle}),Object(o.jsx)("div",{className:"contactIcons",children:s.images.map((function(e){return Object(o.jsx)("a",{className:"contactIcon",href:e.url,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:e.img})})}))}),Object(o.jsx)("div",{className:"contactFooter",children:s.sectionFooter})]})})}function D(){var e=Object(a.useState)("en"),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(o.jsxs)("div",{className:"mainContainer",children:[Object(o.jsx)(x,{language:n}),Object(o.jsx)(g,{changeLanguage:s,language:n}),Object(o.jsx)(m,{language:n}),Object(o.jsx)(R,{language:n}),Object(o.jsx)(S,{language:n}),Object(o.jsx)(B,{language:n})]})}i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.8130a061.chunk.js.map