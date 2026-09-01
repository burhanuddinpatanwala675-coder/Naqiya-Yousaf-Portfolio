import teacher from '../data/teacher.js'
import achievements, { achievementStats } from '../data/achievements.js'
import { renderNavbar, renderFooter, achievementCardHtml, statCardHtml, renderFilterTabs } from '../components.js'
import { initReveal } from '../reveal.js'

document.title = `Student Distinctions & Achievements | ${teacher.name}`
renderNavbar('distinctions.html')
renderFooter()

// ---- Statistics (hidden entirely if nothing has a real value) ----
const visibleStats = achievementStats.filter(
  (stat) => stat.value !== null && stat.value !== undefined && stat.value !== '',
)
const statsSection = document.getElementById('distinctions-stats')
if (visibleStats.length > 0) {
  statsSection.innerHTML = `<div class="container"><div class="card-grid card-grid--4 reveal">${visibleStats
    .map(statCardHtml)
    .join('')}</div></div>`
} else {
  statsSection.remove()
}

// ---- Filterable achievement grid ----
const FILTERS = ['All', 'O Level', 'A Level']
const grid = document.getElementById('achievements-grid')

// Attach each achievement's original index so anonymous "Student A/B/C"
// labels stay stable regardless of which filter is applied.
const indexed = achievements.map((item, index) => ({ item, index }))

function paintGrid(active) {
  const filtered = active === 'All' ? indexed : indexed.filter(({ item }) => item.category === active)

  if (filtered.length === 0) {
    grid.className = ''
    grid.innerHTML = '<p class="empty-state">No distinctions in this category yet.</p>'
    return
  }

  grid.className = 'card-grid card-grid--3 reveal'
  grid.innerHTML = filtered.map(({ item, index }) => achievementCardHtml(item, index)).join('')
  initReveal()
}

renderFilterTabs(document.getElementById('distinctions-filters'), FILTERS, 'All', 'Filter distinctions', paintGrid)
paintGrid('All')

initReveal()
