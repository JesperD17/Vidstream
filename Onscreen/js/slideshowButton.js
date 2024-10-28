// function test() {
//   const left = document.querySelector('.slide_left');
//   const right = document.querySelector('.slide_right');
//   const allImages = document.querySelector('.slide-Card');
//   console.log(left, right, allImages)

//       left.addEventListener('click', () => {
//         console.log('links');
//       });

//       right.addEventListener('click', () => {
//         console.log('rechts');
//       });
// }
  
export function test() {
    const left = document.querySelector('.slide_left');
    const right = document.querySelector('.slide_right');
    const allImages = document.querySelector('.slide-Card');
    console.log(left, right, allImages)
  
        left.addEventListener('click', () => {
          console.log('links');
        });
  
        right.addEventListener('click', () => {
          console.log('rechts');
        });
}