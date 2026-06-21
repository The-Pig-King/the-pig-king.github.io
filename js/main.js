export const originalDocumentTitle = document.title;

/* input-string to Input String */
export const titleCaseSlug = (str) => {
  const romans = new Set([
    'I',
    'Ii',
    'Iii',
    'Iv',
    'V',
    'Vi',
    'Vii',
    'Viii',
    'Ix',
    'X',
  ]);
  return str
    .split('-')
    .map((word) => {
      const titled = word.charAt(0).toUpperCase() + word.slice(1);
      return romans.has(titled) ? titled.toUpperCase() : titled;
    })
    .join(' ');
};

/* Set year in footer */
const year = document.getElementById('year');
const startYear = 2026;
const currentYear = new Date().getFullYear();

year.textContent =
  currentYear > startYear ? `${startYear}-${currentYear}` : startYear;
