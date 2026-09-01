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

initReveal()
