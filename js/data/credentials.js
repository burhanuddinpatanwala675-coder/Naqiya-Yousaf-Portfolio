// =====================================================================
// CREDENTIALS DATA
// ---------------------------------------------------------------------
// Powers the Credentials & Certifications page. Organised into five
// categories. Add, remove, or edit entries freely — the page renders
// whatever is in these arrays automatically.
//
// To attach a certificate document to a credential, set `certificate`
// to the file path (see certificates.js for the certificate gallery
// itself, which is managed separately).
// =====================================================================

export const academicQualifications = [
  {
    title: '[QUALIFICATION]',
    institution: '[UNIVERSITY / INSTITUTION]',
    year: '[YEAR]',
    description: '[Short description of the qualification and area of study.]',
  },
]

export const teachingQualifications = [
  {
    title: '[TEACHING QUALIFICATION]',
    institution: '[INSTITUTION]',
    year: '[YEAR]',
    description: '[Short description of the teaching qualification.]',
  },
]

export const professionalCertifications = [
  {
    title: '[CERTIFICATION TITLE]',
    institution: '[ISSUING BODY]',
    year: '[YEAR]',
    description: '[Short description of the certification and its relevance to teaching Sociology.]',
  },
]

export const trainingAndDevelopment = [
  {
    title: '[TRAINING / WORKSHOP TITLE]',
    institution: '[ORGANISATION]',
    year: '[YEAR]',
    description: '[Short description of the training undertaken.]',
  },
]

export const awardsAndRecognition = [
  {
    title: '[AWARD / RECOGNITION TITLE]',
    institution: '[AWARDING BODY]',
    year: '[YEAR]',
    description: '[Short description of the award or recognition received.]',
  },
]

// Grouped export used by the Credentials page to render each section in order.
const credentialSections = [
  { id: 'academic', title: 'Academic Qualifications', items: academicQualifications },
  { id: 'teaching', title: 'Teaching Qualifications', items: teachingQualifications },
  { id: 'professional', title: 'Professional Certifications', items: professionalCertifications },
  { id: 'training', title: 'Training & Development', items: trainingAndDevelopment },
  { id: 'awards', title: 'Awards & Recognition', items: awardsAndRecognition },
]

export default credentialSections
