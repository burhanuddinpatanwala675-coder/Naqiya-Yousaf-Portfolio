import teacher from '../data/teacher.js'
import { renderNavbar, renderFooter } from '../components.js'
import { documentIcon } from '../icons.js'
import { initReveal } from '../reveal.js'

// -----------------------------------------------------------------------
// The CV file itself is NOT generated or written by this codebase.
// Place the real Word document at:  /documents/teacher-cv.docx
// (keep this exact filename, or update CV_FILE_PATH below if you rename it)
// so this page always points to the current, real, un-fabricated CV.
// -----------------------------------------------------------------------
const CV_FILE_PATH = 'documents/teacher-cv.docx'
const CV_UPDATED_YEAR = '[YEAR]'

document.title = `Curriculum Vitae | ${teacher.name}`
renderNavbar('cv.html')
renderFooter()

document.getElementById('cv-icon').innerHTML = documentIcon('cv-card__icon')
document.getElementById('cv-updated').textContent = `Updated ${CV_UPDATED_YEAR}`

const downloadBtn = document.getElementById('cv-download')
downloadBtn.href = CV_FILE_PATH

initReveal()
