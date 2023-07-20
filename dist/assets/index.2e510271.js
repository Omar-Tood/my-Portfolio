import{j as t,a as e,S as m,P as x,A as h,b as g,r as o,R as p,B as f}from"./vendor.c1c4b9a8.js";const u=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};u();var y="/assets/myHero.81bb4179.png";const b=()=>{const i=["logo-instagram","logo-facebook","logo-linkedin","logo-twitter"];return t("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:y,alt:"",className:"md:w-11/12 h-full object-cover"})}),e("div",{className:"flex-1",children:t("div",{className:"md:text-left text-center",children:[t("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[t("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Omar Jibril"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Fullstack Developer"}),e("button",{className:"btn-primary mt-8",children:"Contact Me"}),e("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:i==null?void 0:i.map(l=>e("div",{className:"text-gray-600 hover:text-white cursor-pointer ",children:e("ion-icon",{name:l})},l))})]})})]})};var d="/assets/Hireme1.992f0532.png";const v=()=>e("section",{id:"about",className:"py-10 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),t("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-2",children:t("div",{className:"text-gray-300 my-3",children:[e("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:"Hello there! I'm Omar jibril Abdulkadir, a passionate and creative web developer based in Mogadishu. From a young age, I've always been fascinated by technology and how it empowers us to connect, communicate, and build meaningful experiences online. My journey in web development started during my college years when I took my first coding class. Since then, I've been hooked and dedicated myself to mastering various web technologies. Over the years, I've had the privilege of working on a diverse range of projects, from building responsive websites for small businesses to crafting robust web applications for enterprise clients. Thank you for visiting my portfolio!"}),e("div",{className:"flex mt-10 items-center gap-7",children:[{text:"Years experience",count:"02"},{text:"Completed Projects",count:"40"},{text:"Companies Work",count:"01"}].map(l=>t("div",{children:[t("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:[l.count,e("span",{className:"text-cyan-600",children:"+"})," "]}),e("span",{className:"md:text-base text-xs",children:l.text})]},l.text))}),e("br",{}),e("br",{}),e("a",{href:"./src/assets/Professional CV Resume.pdf",download:!0,children:e("button",{className:"btn-primary",children:"Download CV"})})]})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:d,alt:"",className:"w-full object-cover bg-cyan-600 rounded-xl"})})})]})]})}),N=()=>{const i=[{logo:"logo-html5",level:"Advance",count:95},{logo:"logo-css3",level:"Intermidate",count:70},{logo:"logo-nodejs",level:"Beginner",count:20},{logo:"logo-react",level:"Beginner",count:30},{logo:"logo-javascript",level:"Intermidate",count:75}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:t("div",{className:"mt-8 text-gray-100 text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:i==null?void 0:i.map((l,n)=>t("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl",children:[e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${l.count}%,#ddd ${l.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:l.logo})})}),e("p",{className:"text-xl mt-3",children:l.level})]},n))})]})})};var w="/assets/Expense-tracker-projec1.24b9d4ac.png",k="/assets/fecbook-clone-projec3.36c0948f.png",j="/assets/Linked-clone-projec2.a3cf0bff.png";const M=()=>t("section",{id:"projects",className:"py-10 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),t("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:[e("div",{className:"lg:w-2/3 w-full",children:e(m,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[x,h],children:[{img:w,name:"Expense Tracke Manager",github_link:"https://github.com/Engr-Pirlo/Expense-Tracker",live_link:"expense-tracker-black-pi.vercel.app"},{img:k,name:"Fecbook-Clone",github_link:"https://github.com/Engr-Pirlo/Facebook-Clone",live_link:"https://facebook-clone-beryl-five.vercel.app/"},{img:j,name:"Linked-Clone",github_link:"https://github.com/Engr-Pirlo/Linked-Clone",live_link:"https://linked-clone12.vercel.app/"}].map((l,n)=>e(g,{children:t("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:l.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:l.name}),t("div",{className:"flex gap-3",children:[e("a",{href:l.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:l.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},n))})}),e("div",{className:"lg:block hidden",children:e("img",{src:d,alt:""})})]})]}),I=()=>t("section",{id:"hireme",className:"py-10 px-3 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["Hire ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Do you have any work?"})]}),t("div",{className:"bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center",children:[t("div",{children:[e("h2",{className:"text-2xl font-semibold",children:"Do you want any work from me?"}),e("p",{className:"lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6",children:"If you have a job you can give me because I am qualified for this job because of my experience so I hope you will hire me I am sure I will get this job as expected and I will work for my value and I will not get paid!\u{1F618}"}),e("button",{className:"btn-primary mt-10",children:"Say Hello"})]}),e("img",{src:d,alt:"",className:"lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"})]})]}),S=()=>e("section",{id:"contact",className:"py-10 px-3 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),t("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[t("form",{className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",placeholder:"Your Name"}),e("input",{type:"Email",placeholder:"Your Email Address"}),e("textarea",{placeholder:"Your Message",rows:10}),e("button",{className:"btn-primary w-fit",children:"Send Message"})]}),e("div",{className:"flex flex-col  gap-7 ",children:[{logo:"mail",text:"omarjibrilabdulkhadir"},{logo:"logo-whatsapp",text:"+252617014906"},{logo:"location",text:"Mogadishu-Somali"}].map((l,n)=>t("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:l.logo})}),e("p",{className:"md:text-base text-sm  break-words",children:l.text})]},n))})]})]})}),C=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2023 ENGR-PIRLO Rights reserved."}),E=()=>{const[i,l]=o.exports.useState(!1),[n,c]=o.exports.useState(!1),r=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"},{name:"CONTACT",link:"#contact"}];return o.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?l(!0):l(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${i?"bg-white/60  text-gray-900":"text-white"}`,children:t("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:t("h4",{className:"text-4xl uppercase font-bold",children:["Eng",e("span",{className:"text-cyan-600",children:"Omar"}),"Jibril"]})}),e("div",{className:` ${i?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:r==null?void 0:r.map((a,s)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},s))})}),e("div",{onClick:()=>c(!n),className:`z-[999]  ${n?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${n?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:r==null?void 0:r.map((a,s)=>e("li",{onClick:()=>c(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},s))})})]})})},O=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("ion-icon",{name:"chatbubble-ellipses"})}),P=()=>t("div",{children:[e(E,{}),e(O,{}),e(b,{}),e(v,{}),e(N,{}),e(I,{}),e(M,{}),e(S,{}),e(C,{})]});p.render(e(f,{children:e(P,{})}),document.getElementById("root"));