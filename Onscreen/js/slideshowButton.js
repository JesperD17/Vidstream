const left = document.querySelector('slide_left');
const right = document.querySelector('slide_right');
const allImages = document.querySelector('');

previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    allImages.src = allImages[currentIndex];
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % allImages.length;
    allImages.src = allImages[currentIndex];
  });