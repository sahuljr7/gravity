import emailjs from '@emailjs/browser';

export function initContact() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const inputs = form.querySelectorAll('.form-input');
  if (!inputs.length) return;

  // Input animation
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
  });

  // Form validation and submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Launching...';

    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY');
      form.reset();
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Launch Message';
    }
  });

  // Map marker pulse animation
  const marker = document.querySelector('.map-marker');
  if (marker) {
    setInterval(() => {
      marker.classList.toggle('pulse');
    }, 1500);
  }
}