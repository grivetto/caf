// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav ul');

hamburger?.addEventListener('click', () => {
  navUl?.classList.toggle('active');
  hamburger.innerHTML = navUl?.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navUl?.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop?.classList.toggle('visible', window.scrollY > 400);
});

backToTop?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Counter animation
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;

  const update = () => {
    current += step;
    if (current >= target) {
      el.textContent = target + '+';
      return;
    }
    el.textContent = current;
    requestAnimationFrame(update);
  };

  update();
};

// Intersection Observer for counters
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => observer.observe(c));

// Simple contact form handler
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = 'Messaggio inviato ✓';
  btn.style.background = '#27ae60';
  setTimeout(() => {
    btn.textContent = 'Invia messaggio';
    btn.style.background = '';
    form.reset();
  }, 3000);
});
