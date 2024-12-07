export function initSlider() {
  const slider = document.querySelector('.slider-container');
  if (!slider) return; // Guard clause if slider doesn't exist

  const slides = slider.querySelectorAll('img');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  
  if (!slides.length || !prevBtn || !nextBtn) return;

  let currentSlide = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  });

  // Auto-advance slides
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }, 5000);
}