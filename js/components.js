// =====================================================================
// Shared UI building blocks: navbar, footer, and reusable card markup.
// Every page imports what it needs from here so the header/footer and
// card layouts only need to be defined once.
// =====================================================================

import teacher from './data/teacher.js'
import contact from './data/contact.js'
import { formatStudentName } from './data/achievements.js'
import {
  emailIcon,
  phoneIcon,
  whatsAppIcon,
  locationIcon,
  certificateIcon,
  linkedInIcon,
  instagramIcon,
  facebookIcon,
  youTubeIcon,
} from './icons.js'

const NAV_ITEMS = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'about.html' },
  { label: 'Credentials', href: 'credentials.html' },
  { label: 'Teaching', href: 'teaching.html' },
  { label: 'Testimonials', href: 'testimonials.html' },
  { label: 'Distinctions', href: 'distinctions.html' },
  { label: 'CV', href: 'cv.html' },
  { label: 'Contact', href: 'contact.html' },
]

// -----------------------------------------------------------------------
// NAVBAR
// -----------------------------------------------------------------------
export function renderNavbar(activeHref) {
  const mount = document.getElementById('site-header')
  if (!mount) return

  const links = NAV_ITEMS.map(
    (item) => `
      <a href="${item.href}" class="navbar__link${item.href === activeHref ? ' is-active' : ''}"${item.href === activeHref ? ' aria-current="page"' : ''}>
        ${item.label}
      </a>`,
  ).join('')

  mount.innerHTML = `
    <div class="container navbar__inner">
      <a href="index.html" class="navbar__brand" aria-label="${teacher.name} — Home">
        <span class="navbar__brand-name">${teacher.name}</span>
        <span class="navbar__brand-tagline">${teacher.tagline}</span>
      </a>

      <button type="button" class="navbar__toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation">
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
      </button>

      <nav id="primary-navigation" class="navbar__links" aria-label="Primary">
        ${links}
      </nav>
    </div>
  `

  initMobileNav()
}

function initMobileNav() {
  const toggle = document.querySelector('.navbar__toggle')
  const links = document.querySelector('.navbar__links')
  if (!toggle || !links) return

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Open navigation menu')
    links.classList.remove('is-open')
  }

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true')
    toggle.setAttribute('aria-label', 'Close navigation menu')
    links.classList.add('is-open')
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true'
    if (isOpen) closeMenu()
    else openMenu()
  })

  // Close the menu whenever a link inside it is clicked (mobile navigation)
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })

  // Close on Escape for keyboard users
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu()
      toggle.focus()
    }
  })
}

// -----------------------------------------------------------------------
// FOOTER
// -----------------------------------------------------------------------
export function renderFooter() {
  const mount = document.getElementById('site-footer')
  if (!mount) return

  const year = new Date().getFullYear()

  const socialIcons = [
    { key: 'linkedin', label: 'LinkedIn', svg: linkedInIcon('social-links__svg') },
    { key: 'instagram', label: 'Instagram', svg: instagramIcon('social-links__svg') },
    { key: 'facebook', label: 'Facebook', svg: facebookIcon('social-links__svg') },
    { key: 'youtube', label: 'YouTube', svg: youTubeIcon('social-links__svg') },
  ].filter((item) => contact.social[item.key])

  const socialHtml = socialIcons.length
    ? `<div class="social-links" aria-label="Social media links">
        ${socialIcons
          .map(
            (item) => `
          <a href="${contact.social[item.key]}" target="_blank" rel="noopener noreferrer" class="social-links__icon" aria-label="${item.label}">
            ${item.svg}
          </a>`,
          )
          .join('')}
      </div>`
    : ''

  const quickLinks = NAV_ITEMS.map(
    (item) => `<li><a href="${item.href}">${item.label}</a></li>`,
  ).join('')

  mount.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__brand-name">${teacher.name}</div>
          <p class="footer__brand-tagline">${teacher.role}<br />${teacher.levels}</p>
          ${socialHtml}
        </div>

        <div>
          <div class="footer__heading">Quick Links</div>
          <ul class="footer__links">${quickLinks}</ul>
        </div>

        <div>
          <div class="footer__heading">Contact Information</div>
          <ul class="footer__contact">
            <li>${contact.email}</li>
            <li>${contact.phone}</li>
            ${contact.whatsappNumber ? `<li>${contact.whatsappDisplay}</li>` : ''}
          </ul>
        </div>
      </div>

      <div class="footer__bottom">© ${year} ${teacher.name}. All rights reserved.</div>
    </div>
  `
}

// -----------------------------------------------------------------------
// CARD BUILDERS
// Each function returns an HTML string for one card. Callers join()
// these into a container's innerHTML.
// -----------------------------------------------------------------------
export function statCardHtml(stat) {
  return `
    <div class="stat-card">
      <div class="stat-card__value">${stat.value}</div>
      <div class="stat-card__label">${stat.label}</div>
    </div>`
}

export function credentialCardHtml(item) {
  return `
    <article class="credential-card">
      <h3 class="credential-card__title">${item.title}</h3>
      <div class="credential-card__meta">
        <span>${item.institution}</span>
        ${item.year ? `<span aria-hidden="true">•</span><span>${item.year}</span>` : ''}
      </div>
      ${item.description ? `<p class="credential-card__desc">${item.description}</p>` : ''}
      ${
        item.certificate
          ? `<a class="credential-card__link" href="${item.certificate}" target="_blank" rel="noopener noreferrer">View Certificate</a>`
          : ''
      }
    </article>`
}

export function certificateCardHtml(cert) {
  const preview = cert.preview
    ? `<img src="${cert.preview}" alt="${cert.title} certificate preview" loading="lazy" />`
    : certificateIcon('certificate-card__icon')

  return `
    <article class="certificate-card">
      <div class="certificate-card__preview">${preview}</div>
      <div class="certificate-card__body">
        <h3 class="certificate-card__title">${cert.title}</h3>
        <p class="certificate-card__meta">${cert.institution}${cert.year ? ` · ${cert.year}` : ''}</p>
        <a href="${cert.file}" target="_blank" rel="noopener noreferrer" class="btn btn-outline certificate-card__cta">View Certificate</a>
      </div>
    </article>`
}

export function testimonialCardHtml(t) {
  return `
    <article class="testimonial-card">
      <div class="testimonial-card__mark" aria-hidden="true">&ldquo;</div>
      <p class="testimonial-card__quote">${t.quote}</p>
      <div>
        <div class="testimonial-card__name">— ${t.name}</div>
        <div class="testimonial-card__meta">${t.level}${t.year ? ` · ${t.year}` : ''}</div>
      </div>
    </article>`
}

export function achievementCardHtml(achievement, index) {
  const displayName = formatStudentName(achievement, index)
  return `
    <article class="achievement-card">
      <div class="achievement-card__result">${achievement.result}</div>
      <div class="achievement-card__name">${displayName}</div>
      <div class="achievement-card__level">${achievement.level}</div>
      <div class="achievement-card__session">${achievement.examSession} ${achievement.year}</div>
      ${achievement.description ? `<p class="achievement-card__desc">${achievement.description}</p>` : ''}
    </article>`
}

// -----------------------------------------------------------------------
// CONTACT ICON HELPERS (used on the Contact page)
// -----------------------------------------------------------------------
export const contactIcons = { emailIcon, phoneIcon, whatsAppIcon, locationIcon }

// -----------------------------------------------------------------------
// FILTER TABS
// Renders a row of toggle buttons into `container` and calls onChange
// with the selected option whenever the user picks a different one.
// -----------------------------------------------------------------------
export function renderFilterTabs(container, options, initial, label, onChange) {
  let active = initial

  function paint() {
    container.innerHTML = options
      .map(
        (option) => `
        <button type="button" class="filter-tab${option === active ? ' is-active' : ''}" aria-pressed="${option === active}" data-option="${option}">
          ${option}
        </button>`,
      )
      .join('')
  }

  container.setAttribute('role', 'group')
  container.setAttribute('aria-label', label)
  paint()

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-tab')
    if (!btn) return
    active = btn.dataset.option
    paint()
    onChange(active)
  })
}

// =====================================================================
// IMAGE CAROUSEL
// ---------------------------------------------------------------------
// Renders a small auto-advancing photo carousel inside `frameEl` (which
// should already have a fixed aspect ratio / overflow:hidden via CSS —
// see .hero__image-frame). `images` is an array of { src, alt }.
// Autoplay pauses on hover/focus and is skipped entirely for visitors
// who prefer reduced motion.
// =====================================================================
export function initImageCarousel(frameEl, images, { interval = 5000, autoplay = true } = {}) {
  if (!images || images.length === 0) return

  const track = document.createElement('div')
  track.className = 'carousel'
  track.setAttribute('role', 'group')
  track.setAttribute('aria-roledescription', 'carousel')
  track.setAttribute('aria-label', 'Photographs')

  track.innerHTML = images
    .map(
      (img, i) => `
      <div class="carousel__slide${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-hidden="${i === 0 ? 'false' : 'true'}">
        <img src="${img.src}" alt="${img.alt || ''}" loading="${i === 0 ? 'eager' : 'lazy'}" />
      </div>`,
    )
    .join('')

  frameEl.innerHTML = ''
  frameEl.appendChild(track)

  if (images.length === 1) return

  const prevBtn = document.createElement('button')
  prevBtn.type = 'button'
  prevBtn.className = 'carousel__arrow carousel__arrow--prev'
  prevBtn.setAttribute('aria-label', 'Previous photo')
  prevBtn.innerHTML = '&#8249;'

  const nextBtn = document.createElement('button')
  nextBtn.type = 'button'
  nextBtn.className = 'carousel__arrow carousel__arrow--next'
  nextBtn.setAttribute('aria-label', 'Next photo')
  nextBtn.innerHTML = '&#8250;'

  const dots = document.createElement('div')
  dots.className = 'carousel__dots'
  dots.innerHTML = images
    .map((_, i) => `<button type="button" class="carousel__dot${i === 0 ? ' is-active' : ''}" aria-label="Go to photo ${i + 1}" data-index="${i}"></button>`)
    .join('')

  frameEl.appendChild(prevBtn)
  frameEl.appendChild(nextBtn)
  frameEl.appendChild(dots)

  const slides = Array.from(track.querySelectorAll('.carousel__slide'))
  const dotEls = Array.from(dots.querySelectorAll('.carousel__dot'))
  let current = 0
  let timer = null

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function goTo(index) {
    const next = (index + images.length) % images.length
    slides[current].classList.remove('is-active')
    slides[current].setAttribute('aria-hidden', 'true')
    dotEls[current].classList.remove('is-active')
    current = next
    slides[current].classList.add('is-active')
    slides[current].setAttribute('aria-hidden', 'false')
    dotEls[current].classList.add('is-active')
  }

  function start() {
    if (prefersReducedMotion || !autoplay) return
    stop()
    timer = setInterval(() => goTo(current + 1), interval)
  }

  function stop() {
    if (timer) clearInterval(timer)
    timer = null
  }

  prevBtn.addEventListener('click', () => {
    goTo(current - 1)
    start()
  })
  nextBtn.addEventListener('click', () => {
    goTo(current + 1)
    start()
  })
  dots.addEventListener('click', (e) => {
    const btn = e.target.closest('.carousel__dot')
    if (!btn) return
    goTo(Number(btn.dataset.index))
    start()
  })

  frameEl.addEventListener('mouseenter', stop)
  frameEl.addEventListener('mouseleave', start)
  frameEl.addEventListener('focusin', stop)
  frameEl.addEventListener('focusout', start)

  start()
}
