// ===== Zomato Demo — Script =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. Scroll-triggered fade-in =====
    const animEls = document.querySelectorAll('.anim');
    const animObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('show'), i * 80);
                animObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    animEls.forEach(el => animObs.observe(el));

    // ===== 2. Sticky navbar =====
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('sticky', window.scrollY > 80);
    });

    // ===== 3. Smooth scroll for hero CTA =====
    const scrollLink = document.querySelector('.hero-scroll');
    if (scrollLink) {
        scrollLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#section-food')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ===== 4. Parallax for floating food =====
    const floats = document.querySelectorAll('.float-img');
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        floats.forEach((el, i) => {
            const speed = 0.06 + i * 0.03;
            el.style.transform = `translateY(${-y * speed}px)`;
        });
    }, { passive: true });

    // ===== 5. Gold section sparkle particles =====
    const goldSection = document.querySelector('.gold-section');
    if (goldSection) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 3 + 1;
            Object.assign(p.style, {
                position: 'absolute',
                width: size + 'px',
                height: size + 'px',
                background: `rgba(212,168,71,${Math.random() * 0.4 + 0.15})`,
                borderRadius: '50%',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `sparkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: Math.random() * 3 + 's',
                pointerEvents: 'none',
                zIndex: '1'
            });
            goldSection.appendChild(p);
        }
    }

    // ===== 6. Feature card hover glow =====
    document.querySelectorAll('.feat-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.background = 'linear-gradient(135deg,#fff 0%,#fff5f5 100%)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = '#fff';
        });
    });

    // ===== 7. Stat number entrance pulse =====
    const statNums = document.querySelectorAll('.stat-num');
    const statObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'transform 0.4s cubic-bezier(.22,1,.36,1)';
                entry.target.style.transform = 'scale(1.15)';
                setTimeout(() => { entry.target.style.transform = 'scale(1)'; }, 400);
                statObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    statNums.forEach(el => statObs.observe(el));
});
