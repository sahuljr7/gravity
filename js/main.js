import { initStarfield } from './starfield.js';
import { initSlider } from './slider.js';
import { initAnimations } from './animations.js';
import { initThemeToggle } from './theme.js';
import { initChatBot } from './chatbot.js';
import { initAbout } from './about.js';
import { initContact } from './contact.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initSlider();
  initAnimations();
  initThemeToggle();
  initChatBot();
  initAbout();
  initContact();
});