// Scroll animation for sections
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
});

// Lightbox for certificate images
document.addEventListener('DOMContentLoaded', function() {
  // create overlay
  const overlay = document.createElement('div');
  overlay.className = 'certificate-overlay';
  overlay.innerHTML = '<img src="" alt="certificate preview"><button class="close-overlay" aria-label="Close">\u00d7</button>';
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.close-overlay');

  // open overlay on image click
  document.querySelectorAll('.certificate-item img').forEach(img => {
    img.addEventListener('click', (e) => {
      overlayImg.src = e.currentTarget.src;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // close handlers
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
