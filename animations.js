/* ============================================================================
   GSAP animation layer — Paul Robain portfolio
============================================================================ */

(() => {
  'use strict';

  if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
    return;
  }

  window.__gsapReveal = true;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    document.body.classList.add('gsap-ready');

    /* ---------------- Scroll progress bar ---------------- */
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2,
        },
      });
    }

    /* ---------------- Hero entrance timeline ---------------- */
    const heroExists = document.querySelector('.hero');
    if (heroExists && !reduced) {
      gsap.set('.hero .reveal', { opacity: 1, y: 0 });

      const heroSelectors = [
        '.hero .eyebrow',
        '.hero-title > span:first-child',
        '.hero-title .gradient-text',
        '.hero-subtitle',
        '.hero-tagline',
        '.hero-ctas .btn',
      ];
      heroSelectors.forEach((s) => {
        const els = document.querySelectorAll(s);
        if (els.length) gsap.set(els, { opacity: 0, y: 24 });
      });
      gsap.set('.hero-portrait', { opacity: 0, y: 0, scale: 0.92 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });
      tl.to('.hero .eyebrow', { y: 0, opacity: 1, duration: 0.7 })
        .to('.hero-title > span:first-child', { y: 0, opacity: 1 }, '-=0.45')
        .to('.hero-title .gradient-text', { y: 0, opacity: 1 }, '-=0.6')
        .to('.hero-subtitle', { y: 0, opacity: 1, duration: 0.7 }, '-=0.55')
        .to('.hero-tagline', { y: 0, opacity: 1, duration: 0.7 }, '-=0.55')
        .to('.hero-ctas .btn', { y: 0, opacity: 1, stagger: 0.08, duration: 0.7 }, '-=0.5')
        .to('.hero-portrait', { y: 0, scale: 1, opacity: 1, duration: 1.1, ease: 'power4.out' }, '-=1.1');
    } else if (heroExists && reduced) {
      gsap.set('.hero .reveal', { opacity: 1, y: 0 });
    }

    /* ---------------- Section reveals (non-hero) ---------------- */
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.closest('.hero')) return;
      gsap.set(el, { opacity: 0, y: 24 });
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: reduced ? 0.01 : 0.9,
            ease: 'power3.out',
          });
        },
      });
    });

    /* ---------------- Section header parts + number count-up ---------------- */
    document.querySelectorAll('.section-head, .card-contact').forEach((head) => {
      const num = head.querySelector('.section-number');
      const title = head.querySelector('.section-title');
      if (!num || !title) return;
      const targetText = num.textContent.trim();
      const target = parseInt(targetText, 10);

      gsap.set(num, { opacity: 0, x: -14 });
      gsap.set(title, { opacity: 0, y: 14 });
      if (!Number.isNaN(target)) num.textContent = '00';

      ScrollTrigger.create({
        trigger: head,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(num, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
          gsap.to(title, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.08 });
          if (!Number.isNaN(target) && !reduced) {
            const obj = { v: 0 };
            gsap.to(obj, {
              v: target,
              duration: 0.9,
              ease: 'power2.out',
              onUpdate: () => {
                num.textContent = String(Math.round(obj.v)).padStart(2, '0');
              },
            });
          } else {
            num.textContent = targetText;
          }
        },
      });
    });

    /* ---------------- Background blobs parallax ---------------- */
    if (!reduced) {
      gsap.utils.toArray('.blob').forEach((blob, i) => {
        gsap.to(blob, {
          yPercent: i % 2 === 0 ? -25 : 30,
          xPercent: i === 1 ? -10 : 8,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      });
    }

    /* ---------------- Magnetic primary buttons ---------------- */
    if (!reduced && canHover) {
      document.querySelectorAll('.btn-primary').forEach((btn) => {
        const moveTween = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' });
        const moveTweenY = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' });
        btn.addEventListener('mousemove', (e) => {
          const r = btn.getBoundingClientRect();
          const dx = e.clientX - r.left - r.width / 2;
          const dy = e.clientY - r.top - r.height / 2;
          moveTween(dx * 0.25);
          moveTweenY(dy * 0.45);
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.45)' });
        });
      });
    }

    /* ---------------- 3D tilt + cursor spotlight on cards ---------------- */
    if (canHover) {
      const TILT = 5;
      document.querySelectorAll('.card').forEach((card) => {
        if (!reduced) gsap.set(card, { transformPerspective: 900 });
        const rotX = !reduced ? gsap.quickTo(card, 'rotateX', { duration: 0.5, ease: 'power3.out' }) : null;
        const rotY = !reduced ? gsap.quickTo(card, 'rotateY', { duration: 0.5, ease: 'power3.out' }) : null;
        card.addEventListener('mouseenter', () => {
          if (!reduced) gsap.to(card, { y: -4, duration: 0.4, ease: 'power3.out' });
        });
        card.addEventListener('mousemove', (e) => {
          const r = card.getBoundingClientRect();
          const lx = e.clientX - r.left;
          const ly = e.clientY - r.top;
          card.style.setProperty('--mx', lx + 'px');
          card.style.setProperty('--my', ly + 'px');
          if (!reduced) {
            const px = lx / r.width - 0.5;
            const py = ly / r.height - 0.5;
            rotY(px * TILT * 2);
            rotX(-py * TILT * 2);
          }
        });
        card.addEventListener('mouseleave', () => {
          if (!reduced) gsap.to(card, { y: 0, rotateX: 0, rotateY: 0, duration: 0.7, ease: 'power3.out' });
        });
      });
    }

    /* ---------------- Hero portrait — cursor parallax ---------------- */
    if (!reduced && canHover) {
      const portrait = document.querySelector('.portrait-glass');
      if (portrait) {
        gsap.set(portrait, { transformPerspective: 1100 });
        const x = gsap.quickTo(portrait, 'x', { duration: 0.9, ease: 'power3.out' });
        const y = gsap.quickTo(portrait, 'y', { duration: 0.9, ease: 'power3.out' });
        const rotX = gsap.quickTo(portrait, 'rotateX', { duration: 0.9, ease: 'power3.out' });
        const rotY = gsap.quickTo(portrait, 'rotateY', { duration: 0.9, ease: 'power3.out' });
        window.addEventListener('mousemove', (e) => {
          const px = e.clientX / window.innerWidth - 0.5;
          const py = e.clientY / window.innerHeight - 0.5;
          x(px * 18);
          y(py * 18);
          rotY(px * 5);
          rotX(-py * 5);
        }, { passive: true });
      }
    }

    /* ---------------- Timeline progressive line + marker pop ---------------- */
    document.querySelectorAll('.timeline').forEach((tl) => {
      const fill = document.createElement('span');
      fill.className = 'timeline-fill';
      tl.appendChild(fill);
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: tl,
            start: 'top 75%',
            end: 'bottom 75%',
            scrub: 0.5,
          },
        }
      );
    });

    document.querySelectorAll('.timeline-marker').forEach((m) => {
      gsap.set(m, { scale: 0, opacity: 0 });
      ScrollTrigger.create({
        trigger: m,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(m, {
            scale: 1,
            opacity: 1,
            duration: reduced ? 0.01 : 0.55,
            ease: 'back.out(2.2)',
          });
        },
      });
    });

    /* ---------------- CEFR language bars ---------------- */
    document.querySelectorAll('.cefr-bar').forEach((bar) => {
      const level = parseInt(bar.getAttribute('data-level') || '0', 10);
      const spans = bar.querySelectorAll('span');
      spans.forEach((span, i) => {
        if (i < level) gsap.set(span, { scaleX: 0, transformOrigin: 'left center' });
      });
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          spans.forEach((span, i) => {
            if (i < level) {
              gsap.to(span, {
                scaleX: 1,
                duration: reduced ? 0.01 : 0.55,
                ease: 'power3.out',
                delay: i * 0.08,
              });
            }
          });
        },
      });
    });

    /* ---------------- Continuous gradient flow on the name ---------------- */
    if (!reduced) {
      gsap.to('.gradient-text', {
        backgroundPosition: '200% 50%',
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    /* ---------------- Tag chips subtle pop on enter ---------------- */
    document.querySelectorAll('.tag-row').forEach((row) => {
      const tags = row.querySelectorAll('.tag');
      gsap.set(tags, { opacity: 0, y: 8, scale: 0.92 });
      ScrollTrigger.create({
        trigger: row,
        start: 'top 92%',
        once: true,
        onEnter: () => {
          gsap.to(tags, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.06,
            duration: reduced ? 0.01 : 0.5,
            ease: 'back.out(1.7)',
          });
        },
      });
    });

    /* ---------------- Recompute layouts after fonts load ---------------- */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
