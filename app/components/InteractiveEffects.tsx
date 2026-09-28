'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveEffects() {
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // 1. Mobile Menu Toggle (hamburger)
    const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
    const navList = document.querySelector('.nav__list') as HTMLElement | null;

    if (hamburger && navList) {
      hamburger.addEventListener('click', () => {
        if (navList.style.display === 'flex') {
          navList.style.display = 'none';
        } else {
          navList.style.display = 'flex';
          navList.style.flexDirection = 'column';
          navList.style.position = 'absolute';
          navList.style.top = '100%';
          navList.style.left = '0';
          navList.style.width = '100%';
          navList.style.backgroundColor = 'var(--surface-paper-white)';
          navList.style.padding = 'var(--spacing-24)';
          navList.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
        }
      });
    }

    // 2. Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = (this as HTMLAnchorElement).getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          if (window.innerWidth <= 768 && navList) {
            navList.style.display = 'none';
          }
        }
      });
    });

    // 3. Lead Form Submission
    const leadForm = document.getElementById('lead-form') as HTMLFormElement | null;
    if (leadForm) {
      leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = leadForm.querySelector('button[type="submit"]') as HTMLButtonElement | null;
        const originalText = submitBtn?.innerText;
        if (submitBtn) {
          submitBtn.innerText = 'Mengirim...';
          submitBtn.disabled = true;
        }

        const formData = new FormData(leadForm);
        const formDataObj = Object.fromEntries(formData.entries());

        try {
          const response = await fetch('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataObj),
          });

          if (response.ok) {
            leadForm.innerHTML = '<p style="color: #047857; text-align: center; font-weight: 600; font-size: 1.2rem;">Terima kasih! Tim kami akan segera menghubungi Anda.</p>';
            if (navigator.vibrate) navigator.vibrate(200);
          } else {
            throw new Error('Gagal mengirim');
          }
        } catch (error) {
          leadForm.innerHTML = '<p style="color: #dc2626; text-align: center; font-weight: 600; font-size: 1.1rem;">Gagal mengirim. Mohon coba lagi nanti.</p>';
          if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
        } finally {
          if (submitBtn) {
            submitBtn.innerText = originalText || 'Daftar Sekarang';
            submitBtn.disabled = false;
          }
        }
      });
    }

    // 4. Scroll Reveal untuk Feature Cards (stagger animation)
    const initReveal = () => {
      const cards = document.querySelectorAll('.feature-card');
      if (cards.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.add('revealed');
                }, index * 100);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
        );
        cards.forEach((card) => observer.observe(card));
      }

      // 5. Generic data-reveal observer
      const revealElements = document.querySelectorAll('[data-reveal]');
      if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const delay = parseInt((entry.target as HTMLElement).dataset.revealDelay || '0', 10);
                setTimeout(() => {
                  entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        revealElements.forEach((el) => revealObserver.observe(el));
      }
    };

    // Delay init slightly to ensure sibling elements are mounted in App Router
    setTimeout(initReveal, 500);

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', () => {});
      });
      if (leadForm) {
        leadForm.removeEventListener('submit', () => {});
      }
      // observer.disconnect() not called because we only unobserve, not destroy
    };
  }, []);

  return null;
}
