document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project, .overview-item, .insight-card, .concept-left, .concept-right, .stage, .activation, .system-copy, .system-flow, .budget-strip, .takeaway, .capability-grid > div, .about-copy').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
