const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.querySelectorAll('.carousel-item'));
let activeIndex = 0;

items[activeIndex].classList.add('active');

setInterval(() => {
  items[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + 1) % items.length;
  items[activeIndex].classList.add('active');
}, 5000);