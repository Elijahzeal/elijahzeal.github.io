// =============================================
//  PROJECT PAGE — JS
//  Nav links route back to index.html sections
// =============================================

// Scroll effect — header darkens on scroll
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.background = 'rgba(10, 18, 35, 0.55)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.10)';
  }
});

// Hamburger toggle
const hamburgerBtn = document.getElementById('hamburger');
const mobileNavEl  = document.getElementById('mobileNav');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileNavEl.classList.toggle('open');
  hamburgerBtn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    mobileNavEl.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    document.body.style.overflow = '';
  }
});
