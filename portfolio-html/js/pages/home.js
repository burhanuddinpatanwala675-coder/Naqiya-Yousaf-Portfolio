import teacher from '../data/teacher.js'
import { renderNavbar, renderFooter, statCardHtml } from '../components.js'
import { initReveal } from '../reveal.js'

document.title = `${teacher.name} | Sociology Teacher | O Level & A Level`
renderNavbar('index.html')
renderFooter()

// ---- Hero ----
document.getElementById('hero-name').textContent = teacher.name
document.getElementById('hero-role-levels').innerHTML = `${teacher.role} · <span>${teacher.levels}</span>`
document.getElementById('hero-headline').textContent = teacher.heroHeadline
document.getElementById('hero-subtext').textContent = teacher.heroSubtext

const primaryBtn = document.getElementById('hero-btn-primary')
primaryBtn.textContent = teacher.heroButtons.primary.label
primaryBtn.href = teacher.heroButtons.primary.href

const secondaryBtn = document.getElementById('hero-btn-secondary')
secondaryBtn.textContent = teacher.heroButtons.secondary.label
secondaryBtn.href = teacher.heroButtons.secondary.href

const heroImg = document.getElementById('hero-portrait')
heroImg.src = teacher.portrait.src
heroImg.alt = teacher.portrait.alt

document.getElementById('hero-image-caption').textContent = `${teacher.role} — ${teacher.levels}`

// ---- Credibility strip ----
document.getElementById('credibility-list').innerHTML = teacher.credibilityItems
  .map((item) => `<div class="credibility__item">${item.label}</div>`)
  .join('')

// ---- Profile stats ----
document.getElementById('profile-stats').innerHTML = teacher.profileStats.map(statCardHtml).join('')

// ---- Philosophy quote ----
document.getElementById('philosophy-quote').textContent = teacher.philosophyQuote
document.getElementById('philosophy-attribution').textContent = teacher.philosophyAttribution

initReveal()
