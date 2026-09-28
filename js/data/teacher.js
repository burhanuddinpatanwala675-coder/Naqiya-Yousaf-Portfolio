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

  // The name/branding she wants displayed on the site (used for the nav
  // logo and footer brand line). Her plain name is still used everywhere
  // else (page titles, "About Naqiya Yousaf", etc.) since that reads
  // more naturally in a sentence.
  brandName: 'Sociology Unlocked by Naqiya Yousaf',

  // Short professional tagline used under the name in the navbar/footer
  tagline: 'Sociology Educator | O Level, IGCSE, A Level & AQA',

  // Role line used in the hero section
  role: 'Sociology Educator',
  levels: 'O Level, IGCSE, A Level & AQA',

  // Hero headline — easily editable, keep it as a single sentence
  heroHeadline: 'Helping Students Understand Society — and Excel in Sociology.',

  // Hero supporting paragraph
  heroSubtext:
    'I am Naqiya Yousaf, an experienced Sociology educator with 15 years of teaching experience, specializing in O/A Level Sociology. I have taught students from diverse backgrounds, both locally and internationally through online education. My expertise lies in developing strong conceptual understanding, critical thinking, analytical skills, and effective examination techniques. I am passionate about making Sociology engaging, relevant, and accessible while helping students achieve their academic potential.',

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
      alt: 'Naqiya Yousaf teaching an A Level Sociology class',
    },
    {
      src: 'images/photo-2-award-ceremony.jpg',
      alt: 'Naqiya Yousaf receiving recognition for Distinction in Sociology, Beaconhouse School System — Main Campus, Abbottabad (other faces blurred for privacy)',
    },
    {
      src: 'images/photo-3-speech-competition.jpg',
      alt: 'Naqiya Yousaf judging a school speech competition (other faces blurred for privacy)',
    },
    {
      src: 'images/photo-4-training-session.jpg',
      alt: 'Naqiya Yousaf at a Beaconhouse teacher training session (other faces blurred for privacy)',
    },
    {
      src: 'images/photo-5-class-presentation.jpg',
      alt: 'Students presenting during a class discussion (faces blurred for privacy)',
    },
    {
      src: 'images/photo-6-result-celebration.jpg',
      alt: 'Naqiya Yousaf celebrating a marvellous Sociology result, 2024 (other faces blurred for privacy)',
    },
    {
      src: 'images/photo-7-receiving-certificate.jpg',
      alt: 'Naqiya Yousaf receiving a certificate at Beaconhouse School System — Main Campus, Abbottabad (other faces blurred for privacy)',
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

  // Teaching philosophy quote featured on the Home page, in Naqiya's own words.
  philosophyQuote: 'The influence of a diligent teacher yields benefits far beyond the spectrum of a classroom.',
  philosophyAttribution: 'Naqiya Yousaf',

  // ---------------------------------------------------------------
  // ABOUT PAGE CONTENT
  // ---------------------------------------------------------------
  about: {
    introduction:
      'With 15 years of teaching experience, Naqiya specializes in O/A Level Sociology, helping students develop a strong understanding of sociological concepts while building the analytical, critical-thinking, and essay-writing skills essential for academic success. She has had the privilege of teaching students from diverse educational and cultural backgrounds, both locally and internationally through online teaching.',
    academicBackground:
      'Naqiya holds a Bachelor of Arts (BA) from the University of Karachi, Faculty of Social Sciences, completed with First Division in 2021. She also completed coursework toward a Bachelor in Social Sciences at SZABIST, Karachi (2014), and her O Level and A Level education at Beaconhouse School System, Karachi (2008–2011).',
    teachingExperience:
      'Naqiya began teaching in 2011 as an O Level Economics and Pakistan Studies teacher at Level Up Academy, Karachi. From 2012 to 2015, she taught A Level Sociology at Anees Hussain Institute, Karachi. Since 2015 she has tutored international students online through virtual academies, and since 2020 she has taught O Level/IGCSE and A Level Sociology at the Beaconhouse College Programme, Main Campus, Abbottabad.',
    subjectsAndLevels:
      'Naqiya specialises in O Level, IGCSE, and A Level Sociology across the Cambridge (CIE) and AQA examination boards, with earlier experience teaching O Level Economics and Pakistan Studies. Her teaching covers sociological theory and perspectives (including Marxism, Feminism, and Functionalism), applied research methods, and board-specific examination technique.',
    teachingPhilosophy:
      '"The true understanding of a subject is held within the realms of its application — the more you apply what you learn, the deeper insight you gain." My teaching philosophy is rooted in the belief that every student has the potential to learn, grow, and succeed when provided with the right guidance, encouragement, and learning environment. I see teaching as more than simply delivering content; it is about inspiring curiosity, encouraging independent thought, and helping students develop the confidence to express and defend their ideas. Sociology, in particular, offers students an opportunity to question assumptions, understand society from different perspectives, and engage thoughtfully with contemporary social issues. I therefore adopt a student-centered, interactive, and concept-driven approach, adapting my teaching to the individual needs and learning styles of my students. I use clear explanations, real-life examples, contemporary issues, discussion, questioning, case studies, and examination-focused practice to make Sociology both meaningful and accessible. Rather than relying solely on memorization, I encourage students to analyze, evaluate, make connections between theories and real-world situations, and develop well-supported sociological arguments. Through personalized guidance and constructive feedback, I aim to help each student recognize their strengths, overcome challenges, and become a confident and independent learner. For me, the most rewarding aspect of teaching is seeing students develop not only academically but also in their confidence, curiosity, and ability to think critically — my goal is to create a learning experience that prepares students not only for their O/A Level examinations, but also to engage thoughtfully with the world around them.',
    areasOfExpertise: [
      'O Level, IGCSE & A Level Sociology (CIE and AQA)',
      'Sociological Theory & Perspectives (Marxism, Feminism, Functionalism)',
      'Examination Technique & Command Words',
      'Assessment for Learning (AfL) & Exam-Focused Feedback',
      'Online Tutoring for International Students',
      'Student Mentorship & Pastoral Support',
    ],

    // "At a Glance" quick-facts panel
    atAGlance: [
      { label: 'Years of Experience', value: '15+ (since 2011)' },
      { label: 'Qualifications', value: 'BA, University of Karachi (First Division)' },
      { label: 'Levels Taught', value: 'O Level, IGCSE, A Level & AQA' },
      { label: 'Subjects', value: 'Sociology' },
      { label: 'Teaching Mode', value: 'Online & In-Person' },
      { label: 'Location', value: 'Abbottabad, Pakistan' },
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

  // ---------------------------------------------------------------
  // FREQUENTLY ASKED QUESTIONS (Teaching Approach page)
  // In Naqiya's own words.
  // ---------------------------------------------------------------
  faqs: [
    {
      question: 'How would you describe your teaching style?',
      answer:
        'My teaching style is student-centered, interactive, and supportive, with a focus on understanding rather than memorization.',
    },
    {
      question: 'What do you do to help students understand difficult Sociology concepts?',
      answer:
        'I simplify complex ideas and use real-life examples, contemporary issues, and relatable situations to make concepts easier to understand.',
    },
    {
      question: 'Do you focus on exam technique and past papers?',
      answer:
        'Yes. I regularly use past papers and exam practice to develop students’ understanding of question requirements, timing, and effective answers.',
    },
    {
      question: 'How do you help students improve essay writing?',
      answer:
        'I teach students how to structure arguments, use evidence, analyze, and evaluate, followed by regular practice and constructive feedback.',
    },
    {
      question: 'How do you encourage critical thinking?',
      answer:
        'I encourage students to question assumptions, compare perspectives, and evaluate theories and evidence rather than simply memorize information.',
    },
    {
      question: 'How do you use real-world/current examples in Sociology?',
      answer:
        'I connect sociological concepts with current events, social trends, media, and everyday experiences to make learning relevant and engaging.',
    },
    {
      question: 'How do you identify and improve a student’s weaknesses?',
      answer:
        'Through classwork, discussions, written responses, and past papers, I identify specific areas for improvement and provide targeted guidance and practice.',
    },
    {
      question: 'How do you support students who are struggling?',
      answer:
        'I break difficult topics into smaller steps, provide additional explanation and practice, and focus on building both understanding and confidence.',
    },
    {
      question: 'What do you believe makes your teaching different?',
      answer:
        'With 15 years of experience, I combine subject expertise with a personalized approach, adapting my teaching to each student’s needs and learning style.',
    },
    {
      question: 'What is the most important thing you want your students to gain from your classes?',
      answer:
        'I want students to develop confidence, independent thinking, strong analytical skills, and a genuine understanding of Sociology.',
    },
  ],
}

export default teacher
