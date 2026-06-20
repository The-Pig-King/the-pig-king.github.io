export const originalDocumentTitle = document.title;

/* input-string to Input String */
export const titleCaseSlug = (str) => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/* Set year in footer */
const year = document.getElementById('year');
const startYear = 2026;
const currentYear = new Date().getFullYear();

year.textContent =
  currentYear > startYear ? `${startYear}-${currentYear}` : startYear;
