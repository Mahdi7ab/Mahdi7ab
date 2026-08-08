// Header scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

// Demo form
const demoForm = document.getElementById('demoForm');
if (demoForm) {
  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = demoForm.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'درخواست ثبت شد ✓';
    btn.disabled = true;
    btn.style.opacity = '0.85';

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.opacity = '1';
      demoForm.reset();
    }, 2800);
  });
}

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});
