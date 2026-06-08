/* Set year in footer */

const year = document.getElementById('year');
const startYear = 2026;
const currentYear = new Date().getFullYear();

year.textContent =
  currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;

const slimes = [
  {
    name: 'Pink Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePink.png',
  },
];

const cards = document.getElementById('cards');
