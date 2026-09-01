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
  name: 'Naqiya Yousaf',

  // Short professional tagline used under the name in the navbar/footer
  tagline: 'Sociology | O Level & A Level',

  // Role line used in the hero section
  role: 'Sociology Teacher',
  levels: 'O Level & A Level',

  // Hero headline — easily editable, keep it as a single sentence
  heroHeadline: 'Helping Students Understand Society — and Excel in Sociology.',

  // Hero supporting paragraph
  heroSubtext:
    'Dedicated Cambridge O Level, IGCSE and A Level Sociology teaching, combining strong subject knowledge, structured exam technique, and genuine mentorship — for students in Pakistan and around the world.',

  // Hero call-to-action buttons
  heroButtons: {
    primary: { label: 'View My Credentials', href: 'credentials.html' },
    secondary: { label: 'Download My CV', href: 'cv.html' },
  },

  // Photo carousel used in the hero (Home page) and on the About page.
  // Add, remove, or reorder photos freely — both pages render whatever
  // is in this array. At Naqiya's request, faces (including her own)
  // have been blurred in every photo for privacy.
  photoGallery: [
    {
      src: 'images/photo-1-class-lecture.jpg',
      alt: 'Naqiya Yousaf teaching an A Level Sociology class (faces blurred for privacy)',
    },
    {
      src: 'images/photo-2-award-ceremony.jpg',
      alt: 'Naqiya Yousaf receiving recognition for Distinction in Sociology, Beaconhouse School System — Main Campus, Abbottabad (faces blurred for privacy)',
    },
    {
      src: 'images/photo-3-speech-competition.jpg',
      alt: 'Naqiya Yousaf judging a school speech competition (faces blurred for privacy)',
    },
    {
      src: 'images/photo-4-training-session.jpg',
      alt: 'Naqiya Yousaf at a Beaconhouse teacher training session (faces blurred for privacy)',
    },
    {
      src: 'images/photo-5-class-presentation.jpg',
      alt: 'Students presenting during a class discussion (faces blurred for privacy)',
    },
    {
      src: 'images/photo-6-result-celebration.jpg',
      alt: 'Celebrating a marvellous Sociology result, 2024 (faces blurred for privacy)',
    },
    {
      src: 'images/photo-7-receiving-certificate.jpg',
      alt: 'A student receiving a certificate at Beaconhouse School System — Main Campus, Abbottabad (faces blurred for privacy)',
    },
  ],

  // Four short credibility items shown below the hero
  credibilityItems: [
    { label: 'O Level & IGCSE Sociology' },
    { label: 'A Level Sociology' },
    { label: 'Exam Technique & Preparation' },
    { label: 'Student Mentoring' },
  ],

  // "Academic & Professional Profile" summary cards on the Home page.
  // Use placeholders until real figures are confirmed — do not invent numbers.
  profileStats: [
    { value: '15+', label: 'Years of Teaching Experience' },
    { value: 'BA', label: 'Academic Qualification' },
    { value: '[NUMBER]', label: 'Students Taught' },
    { value: '[RESULT]', label: 'Student Achievement' },
  ],

  // Teaching philosophy quote featured on the Home page.
  // Left as a placeholder deliberately — a personal philosophy quote
  // in the teacher's own words was not part of the supplied material,
  // and this site does not put invented words in her voice.
  philosophyQuote: '[TEACHING PHILOSOPHY QUOTE — a short quote in the teacher’s own words about her approach to education.]',
  philosophyAttribution: 'Naqiya Yousaf',

  // ---------------------------------------------------------------
  // ABOUT PAGE CONTENT
  // ---------------------------------------------------------------
  about: {
    introduction:
      'Naqiya Yousaf is a Sociology teacher with over a decade of classroom and online teaching experience across Cambridge O Level, IGCSE, and A Level syllabi. Since 2011 she has taught in institutes and school systems in Karachi and Abbottabad, Pakistan, and has tutored international students online from Saudi Arabia, Dubai, Malaysia, and the UK — combining strong subject knowledge with structured, exam-focused guidance.',
    academicBackground:
      'Naqiya holds a Bachelor of Arts (BA) from the University of Karachi, Faculty of Social Sciences, completed with First Division in 2021. She also completed coursework toward a Bachelor in Social Sciences at SZABIST, Karachi (2014), and her O Level and A Level education at Beaconhouse School System, Karachi (2008–2011).',
    teachingExperience:
      'Naqiya began teaching in 2011 as an O Level Economics and Pakistan Studies teacher at Level Up Academy, Karachi. From 2012 to 2015, she taught A Level Sociology at Anees Hussain Institute, Karachi. Since 2015 she has tutored international students online through virtual academies, and since 2020 she has taught O Level/IGCSE and A Level Sociology at the Beaconhouse College Programme, Main Campus, Abbottabad.',
    subjectsAndLevels:
      'Naqiya specialises in Cambridge O Level, IGCSE, and A Level Sociology, with earlier experience teaching O Level Economics and Pakistan Studies. Her teaching covers sociological theory and perspectives (including Marxism, Feminism, and Functionalism), applied research methods, and CIE examination technique.',
    teachingPhilosophy:
      '[TEACHING PHILOSOPHY — a short statement, in the teacher’s own words, on how she approaches teaching and student learning.]',
    areasOfExpertise: [
      'Cambridge O Level, IGCSE & A Level Sociology',
      'Sociological Theory & Perspectives (Marxism, Feminism, Functionalism)',
      'CIE Examination Technique & Command Words',
      'Assessment for Learning (AfL) & Exam-Focused Feedback',
      'Online Tutoring for International Students',
      'Student Mentorship & Pastoral Support',
    ],

    // "At a Glance" quick-facts panel
    atAGlance: [
      { label: 'Years of Experience', value: '15+ (since 2011)' },
      { label: 'Qualifications', value: 'BA, University of Karachi (First Division)' },
      { label: 'Levels Taught', value: 'O Level, IGCSE & A Level' },
      { label: 'Subjects', value: 'Sociology' },
      { label: 'Teaching Mode', value: 'Online & In-Person' },
      { label: 'Location', value: '[LOCATION]' },
    ],
  },

  // ---------------------------------------------------------------
  // TEACHING APPROACH PAGE CONTENT
  // ---------------------------------------------------------------
  // The descriptions below are grounded in a real lesson observation
  // (a Sociology lesson on the "Hidden Curriculum") and in feedback
  // received from students — not invented.
  teachingApproach: [
    {
      number: '01',
      title: 'Conceptual Understanding',
      description:
        'Lessons are built around active, student-centred tasks — for example, dividing a class into groups to research and present a topic from different sociological perspectives (Marxism, Feminism, Functionalism), with key vocabulary scaffolded for each.',
    },
    {
      number: '02',
      title: 'Critical Thinking',
      description:
        'Students are encouraged to compare and evaluate competing sociological perspectives on the same issue, presenting their reasoning to the class and defending it in discussion rather than simply memorising definitions.',
    },
    {
      number: '03',
      title: 'Examination Technique',
      description:
        'Explicit teaching of CIE question structures — such as the IGCSE Sociology 6-marker — covering command words, what each question type requires, and how to structure a full-marks response, linked directly to past-paper practice.',
    },
    {
      number: '04',
      title: 'Real-World Sociology',
      description:
        'Topics such as the hidden curriculum are taught by connecting sociological theory to students’ own lived experience of school and society, making abstract concepts concrete and memorable.',
    },
    {
      number: '05',
      title: 'Individual Guidance',
      description:
        'Students describe one-to-one support that adapts to where they are individually — including help that took a student from failing an early Sociology assessment to achieving an A grade.',
    },
    {
      number: '06',
      title: 'Continuous Improvement',
      description:
        'Regular written assessment for learning (AfL) is used to link content directly to exam technique, and reflective teaching practice is maintained through ongoing professional development, including a Developing Reflective Practitioners (DRP) course for experienced teachers.',
    },
  ],
}

export default teacher
