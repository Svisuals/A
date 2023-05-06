// Get all iframe containers and set the initial index to 0
const iframeContainers = document.querySelectorAll('.iframe-container');
let currentIndex = 0;

// Show the current iframe and hide the rest
const showIframe = () => {
  iframeContainers.forEach((container, index) => {
    if (index === currentIndex) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });
};

// Add event listener to the buttons to change the index and show the iframe
const buttons = document.querySelectorAll('.button');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index;
    showIframe();
  });
});

// Show the initial iframe
showIframe();
