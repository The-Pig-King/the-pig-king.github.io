const titleCaseSlug = (str) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const cards = [
  {
    name: 'Pink Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePink.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePinkExotic.png',
    tags: ['slime', 'docile'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-slimeulation',
    ],
  },
  {
    name: 'Rock Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRock.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeRockExotic.png',
    tags: ['slime', 'harmful'],
    locations: [
      'the-dry-reef',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-slimeulation',
    ],
  },
  {
    name: 'Tabby Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTabby.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeTabbyExotic.png',
    tags: ['slime', 'docile'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-slimeulation',
    ],
  },
  {
    name: 'Phosphor Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePhosphor.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePhosphorExotic.png',
    tags: ['slime', 'docile'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-slimeulation',
    ],
  },
  {
    name: 'Rad Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRad.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeRadExotic.png',
    tags: ['slime', 'harmful'],
    locations: ['the-indigo-quarry', 'the-slimeulation'],
  },
  {
    name: 'Boom Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeBoom.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeBoomExotic.png',
    tags: ['slime', 'harmful'],
    locations: [
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-glass-desert',
      'the-slimeulation',
    ],
  },
  {
    name: 'Honey Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHoney.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeHoneyExotic.png',
    tags: ['slime', 'docile'],
    locations: ['the-moss-blanket', 'the-slimeulation'],
  },
  {
    name: 'Puddle Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePuddle.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePuddleExotic.png',
    tags: ['slime', 'docile'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-slimeulation',
    ],
  },
  {
    name: 'Crystal Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeCrystal.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeCrystalExotic.png',
    tags: ['slime', 'harmful'],
    locations: ['the-indigo-quarry'],
  },
  {
    name: 'Hunter Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHunter.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeHunterExotic.png',
    tags: ['slime', 'docile'],
    locations: ['the-moss-blanket', 'the-glass-desert', 'the-slimeulation'],
  },
  {
    name: 'Quantum Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuantum.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeQuantumExotic.png',
    tags: ['slime', 'docile'],
    locations: ['the-ancient-ruins', 'the-glass-desert'],
  },
  {
    name: 'Fire Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeFire.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeFireExotic.png',
    tags: ['slime', 'harmful'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Dervish Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeDervish.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeDervishExotic.png',
    tags: ['slime', 'docile'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Tangle Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTangle.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeTangleExotic.png',
    tags: ['slime', 'docile'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Mosaic Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeMosaic.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeMosaicExotic.png',
    tags: ['slime', 'harmful'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Saber Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeSaberSketch.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeSaberExotic.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Quicksilver Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuicksilver.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeQuicksilverExotic.png',
    tags: ['slime', 'docile', 'harmful', 'special'],
    locations: ['nimble-valley'],
  },
  {
    name: 'Glitch Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGlitch.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeGlitchExotic.png',
    tags: ['slime', 'docile', 'special'],
    locations: ['the-slimeulation'],
  },
  {
    name: 'Gold Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGold.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeGoldExotic.png',
    tags: ['slime', 'docile', 'special'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-slimeulation',
    ],
  },
  {
    name: 'Lucky Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeLucky.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeLuckyExotic.png',
    tags: ['slime', 'docile', 'special'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-slimeulation',
    ],
  },
  {
    name: 'Largo Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconLargoPedia.png',
    tags: ['slime', 'docile', 'harmful'],
  },
  {
    name: 'Gordo Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconGordoPedia.png',
    tags: ['slime', 'docile', 'special'],
  },
  {
    name: 'Party Gordo',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePartyGordo.png',
    tags: ['slime', 'docile', 'special', 'event'],
  },
  {
    name: 'Twinkle Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTwinkle.png',
    tags: ['slime', 'special', 'event'],
  },
  {
    name: 'Feral Slimes',
    icon: '/assets/games/slime-rancher/slimes/regular/iconFeralPedia.png',
    tags: ['slime', 'hostile'],
  },
  {
    name: 'The Tarr',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTarr.png',
    tags: ['slime', 'hostile'],
    locations: ['the-slimeulation'],
  },
  {
    name: 'Carrot',
    icon: '/assets/games/slime-rancher/food//iconVeggieCarrot.png',
    tags: ['food', 'veggie'],
    locations: [
      'the-ranch',
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Oca Oca',
    icon: '/assets/games/slime-rancher/food//iconVeggieOcaOca.png',
    tags: ['food', 'veggie'],
    locations: ['the-indigo-quarry', 'the-slimeulation'],
  },
  {
    name: 'Heart Beet',
    icon: '/assets/games/slime-rancher/food//iconVeggieBeet.png',
    tags: ['food', 'veggie'],
    locations: [
      'the-dry-reef',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Silver Parsnip',
    icon: '/assets/games/slime-rancher/food//iconVeggieParsnip.png',
    tags: ['food', 'veggie'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Odd Onion',
    icon: '/assets/games/slime-rancher/food//iconVeggieOnion.png',
    tags: ['food', 'veggie'],
    locations: ['the-indigo-quarry', 'the-slimeulation'],
  },
  {
    name: 'Gilded Ginger',
    icon: '/assets/games/slime-rancher/food//iconVeggieGinger.png',
    tags: ['food', 'veggie'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Pogo Fruit',
    icon: '/assets/games/slime-rancher/food//iconFruitPogo.png',
    tags: ['food', 'fruit'],
    locations: [
      'the-ranch',
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Mint Mango',
    icon: '/assets/games/slime-rancher/food//iconFruitMango.png',
    tags: ['food', 'fruit'],
    locations: ['the-moss-blanket', 'the-slimeulation'],
  },
  {
    name: 'Cuberry',
    icon: '/assets/games/slime-rancher/food//iconFruitCuberry.png',
    tags: ['food', 'fruit'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Phase Lemon',
    icon: '/assets/games/slime-rancher/food//iconFruitLemon.png',
    tags: ['food', 'fruit'],
    locations: ['the-ranch', 'the-ancient-ruins'],
  },
  {
    name: 'Prickle Pear',
    icon: '/assets/games/slime-rancher/food//iconFruitPear.png',
    tags: ['food', 'fruit'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Kookadoba',
    icon: '/assets/games/slime-rancher/food//iconFruitKookadoba.png',
    tags: ['food', 'fruit'],
    locations: ['the-wilds'],
  },
  {
    name: 'Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChick.png',
    tags: ['food', 'future-meat'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Hen Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHen.png',
    tags: ['food', 'meat'],
    locations: [
      'the-ranch',
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Roostro',
    icon: '/assets/games/slime-rancher/food//iconBirdRooster.png',
    tags: ['food', 'meat'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Stony Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChickStony.png',
    tags: ['food', 'future-meat'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Stony Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHenStony.png',
    tags: ['food', 'meat'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Briar Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChickBriar.png',
    tags: ['food', 'future-meat'],
    locations: ['the-moss-blanket', 'the-slimeulation'],
  },
  {
    name: 'Briar Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHenBriar.png',
    tags: ['food', 'meat'],
    locations: ['the-moss-blanket', 'the-slimeulation'],
  },
  {
    name: 'Painted Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChickPainted.png',
    tags: ['food', 'future-meat'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Painted Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHenPainted.png',
    tags: ['food', 'meat'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Elder Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHenElder.png',
    tags: ['food', 'meat'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Elder Roostro',
    icon: '/assets/games/slime-rancher/food//iconBirdRoosterElder.png',
    tags: ['food', 'meat'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Spicy Tofu',
    icon: '/assets/games/slime-rancher/food//iconVeggieTofu.png',
    tags: ['food', 'other'],
    locations: ['the-ranch'],
  },
  {
    name: 'Water',
    icon: '/assets/games/slime-rancher/food//iconWater.png',
    tags: ['food', 'other'],
    locations: [
      'the-ranch',
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
      'the-wilds',
      'the-slimeulation',
    ],
  },
  {
    name: 'Ash',
    icon: '/assets/games/slime-rancher/food//iconPatchIncineratorAshTray.png',
    tags: ['food', 'other'],
  },
  {
    name: 'Spark Shot',
    icon: '/assets/games/slime-rancher/food//iconValleyAmmo1.png',
    tags: ['food', 'electricity'],
    locations: ['nimble-valley'],
  },
  {
    name: 'Thunderclap',
    icon: '/assets/games/slime-rancher/food//iconValleyAmmo2.png',
    tags: ['food', 'electricity'],
    locations: ['nimble-valley'],
  },
  {
    name: 'Static Clinger',
    icon: '/assets/games/slime-rancher/food//iconValleyAmmo4.png',
    tags: ['food', 'electricity'],
    locations: ['nimble-valley'],
  },
];

const tagGroups = {
  slime: 'type',
  food: 'type',

  special: 'subtype',
  event: 'subtype',

  docile: 'slime-type',
  harmful: 'slime-type',
  hostile: 'slime-type',

  veggie: 'food-type',
  fruit: 'food-type',
  meat: 'food-type',
  'future-meat': 'food-type',
  electricity: 'food-type',

  'the-ranch': 'location',
  'the-dry-reef': 'location',
  'the-moss-blanket': 'location',
  'the-indigo-quarry': 'location',
  'the-ancient-ruins': 'location',
  'the-glass-desert': 'location',
  'the-wilds': 'location',
  'nimble-valley': 'location',
  'the-slimeulation': 'location',
};

const groupTags = (tags = []) => {
  const grouped = new Map();
  for (const tag of tags) {
    const group = tagGroups[tag] ?? 'other';
    if (!grouped.has(group)) grouped.set(group, new Set());
    grouped.get(group).add(tag);
  }
  return grouped;
};

const filterBars = document.querySelectorAll('.filter-bar[data-group]');

const state = {};
filterBars.forEach(({ dataset: { group } }) => {
  state[group] = { filters: new Set(), mode: 'any' };
});

document.querySelectorAll('.mode-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.filter-bar').dataset.group;
    state[group].mode = btn.dataset.mode;

    btn
      .closest('.filter-bar')
      .querySelectorAll('.mode-btn')
      .forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    updateUI();
  });
});

document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.filter-bar').dataset.group;
    const value = btn.dataset.category;
    const { filters } = state[group];

    filters.has(value) ? filters.delete(value) : filters.add(value);
    btn.classList.toggle('active');

    updateUI();
  });
});

const styleBtns = document.querySelectorAll('.style-btn');

const secretStyleBtn = document.querySelector('.btn-secret-style');
const sr2StyleBtn = document.querySelector('.btn-sr2-style');

styleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    if (
      sr2StyleBtn.classList.contains('active') &&
      secretStyleBtn.classList.contains('active')
    ) {
      secretStyleBtn.textContent = 'Radiant';
    } else {
      secretStyleBtn.textContent = 'Secret Style';
    }

    updateUI();
  });
});

const updateUI = () => {
  renderCards(filterCards());
};

const matchGroup = (cardValues, filters, mode) => {
  if (filters.size === 0) return true;
  const active = [...filters];

  if (mode === 'any') return active.some((v) => cardValues?.includes(v));
  if (mode === 'all') return active.every((v) => cardValues?.includes(v));

  if (mode === 'exactly') {
    const selectedGroups = groupTags(active);
    const cardGroups = groupTags(cardValues);
    for (const [group, selectedSet] of selectedGroups) {
      const cardSet = cardGroups.get(group);
      if (!cardSet || cardSet.size !== selectedSet.size) return false;
      for (const v of selectedSet) if (!cardSet.has(v)) return false;
    }
    return true;
  }
};

const filterCards = () =>
  cards.filter((card) =>
    Object.entries(state).every(([group, { filters, mode }]) => {
      // location group uses card.locations; everything else uses card.tags
      const cardValues = group === 'location' ? card.locations : card.tags;
      return matchGroup(cardValues, filters, mode);
    })
  );

const cardContainer = document.getElementById('card-container');

const renderCards = (items) => {
  if (!items || items.length === 0) {
    cardContainer.innerHTML = '';
    return;
  }

  cardContainer.innerHTML = items
    .map((item) => {
      return `
      <div class="card">
        <img src="${
          secretStyleBtn.classList.contains('active') &&
          item['secret-style-icon']
            ? item['secret-style-icon']
            : item.icon
        }" alt="${item.name}" class="card-img-main" />
          <h2 class="card-name">${item.name}</h2>

          <div class="card-tags">
            ${(item.tags ?? [])
              .map(
                (tag) =>
                  `<span class="tag tag-${tag.toLowerCase()}">${titleCaseSlug(tag)}</span>`
              )
              .join('')}
          </div>

          <div class="card-location-tags">
            ${(item.locations ?? [])
              .map(
                (location) =>
                  `<span class="tag tag-${location.toLowerCase()}">${titleCaseSlug(location)}</span>`
              )
              .join('')}
          </div>
        </div>
      `;
    })
    .join('');
};

renderCards(filterCards());
