(this["webpackJsonpportfolio-aaron"]=this["webpackJsonpportfolio-aaron"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(6),s=n.n(i),r=(n.p,n.p,n(53),n(54),n(55),["Hi, I'm Aaron \u2013 UX/UI designer, Graphic Artist & Illustrator from Montreal. I'm interested in design and everything associated with it.","","Always ready and commited to implement excellent projects with wonderful people"]),l=n(2);function o(){return Object(l.jsx)("div",{className:"aboutContainer",children:Object(l.jsxs)("div",{className:"aboutInner",children:[Object(l.jsx)("div",{className:"title",children:" About Me"}),Object(l.jsx)("div",{className:"content",children:r.map((function(e){return Object(l.jsxs)("div",{children:[e," ",Object(l.jsx)("br",{})]})}))})]})})}n(57);var m=n.p+"static/media/heroimage.9f6ba360.svg";function j(){return Object(l.jsxs)("div",{className:"heroContainer",children:[Object(l.jsxs)("div",{className:"heroTop",children:[Object(l.jsxs)("div",{className:"heroTopItem name",children:["Aaron",Object(l.jsx)("br",{}),"Elkeslassy"]}),Object(l.jsx)("div",{className:"heroTopItem role",children:"UX | UI designer Montreal"}),Object(l.jsx)("div",{className:"heroTopItem language",children:Object(l.jsxs)("div",{className:"languageChoice",children:[" ",Object(l.jsx)("div",{className:"languageFR",children:"FR"})," | ENG "]})})]}),Object(l.jsx)("div",{className:"heroCicleImage",children:Object(l.jsx)("img",{src:m})})]})}var d=n(26),b=n(90),u=n(95),f=n(93),h=n(94),v=n(43),O=n.n(v);n(58);function g(){var e=[{name:"Home",classRef:"mainContainer"},{name:"About",classRef:"aboutContainer"},{name:"Skills",classRef:"skillsContainer"},{name:"Projects",classRef:"projectsContainer"},{name:"Contact",classRef:"contactContainer"}],t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(e[0].name),r=Object(d.a)(s,2),o=r[0],m=r[1],j=function(e){i(!1),setTimeout((function(){document.getElementsByClassName(e.classRef)[0].scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),50),m(e.name)},v=function(){m(e[0].name)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}})),Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("div",{className:"navContainer",children:e.map((function(e){return Object(l.jsx)("div",{className:"navItem ".concat(o===e.name?"selected":"inactive"),onClick:function(){return j(e)},children:e.name})}))}),Object(l.jsx)("div",{className:"navSeperator"})]}),Object(l.jsxs)("div",{className:"navbar-mobile",children:[Object(l.jsx)(b.a,{onClick:function(){return i(!0)},children:Object(l.jsx)(O.a,{})}),Object(l.jsx)(u.a,{anchor:"left",open:a,onClose:function(){return i(!1)},children:Object(l.jsx)(f.a,{children:e.map((function(e){return Object(l.jsxs)(h.a,{className:"navItem",onClick:function(){return j(e)},children:[" ",e.name," "]})}))})})]})]})}n(67);var x=[{name:"Florida's Natural",image:n.p+"static/media/florida-natural.0b88c6a9.svg",size:"full",gifUrl:"https://imgur.com/SpMeABR.gif"},{name:"Jazztown",image:n.p+"static/media/jazztown.d6f06697.svg",size:"half",gifUrl:"https://imgur.com/xAzPSbh.gif"},{name:"TeaTime",image:n.p+"static/media/teatime.dd93faad.svg",size:"half"}],p=n(96);function N(){var e=Object(c.useState)({active:!1,gifUrl:""}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("div",{className:"projectsContainer",children:Object(l.jsxs)("div",{className:"projectsInner",children:[Object(l.jsx)("div",{className:"projectsTitle",children:"My Projects"}),Object(l.jsx)("div",{className:"projectContent",children:x.map((function(e){return Object(l.jsxs)("div",{className:"projectContainer ".concat(e.size," ").concat(e.gifUrl?"clickable":""),onClick:function(){return function(e){e.gifUrl&&a({active:!0,gifUrl:e.gifUrl})}(e)},children:[Object(l.jsx)("img",{className:"projectImage",src:e.image}),Object(l.jsx)("div",{className:"projectTitle",children:e.name})]})}))})]})}),Object(l.jsx)(p.a,{open:n.active,onClose:function(){return a({active:!1,gifUrl:""})},onClick:function(){return a({active:!1,gifUrl:""})},children:Object(l.jsx)("div",{className:"modalContainer",children:Object(l.jsx)("img",{className:"modalGif",src:n.gifUrl})})})]})}n(68);var C=[{name:"Adobe \n Photoshop",img:n.p+"static/media/ps.8f7a592b.svg"},{name:"Adobe \n Illustrator",img:n.p+"static/media/illu.1f0bf279.svg"},{name:"Adobe \n After Effects",img:n.p+"static/media/ae.129a4b4f.svg"},{name:"Figma",img:n.p+"static/media/figma.e7e7b9a1.svg"}];function k(){return Object(l.jsx)("div",{className:"skillsContainer",children:Object(l.jsxs)("div",{className:"skillsInner",children:[Object(l.jsx)("div",{className:"titleSkills",children:"Skills"}),Object(l.jsx)("div",{className:"contentSkills",children:"I\u2019ve recently been working with..."}),Object(l.jsx)("div",{className:"skillItems",children:C.map((function(e){return Object(l.jsxs)("div",{className:"skillContainer",children:[Object(l.jsx)("img",{src:e.img}),Object(l.jsx)("div",{className:"skillName",children:e.name})]})}))})]})})}n(69);var I=n.p+"static/media/instagram.28175e8c.svg",w=n.p+"static/media/dribble.703a0ac6.svg",U=[{img:n.p+"static/media/linkedin.9411914e.svg",url:"http://linkedin.com"},{img:I,url:"https://instagram.com"},{img:w,url:"https://dribbble.com/"}];function A(){return Object(l.jsx)("div",{className:"contactContainer",children:Object(l.jsxs)("div",{className:"contactInner",children:[Object(l.jsx)("div",{className:"contactIcons",children:U.map((function(e){return Object(l.jsx)("a",{className:"contactIcon",href:e.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:e.img})})}))}),Object(l.jsx)("div",{className:"contactFooter",children:"Like me on LinkedIn, Instagram, Dribble"})]})})}function S(){return Object(l.jsxs)("div",{className:"mainContainer",children:[Object(l.jsx)(g,{}),Object(l.jsx)(j,{}),Object(l.jsx)(o,{}),Object(l.jsx)(k,{}),Object(l.jsx)(N,{}),Object(l.jsx)(A,{})]})}s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1a45eacb.chunk.js.map