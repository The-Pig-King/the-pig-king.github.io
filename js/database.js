const titleCaseSlug = (str) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const cards = [
  {
    name: 'Pink Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePink.png',
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
    tags: ['slime', 'docile'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-ancient-ruins',
      'the-glass-desert',
    ],
  },
  {
    name: 'Phosphor Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePhosphor.png',
    tags: ['slime', 'docile'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
    ],
  },
  {
    name: 'Rad Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRad.png',
    tags: ['slime', 'harmful'],
    locations: ['the-indigo-quarry'],
  },
  {
    name: 'Boom Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeBoom.png',
    tags: ['slime', 'harmful'],
    locations: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
  },
  {
    name: 'Honey Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHoney.png',
    tags: ['slime', 'docile'],
    locations: ['the-moss-blanket'],
  },
  {
    name: 'Puddle Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePuddle.png',
    tags: ['slime', 'docile'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
    ],
  },
  {
    name: 'Crystal Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeCrystal.png',
    tags: ['slime', 'harmful'],
    locations: ['the-indigo-quarry'],
  },
  {
    name: 'Hunter Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHunter.png',
    tags: ['slime', 'docile'],
    locations: ['the-moss-blanket', 'the-glass-desert'],
  },
  {
    name: 'Quantum Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuantum.png',
    tags: ['slime', 'docile'],
    locations: ['the-ancient-ruins', 'the-glass-desert'],
  },
  {
    name: 'Fire Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeFire.png',
    tags: ['slime', 'harmful'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Dervish Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeDervish.png',
    tags: ['slime', 'docile'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Tangle Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTangle.png',
    tags: ['slime', 'docile'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Mosaic Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeMosaic.png',
    tags: ['slime', 'harmful'],
    locations: ['the-glass-desert'],
  },
  {
    name: 'Saber Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeSaberSketch.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Quicksilver Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuicksilver.png',
    tags: ['slime', 'docile', 'harmful', 'special'],
    locations: ['nimble-valley'],
  },
  {
    name: 'Glitch Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGlitch.png',
    tags: ['slime', 'docile', 'special'],
    locations: ['the-slimeulation'],
  },
  {
    name: 'Gold Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGold.png',
    tags: ['slime', 'docile', 'special'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
    ],
  },
  {
    name: 'Lucky Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeLucky.png',
    tags: ['slime', 'docile', 'special'],
    locations: [
      'the-dry-reef',
      'the-moss-blanket',
      'the-indigo-quarry',
      'the-ancient-ruins',
      'the-glass-desert',
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
    ],
  },
  {
    name: 'Oca Oca',
    icon: '/assets/games/slime-rancher/food//iconVeggieOcaOca.png',
    tags: ['food', 'veggie'],
    locations: ['the-indigo-quarry'],
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
    locations: ['the-indigo-quarry'],
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
    ],
  },
  {
    name: 'Mint Mango',
    icon: '/assets/games/slime-rancher/food//iconFruitMango.png',
    tags: ['food', 'fruit'],
    locations: ['the-moss-blanket'],
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
    ],
  },
  {
    name: 'Briar Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChickBriar.png',
    tags: ['food', 'future-meat'],
    locations: ['the-moss-blanket'],
  },
  {
    name: 'Briar Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHenBriar.png',
    tags: ['food', 'meat'],
    locations: ['the-moss-blanket'],
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

const cardContainer = document.getElementById('card-container');

const state = {
  category: 'all',
  filters: new Set(), // locations + future tags
};

const categoryBtns = document.querySelectorAll('.category-btn');
const tagBtns = document.querySelectorAll('.tag-btn');

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    state.category = btn.dataset.category;

    categoryBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    updateUI();
  });
});

tagBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.category;

    if (state.filters.has(value)) {
      state.filters.delete(value);
      btn.classList.remove('active');
    } else {
      state.filters.add(value);
      btn.classList.add('active');
    }

    updateUI();
  });
});

const updateUI = () => {
  renderCards(filterCards());
};

const filterCards = () => {
  return cards.filter((card) => {
    // category filter
    const categoryMatch =
      state.category === 'all' || card.tags.includes(state.category);

    if (!categoryMatch) return false;

    // other filters
    for (const f of state.filters) {
      const inTags = card.tags.includes(f);
      const inLocations = card.locations?.includes(f);

      if (!inTags && !inLocations) return false;
    }

    return true;
  });
};

const renderCards = (items) => {
  if (!items || items.length === 0) {
    cardContainer.innerHTML = '';
    return;
  }

  cardContainer.innerHTML = items
    .map(({ name, icon, tags, locations, ...rest }) => {
      return `
      <div class="card">
        <img src="${icon}" alt="${name}" class="card-img-main" />
        <h2 class="card-name">${name}</h2>
        <div class="card-tags">
          ${(tags ?? [])
            .map(
              (tag) =>
                `<span class="tag tag-${tag.toLowerCase()}">${titleCaseSlug(tag)}</span>`
            )
            .join('')}
        </div>
        <div class="card-location-tags">
          ${(locations ?? [])
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

document.getElementById('all-btn').classList.add('active');
renderCards(filterCards());
