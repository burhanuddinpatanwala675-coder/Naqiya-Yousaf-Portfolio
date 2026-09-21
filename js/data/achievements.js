// =====================================================================
// STUDENT DISTINCTIONS / ACHIEVEMENTS DATA
// ---------------------------------------------------------------------
// Powers the "Student Distinctions & Achievements" page.
//
// PRIVACY — `displayAs` controls how the student's name is shown:
//   'full'      -> shows `name` in full, e.g. "Aisha Khan"
//   'firstLast' -> shows first name + last initial, e.g. "Aisha K."
//   'anonymous' -> shows "Student A", "Student B", ... based on order
//
// Only add a real student's result here once you have permission to
// publish it. Do not invent names or results.
//
// `category` should be 'O Level' or 'A Level' to support any future
// filtering and to keep entries organised.
// =====================================================================

// Top-of-page statistics. Leave a value as null to hide that stat card
// entirely instead of showing a fabricated number.
export const achievementStats = [
  { value: null, label: 'Students Achieving Distinctions' },
  { value: null, label: 'A* Results' },
  { value: null, label: 'Years of Teaching' },
  { value: null, label: 'Students Taught' },
]

const achievements = [
  {
    name: 'Haider Rehman',
    displayAs: 'full',
    result: 'A* — Highest Mark in North Pakistan',
    level: 'IGCSE Sociology',
    category: 'O Level',
    examSession: 'June',
    year: '2023',
    description:
      'Awarded a Cambridge Outstanding Learner Award for gaining the highest mark in North Pakistan for Cambridge IGCSE Sociology, Beaconhouse School System, Abbottabad Campus.',
    certificateImage: 'images/achievements/haider-rehman-outstanding-learner-award-2023.jpg',
  },
]

// To add another real result: copy the object above, fill in the real
// name/result/level/etc., and set `certificateImage` to a certificate
// file in /images/achievements/ (or omit the field if you don't have
// one to show). Do not invent placeholder entries — an empty slot with
// [STUDENT NAME] / [RESULT] should never be left in this array; the
// page simply shows however many real results are listed here.

// Formats a student's name according to their chosen privacy setting.
// `index` is the position of the achievement in the full list, used to
// generate stable "Student A", "Student B" labels for anonymous entries.
export function formatStudentName(achievement, index) {
  const { name, displayAs } = achievement

  if (displayAs === 'anonymous') {
    const letter = String.fromCharCode(65 + (index % 26))
    return `Student ${letter}`
  }

  if (displayAs === 'firstLast') {
    const trimmed = name.trim()
    // If `name` is still an unfilled [PLACEHOLDER], show it verbatim rather
    // than computing a nonsensical initial from the bracket text.
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) return trimmed
    const parts = trimmed.split(/\s+/)
    if (parts.length === 1) return parts[0]
    const first = parts[0]
    const lastInitial = parts[parts.length - 1].charAt(0)
    return `${first} ${lastInitial}.`
  }

  // 'full' or anything else falls back to the full name
  return name
}

export default achievements
