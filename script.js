const nav = document.getElementById('site-nav');
const links = document.querySelectorAll('.nav-link');
const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);

  let closestIndex = 0;
  let minDistance = Infinity;
  sections.forEach((section, index) => {
    const distance = Math.abs(section.getBoundingClientRect().top);
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = index;
    }
  });

  links.forEach((link, index) => link.classList.toggle('active', index === closestIndex));
});
