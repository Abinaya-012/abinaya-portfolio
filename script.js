/* PARTICLE BACKGROUND */
const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");
function resize(){canvas.width=innerWidth; canvas.height=innerHeight;}
resize(); window.addEventListener("resize",resize);
let particles=Array.from({length:100},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:Math.random()-0.5,dy:Math.random()-0.5}));
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="#38bdf8";ctx.fill();p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>canvas.width)p.dx*=-1;if(p.y<0||p.y>canvas.height)p.dy*=-1;});requestAnimationFrame(animate);}
animate();

/* TYPING */
const typing=document.getElementById("typing");
const text="AI & Data Science Student | ML Enthusiast";
let i=0;(function type(){if(i<text.length){typing.textContent+=text.charAt(i++);setTimeout(type,70);}})();

/* CURSOR FOLLOW */
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px"; cursor.style.top=e.clientY+"px";});

/* ACTIVE NAV ON SCROLL */
const sections=document.querySelectorAll("section");
const links=document.querySelectorAll(".navbar a");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(sec=>{if(scrollY>=sec.offsetTop-200) current=sec.id;});
    links.forEach(a=>{a.classList.remove("active"); if(a.getAttribute("href")==="#"+current) a.classList.add("active");});
});

/* DARK MODE TOGGLE */
const toggle=document.getElementById("themeToggle");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    toggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});

/* POPUP INTERACTIONS FOR PROJECTS AND ACHIEVEMENTS */
const projectCards=document.querySelectorAll(".project-card");
projectCards.forEach(card=>{
    card.addEventListener("click",()=>{
        alert(card.querySelector("h3").textContent+"\n\n"+card.querySelector("p").textContent);
    });
});
const achievementCards=document.querySelectorAll(".achievement-card");
achievementCards.forEach(card=>{
    card.addEventListener("click",()=>{
        alert(card.querySelector("h3").textContent+"\n\n"+card.querySelector("p").textContent);
    });
});
