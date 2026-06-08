const cards = {
  slimes: [
    {
      name: 'Pink Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePink.png',
      plort: '/assets/games/slime-rancher/plorts/iconPlortPink.png',
    },
    {
      name: 'Rock Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRock.png',
    },
    {
      name: 'Tabby Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTabby.png',
    },
    {
      name: 'Boom Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeBoom.png',
    },
    {
      name: 'Crystal Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeCrystal.png',
    },
    {
      name: 'Dervish Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeDervish.png',
    },
    {
      name: 'Fire Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeFire.png',
    },
    {
      name: 'Glitch Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGlitch.png',
    },
    {
      name: 'Gold Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGold.png',
    },
    {
      name: 'Honey Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHoney.png',
    },
    {
      name: 'Hunter Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHunter.png',
    },
    {
      name: 'Lucky Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeLucky.png',
    },
    {
      name: 'Mosaic Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeMosaic.png',
    },
    {
      name: 'Party Gordo',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePartyGordo.png',
    },
    {
      name: 'Phosphor Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePhosphor.png',
    },
    {
      name: 'Pink Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePink.png',
    },
    {
      name: 'Puddle Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePuddle.png',
    },
    {
      name: 'Quantum Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuantum.png',
    },
    {
      name: 'Quicksilver Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuicksilver.png',
    },
    {
      name: 'Rad Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRad.png',
    },
    {
      name: 'Rock Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRock.png',
    },
    {
      name: 'Saber Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeSaberSketch.png',
    },
    {
      name: 'Tabby Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTabby.png',
    },
    {
      name: 'Tangle Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTangle.png',
    },
    {
      name: 'Tarr Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTarr.png',
    },
    {
      name: 'Twinkle Slime',
      icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTwinkle.png',
    },
  ],
};

const cardContainer = document.getElementById('card-container');

const filterCards = (category) => {
  const items = cards[category] ?? [];

  return items
    .map(({ name, icon, plort }) => {
      return `
      <div class="card">
        <img src="${icon}" alt="${name}" class="card-img-main" />
        <h2 class="card-name">${name}</h2>
        <h3 class="card-first-label">Plort:</h3>
        <img src="${plort}" alt="${name} ${plort}" class="card-first-img" />
      </div>
    `;
    })
    .join('');
};

const categoryBtns = document.querySelectorAll('.category-btn');

document.getElementById('slimes-btn').classList.add('active');

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    cardContainer.innerHTML = filterCards(btn.dataset.category);
  });
});

cardContainer.innerHTML = filterCards('slimes');
