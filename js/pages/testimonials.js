import teacher from '../data/teacher.js'
import testimonials from '../data/testimonials.js'
import { renderNavbar, renderFooter, testimonialCardHtml, renderFilterTabs } from '../components.js'
import { initReveal } from '../reveal.js'

document.title = `What My Students Say | ${teacher.name}`
renderNavbar('testimonials.html')
renderFooter()

const FILTERS = ['All', 'O Level', 'A Level', 'Student', 'Official', 'Parent']
const grid = document.getElementById('testimonials-grid')

function paintGrid(active) {
  const filtered = active === 'All' ? testimonials : testimonials.filter((t) => t.category === active)

  if (filtered.length === 0) {
    grid.className = ''
    grid.innerHTML = '<p class="empty-state">No testimonials in this category yet.</p>'
    return
  }

  grid.className = 'card-grid card-grid--3 reveal'
  grid.innerHTML = filtered.map(testimonialCardHtml).join('')
  initReveal()
}

renderFilterTabs(document.getElementById('testimonial-filters'), FILTERS, 'All', 'Filter testimonials', paintGrid)
paintGrid('All')
