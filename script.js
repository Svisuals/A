const slides = document.querySelectorAll('.carousel-slide');
const buttons = document.querySelectorAll('.carousel-nav-btn');

let currentSlide = 1;

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get slide number from button data-slide attribute
    const slideNumber = Number(button.getAttribute('data-slide'));
    currentSlide = slideNumber;
    setActiveButton();
    setSlidePosition();
  });
});

// Set the position of the slides based on the current slide
function setSlidePosition() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide + 1) * 100}%)`;
  });
}

// Set active class to active button
function setActiveButton() {
  buttons.forEach(button => {
    button.classList.remove('active');
    if (Number(button.getAttribute('data-slide')) === currentSlide) {
      button.classList.add('active');
    }
  });
}

setSlidePosition();

