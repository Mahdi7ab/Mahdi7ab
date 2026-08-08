// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Demo form
const demoForm = document.getElementById('demoForm');
if (demoForm) {
  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = demoForm.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = 'درخواست ثبت شد ✓';
    btn.disabled = true;
    btn.style.opacity = '0.8';

    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
      btn.style.opacity = '1';
      demoForm.reset();
    }, 3000);
  });
}

// Smooth reveal on scroll
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .module-card, .solution-card, .price-card, .testimonial-card, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
