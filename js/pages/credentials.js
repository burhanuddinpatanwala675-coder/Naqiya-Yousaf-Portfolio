import teacher from '../data/teacher.js'
import credentialSections from '../data/credentials.js'
import certificates from '../data/certificates.js'
import { renderNavbar, renderFooter, credentialCardHtml, certificateCardHtml } from '../components.js'
import { initReveal } from '../reveal.js'

document.title = `Credentials & Certifications | ${teacher.name}`
renderNavbar('credentials.html')
renderFooter()

const sectionsContainer = document.getElementById('credential-sections')
sectionsContainer.innerHTML = credentialSections
  .map(
    (section) => `
    <div class="about-section reveal" style="margin-bottom:56px;">
      <h2 style="margin-bottom:28px;">${section.title}</h2>
      <div class="card-grid card-grid--2">
        ${section.items.map(credentialCardHtml).join('')}
      </div>
    </div>`,
  )
  .join('')

const galleryContainer = document.getElementById('certificate-gallery')
if (certificates.length > 0) {
  galleryContainer.className = 'card-grid card-grid--3 reveal'
  galleryContainer.innerHTML = certificates.map(certificateCardHtml).join('')
} else {
  galleryContainer.innerHTML = '<p class="empty-state">Certificates will be added here as they become available.</p>'
}

initReveal()
