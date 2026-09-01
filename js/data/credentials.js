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
    title: 'Bachelor of Arts (BA), Faculty of Social Sciences',
    institution: 'University of Karachi, Pakistan',
    year: '2021',
    description: 'Completed with First Division.',
  },
  {
    title: 'Bachelor in Social Sciences (coursework)',
    institution: 'SZABIST, Karachi, Pakistan',
    year: '2014',
    description: '108 of 144 credit hours completed, with a CGPA of 3.06 out of 4.0.',
  },
  {
    title: 'O Level & A Level',
    institution: 'Beaconhouse School System, Karachi, Pakistan',
    year: '2008 – 2011',
    description: 'Cambridge O Level and A Level education.',
  },
]

// No formal teaching qualification (e.g. PGCE / B.Ed) was included in the
// material supplied — left empty on purpose rather than invented. See
// professionalCertifications and trainingAndDevelopment below for her
// in-service teacher training instead.
export const teachingQualifications = []

export const professionalCertifications = [
  {
    title: 'Code of Conduct',
    institution: 'Beaconhouse School System',
    year: '2021',
    description: 'Professional development certification.',
  },
  {
    title: 'Conflict of Interest',
    institution: 'Beaconhouse School System',
    year: '2021',
    description: 'Professional development certification.',
  },
  {
    title: 'Tackle Workplace Harassment',
    institution: 'Beaconhouse School System',
    year: '2021',
    description: 'Professional development certification.',
  },
  {
    title: 'Productivity & Time Management for the Overwhelmed',
    institution: 'Beaconhouse School System',
    year: '2022',
    description: 'Professional development certification.',
  },
  {
    title: 'Core Competency: Service Focus',
    institution: 'Beaconhouse School System',
    year: '',
    description: 'Professional development certification.',
  },
  {
    title: 'Core Competency: Adaptability',
    institution: 'Beaconhouse Group',
    year: '2026',
    description: 'Professional development certification.',
  },
  {
    title: 'Core Competency: Continuous Learning',
    institution: 'Beaconhouse Group',
    year: '2025',
    description: 'Professional development certification.',
  },
  {
    title: 'Mental Wellbeing: Life Matters',
    institution: 'Beaconhouse Group',
    year: '2026',
    description: 'Professional development certification.',
  },
  {
    title: 'Student Protection Programme (Online)',
    institution: 'Beaconhouse School System',
    year: '',
    description: 'Professional development certification.',
  },
]

export const trainingAndDevelopment = [
  {
    title: 'Developing Reflective Practitioners (DRP)',
    institution: 'Beaconhouse School System',
    year: 'December 2023',
    description: 'A 5-day training course for experienced teachers (30 hours).',
  },
]

export const awardsAndRecognition = [
  {
    title: 'Certificate of Honour — "The Devoted Educator"',
    institution: 'Beaconhouse College Programme',
    year: '2025',
    description: 'In appreciation of dedication, excellence, and lasting impact as an educator.',
  },
  {
    title: 'Certificate of Honour — Exceptional Dedication & Commitment',
    institution: 'Beaconhouse College Programme, Abbottabad',
    year: '2024',
    description: 'For exceptional dedication and commitment to nurturing and inspiring students.',
  },
  {
    title: 'Cambridge High Achievers Award in Sociology — Top in North Pakistan',
    institution: 'Beaconhouse School System, Abbottabad Campus',
    year: '2023',
    description: 'Awarded for the Cambridge IGCSE Sociology result achieved under her teaching, and for the Highest GPA in Sociology, North region.',
  },
  {
    title: 'Outstanding Performance Recognition — O Level Sociology',
    institution: 'Beaconhouse School System',
    year: '2024',
    description: 'Personal congratulations from the Regional Director for students’ outstanding performance in the Cambridge International O Level Sociology result.',
  },
  {
    title: 'Certificate of Appreciation',
    institution: 'Beaconhouse School System',
    year: '2024',
    description: 'In recognition of outstanding dedication and exceptional contributions throughout the year.',
  },
  {
    title: 'Certificate of Recognition — Empowering High-Quality Written Expression',
    institution: 'Beaconhouse College Programme',
    year: '2026',
    description: 'In recognition of enriching academic vocabulary and empowering high-quality written expression.',
  },
  {
    title: 'Certificate of Recognition',
    institution: 'Beaconhouse College Programme, Abbottabad',
    year: '2023',
    description: 'In recognition of outstanding contributions to education and dedication to shaping young minds.',
  },
  {
    title: 'Certificate for Meeting Deadlines',
    institution: 'Beaconhouse School System',
    year: '2021',
    description: 'O Level class recognition for consistently meeting deadlines.',
  },
  {
    title: 'Certificate of Appreciation — Genius Prodigious (Welfare Movement)',
    institution: 'Genius Prodigious Welfare Movement',
    year: '',
    description: 'For addressing the educational crisis in Pakistan. (Awarded during undergraduate studies.)',
  },
  {
    title: 'Certificate of Participation — Model United Nations, IBA',
    institution: 'Marriott, Karachi',
    year: '2010',
    description: 'Awarded during undergraduate studies.',
  },
  {
    title: 'WWF Ambassador Certificate — Pakistan Eco Internship',
    institution: 'World Wide Fund for Nature (WWF) Pakistan',
    year: '2011',
    description: 'Awarded during undergraduate studies.',
  },
  {
    title: 'Certificate of Appreciation — Pakistan Model United Nations',
    institution: 'Pakistan Model United Nations',
    year: '',
    description: 'Awarded during undergraduate studies.',
  },
  {
    title: 'Certificate of Mentorship — Model United Nations',
    institution: 'Model United Nations, Karachi',
    year: '2014',
    description: 'Awarded during undergraduate studies.',
  },
  {
    title: 'Certificate of Participation — NOWPDP',
    institution: 'Network of Organizations Working for People with Disabilities (NOWPDP)',
    year: '2014',
    description: 'Awarded during undergraduate studies.',
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
