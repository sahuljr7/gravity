import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAbout() {
  // Timeline animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Team member cards animation
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.1,
        rotation: Math.random() * 10 - 5,
        duration: 0.3
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        rotation: 0,
        duration: 0.3
      });
    });
  });
}