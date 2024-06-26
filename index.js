document.addEventListener('DOMContentLoaded', function() {
    const textParagraph = document.getElementById('text');
    if (textParagraph) {
      textParagraph.textContent = 'This is really cool!'; // Use textContent for reliable modification
    } else {
      console.error('Could not find paragraph element with id="text"');
    }
  });
  