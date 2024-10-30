let slideIndex = 0;
let slideTime;

export function showSlides() {
  function slide(left = false) {
    // shows next image
      
      let i;
      let slides = document.getElementsByClassName("slide-Card"); // Grabs every slide

      for (i = 0; i < slides.length; i++) {
        // slides[i].style.display = "none";
        slides[i].classList.remove("active_style_slide");
      }
    if (left) {
      slideIndex--;
      
      if (slideIndex < 1) {
        slideIndex = slides.length;
      }
    } else {
      slideIndex++;
      
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
    }
      
      // slides[slideIndex - 1].style.display = "block"; // shows ++ card evert change
      slides[slideIndex - 1].classList.add("active_style_slide");

      slideTime = setTimeout(slide, 3000); // changing seconds
  }



  // timer
  clearTimeout(slideTime);
  slide();


  // // button detect click, changes image
  const left = document.querySelector('.slide_left');
  const right = document.querySelector('.slide_right');
  const allImages = document.querySelector('.slide-Card');
  // console.log(left, right, allImages)

  left.addEventListener('click', () => {
    console.log('links');
    clearTimeout(slideTime);

    slide(true);
  });

  right.addEventListener('click', () => {
    console.log('rechts');
    clearTimeout(slideTime);

    slide();
  });



}
