const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
