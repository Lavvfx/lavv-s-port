/*GSAP animation */


gsap.from(".bg-img", 1,{
  top: "1000",
  opacity:0,
 });
 
 gsap.from(".sun-8", 1,{
   top: "2000",
   ease: "power4.0ut",
   opacity:0,
  });
 
 gsap.from(".mountfuji-7", 1.2,{
   top: "2000",
   ease: "power4.0ut",
  });
 
  gsap.from(".cloud-11", 1.4,{
   top: "2000",
   ease: "power4.0ut",
  });
 
  gsap.from(".mountain-10", 1.5,{
   top: "2000",
   ease: "power4.0ut",
  });
 
  gsap.from(".cloud-9", 1.6,{
   top: "2000",
   ease: "power4.0ut",
  });
 
  gsap.from(".mountain-6", 1.8,{
   top: "2000",
   ease: "power4.0ut",
  });
 
  gsap.from(".mountain-5", 2.0,{
   top: "2000",
   ease: "power4.0ut",
  });
 
  gsap.from(".shrine-4", 2.2,{
   top: "2000",
   ease: "power4.0ut",
  });
 
  gsap.from(".fog-3", 2.4,{
   top: "2000",
   ease: "power4.0ut",
   
  });
 
  gsap.from(".grass-2", 2.8,{
   top: "2000",
   ease: "power4.0ut",
   
  });
 
  gsap.from(".grass-1", 2.6,{
   top: "2000",
   ease: "power4.0ut",
  
  });
 
  gsap.from(".hide",{
    opacity:0,
    duration: 1.5,
   }, "1.5");

// parallax effect 


const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `perspective(2300px) translateZ(${
      zValue * speedz
    }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px)) `;
  });
}

update(0);

window.addEventListener("mousemove", (e) => {

  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);
});


// contact me from pop up function

document.querySelector(".button").addEventListener("click", function() {
  event.preventDefault();
  document.querySelector(".popup").style.display = "flex";
});


document.getElementById("close").addEventListener("click", function() {
  event.preventDefault();
  document.querySelector(".popup").style.display = "none";
});


// js for project window reveal

document.querySelector('.projects-btn').addEventListener('click', function() {
  document.querySelector('.glasscontainer').classList.toggle('projectappear');
});

document.querySelector('.aboutMe-btn').addEventListener('click', function() {
  document.querySelector('.aboutmepage').classList.toggle('aboutmepageappear');
});

