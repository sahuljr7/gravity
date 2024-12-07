export function initAnimations() {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  // Observe elements
  const elements = document.querySelectorAll('.feature-card, .testimonial');
  elements.forEach(el => {
    observer.observe(el);
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scroll = window.pageYOffset;
      hero.style.transform = `translateY(${scroll * 0.5}px)`;
    });
  }
}