const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const profilePhoto = document.querySelector('.profile-image img');
if (profilePhoto) {
  profilePhoto.addEventListener('error', () => {
    profilePhoto.classList.add('image-missing');
  });

  if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
    profilePhoto.classList.add('image-missing');
  }
}

const revealItems = document.querySelectorAll('.section, .panel-card, .profile-card, .about-card, .project-card, .skill-card, .contact-card, .skill-pill');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
