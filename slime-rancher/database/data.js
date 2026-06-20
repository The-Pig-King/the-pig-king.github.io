import { processCards } from '../../js/data-helpers.js';

export const extraIcons = {
  'blue-treasure-pod':
    '/assets/games/slime-rancher/extra/blue-treasure-pod.png',
  'depends-on-source-slimes':
    '/assets/games/slime-rancher/extra/depends-on-source-slimes.png',
  electricity: '/assets/games/slime-rancher/extra/electricity.png',
  fruit: '/assets/games/slime-rancher/extra/fruit.png',
  'green-treasure-pod':
    '/assets/games/slime-rancher/extra/green-treasure-pod.png',
  meat: '/assets/games/slime-rancher/extra/meat.png',
  none: '/assets/games/slime-rancher/extra/none.png',
  'odgen-ortiz': '/assets/games/slime-rancher/extra/odgen-ortiz.png',
  ornament: '/assets/games/slime-rancher/extra/ornament.png',
  'purple-treasure-pod':
    '/assets/games/slime-rancher/extra/purple-treasure-pod.png',
  rancher: '/assets/games/slime-rancher/extra/rancher.png',
  'rare-ornament': '/assets/games/slime-rancher/extra/rare-ornament.png',
  'secret-style-treasure-pod':
    '/assets/games/slime-rancher/extra/secret-style-treasure-pod.png',
  slime: '/assets/games/slime-rancher/extra/slime.png',
  'total-treasure-pods':
    '/assets/games/slime-rancher/extra/total-treasure-pods.png',
  unknown: '/assets/games/slime-rancher/extra/unknown.png',
  veggie: '/assets/games/slime-rancher/extra/veggie.png',
};

const rawCards = [
  {
    name: 'Pink Slime',
    'secret-style-name': 'Sparkly',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePink.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePinkExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimePink.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimePink.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slimeulation',
        'the-slime-sea',
      ],
      worldgen: ['the-ranch'],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
      gordo: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'spawn-largo': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
        'the-slime-sea',
        'the-vaults',
      ],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat', 'spicy-tofu'],
      'fav-toy': ['beach-ball'],
      plort: ['pink-plort'],
      largoable: ['yes'],
      gordo: ['pink-gordo', 'party-gordo'],
    },
  },
  {
    name: 'Rock Slime',
    'secret-style-name': 'Heavy Metal',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRock.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeRockExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeRock.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeRock.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slimeulation',
      ],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
      gordo: ['the-indigo-quarry'],
      'spawn-largo': [
        'the-dry-reef',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
        'the-vaults',
      ],
    },
    details: {
      diet: ['veggie', 'spicy-tofu'],
      'fav-food': ['heart-beet'],
      'fav-toy': ['big-rock'],
      plort: ['rock-plort'],
      largoable: ['yes'],
      gordo: ['rock-gordo'],
    },
  },
  {
    name: 'Tabby Slime',
    'secret-style-name': 'Tiger',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTabby.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeTabbyExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeTabby.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeTabby.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slimeulation',
      ],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
      gordo: ['the-dry-reef'],
      'spawn-largo': ['the-dry-reef', 'the-wilds', 'the-slimeulation'],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-food': ['stony-hen'],
      'fav-toy': ['yarn-ball'],
      plort: ['tabby-plort'],
      largoable: ['yes'],
      gordo: ['tabby-gordo'],
    },
  },
  {
    name: 'Phosphor Slime',
    'secret-style-name': 'Angelic',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePhosphor.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePhosphorExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimePhosphor.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimePhosphor.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slimeulation',
        'the-slime-sea',
      ],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
      gordo: ['the-dry-reef'],
      'spawn-largo': [
        'the-dry-reef',
        'the-wilds',
        'the-slimeulation',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['fruit', 'spicy-tofu'],
      'fav-food': ['cuberry'],
      'fav-toy': ['night-light'],
      plort: ['phosphor-plort'],
      largoable: ['yes'],
      gordo: ['phosphor-gordo'],
    },
  },
  {
    name: 'Rad Slime',
    'secret-style-name': 'Radiant',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeRad.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeRadExotic.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: ['the-indigo-quarry', 'the-slimeulation'],
      'range-exchange': ['the-ranch'],
      gordo: ['the-indigo-quarry'],
      'spawn-largo': ['the-indigo-quarry', 'the-wilds', 'the-slimeulation'],
    },
    details: {
      diet: ['veggie', 'spicy-tofu'],
      'fav-food': ['oca-oca'],
      'fav-toy': ['power-cell'],
      plort: ['rad-plort'],
      largoable: ['yes'],
      gordo: ['rad-gordo'],
    },
  },
  {
    name: 'Boom Slime',
    'secret-style-name': 'Arcane',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeBoom.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeBoomExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeBoom.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeBoom.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: [
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-glass-desert',
        'the-slimeulation',
      ],
      'range-exchange': ['the-ranch'],
      gordo: ['the-indigo-quarry'],
      'spawn-largo': [
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-food': ['briar-hen'],
      'fav-toy': ['bomb-ball'],
      plort: ['boom-plort'],
      largoable: ['yes'],
      gordo: ['boom-gordo'],
    },
  },
  {
    name: 'Honey Slime',
    'secret-style-name': 'Royal Jelly',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHoney.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeHoneyExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimehoney.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimehoney.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['the-moss-blanket', 'the-slimeulation'],
      'range-exchange': ['the-ranch'],
      gordo: ['the-moss-blanket'],
      'spawn-largo': ['the-moss-blanket', 'the-slimeulation'],
    },
    details: {
      diet: ['fruit', 'spicy-tofu'],
      'fav-food': ['mint-mango'],
      'fav-toy': ['buzzy-bee'],
      plort: ['honey-plort'],
      largoable: ['yes'],
      gordo: ['honey-gordo'],
    },
  },
  {
    name: 'Puddle Slime',
    'secret-style-name': 'Lilypad',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePuddle.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePuddleExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimePuddle.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimePuddle.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slimeulation',
      ],
      'range-exchange': ['the-ranch'],
    },
    details: {
      diet: ['water'],
      'fav-toy': ['rubber-ducky'],
      plort: ['puddle-plort'],
      largoable: ['no'],
    },
  },
  {
    name: 'Crystal Slime',
    'secret-style-name': 'Ruby Red',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeCrystal.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeCrystalExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeCrystal.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeCrystal.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: ['the-indigo-quarry'],
      crate: ['the-indigo-quarry'],
      'range-exchange': ['the-ranch'],
      gordo: ['the-indigo-quarry'],
    },
    details: {
      diet: ['veggie', 'spicy-tofu'],
      'fav-food': ['odd-onion'],
      'fav-toy': ['crystal-ball'],
      plort: ['crystal-plort'],
      largoable: ['yes'],
      gordo: ['crystal-gordo'],
    },
  },
  {
    name: 'Hunter Slime',
    'secret-style-name': 'Cheshire',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeHunter.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeHunterExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeHunter.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeHunter.png',
    tags: ['slime', 'uncommon', 'docile'],
    locations: {
      spawn: ['the-moss-blanket', 'the-glass-desert', 'the-slimeulation'],
      crate: ['the-moss-blanket'],
      'range-exchange': ['the-ranch'],
      gordo: ['the-moss-blanket'],
      'spawn-largo': ['the-moss-blanket', 'the-wilds', 'the-slimeulation'],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-food': ['roostro'],
      'fav-toy': ['stuffed-chicken'],
      plort: ['hunter-plort'],
      largoable: ['yes'],
      gordo: ['hunter-gordo'],
    },
  },
  {
    name: 'Quantum Slime',
    'secret-style-name': 'Monochrome',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuantum.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeQuantumExotic.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['the-ancient-ruins', 'the-glass-desert'],
      'range-exchange': ['the-ranch'],
      gordo: ['the-ancient-ruins'],
    },
    details: {
      diet: ['fruit', 'spicy-tofu'],
      'fav-food': ['phase-lemon'],
      'fav-toy': ['puzzle-cube'],
      plort: ['quantum-plort'],
      largoable: ['yes'],
      gordo: ['quantum-gordo'],
    },
  },
  {
    name: 'Fire Slime',
    'secret-style-name': 'Devilish',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeFire.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeFireExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeFire.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeFire.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: ['the-glass-desert'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      diet: ['ash'],
      'fav-toy': ['charcoal-brick'],
      plort: ['fire-plort'],
      largoable: ['no'],
    },
  },
  {
    name: 'Dervish Slime',
    'secret-style-name': 'Nebula',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeDervish.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeDervishExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeDervish.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeDervish.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['the-glass-desert'],
      'range-exchange': ['the-ranch'],
      gordo: ['the-glass-desert'],
    },
    details: {
      diet: ['fruit', 'spicy-tofu'],
      'fav-food': ['prickle-pear'],
      'fav-toy': ['gyro-top'],
      plort: ['dervish-plort'],
      largoable: ['yes'],
      gordo: ['dervish-gordo'],
    },
  },
  {
    name: 'Tangle Slime',
    'secret-style-name': 'Nightshade',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTangle.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeTangleExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeTangle.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeTangle.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['the-glass-desert'],
      'range-exchange': ['the-ranch'],
      gordo: ['the-glass-desert'],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-food': ['painted-hen'],
      'fav-toy': ['sol-mate'],
      plort: ['tangle-plort'],
      largoable: ['yes'],
      gordo: ['tangle-gordo'],
    },
  },
  {
    name: 'Mosaic Slime',
    'secret-style-name': 'Shattered',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeMosaic.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeMosaicExotic.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: ['the-glass-desert'],
      'range-exchange': ['the-ranch'],
      gordo: ['the-glass-desert'],
    },
    details: {
      diet: ['veggie', 'spicy-tofu'],
      'fav-food': ['silver-parsnip'],
      'fav-toy': ['disco-ball'],
      plort: ['mosaic-plort'],
      largoable: ['yes'],
      gordo: ['mosaic-gordo'],
    },
  },
  {
    name: 'Saber Slime',
    'secret-style-name': 'Pre-Jellasic',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeSaberSketch.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeSaberExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeSaber.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeSaber.png',
    tags: ['slime', 'unobtainable', 'docile'],
    locations: {
      'spawn-largo': ['the-wilds'],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-toy': ['stego-buddy'],
      plort: ['saber-plort'],
      largoable: ['yes'],
    },
  },
  {
    name: 'Quicksilver Slime',
    'secret-style-name': 'Boomerang',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeQuicksilver.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeQuicksilverExotic.png',
    tags: ['slime', 'common', 'docile', 'harmful'],
    locations: {
      spawn: ['nimble-valley'],
    },
    details: {
      diet: ['electricity'],
      plort: ['quicksilver-plort'],
      largoable: ['no'],
    },
  },
  {
    name: 'Glitch Slime',
    'secret-style-name': 'Retro',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGlitch.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeGlitchExotic.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['the-slimeulation'],
    },
    details: {
      largoable: ['no'],
    },
  },
  {
    name: 'Gold Slime',
    'secret-style-name': 'Gilded',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeGold.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeGoldExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeGold.png',
    tags: ['slime', 'rare', 'docile'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slimeulation',
        'the-slime-sea',
        'the-vaults',
      ],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['gilded-ginger'],
      'fav-food': ['gilded-ginger'],
      plort: ['gold-plort'],
      largoable: ['no'],
      gordo: ['gold-gordo'],
    },
  },
  {
    name: 'Lucky Slime',
    'secret-style-name': 'Guardian',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeLucky.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeLuckyExotic.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeLucky.png',
    tags: ['slime', 'rare', 'docile'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slimeulation',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['meat'],
      largoable: ['no'],
    },
  },
  {
    name: 'Largo Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconLargoPedia.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconLargoPedia.png',
    tags: ['slime', 'common', 'docile', 'harmful'],
    locations: {
      spawn: ['the-slimeulation'],
    },
    details: {
      diet: ['depends-on-source-slimes'],
      'fav-food': ['depends-on-source-slimes'],
      'fav-toy': ['depends-on-source-slimes'],
      plort: ['depends-on-source-slimes'],
    },
  },
  {
    name: 'Twinkle Slime',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTwinkle.png',
    tags: ['slime', 'event', 'rare'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
    details: {
      largoable: ['no'],
    },
  },
  {
    name: 'Feral Slimes',
    icon: '/assets/games/slime-rancher/slimes/regular/iconFeralPedia.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconFeralPedia.png',
    tags: ['slime', 'common', 'hostile'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
        'the-slime-sea',
        'the-vaults',
      ],
    },
    details: {
      diet: ['depends-on-source-slimes'],
      'fav-food': ['depends-on-source-slimes'],
      'fav-toy': ['depends-on-source-slimes'],
      plort: ['depends-on-source-slimes'],
    },
  },
  {
    name: 'The Tarr',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimeTarr.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/slimes/regular/iconSlimeTarr.png',
    tags: ['slime', 'common', 'hostile'],
    locations: {
      spawn: ['the-slimeulation'],
    },
    details: {
      diet: ['meat', 'slime', 'rancher'],
      'fav-food': ['rancher'],
    },
  },
  {
    name: 'Pink Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortPink.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortPink.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['10'],
      'min-price': ['4'],
      'max-price': ['23'],
      despawn: ['24 hours'],
      slime: ['pink-slime'],
    },
  },
  {
    name: 'Rock Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortRock.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortRock.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['22'],
      'min-price': ['8'],
      'max-price': ['50'],
      despawn: ['24 hours'],
      slime: ['rock-slime'],
    },
  },
  {
    name: 'Tabby Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortTabby.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortTabby.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['22'],
      'min-price': ['8'],
      'max-price': ['50'],
      despawn: ['24 hours'],
      slime: ['tabby-slime'],
    },
  },
  {
    name: 'Phosphor Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortPhosphor.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortPhosphor.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['22'],
      'min-price': ['8'],
      'max-price': ['49'],
      despawn: ['24 hours'],
      slime: ['phosphor-slime'],
    },
  },
  {
    name: 'Rad Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortRad.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['45'],
      'min-price': ['15'],
      'max-price': ['99'],
      despawn: ['24 hours'],
      slime: ['rad-slime'],
    },
  },
  {
    name: 'Boom Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortBoom.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortBoom.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['45'],
      'min-price': ['15'],
      'max-price': ['98'],
      despawn: ['24 hours'],
      slime: ['boom-slime'],
    },
  },
  {
    name: 'Honey Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortHoney.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortHoney.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['45'],
      'min-price': ['15'],
      'max-price': ['98'],
      despawn: ['24 hours'],
      slime: ['honey-slime'],
    },
  },
  {
    name: 'Puddle Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortPuddle.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortPuddle.png',
    tags: ['plort', 'common'],
    details: {
      'default-price': ['45'],
      'min-price': ['15'],
      'max-price': ['99'],
      despawn: ['24 hours (30 mins outside pond)'],
      slime: ['puddle-slime'],
    },
  },
  {
    name: 'Crystal Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortCrystal.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortCrystal.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['60'],
      'min-price': ['21'],
      'max-price': ['132'],
      despawn: ['24 hours'],
      slime: ['crystal-slime'],
    },
  },
  {
    name: 'Hunter Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortHunter.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortHunter.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['60'],
      'min-price': ['20'],
      'max-price': ['132'],
      despawn: ['24 hours'],
      slime: ['hunter-slime'],
    },
  },
  {
    name: 'Quantum Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortQuantum.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['60'],
      'min-price': ['21'],
      'max-price': ['130'],
      despawn: ['24 hours'],
      slime: ['quantum-slime'],
    },
  },
  {
    name: 'Fire Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortFire.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortFire.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['45'],
      'min-price': ['15'],
      'max-price': ['99'],
      despawn: ['24 hours (30 mins outside incinerator)'],
      slime: ['fire-slime'],
    },
  },
  {
    name: 'Dervish Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortDervish.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortDervish.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['75'],
      'min-price': ['26'],
      'max-price': ['164'],
      despawn: ['24 hours'],
      slime: ['dervish-slime'],
    },
  },
  {
    name: 'Tangle Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortTangle.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortTangle.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['75'],
      'min-price': ['25'],
      'max-price': ['167'],
      despawn: ['24 hours'],
      slime: ['tangle-slime'],
    },
  },
  {
    name: 'Mosaic Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortMosaic.png',
    tags: ['plort', 'common'],
    locations: {
      'range-exchange': ['the-ranch'],
    },
    details: {
      'default-price': ['75'],
      'min-price': ['26'],
      'max-price': ['165'],
      despawn: ['24 hours'],
      slime: ['mosaic-slime'],
    },
  },
  {
    name: 'Saber Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortSaber.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortSaber.png',
    tags: ['plort', 'common'],
    details: {
      'default-price': ['60'],
      'min-price': ['20'],
      'max-price': ['134'],
      despawn: ['24 hours'],
      slime: ['saber-slime'],
    },
  },
  {
    name: 'Quicksilver Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortQuicksilver.png',
    tags: ['plort', 'common'],
    details: {
      'trade-price': ['20'],
      despawn: ['24 hours'],
      slime: ['quicksilver-slime'],
    },
  },
  {
    name: 'Gold Plort',
    icon: '/assets/games/slime-rancher/plorts/iconPlortGold.png',
    'sr2-icon': '/assets/games/slime-rancher-2/plorts/iconPlortGold.png',
    tags: ['plort', 'rare'],
    locations: {
      'treasure-pod': ['the-glass-desert', 'the-vaults'],
    },
    details: {
      'default-price': ['300'],
      'min-price': ['102'],
      'max-price': ['658'],
      despawn: ['6 hours'],
      slime: ['gold-slime'],
    },
  },
  {
    name: 'Pink Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoPink.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gordos/iconGordoPink.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-dry-reef'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat', 'spicy-tofu'],
      'food-limit': ['30'],
      'rush-mode': ['20'],
      count: ['2'],
      'rush-count': ['2'],
      slime: ['pink-slime'],
      drops: {
        'pink-slime': '10',
        'slime-key': '1',
        'the-dry-reef-crate': '2',
      },
    },
  },
  {
    name: 'Phosphor Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoPhosphor.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gordos/iconGordoPhosphor.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-dry-reef'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['fruit', 'spicy-tofu'],
      'fav-food': ['cuberry'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['phosphor-slime'],
      drops: {
        'phosphor-slime': '10',
        'slime-key': '1',
        'the-dry-reef-crate': '2',
      },
    },
  },
  {
    name: 'Tabby Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoTabby.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gordos/iconGordoTabby.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-dry-reef'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-food': ['stony-hen'],
      'food-limit': ['50'],
      'rush-mode': '1',
      count: ['2'],
      'rush-count': ['2'],
      slime: ['tabby-slime'],
      'the-reef-drops': {
        'tabby-slime': '11',
        'the-dry-reef-crate': '2',
      },
      'the-beach-drops': {
        'tabby-slime': '7-10',
        'the-dry-reef-crate': '2-3',
      },
    },
  },
  {
    name: 'Honey Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoHoney.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gordos/iconGordoHoney.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-moss-blanket'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['fruit', 'spicy-tofu'],
      'fav-food': ['mint-mango'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['honey-slime'],
      drops: {
        'honey-slime': '10',
        'slime-key': '1',
        'the-moss-blanket-crate': '2',
      },
    },
  },
  {
    name: 'Hunter Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoHunter.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gordos/iconGordoHunter.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-moss-blanket'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-food': ['roostro'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['hunter-slime'],
      drops: {
        'hunter-slime': '9',
        'slime-key': '1',
        'the-moss-blanket-crate': '2',
        'slime-science-crate': '1',
      },
    },
  },
  {
    name: 'Rock Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoRock.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gordos/iconGordoRock.png',
    tags: ['gordo', 'common', 'harmful'],
    locations: {
      worldgen: ['the-indigo-quarry'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['veggie', 'spicy-tofu'],
      'fav-food': ['heart-beet'],
      'food-limit': ['50'],
      'rush-mode': '1',
      count: ['2'],
      'rush-count': ['2'],
      slime: ['rock-slime'],
      drops: {
        'rock-slime': '10',
        'the-indigo-quarry-crate': '3',
      },
    },
  },
  {
    name: 'Rad Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoRad.png',
    tags: ['gordo', 'common', 'harmful'],
    locations: {
      worldgen: ['the-indigo-quarry'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['veggie', 'spicy-tofu'],
      'fav-food': ['oca-oca'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['rad-slime'],
      drops: {
        'rad-slime': '10',
        'slime-key': '1',
        'the-indigo-quarry-crate': '2',
      },
    },
  },
  {
    name: 'Crystal Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoCrystal.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gordos/iconGordoCrystal.png',
    tags: ['gordo', 'common', 'harmful'],
    locations: {
      worldgen: ['the-indigo-quarry'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['veggie', 'spicy-tofu'],
      'fav-food': ['odd-onion'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['crystal-slime'],
      drops: {
        'crystal-slime': '9',
        'slime-key': '1',
        'the-indigo-quarry-crate': '2',
        'slime-science-crate': '1',
      },
    },
  },
  {
    name: 'Boom Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoBoom.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gordos/iconGordoBoom.png',
    tags: ['gordo', 'common', 'harmful'],
    locations: {
      worldgen: ['the-ancient-ruins'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-food': ['briar-hen'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['boom-slime'],
      drops: {
        'boom-slime': '10',
        'slime-key': '1',
        'the-ancient-ruins-crate': '2',
      },
    },
  },
  {
    name: 'Quantum Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoQuantum.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-ancient-ruins'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['fruit', 'spicy-tofu'],
      'fav-food': ['phase-lemon'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['quantum-slime'],
      drops: {
        'quantum-slime': '10',
        'slime-key': '1',
        'the-ancient-ruins-crate': '2',
      },
    },
  },
  {
    name: 'Dervish Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoDervish.png',
    'sr2-icon': '/assets/games/slime-rancher/extra/none.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-glass-desert'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['fruit', 'spicy-tofu'],
      'fav-food': ['prickle-pear'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['dervish-slime'],
      drops: {
        'dervish-slime': '9',
        'slime-key': '1',
        'the-glass-desert-crate': '2',
        'slime-science-crate': '1',
      },
    },
  },
  {
    name: 'Tangle Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoTangle.png',
    'sr2-icon': '/assets/games/slime-rancher/extra/none.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-glass-desert'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['meat', 'spicy-tofu'],
      'fav-food': ['painted-hen'],
      'food-limit': ['50'],
      'rush-mode': '1',
      count: '1',
      'rush-count': '1',
      slime: ['tangle-slime'],
      drops: {
        'tangle-slime': '10',
        'the-glass-desert-crate': '2',
        'slime-science-crate': '1',
      },
    },
  },
  {
    name: 'Mosaic Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoMosaic.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-glass-desert'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['veggie', 'spicy-tofu'],
      'fav-food': ['silver-parsnip'],
      'food-limit': ['50'],
      'rush-mode': ['30'],
      count: '1',
      'rush-count': '1',
      slime: ['mosaic-slime'],
      drops: {
        'mosaic-slime': '9',
        'slime-key': '1',
        'the-glass-desert-crate': '2',
        'slime-science-crate': '1',
      },
    },
  },
  {
    name: 'Gold Gordo',
    icon: '/assets/games/slime-rancher/gordos/iconGordoGold.png',
    tags: ['gordo', 'rare', 'docile'],
    locations: {
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['gilded-ginger'],
      'fav-food': ['gilded-giner'],
      'food-limit': ['6'],
      'rush-mode': ['6'],
      count: ['0'],
      'rush-count': ['11'],
      slime: ['gold-slime'],
      'snared-drops': {
        'gold-slime': '10',
        'the-dry-reef-crate': '2',
        'slime-science-crate': '1',
      },
    },
  },
  {
    name: 'Party Gordo',
    icon: '/assets/games/slime-rancher/slimes/regular/iconSlimePartyGordo.png',
    tags: ['gordo', 'event', 'common', 'docile'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat', 'spicy-tofu'],
      'food-limit': ['10'],
      count: '1',
      'rush-count': ['0'],
      drops: {
        'pink-slime': '4',
        'party-crate': '8',
        'rare-ornament': '1',
      },
    },
  },
  {
    name: 'Carrot',
    icon: '/assets/games/slime-rancher/food//iconVeggieCarrot.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconVeggieCarrot.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: [
        'the-overgrowth',
        'ogdens-retreat',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
      worldgen: ['the-ranch'],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'max-harvest': ['20 (30 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Oca Oca',
    icon: '/assets/games/slime-rancher/food//iconVeggieOcaOca.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: ['the-indigo-quarry', 'the-slimeulation'],
      crate: ['the-indigo-quarry'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['rad-slime'],
      'max-harvest': ['15 (23 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Heart Beet',
    icon: '/assets/games/slime-rancher/food//iconVeggieBeet.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconVeggieBeet.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['rock-slime'],
      'max-harvest': ['15 (23 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Silver Parsnip',
    icon: '/assets/games/slime-rancher/food//iconVeggieParsnip.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: ['the-glass-desert'],
      crate: ['the-glass-desert'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['mosaic-slime'],
      'max-harvest': ['15 (23 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Odd Onion',
    icon: '/assets/games/slime-rancher/food//iconVeggieOnion.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconVeggieOnion.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: ['the-indigo-quarry', 'the-slimeulation'],
      crate: ['the-indigo-quarry'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['crystal-slime'],
      'max-harvest': ['20 (30 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Gilded Ginger',
    icon: '/assets/games/slime-rancher/food//iconVeggieGinger.png',
    tags: ['food', 'veggie', 'rare'],
    locations: {
      spawn: ['the-glass-desert'],
    },
    details: {
      'fav-of': ['gold-slime'],
      'decay-time': ['20 hours (42 Miracle)'],
    },
  },
  {
    name: 'Pogo Fruit',
    icon: '/assets/games/slime-rancher/food//iconFruitPogo.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconFruitPogo.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: [
        'the-overgrowth',
        'ogdens-retreat',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
        'the-vaults',
      ],
      worldgen: ['the-ranch'],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'max-harvest': ['20 (30 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Mint Mango',
    icon: '/assets/games/slime-rancher/food//iconFruitMango.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconFruitMango.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: ['the-moss-blanket', 'the-slimeulation'],
      crate: ['the-moss-blanket'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['honey-slime'],
      'max-harvest': ['15 (23 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Cuberry',
    icon: '/assets/games/slime-rancher/food//iconFruitCuberry.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconFruitCuberry.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
        'the-slime-sea',
      ],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['phosphor-slime'],
      'max-harvest': ['15 (23 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Phase Lemon',
    icon: '/assets/games/slime-rancher/food//iconFruitLemon.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: ['viktors-workshop', 'the-ancient-ruins'],
      crate: ['the-ancient-ruins'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['quantum-slime'],
      'max-harvest': ['15 (23 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Prickle Pear',
    icon: '/assets/games/slime-rancher/food//iconFruitPear.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconFruitPear.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: ['the-glass-desert'],
      crate: ['the-glass-desert'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['dervish-slime'],
      'max-harvest': ['15 (23 Deluxe)'],
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Kookadoba',
    icon: '/assets/games/slime-rancher/food//iconFruitKookadoba.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: ['the-wilds'],
      crate: ['the-wilds'],
    },
    details: {
      'fav-of': ['ogden-ortiz'],
      'decay-time': ['13 hours (30 Miracle)'],
    },
  },
  {
    name: 'Chickadoo',
    icon: '/assets/games/slime-rancher/food//iconBirdChick.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdChick.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
      worldgen: ['the-ranch'],
    },
    details: {
      hen: ['hen-hen'],
      'grow-time': ['36 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Hen Hen',
    icon: '/assets/games/slime-rancher/food//iconBirdHen.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdHen.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-overgrowth',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
      worldgen: ['the-ranch'],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
    },
    details: {
      chickadoo: ['chickadoo'],
    },
  },
  {
    name: 'Roostro',
    icon: '/assets/games/slime-rancher/food//iconBirdRooster.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdRooster.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
    },
    details: {
      'fav-of': ['hunter-slime'],
    },
    details: {
      chickadoo: [
        'chickadoo',
        'stony-chickadoo',
        'briar-chickadoo',
        'painted-chickadoo',
      ],
    },
  },
  {
    name: 'Stony Chickadoo',
    icon: '/assets/games/slime-rancher/food/iconBirdChickStony.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdChickStony.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
    },
    details: {
      hen: ['stony-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Stony Hen',
    icon: '/assets/games/slime-rancher/food/iconBirdHenStony.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdHenStony.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch'],
    },
    details: {
      chickadoo: ['stony-chickadoo'],
      'fav-of': ['tabby-slime'],
    },
  },
  {
    name: 'Briar Chickadoo',
    icon: '/assets/games/slime-rancher/food/iconBirdChickBriar.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdChickBriar.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: ['the-moss-blanket', 'the-slimeulation'],
    },
    details: {
      hen: ['briar-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Briar Hen',
    icon: '/assets/games/slime-rancher/food/iconBirdHenBriar.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdHenBriar.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: ['the-moss-blanket', 'the-slimeulation'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      chickadoo: ['briar-chickadoo'],
      'fav-of': ['boom-slime'],
    },
  },
  {
    name: 'Painted Chickadoo',
    icon: '/assets/games/slime-rancher/food/iconBirdChickPainted.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdChickPainted.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: ['the-glass-desert'],
    },
    details: {
      hen: ['painted-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Painted Hen',
    icon: '/assets/games/slime-rancher/food/iconBirdHenPainted.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdHenPainted.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: ['the-glass-desert'],
      'range-exchange': ['the-ranch'],
    },
    details: {
      chickadoo: ['painted-chickadoo'],
      'fav-of': ['tangle-slime'],
    },
  },
  {
    name: 'Elder Hen',
    icon: '/assets/games/slime-rancher/food/iconBirdHenElder.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdHenElder.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
    },
  },
  {
    name: 'Elder Roostro',
    icon: '/assets/games/slime-rancher/food/iconBirdRoosterElder.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconBirdRoosterElder.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
      ],
    },
  },
  {
    name: 'Spicy Tofu',
    icon: '/assets/games/slime-rancher/food/iconVeggieTofu.png',
    tags: ['food', 'other', 'common'],
    locations: {
      'range-exchange': ['ogdens-retreat'],
    },
    details: {
      'decay-time': ['36 hours (48 Miracle)'],
    },
  },
  {
    name: 'Water',
    icon: '/assets/games/slime-rancher/food/iconWater.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconWater.png',
    tags: ['food', 'other', 'common'],
    locations: {
      spawn: [
        'the-docks',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slimeulation',
        'the-vaults',
      ],
    },
  },
  {
    name: 'Ash',
    icon: '/assets/games/slime-rancher/food/iconPatchIncineratorAshTray.png',
    'sr2-icon': '/assets/games/slime-rancher-2/food/iconAsh.png',
    tags: ['food', 'other', 'common'],
  },
  {
    name: 'Spark Shot',
    icon: '/assets/games/slime-rancher/food/iconValleyAmmo1.png',
    tags: ['food', 'electricity', 'common'],
    locations: {
      spawn: ['nimble-valley'],
    },
    details: {
      'max-harvest': ['30'],
    },
  },
  {
    name: 'Thunderclap',
    icon: '/assets/games/slime-rancher/food/iconValleyAmmo2.png',
    tags: ['food', 'electricity', 'common'],
    locations: {
      spawn: ['nimble-valley'],
    },
    details: {
      'max-harvest': ['3'],
    },
  },
  {
    name: 'Static Clinger',
    icon: '/assets/games/slime-rancher/food/iconValleyAmmo4.png',
    tags: ['food', 'electricity', 'common'],
    locations: {
      spawn: ['nimble-valley'],
    },
    details: {
      'max-harvest': ['3'],
    },
  },
  {
    name: 'Jellystone',
    icon: '/assets/games/slime-rancher/resources/iconCraftJellyStone.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/resources/iconCraftJellyStone.png',
    tags: ['resource', 'common', 'drill'],
    locations: {
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Slime Fossil',
    icon: '/assets/games/slime-rancher/resources/iconCraftSlimeFossil.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/resources/iconCraftSlimeFossil.png',
    tags: ['resource', 'uncommon', 'drill'],
    locations: {
      'treasure-pod': ['the-indigo-quarry', 'the-ancient-ruins'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Strange Diamond',
    icon: '/assets/games/slime-rancher/resources/iconCraftStrangeDiamond.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/resources/iconCraftStrangeDiamond.png',
    tags: ['resource', 'rare', 'drill'],
    locations: {
      'treasure-pod': [
        'the-lab',
        'ogdens-retreat',
        'the-indigo-quarry',
        'the-ancient-ruins',
      ],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Indigonium',
    icon: '/assets/games/slime-rancher/resources/iconCraftIndigonium.png',
    tags: ['resource', 'common', 'drill'],
    locations: {
      'treasure-pod': ['the-indigo-quarry', 'the-ancient-ruins'],
      gadget: ['the-indigo-quarry'],
    },
  },
  {
    name: 'Glass Shard',
    icon: '/assets/games/slime-rancher/resources/iconCraftGlassShard.png',
    tags: ['resource', 'common', 'drill'],
    locations: {
      gadget: ['the-glass-desert'],
    },
  },
  {
    name: 'Buzz Wax',
    icon: '/assets/games/slime-rancher/resources/iconCraftBuzzWax.png',
    'sr2-icon': '/assets/games/slime-rancher-2/resources/iconCraftBuzzWax.png',
    tags: ['resource', 'common', 'apiary'],
    locations: {
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Hexacomb',
    icon: '/assets/games/slime-rancher/resources/iconCraftHexacomb.png',
    tags: ['resource', 'uncommon', 'apiary'],
    locations: {
      'treasure-pod': [
        'the-lab',
        'ogdens-retreat',
        'the-moss-blanket',
        'the-ancient-ruins',
      ],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Royal Jelly',
    icon: '/assets/games/slime-rancher/resources/iconCraftRoyalJelly.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/resources/iconCraftRoyalJelly.png',
    tags: ['resource', 'rare', 'apiary'],
    locations: {
      'treasure-pod': [
        'ogdens-retreat',
        'the-moss-blanket',
        'the-ancient-ruins',
        'the-wilds',
      ],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Wild Honey',
    icon: '/assets/games/slime-rancher/resources/iconCraftWildHoney.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/resources/iconCraftWildHoney.png',
    tags: ['resource', 'common', 'apiary'],
    locations: {
      'treasure-pod': ['the-moss-blanket', 'the-ancient-ruins', 'the-wilds'],
      gadget: ['the-moss-blanket'],
    },
  },
  {
    name: 'Pepper Jam',
    icon: '/assets/games/slime-rancher/resources/iconCraftPepperJam.png',
    tags: ['resource', 'common', 'apiary'],
    locations: {
      gadget: ['the-glass-desert'],
    },
  },
  {
    name: 'Primordy Oil',
    icon: '/assets/games/slime-rancher/resources/iconCraftPrimordyOil.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/resources/iconCraftPrimordyOil.png',
    tags: ['resource', 'common', 'pump'],
    locations: {
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Spiral Steam',
    icon: '/assets/games/slime-rancher/resources/iconCraftSpiralSteam.png',
    tags: ['resource', 'uncommon', 'pump'],
    locations: {
      'treasure-pod': ['the-dry-reef', 'the-ancient-ruins'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Lava Dust',
    icon: '/assets/games/slime-rancher/resources/iconCraftLavaDust.png',
    'sr2-icon': '/assets/games/slime-rancher-2/resources/iconCraftLavaDust.png',
    tags: ['resource', 'rare', 'pump'],
    locations: {
      'treasure-pod': ['ogdens-retreat', 'the-dry-reef', 'the-ancient-ruins'],
      gadget: [
        'the-ranch',
        'ogdens-retreat',
        'mochis-manor',
        'viktors-workshop',
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-slime-sea',
      ],
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Deep Brine',
    icon: '/assets/games/slime-rancher/resources/iconCraftDeepBrine.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/resources/iconCraftDeepBrine.png',
    tags: ['resource', 'common', 'pump'],
    locations: {
      'treasure-pod': ['the-lab', 'the-dry-reef', 'the-ancient-ruins'],
      gadget: ['the-dry-reef'],
    },
  },
  {
    name: 'Silky Sand',
    icon: '/assets/games/slime-rancher/resources/iconCraftSilkySand.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/resources/iconCraftSilkySand.png',
    tags: ['resource', 'common', 'pump'],
    locations: {
      gadget: ['the-glass-desert'],
    },
  },
  {
    name: 'Manifold Cube',
    icon: '/assets/games/slime-rancher/resources/iconCraftManifoldCube.png',
    tags: ['resource', 'common', 'range-exchange'],
    locations: {
      'range-exchange': ['viktors-workshop'],
    },
  },
  {
    name: 'Red Echo',
    icon: '/assets/games/slime-rancher/resources/iconEchoRed.png',
    tags: ['resource', 'common', 'drill', 'apiary', 'pump', 'echo-net'],
    locations: {
      spawn: ['the-ancient-ruins'],
      gadget: ['the-ancient-ruins'],
    },
  },
  {
    name: 'Blue Echo',
    icon: '/assets/games/slime-rancher/resources/iconEchoBlue.png',
    tags: ['resource', 'common', 'drill', 'apiary', 'pump', 'echo-net'],
    locations: {
      spawn: ['the-ancient-ruins'],
      gadget: ['the-ancient-ruins'],
    },
  },
  {
    name: 'Green Echo',
    icon: '/assets/games/slime-rancher/resources/iconEchoGreen.png',
    tags: ['resource', 'common', 'drill', 'apiary', 'pump', 'echo-net'],
    locations: {
      spawn: ['the-ancient-ruins'],
      gadget: ['the-ancient-ruins'],
    },
  },
  {
    name: 'Gold Echo',
    icon: '/assets/games/slime-rancher/resources/iconEchoGold.png',
    tags: ['resource', 'uncommon', 'drill', 'apiary', 'pump', 'echo-net'],
    locations: {
      spawn: ['the-ancient-ruins'],
      gadget: ['the-ancient-ruins'],
    },
  },
  {
    name: 'Beach Ball',
    icon: '/assets/games/slime-rancher/toys/iconToyBeechBall.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyBeachBall.png',
    tags: ['toy', 'common'],
    locations: {
      worldgen: ['the-dry-reef'],
    },
    details: {
      price: ['300'],
      'fav-of': ['pink-slime'],
    },
  },
  {
    name: 'Big Rock',
    icon: '/assets/games/slime-rancher/toys/iconToyBigRock.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyBigRock.png',
    tags: ['toy', 'common'],
    locations: {
      worldgen: ['the-indigo-quarry'],
    },
    details: {
      price: ['400'],
      'fav-of': ['rock-slime'],
    },
  },
  {
    name: 'Yarn Ball',
    icon: '/assets/games/slime-rancher/toys/iconToyYarnBall.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyYarnBall.png',
    tags: ['toy', 'common'],
    locations: {
      worldgen: ['the-moss-blanket'],
    },
    details: {
      price: ['400'],
      'fav-of': ['tabby-slime'],
    },
  },
  {
    name: 'Night Light',
    icon: '/assets/games/slime-rancher/toys/iconToyNightLight.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyNightLight.png',
    tags: ['toy', 'common'],
    locations: {
      worldgen: ['the-slime-sea'],
    },
    details: {
      price: ['500'],
      'fav-of': ['phosphor-slime'],
    },
  },
  {
    name: 'Power Cell',
    icon: '/assets/games/slime-rancher/toys/iconToyPowerCell.png',
    tags: ['toy', 'common'],
    details: {
      price: ['500'],
      'fav-of': ['rad-slime'],
    },
  },
  {
    name: 'Bomb Ball',
    icon: '/assets/games/slime-rancher/toys/iconToyBomb.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyBomb.png',
    tags: ['toy', 'common'],
    details: {
      price: ['500'],
      'fav-of': ['boom-slime'],
    },
  },
  {
    name: 'Buzzy Bee',
    icon: '/assets/games/slime-rancher/toys/iconToyBuzzBee.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyBuzzyBee.png',
    tags: ['toy', 'common'],
    details: {
      price: ['500'],
      'fav-of': ['honey-slime'],
    },
  },
  {
    name: 'Rubber Ducky',
    icon: '/assets/games/slime-rancher/toys/iconToyDuck.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyRubberDucky.png',
    tags: ['toy', 'common'],
    locations: {
      worldgen: ['the-docks'],
    },
    details: {
      price: ['500'],
      'fav-of': ['puddle-slime'],
    },
  },
  {
    name: 'Octo Buddy',
    icon: '/assets/games/slime-rancher/toys/iconToyBOctoBuddy.png',
    tags: ['toy', 'common'],
    details: {
      price: ['500'],
      'fav-of': ['scuba-fashion-pod'],
    },
  },
  {
    name: 'Crystal Ball',
    icon: '/assets/games/slime-rancher/toys/iconToyCrystalBall.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyCrystalBall.png',
    tags: ['toy', 'common'],
    details: {
      price: ['600'],
      'fav-of': ['crystal-slime'],
    },
  },
  {
    name: 'Stuffed Chicken',
    icon: '/assets/games/slime-rancher/toys/iconToyStuffedChicken.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyStuffedChicken.png',
    tags: ['toy', 'common'],
    details: {
      price: ['600'],
      'fav-of': ['hunter-slime'],
    },
  },
  {
    name: 'Puzzle Cube',
    icon: '/assets/games/slime-rancher/toys/iconToyPuzzleBox.png',
    tags: ['toy', 'common'],
    details: {
      price: ['600'],
      'fav-of': ['quantum-slime'],
    },
  },
  {
    name: 'Disco Ball',
    icon: '/assets/games/slime-rancher/toys/iconToyDiscoBall.png',
    tags: ['toy', 'common'],
    details: {
      price: ['700'],
      'fav-of': ['mosaic-slime'],
    },
  },
  {
    name: 'Gyro Top',
    icon: '/assets/games/slime-rancher/toys/iconToyGyroTop.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyGyroTop.png',
    tags: ['toy', 'common'],
    details: {
      price: ['700'],
      'fav-of': ['dervish-slime'],
    },
  },
  {
    name: 'Sol Mate',
    icon: '/assets/games/slime-rancher/toys/iconToySolBuddy.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToySolMate.png',
    tags: ['toy', 'common'],
    details: {
      price: ['700'],
      'fav-of': ['tangle-slime'],
    },
  },
  {
    name: 'Charcoal Brick',
    icon: '/assets/games/slime-rancher/toys/iconToyBrickette.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyCharcoalBrick.png',
    tags: ['toy', 'common'],
    details: {
      price: ['700'],
      'fav-of': ['fire-slime'],
    },
  },
  {
    name: 'Stego Buddy',
    icon: '/assets/games/slime-rancher/toys/iconToyStegoBuddy.png',
    'sr2-icon': '/assets/games/slime-rancher-2/toys/iconToyStegoBuddy.png',
    tags: ['toy', 'common'],
    details: {
      price: ['700'],
      'fav-of': ['saber-slime'],
    },
  },
  {
    name: 'Treasure Chest',
    icon: '/assets/games/slime-rancher/toys/iconToyTreasureChest.png',
    tags: ['toy', 'dlc', 'common'],
    details: {
      price: ['200'],
      'fav-of': ['piratey-fashion-pod'],
    },
  },
  {
    name: 'Bop Goblin',
    icon: '/assets/games/slime-rancher/toys/iconToyBopGoblin.png',
    tags: ['toy', 'dlc', 'common'],
    details: {
      price: ['200'],
      'fav-of': ['heroic-fashion-pod'],
    },
  },
  {
    name: 'Beeper Bot',
    icon: '/assets/games/slime-rancher/toys/iconToyscifi.png',
    tags: ['toy', 'dlc', 'common'],
    details: {
      price: ['200'],
      'fav-of': ['galactic-fashion-pod'],
    },
  },
  {
    name: 'Mudball',
    icon: '/assets/games/slime-rancher/toys/SaberSlimeMudball.png',
    tags: ['toy', 'common'],
    locations: { spawn: ['the-wilds'] },
  },
  {
    name: 'Chime C',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote1.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime C#',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote2.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime D',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote3.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime D#',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote4.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime E',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote5.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime F',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote6.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime F#',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote7.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime G',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote8.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime G#',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote9.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime A',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote10.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime A#',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote11.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime B',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote12.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Chime C^',
    icon: '/assets/games/slime-rancher/chimes/iconEchoNote13.png',
    tags: ['chime', 'event', 'rare'],
    locations: {
      'twinkle-slime': [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
  },
  {
    name: 'Pink Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentPink.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Phosphor Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentPhos.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Tabby Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentTabby.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Boom Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentBoom.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Rad Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentRad.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Honey Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentHoney.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Quantum Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentQuantum.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Hunter Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentHunter.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Puddle Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentPuddle.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Dervish Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentDervish.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Tangle Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentTangle.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Mosaic Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentMosaic.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Tarr Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentTarr.png',
    tags: ['ornament', 'event', 'rare'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Lucky Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentLucky.png',
    tags: ['ornament', 'event', 'rare'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Gold Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentGold.png',
    tags: ['ornament', 'event', 'rare'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: '7Zee Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnament7z.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Victory Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentCheevo.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Newbuck Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentNewbuck.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Cloudy Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentCloud.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Starry Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentStar.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Rock Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentRock.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Crystal Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentCrystal.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Fire Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentFire.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Quicksilver Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentQuicksilver.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Briar Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentHenBriar.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Elder Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentHenElder.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Hen Hen Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentHenHen.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Painted Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentHenPainted.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Stony Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentHenStony.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Handlebar Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentMustache.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Lovely Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentHeart.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Party Gordo Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentParty.png',
    tags: ['ornament', 'event', 'rare'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Rainbow Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentRainbow.png',
    tags: ['ornament', 'event', 'rare'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Green Stripey Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentStripesGreen.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Purple Stripey Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentStripesPurple.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Jack Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentJack.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Clover Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentClover.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Snowflake Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentSnowflake.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Buzzy Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentBuzzy.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Drone Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentDrone.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Sleepy Drone Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentDroneSleepy.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Ducky Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentDucky.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Fireflower Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentFireflower.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Glitch Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentGlitch.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Pink? Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentImposter.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Tabby? Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentImposterTabby.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Slime Moon Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentSlimeMoon.png',
    tags: ['ornament', 'event', 'unobtainable'],
  },
  {
    name: 'Stego Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentStego.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Blue Stripey Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentStripesBlue.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Red Stripey Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentStripesRed.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Teal Stripey Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentStripesTeal.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Sunny Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentSunny.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Tarr Lantern Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentTarrLantern.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Treefox Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentTreefox.png',
    tags: ['ornament', 'event', 'unobtainable'],
  },
  {
    name: 'Twinkle Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentTwinkle.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Wildflower Ornament',
    icon: '/assets/games/slime-rancher/ornaments/iconOrnamentWildflower.png',
    tags: ['ornament', 'event', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
  },
  {
    name: 'Classic',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_00_default.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Milkshake',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_23.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Cobalt',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_01.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Firecracker',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_10.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Grapeshot',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_04.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Roboranger',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_05.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Maidatron',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_23.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Gingersnap',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_20.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Peapod',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_21.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Vanguard',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_18.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Willow',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_17.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Daybreak',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_22.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Eventide',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_02.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Salamander',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_08.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Royalton',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_07.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Neopolitan',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_11.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Mint Chip',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_12.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Ghost Wine',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_09.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Volcanic',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_13.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Knight Light',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_03.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Pretty Loud',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_19.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Silverfox',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_24.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Frozen Violet',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_16.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Astro Pearl',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_14.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Goldleaf',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_15.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Tomatillo',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_ogden.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Kanpeki',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_mochi.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Concentration',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_viktor.png',
    tags: ['chroma', 'common'],
  },
  {
    name: 'Sapphire',
    icon: '/assets/games/slime-rancher/chromas/Sapphire_Chroma_Pack.png',
    tags: ['chroma', 'dlc', 'common'],
  },
  {
    name: 'Emerald',
    icon: '/assets/games/slime-rancher/chromas/Emerald_Chroma_Pack.png',
    tags: ['chroma', 'dlc', 'common'],
  },
  {
    name: 'Ruby',
    icon: '/assets/games/slime-rancher/chromas/Ruby_Chroma_Pack.png',
    tags: ['chroma', 'dlc', 'common'],
  },
  {
    name: 'Amethyst',
    icon: '/assets/games/slime-rancher/chromas/iconChromaPack_25.png',
    tags: ['chroma', 'unobtainable'],
  },
  {
    name: 'Onyx',
    icon: '/assets/games/slime-rancher/chromas/Onyx_Chroma_Pack.png',
    tags: ['chroma', 'unobtainable'],
  },
  {
    name: 'Water Tank',
    icon: '/assets/games/slime-rancher/upgrades/iconShopWater01.png',
    'sr2-icon': '/assets/games/slime-rancher-2/upgrades/iconShopWater01.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['350'],
    },
  },
  {
    name: 'Jetpack',
    icon: '/assets/games/slime-rancher/upgrades/iconShopJetpack.png',
    'sr2-icon': '/assets/games/slime-rancher-2/upgrades/iconShopJetpack 1.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['350'],
    },
  },
  {
    name: 'Air Drive',
    icon: '/assets/games/slime-rancher/upgrades/iconShopAirdrive.png',
    'sr2-icon': '/assets/games/slime-rancher-2/upgrades/iconShopJetpack 1.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['500'],
    },
  },
  {
    name: 'Dash Boots',
    icon: '/assets/games/slime-rancher/upgrades/iconShopBoots.png',
    'sr2-icon': '/assets/games/slime-rancher-2/upgrades/iconShopDashBoots.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['350'],
    },
  },
  {
    name: 'Ultra Dash Boots',
    icon: '/assets/games/slime-rancher/upgrades/iconShopBoots02.png',
    'sr2-icon': '/assets/games/slime-rancher-2/upgrades/iconShopDashBoots.png',
    tags: ['upgrade', 'common'],
  },
  {
    name: 'Pulse Wave',
    icon: '/assets/games/slime-rancher/upgrades/iconShopPulsewave.png',
    'sr2-icon': '/assets/games/slime-rancher-2/upgrades/iconShopPulsewave.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['350'],
    },
  },
  {
    name: 'Heart Module',
    icon: '/assets/games/slime-rancher/upgrades/iconShopHeart01.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['350'],
    },
  },
  {
    name: 'Heart Module Mk II',
    icon: '/assets/games/slime-rancher/upgrades/iconShopHeart02.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['500'],
    },
  },
  {
    name: 'Heart Module Mk III',
    icon: '/assets/games/slime-rancher/upgrades/iconShopHeart03.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['750'],
    },
  },
  {
    name: 'Heart Module Ultra',
    icon: '/assets/games/slime-rancher/upgrades/iconShopHeart04.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem.png',
    tags: ['upgrade', 'common'],
  },
  {
    name: 'Power Module',
    icon: '/assets/games/slime-rancher/upgrades/iconShopPower01.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['350'],
    },
  },
  {
    name: 'Power Module Mk II',
    icon: '/assets/games/slime-rancher/upgrades/iconShopPower02.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['650'],
    },
  },
  {
    name: 'Power Module Mk III',
    icon: '/assets/games/slime-rancher/upgrades/iconShopPower03.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['950'],
    },
  },
  {
    name: 'Tank Module',
    icon: '/assets/games/slime-rancher/upgrades/iconShopTank01.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['350'],
    },
  },
  {
    name: 'Tank Module Mk II',
    icon: '/assets/games/slime-rancher/upgrades/iconShopTank02.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['500'],
    },
  },
  {
    name: 'Tank Module Mk III',
    icon: '/assets/games/slime-rancher/upgrades/iconShopTank03.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['750'],
    },
  },
  {
    name: 'Tank Module Ultra',
    icon: '/assets/games/slime-rancher/upgrades/iconShopTank04.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    tags: ['upgrade', 'common'],
  },
  {
    name: 'Treasure Cracker',
    icon: '/assets/games/slime-rancher/upgrades/iconShopTreasure01.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['4500'],
    },
  },
  {
    name: 'Treasure Cracker Mk II',
    icon: '/assets/games/slime-rancher/upgrades/iconShopTreasure02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['9000'],
    },
  },
  {
    name: 'Treasure Cracker Mk III',
    icon: '/assets/games/slime-rancher/upgrades/iconShopTreasure03.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['25000'],
    },
  },
  {
    name: 'Golden Sureshot',
    icon: '/assets/games/slime-rancher/upgrades/iconShopGoldenSureShot.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/upgrades/iconShopGoldenSureshot 1.png',
    tags: ['upgrade', 'common'],
  },
  {
    name: 'Extra Slime Key',
    icon: '/assets/games/slime-rancher/upgrades/iconKeyPedia.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['25000'],
    },
  },
  {
    name: 'The Ranch',
    icon: '/assets/games/slime-rancher/zones/iconZoneRanch.png',
    tags: ['zone', 'common'],
    details: {
      plots: ['8'],
      'gadget-sites': ['27'],
    },
  },
  {
    name: 'The Grotto',
    icon: '/assets/games/slime-rancher/zones/iconExpanGrotto.png',
    tags: ['zone', 'common'],
    details: {
      price: ['1795'],
      plots: ['5'],
      'gadget-sites': ['11'],
      'treasure-pods': {
        'blue-treasure-pod': '1',
        'total-treasure-pods': '1',
      },
    },
  },
  {
    name: 'The Overgrowth',
    icon: '/assets/games/slime-rancher/zones/iconExpanOvergrowth.png',
    tags: ['zone', 'common'],
    details: {
      price: ['1795'],
      plots: ['4'],
      'gadget-sites': ['12'],
    },
  },
  {
    name: 'The Docks',
    icon: '/assets/games/slime-rancher/zones/iconExpanDocks.png',
    tags: ['zone', 'common'],
    details: {
      price: ['5000'],
      plots: ['4'],
      'gadget-sites': ['11'],
    },
  },
  {
    name: 'The Lab',
    icon: '/assets/games/slime-rancher/zones/iconZoneLab.png',
    tags: ['zone', 'common'],
    details: {
      price: ['10000'],
      plots: ['5'],
      'gadget-sites': ['15'],
      'treasure-pods': {
        'green-treasure-pod': '1',
        'total-treasure-pods': '1',
      },
    },
  },
  {
    name: 'Ogdens Retreat',
    icon: '/assets/games/slime-rancher/zones/iconZoneOgdensRetreat.png',
    tags: ['zone', 'common'],
    details: {
      plots: ['6'],
      'gadget-sites': ['14'],
      'unique-resources': ['spicy-tofu'],
      'treasure-pods': {
        'green-treasure-pod': '1',
        'total-treasure-pods': '1',
      },
    },
  },
  {
    name: 'Mochis Manor',
    icon: '/assets/games/slime-rancher/zones/iconZoneMochiEstate.png',
    tags: ['zone', 'common'],
    details: {
      plots: ['5'],
      'gadget-sites': ['14'],
    },
  },
  {
    name: 'Viktors Workshop',
    icon: '/assets/games/slime-rancher/zones/iconZoneViktorLab.png',
    tags: ['zone', 'common'],
    details: {
      plots: ['4'],
      'gadget-sites': ['12'],
      'unique-resources': ['manifold-cube'],
    },
  },
  {
    name: 'The Dry Reef',
    icon: '/assets/games/slime-rancher/zones/iconZoneReef.png',
    tags: ['zone', 'common'],
    details: {
      'gadget-sites': ['76'],
      'treasure-pods': {
        'green-treasure-pod': '7',
        'blue-treasure-pod': '5',
        'purple-treasure-pod': '2',
        'secret-style-treasure-pod': '4',
        'total-treasure-pods': '18',
      },
      'unique-resources': ['deep-brine'],
    },
  },
  {
    name: 'The Moss Blanket',
    icon: '/assets/games/slime-rancher/zones/iconZoneMoss.png',
    tags: ['zone', 'common'],
    details: {
      'gadget-sites': ['64'],
      'unique-resources': ['wild-honey'],
      'treasure-pods': {
        'green-treasure-pod': '6',
        'blue-treasure-pod': '4',
        'purple-treasure-pod': '7',
        'secret-style-treasure-pod': '3',
        'total-treasure-pods': '20',
      },
    },
  },
  {
    name: 'The Indigo Quarry',
    icon: '/assets/games/slime-rancher/zones/iconZoneQuarry.png',
    tags: ['zone', 'common'],
    details: {
      'gadget-sites': ['71'],
      'unique-resources': ['indigonium'],
      'treasure-pods': {
        'green-treasure-pod': '4',
        'blue-treasure-pod': '6',
        'purple-treasure-pod': '6',
        'secret-style-treasure-pod': '2',
        'total-treasure-pods': '18',
      },
    },
  },
  {
    name: 'The Ancient Ruins',
    icon: '/assets/games/slime-rancher/zones/iconZoneRuins.png',
    tags: ['zone', 'common'],
    details: {
      'gadget-sites': ['67'],
      'unique-resources': ['red-echo', 'blue-echo', 'green-echo', 'gold-echo'],
      'treasure-pods': {
        'green-treasure-pod': '2',
        'blue-treasure-pod': '7',
        'purple-treasure-pod': '6',
        'secret-style-treasure-pod': '3',
        'total-treasure-pods': '18',
      },
    },
  },
  {
    name: 'The Glass Desert',
    icon: '/assets/games/slime-rancher/zones/iconZoneDesert.png',
    tags: ['zone', 'common'],
    details: {
      'gadget-sites': ['84'],
      'unique-resources': ['glass-shard', 'pepper-jam', 'silky-sand'],
      'treasure-pods': {
        'blue-treasure-pod': '7',
        'purple-treasure-pod': '15',
        'secret-style-treasure-pod': '4',
        'total-treasure-pods': '26',
      },
    },
  },
  {
    name: 'The Wilds',
    icon: '/assets/games/slime-rancher/zones/iconZoneWilds.png',
    tags: ['zone', 'common'],
    details: {
      'treasure-pods': {
        'green-treasure-pod': '4',
        'blue-treasure-pod': '2',
        'purple-treasure-pod': '2',
        'secret-style-treasure-pod': '1',
        'total-treasure-pods': '9',
      },
    },
  },
  {
    name: 'Nimble Valley',
    icon: '/assets/games/slime-rancher/zones/iconZoneNimbleValley.png',
    tags: ['zone', 'common'],
    details: {
      'treasure-pods': {
        'green-treasure-pod': '2',
        'blue-treasure-pod': '2',
        'purple-treasure-pod': '2',
        'secret-style-treasure-pod': '1',
        'total-treasure-pods': '7',
      },
    },
  },
  {
    name: 'The Slimeulation',
    icon: '/assets/games/slime-rancher/zones/iconZoneSlimeulation.png',
    tags: ['zone', 'common'],
    details: {
      'treasure-pods': {
        'blue-treasure-pod': '7',
        'purple-treasure-pod': '5',
        'secret-style-treasure-pod': '1',
        'total-treasure-pods': '13',
      },
    },
  },
  {
    name: 'The Slime Sea',
    icon: '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['zone', 'common'],
    details: {
      'gadget-sites': ['11'],
      'treasure-pods': {
        'blue-treasure-pod': '1',
        'purple-treasure-pod': '1',
        'secret-style-treasure-pod': '1',
        'total-treasure-pods': '3',
      },
    },
  },
  {
    name: 'The Vaults',
    icon: '/assets/games/slime-rancher/zones/iconHobson.png',
    tags: ['zone', 'common'],
    details: {
      'treasure-pods': {
        'purple-treasure-pod': '46',
        'total-treasure-pods': '46',
      },
    },
  },
  {
    name: 'Novice Drill',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorDrillNovice.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '10',
        'rock-plort': '6',
        'rad-plort': '3',
      },
    },
  },
  {
    name: 'Advanced Drill',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorDrillAdvanced.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '20',
        'rock-plort': '12',
        'rad-plort': '6',
      },
    },
  },
  {
    name: 'Master Drill',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorDrillMaster.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '20',
        'rad-plort': '18',
        'mosaic-plort': '10',
      },
    },
  },
  {
    name: 'Titan Drill',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorDrillOmega.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '25',
        'rad-plort': '20',
        'mosaic-plort': '15',
      },
    },
  },
  {
    name: 'Novice Pump',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorPumpNovice.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '10',
        'tabby-plort': '6',
        'boom-plort': '3',
      },
    },
  },
  {
    name: 'Advanced Pump',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorPumpAdvanced.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '20',
        'tabby-plort': '12',
        'boom-plort': '6',
      },
    },
  },
  {
    name: 'Master Pump',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorPumpMaster.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '20',
        'boom-plort': '18',
        'dervish-plort': '10',
      },
    },
  },
  {
    name: 'Abyssal Pump',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorPumpOmega.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '25',
        'boom-plort': '20',
        'dervish-plort': '15',
      },
    },
  },
  {
    name: 'Novice Apiary',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorApiaryNovice.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '10',
        'phosphor-plort': '6',
        'honey-plort': '3',
      },
    },
  },
  {
    name: 'Advanced Apiary',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorApiaryAdvanced.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '20',
        'phosphor-plort': '12',
        'honey-plort': '6',
      },
    },
  },
  {
    name: 'Master Apiary',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorApiaryMaster.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '20',
        'honey-plort': '18',
        'tangle-plort': '10',
      },
    },
  },
  {
    name: 'Royal Apiary',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetExtractorApiaryOmega.png',
    tags: ['gadget', 'common', 'extractor'],
    details: {
      recipe: {
        'pink-plort': '25',
        'honey-plort': '20',
        'tangle-plort': '15',
      },
    },
  },
  {
    name: 'Drone',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetDrone.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'honey-plort': '18',
        'quantum-plort': '12',
        'hunter-plort': '6',
        'wild-honey': '6',
        jellystone: '6',
        hexacomb: '2',
      },
    },
  },
  {
    name: 'Advanced Drone',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetAdvancedDrone.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'honey-plort': '18',
        'quantum-plort': '12',
        'hunter-plort': '6',
        'manifold-cube': '6',
        'royal-jelly': '1',
        hexacomb: '2',
      },
    },
  },
  {
    name: 'Med Station',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetMedStation.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetMedStation.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'pink-plort': '25',
        'rad-plort': '25',
        jellystone: '6',
        'wild-honey': '4',
      },
    },
  },
  {
    name: 'Hydro Turret',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetHydroTurret.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetHydroTurret.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'boom-plort': '12',
        'puddle-plort': '6',
        'deep-brine': '8',
        'spiral-steam': '3',
      },
    },
  },
  {
    name: 'Super Hydro Turret',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetHydroTurretSuper.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetHydroTurretSuper.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'boom-plort': '20',
        'puddle-plort': '12',
        'silky-sand': '12',
        'spiral-steam': '5',
      },
    },
  },
  {
    name: 'Taming Bell',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTamingBell.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTamingBell.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'pink-plort': '20',
        'hunter-plort': '12',
        'wild-honey': '8',
        'slime-fossil': '4',
      },
    },
  },
  {
    name: 'Spring Pad',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetSpringPad.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gadgets/iconGadgetSpringPad.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'tabby-plort': '12',
        'hunter-plort': '6',
        'primordy-oil': '8',
        'wild-honey': '8',
      },
    },
  },
  {
    name: 'Potted Tactus',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetPottedTactus.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'tangle-plort': '10',
        'wild-honey': '8',
        'pepper-jam': '8',
        hexacomb: '4',
      },
    },
  },
  {
    name: 'Novice Gordo Snare',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetGordoSnareNovice.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetGordoSnareNovice 1.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'hunter-plort': '5',
        'primordy-oil': '10',
        'buzz-wax': '10',
        jellystone: '10',
      },
    },
  },
  {
    name: 'Advanced Gordo Snare',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetGordoSnareAdvanced.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetGordoSnareAdvanced 1.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'hunter-plort': '10',
        'silky-sand': '10',
        'pepper-jam': '10',
        'glass-shard': '10',
      },
    },
  },
  {
    name: 'Master Gordo Snare',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetGordoSnareMaster.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetGordoSnareMaster 1.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'hunter-plort': '20',
        'spiral-steam': '10',
        hexacomb: '10',
        'slime-fossil': '10',
      },
    },
  },
  {
    name: 'Chicken Cloner',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetChickenCloner.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'tabby-plort': '20',
        'boom-plort': '15',
        'quantum-plort': '10',
        'manifold-cube': '6',
        hexacomb: '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Portable Water Tap',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWaterTap.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gadgets/iconGadgetWaterTap.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'puddle-plort': '15',
        'deep-brine': '10',
        'manifold-cube': '4',
        'spiral-steam': '5',
      },
    },
  },
  {
    name: 'Portable Scareslime',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetPortableScareslime.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetPortableScareslime.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'pink-plort': '30',
        'boom-plort': '10',
        'primordy-oil': '10',
        'wild-honey': '5',
        'manifold-cube': '3',
      },
    },
  },
  {
    name: 'Dash Pad',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetDashPad.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gadgets/iconGadgetDashPad.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'quantum-plort': '20',
        'manifold-cube': '4',
        'spiral-steam': '5',
      },
    },
  },
  {
    name: 'Fruit Slime Bait',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetBaitPogo.png',
    'sr2-icon': '/assets/games/slime-rancher-2/gadgets/iconGadgetBaitPogo.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'phosphor-plort': '20',
        'honey-plort': '10',
        'quantum-plort': '5',
        'wild-honey': '10',
        'manifold-cube': '3',
      },
    },
  },
  {
    name: 'Veggie Slime Bait',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetBaitCarrot.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetBaitCarrot.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'rock-plort': '20',
        'rad-plort': '10',
        'crystal-plort': '5',
        'deep-brine': '10',
        'manifold-cube': '3',
      },
    },
  },
  {
    name: 'Meat Slime Bait',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetBaitChicken.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetBaitChicken.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        'tabby-plort': '20',
        'boom-plort': '10',
        'hunter-plort': '5',
        indigonium: '10',
        'manifold-cube': '3',
      },
    },
  },
  {
    name: 'Pink Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportPink.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportPink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'pink-plort': '25',
        'deep-brine': '10',
        hexacomb: '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Blue Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportBlue.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportBlue.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'rock-plort': '25',
        indigonium: '10',
        hexacomb: '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Grey Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportGrey.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportGrey.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'tabby-plort': '25',
        indigonium: '10',
        'spiral-steam': '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Violet Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportViolet.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportViolet.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'phosphor-plort': '25',
        'wild-honey': '10',
        'spiral-steam': '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Green Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportGreen.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportGreen.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'rad-plort': '25',
        indigonium: '10',
        hexacomb: '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Red Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportRed.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportRed.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'boom-plort': '25',
        'wild-honey': '10',
        'spiral-steam': '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Amber Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportAmber.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportAmber.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'honey-plort': '25',
        'wild-honey': '10',
        hexacomb: '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Berry Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportBerry.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportBerry.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'crystal-plort': '25',
        'glass-shard': '10',
        'spiral-steam': '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Cocoa Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportCocoa.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'hunter-plort': '25',
        'pepper-jam': '10',
        'spiral-steam': '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Butterscotch Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportButterscotch.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'quantum-plort': '25',
        'silky-sand': '10',
        hexacomb: '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Gold Teleporter',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetTeleportGold.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportGold.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'gold-plort': '1',
        'glass-shard': '10',
        'spiral-steam': '5',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Pink Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotPink.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotPink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'pink-plort': '20',
        'primordy-oil': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Blue Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotBlue.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotBlue.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'rock-plort': '20',
        jellystone: '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Grey Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotGrey.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotGrey.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'tabby-plort': '20',
        'buzz-wax': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Violet Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotViolet.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotViolet.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'phosphor-plort': '20',
        'primordy-oil': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Green Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotGreen.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotGreen.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'rad-plort': '20',
        jellystone: '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Red Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotRed.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotRed.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'boom-plort': '20',
        'buzz-wax': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Amber Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotAmber.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotAmber.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'honey-plort': '20',
        'buzz-wax': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Berry Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotBerry.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotBerry.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'crystal-plort': '20',
        'glass-shard': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Cocoa Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotCocoa.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'hunter-plort': '20',
        'pepper-jam': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Butterscotch Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotButterscotch.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'quantum-plort': '20',
        'silky-sand': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Gold Warp Depot',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotGold.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotGold.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'gold-plort': '1',
        'pepper-jam': '6',
        'slime-fossil': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Refinery Link',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetRefineryLink.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetRefineryLink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'rad-plort': '15',
        'crystal-plort': '15',
        'primordy-oil': '12',
        hexacomb: '2',
        'royal-jelly': '1',
      },
    },
  },
  {
    name: 'Market Link',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetMarketLink.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetMarketLink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        'pink-plort': '25',
        jellystone: '6',
        hexacomb: '3',
        'royal-jelly': '1',
      },
    },
  },
  {
    name: 'Pink Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampPink.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'pink-plort': '12',
        'primordy-oil': '8',
        'deep-brine': '8',
      },
    },
  },
  {
    name: 'Blue Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampBlue.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampBlue.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'rock-plort': '12',
        'primordy-oil': '8',
        indigonium: '8',
      },
    },
  },
  {
    name: 'Grey Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampGrey.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'tabby-plort': '12',
        'primordy-oil': '8',
        'deep-brine': '8',
      },
    },
  },
  {
    name: 'Violet Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampViolet.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'pink-plort': '12',
        'buzz-wax': '8',
        'wild-honey': '8',
      },
    },
  },
  {
    name: 'Green Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampGreen.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampGreen.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'rad-plort': '12',
        'primordy-oil': '8',
        indigonium: '8',
      },
    },
  },
  {
    name: 'Red Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampRed.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampRed.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'boom-plort': '12',
        jellystone: '8',
        'deep-brine': '8',
      },
    },
  },
  {
    name: 'Amber Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampAmber.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'honey-plort': '12',
        'buzz-wax': '8',
        indigonium: '8',
      },
    },
  },
  {
    name: 'Berry Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampBerry.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'crystal-plort': '12',
        jellstone: '8',
        'glass-shard': '8',
      },
    },
  },
  {
    name: 'Cocoa Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampCocoa.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'hunter-plort': '12',
        'buzz-wax': '8',
        'pepper-jam': '8',
      },
    },
  },
  {
    name: 'Butterscotch Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampButterscotch.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'quantum-plort': '12',
        'primordy-oil': '8',
        'silky-sand': '8',
      },
    },
  },
  {
    name: 'Gold Slime Lamp',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampGold.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampGold.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '12',
        'gold-plort': '1',
        'buzz-wax': '8',
        'silky-sand': '8',
      },
    },
  },
  {
    name: 'Sponge Tree',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSpongeTree1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'tabby-plort': '10',
        'deep-brine': '4',
        'slime-fossil': '2',
      },
    },
  },
  {
    name: 'Sponge Shrub',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSpongeShrub1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'phosphor-plort': '10',
        'deep-brine': '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Pink Coral Columns',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorPinkCoralColumns1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'rock-plort': '10',
        jellystone: '4',
        'spiral-steam': '1',
      },
    },
  },
  {
    name: 'Coral Grass Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorCoralGrassPatch1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'puddle-plort': '3',
        'deep-brine': '4',
        hexacomb: '1',
      },
    },
  },
  {
    name: 'Mossy Tree',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorMossyTree1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'tabby-plort': '20',
        'honey-plort': '10',
        'wild-honey': '4',
        'slime-fossil': '2',
      },
    },
  },
  {
    name: 'Mossy Tree Stump',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorMossyTreeStump1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'tabby-plort': '20',
        'boom-plort': '10',
        'wild-honey': '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Glow Cones',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorGlowCones1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'phosphor-plort': '10',
        'buzz-wax': '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Wildflower Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorWildFlowerPatch1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'honey-plort': '10',
        'wild-honey': '4',
        hexacomb: '1',
      },
    },
  },
  {
    name: 'Jumbo Shroom',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorJumboShroom1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'hunter-plort': '6',
        indigonium: '4',
        hexacomb: '2',
      },
    },
  },
  {
    name: 'Minty Grass Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorMintyGrassPatch.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'puddle-plort': '3',
        indigonium: '4',
        hexacomb: '1',
      },
    },
  },
  {
    name: 'Blue Coral Columns',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorBlueCoralColumns1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'rock-plort': '10',
        jellystone: '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Hexium Formation',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorHexiumFormation.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rad-plort': '20',
        'crystal-plort': '10',
        indigonium: '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Crystal Cluster',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorCrystalCluster1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'crystal-plort': '10',
        indigonium: '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Fireflower Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorFireFlowerPatch1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'boom-plort': '20',
        'crystal-plort': '10',
        indigonium: '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Sunburst Tree',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSunburstTree1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'tabby-plort': '20',
        'quantum-plort': '10',
        'wild-honey': '4',
        'slime-fossil': '2',
      },
    },
  },
  {
    name: 'Verdant Grass Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorVerdantGrass1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'quantum-plort': '3',
        'deep-brine': '4',
        hexacomb: '1',
      },
    },
  },
  {
    name: 'Star Flower Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorStarFlowerPatch1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'honey-plort': '20',
        'quantum-plort': '10',
        'wild-honey': '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Ruined Pillar',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorRuinedPillar1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rock-plort': '20',
        'quantum-plort': '10',
        jellystone: '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Glow Sticks',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorGlowSticks1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'phosphor-plort': '20',
        'quantum-plort': '10',
        'primordy-oil': '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Crystal Sconce',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorCrystalSconce1.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'crystal-plort': '15',
        'quantum-plort': '15',
        jellystone: '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Fiery Glass Sculpture',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorGlassFiery.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'mosaic-plort': '20',
        'fire-plort': '15',
        'glass-shard': '5',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Thundering Glass Sculpture',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorGlassThundering.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'mosaic-plort': '20',
        'fire-plort': '15',
        'glass-shard': '5',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Towering Glass Sculpture',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorGlassTowering.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'mosaic-plort': '20',
        'fire-plort': '15',
        'glass-shard': '5',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Palm Tree',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorPalmTree.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'tangle-plort': '20',
        'puddle-plort': '15',
        'silky-sand': '4',
        hexacomb: '2',
      },
    },
  },
  {
    name: 'Palm Sprout',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorPalmSprout.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'tangle-plort': '20',
        'puddle-plort': '15',
        'silky-sand': '4',
        hexacomb: '2',
      },
    },
  },
  {
    name: 'Coil Grass',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorCoilGrass.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'tangle-plort': '20',
        'puddle-plort': '15',
        'pepper-jam': '4',
        'spiral-steam': '1',
      },
    },
  },
  {
    name: 'Ruined Desert Column',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorRuinedDesertColumn.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'dervish-plort': '20',
        'rock-plort': '15',
        'pepper-jam': '4',
        'slime-fossil': '2',
      },
    },
  },
  {
    name: 'Ruined Desert Blocks',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorRuinedDesertBlocks.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'dervish-plort': '15',
        'rock-plort': '10',
        'pepper-jam': '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Cave Rocks',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorWildsCaveRocks.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'saber-plort': '20',
        'crystal-plort': '10',
        indigonium: '4',
        'slime-fossil': '2',
      },
    },
  },
  {
    name: 'Glow Rocks',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorWildsGlowRocks.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rock-plort': '20',
        'phosphor-plort': '10',
        jellystone: '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Carved Rocks',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorWildsMossyRocks.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'saber-plort': '20',
        'rock-plort': '10',
        'primordy-oil': '4',
        'slime-fossil': '2',
      },
    },
  },
  {
    name: 'Peach Cloud Tree',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorWildsTree.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'saber-plort': '10',
        'deep-brine': '4',
        hexacomb: '2',
      },
    },
  },
  {
    name: 'Wild Coral Columns',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorWildsCoralColumn.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'rock-plort': '10',
        jellystone: '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Wild Grass Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorWildsGrassPatch.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'saber-plort': '15',
        'puddle-plort': '3',
        'deep-brine': '4',
        hexacomb: '1',
      },
    },
  },
  {
    name: 'Cotton Flower Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorWildsFlowerPatch.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'honey-plort': '10',
        'wild-honey': '4',
        hexacomb: '1',
      },
    },
  },
  {
    name: 'Nimble Grass Patch',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorNimbleGrassPatch.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rock-plort': '20',
        'puddle-plort': '10',
        'deep-brine': '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Nimble Needle Tree',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorNimbleNeedleTree.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rock-plort': '20',
        'rad-plort': '10',
        'deep-brine': '4',
        hexacomb: '2',
      },
    },
  },
  {
    name: 'Small Magneticore Array',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSmallMagneticoreArray.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rock-plort': '20',
        'crystal-plort': '10',
        jellystone: '4',
        'slime-fossil': '2',
      },
    },
  },
  {
    name: 'Tall Magneticore Array',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorTallMagneticoreArray.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rock-plort': '20',
        'boom-plort': '10',
        jellystone: '4',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Sturdy Magneticore Array',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSturdyMagneticoreArray.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rock-plort': '20',
        'crystal-plort': '10',
        indigonium: '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Ornate Magneticore Array',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorOrnateMagneticoreArray.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'rock-plort': '20',
        'rad-plort': '10',
        indigonium: '4',
        'spiral-steam': '2',
      },
    },
  },
  {
    name: 'Battery Tower',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorBatteryTower.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'rad-plort': '10',
        jellystone: '4',
        'manifold-cube': '2',
      },
    },
  },
  {
    name: 'Digi Panel',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorDigiPanel.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'quantum-plort': '10',
        indigonium: '4',
        'manifold-cube': '4',
      },
    },
  },
  {
    name: 'Digi Shrub',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorDigiTree.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'quantum-plort': '10',
        'deep-brine': '4',
        'manifold-cube': '4',
      },
    },
  },
  {
    name: 'Digi Tree',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorDigiBigTree.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'quantum-plort': '10',
        'deep-brine': '4',
        'manifold-cube': '4',
      },
    },
  },
  {
    name: 'Field Kit',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorFieldKit.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'rock-plort': '15',
        'primordy-oil': '4',
        'manifold-cube': '2',
      },
    },
  },
  {
    name: 'Supply Drop',
    icon: '/assets/games/slime-rancher/gadgets/iconDecorSupplyDrop.png',
    tags: ['gadget', 'common', 'decoration'],
    details: {
      recipe: {
        'pink-plort': '20',
        'tabby-plort': '15',
        'buzz-wax': '4',
        'manifold-cube': '2',
      },
    },
  },
  {
    name: 'Slimeball Hoop',
    icon: '/assets/games/slime-rancher/gadgets/iconCurioSlimeballHoop.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'tabby-plort': '65',
        'hunter-plort': '25',
        jellystone: '25',
        'spiral-steam': '12',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Slime Stage',
    icon: '/assets/games/slime-rancher/gadgets/iconCurioSlimeStage.png',
    'sr2-icon':
      '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeStage.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        indigonium: '8',
        'spiral-steam': '8',
        'royal-jelly': '1',
      },
    },
  },
  {
    name: 'Echo Net',
    icon: '/assets/games/slime-rancher/gadgets/iconGadgetEchoNet.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'honey-plort': '15',
        'quantum-plort': '15',
        'spiral-steam': '5',
        hexacomb: '5',
        'slime-fossil': '5',
      },
    },
  },
  {
    name: 'Handlebar Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionHandlebar.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'tabby-plort': '25',
        'spiral-steam': '12',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Shady Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionShades.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'phosphor-plort': '25',
        'primordy-oil': '25',
        hexacomb: '12',
        'strange-diamond': '2',
      },
    },
  },
  {
    name: 'Clip On Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionClipOn.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'puddle-plort': '25',
        indigonium: '25',
        'spiral-steam': '12',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Googly Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionGooglyEyes.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'honey-plort': '25',
        'deep-brine': '25',
        hexacomb: '12',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Smart Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionSmarty.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'crystal-plort': '25',
        jellystone: '25',
        'spiral-steam': '12',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Serious Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionSerious.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'rock-plort': '25',
        'deep-brine': '25',
        hexacomb: '12',
        'strange-diamond': '2',
      },
    },
  },
  {
    name: 'Dandy Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionDandy.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'tabby-plort': '25',
        'buzz-wax': '25',
        'slime-fossil': '12',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Cute Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionCute.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'honey-plort': '25',
        'buzz-wax': '25',
        'slime-fossil': '12',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Royal Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionRoyal.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'crystal-plort': '25',
        'primordy-oil': '25',
        hexacomb: '12',
        'strange-diamond': '2',
      },
    },
  },
  {
    name: 'Fashion Pod Remover',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionRemover.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '25',
        'deep-brine': '5',
        'wild-honey': '5',
        indigonium: '5',
      },
    },
  },
  {
    name: 'Scuba Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionScuba.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '15',
        'puddle-plort': '15',
        'deep-brine': '15',
        'wild-honey': '8',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Party Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionParty.png',
    tags: ['gadget', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '15',
        'boom-plort': '15',
        'wild-honey': '15',
        'slime-fossil': '8',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Piratey Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionPiratey.png',
    tags: ['gadget', 'dlc', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '10',
        'rad-plort': '10',
        'deep-brine': '5',
      },
    },
  },
  {
    name: 'Heroic Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionHeroic.png',
    tags: ['gadget', 'dlc', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '10',
        'honey-plort': '10',
        indigonium: '5',
      },
    },
  },
  {
    name: 'Galactic Fashion Pod',
    icon: '/assets/games/slime-rancher/gadgets/iconFashionGalactic.png',
    tags: ['gadget', 'dlc', 'common', 'curio'],
    details: {
      recipe: {
        'pink-plort': '10',
        'boom-plort': '10',
        'wild-honey': '5',
      },
    },
  },
  {
    name: 'The Dry Reef Crate',
    icon: '/assets/games/slime-rancher/crates/the-dry-reef-crate.png',
    tags: ['crate', 'common'],
    locations: {
      spawn: ['the-dry-reef', 'the-slime-sea'],
      gordo: ['the-dry-reef'],
    },
    details: {
      'possible-drops (4 to 6)': {
        newbucks: '10',
        'newbucks!': '25',
        'pogo-fruit': '1',
        'hen-hen': '1',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'tabby-slime': '1',
        'rock-slime': '1',
        cuberry: '1',
        'heart-beet': '1',
        'stony-hen': '1',
        roostro: '1',
        'gold-slime': '1',
      },
      'source-gordo': ['pink-gordo', 'phosphor-gordo', 'tabby-gordo'],
    },
  },
  {
    name: 'The Moss Blanket Crate',
    icon: '/assets/games/slime-rancher/crates/the-moss-blanket-crate.png',
    tags: ['crate', 'common'],
    locations: {
      spawn: ['the-moss-blanket'],
      gordo: ['the-moss-blanket'],
    },
    details: {
      'possible-drops (4 to 6)': {
        newbucks: '10',
        'newbucks!': '25',
        'pogo-fruit': '1',
        'hen-hen': '1',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'tabby-slime': '1',
        'rock-slime': '1',
        cuberry: '1',
        'heart-beet': '1',
        'stony-hen': '1',
        roostro: '1',
        'gold-slime': '1',
        'mint-mango': '1',
        'hunter-slime': '1',
      },
      'source-gordo': ['honey-gordo', 'hunter-gordo'],
    },
  },
  {
    name: 'The Indigo Quarry Crate',
    icon: '/assets/games/slime-rancher/crates/the-indigo-quarry-crate.png',
    tags: ['crate', 'common'],
    locations: {
      spawn: ['the-indigo-quarry'],
      gordo: ['the-indigo-quarry'],
    },
    details: {
      'possible-drops (4 to 6)': {
        newbucks: '10',
        'newbucks!': '25',
        'pogo-fruit': '1',
        'hen-hen': '1',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'tabby-slime': '1',
        'rock-slime': '1',
        cuberry: '1',
        'heart-beet': '1',
        'stony-hen': '1',
        roostro: '1',
        'gold-slime': '1',
        'odd-onion': '1',
        'crystal-slime': '1',
        'oca-oca': '1',
      },
      'source-gordo': ['rock-gordo', 'rad-gordo', 'crystal-gordo'],
    },
  },
  {
    name: 'The Ancient Ruins Crate',
    icon: '/assets/games/slime-rancher/crates/the-ancient-ruins-crate.png',
    tags: ['crate', 'common'],
    locations: {
      spawn: ['the-ancient-ruins'],
      gordo: ['the-ancient-ruins'],
    },
    details: {
      'possible-drops (4 to 6)': {
        newbucks: '10',
        'newbucks!': '25',
        'pogo-fruit': '1',
        'hen-hen': '1',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'tabby-slime': '1',
        'rock-slime': '1',
        cuberry: '1',
        'heart-beet': '1',
        'stony-hen': '1',
        roostro: '1',
        'gold-slime': '1',
        'phase-lemon': '1',
      },
      'source-gordo': ['boom-gordo', 'quantum-gordo'],
    },
  },
  {
    name: 'The Glass Desert Crate',
    icon: '/assets/games/slime-rancher/crates/the-glass-desert-crate.png',
    tags: ['crate', 'common'],
    locations: {
      spawn: ['the-glass-desert'],
      gordo: ['the-glass-desert'],
    },
    details: {
      'possible-drops (4 to 6)': {
        newbucks: '10',
        'newbucks!': '25',
        'pogo-fruit': '1',
        'hen-hen': '1',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'tabby-slime': '1',
        'rock-slime': '1',
        cuberry: '1',
        'heart-beet': '1',
        'stony-hen': '1',
        roostro: '1',
        'gold-slime': '1',
        'prickle-pear': '1',
        'silver-parsnip': '1',
      },
      'source-gordo': ['dervish-gordo', 'tangle-gordo', 'mosaic-gordo'],
    },
  },
  {
    name: 'The Wilds Crate',
    icon: '/assets/games/slime-rancher/crates/the-wilds-crate.png',
    tags: ['crate', 'common'],
    locations: {
      spawn: ['the-wilds'],
    },
    details: {
      'possible-drops (4 to 6)': {
        newbucks: '10',
        'newbucks!': '25',
        'pogo-fruit': '1',
        'hen-hen': '1',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'tabby-slime': '1',
        'rock-slime': '1',
        cuberry: '1',
        'heart-beet': '1',
        'stony-hen': '1',
        roostro: '1',
        'gold-slime': '1',
        kookadoba: '1',
      },
    },
  },
  {
    name: 'Slime Science Crate',
    icon: '/assets/games/slime-rancher/crates/slime-science-crate.png',
    tags: ['crate', 'common'],
    locations: {
      gordo: ['the-moss-blanket', 'the-indigo-quarry', 'the-glass-desert'],
    },
    details: {
      'possible-drops (4 to 6)': {
        jellystone: '1',
        'primordy-oil': '1',
        'buzz-wax': '1',
        'slime-fossil': '1',
        'spiral-steam': '1',
        hexacomb: '1',
        'strange-diamond': '1',
        'lava-dust': '1',
        'royal-jelly': '1',
      },
      'source-gordo': [
        'hunter-gordo',
        'crystal-gordo',
        'dervish-gordo',
        'tangle-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Party Crate',
    icon: '/assets/games/slime-rancher/crates/party-crate.png',
    tags: ['crate', 'event', 'common'],
    locations: {
      gordo: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
    },
    details: {
      drops: {
        ornament: '1',
      },
      'source-gordo': ['party-gordo'],
    },
  },
  {
    name: 'Newbucks',
    icon: '/assets/games/slime-rancher/misc/iconNewBuck.png',
    tags: ['misc', 'common'],
    locations: {
      crate: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
        'the-wilds',
        'the-slime-sea',
      ],
      'range-exchange': ['the-ranch', 'mochis-manor'],
    },
  },
  {
    name: 'Slime Key',
    icon: '/assets/games/slime-rancher/misc/iconKeyPedia.png',
    tags: ['misc', 'common'],
    locations: {
      gordo: [
        'the-dry-reef',
        'the-moss-blanket',
        'the-indigo-quarry',
        'the-ancient-ruins',
        'the-glass-desert',
      ],
    },
    details: {
      'source-gordo': [
        'pink-gordo',
        'phosphor-gordo',
        'honey-gordo',
        'hunter-gordo',
        'rad-gordo',
        'crystal-gordo',
        'boom-gordo',
        'quantum-gordo',
        'dervish-gordo',
        'mosaic-gordo',
      ],
    },
  },
  {
    name: 'Ancient Water',
    icon: '/assets/games/slime-rancher/misc/iconMagicWater.png',
    tags: ['misc', 'common'],
    locations: {
      spawn: ['the-glass-desert'],
    },
  },
  {
    name: 'Slooow Field',
    icon: '/assets/games/slime-rancher/misc/iconValleyAmmo3.png',
    tags: ['misc', 'common'],
    locations: {
      spawn: ['nimble-valley'],
    },
    details: {
      'max-harvest': ['3'],
    },
  },
  {
    name: 'Debug Spray',
    icon: '/assets/games/slime-rancher/misc/iconDebugSpray.png',
    tags: ['misc', 'common'],
    locations: {
      spawn: ['the-slimeulation'],
    },
    details: {
      'max-harvest': ['15'],
    },
  },
  {
    name: 'Bug Report',
    icon: '/assets/games/slime-rancher/misc/iconDebugReport.png',
    tags: ['misc', 'common'],
  },
];

export const cards = processCards(rawCards);
