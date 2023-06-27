const sliderContainer = document.querySelector('.slider-container');
const sliderImage = document.querySelector('.slider-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];
let currentImageIndex = 0;

function showPreviousImage() {
  currentImageIndex--;
  if (currentImageIndex === 0) {
    prevButton.disabled = true;
  }
  nextButton.disabled = false;
  sliderImage.innerHTML = `<img src="${images[currentImageIndex]}">`;
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex === images.length - 1) {
    nextButton.disabled = true;
  }
  prevButton.disabled = false;
  sliderImage.innerHTML = `<img src="${images[currentImageIndex]}">`;
}

prevButton.disabled = true;
prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);