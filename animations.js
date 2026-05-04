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
      gsap.set('.scroll-hint', { opacity: 0, y: 8 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });
      tl.to('.hero .eyebrow', { y: 0, opacity: 1, duration: 0.7 })
        .to('.hero-title > span:first-child', { y: 0, opacity: 1 }, '-=0.45')
        .to('.hero-title .gradient-text', { y: 0, opacity: 1 }, '-=0.6')
        .to('.hero-subtitle', { y: 0, opacity: 1, duration: 0.7 }, '-=0.55')
        .to('.hero-tagline', { y: 0, opacity: 1, duration: 0.7 }, '-=0.55')
        .to('.hero-ctas .btn', { y: 0, opacity: 1, stagger: 0.08, duration: 0.7 }, '-=0.5')
        .to('.hero-portrait', { y: 0, scale: 1, opacity: 1, duration: 1.1, ease: 'power4.out' }, '-=1.1')
        // Scroll hint arrives ~1s after the rest is settled
        .to('.scroll-hint', { y: 0, opacity: 0.6, duration: 0.8 }, '+=1');
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
        const rotX = !reduced ? gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3.out' }) : null;
        const rotY = !reduced ? gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3.out' }) : null;
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
          if (!reduced) gsap.to(card, { y: 0, rotationX: 0, rotationY: 0, duration: 0.7, ease: 'power3.out' });
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
        const rotX = gsap.quickTo(portrait, 'rotationX', { duration: 0.9, ease: 'power3.out' });
        const rotY = gsap.quickTo(portrait, 'rotationY', { duration: 0.9, ease: 'power3.out' });
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

    /* ---------------- Easter eggs ----------------
       1) Konami code → rainbow flash on the gradient name + a "secret unlocked"
          glass-chip toast that fades in/out. Console signature.
       2) Triple-click on the PR logo → orbit dots spin up briefly. */
    const showToast = (text) => {
      let wrap = document.querySelector('.egg-toast-wrap');
      let toast;
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'egg-toast-wrap';
        toast = document.createElement('div');
        toast.className = 'egg-toast glass-chip';
        wrap.appendChild(toast);
        document.body.appendChild(wrap);
      } else {
        toast = wrap.querySelector('.egg-toast');
      }
      toast.textContent = text;
      gsap.fromTo(
        toast,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
          onComplete: () => {
            gsap.to(toast, { y: 20, opacity: 0, duration: 0.5, ease: 'power3.in', delay: 2.4 });
          },
        }
      );
    };

    // (1) Konami sequence
    const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let konamiIdx = 0;
    window.addEventListener('keydown', (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI[konamiIdx]) {
        konamiIdx++;
        if (konamiIdx === KONAMI.length) {
          konamiIdx = 0;
          const grad = document.querySelector('.gradient-text');
          if (grad && !reduced) {
            gsap.fromTo(grad,
              { filter: 'hue-rotate(0deg) saturate(1.5)' },
              { filter: 'hue-rotate(360deg) saturate(1.5)', duration: 4, ease: 'none', onComplete: () => gsap.set(grad, { clearProps: 'filter' }) }
            );
          }
          showToast('You found a secret. Nice.');
          // eslint-disable-next-line no-console
          console.log('%c↑↑↓↓←→←→ B A — welcome, fellow gamer.', 'color:#2a6fbf;font-style:italic');
        }
      } else {
        konamiIdx = key === KONAMI[0] ? 1 : 0;
      }
    });

    // (2) Triple-click on the PR logo → orbit dots accelerate
    const brand = document.querySelector('.nav-brand');
    if (brand) {
      let clicks = 0;
      let timer = null;
      brand.addEventListener('click', (e) => {
        clicks++;
        clearTimeout(timer);
        timer = setTimeout(() => (clicks = 0), 600);
        if (clicks >= 3) {
          clicks = 0;
          e.preventDefault();
          const dots = document.querySelectorAll('.orbit-dot');
          if (dots.length && !reduced) {
            gsap.fromTo(dots,
              { scale: 1 },
              { scale: 1.6, duration: 0.4, ease: 'back.out(2)', yoyo: true, repeat: 5, stagger: 0.06 }
            );
          }
          // eslint-disable-next-line no-console
          console.log('%cCurious one. Hire me: contact@paulrobain.fr', 'color:#2a6fbf;font-style:italic');
          showToast('Hi. Curious, are we?');
        }
      });
    }

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
