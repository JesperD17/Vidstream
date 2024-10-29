let slideIndex = 0;
const slideTime = 0;
export function showSlides() {
  // shows next image
  let i;
  let slides = document.getElementsByClassName("slide-Card"); // Grabs every slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  // timer
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

  slideTime = setTimeout(showSlides, 2000); // Change every 2 seconds
  console.log()
}

// Send the function towards load in the API, as querySelector needs to detect the element after the div has loaded via the AP
export function buttonsClick() {  
  const left = document.querySelector('.slide_left');
  const right = document.querySelector('.slide_right');
  const allImages = document.querySelector('.slide-Card');
  console.log(left, right, allImages)

      left.addEventListener('click', () => {
        console.log('links');
        clearTimeout(slideTime);

          // if (showSlides === 0) {
          //   console.log("de timer is gereset!")
          // } else {
          //   console.log("de timer loopt door")
          // }
      });

      right.addEventListener('click', () => {
        console.log('rechts');
        clearTimeout(slideTime);

          // if (showSlides === 0) {
          //   console.log("de timer is gereset!")
          // } else {
          //   console.log("de timer loopt door")
          // }
      });
}