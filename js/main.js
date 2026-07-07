export const originalDocumentTitle = document.title;

// input-string to Input String
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
    const date = new Date(data[0].commit.committer.date);

    document.getElementById('last-updated').textContent =
      date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
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

    [
      { game: currentGame, href: path },
      { game: sisterGame, href: sisterPath },
    ].forEach(({ game, href }) => {
      const opt = document.createElement('option');
      opt.classList.add(`${game}-background`);
      opt.value = href;
      opt.textContent = GAMES[game];
      if (game === currentGame) {
        opt.selected = true;
        opt.hidden = true;
      }
      select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
      window.location.href = e.target.value;
    });

    titleEl.replaceWith(select);
  } catch {
    // fetch failed
  }
}

initGameSwitcher();
