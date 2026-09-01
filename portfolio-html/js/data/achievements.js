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
    name: '[STUDENT NAME]',
    displayAs: 'firstLast',
    result: '[RESULT]',
    level: 'A Level Sociology',
    category: 'A Level',
    examSession: '[EXAM SESSION, e.g. May/June]',
    year: '[YEAR]',
    description: '',
  },
  {
    name: '[STUDENT NAME]',
    displayAs: 'anonymous',
    result: '[RESULT]',
    level: 'O Level Sociology',
    category: 'O Level',
    examSession: '[EXAM SESSION, e.g. October/November]',
    year: '[YEAR]',
    description: '',
  },
]

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
