// Exit Sweden - Shared Logic

document.addEventListener('DOMContentLoaded', () => {
  // Quick Exit Logic
  const exitButtons = document.querySelectorAll('.exit-button');
  exitButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Use the prompt's requested confirmation
      if (!confirm('This will take you to Google. Are you sure you want to leave this page?')) {
        e.preventDefault();
      } else {
        // Instant redirect to Google
        window.location.href = 'https://www.google.com';
      }
    });
  });

  // Copy to Clipboard Logic
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const text = document.getElementById(targetId).innerText;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = 'COPIED!';
        setTimeout(() => {
          button.innerText = originalText;
        }, 2000);
      });
    });
  });
});

// Security: Try to clear history if possible (limited browser support for this specific way)
// But we can at least suggest it in the UI.
