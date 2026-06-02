// =============================================
//  ELIJAHZEAL PORTFOLIO — MAIN JS
// =============================================

const pages = ['home', 'about', 'portfolio', 'contact', 'privacy', 'references'];

function showPage(name) {
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.remove('active');
  });

  const target = document.getElementById('page-' + name);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Handle hash-based routing on load
function routeFromHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  showPage(hash);
}

window.addEventListener('load', routeFromHash);
window.addEventListener('hashchange', routeFromHash);

// Scroll effects — header darkens on scroll, footer darkens as you near the bottom
const header = document.getElementById('mainHeader');
const footer = document.querySelector('.glass-footer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = docHeight > 0 ? scrollY / docHeight : 0;

  // Header
  if (scrollY > 20) {
    header.style.background = 'rgba(10, 18, 35, 0.55)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.10)';
  }

  // Footer — darkens slightly as user scrolls toward it
  const footerOpacity = 0.38 + scrollFraction * 0.22;
  footer.style.background = `rgba(8, 16, 32, ${footerOpacity.toFixed(2)})`;
});
