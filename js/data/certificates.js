// =====================================================================
// CERTIFICATE GALLERY DATA
// ---------------------------------------------------------------------
// To add a new certificate:
//   1. Place the certificate file (PDF, JPG, or PNG) inside /certificates/
//   2. Add one object below pointing to that file.
//
// `preview` is optional — if omitted, a generic certificate icon card
// is shown instead of an image thumbnail. Use a JPG/PNG preview image
// for the best-looking gallery card (a PDF cannot be thumbnailed
// automatically in a static site).
//
// Note: a few documents from the supplied material are deliberately
// NOT included here — official exam result slips, the university
// transcript, and the university degree certificate (which shows a
// legal name and parentage details rather than the professional name
// used on this site). These contain personal identifying information
// that doesn't belong on a public website.
// =====================================================================

const certificates = [
  {
    title: 'Certificate of Honour — "The Devoted Educator"',
    institution: 'Beaconhouse College Programme',
    year: '2025',
    file: 'certificates/certificate-of-honour-devoted-educator-2025.jpg',
    preview: 'certificates/certificate-of-honour-devoted-educator-2025.jpg',
  },
  {
    title: 'Certificate of Honour — Exceptional Dedication & Commitment',
    institution: 'Beaconhouse College Programme, Abbottabad',
    year: '2024',
    file: 'certificates/certificate-of-honour-exceptional-dedication-2024.jpg',
    preview: 'certificates/certificate-of-honour-exceptional-dedication-2024.jpg',
  },
  {
    title: 'Cambridge High Achievers Award in Sociology — Top in North Pakistan',
    institution: 'Beaconhouse School System, Abbottabad Campus',
    year: '2023',
    file: 'certificates/certificate-cambridge-high-achievers-sociology-2023.jpg',
    preview: 'certificates/certificate-cambridge-high-achievers-sociology-2023.jpg',
  },
  {
    title: 'Outstanding Performance Recognition — O Level Sociology',
    institution: 'Beaconhouse School System',
    year: '2024',
    file: 'certificates/certificate-outstanding-performance-sociology-2024.jpg',
    preview: 'certificates/certificate-outstanding-performance-sociology-2024.jpg',
  },
  {
    title: 'Certificate of Appreciation',
    institution: 'Beaconhouse School System',
    year: '2024',
    file: 'certificates/certificate-of-appreciation-2024.jpg',
    preview: 'certificates/certificate-of-appreciation-2024.jpg',
  },
  {
    title: 'Certificate of Recognition — Empowering High-Quality Written Expression',
    institution: 'Beaconhouse College Programme',
    year: '2026',
    file: 'certificates/certificate-of-recognition-written-expression-2026.jpg',
    preview: 'certificates/certificate-of-recognition-written-expression-2026.jpg',
  },
  {
    title: 'Certificate of Recognition',
    institution: 'Beaconhouse College Programme, Abbottabad',
    year: '2023',
    file: 'certificates/certificate-of-recognition-2023.jpg',
    preview: 'certificates/certificate-of-recognition-2023.jpg',
  },
  {
    title: 'Certificate for Meeting Deadlines',
    institution: 'Beaconhouse School System',
    year: '2021',
    file: 'certificates/certificate-meeting-deadlines-2021.jpg',
    preview: 'certificates/certificate-meeting-deadlines-2021.jpg',
  },
  {
    title: 'Developing Reflective Practitioners (DRP)',
    institution: 'Beaconhouse School System',
    year: '2023',
    file: 'certificates/certificate-drp-2023.jpg',
    preview: 'certificates/certificate-drp-2023.jpg',
  },
  {
    title: 'Code of Conduct',
    institution: 'Beaconhouse School System',
    year: '2021',
    file: 'certificates/certificate-code-of-conduct-2021.pdf',
    preview: null,
  },
  {
    title: 'Conflict of Interest',
    institution: 'Beaconhouse School System',
    year: '2021',
    file: 'certificates/certificate-conflict-of-interest-2021.pdf',
    preview: null,
  },
  {
    title: 'Tackle Workplace Harassment',
    institution: 'Beaconhouse School System',
    year: '2021',
    file: 'certificates/certificate-tackle-workplace-harassment-2021.pdf',
    preview: null,
  },
  {
    title: 'Productivity & Time Management for the Overwhelmed',
    institution: 'Beaconhouse School System',
    year: '2022',
    file: 'certificates/certificate-productivity-time-management-2022.pdf',
    preview: null,
  },
  {
    title: 'Core Competency: Service Focus',
    institution: 'Beaconhouse School System',
    year: '',
    file: 'certificates/certificate-core-competency-service-focus.pdf',
    preview: null,
  },
  {
    title: 'Core Competency: Adaptability',
    institution: 'Beaconhouse Group',
    year: '2026',
    file: 'certificates/certificate-core-competency-adaptability-2026.pdf',
    preview: null,
  },
  {
    title: 'Core Competency: Continuous Learning',
    institution: 'Beaconhouse Group',
    year: '2025',
    file: 'certificates/certificate-core-competency-continuous-learning-2025.pdf',
    preview: null,
  },
  {
    title: 'Mental Wellbeing: Life Matters',
    institution: 'Beaconhouse Group',
    year: '2026',
    file: 'certificates/certificate-mental-wellbeing-life-matters-2026.pdf',
    preview: null,
  },
  {
    title: 'Student Protection Programme (Online)',
    institution: 'Beaconhouse School System',
    year: '',
    file: 'certificates/certificate-student-protection-programme.pdf',
    preview: null,
  },
]

export default certificates
