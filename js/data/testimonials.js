// =====================================================================
// TESTIMONIALS DATA
// ---------------------------------------------------------------------
// Powers the "What My Students Say" page. Filtering (All / O Level /
// A Level / Parent) happens entirely on the frontend based on the
// `category` field, so just tag each entry correctly.
//
// To add a testimonial, add one object to the array below.
// Do NOT invent testimonials. If a real testimonial has not been
// supplied yet, leave the clearly-marked placeholder in place.
//
// `category` must be one of: 'O Level', 'A Level', 'Parent'
// =====================================================================

const testimonials = [
  {
    quote: '[STUDENT TESTIMONIAL]',
    name: '[STUDENT NAME]',
    level: 'A Level Sociology',
    category: 'A Level',
    year: '[YEAR]',
  },
  {
    quote: '[STUDENT TESTIMONIAL]',
    name: '[STUDENT NAME]',
    level: 'O Level Sociology',
    category: 'O Level',
    year: '[YEAR]',
  },
  {
    quote: '[PARENT TESTIMONIAL]',
    name: '[PARENT NAME]',
    level: 'Parent of A Level Student',
    category: 'Parent',
    year: '[YEAR]',
  },
]

export default testimonials
