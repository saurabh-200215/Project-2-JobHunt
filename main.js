//locomotive
function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()
//

function allclick(){
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", (_e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", (_e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

}
allclick()


// all chat click()



// function allclick() {
//   const menuBtn = document.getElementById("menu-btn");
//   const navLinks = document.getElementById("nav-links");
//   const menuBtnIcon = menuBtn.querySelector("i");

//   menuBtn.addEventListener("click", (e) => {
//     navLinks.classList.toggle("open");

//     const isOpen = navLinks.classList.contains("open");
//     menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
//   });

//   navLinks.addEventListener("click", (e) => {
//     navLinks.classList.remove("open");
//     menuBtnIcon.setAttribute("class", "ri-menu-line");
//   });
// }

// allclick();


///

function mouseFellow(){
  document.addEventListener('mousemove', function(event) {
    const images = document.querySelectorAll('.icon_move'); // Select all images with .icon_move class
    const x = (window.innerWidth - event.pageX * 2) / 100;
    const y = (window.innerHeight - event.pageY * 2) / 100;
  
    images.forEach((image) => {
      image.style.transform = `translate(${x}px, ${y}px) translate(-50%, -60%)`;
    });
  });
  
}
mouseFellow()
//mouse move
//card move


//card amination function
function cardAnimation(){
  const cards = document.querySelectorAll(".steps__card");
cards.forEach((steps__card) => {
  steps__card.addEventListener("mousemove", (g) => {
    const rect = steps__card.getBoundingClientRect();
    const x = g.clientX - rect.left;
    const y = g.clientY - rect.top;
    steps__card.style.setProperty("--x", `${x}px`);
    steps__card.style.setProperty("--y", `${y}px`);
  });
  steps__card.addEventListener("mouseleave", () => {
    steps__card.style.setProperty("--x", "0px");
    steps__card.style.setProperty("--y", "0px");
  });
});

}
cardAnimation()

//exploe card aniamtion





//gsap
// function navAnimation(){
//   var tl = gsap.timeline()
// tl.from("nav a , nav__links btn", {
//     y: -20,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//   },"anime");
// }

// navAnimation()
// header Animation
// function headerAnimation() {
//   var t2 = gsap.timeline();
//   t2.from(".icon_move", {
//     y: -50,             // Increase the distance for visibility
//     opacity: 0,         // Ensure images are hidden initially
//     stagger: 0.2,       // Slightly increase stagger for better effect
//     duration: 0.8,      // Increase duration for smoother animation
//     ease: "power2.out", // Use easing for a smoother effect
//   });
// }

// window.onload = headerAnimation;


function navAnimation() {
  var tlNav = gsap.timeline();

  // Animate the logo
  tlNav.from(".nav__logo", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: "power2.out"
  });

  // Animate the menu button
  tlNav.from(".nav__menu__btn", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.4"); // Overlap with logo

  // Animate the nav links
  tlNav.from(".nav__links li", {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    duration: 0.4,
    ease: "power2.out"
  }, "-=0.3"); // Overlap with menu button

  // Animate the register button
  tlNav.from(".nav__links .btn", {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: "power2.out"
  }, "-=0.4");
}
navAnimation();

function headerAnimation() {
  var tlHeader = gsap.timeline();

  // Animate the icons
  tlHeader.from(".icon_move", {
    opacity: 0,
    y: -20,
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out"
  });

  // Animate the h2 (No.1 Job Hunt Website with image)
  // tlHeader.from("h2 img", {
  //   opacity: 0,
  //   scale: 0.5,
  //   duration: 0.5,
  //   ease: "back.out(1.7)"
  // }, "-=0.4");

  tlHeader.from("#home h2", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.3");

  // Animate the main heading (h1)
  tlHeader.from("#home h1", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3");

  // Animate the paragraph
  tlHeader.from("#home p", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3");

  // Animate the buttons
  tlHeader.from(".header__btns .btn", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3");

  tlHeader.from(".header__btns a", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4");
}
headerAnimation();

function stepsAnimation() {
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#stepsstarts",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true,
    }
  })
  tl2.from("#steps_heading",{
    opacity: 0,
    y:10,
    duration: 0.7,
    ease: "power2.out",
  })
  tl2.from("#steps_description",{
    opacity: 0,
    y:8,
    duration: 0.7,
    stagger: 0.5,
    ease: "power2.out",
  })
  var tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:".steps__grid",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 40%",
      scrub:true,
    }
  })
  tl3.from(".steps__grid .steps__card",{
    opacity: 0,
    y:20,
    duration: 0.7,
    stagger: 0.5,
    ease: "power2.out",
  })
  // Animate the steps cards one by one

}

stepsAnimation();
//explore__grid aniamtion


function exploreAnimation() {
  var tl4 = gsap.timeline({
    scrollTrigger:{
      trigger:"#explorestarts",
      scroller:"#main",
      // markers:true,
      start:"top 75%",
      end:"top 10%",
      scrub:true,
    }
  })
  tl4.from("#explore_heading",{
    opacity: 0,
    y:10,
    duration: 0.7,
    ease: "power2.out",
  })
  tl4.from("#explore_description",{
    opacity: 0,
    y:8,
    duration: 0.7,
    stagger: 0.5,
    ease: "power2.out",
  })
  var tl5 = gsap.timeline({
    scrollTrigger:{
      trigger:".explore__grid",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 40%",
      scrub:true,
    }
  })
  tl5.from(".explore__grid .explore__card ",{
    opacity: 0,
    y:20,
    //edit
    // x:200,
    // rotation: 36,
    //
    // duration: 1,
    duration: 0.7,
    // stagger: 0.7,
    stagger: 0.5,
    ease: "power2.out",
  })
  tl5.from(".explore__btn .btn",{
    opacity: 0,
    y:20,
    duration: 0.7,
    stagger: 0.5,
    ease: "power2.out",
    delay:1,
  })
  // Animate the steps cards one by one

}

exploreAnimation();

///job aniamtion



function jobAnimation() {
  var tl6 = gsap.timeline({
    scrollTrigger:{
      trigger:"#job",
      scroller:"#main",
      // markers:true,
      start:"top 75%",
      end:"top 10%",
      scrub:true,
    }
  })
  tl6.from("#job_heading",{
    opacity: 0,
    y:10,
    duration: 0.7,
    ease: "power2.out",
  })
  tl6.from("#job_description",{
    opacity: 0,
    y:8,
    duration: 0.4,
    // stagger: 0.5,
    ease: "power2.out",
  })
  var tl7 = gsap.timeline({
    scrollTrigger:{
      trigger:".job__grid",
      scroller:"#main",
      // markers:true,
      start:"top 75%",
      end:"top 30%",
      scrub:true,
    }
  })
  tl7.from(".job__grid .job__card",{
    opacity: 0,
    y:20,
    duration: 1,
    stagger: 0.7,
    ease: "power2.out",
  })
  // Animate the steps cards one by one
}
jobAnimation();

//fotter animaton

function footerAnimation() {

  // Animate the footer columns
  gsap.from(".footer__col", {
    opacity: 0,          
    y: 10,               
    stagger: 0.2,        
    duration: 0.5,         
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer",  
      start: "top 80%",
      end:"top 50%",
      scroller:"#main",
      // markers:true,
      scrub:true,      
    },
  });

  // Animate the footer bar
  gsap.from(".footer__bar", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
      scroller:"#main",
      // markers:true,
      scrub:true,
    },
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out",
  });
}

footerAnimation();

///

function mouseicon(){
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  })

  document.addEventListener('click', () => {
      cursor.classList.add("expand");

      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500)
  }) 
  // script.js
// document.addEventListener('DOMContentLoaded', () => {
//   const ball = document.querySelector('.ball');
//   const hero = document.querySelector('#fullpage');
//   // const hero = document.querySelector('.hero');
//   let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
//   let ballX = window.innerWidth / 2, ballY = window.innerHeight / 2;
//   const speed = 0.05; // Velocità di inseguimento
//   const orbitRadius = 30; // Raggio dell'orbita
//   let angle = 0;
//   let isMouseInside = false;

//   hero.addEventListener('mousemove', (e) => {
//     const rect = hero.getBoundingClientRect();
//     mouseX = e.clientX - rect.left;
//     mouseY = e.clientY - rect.top;
//     isMouseInside = true;
//   });

//   hero.addEventListener('mouseleave', () => {
//     isMouseInside = false;
//   });

//   function animate() {
//     const distX = mouseX - ballX;
//     const distY = mouseY - ballY;
//     ballX += distX * speed;
//     ballY += distY * speed;

//     if (isMouseInside) {
//       angle += 0.03; // Incrementa l'angolo per l'orbita quando il cursore è dentro
//     } else {
//       angle += 0.01; // Orbita più lentamente quando il puntatore è fermo
//       mouseX = window.innerWidth / 2;
//       mouseY = window.innerHeight / 2;
//     }

//     const orbitX = ballX + orbitRadius * Math.cos(angle);
//     const orbitY = ballY + orbitRadius * Math.sin(angle);

//     ball.style.transform = `translate(${orbitX}px, ${orbitY}px)`;

//     requestAnimationFrame(animate);
//   }

//   animate();
// });

  
}
mouseicon()




