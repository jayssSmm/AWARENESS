
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
    const toggle = document.getElementById('navToggle');
    if (toggle) toggle.checked = false;
});
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
document.documentElement.style.setProperty('--anim', '0s');
} else if ('IntersectionObserver' in window) {
const items = document.querySelectorAll('.project-card, .stat-card, .cta-card');
items.forEach(el => { el.style.opacity = 0; el.style.transform = 'translateY(14px)'; el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; });
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
    }
    });
}, { threshold: 0.15 });
items.forEach(el => io.observe(el));
}