export function initChatBot() {
  const chatToggle = document.querySelector('.chat-toggle');
  let isOpen = false;

  chatToggle.addEventListener('click', () => {
    isOpen = !isOpen;
    chatToggle.classList.toggle('active', isOpen);
    // Add your chatbot implementation here
  });
}