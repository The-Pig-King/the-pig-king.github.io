export const originalDocumentTitle = document.title;

// "input-string" to "Input String"
export const titleCaseSlug = (str) => {
  // Make roman numerals fully capitalized (II instead of Ii)
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

export const formatDate = (dateStr) =>
  dateStr
    ? new Date(dateStr.slice(0, 10)).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

// Set year in footer
const year = document.getElementById('year');
const startYear = 2026;
const currentYear = new Date().getFullYear();

year.textContent =
  currentYear > startYear ? `${startYear}-${currentYear}` : startYear;

fetch(
  'https://api.github.com/repos/The-Pig-King/the-pig-king.github.io/commits?per_page=1'
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('last-updated').textContent = formatDate(
      data[0].commit.committer.date
    );
  })
  .catch(() => {
    document.getElementById('last-updated').textContent = 'Unavailable';
  });

// Sister page dropdown
const GAMES = {
  'slime-rancher': 'Slime Rancher',
  'slime-rancher-2': 'Slime Rancher 2',
};

async function initGameSwitcher() {
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  const currentGame = segments[0];

  if (!GAMES[currentGame]) return;

  const sisterGame =
    currentGame === 'slime-rancher-2' ? 'slime-rancher' : 'slime-rancher-2';
  const restOfPath = segments.slice(1).join('/');
  const sisterPath = `/${sisterGame}/${restOfPath ? restOfPath + '/' : ''}`;

  const titleEl = document.getElementById('game-title');
  if (!titleEl) return;

  try {
    const res = await fetch(sisterPath, { method: 'HEAD' });
    if (!res.ok) return;

    const select = document.createElement('select');
    select.className = 'btn game-switcher-select';
    select.setAttribute('aria-label', 'Switch game');
    select.dataset.sisterPath = sisterPath;
    select.dataset.currentPath = path;

    [{ game: currentGame }, { game: sisterGame }].forEach(({ game }) => {
      const opt = document.createElement('option');
      opt.classList.add(`${game}-background`);
      opt.value = game;
      opt.textContent = GAMES[game];
      if (game === currentGame) {
        opt.selected = true;
        opt.hidden = true;
      }
      select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
      const mode = new URLSearchParams(window.location.search).get('mode');
      const preservedSearch = mode ? `?mode=${mode}` : '';

      const targetGame = e.target.value;
      const targetPath =
        targetGame === currentGame
          ? select.dataset.currentPath
          : select.dataset.sisterPath;

      window.location.href = `${targetPath}${preservedSearch}`;
    });

    titleEl.replaceWith(select);
  } catch {
    // fetch failed
  }
}

initGameSwitcher();
