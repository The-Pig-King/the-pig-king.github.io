/* Set year in footer */

const year = document.getElementById('year');
const startYear = 2026;
const currentYear = new Date().getFullYear();

year.textContent =
  currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;
