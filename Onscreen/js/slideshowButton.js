const left = document.querySelector('slide_left');
const right = document.querySelector('slide_right');
const allImages = document.querySelector('slide-Card');
console.log(left, right, allImages)
  left.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    allImages.src = allImages[currentIndex];
  });

  right.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % allImages.length;
    allImages.src = allImages[currentIndex];
  });