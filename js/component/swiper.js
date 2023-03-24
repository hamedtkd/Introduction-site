export function swiper(){
    const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
const nextSlide = document.getElementById("slider-btn-next");
let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
const prevSlide = document.getElementById("slider-btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
const autoNextSlide = ()=> {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}
 setInterval(autoNextSlide, 3500);
}



export function swiper2(){
    const slides = document.querySelectorAll(".slide2");
slides.forEach((slide2, indx) => {
    slide2.style.transform = `translateX(${indx * 100}%)`;
});
const nextSlide = document.getElementById("slider-btn-next-2");
let curSlide2 = 0;
let maxSlide2 = slides.length - 1;

nextSlide.addEventListener("click", function () {
    console.log("object");

  if (curSlide2 === maxSlide2) {
    curSlide2 = 0;
  } else {
    curSlide2++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
  });
});
const prevSlide = document.getElementById("slider-btn-prev-2");

prevSlide.addEventListener("click", function () {
    console.log("object");
  if (curSlide2 === 0) {
    curSlide2 = maxSlide2;
  } else {
    curSlide2--;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
  });
});
const autoNextSlide = ()=> {
  if (curSlide2 === maxSlide2) {
    curSlide2 = 0;
  } else {
    curSlide2++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
  });
}
 setInterval(autoNextSlide, 5000);
}