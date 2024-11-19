const spotlights = document.querySelectorAll('.MainCards');
let isDragging = false;
let startX;
let scrollLeft;

spotlights.forEach(spotlight => {
  spotlight.addEventListener('mousedown', (e) => {
    isDragging = true;
    spotlight.classList.add('active');
    startX = e.pageX - spotlight.offsetLeft;
    scrollLeft = spotlight.scrollLeft;
  });
  
  spotlight.addEventListener('mouseleave', () => {
    isDragging = false;
    spotlight.classList.remove('active');
  });
  
  spotlight.addEventListener('mouseup', () => {
    isDragging = false;
    spotlight.classList.remove('active');
  });
  
  spotlight.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - spotlight.offsetLeft;
    const walk = (x - startX) * 2;
    spotlight.scrollLeft = scrollLeft - walk;
  });
});



