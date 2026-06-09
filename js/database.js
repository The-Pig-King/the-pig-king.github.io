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
  },
  {
    name: 'Tabby Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTabby.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Phosphor Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePhosphor.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Rad Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRad.png',
    tags: ['slime', 'harmful'],
  },
  {
    name: 'Boom Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeBoom.png',
    tags: ['slime', 'harmful'],
  },
  {
    name: 'Honey Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHoney.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Puddle Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePuddle.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Crystal Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeCrystal.png',
    tags: ['slime', 'harmful'],
  },
  {
    name: 'Hunter Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHunter.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Quantum Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuantum.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Fire Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeFire.png',
    tags: ['slime', 'harmful'],
  },
  {
    name: 'Dervish Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeDervish.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Tangle Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTangle.png',
    tags: ['slime', 'docile'],
  },
  {
    name: 'Mosaic Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeMosaic.png',
    tags: ['slime', 'harmful'],
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
  },
  {
    name: 'Glitch Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGlitch.png',
    tags: ['slime', 'docile', 'special'],
  },
  {
    name: 'Gold Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGold.png',
    tags: ['slime', 'docile', 'special'],
  },
  {
    name: 'Lucky Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeLucky.png',
    tags: ['slime', 'docile', 'special'],
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
  },
  {
    name: 'Carrot',
    icon: '/assets/games/slime-rancher/food//iconVeggieCarrot.png',
    tags: ['food', 'veggie'],
  },
  {
    name: 'Oca Oca',
    icon: '/assets/games/slime-rancher/food//iconVeggieOcaOca.png',
    tags: ['food', 'veggie'],
  },
  {
    name: 'Heart Beet',
    icon: '/assets/games/slime-rancher/food//iconVeggieBeet.png',
    tags: ['food', 'veggie'],
  },
  {
    name: 'Silver Parsnip',
    icon: '/assets/games/slime-rancher/food//iconVeggieParsnip.png',
    tags: ['food', 'veggie'],
  },
  {
    name: 'Odd Onion',
    icon: '/assets/games/slime-rancher/food//iconVeggieOnion.png',
    tags: ['food', 'veggie'],
  },
  {
    name: 'Gilded Ginger',
    icon: '/assets/games/slime-rancher/food//iconVeggieGinger.png',
    tags: ['food', 'veggie'],
  },
  {
    name: 'Pogo Fruit',
    icon: '/assets/games/slime-rancher/food//iconFruitPogo.png',
    tags: ['food', 'fruit'],
  },
  {
    name: 'Mint Mango',
    icon: '/assets/games/slime-rancher/food//iconFruitMango.png',
    tags: ['food', 'fruit'],
  },
  {
    name: 'Cuberry',
    icon: '/assets/games/slime-rancher/food//iconFruitCuberry.png',
    tags: ['food', 'fruit'],
  },
  {
    name: 'Phase Lemon',
    icon: '/assets/games/slime-rancher/food//iconFruitLemon.png',
    tags: ['food', 'fruit'],
  },
  {
    name: 'Prickle Pear',
    icon: '/assets/games/slime-rancher/food//iconFruitPear.png',
    tags: ['food', 'fruit'],
  },
  {
    name: 'Kookadoba',
    icon: '/assets/games/slime-rancher/food//iconFruitKookadoba.png',
    tags: ['food', 'fruit'],
  },
  {
    name: 'Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChick.png',
    tags: ['food', 'future-meat'],
  },
  {
    name: 'Hen Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHen.png',
    tags: ['food', 'meat'],
  },
  {
    name: 'Roostro',
    icon: '/assets/games/slime-rancher/food//iconBirdRooster.png',
    tags: ['food', 'meat'],
  },
  {
    name: 'Stony Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChickStony.png',
    tags: ['food', 'future-meat'],
  },
  {
    name: 'Stony Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHenStony.png',
    tags: ['food', 'meat'],
  },
  {
    name: 'Briar Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChickBriar.png',
    tags: ['food', 'future-meat'],
  },
  {
    name: 'Briar Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHenBriar.png',
    tags: ['food', 'meat'],
  },
  {
    name: 'Painted Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChickPainted.png',
    tags: ['food', 'future-meat'],
  },
  {
    name: 'Elder Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHenElder.png',
    tags: ['food', 'meat'],
  },
  {
    name: 'Elder Roostro',
    icon: '/assets/games/slime-rancher/food//iconBirdRoosterElder.png',
    tags: ['food', 'meat'],
  },
  {
    name: 'Spicy Tofu',
    icon: '/assets/games/slime-rancher/food//iconVeggieTofu.png',
    tags: ['food', 'other'],
  },
  {
    name: 'Water',
    icon: '/assets/games/slime-rancher/food//iconWater.png',
    tags: ['food', 'other'],
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
  },
  {
    name: 'Thunderclap',
    icon: '/assets/games/slime-rancher/food//iconValleyAmmo2.png',
    tags: ['food', 'electricity'],
  },
  {
    name: 'Static Clinger',
    icon: '/assets/games/slime-rancher/food//iconValleyAmmo4.png',
    tags: ['food', 'electricity'],
  },
];

const cardContainer = document.getElementById('card-container');

const filterCategory = (category) => {
  if (category === 'all') {
    items = cards;
  } else {
    items = cards.filter((card) => {
      return card.tags[0] === category;
    });
  }

  return items
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

const categoryBtns = document.querySelectorAll('.category-btn');
const tagBtns = document.querySelectorAll('.tag-btn');

document.getElementById('all-btn').classList.add('active');

let activeCategory;
const activeTags = [];

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      return;
    }
    console.log('click');

    activeCategory = btn.dataset.category;

    categoryBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    cardContainer.innerHTML = filterCategory(btn.dataset.category);
  });
});

cardContainer.innerHTML = filterCategory('all');

tagBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    activeTags.push(btn.dataset.category);

    tagBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    cardContainer.innerHTML = filterCategory(btn.dataset.category);
  });
});
