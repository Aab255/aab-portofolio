// Menu toggle mobile
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Animasi fade-in saat scroll muncul
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentText = texts[index];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1000);
    }

  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 90);
}

// ✅ WAJIB ADA!
typeEffect();

// Smooth scroll menu + logo
document.querySelectorAll('nav a, .logo-area').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// HEADER SCROLL EFFECT ✅ diperbaiki!
const header = document.querySelector('.premium-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", () => {

  const roles = ["Professional", "Designer", "Administrator"];
  let roleIndex = 0;

  function changeRole() {
    const roleElement = document.getElementById("role");
    if (!roleElement) return; // kalau belum ada, jangan crash

    roleElement.classList.remove("fade-role");

    setTimeout(() => {
      roleElement.textContent = roles[roleIndex];
      roleElement.classList.add("fade-role");

      roleIndex = (roleIndex + 1) % roles.length;
    }, 200);
  }

  setInterval(changeRole, 2000);
  changeRole();
});
