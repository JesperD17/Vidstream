var links = document.querySelector("#search");

var content = document.querySelector("#content");

let clickCounter = 0;
    let input = links.querySelector('i')
    let div = links.querySelector('.search-field')

    let input2 = content.querySelector('i')
    let div2 = content.querySelector('i');
 
        input.addEventListener("click", function() {
            div.classList.toggle('hiden')
            if(input.classList.contains('bx-search')) {
                input.classList.remove('bx-search')
                input.classList.add('bxs-search')
                document.getElementById('search-field').style.display = "flex";
                document.getElementById('search-field').style.border = "solid white 3px";
            }
            else {
                input.classList.remove('bxs-search')
                input.classList.add('bx-search')
                document.getElementById('search-field').style.display = "none";
                document.getElementById('search-field').style.border = "none";
            }
        })



        input2.addEventListener("click", function() {
            div2.classList.toggle('hiden')
            if(input2.classList.contains('bx-align-left')) {
                input2.classList.remove('bx-align-left')
                input2.classList.add('bx-align-middle')


                document.querySelectorAll('.links a').forEach(link => {
                    link.style.display = "block"; 
                });
                // document.getElementById('search-field').style.border = "solid white 3px";
            }
            else {
                input2.classList.remove('bx-align-middle')
                input2.classList.add('bx-align-left')

                document.querySelectorAll('.links a').forEach(link => {
                    link.style.display = "none"; 
                });
                // document.getElementById('search-field').style.display = "none";
                // document.getElementById('search-field').style.border = "none";
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