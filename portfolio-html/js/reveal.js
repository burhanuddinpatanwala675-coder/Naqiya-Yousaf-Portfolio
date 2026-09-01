// =====================================================================
// Scroll-reveal utility (subtle fade-up / fade-in on scroll into view).
// Call initReveal() once after page content has been rendered into the
// DOM. Respects prefers-reduced-motion via the CSS rules in styles.css.
// =====================================================================

export function initReveal(root = document) {
  const items = root.querySelectorAll('.reveal:not(.is-observed)')
  if (!items.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  items.forEach((el) => {
    el.classList.add('is-observed')
    observer.observe(el)
  })
}
