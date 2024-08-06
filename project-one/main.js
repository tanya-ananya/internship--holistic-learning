document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const contents = document.querySelectorAll('.main-content .content');

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default button behavior

      const target = button.getAttribute('data-target');

      // Hide all content
      contents.forEach(content => {
        content.style.display = 'none';
      });

      // Show the targeted content
      const targetContent = document.querySelector(`.content[data-content="${target}"]`);
      if (targetContent) {
        targetContent.style.display = 'block';
      }
    });
  });

  // Initialize by showing the first content or specific content
  const initialContent = document.querySelector('.content[data-content="pranayama"]');
  if (initialContent) {
    initialContent.style.display = 'block';
  }
});
