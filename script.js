document.querySelector("#ser").addEventListener("mouseover",function(){
  document.querySelector("#nav").style.borderBottom="1px solid rgba(33, 33, 33, 0.518)"
  document.querySelector("#service").style.opacity=1;
  document.querySelector("#service").style.transition=".6s ease";
})
document.querySelector("#service").addEventListener("mouseleave",function(){
  document.querySelector("#service").style.opacity=0;
  document.querySelector("#nav").style.borderBottom="none" 
  document.querySelector("#service").style.transition=".6s ease";
})
var menu = document.querySelector("#menu")
var nav = document.querySelector("#overlay-nav")
var line1 = document.querySelector("#menu1")
var line2= document.querySelector("#menu2")
var line3= document.querySelector("#menu3")
flag=0;
menu.addEventListener("click",function(e){
    if(flag===0){
    nav.style.top = "0%";
    nav.style.position = "fixed";
   line1.style.transform="rotate(-45deg) translate(-35%,0%) ";
    line3.style.transform="rotate(47deg) translate(-30%,0%)";
    line1.style.transition = "0.5s ease"
    line2.style.transition = "0.5s ease"
    line3.style.transition = "0.5s ease"
    line3.style.width="35px";
    line2.style.opacity=0;
    nav.style.opacity=1;

    flag=1;
    }
    else{
        nav.style.top = "100%";
        line1.style.transform="rotate(0deg)";
        line3.style.transform="rotate(0deg)";
        line3.style.width="15px";
        line2.style.opacity=1;
        nav.style.opacity=0;
        flag=0;
    }
})
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
function show(){
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
show();
var tl =gsap.timeline();
tl
.from("#text h1",{
    duration:2,
    opacity:0
})
.from("#page1 #img1",{
    y:100,
    duration:2,
    opacity:0
},"-=1")
.from("#page1 #img2",{
    x:100,
    duration:2,
    opacity:0
},"-=2")
.from("#page1 #img3",{
    y:-100,
    duration:2,
    opacity:0
},"-=2")
gsap.from("#text-content h3,#text-content h1,#text-content #last",{
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#bg",
        start:"top 30%",
    },
    y:30,
    duration:2,
    opacity:0,
    ease:Expo.easeInOut,
    stagger:1
})
gsap.from("#pag3-part1 #img-div1 img, #pag3-part1 #img-div2 img,#pag3-part2 h1,#pag3-part2 p,#serv",{
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#bg",
    start:"top 60%",
  },
    y:30,
    duration:2,
    opacity:0,
    ease:Expo.easeInOut,
    stagger:0.3
})
gsap.from("#page4 h1,#brands", {
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#bg",
    start:"top 30%",
 },  
  y:20,
  stagger:1,
  opacity:0,
  ease:Expo.easeInOut,
  duration:0.5
})
gsap.from(" #page5-part1,#page5-part2,#serv1", {
  scrollTrigger:{
  trigger:"#page5",
  scroller:"#bg",
  start:"top 30%",
},
   y:30,
   stagger:1,
   opacity:0,
   ease:Expo.easeInOut,
  duration:1
})
gsap.from("#page7 .blck,.blck a,.blck h2,#page7 #bcmprtnr",{
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#bg",
   start:"top 30%",
   },
  y:20,
  stagger:.1,
  opacity:0,
  ease:Expo.easeInOut,
  duration:.5
})

