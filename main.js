/* ============================================================
   TEJASKUMAR PATEL — PORTFOLIO JAVASCRIPT
   ✏️ UPDATE: Sections marked with ✏️ are yours to customise
   ============================================================ */

/* ============================================================
   1. TYPING ANIMATION
   ✏️ UPDATE: Add/remove/edit the phrases below
   ============================================================ */
const typingPhrases = [
  "iOS Developer",
  "Swift Engineer",
  "Technical Lead",
  "SwiftUI Specialist",
  "AI-Native Builder",
  "Clean Architecture Advocate",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeEffect() {
  const el = document.getElementById("typingText");
  if (!el) return;

  const currentPhrase = typingPhrases[phraseIndex];

  if (isDeleting) {
    el.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at end of word
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typingPhrases.length;
    delay = 400;
  }

  typingTimeout = setTimeout(typeEffect, delay);
}

/* ============================================================
   2. DARK / LIGHT THEME TOGGLE
   ============================================================ */
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const html = document.documentElement;

  // Load saved preference
  const saved = localStorage.getItem("portfolio-theme") || "dark";
  html.setAttribute("data-theme", saved);
  updateIcon(saved, icon);

  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateIcon(next, icon);
  });
}

function updateIcon(theme, icon) {
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

/* ============================================================
   3. NAVBAR — Scroll effect + Active link highlight
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Scroll shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active link tracking
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Smooth close mobile menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("open");
    });
  });
}

/* ============================================================
   4. MOBILE HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

/* ============================================================
   5. SCROLL FADE-IN ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  // Add fade-in class to animatable elements
  const targets = document.querySelectorAll(
    ".interest-card, .timeline-item, .cert-card, .project-card, .skill-group, .contact-item, .resume-card, .contact-form-wrapper"
  );

  targets.forEach((el, i) => {
    el.classList.add("fade-in");
    // Stagger delay for grid items
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ============================================================
   6. CONTACT FORM — Basic UX handler
   ✏️ NOTE: To make this actually send emails, see the
   Formspree instructions in index.html (search "Formspree")
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector("button[type='submit']");
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    // ✏️ If you integrate Formspree, remove this setTimeout
    // and let the form submit naturally (remove e.preventDefault())
    setTimeout(() => {
      form.style.display = "none";
      success.style.display = "block";
    }, 1500);
  });
}

/* ============================================================
   7. SMOOTH SCROLL for anchor links
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const navHeight = document.getElementById("navbar").offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ============================================================
   8. SKILL PILLS — Hover tooltip (optional enhancement)
   ============================================================ */
function initSkillPills() {
  const pills = document.querySelectorAll(".skill-pill");
  pills.forEach((pill) => {
    pill.addEventListener("mouseenter", () => {
      pill.style.transform = "translateY(-3px) scale(1.04)";
    });
    pill.addEventListener("mouseleave", () => {
      pill.style.transform = "";
    });
  });
}

/* ============================================================
   9. INITIALISE ALL
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
  initHamburger();
  initScrollAnimations();
  initContactForm();
  initSmoothScroll();
  initSkillPills();

  // Start typing animation after short delay
  setTimeout(typeEffect, 800);
});
