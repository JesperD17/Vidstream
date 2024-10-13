function collapsibleContent1(x) { // icon switch
  const content = document.getElementById("collapsible_content");
  content.classList.toggle("visible"); // visibility
  x.classList.toggle("i"); 
  x.classList.toggle("bx");
  x.classList.toggle("bx-align-middle");

const links = document.querySelectorAll(".links a");
let input = document.querySelector('i.bx.bx-align-right'); 
let clickCounter = 0;

  links.forEach(function(div) { // voor elke class die .links a heeft
      div.style.cssText = 'display:block !important';
      
      input.addEventListener("click", function(div) {
        clickCounter++;
        if (clickCounter == 1) { // voor elke keer als er een 2e keer op de icon word geklikt
          div.style.cssText = 'display:none !important';
        }
      })
  });

  


  // let input = document.querySelector('i.bx.bx-align-right');
  // let clickCounter = 0; // counter maken dat wanneer een 2e keer op de icon word geklikt dat er iets veranderd
  
  //   input.addEventListener("click", function(div) {
  //     clickCounter++;
  //     if (clickCounter == 1) {
  //       clickCounter = 0; // hieronder maakt het de collapsible content weer onzichtbaar

  //       links.forEach(function(div) { // voor elke class die .links a heeft
  //           div.style.cssText = 'display:none !important';
  //       });
  //     }
  //   });
}
