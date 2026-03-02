/**
 * Carla Burns — Counselling
 * script.js
 *
 * Responsibilities:
 *  1. Remove .no-js / mark .js on <html>
 *  2. Theme toggle (blue ↔ green ↔ gradient/teal) + localStorage persistence
 *  3. Nav scroll border
 *  4. Mobile nav drawer (hamburger toggle)
 *  5. Hero page-load animations (staggered fade + slide-up)
 *  6. Scroll-reveal animations (IntersectionObserver)
 *  7. Active nav link highlighting on scroll
 *  8. Contact form client-side feedback
 *  9. Footer year (auto-update)
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────
     1. JS DETECTION
     Mark <html> so CSS can show elements safely.
  ───────────────────────────────────────────────────────── */

  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');


  /* ─────────────────────────────────────────────────────────
     2. THEME TOGGLE
     Reads from localStorage on load, applies class to <html>.
     All colour tokens are CSS custom properties — switching
     the class on <html> is the only JS needed.
  ───────────────────────────────────────────────────────── */

  const THEME_KEY = 'cb-theme';
  const DEFAULT_THEME = 'theme-blue';
  const VALID_THEMES = ['theme-blue', 'theme-green', 'theme-gradient'];

  function applyTheme(theme) {
    if (!VALID_THEMES.includes(theme)) theme = DEFAULT_THEME;

    // Swap class on <html>
    VALID_THEMES.forEach(t => document.documentElement.classList.remove(t));
    document.documentElement.classList.add(theme);

    // Sync all toggle buttons (both desktop + mobile drawer)
    document.querySelectorAll('.theme-toggle__btn').forEach(btn => {
      const isActive = btn.dataset.theme === theme;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    localStorage.setItem(THEME_KEY, theme);
  }

  // Restore saved theme immediately (before first paint if possible)
  const savedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  applyTheme(savedTheme);

  // Wire up all toggle buttons
  document.querySelectorAll('.theme-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
  });


  /* ─────────────────────────────────────────────────────────
     3. NAV SCROLL BORDER
     Adds a visible bottom-border to the nav once the user
     scrolls past 40px.
  ───────────────────────────────────────────────────────── */

  const nav = document.getElementById('nav');

  if (nav) {
    function onScroll() {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load in case of reload at scrolled position
  }


  /* ─────────────────────────────────────────────────────────
     4. MOBILE NAV DRAWER
     Hamburger → X animation + aria-expanded.
     Closes automatically when a link is clicked.
  ───────────────────────────────────────────────────────── */

  const navToggle = document.getElementById('nav-toggle');
  const navDrawer = document.getElementById('nav-drawer');

  if (navToggle && navDrawer) {

    navToggle.addEventListener('click', () => {
      const isOpen = navDrawer.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    // Close drawer when any link inside it is clicked
    navDrawer.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        navDrawer.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
      });
    });

    // Close drawer on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navDrawer.classList.contains('is-open')) {
        navDrawer.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
        navToggle.focus();
      }
    });
  }


  /* ─────────────────────────────────────────────────────────
     5. HERO PAGE-LOAD ANIMATIONS
     Elements with [data-hero] animate in on DOMContentLoaded
     using their [data-delay] value (ms).
     Portrait uses opacity-only (no Y shift).
  ───────────────────────────────────────────────────────── */

  function initHeroAnimations() {
    const heroEls = document.querySelectorAll('[data-hero]');
    if (!heroEls.length) return;

    // Trigger with a double rAF to ensure styles are computed first
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroEls.forEach(el => {
          const delay = parseInt(el.dataset.delay, 10) || 0;
          setTimeout(() => el.classList.add('is-visible'), delay);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroAnimations);
  } else {
    initHeroAnimations();
  }


  /* ─────────────────────────────────────────────────────────
     6. SCROLL-REVEAL ANIMATIONS
     Elements with .reveal but NOT [data-hero] animate when
     they enter the viewport. [data-stagger] controls delay:
       transition-delay: calc(var(--stagger, 0) * 80ms)
     is handled in CSS; the stagger delay is applied via
     inline --stagger custom property.
  ───────────────────────────────────────────────────────── */

  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal:not([data-hero])');
    if (!revealEls.length) return;

    // Write --stagger value as inline CSS custom property so CSS can use it
    revealEls.forEach(el => {
      const stagger = el.dataset.stagger;
      if (stagger !== undefined) {
        el.style.setProperty('--stagger', stagger);
      }
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }


  /* ─────────────────────────────────────────────────────────
     7. ACTIVE NAV LINK HIGHLIGHTING
     Uses IntersectionObserver on each section.
     The nav link whose href matches the section in view gets
     .is-active. Only runs on index.html (sections present).
  ───────────────────────────────────────────────────────── */

  function initActiveNav() {
    // Skip on pages that mark a link as active via HTML (e.g. about.html)
    if (document.body.dataset.page === 'about') return;

    const sections = document.querySelectorAll('main section[id]');
    const navLinks  = document.querySelectorAll('.nav__link[href^="#"]');

    if (!sections.length || !navLinks.length) return;

    // Map href → link element(s) for fast lookup
    const linkMap = {};
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!linkMap[href]) linkMap[href] = [];
      linkMap[href].push(link);
    });

    function setActive(id) {
      navLinks.forEach(l => l.classList.remove('is-active'));
      const targets = linkMap['#' + id];
      if (targets) targets.forEach(l => l.classList.add('is-active'));
    }

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, {
      threshold: 0,
      // Trigger when a section occupies the middle 40% of the viewport
      rootMargin: '-20% 0px -55% 0px'
    });

    sections.forEach(s => sectionObserver.observe(s));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initActiveNav);
  } else {
    initActiveNav();
  }


  /* ─────────────────────────────────────────────────────────
     8. CONTACT FORM
     Client-side validation feedback + success state.

     For production: point <form action=""> to a real handler:
       - Formspree:  action="https://formspree.io/f/YOUR_ID"
       - Netlify:    add attribute `netlify` to the <form>
  ───────────────────────────────────────────────────────── */

  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const nameField    = form.querySelector('#name');
      const emailField   = form.querySelector('#email');
      const messageField = form.querySelector('#message');
      let valid = true;

      // Simple required + email format check
      [nameField, emailField, messageField].forEach(field => {
        field.style.removeProperty('border-color');
      });

      if (!nameField.value.trim()) {
        nameField.style.setProperty('border-color', '#C0392B');
        nameField.focus();
        valid = false;
      }

      if (valid && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
        emailField.style.setProperty('border-color', '#C0392B');
        emailField.focus();
        valid = false;
      }

      if (valid && !messageField.value.trim()) {
        messageField.style.setProperty('border-color', '#C0392B');
        messageField.focus();
        valid = false;
      }

      if (!valid) return;

      // Success state
      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.textContent = 'Sent';
      submitBtn.disabled = true;

      form.reset();

      // Remove any existing thanks message
      const existing = document.querySelector('.contact__thanks');
      if (existing) existing.remove();

      const thanks = document.createElement('p');
      thanks.className = 'contact__thanks';
      thanks.textContent = 'Thank you. I\'ll be in touch.';
      form.insertAdjacentElement('afterend', thanks);

      // Scroll thanks message into view
      thanks.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }


  /* ─────────────────────────────────────────────────────────
     9. FOOTER YEAR (auto-update)
  ───────────────────────────────────────────────────────── */

  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


})();
