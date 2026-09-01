// =====================================================================
// TESTIMONIALS DATA
// ---------------------------------------------------------------------
// Powers the "What My Students Say" page. Filtering happens entirely
// on the frontend based on the `category` field, so just tag each
// entry correctly.
//
// To add a testimonial, add one object to the array below.
// Do NOT invent testimonials. If a real testimonial has not been
// supplied yet, leave the clearly-marked placeholder in place.
//
// `category` must be one of: 'O Level', 'A Level', 'Student', 'Official', 'Parent'
//
// Note on names: student testimonials below are shown by first name
// only, as a privacy-conscious default (several were sent informally
// via WhatsApp/Instagram, and current ages/consent-to-publish-in-full
// were not confirmed). Update to full names if you have permission to
// publish them that way.
// =====================================================================

const testimonials = [
  {
    quote:
      'I just wanted to take a moment to thank you for the incredible support that you’ve provided over the past two years. Preparing for the CIE exams can be overwhelming, but your guidance made the journey smooth and enjoyable. Your dedication to teaching and your unwavering support has been a great help, and I couldn’t be thankful enough. It was an honour to be taught by you.',
    name: 'Seth Daniyal',
    level: 'A Level Sociology',
    category: 'A Level',
    year: '2024',
  },
  {
    quote:
      'You were one of the best teachers I’ve ever had, both academically and personality-wise. I’ll make sure to keep in touch, and thank you so much again for everything you’ve done for me — I’ll always appreciate it.',
    name: 'Sara Zeb',
    level: 'A Level Sociology (A2)',
    category: 'A Level',
    year: '',
  },
  {
    quote:
      'You are the one that made Sociology fun for me — and not just Sociology, you helped me out with everything. Your dedication and passion helped me a lot; the journey from failing my first Sociology assessment to getting an A is all about your efforts.',
    name: 'Mehetabel',
    level: 'Sociology Student',
    category: 'Student',
    year: '',
  },
  {
    quote:
      'You are genuinely the best teacher our school has ever had, in every aspect — I hope every student gets the experience of being taught by you.',
    name: 'Salwah',
    level: 'Sociology Student',
    category: 'Student',
    year: '',
  },
  {
    quote: 'It was truly an honour to be under the mentorship of such a distinguished teacher. For Sociology, the entire credit goes to you.',
    name: 'Umair',
    level: 'Sociology Student',
    category: 'Student',
    year: '',
  },
  {
    quote:
      'Naqiya demonstrated excellent subject knowledge, pacing, and exam-focused teaching. She scaffolded each perspective and focused on key vocabulary, ensuring clarity of sociological concepts, and explicitly explained the structure of an IGCSE Sociology 6-marker question. This strong AfL strategy linked content to exam technique.',
    name: 'Lesson Observation',
    level: 'Beaconhouse College Programme',
    category: 'Official',
    year: '',
  },
  {
    quote:
      'It was a student-centred class, well explained by the teacher, and students were able to answer the questions — questions were linked with past papers.',
    name: 'Lesson Observation',
    level: 'Beaconhouse College Programme',
    category: 'Official',
    year: '',
  },
]

export default testimonials
