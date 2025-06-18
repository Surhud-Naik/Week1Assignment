const tooltip = document.getElementById('tooltip');
const events = document.querySelectorAll('.event');

events.forEach(event => {
  event.addEventListener('mouseenter', (e) => {
    tooltip.textContent = event.getAttribute('data-info');
    tooltip.style.display = 'block';
  });

  event.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY - 20 + 'px';
  });

  event.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function moveSlide(direction) {
  currentSlide += direction;
  
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  
  updateSlidePosition();
}

function updateSlidePosition() {
  const translateX = -currentSlide * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

// Auto-play slideshow (optional)
function autoPlay() {
  moveSlide(1);
}

// Start auto-play (change slide every 5 seconds)
setInterval(autoPlay, 5000);

// Initialize slideshow
updateSlidePosition();
