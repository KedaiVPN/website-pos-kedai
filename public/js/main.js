document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav__list');

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

  // 2. Smooth Scrolling for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if open
        if (window.innerWidth <= 768 && navList) {
          navList.style.display = 'none';
        }
      }
    });
  });

  // 3. Lead Form Submission Handling
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Mengirim...';
      submitBtn.disabled = true;

      const formData = {
        nama: document.getElementById('nama').value,
        hp: document.getElementById('hp').value,
        nama_toko: document.getElementById('nama_toko').value
      };

      try {
        const response = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const result = await response.json();

        if (result.success) {
          alert('Terima kasih! Tim POS Kedai akan segera menghubungi Anda via WhatsApp.');
          leadForm.reset();
        } else {
          alert(result.message || 'Terjadi kesalahan, silakan coba lagi.');
        }
      } catch (err) {
        alert('Gagal mengirim data. Pastikan koneksi internet Anda aktif.');
      } finally {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // 4. Hero Phone Alignment on Scroll (Scroll Scrub - smooth from the start)
  const mockupContainer = document.querySelector('.mockup-fanned');
  const phoneFrames = mockupContainer ? mockupContainer.querySelectorAll('.android-phone') : [];
  if (mockupContainer && phoneFrames.length > 0) {
    const heroSection = document.querySelector('.hero');
    const heroTop = heroSection ? heroSection.offsetTop : 0;
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
    const scrollRange = heroHeight * 0.7;

    // Initial transforms per phone (index 0..4)
    const baseTransforms = [
      { y: 30, r: -16, s: 0.9, o: 0.85 },
      { y: 10, r: -8, s: 1, o: 1 },
      { y: -20, r: 0, s: 1.08, o: 1 },
      { y: 10, r: 8, s: 1, o: 1 },
      { y: 30, r: 16, s: 0.9, o: 0.85 }
    ];

    function updatePhoneTransforms() {
      const scrolled = window.scrollY - heroTop;
      const progress = Math.min(Math.max(scrolled / scrollRange, 0), 1);

      phoneFrames.forEach((frame, i) => {
        const base = baseTransforms[i];
        const t = base.y * (1 - progress);
        const r = base.r * (1 - progress);
        const s = base.s + (1 - base.s) * progress;
        const o = base.o + (1 - base.o) * progress;
        frame.style.transform = `translateY(${t}px) rotate(${r}deg) scale(${s})`;
        frame.style.opacity = o;
      });
    }
    window.addEventListener('scroll', updatePhoneTransforms, { passive: true });
    updatePhoneTransforms(); // run once on load
  }

  // 5. Scroll-Triggered Card Reveal on Feature Cards
  const featureCards = document.querySelectorAll('.feature-card');
  if (featureCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger: each card reveals with 100ms delay
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 100);
          
          // Stop observing once revealed (no need to re-trigger)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,  // Trigger when 15% of card is visible
      rootMargin: '0px 0px -50px 0px'  // Trigger slightly before full visibility
    });
    
    featureCards.forEach(card => observer.observe(card));
  }

  // 6. Generic Scroll Reveal for ALL sections (refero-design pattern)
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.revealDelay || '0', 10);
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));
  }
});
