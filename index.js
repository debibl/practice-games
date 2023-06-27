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

const links = document.querySelectorAll('a');
links.forEach((link) => {
  const excludedLinks = [
    // add game path
    'hangman/hangman.html',
    'crossword/crossword.html',
    'memory/index.html',
    'anagram/index.html',
    'Snake/index.html',
    'sudoku/index.html',
  ];
  if (!excludedLinks.includes(link.getAttribute('href'))) {
    link.addEventListener('click', function handleSmoothScroll(event) {
      event.preventDefault();
      const target = this.getAttribute('href');
      const targetElement = document.querySelector(target);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
