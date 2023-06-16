const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

function goToSlide(index) {
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

setInterval(nextSlide, 4000);
