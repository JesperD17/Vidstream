var links = document.querySelector(".search");
let clickCounter = 0;
    let input = links.querySelector('.icon'); 
    let div = links.querySelector('.search-bar'); 

    input.addEventListener("click", function() {
        div.classList.toggle('hiden')
        if(input.classList.contains('bx-search')) {
            input.classList.remove('bx-search')
            input.classList.add('bxs-search')

        }
        else {
            input.classList.remove('bxs-search')
            input.classList.add('bx-search')
        }
    })

//   links.forEach(function(div) { // voor elke class die .links a heeft
//       div.style.cssText = 'display:block !important';

//       input.addEventListener("click", function(div) {
//         clickCounter++;
//         if (clickCounter == 1) { // voor elke keer als er een 2e keer op de icon word geklikt
//           div.style.cssText = 'display:none !important';
//         }
//       })
//   });




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
// }