import teacher from '../data/teacher.js'
import { renderNavbar, renderFooter } from '../components.js'
import { initReveal } from '../reveal.js'

document.title = `My Teaching Approach | ${teacher.name}`
renderNavbar('teaching.html')
renderFooter()

document.getElementById('approach-list').innerHTML = teacher.teachingApproach
  .map(
    (item) => `
    <div class="approach-item reveal">
      <div class="approach-item__number" aria-hidden="true">${item.number}</div>
      <div>
        <h2 class="approach-item__title">${item.title}</h2>
        <p>${item.description}</p>
      </div>
    </div>`,
  )
  .join('')

initReveal()
