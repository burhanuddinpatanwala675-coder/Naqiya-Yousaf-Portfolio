// =====================================================================
// TEACHER PROFILE DATA
// ---------------------------------------------------------------------
// This is the single source of truth for the teacher's identity,
// hero content, credibility highlights, "at a glance" facts, teaching
// philosophy quote, and About page copy.
//
// HOW TO UPDATE:
// - Replace every value written in [SQUARE BRACKETS] with real
//   information. Do not leave fabricated details in their place —
//   if you don't have the information yet, keep the placeholder text
//   so visitors never see invented facts.
// - Nothing in this file requires touching any HTML or the rendering
//   code in /js/components.js or /js/pages/*.js.
// =====================================================================

const teacher = {
  // Full name as it should appear across the site (nav, footer, headings)
  name: '[TEACHER NAME]',

  // Short professional tagline used under the name in the navbar/footer
  tagline: 'Sociology | O Level & A Level',

  // Role line used in the hero section
  role: 'Sociology Teacher',
  levels: 'O Level & A Level',

  // Hero headline — easily editable, keep it as a single sentence
  heroHeadline: 'Helping Students Understand Society — and Excel in Sociology.',

  // Hero supporting paragraph
  heroSubtext:
    'Dedicated Sociology education for O Level and A Level students, combining strong subject knowledge, structured guidance, critical thinking, and examination-focused preparation.',

  // Hero call-to-action buttons
  heroButtons: {
    primary: { label: 'View My Credentials', href: 'credentials.html' },
    secondary: { label: 'Download My CV', href: 'cv.html' },
  },

  // Professional portrait used in the hero and About page.
  // Replace the file at /images/teacher-portrait.jpg with the
  // real photograph, keeping the same filename, or update the path below.
  portrait: {
    src: 'images/teacher-portrait.jpg',
    alt: '[TEACHER NAME], Sociology Teacher',
  },

  // Secondary image used on the About page (classroom / teaching materials)
  secondaryImage: {
    src: 'images/teaching.jpg',
    alt: 'Sociology teaching and classroom materials',
  },

  // Four short credibility items shown below the hero
  credibilityItems: [
    { label: 'O Level Sociology' },
    { label: 'A Level Sociology' },
    { label: 'Exam Preparation' },
    { label: 'Student Mentoring' },
  ],

  // "Academic & Professional Profile" summary cards on the Home page.
  // Use placeholders until real figures are confirmed — do not invent numbers.
  profileStats: [
    { value: '[YEARS OF EXPERIENCE]', label: 'Years of Teaching Experience' },
    { value: '[QUALIFICATION]', label: 'Academic Qualification' },
    { value: '[NUMBER]', label: 'Students Taught' },
    { value: '[RESULT]', label: 'Student Achievement' },
  ],

  // Teaching philosophy quote featured on the Home page
  philosophyQuote:
    'Education is not simply about learning answers. It is about learning how to question, analyse, and understand the world around us.',
  philosophyAttribution: '[TEACHER NAME]',

  // ---------------------------------------------------------------
  // ABOUT PAGE CONTENT
  // ---------------------------------------------------------------
  about: {
    introduction: '[PROFESSIONAL INTRODUCTION — a short paragraph introducing the teacher, their passion for Sociology, and their approach to education.]',
    academicBackground: '[ACADEMIC BACKGROUND — degrees, institutions, and areas of specialisation.]',
    teachingExperience: '[TEACHING EXPERIENCE — an overview of schools, institutions, or years spent teaching Sociology.]',
    subjectsAndLevels: '[SUBJECTS & LEVELS — a description of the Sociology syllabi taught, e.g. Cambridge O Level and A Level Sociology.]',
    teachingPhilosophy: '[TEACHING PHILOSOPHY — a short statement on how the teacher approaches teaching and student learning.]',
    areasOfExpertise: [
      '[AREA OF EXPERTISE 1]',
      '[AREA OF EXPERTISE 2]',
      '[AREA OF EXPERTISE 3]',
      '[AREA OF EXPERTISE 4]',
    ],

    // "At a Glance" quick-facts panel
    atAGlance: [
      { label: 'Years of Experience', value: '[YEARS OF EXPERIENCE]' },
      { label: 'Qualifications', value: '[QUALIFICATION]' },
      { label: 'Levels Taught', value: '[O LEVEL / A LEVEL]' },
      { label: 'Subjects', value: 'Sociology' },
      { label: 'Teaching Mode', value: '[ONLINE / IN-PERSON / BOTH]' },
      { label: 'Location', value: '[LOCATION]' },
    ],
  },

  // ---------------------------------------------------------------
  // TEACHING APPROACH PAGE CONTENT
  // ---------------------------------------------------------------
  teachingApproach: [
    {
      number: '01',
      title: 'Conceptual Understanding',
      description:
        '[Editable description explaining how core sociological concepts and theories are taught for genuine understanding rather than memorisation.]',
    },
    {
      number: '02',
      title: 'Critical Thinking',
      description:
        '[Editable description explaining how students are encouraged to question, analyse, and evaluate sociological perspectives.]',
    },
    {
      number: '03',
      title: 'Examination Technique',
      description:
        '[Editable description explaining how students are prepared for O Level and A Level examination structures, command words, and mark schemes.]',
    },
    {
      number: '04',
      title: 'Real-World Sociology',
      description:
        '[Editable description explaining how sociological theory is connected to real-world issues and everyday society.]',
    },
    {
      number: '05',
      title: 'Individual Guidance',
      description:
        '[Editable description explaining how teaching is tailored to each student’s pace, strengths, and areas for improvement.]',
    },
    {
      number: '06',
      title: 'Continuous Improvement',
      description:
        '[Editable description explaining how regular feedback, assessment, and reflection are used to track and support progress.]',
    },
  ],
}

export default teacher
