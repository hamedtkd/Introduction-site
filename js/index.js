import { swiper, swiper2 } from "./component/swiper.js";

swiper()
swiper2()
const hamburger = document.getElementById('hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});