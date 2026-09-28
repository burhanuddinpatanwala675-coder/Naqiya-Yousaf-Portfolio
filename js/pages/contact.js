import teacher from '../data/teacher.js'
import contact from '../data/contact.js'
import { renderNavbar, renderFooter, contactIcons } from '../components.js'
import { initReveal } from '../reveal.js'

document.title = `Get in Touch | ${teacher.name}`
renderNavbar('contact.html')
renderFooter()

const iconStyle = 'style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"'

document.getElementById('contact-grid').innerHTML = `
  <div class="contact-item">
    <div class="contact-item__label">${contactIcons.emailIcon('').replace('<svg ', `<svg ${iconStyle} `)}Email</div>
    <div class="contact-item__value">${contact.email}</div>
  </div>
  <div class="contact-item">
    <div class="contact-item__label">${contactIcons.phoneIcon('').replace('<svg ', `<svg ${iconStyle} `)}Phone</div>
    <div class="contact-item__value">${contact.phone}</div>
  </div>
  <div class="contact-item">
    <div class="contact-item__label">${contactIcons.whatsAppIcon('').replace('<svg ', `<svg ${iconStyle} `)}WhatsApp</div>
    <div class="contact-item__value">${contact.whatsappDisplay}</div>
  </div>
  <div class="contact-item">
    <div class="contact-item__label">${contactIcons.locationIcon('').replace('<svg ', `<svg ${iconStyle} `)}Location</div>
    <div class="contact-item__value">${contact.location}</div>
  </div>
  <div class="contact-item">
    <div class="contact-item__label">Teaching Mode</div>
    <div class="contact-item__value">${contact.teachingMode}</div>
  </div>
`

const actions = document.getElementById('contact-actions')
let actionsHtml = `<a href="mailto:${contact.email}" class="btn btn-primary">Email Me</a>`
if (contact.whatsappNumber) {
  actionsHtml += `<a href="https://wa.me/${contact.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">WhatsApp Me</a>`
}
actions.innerHTML = actionsHtml

// ---- Tuition & availability panel ----
const tuitionPanel = document.getElementById('tuition-panel')
if (tuitionPanel && contact.tuition && contact.availability) {
  const yesNo = (value) => (typeof value === 'string' ? value : value ? 'Yes' : 'No')

  const tuitionRows = [
    ['O Level / IGCSE Tuition', contact.tuition.oLevelIgcse],
    ['A Level Tuition', contact.tuition.aLevel],
    ['Individual Classes', contact.tuition.individual],
    ['Group Classes', contact.tuition.group],
    ['Online Classes', contact.tuition.online],
    ['In-Person Classes', contact.tuition.inPerson],
  ]
    .map(([label, value]) => `<li class="tuition-list__item"><span>${label}</span><strong>${yesNo(value)}</strong></li>`)
    .join('')

  const slotsHtml = contact.availability.slots.map((slot) => `<li class="tuition-list__item"><span>Slot</span><strong>${slot}</strong></li>`).join('')

  tuitionPanel.innerHTML = `
    <div class="tuition-card">
      <h3 class="tuition-card__title">What I Offer</h3>
      <ul class="tuition-list">${tuitionRows}</ul>
      ${contact.inPersonAreas ? `<p class="tuition-card__note">In-person teaching available in ${contact.inPersonAreas}.</p>` : ''}
    </div>
    <div class="tuition-card">
      <h3 class="tuition-card__title">Preferred Teaching Hours</h3>
      <ul class="tuition-list">
        <li class="tuition-list__item"><span>Days</span><strong>${contact.availability.days}</strong></li>
        ${slotsHtml}
        <li class="tuition-list__item"><span>Timezone</span><strong>${contact.availability.timezone}</strong></li>
      </ul>
      <p class="tuition-card__note">Please get in touch to confirm current availability — slots depend on existing bookings.</p>
    </div>
  `
}

initReveal()
