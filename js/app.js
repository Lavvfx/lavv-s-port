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

/*GSAP animation */
// function startloader() {
// let counterElement = document.querySelector(".counter");
// let currentValue = 0;

// function updateCounter(){
//   if(currentValue === 100){
//     return;
//   }
//   currentValue += Math.floor(Math.random() *10) + 1;
  
//   if(currentValue > 100){
//     currentValue = 100;
//   }
//   counterElement.textContent = currentValue;

//   let delay = Math.floor(Math.random() * 200) + 50;
//   setTimeout(updateCounter, delay);
// }

// updateCounter();

// }


// startloader();

// gsap.to(".counter", 0.25,{
//   delay:3.5,
//   opacity:0,
// });

// gsap.to(".bar", 1,{
//  delay: 3.5,
//  height: 0,
//  stagger: {
//   amount: 0.5,
//  },
//  ease: "power4.in0ut",
// });

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



 

