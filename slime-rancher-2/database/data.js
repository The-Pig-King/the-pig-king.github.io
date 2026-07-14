import { processCards } from '../../js/data-helpers.js';

export const extraIcons = {
  'depends-on-source-slimes':
    '/assets/games/slime-rancher-2/extra/depends-on-source-slimes.png',
  fruit: '/assets/games/slime-rancher-2/extra/fruit.png',
  meat: '/assets/games/slime-rancher-2/extra/meat.png',
  nectar: '/assets/games/slime-rancher-2/extra/nectar.png',
  rancher: '/assets/games/slime-rancher-2/extra/rancher.png',
  'shadow-plort-door':
    '/assets/games/slime-rancher-2/extra/shadow-plort-door.png',
  slime: '/assets/games/slime-rancher-2/extra/slime.png',
  'treasure-pod': '/assets/games/slime-rancher-2/extra/treasure-pod.png',
  veggie: '/assets/games/slime-rancher-2/extra/veggie.png',
  none: '/assets/games/slime-rancher/extra/none.png',
};

const rawCards = [
  {
    name: 'Pink Slime',
    'secret-style-name': 'Sparkly',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimePink.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimePink.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePinkExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimePink.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
      weather: [
        'the-sanctuary',
        'the-rainbow-fields',
        'ember-valley',
        'starlight-strand',
        'powderfall-bluffs',
      ],
      worldgen: ['the-conservatory'],
      pot: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      gordo: ['the-rainbow-fields'],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat'],
      'fav-toy': ['beach-ball'],
      plort: ['pink-plort'],
      largoable: ['yes'],
      gordo: ['pink-gordo'],
    },
  },
  {
    name: 'Cotton Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeCotton.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeCotton.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['the-rainbow-fields', 'starlight-strand', 'powderfall-bluffs'],
      weather: ['powderfall-bluffs'],
      pot: ['the-rainbow-fields', 'dream-land'],
      gordo: ['the-rainbow-fields'],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['water-lettuce'],
      'fav-toy': ['bouncy-ball'],
      plort: ['cotton-plort'],
      largoable: ['yes'],
      gordo: ['cotton-gordo'],
    },
  },
  {
    name: 'Tabby Slime',
    'secret-style-name': 'Tiger',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeTabby.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeTabby.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeTabbyExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeTabby.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['the-rainbow-fields', 'ember-valley'],
      weather: ['ember-valley'],
      pot: ['the-rainbow-fields', 'ember-valley', 'impossible-sky'],
      gordo: ['ember-valley'],
    },
    details: {
      diet: ['meat'],
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
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimePhosphor.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimePhosphor.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePhosphorExotic.png',
    'sr-icon':
      '/assets/games/slime-rancher/slimes/regular/iconSlimePhosphor.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
      pot: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
      ],
      gordo: ['the-rainbow-fields'],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['cuberry'],
      'fav-toy': ['night-light'],
      plort: ['phosphor-plort'],
      largoable: ['yes'],
      gordo: ['phosphor-gordo'],
    },
  },
  {
    name: 'Angler Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeAngler.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeAngler.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley'],
      weather: ['starlight-strand'],
      pot: ['waterworks'],
      gordo: ['starlight-strand'],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['sea-hen'],
      'fav-toy': ['plushie-puffer-fish'],
      plort: ['angler-plort'],
      largoable: ['yes'],
      gordo: ['angler-gordo'],
    },
  },
  {
    name: 'Rock Slime',
    'secret-style-name': 'Heavy Metal',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeRock.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeRock.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeRockExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeRock.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley', 'powderfall-bluffs'],
      weather: ['ember-valley'],
      pot: ['starlight-strand', 'impossible-sky', 'the-terrarium'],
      gordo: ['ember-valley'],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['heart-beet'],
      'fav-toy': ['big-rock'],
      plort: ['rock-plort'],
      largoable: ['yes'],
      gordo: ['rock-gordo'],
    },
  },
  {
    name: 'Batty Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeBatty.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeBatty.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['ember-valley'],
      pot: ['ember-valley', 'lava-depths'],
      gordo: ['ember-valley'],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['pomegranite'],
      'fav-toy': ['full-moon-ball'],
      plort: ['batty-plort'],
      largoable: ['yes'],
      gordo: ['batty-gordo'],
    },
  },
  {
    name: 'Flutter Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeFlutter.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeFlutter.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['starlight-strand', 'the-terrarium'],
      gordo: ['starlight-strand'],
    },
    details: {
      diet: ['nectar'],
      'fav-food': ['moondew-nectar'],
      'fav-toy': ['glowbug'],
      plort: ['flutter-plort'],
      largoable: ['yes'],
      gordo: ['flutter-gordo'],
    },
  },
  {
    name: 'Ringtail Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeRingtail.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeRingtail.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley', 'powderfall-bluffs'],
      gordo: ['starlight-strand'],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat'],
      'fav-toy': ['trashcan'],
      plort: ['ringtail-plort'],
      largoable: ['yes'],
      gordo: ['ringtail-gordo'],
    },
  },
  {
    name: 'Boom Slime',
    'secret-style-name': 'Arcane',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeBoom.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeBoom.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeBoomExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeBoom.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: ['ember-valley', 'powderfall-bluffs'],
      pot: ['lava-depths'],
      gordo: ['ember-valley'],
    },
    details: {
      diet: ['meat'],
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
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeHoney.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeHoney.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeHoneyExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeHoney.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['starlight-strand'],
      weather: ['starlight-strand'],
      pot: ['starlight-strand'],
      gordo: ['starlight-strand'],
    },
    details: {
      diet: ['fruit'],
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
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimePuddle.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimePuddle.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimePuddleExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimePuddle.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley', 'powderfall-bluffs'],
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
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeCrystal.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeCrystal.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeCrystalExotic.png',
    'sr-icon':
      '/assets/games/slime-rancher/slimes/regular/iconSlimeCrystal.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: ['ember-valley', 'powderfall-bluffs'],
      pot: ['lava-depths'],
      gordo: ['ember-valley'],
    },
    details: {
      diet: ['veggie'],
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
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeHunter.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeHunter.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeHunterExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeHunter.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['starlight-strand', 'powderfall-bluffs'],
      pot: ['powderfall-bluffs', 'waterworks'],
      gordo: ['starlight-strand'],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['roostro'],
      'fav-toy': ['stuffed-chicken'],
      plort: ['hunter-plort'],
      largoable: ['yes'],
      gordo: ['hunter-gordo'],
    },
  },
  {
    name: 'Fire Slime',
    'secret-style-name': 'Devilish',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeFire.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeFire.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeFireExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeFire.png',
    tags: ['slime', 'common', 'harmful'],
    locations: {
      spawn: ['ember-valley'],
    },
    details: {
      diet: ['ash'],
      'fav-toy': ['charcoal-brick'],
      plort: ['fire-plort'],
      largoable: ['no'],
    },
  },
  {
    name: 'Lucky Slime',
    'secret-style-name': 'Guardian',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeLucky.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeLuckyExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeLucky.png',
    tags: ['slime', 'rare', 'docile'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['meat'],
      largoable: ['no'],
    },
  },
  {
    name: 'Gold Slime',
    'secret-style-name': 'Gilded',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeGold.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeGoldExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeGold.png',
    tags: ['slime', 'rare', 'docile'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      plort: ['gold-plort'],
      largoable: ['no'],
    },
  },
  {
    name: 'Saber Slime',
    'secret-style-name': 'Pre-Jellasic',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeSaber.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeSaber.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeSaberexotic.png',
    'sr-icon':
      '/assets/games/slime-rancher/slimes/regular/iconSlimeSaberSketch.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['powderfall-bluffs'],
      weather: ['powderfall-bluffs'],
      pot: ['powderfall-bluffs'],
      gordo: ['powderfall-bluffs'],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['thundercluck-hen'],
      'fav-toy': ['stego-buddy'],
      plort: ['saber-plort'],
      largoable: ['yes'],
      gordo: ['saber-gordo'],
    },
  },
  {
    name: 'Tangle Slime',
    'secret-style-name': 'Nightshade',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeTangle.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeTangle.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeTangleExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeTangle.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      weather: [
        'the-sanctuary',
        'the-rainbow-fields',
        'ember-valley',
        'starlight-strand',
        'powderfall-bluffs',
      ],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['painted-hen'],
      'fav-toy': ['sol-mate'],
      plort: ['tangle-plort'],
      largoable: ['yes'],
      gordo: ['tangle-gordo'],
    },
  },
  {
    name: 'Dervish Slime',
    'secret-style-name': 'Nebula',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeDervish.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeDervish.png',
    'secret-style-icon':
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeDervishExotic.png',
    'sr-icon':
      '/assets/games/slime-rancher/slimes/regular/iconSlimeDervish.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      weather: [
        'the-sanctuary',
        'the-rainbow-fields',
        'ember-valley',
        'starlight-strand',
        'powderfall-bluffs',
      ],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['prickle-pear'],
      'fav-toy': ['gyro-top'],
      plort: ['dervish-plort'],
      largoable: ['yes'],
      gordo: ['dervish-gordo'],
    },
  },
  {
    name: 'Yolky Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeYolky.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeYolky.png',
    tags: ['slime', 'uncommon', 'docile'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
    details: {
      'fav-toy': ['happy-plush-bread-loaf'],
      plort: ['yolky-plort'],
      largoable: ['no'],
    },
  },
  {
    name: 'Sloomber Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeSloomber.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeSloomber.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['dream-land'],
      pot: ['dream-land'],
      gordo: ['dream-land'],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['candied-hen'],
      'fav-toy': ['stuffed-sheep'],
      plort: ['sloomber-plort'],
      largoable: ['yes'],
      gordo: ['sloomber-gordo'],
    },
  },
  {
    name: 'Twin Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeTwin.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeTwin.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['impossible-sky'],
      pot: ['impossible-sky', 'dream-land', 'the-terrarium'],
      gordo: ['impossible-sky'],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['polaricherry'],
      'fav-toy': ['spinner-toy'],
      plort: ['twin-plort'],
      largoable: ['yes'],
      gordo: ['twin-gordo'],
    },
  },
  {
    name: 'Hyper Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeHyper.png',
    'radiant-icon':
      '/assets/games/slime-rancher-2/slimes/radiant/iconRadiantSlimeHyper.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['the-terrarium'],
      pot: ['the-terrarium'],
      gordo: ['the-terrarium'],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['turbo-tater'],
      'fav-toy': ['rocket-ship'],
      plort: ['hyper-plort'],
      largoable: ['yes'],
      gordo: ['hyper-gordo'],
    },
  },
  {
    name: 'Shadow Slime',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeShadow.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: [
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      'shadow-pot': [
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      plort: ['shadow-plort'],
      largoable: ['no'],
    },
  },
  {
    name: 'The Tarr',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconSlimeTarr.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeTarr.png',
    tags: ['slime', 'common', 'hostile'],
    locations: { spawn: ['the-prismacore'] },
    details: {
      diet: ['meat', 'slime', 'rancher'],
      'fav-food': ['rancher'],
      'fav-toy': ['gyro-top'],
      plort: ['dervish-plort'],
      largoable: ['yes'],
      gordo: ['dervish-gordo'],
    },
  },
  {
    name: 'Largo Slimes',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconLargoPedia.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconLargoPedia.png',
    tags: ['slime', 'common', 'docile', 'harmful'],
    locations: {},
    details: {
      diet: ['depends-on-source-slimes'],
      'fav-food': ['depends-on-source-slimes'],
      'fav-toy': ['depends-on-source-slimes'],
      plort: ['depends-on-source-slimes'],
    },
  },
  {
    name: 'Feral Slimes',
    icon: '/assets/games/slime-rancher-2/slimes/regular/iconFeralPedia.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconFeralPedia.png',
    tags: ['slime', 'common', 'hostile'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
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
    name: 'Pink Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortPink.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortPink.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['pink-slime'],
    },
  },
  {
    name: 'Cotton Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortCotton.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['cotton-slime'],
    },
  },
  {
    name: 'Tabby Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortTabby.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortTabby.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['tabby-slime'],
    },
  },
  {
    name: 'Phosphor Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortPhosphor.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortPhosphor.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['phosphor-slime'],
    },
  },
  {
    name: 'Angler Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortAngler.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['angler-slime'],
    },
  },
  {
    name: 'Rock Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortRock.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortRock.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['rock-slime'],
    },
  },
  {
    name: 'Batty Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortBatty.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['batty-slime'],
    },
  },
  {
    name: 'Flutter Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortFlutter.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['flutter-slime'],
    },
  },
  {
    name: 'Ringtail Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortRingtail.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['ringtail-slime'],
    },
  },
  {
    name: 'Boom Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortBoom.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortBoom.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['boom-slime'],
    },
  },
  {
    name: 'Honey Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortHoney.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortHoney.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['honey-slime'],
    },
  },
  {
    name: 'Puddle Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortPuddle.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortPuddle.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['puddle-slime'],
    },
  },
  {
    name: 'Crystal Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortCrystal.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortCrystal.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['crystal-slime'],
    },
  },
  {
    name: 'Hunter Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortHunter.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortHunter.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['hunter-slime'],
    },
  },
  {
    name: 'Fire Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortFire.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortFire.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['fire-slime'],
    },
  },
  {
    name: 'Gold Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortGold.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortGold.png',
    tags: ['plort', 'rare'],
    details: {
      slime: ['gold-slime'],
    },
  },
  {
    name: 'Saber Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortSaber.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortSaber.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['saber-slime'],
    },
  },
  {
    name: 'Tangle Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortTangle.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortTangle.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['tangle-slime'],
    },
  },
  {
    name: 'Dervish Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortDervish.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortDervish.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['dervish-slime'],
    },
  },
  {
    name: 'Yolky Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortYolky.png',
    tags: ['plort', 'uncommon'],
    details: {
      slime: ['yolky-slime'],
    },
  },
  {
    name: 'Sloomber Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortSloomber.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['sloomber-slime'],
    },
  },
  {
    name: 'Twin Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortTwin.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['twin-slime'],
    },
  },
  {
    name: 'Hyper Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortHyper.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['hyper-slime'],
    },
  },
  {
    name: 'Shadow Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortShadow.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['shadow-slime'],
    },
  },
  {
    name: 'Unstable Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortUnstable.png',
    tags: ['plort', 'common'],
  },
  {
    name: 'Prisma Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortStable.png',
    tags: ['plort', 'common'],
  },
  {
    name: 'Pink Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoPink.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoPink.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-rainbow-fields'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat'],
      'food-limit': ['30'],
      slime: ['pink-slime'],
      drops: {
        'pink-slime': '12',
        'the-rainbow-fields-pot': '1',
      },
    },
  },
  {
    name: 'Cotton Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoCotton.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-rainbow-fields'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['water-lettuce'],
      'food-limit': ['30'],
      slime: ['cotton-slime'],
      drops: {
        'cotton-slime': '12',
        'the-rainbow-fields-pot': '1',
      },
    },
  },
  {
    name: 'Phosphor Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoPhosphor.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoPhosphor.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-rainbow-fields'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['cuberry'],
      'food-limit': ['30'],
      slime: ['phosphor-slime'],
      drops: {
        'phosphor-slime': '12',
        'the-rainbow-fields-pot': '1',
      },
    },
  },
  {
    name: 'Hunter Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoHunter.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoHunter.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['starlight-strand'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['roostro'],
      'food-limit': ['50'],
      slime: ['hunter-slime'],
      drops: {
        'hunter-slime': '12',
        'starlight-strand-pot': '1',
      },
    },
  },
  {
    name: 'Honey Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoHoney.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoHoney.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['starlight-strand'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['mint-mango'],
      'food-limit': ['50'],
      slime: ['honey-slime'],
      drops: {
        'honey-slime': '12',
        'starlight-strand-pot': '1',
      },
    },
  },
  {
    name: 'Ringtail Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoRingtail.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['starlight-strand'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat'],
      'food-limit': ['50'],
      slime: ['ringtail-slime'],
      drops: {
        'ringtail-slime': '12',
        'starlight-strand-pot': '1',
      },
    },
  },
  {
    name: 'Angler Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoAngler.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['starlight-strand'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['sea-hen'],
      'food-limit': ['50'],
      slime: ['angler-slime'],
      drops: {
        'angler-slime': '12',
        'starlight-strand-pot': '1',
      },
    },
  },
  {
    name: 'Flutter Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoFlutter.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['starlight-strand'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['nectar'],
      'fav-food': ['moondew-nectar'],
      'food-limit': ['30'],
      slime: ['flutter-slime'],
      drops: {
        'flutter-slime': '12',
        'starlight-strand-pot': '1',
      },
    },
  },
  {
    name: 'Batty Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoBatty.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['ember-valley'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['pomegranite'],
      'food-limit': ['50'],
      slime: ['batty-slime'],
      drops: {
        'batty-slime': '12',
        'ember-valley-pot': '1',
      },
    },
  },
  {
    name: 'Boom Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoBoom.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoBoom.png',
    tags: ['gordo', 'common', 'harmful'],
    locations: {
      worldgen: ['ember-valley'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['briar-hen'],
      'food-limit': ['50'],
      slime: ['boom-slime'],
      drops: {
        'boom-slime': '12',
        'ember-valley-pot': '1',
      },
    },
  },
  {
    name: 'Crystal Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoCrystal.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoCrystal.png',
    tags: ['gordo', 'common', 'harmful'],
    locations: {
      worldgen: ['ember-valley'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['odd-onion'],
      'food-limit': ['50'],
      slime: ['crystal-slime'],
      drops: {
        'crystal-slime': '12',
        'ember-valley-pot': '1',
      },
    },
  },
  {
    name: 'Rock Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoRock.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoRock.png',
    tags: ['gordo', 'common', 'harmful'],
    locations: {
      worldgen: ['ember-valley'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['heart-beet'],
      'food-limit': ['50'],
      slime: ['rock-slime'],
      drops: {
        'rock-slime': '12',
        'ember-valley-pot': '1',
      },
    },
  },
  {
    name: 'Tabby Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoTabby.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoTabby.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['ember-valley'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['stony-hen'],
      'food-limit': ['50'],
      slime: ['tabby-slime'],
      drops: {
        'tabby-slime': '12',
        'ember-valley-pot': '1',
      },
    },
  },
  {
    name: 'Saber Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoSaber.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['powderfall-bluffs'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['thundercluck-hen'],
      'food-limit': ['50'],
      slime: ['saber-slime'],
      drops: {
        'saber-slime': '12',
        'powderfall-bluffs-pot': '1',
      },
    },
  },
  {
    name: 'Twin Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoTwin.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['impossible-sky'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['polaricherry'],
      'food-limit': ['50'],
      slime: ['twin-slime'],
      drops: {
        'twin-slime': '12',
        'impossible-sky-pot': '1',
      },
    },
  },
  {
    name: 'Sloomber Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoSloomber.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['dream-land'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['candied-hen'],
      'food-limit': ['30'],
      slime: ['sloomber-slime'],
      drops: {
        'sloomber-slime': '12',
        'dream-land-pot': '1',
      },
    },
  },
  {
    name: 'Hyper Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoHyper.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-terrarium'],
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['turbo-tater'],
      'food-limit': ['30'],
      slime: ['hyper-slime'],
      drops: {
        'hyper-slime': '12',
        'the-terrarium-pot': '1',
      },
    },
  },
  {
    name: 'Tangle Gordo',
    icon: '/assets/games/slime-rancher/extra/none.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoTangle.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['painted-hen'],
      'food-limit': [''],
      slime: ['tangle-slime'],
    },
  },
  {
    name: 'Dervish Gordo',
    icon: '/assets/games/slime-rancher/extra/none.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoDervish.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      gadget: [
        'the-conservatory',
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['prickle-pear'],
      'food-limit': [''],
      slime: ['dervish-slime'],
    },
  },
  {
    name: 'Carrot',
    icon: '/assets/games/slime-rancher-2/food/iconVeggieCarrot.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconVeggieCarrot.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: [
        'the-archway',
        'the-den',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      worldgen: ['the-conservatory'],
      pot: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      'max-harvest': ['20'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Water Lettuce',
    icon: '/assets/games/slime-rancher-2/food/iconVeggieLettuce.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'powderfall-bluffs',
        'waterworks',
        'impossible-sky',
        'the-terrarium',
      ],
      pot: ['dream-land'],
    },
    details: {
      'fav-of': ['cotton-slime'],
      'max-harvest': ['13'],
      'decay-time': ['26 hours'],
    },
  },
  {
    name: 'Heart Beet',
    icon: '/assets/games/slime-rancher-2/food/iconVeggieBeet.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconVeggieBeet.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: [
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
      ],
      pot: [
        'starlight-strand',
        'ember-valley',
        'lava-depths',
        'impossible-sky',
        'the-terrarium',
      ],
    },
    details: {
      'fav-of': ['rock-slime'],
      'max-harvest': ['13'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Odd Onion',
    icon: '/assets/games/slime-rancher-2/food/iconVeggieOnion.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconVeggieOnion.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: [
        'ember-valley',
        'powderfall-bluffs',
        'lava-depths',
        'dream-land',
        'the-terrarium',
      ],
      pot: ['powderfall-bluffs'],
    },
    details: {
      'fav-of': ['crystal-slime'],
      'max-harvest': ['20'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Turbo Tater',
    icon: '/assets/games/slime-rancher-2/food/iconVeggieTater.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: ['lava-depths', 'the-terrarium'],
      pot: ['the-terrarium'],
    },
    details: {
      'fav-of': ['hyper-slime'],
      'max-harvest': ['13'],
      'decay-time': ['26 hours'],
    },
  },
  {
    name: 'Unstable Veggie',
    icon: '/assets/games/slime-rancher-2/food/iconVeggieUnstable.png',
    tags: ['food', 'veggie', 'common'],
    locations: { spawn: [''] },
  },
  {
    name: 'Pogo Fruit',
    icon: '/assets/games/slime-rancher-2/food/iconFruitPogo.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconFruitPogo.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: [
        'the-archway',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      pot: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      'max-harvest': ['20'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Mint Mango',
    icon: '/assets/games/slime-rancher-2/food/iconFruitMango.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconFruitMango.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: [
        'starlight-strand',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      'fav-of': ['honey-slime'],
      'max-harvest': ['15'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Cuberry',
    icon: '/assets/games/slime-rancher-2/food/iconFruitCuberry.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconFruitCuberry.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
      ],
      pot: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      'fav-of': ['phosphor-slime'],
      'max-harvest': ['13'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Pomegranite',
    icon: '/assets/games/slime-rancher-2/food/iconFruitPommegranite.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: [
        'starlight-strand',
        'ember-valley',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      pot: ['lava-depths'],
    },
    details: {
      'fav-of': ['batty-slime'],
      'max-harvest': ['13'],
      'decay-time': ['24 hours'],
    },
  },
  {
    name: 'Prickle Pear',
    icon: '/assets/games/slime-rancher-2/food/iconFruitPear.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconFruitPear.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: ['ember-valley'],
    },
    details: {
      'fav-of': ['dervish-slime'],
      'max-harvest': ['15'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Polaricherry',
    icon: '/assets/games/slime-rancher-2/food/iconFruitPolaricherry.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: ['impossible-sky', 'the-terrarium'],
      pot: ['impossible-sky', 'dream-land', 'the-terrarium'],
    },
    details: {
      'fav-of': ['twin-slime'],
      'max-harvest': ['20'],
      'decay-time': ['24 hours'],
    },
  },
  {
    name: 'Unstable Fruit',
    icon: '/assets/games/slime-rancher-2/food/iconFruitUnstable.png',
    tags: ['food', 'fruit', 'common'],
    locations: { spawn: [''] },
  },
  {
    name: 'Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChick.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdChick.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      hen: ['hen-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Hen Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHen.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdHen.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-gully',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      pot: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      chickadoo: ['chickadoo'],
    },
  },
  {
    name: 'Roostro',
    icon: '/assets/games/slime-rancher-2/food/iconBirdRooster.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdRooster.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
      pot: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      'fav-of': ['hunter-slime'],
      chickadoo: [
        'chickadoo',
        'sea-chickadoo',
        'stony-chickadoo',
        'briar-chickadoo',
        'thunder-chickadoo',
        'painted-chickadoo',
        'candied-chickadoo',
      ],
    },
  },
  {
    name: 'Sea Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickSea.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: [
        'starlight-strand',
        'ember-valley',
        'waterworks',
        'impossible-sky',
        'the-terrarium',
      ],
    },
    details: {
      hen: ['sea-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Sea Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHenSea.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'starlight-strand',
        'ember-valley',
        'waterworks',
        'impossible-sky',
        'the-terrarium',
      ],
      pot: ['starlight-strand', 'powderfall-bluffs', 'waterworks'],
    },
    details: {
      'fav-of': ['angler-slime'],
      chickadoo: ['sea-chickadoo'],
    },
  },
  {
    name: 'Stony Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickStony.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdChickStony.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      hen: ['stony-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Stony Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHenStony.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdHenStony.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      pot: ['the-rainbow-fields', 'powderfall-bluffs', 'impossible-sky'],
    },
    details: {
      'fav-of': ['tabby-slime'],
      chickadoo: ['stony-chickadoo'],
    },
  },
  {
    name: 'Briar Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickBriar.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdChickBriar.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: ['ember-valley', 'lava-depths'],
    },
    details: {
      hen: ['briar-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Briar Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHenBriar.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdHenBriar.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: ['ember-valley', 'lava-depths'],
      pot: ['ember-valley', 'lava-depths'],
    },
    details: {
      'fav-of': ['boom-slime'],
      chickadoo: ['briar-chickadoo'],
    },
  },
  {
    name: 'Thunder Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickThunder.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: ['powderfall-bluffs'],
    },
    details: {
      hen: ['thundercluck-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Thundercluck Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHenThunder.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: ['powderfall-bluffs'],
      pot: ['powderfall-bluffs'],
    },
    details: {
      'fav-of': ['saber-slime'],
      chickadoo: ['thunder-chickadoo'],
    },
  },
  {
    name: 'Painted Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickPainted.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdChickPainted.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: ['starlight-strand'],
    },
    details: {
      hen: ['painted-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Painted Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHenPainted.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdHenPainted.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: ['starlight-strand'],
    },
    details: {
      'fav-of': ['tangle-slime'],
      chickadoo: ['painted-chickadoo'],
    },
  },
  {
    name: 'Candied Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickCandied.png',
    tags: ['food', 'future-meat', 'common'],
    locations: {
      spawn: ['dream-land'],
    },
    details: {
      hen: ['candied-hen'],
      'grow-time': ['6 hours (3 hours with Spring Grass)'],
    },
  },
  {
    name: 'Candied Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHenCandied.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: ['dream-land'],
      pot: ['dream-land'],
    },
    details: {
      'fav-of': ['sloomber-slime'],
      chickadoo: ['candied-chickadoo'],
    },
  },
  {
    name: 'Elder Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHenElder.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdHenElder.png',
    tags: ['food', 'meat', 'common'],
  },
  {
    name: 'Elder Roostro',
    icon: '/assets/games/slime-rancher-2/food/iconBirdRoosterElder.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconBirdRoosterElder.png',
    tags: ['food', 'meat', 'common'],
  },
  {
    name: 'Unstable Meat',
    icon: '/assets/games/slime-rancher-2/food/iconMeatUnstable.png',
    tags: ['food', 'meat', 'common'],
    locations: { spawn: [''] },
  },
  {
    name: 'Moondew Nectar',
    icon: '/assets/games/slime-rancher-2/food/iconCategoryNectar.png',
    tags: ['food', 'nectar', 'common'],
    locations: {
      spawn: ['starlight-strand', 'the-terrarium'],
    },
    details: {
      'fav-of': ['flutter-slime'],
      'max-harvest': ['1'],
      'decay-time': ['? hours'],
    },
  },
  {
    name: 'Water',
    icon: '/assets/games/slime-rancher-2/food/iconWater.png',
    'sr-icon': '/assets/games/slime-rancher/food/iconWater.png',
    tags: ['food', 'other', 'common'],
    locations: {
      spawn: [
        'the-digsite',
        'the-tidepools',
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
  },
  {
    name: 'Ash',
    icon: '/assets/games/slime-rancher-2/food/iconAsh.png',
    'sr-icon':
      '/assets/games/slime-rancher/food/iconPatchIncineratorAshTray.png',
    tags: ['food', 'other', 'common'],
  },
  {
    name: 'Primordy Oil',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftPrimordyOil.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftPrimordyOil.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['ember-valley'],
    },
  },
  {
    name: 'Deep Brine',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftDeepBrine.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftDeepBrine.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: [
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-rainbow-fields',
      ],
      'golden-pot': ['the-rainbow-fields'],
    },
  },
  {
    name: 'Silky Sand',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftSilkySand.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftSilkySand.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley'],
      'golden-pot': ['starlight-strand'],
    },
  },
  {
    name: 'Lava Dust',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftLavaDust.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftLavaDust.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['ember-valley'],
    },
  },
  {
    name: 'Buzz Wax',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftBuzzWax.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftBuzzWax.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley'],
    },
  },
  {
    name: 'Wild Honey',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftWildHoney.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftWildHoney.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['starlight-strand'],
      'golden-pot': ['starlight-strand'],
    },
  },
  {
    name: 'Jellystone',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftJellyStone.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftJellyStone.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: [
        'the-archway',
        'the-den',
        'the-digsite',
        'the-gully',
        'the-tidepools',
        'the-rainbow-fields',
      ],
      'golden-pot': ['the-rainbow-fields'],
    },
  },
  {
    name: 'Radiant Ore',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftRadiantOre.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley'],
      'golden-pot': ['starlight-strand', 'ember-valley'],
    },
  },
  {
    name: 'Strange Diamond',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftStrangeDiamond.png',
    'sr-icon':
      '/assets/games/slime-rancher/resources/iconCraftStrangeDiamond.png',
    tags: ['resource', 'rare', 'node'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
      ],
      'golden-pot': [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'waterworks',
        'lava-depths',
      ],
    },
  },
  {
    name: 'Slime Fossil',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftSlimeFossil.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftSlimeFossil.png',
    tags: ['resource', 'uncommon', 'node'],
    locations: {
      spawn: ['powderfall-bluffs'],
      'golden-pot': ['powderfall-bluffs'],
    },
  },
  {
    name: 'Perfect Snowflake',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftPerfectSnowflake.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['powderfall-bluffs'],
      'golden-pot': ['powderfall-bluffs'],
    },
  },
  {
    name: 'Sun Sap',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftSunSap.png',
    tags: ['resource', 'rare', 'node'],
    locations: {
      spawn: ['powderfall-bluffs', 'the-terrarium'],
      'golden-pot': ['powderfall-bluffs', 'the-terrarium'],
    },
  },
  {
    name: 'Lightning Mote',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftLightningMote.png',
    tags: ['resource', 'uncommon', 'weather-resource'],
    locations: {
      weather: [
        'the-sanctuary',
        'the-rainbow-fields',
        'ember-valley',
        'starlight-strand',
        'powderfall-bluffs',
      ],
    },
  },
  {
    name: 'Storm Glass',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftStormGlass.png',
    tags: ['resource', 'uncommon', 'weather-resource'],
    locations: {
      weather: [
        'the-sanctuary',
        'the-rainbow-fields',
        'ember-valley',
        'starlight-strand',
        'powderfall-bluffs',
      ],
    },
  },
  {
    name: 'Drift Crystal',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftDriftCrystal.png',
    tags: ['resource', 'uncommon', 'weather-resource'],
    locations: {
      weather: [
        'the-sanctuary',
        'the-rainbow-fields',
        'ember-valley',
        'starlight-strand',
        'powderfall-bluffs',
      ],
    },
  },
  {
    name: 'Magma Comb',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftMagmaComb.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['lava-depths'],
      'golden-pot': ['lava-depths'],
    },
  },
  {
    name: 'Aqua Glass',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftAquaGlass.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['waterworks'],
      'golden-pot': ['waterworks'],
    },
  },
  {
    name: 'Dream Bubble',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftDreamBubble.png',
    tags: ['resource', 'uncommon', 'node'],
    locations: {
      spawn: ['dream-land'],
    },
  },
  {
    name: 'Tin Petal',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftTinPetal.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: [
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      'golden-pot': [
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
  },
  {
    name: 'Black Indigonium',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftBlackIndigonium.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['impossible-sky', 'the-terrarium'],
      'golden-pot': ['impossible-sky', 'the-terrarium'],
    },
  },
  {
    name: 'Royal Jelly',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftRoyalJelly.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftRoyalJelly.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['impossible-sky', 'dream-land'],
      'golden-pot': ['impossible-sky', 'dream-land'],
    },
  },
  {
    name: 'Snowball',
    icon: '/assets/games/slime-rancher-2/resources/iconSnowball.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['the-sanctuary', 'powderfall-bluffs'],
      weather: [
        'the-sanctuary',
        'the-rainbow-fields',
        'ember-valley',
        'starlight-strand',
        'powderfall-bluffs',
      ],
    },
  },
  {
    name: 'Sprinkles',
    icon: '/assets/games/slime-rancher-2/resources/iconSprinkles.png',
    tags: ['resource', 'common', 'the-sanctuary'],
    locations: {
      spawn: ['the-sanctuary'],
    },
  },
  {
    name: 'Beach Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBeachBall.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyBeechBall.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
      'fav-of': ['pink-slime'],
    },
  },
  {
    name: 'Bomb Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBomb.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyBomb.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['boom-slime'],
    },
  },
  {
    name: 'Bouncy Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBouncyBall.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
      'fav-of': ['cotton-slime'],
    },
  },
  {
    name: 'Full Moon Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyMoon.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['batty-slime'],
    },
  },
  {
    name: 'Glowbug',
    icon: '/assets/games/slime-rancher-2/toys/iconToyGlowWorm.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '1000',
      },
      'fav-of': ['flutter-slime'],
    },
  },
  {
    name: 'Plushie Puffer Fish',
    icon: '/assets/games/slime-rancher-2/toys/iconToyPufferFish.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['angler-slime'],
    },
  },
  {
    name: 'Rubber Ducky',
    icon: '/assets/games/slime-rancher-2/toys/iconToyRubberDucky.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyDuck.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '1000',
      },
      'fav-of': ['puddle-slime'],
    },
  },
  {
    name: 'Trashcan',
    icon: '/assets/games/slime-rancher-2/toys/iconToyTrashCan.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '1000',
      },
      'fav-of': ['ringtail-slime'],
    },
  },
  {
    name: 'Yarn Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyYarnBall.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyYarnBall.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
      'fav-of': ['tabby-slime'],
    },
  },
  {
    name: 'Big Rock',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBigRock.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyBigRock.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
      'fav-of': ['rock-slime'],
    },
  },
  {
    name: 'Night Light',
    icon: '/assets/games/slime-rancher-2/toys/iconToyNightLight.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyNightLight.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
      'fav-of': ['phosphor-slime'],
    },
  },
  {
    name: 'Buzzy Bee',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBuzzyBee.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyBuzzBee.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['honey-slime'],
    },
  },
  {
    name: 'Crystal Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyCrystalBall.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyCrystalBall.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['crystal-slime'],
    },
  },
  {
    name: 'Gyro Top',
    icon: '/assets/games/slime-rancher-2/toys/iconToyGyroTop.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyGyroTop.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['dervish-slime'],
    },
  },
  {
    name: 'Sol Mate',
    icon: '/assets/games/slime-rancher-2/toys/iconToySolMate.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToySolBuddy.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['tangle-slime'],
    },
  },
  {
    name: 'Charcoal Brick',
    icon: '/assets/games/slime-rancher-2/toys/iconToyCharcoalBrick.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyBrickette.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '2000',
      },
      'fav-of': ['fire-slime'],
    },
  },
  {
    name: 'Stego Buddy',
    icon: '/assets/games/slime-rancher-2/toys/iconToyStegoBuddy.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyStegoBuddy.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['saber-slime'],
    },
  },
  {
    name: 'Rocket Ship',
    icon: '/assets/games/slime-rancher-2/toys/iconToyRocketShip.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '1000',
      },
      'fav-of': ['hyper-slime'],
    },
  },
  {
    name: 'Stuffed Sheep',
    icon: '/assets/games/slime-rancher-2/toys/iconToyStuffedSheep.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '1000',
      },
      'fav-of': ['sloomber-slime'],
    },
  },
  {
    name: 'Spinner Toy',
    icon: '/assets/games/slime-rancher-2/toys/iconToySpinner.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '1000',
      },
      'fav-of': ['twin-slime'],
    },
  },
  {
    name: 'Happy Plush Bread Loaf',
    icon: '/assets/games/slime-rancher-2/toys/iconToyHappyPlushBreadLoaf.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '2000',
      },
      'fav-of': ['yolky-slime'],
    },
  },
  {
    name: 'Stuffed Chicken',
    icon: '/assets/games/slime-rancher-2/toys/iconToyStuffedChicken.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyStuffedChicken.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '750',
      },
      'fav-of': ['hunter-slime'],
    },
  },
  {
    name: 'Resource Detector',
    icon: '/assets/games/slime-rancher-2/toys/iconToyResourceDetector.png',
    tags: ['toy', 'common'],
    details: {
      price: {
        newbucks: '1000',
      },
    },
  },
  {
    name: 'Glo Glo Foxifur',
    icon: '/assets/games/slime-rancher-2/toys/iconToyExclusiveFox.png',
    tags: ['toy', 'steam', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
    },
  },
  {
    name: 'Glo Glo Froggo',
    icon: '/assets/games/slime-rancher-2/toys/iconToyExclusiveFrog.png',
    tags: ['toy', 'xbox', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
    },
  },
  {
    name: 'Glo Glo Drakey',
    icon: '/assets/games/slime-rancher-2/toys/iconToyExclusiveDrake.png',
    tags: ['toy', 'epic-games', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
    },
  },
  {
    name: 'Glo Glo Penguino',
    icon: '/assets/games/slime-rancher-2/toys/iconToyExclusivePenguin.png',
    tags: ['toy', 'ps5', 'common'],
    details: {
      price: {
        newbucks: '500',
      },
    },
  },
  {
    name: 'Heart Cell',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentHeartCell.png',
    tags: ['upgrade-part', 'common'],
    details: {
      price: {
        'shadow-plort': '25',
      },
    },
  },
  {
    name: 'Power Chip',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentEnergyChip.png',
    tags: ['upgrade-part', 'common'],
    details: {
      price: {
        'shadow-plort': '25',
      },
    },
  },
  {
    name: 'Dash Boot Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentDashBootModule.png',
    tags: ['upgrade-part', 'common'],
  },
  {
    name: 'Jetpack Drive',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentJetpackDrive.png',
    tags: ['upgrade-part', 'common'],
  },
  {
    name: 'Storage Cell',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentStorageCell.png',
    tags: ['upgrade-part', 'common'],
    locations: {
      'exchange-station': ['the-prismacore'],
    },
    details: {
      price: {
        'prisma-plort': '20',
        'shadow-plort': '60',
        'shadow-plort!': '60',
        'shadow-plort!!': '60',
      },
    },
  },
  {
    name: 'Vac Tank',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentVacTank.png',
    tags: ['upgrade-part', 'common'],
  },
  {
    name: 'Tank Liner',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentVacTank.png',
    tags: ['upgrade-part', 'common'],
  },
  {
    name: 'Drone Archive Key Blueprint',
    icon: '/assets/games/slime-rancher-2/upgrades/iconArchiveKey.png',
    tags: ['upgrade-part', 'common'],
  },
  {
    name: 'Golden Sureshot Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentGoldenSureshot.png',
    tags: ['upgrade-part', 'common'],
  },
  {
    name: 'Shadow Sureshot Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopShadowSureshot.png',
    tags: ['upgrade-part', 'common'],
    details: {
      price: {
        newbucks: '5000',
      },
    },
  },
  {
    name: 'Regen Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentRegenModule.png',
    tags: ['upgrade-part', 'common'],
    details: {
      price: {
        'rainbow-coin': '15',
        'shadow-plort': '60',
      },
    },
  },
  {
    name: 'Injector Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentInjectorModule.png',
    tags: ['upgrade-part', 'common'],
    details: {
      price: {
        'rainbow-coin': '15',
        'shadow-plort': '60',
      },
    },
  },
  {
    name: 'Drone Station Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentQuantum.png',
    tags: ['upgrade-part', 'common'],
    locations: {
      'exchange-station': ['the-prismacore'],
    },
    details: {
      price: {
        'prisma-plort': '50',
      },
    },
  },
  {
    name: 'Resource Harvester',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopResourceHarvester.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '450',
      },
      recipe: {
        'cotton-plort': '10',
      },
    },
  },
  {
    name: 'Heart Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopHeart01.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '450',
      },
      recipe: {
        'pink-plort': '10',
      },
    },
  },
  {
    name: 'Heart Module II',
    'sister-name': 'Heart Module Mk II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem2.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopHeart02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '900',
      },
      recipe: {
        'pink-plort': '20',
        'honey-plort': '10',
        'deep-brine': '10',
        jellystone: '10',
        'heart-cell': '1',
      },
    },
  },
  {
    name: 'Heart Module III',
    'sister-name': 'Heart Module Mk III',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem3.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopHeart03.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        'pink-plort': '30',
        'honey-plort': '20',
        'deep-brine': '30',
        'silky-sand': '10',
        'heart-cell': '1',
      },
    },
  },
  {
    name: 'Heart Module IV',
    'sister-name': 'Heart Module Ultra',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem4.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopHeart04.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '10000',
      },
      recipe: {
        'prisma-plort': '50',
        'honey-plort': '30',
        'magma-comb': '25',
        'royal-jelly': '1',
        'heart-cell': '1',
      },
    },
  },
  {
    name: 'Power Core',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopPower01.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '450',
      },
      recipe: {
        'cotton-plort': '10',
      },
    },
  },
  {
    name: 'Power Core II',
    'sister-name': 'Power Module Mk II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem2.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopPower02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '900',
      },
      recipe: {
        'cotton-plort': '20',
        'batty-plort': '10',
        'primordy-oil': '10',
        jellystone: '10',
        'power-chip': '1',
      },
    },
  },
  {
    name: 'Power Core III',
    'sister-name': 'Power Module Mk III',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem3.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopPower03.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        'cotton-plort': '30',
        'batty-plort': '20',
        'wild-honey': '10',
        'primordy-oil': '30',
        'power-chip': '1',
      },
    },
  },
  {
    name: 'Power Core IV',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem4.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '10000',
      },
      recipe: {
        'cotton-plort': '50',
        'saber-plort': '30',
        'slime-fossil': '30',
        'sun-sap': '1',
        'power-chip': '1',
      },
    },
  },
  {
    name: 'Power Core V',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem5.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '15000',
      },
      recipe: {
        'prisma-plort': '50',
        'twin-plort': '40',
        'tin-petal': '25',
        'royal-jelly': '1',
        'power-chip': '1',
      },
    },
  },
  {
    name: 'Dash Boots',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopDashBoots.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopBoots.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '450',
      },
      recipe: {
        'boom-plort': '10',
      },
    },
  },
  {
    name: 'Dash Boots II',
    'sister-name': 'Ultra Dash Boots',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopDashBoots2.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopBoots02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '1500',
      },
      recipe: {
        'boom-plort': '20',
        'flutter-plort': '20',
        'wild-honey': '10',
        'lava-dust': '10',
        'dash-boot-module': '1',
      },
    },
  },
  {
    name: 'Jetpack',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopJetpack 1.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopJetpack.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '450',
      },
      recipe: {
        'phosphor-plort': '5',
        'radiant-ore': '5',
      },
    },
  },
  {
    name: 'Jetpack II',
    'sister-name': 'Air Drive',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopJetpack 2.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopAirdrive.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '1500',
      },
      recipe: {
        'phosphor-plort': '20',
        'batty-plort': '10',
        'radiant-ore': '20',
        'wild-honey': '10',
        'jetpack-drive': '1',
      },
    },
  },
  {
    name: 'Tank Booster',
    'sister-name': 'Tank Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopTank01.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '450',
      },
      recipe: {
        'tabby-plort': '10',
      },
    },
  },
  {
    name: 'Tank Booster II',
    'sister-name': 'Tank Module Mk II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster2.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopTank02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '900',
      },
      recipe: {
        'tabby-plort': '20',
        'angler-plort': '10',
        'radiant-ore': '10',
        jellystone: '10',
        'storage-cell': '1',
      },
    },
  },
  {
    name: 'Tank Booster III',
    'sister-name': 'Tank Module Mk III',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster3.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopTank03.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        'tabby-plort': '30',
        'angler-plort': '20',
        'radiant-ore': '30',
        'lava-dust': '10',
        'storage-cell': '1',
      },
    },
  },
  {
    name: 'Tank Booster IV',
    'sister-name': 'Tank Module Ultra',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster4.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopTank04.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '10000',
      },
      recipe: {
        'tabby-plort': '40',
        'saber-plort': '30',
        'perfect-snowflake': '30',
        'sun-sap': '1',
        'storage-cell': '1',
      },
    },
  },
  {
    name: 'Tank Booster V',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster5.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '15000',
      },
      recipe: {
        'sloomber-plort': '50',
        'prisma-plort': '20',
        'black-indigonium': '20',
        'royal-jelly': '1',
        'storage-cell': '1',
      },
    },
  },
  {
    name: 'Tank Booster VI',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster6.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '20000',
      },
      recipe: {
        'twin-plort': '60',
        'prisma-plort': '25',
        'dream-bubble': '20',
        'sun-sap': '3',
        'storage-cell': '1',
      },
    },
  },
  {
    name: 'Tank Booster VII',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster7.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '30000',
      },
      recipe: {
        'hyper-plort': '70',
        'sloomber-plort': '50',
        'magma-comb': '20',
        'royal-jelly': '3',
        'storage-cell': '1',
      },
    },
  },
  {
    name: 'Tank Booster VIII',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster8.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '50000',
      },
      recipe: {
        'ringtail-plort': '80',
        'twin-plort': '50',
        'aqua-glass': '30',
        'royal-jelly': '3',
        'storage-cell': '1',
      },
    },
  },
  {
    name: 'Extra Tank',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopStorageUnit.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '1500',
      },
      recipe: {
        'rock-plort': '10',
        'silky-sand': '10',
      },
    },
  },
  {
    name: 'Extra Tank II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopStorageUnit2.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        'rock-plort': '40',
        'ringtail-plort': '20',
        'silky-sand': '20',
        'strange-diamond': '2',
        'vac-tank': '1',
      },
    },
  },
  {
    name: 'Water Tank',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopWaterContainer.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopWater01.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '450',
      },
      recipe: {
        'deep-brine': '10',
      },
    },
  },
  {
    name: 'Pulse Wave',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopPulsewave.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopPulsewave.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '450',
      },
      recipe: {
        'flutter-plort': '10',
        jellystone: '10',
        'wild-honey': '5',
      },
    },
  },
  {
    name: 'Tank Guard',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankProtector.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        'crystal-plort': '20',
        'hunter-plort': '10',
        'buzz-wax': '10',
        'lava-dust': '10',
        'tank-liner': '1',
      },
    },
  },
  {
    name: 'Tank Guard II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankProtector2.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '6000',
      },
      recipe: {
        'crystal-plort': '30',
        'hunter-plort': '20',
        'buzz-wax': '10',
        'strange-diamond': '1',
        'tank-liner': '1',
      },
    },
  },
  {
    name: 'Tank Guard III',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankProtector3.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '12000',
      },
      recipe: {
        'crystal-plort': '40',
        'hunter-plort': '30',
        'buzz-wax': '30',
        'strange-diamond': '2',
        'tank-liner': '1',
      },
    },
  },
  {
    name: 'Drone Archive Key',
    icon: '/assets/games/slime-rancher-2/upgrades/iconArchiveKey.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '1500',
      },
      recipe: {
        'hunter-plort': '20',
        'fire-plort': '20',
        jellystone: '20',
        'lava-dust': '10',
        'drone-archive-key-blueprint': '1',
      },
    },
  },
  {
    name: 'Golden Sureshot',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopGoldenSureshot 1.png',
    'sr-icon':
      '/assets/games/slime-rancher/upgrades/iconShopGoldenSureShot.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '1500',
      },
      recipe: {
        'fire-plort': '20',
        'gold-plort': '1',
        'perfect-snowflake': '10',
        'sun-sap': '1',
        'golden-sureshot-module': '1',
      },
    },
  },
  {
    name: 'Golden Sureshot II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopGoldenSureshot 2.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        'saber-plort': '30',
        'gold-plort': '2',
        'perfect-snowflake': '20',
        'sun-sap': '2',
        'golden-sureshot-module': '1',
      },
    },
  },
  {
    name: 'Golden Sureshot III',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopGoldenSureshot 3.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '6000',
      },
      recipe: {
        'saber-plort': '40',
        'gold-plort': '3',
        'perfect-snowflake': '30',
        'sun-sap': '3',
        'golden-sureshot-module': '1',
      },
    },
  },
  {
    name: 'Shadow Sureshot',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopShadowSureshot1.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '10000',
      },
      recipe: {
        'sloomber-plort': '20',
        'twin-plort': '20',
        'hyper-plort': '20',
        'shadow-sureshot-module': '1',
      },
    },
  },
  {
    name: 'Regenerator',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopRegenerator.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '5000',
      },
      recipe: {
        'twin-plort': '25',
        'prisma-plort': '10',
        'magma-comb': '10',
        'aqua-glass': '10',
        'regen-module': '1',
      },
    },
  },
  {
    name: 'Regenerator II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopRegenerator2.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '10000',
      },
      recipe: {
        'sloomber-plort': '50',
        'hyper-plort': '50',
        'black-indigonium': '10',
        'royal-jelly': '10',
        'regen-module': '1',
      },
    },
  },
  {
    name: 'Power Injector',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopPowerInjector.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '5000',
      },
      recipe: {
        'sloomber-plort': '25',
        'prisma-plort': '10',
        'dream-bubble': '10',
        'black-indigonium': '10',
        'regen-module': '1',
      },
    },
  },
  {
    name: 'Power Injector II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopPowerInjector2.png',
    tags: ['upgrade', 'common'],
    details: {
      price: {
        newbucks: '10000',
      },
      recipe: {
        'hyper-plort': '50',
        'twin-plort': '50',
        'aqua-glass': '10',
        'royal-jelly': '1',
        'regen-module': '1',
      },
    },
  },
  {
    name: 'Demolish Plot',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchDemolish.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchDemolish.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '200',
      },
    },
  },
  {
    name: 'Corral',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCorralBase.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCorralBase.png',
    tags: ['plot-building', 'common', 'building'],
    details: {
      price: {
        newbucks: '250',
      },
      upgrades: [
        'corral-high-walls',
        'music-box',
        'air-net',
        'solar-shield',
        'corral-plort-collector',
        'auto-feeder',
      ],
    },
  },
  {
    name: 'Corral High Walls',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCorralWalls.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCorralWalls.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '260',
      },
      'upgrade-for': ['corral'],
      'other-upgrades': [
        'music-box',
        'air-net',
        'solar-shield',
        'corral-plort-collector',
        'auto-feeder',
      ],
    },
  },
  {
    name: 'Music Box',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCorralMusic.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCorralMusic.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '350',
      },
      'upgrade-for': ['corral'],
      'other-upgrades': [
        'corral-high-walls',
        'air-net',
        'solar-shield',
        'corral-plort-collector',
        'auto-feeder',
      ],
    },
  },
  {
    name: 'Air Net',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCorralNet.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCorralNet.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '425',
      },
      'upgrade-for': ['corral'],
      'other-upgrades': [
        'corral-high-walls',
        'music-box',
        'solar-shield',
        'corral-plort-collector',
        'auto-feeder',
      ],
    },
  },
  {
    name: 'Solar Shield',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCorralSolar.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCorralSolar.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '425',
      },
      'upgrade-for': ['corral'],
      'other-upgrades': [
        'corral-high-walls',
        'music-box',
        'air-net',
        'corral-plort-collector',
        'auto-feeder',
      ],
    },
  },
  {
    name: 'Corral Plort Collector',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCorralCollector.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCorralCollector.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '750',
      },
      'upgrade-for': ['corral'],
      'other-upgrades': [
        'corral-high-walls',
        'music-box',
        'air-net',
        'solar-shield',
        'auto-feeder',
      ],
    },
  },
  {
    name: 'Auto Feeder',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCorralFeeder.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCorralFeeder.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '750',
      },
      'upgrade-for': ['corral'],
      'other-upgrades': [
        'corral-high-walls',
        'music-box',
        'air-net',
        'solar-shield',
        'plort-collector',
      ],
    },
  },
  {
    name: 'Garden',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchGardenBase.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchGardenBase.png',
    tags: ['plot-building', 'common', 'building'],
    details: {
      price: {
        newbucks: '250',
      },
      upgrades: [
        'nutrient-soil',
        'sprinkler',
        'scareslime',
        'growth-amplifier',
        'remove-crops',
      ],
    },
  },
  {
    name: 'Nutrient Soil',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchGardenSoil.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchGardenSoil.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '600',
      },
      'upgrade-for': ['garden'],
      'other-upgrades': [
        'sprinkler',
        'scareslime',
        'growth-amplifier',
        'remove-crops',
      ],
    },
  },
  {
    name: 'Sprinkler',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchGardenSprinkler.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchGardenSprinkler.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '700',
      },
      'upgrade-for': ['garden'],
      'other-upgrades': [
        'nutrient-soil',
        'scareslime',
        'growth-amplifier',
        'remove-crops',
      ],
    },
  },
  {
    name: 'Scareslime',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchGardenScareslime.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchGardenScareslime.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '425',
      },
      'upgrade-for': ['garden'],
      'other-upgrades': [
        'nutrient-soil',
        'sprinkler',
        'growth-amplifier',
        'remove-crops',
      ],
    },
  },
  {
    name: 'Growth Amplifier',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchGardenDeluxe.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchGardenDeluxe.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '1400',
      },
      'upgrade-for': ['garden'],
      'other-upgrades': [
        'nutrient-soil',
        'sprinkler',
        'scareslime',
        'remove-crops',
      ],
    },
  },
  {
    name: 'Remove Crops',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchGardenClearCrop.png',
    'sr-icon':
      '/assets/games/slime-rancher-2/plot-buildings/iconPatchGardenClearCrop.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '50',
      },
      'upgrade-for': ['garden'],
      'other-upgrades': [
        'nutrient-soil',
        'sprinkler',
        'growth-amplifier',
        'scareslime',
      ],
    },
  },
  {
    name: 'Coop',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCoopBase.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCoopBase.png',
    tags: ['plot-building', 'common', 'building'],
    details: {
      price: {
        newbucks: '250',
      },
      upgrades: [
        'coop-high-walls',
        'spring-grass',
        'vitamizer',
        'elder-collector',
      ],
    },
  },
  {
    name: 'Coop High Walls',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCoopWalls.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCoopWalls.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '200',
      },
      'upgrade-for': ['coop'],
      'other-upgrades': ['spring-grass', 'vitamizer', 'elder-collector'],
    },
  },
  {
    name: 'Spring Grass',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCoopGrass.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCoopGrass.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '600',
      },
      'upgrade-for': ['coop'],
      'other-upgrades': ['coop-high-walls', 'vitamizer', 'elder-collector'],
    },
  },
  {
    name: 'Vitamizer',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCoopVitamizer.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCoopVitamizer.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '700',
      },
      'upgrade-for': ['coop'],
      'other-upgrades': ['coop-high-walls', 'spring-grass', 'elder-collector'],
    },
  },
  {
    name: 'Elder Collector',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCoopDeluxe.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchCoopDeluxe.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '1300',
      },
      'upgrade-for': ['coop'],
      'other-upgrades': ['coop-high-walls', 'spring-grass', 'vitamizer'],
    },
  },
  {
    name: 'Silo',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchSiloBase.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchSiloBase.png',
    tags: ['plot-building', 'common', 'building'],
    details: {
      price: {
        newbucks: '450',
      },
      upgrades: [
        'additional-storage',
        'additional-storage-ii',
        'additional-storage-iii',
        'improved-storage-capacity',
      ],
    },
  },
  {
    name: 'Additional Storage',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchSiloStorage.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchSiloStorage.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '500',
      },
      'upgrade-for': ['silo'],
      'other-upgrades': [
        'additional-storage-ii',
        'additional-storage-iii',
        'improved-storage-capacity',
      ],
    },
  },
  {
    name: 'Additional Storage II',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchSiloStorage.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchSiloStorage.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '575',
      },
      'upgrade-for': ['silo'],
      'other-upgrades': [
        'additional-storage',
        'additional-storage-iii',
        'improved-storage-capacity',
      ],
    },
  },
  {
    name: 'Additional Storage III',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchSiloStorage.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchSiloStorage.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '650',
      },
      'upgrade-for': ['silo'],
      'other-upgrades': [
        'additional-storage',
        'additional-storage-ii',
        'improved-storage-capacity',
      ],
    },
  },
  {
    name: 'Improved Storage Capacity',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchSiloStorageUpgrade.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '1800',
      },
      'upgrade-for': ['silo'],
      'other-upgrades': [
        'additional-storage',
        'additional-storage-ii',
        'additional-storage-iii',
      ],
    },
  },
  {
    name: 'Incinerator',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchIncineratorBase.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchIncineratorBase.png',
    tags: ['plot-building', 'common', 'building'],
    details: {
      price: {
        newbucks: '450',
      },
      upgrades: ['ash-trough'],
    },
  },
  {
    name: 'Ash Trough',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchIncineratorAshTray.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchIncineratorAshTray.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '500',
      },
      'upgrade-for': ['incinerator'],
    },
  },
  {
    name: 'Pond',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchPondBase.png',
    'sr-icon':
      '/assets/games/slime-rancher/plot-buildings/iconPatchPondBase.png',
    tags: ['plot-building', 'common', 'building'],
    details: {
      price: {
        newbucks: '450',
      },
      upgrades: ['pond-plort-collector'],
    },
  },
  {
    name: 'Pond Plort Collector',
    icon: '/assets/games/slime-rancher-2/plot-buildings/iconPatchCorralCollector.png',
    tags: ['plot-building', 'common', 'building-upgrade'],
    details: {
      price: {
        newbucks: '1200',
      },
      'upgrade-for': ['pond'],
    },
  },
  {
    name: 'Rain',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherRain.png',
    tags: ['weather', 'common'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
  },
  {
    name: 'Snow',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherSnow.png',
    tags: ['weather', 'rare'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
    details: {
      resource: ['snowball'],
    },
  },
  {
    name: 'Thunderstorm',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherThunderstorm.png',
    tags: ['weather', 'common'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
  },
  {
    name: 'Lightning Strike',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherLightning.png',
    tags: ['weather', 'uncommon'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
    details: {
      resource: {
        'lightning-mote': '0-4',
        'storm-glass': '0-4',
      },
    },
  },
  {
    name: 'Wind',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherWind.png',
    tags: ['weather', 'common'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
  },
  {
    name: 'Cyclone',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherTornado.png',
    tags: ['weather', 'uncommon'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
    details: {
      slime: ['dervish-slime'],
      resource: {
        'drift-crystal': '6',
      },
    },
  },
  {
    name: 'Pollen',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherPollen.png',
    tags: ['weather', 'common'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
  },
  {
    name: 'Vine Tangle',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherVines.png',
    tags: ['weather', 'uncommon'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
    details: {
      slime: ['tangle-slime'],
    },
  },
  {
    name: 'Slimefall',
    icon: '/assets/games/slime-rancher-2/weather/iconWeatherSlimerain.png',
    tags: ['weather', 'rare'],
    locations: {
      spawn: [
        'the-sanctuary',
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
    details: {
      slime: [
        'pink-slime',
        'angler-slime',
        'honey-slime',
        'tabby-slime',
        'rock-slime',
        'cotton-slime',
        'saber-slime',
      ],
    },
  },
  {
    name: 'The Conservatory',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneConservatory.png',
    tags: ['zone', 'common'],
    details: {
      plots: ['8'],
      'treasure-pods': {
        'treasure-pod': '3',
      },
    },
  },
  {
    name: 'The Archway',
    icon: '/assets/games/slime-rancher-2/zones/iconExpansionArchway.png',
    tags: ['zone', 'common'],
    details: {
      price: {
        newbucks: '2800',
      },
      plots: ['5'],
      'treasure-pods': {
        'treasure-pod': '1',
      },
    },
  },
  {
    name: 'The Den',
    icon: '/assets/games/slime-rancher-2/zones/iconExpansionDen.png',
    tags: ['zone', 'common'],
    details: {
      price: {
        newbucks: '2800',
      },
      plots: ['5'],
      'treasure-pods': {
        'treasure-pod': '1',
      },
    },
  },
  {
    name: 'The Digsite',
    icon: '/assets/games/slime-rancher-2/zones/iconExpansionDigSite.png',
    tags: ['zone', 'common'],
    details: {
      price: {
        newbucks: '6000',
      },
      plots: ['4'],
    },
  },
  {
    name: 'The Gully',
    icon: '/assets/games/slime-rancher-2/zones/iconExpansionGully.png',
    tags: ['zone', 'common'],
    details: {
      price: {
        newbucks: '2800',
      },
      plots: ['5'],
      'treasure-pods': {
        'treasure-pod': '1',
      },
    },
  },
  {
    name: 'The Tidepools',
    icon: '/assets/games/slime-rancher-2/zones/iconExpansionTidepools.png',
    tags: ['zone', 'common'],
    details: {
      price: {
        newbucks: '6000',
      },
      plots: ['5'],
    },
  },
  {
    name: 'The Sanctuary',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneSanctuary.png',
    tags: ['zone', 'common'],
    details: {
      plots: ['9'],
      'treasure-pods': {
        'treasure-pod': '1',
      },
      'unique-resources': ['sprinkles'],
    },
  },
  {
    name: 'The Rainbow Fields',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneFields.png',
    tags: ['zone', 'common'],
    details: {
      'treasure-pods': {
        'treasure-pod': '18',
      },
    },
  },
  {
    name: 'Starlight Strand',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneStrand.png',
    tags: ['zone', 'common'],
    details: {
      'treasure-pods': {
        'treasure-pod': '33',
      },
    },
  },
  {
    name: 'Ember Valley',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneGorge.png',
    tags: ['zone', 'common'],
    details: {
      'treasure-pods': {
        'treasure-pod': '35',
      },
      'unique-resources': ['primordy-oil', 'lava-dust'],
    },
  },
  {
    name: 'Powderfall Bluffs',
    icon: '/assets/games/slime-rancher-2/zones/iconZonePowderfall.png',
    tags: ['zone', 'common'],
    details: {
      'treasure-pods': {
        'treasure-pod': '24',
      },
      'unique-resources': ['perfect-snowflake', 'slime-fossil'],
    },
  },
  {
    name: 'Waterworks',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneWaterworks.png',
    tags: ['zone', 'common'],
    details: {
      'shadow-plort-doors': {
        'shadow-plort-door': '4',
      },
      'unique-resources': ['aqua-glass'],
    },
  },
  {
    name: 'Lava Depths',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneLavaDepths.png',
    tags: ['zone', 'common'],
    details: {
      'shadow-plort-doors': {
        'shadow-plort-door': '5',
      },
      'unique-resources': ['magma-comb'],
    },
  },
  {
    name: 'Impossible Sky',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneImpossibleSky.png',
    tags: ['zone', 'common'],
    details: {
      'shadow-plort-doors': {
        'shadow-plort-door': '5',
      },
    },
  },
  {
    name: 'Dream Land',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneDreamLand.png',
    tags: ['zone', 'common'],
    details: {
      'shadow-plort-doors': {
        'shadow-plort-door': '6',
      },
      'unique-resources': ['dream-bubble'],
    },
  },
  {
    name: 'The Terrarium',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneTerrarium.png',
    tags: ['zone', 'common'],
    details: {
      'shadow-plort-doors': {
        'shadow-plort-door': '5',
      },
    },
  },
  {
    name: 'The Prismacore',
    icon: '/assets/games/slime-rancher-2/zones/iconZonePrismacore.png',
    tags: ['zone', 'common'],
  },
  {
    name: 'The Slime Sea',
    icon: '/assets/games/slime-rancher-2/zones/iconZoneSea.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['zone', 'common'],
  },
  {
    name: 'Sanctuary Room 1',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconNewRoom.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room'],
    details: {
      price: {
        sprinkles: '100',
      },
    },
  },
  {
    name: 'Sanctuary Room 2',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconNewRoom.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room'],
    details: {
      price: {
        sprinkles: '200',
      },
    },
  },
  {
    name: 'Sanctuary Room 3',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconNewRoom.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room'],
    details: {
      price: {
        sprinkles: '300',
      },
    },
  },
  {
    name: 'Sanctuary Room 4',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconNewRoom.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room'],
    details: {
      price: {
        sprinkles: '400',
      },
    },
  },
  {
    name: 'Sanctuary Room 5',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconNewRoom.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room'],
    details: {
      price: {
        sprinkles: '500',
      },
    },
  },
  {
    name: 'Default Room',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconThemeDefaultSanctuary.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room-theme'],
    details: {
      'usable-in-plot-rooms': ['yes'],
    },
  },
  {
    name: 'Snowy Room',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconThemeIce.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room-theme'],
    details: {
      price: {
        sprinkles: '100',
      },
      'usable-in-plot-rooms': ['yes'],
    },
  },
  {
    name: 'Magma Room',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconThemeMagma.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room-theme'],
    details: {
      price: {
        sprinkles: '100',
      },
      'usable-in-plot-rooms': ['yes'],
    },
  },
  {
    name: 'Mossy Room',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconThemeMoss.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room-theme'],
    details: {
      price: {
        sprinkles: '100',
      },
      'usable-in-plot-rooms': ['yes'],
    },
  },
  {
    name: 'Dark Room',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconThemeCave.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room-theme'],
    details: {
      price: {
        sprinkles: '250',
      },
      'usable-in-plot-rooms': ['no'],
    },
  },
  {
    name: 'Sticky Room',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconThemeHoney.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'room-theme'],
    details: {
      price: {
        sprinkles: '250',
      },
      'usable-in-plot-rooms': ['no'],
    },
  },
  {
    name: 'Default Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconDefaultEndcap.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      seats: ['0'],
    },
  },
  {
    name: 'Sanctuary Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapSanctuarystairs.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      seats: ['3'],
    },
  },
  {
    name: 'Magma Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapMagma.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '100',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Snowy Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapSnow.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '100',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Mossy Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapMoss.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '100',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Musical Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapMusic.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['4'],
    },
  },
  {
    name: 'Spooky Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapSpooky.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['2'],
    },
  },
  {
    name: 'Carnival Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapCarnival.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Island Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapIslandpng.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Grotto Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapWater.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Sleepy Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapCloud.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Rainbow Fields Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapRainbowFields.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Alien Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapUfo.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['2'],
    },
  },
  {
    name: 'Honey Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapHoney.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Ice Throne Alcove',
    icon: '/assets/games/slime-rancher-2/sanctuary-upgrades/iconEndcapIceThrone.png',
    'sr-icon': '/assets/games/slime-rancher/zones/iconZoneSea.png',
    tags: ['sanctuary-upgrade', 'common', 'alcove-theme'],
    details: {
      price: {
        sprinkles: '200',
      },
      seats: ['3'],
    },
  },
  {
    name: 'Dash Pad',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetDashPad.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetDashPad.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'crystal-plort': '10',
        'angler-plort': '10',
        'lava-dust': '5',
        'silky-sand': '5',
      },
    },
  },
  {
    name: 'Master Gordo Snare',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetGordoSnareMaster 1.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetGordoSnareMaster.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '1200',
      },
      recipe: {
        newbucks: '2000',
        'hunter-plort': '20',
        'sloomber-plort': '20',
        'hyper-plort': '20',
        'tin-petal': '5',
        'black-indigonium': '5',
      },
    },
  },
  {
    name: 'Advanced Gordo Snare',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetGordoSnareAdvanced 1.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetGordoSnareAdvanced.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'hunter-plort': '20',
        'flutter-plort': '10',
        'radiant-ore': '10',
        'wild-honey': '5',
        'lava-dust': '5',
      },
    },
  },
  {
    name: 'Novice Gordo Snare',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetGordoSnareNovice 1.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetGordoSnareNovice.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '250',
        'hunter-plort': '10',
        'primordy-oil': '10',
        'buzz-wax': '10',
        jellystone: '10',
      },
    },
  },
  {
    name: 'Hydro Shower',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetHydroShower.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'flutter-plort': '20',
        'puddle-plort': '10',
        'perfect-snowflake': '10',
        'wild-honey': '5',
      },
    },
  },
  {
    name: 'Hydro Turret',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetHydroTurret.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetHydroTurret.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '250',
        'boom-plort': '10',
        'puddle-plort': '5',
        'deep-brine': '5',
      },
    },
  },
  {
    name: 'Super Hydro Turret',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetHydroTurretSuper.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetHydroTurretSuper.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'boom-plort': '30',
        'puddle-plort': '10',
        'deep-brine': '10',
        'silky-sand': '5',
      },
    },
  },
  {
    name: 'Trydro Turret',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTripleHydroTurret.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        'shadow-plort': '25',
      },
      recipe: {
        newbucks: '2000',
        'hyper-plort': '30',
        'puddle-plort': '20',
        'aqua-glass': '10',
        'primordy-oil': '10',
      },
    },
  },
  {
    name: 'Med Station',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMedStation.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetMedStation.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '100',
        'pink-plort': '10',
        'deep-brine': '10',
        jellystone: '5',
      },
    },
  },
  {
    name: 'Portable Scareslime',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetPortableScareslime.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetPortableScareslime.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '250',
        'batty-plort': '20',
        'ringtail-plort': '10',
        jellystone: '10',
        'silky-sand': '5',
      },
    },
  },
  {
    name: 'Fruit Slime Bait',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetBaitPogo.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetBaitPogo.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '250',
        'phosphor-plort': '20',
        'batty-plort': '10',
        'honey-plort': '10',
        'buzz-wax': '10',
      },
    },
  },
  {
    name: 'Meat Slime Bait',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetBaitChicken.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetBaitChicken.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '250',
        'tabby-plort': '20',
        'boom-plort': '10',
        'hunter-plort': '10',
        'primordy-oil': '10',
      },
    },
  },
  {
    name: 'Veggie Slime Bait',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetBaitCarrot.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetBaitCarrot.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '250',
        'cotton-plort': '20',
        'rock-plort': '10',
        'crystal-plort': '10',
        'radiant-ore': '10',
      },
    },
  },
  {
    name: 'Portable Water Tap',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWaterTap.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetWaterTap.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '250',
      },
      recipe: {
        'puddle-plort': '10',
        'angler-plort': '10',
        'deep-brine': '10',
        'radiant-ore': '5',
      },
    },
  },
  {
    name: 'Slime Stage',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeStage.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconCurioSlimeStage.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'pink-plort': '20',
        'tabby-plort': '10',
        'buzz-wax': '10',
        'lava-dust': '5',
      },
      variants: [
        'prismatic-slime-stage',
        'pastel-slime-stage',
        'monochromatic-slime-stage',
      ],
    },
  },
  {
    name: 'Prismatic Slime Stage',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeStagePrismatic.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        'rainbow-coin': '5',
      },
      original: ['slime-stage'],
      variants: ['pastel-slime-stage', 'monochromatic-slime-stage'],
    },
  },
  {
    name: 'Pastel Slime Stage',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeStagePastel.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '250',
      },
      original: ['slime-stage'],
      variants: ['prismatic-slime-stage', 'monochromatic-slime-stage'],
    },
  },
  {
    name: 'Monochromatic Slime Stage',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeStageMonochromatic.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '250',
      },
      original: ['slime-stage'],
      variants: ['prismatic-slime-stage', 'pastel-slime-stage'],
    },
  },
  {
    name: 'Pink Floral Slime Stage',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeStageFloral.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '750',
      },
      recipe: {
        newbucks: '1000',
        'flutter-plort': '20',
        'puddle-plort': '10',
        'tin-petal': '10',
        'wild-honey': '5',
      },
      variants: [
        'purple-floral-slime-stage',
        'yellow-floral-slime-stage',
        'blue-floral-slime-stage',
      ],
    },
  },
  {
    name: 'Purple Floral Slime Stage',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetPurpleFloralSlimeStage.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '250',
      },
      original: ['pink-floral-slime-stage'],
      variants: ['yellow-floral-slime-stage', 'blue-floral-slime-stage'],
    },
  },
  {
    name: 'Yellow Floral Slime Stage',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetYellowFloralSlimeStage.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '250',
      },
      original: ['pink-floral-slime-stage'],
      variants: ['purple-floral-slime-stage', 'blue-floral-slime-stage'],
    },
  },
  {
    name: 'Blue Floral Slime Stage',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetBlueFloralSlimeStage.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '250',
      },
      original: ['pink-floral-slime-stage'],
      variants: ['purple-floral-slime-stage', 'yellow-floral-slime-stage'],
    },
  },
  {
    name: 'Snowball Machine',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSnowball.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '2000',
        'saber-plort': '20',
        'perfect-snowflake': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Spring Pad',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSpringPad.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetSpringPad.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'cotton-plort': '10',
        'phosphor-plort': '10',
        'silky-sand': '5',
        'wild-honey': '5',
      },
    },
  },
  {
    name: 'Taming Bell',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTamingBell.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetTamingBell.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '250',
        'flutter-plort': '10',
        'cotton-plort': '10',
        'primordy-oil': '10',
        'wild-honey': '5',
      },
    },
  },
  {
    name: 'Attention Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMarkerExclamation.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Cautious Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMarkerNo.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Curious Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMarkerQuestion.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        'perfect-snowflake': '1',
      },
    },
  },
  {
    name: 'Fruit Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMarkerFruit.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Meat Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMarkerHenhen.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        'buzz-wax': '1',
      },
    },
  },
  {
    name: 'Veggie Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMarkerVeggies.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        'primordy-oil': '1',
      },
    },
  },
  {
    name: 'Spout Resource Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFlagSpout.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Mineral Resource Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFlagMineral.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Hive Resource Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFlagHive.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Slime Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMarkerSlime.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Stabilizer Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStabilizerFlag.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        'shadow-plort': '15',
      },
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        'tin-petal': '1',
      },
    },
  },
  {
    name: 'Easy Breezy Fan',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSwivelFan.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'dervish-plort': '15',
        'rock-plort': '15',
        'deep-brine': '10',
      },
      variants: ['pink-easy-breezy-fan', 'tarr-fan'],
    },
  },
  {
    name: 'Pink Easy Breezy Fan',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSwivelFanPink.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '300',
      },
      original: ['easy-breezy-fan'],
      variants: ['tarr-fan'],
    },
  },
  {
    name: 'Tarr Fan',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSwivelFanTarr.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '300',
      },
      original: ['easy-breezy-fan'],
      variants: ['pink-easy-breezy-fan'],
    },
  },
  {
    name: 'Round Bumper',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinballBumper.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'pink-plort': '10',
        'saber-plort': '10',
        'primordy-oil': '5',
      },
      variants: ['mint-round-bumper', 'blue-round-bumper'],
    },
  },
  {
    name: 'Mint Round Bumper',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBumperMint.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '300',
      },
      original: ['round-bumper'],
      variants: ['blue-round-bumper'],
    },
  },
  {
    name: 'Blue Round Bumper',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBumperBlue.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '300',
      },
      original: ['round-bumper'],
      variants: ['mint-round-bumper'],
    },
  },
  {
    name: 'Stunt Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCannon.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '1000',
        'boom-plort': '20',
        'fire-plort': '5',
        'lava-dust': '3',
      },
      variants: ['mint-stunt-cannon', 'blue-stunt-cannon'],
    },
  },
  {
    name: 'Mint Stunt Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStuntCannonMint.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['stunt-cannon'],
      variants: ['blue-stunt-cannon'],
    },
  },
  {
    name: 'Blue Stunt Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStuntCannonBlue.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['stunt-cannon'],
      variants: ['mint-stunt-cannon'],
    },
  },
  {
    name: 'Accelerator',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetAccelerator.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '50',
        'ringtail-plort': '1',
        'deep-brine': '1',
      },
      variants: [
        'gold-accelerator',
        'purple-accelerator',
        'red-accelerator',
        'pink-accelerator',
        'grey-accelerator',
        'green-accelerator',
      ],
    },
  },
  {
    name: 'Gold Accelerator',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetAcceleratorGold.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '50',
      },
      original: ['accelerator'],
      variants: [
        'purple-accelerator',
        'red-accelerator',
        'pink-accelerator',
        'grey-accelerator',
        'green-accelerator',
      ],
    },
  },
  {
    name: 'Purple Accelerator',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetAcceleratorPurple.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '50',
      },
      original: ['accelerator'],
      variants: [
        'gold-accelerator',
        'red-accelerator',
        'pink-accelerator',
        'grey-accelerator',
        'green-accelerator',
      ],
    },
  },
  {
    name: 'Red Accelerator',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetAcceleratorRed.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '50',
      },
      original: ['accelerator'],
      variants: [
        'gold-accelerator',
        'purple-accelerator',
        'pink-accelerator',
        'grey-accelerator',
        'green-accelerator',
      ],
    },
  },
  {
    name: 'Pink Accelerator',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetAcceleratorPink.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '50',
      },
      original: ['accelerator'],
      variants: [
        'gold-accelerator',
        'purple-accelerator',
        'red-accelerator',
        'grey-accelerator',
        'green-accelerator',
      ],
    },
  },
  {
    name: 'Grey Accelerator',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetAcceleratorGrey.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '50',
      },
      original: ['accelerator'],
      variants: [
        'gold-accelerator',
        'purple-accelerator',
        'red-accelerator',
        'pink-accelerator',
        'green-accelerator',
      ],
    },
  },
  {
    name: 'Green Accelerator',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetAcceleratorGreen.png',
    tags: ['gadget', 'common', 'utility', 'variant'],
    details: {
      price: {
        newbucks: '50',
      },
      original: ['accelerator'],
      variants: [
        'gold-accelerator',
        'purple-accelerator',
        'red-accelerator',
        'pink-accelerator',
        'grey-accelerator',
      ],
    },
  },
  {
    name: 'Distributor',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetDistributor.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '4000',
      },
      recipe: {
        newbucks: '3000',
        'dervish-plort': '25',
        'ringtail-plort': '25',
        jellystone: '10',
        'radiant-ore': '10',
      },
    },
  },
  {
    name: 'Slimeball Goal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeballGoal.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '2500',
      },
      recipe: {
        newbucks: '5000',
        'honey-plort': '25',
        'flutter-plort': '25',
        'silky-sand': '10',
      },
    },
  },
  {
    name: 'Dream Lantern',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorDreamLantern.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        newbucks: '5000',
      },
      recipe: {
        newbucks: '10000',
        'honey-plort': '50',
        'crystal-plort': '50',
        'lava-dust': '10',
        'silky-sand': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Dream Lantern II',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetDreamLanternT2.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      price: {
        'shadow-plort': '25',
      },
      recipe: {
        newbucks: '15000',
        'honey-plort': '50',
        'crystal-plort': '50',
        'lava-dust': '10',
        'silky-sand': '10',
        'royal-jelly': '1',
      },
    },
  },
  {
    name: 'Radiant Projector',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetRadiantProjector.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'hunter-plort': '10',
        'boom-plort': '10',
        'silky-sand': '5',
        'lava-dust': '5',
      },
    },
  },
  {
    name: 'Nullifier',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetHarmonizer.png',
    tags: ['gadget', 'common', 'utility'],
    locations: {
      'exchange-station': ['the-prismacore'],
    },
    details: {
      price: {
        'prisma-plort': '20',
      },
      recipe: {
        newbucks: '1000',
        'shadow-plort': '20',
        'hyper-plort': '20',
        'twin-plort': '20',
        'sloomber-plort': '20',
      },
    },
  },
  {
    name: 'Disruption Detector',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetPrismaDetector.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '500',
        'prisma-plort': '10',
        'tin-petal': '5',
        'dream-bubble': '5',
      },
    },
  },
  {
    name: 'Quantum Drone Station',
    icon: '/assets/games/slime-rancher-2/gadgets/iconPediaDrone.png',
    tags: ['gadget', 'common', 'utility'],
    details: {
      recipe: {
        newbucks: '5000',
        'flutter-plort': '100',
        'lava-dust': '15',
        'wild-honey': '15',
        'strange-diamond': '2',
        'drone-station-module': '1',
      },
    },
  },
  {
    name: 'Blue Return Home Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportHomeBlue.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '500',
        'rock-plort': '10',
        'radiant-ore': '5',
        'primordy-oil': '5',
      },
    },
  },
  {
    name: 'Green Return Home Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportHomeGreen.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '1000',
        'angler-plort': '20',
        'radiant-ore': '10',
        'buzz-wax': '10',
        'wild-honey': '5',
      },
    },
  },
  {
    name: 'Red Return Home Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportHomeRed.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '1000',
        'boom-plort': '20',
        jellystone: '10',
        'primordy-oil': '10',
        'lava-dust': '5',
      },
    },
  },
  {
    name: 'Yellow Return Home Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportHomeYellow.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '250',
        'cotton-plort': '10',
        jellystone: '5',
        'deep-brine': '5',
      },
    },
  },
  {
    name: 'Ember Valley Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportEmberValley.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '2000',
        'boom-plort': '20',
        'crystal-plort': '10',
        'radiant-ore': '10',
        'primordy-oil': '10',
      },
    },
  },
  {
    name: 'Starlight Strand Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportStarlightStrand.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '2000',
        'hunter-plort': '20',
        'honey-plort': '10',
        'radiant-ore': '10',
        'buzz-wax': '10',
      },
    },
  },
  {
    name: 'Powderfall Bluffs Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportPowderfallBluffs.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '3000',
        'saber-plort': '20',
        'puddle-plort': '5',
        'radiant-ore': '10',
        'slime-fossil': '10',
      },
    },
  },
  {
    name: 'Grey Labyrinth Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportGreyLabyrinth.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        'shadow-plort': '25',
      },
      recipe: {
        newbucks: '5000',
        'sloomber-plort': '20',
        'tangle-plort': '10',
        'magma-comb': '10',
        'black-indigonium': '10',
      },
    },
  },
  {
    name: 'Blue Sanctuary Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportSanctuaryBlue.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {},
    },
  },
  {
    name: 'Green Sanctuary Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportSanctuaryGreen.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        sprinkles: '50',
      },
      recipe: {
        newbucks: '1000',
        'hyper-plort': '25',
        'magma-comb': '20',
        'tin-petal': '10',
      },
    },
  },
  {
    name: 'Violet Sanctuary Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportSanctuaryViolet.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        sprinkles: '50',
      },
      recipe: {
        newbucks: '1000',
        'sloomber-plort': '25',
        'dream-bubble': '20',
        'tin-petal': '10',
      },
    },
  },
  {
    name: 'Teal Sanctuary Portal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportSanctuaryTeal.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        sprinkles: '50',
      },
      recipe: {
        newbucks: '1000',
        'twin-plort': '25',
        'aqua-glass': '20',
        'tin-petal': '10',
      },
    },
  },
  {
    name: 'Market Link',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetMarketLink.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetMarketLink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '250',
        'pink-plort': '20',
        'buzz-wax': '10',
        'primordy-oil': '10',
        'silky-sand': '5',
      },
    },
  },
  {
    name: 'Refinery Link',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetRefineryLink.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetRefineryLink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '250',
        'phosphor-plort': '10',
        jellystone: '10',
        'deep-brine': '5',
      },
    },
  },
  {
    name: 'Amber Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportAmber.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetTeleportAmber.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        newbucks: '4000',
        'dervish-plort': '30',
        'tin-petal': '20',
        'dream-bubble': '10',
        'aqua-glass': '10',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Berry Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportBerry.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetTeleportBerry.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        newbucks: '4000',
        'sloomber-plort': '30',
        'tin-petal': '20',
        'black-indigonium': '10',
        'magma-comb': '10',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Blue Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportBlue.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetTeleportBlue.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '2000',
        'rock-plort': '30',
        'deep-brine': '10',
        'radiant-ore': '10',
        'wild-honey': '5',
        'strange-diamond': '2',
      },
    },
  },
  {
    name: 'Gold Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportGold.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetTeleportGold.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        'shadow-plort': '25',
      },
      recipe: {
        newbucks: '5000',
        'twin-plort': '30',
        'tin-petal': '20',
        'radiant-ore': '20',
        'wild-honey': '10',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Green Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportGreen.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetTeleportGreen.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '2500',
      },
      recipe: {
        newbucks: '3000',
        'twin-plort': '30',
        'tin-petal': '20',
        'black-indigonium': '10',
        'dream-bubble': '10',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Grey Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportGrey.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetTeleportGrey.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '2000',
        'tabby-plort': '30',
        'buzz-wax': '15',
        'radiant-ore': '15',
        'silky-sand': '10',
        'strange-diamond': '2',
      },
    },
  },
  {
    name: 'Pink Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportPink.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetTeleportPink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '1200',
        'pink-plort': '30',
        jellystone: '10',
        'radiant-ore': '10',
        'lava-dust': '5',
        'strange-diamond': '2',
      },
    },
  },
  {
    name: 'Red Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportRed.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetTeleportRed.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '2500',
      },
      recipe: {
        newbucks: '3000',
        'hyper-plort': '30',
        'tin-petal': '20',
        'aqua-glass': '10',
        'magma-comb': '10',
        'royal-jelly': '2',
      },
    },
  },
  {
    name: 'Snowy Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportWhite.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '1200',
        'saber-plort': '30',
        'slime-fossil': '20',
        'radiant-ore': '20',
        'lava-dust': '10',
        'strange-diamond': '2',
      },
    },
  },
  {
    name: 'Violet Teleporter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetTeleportViolet.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetTeleportViolet.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '2000',
        'batty-plort': '30',
        'primordy-oil': '15',
        'radiant-ore': '15',
        'silky-sand': '10',
        'strange-diamond': '2',
      },
    },
  },
  {
    name: 'Amber Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotAmber.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotAmber.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '200',
        'honey-plort': '10',
        'buzz-wax': '5',
        'radiant-ore': '3',
        'silky-sand': '1',
      },
    },
  },
  {
    name: 'Berry Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotBerry.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotBerry.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '300',
        'flutter-plort': '10',
        'primordy-oil': '5',
        'radiant-ore': '3',
        'wild-honey': '1',
      },
    },
  },
  {
    name: 'Blue Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotBlue.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotBlue.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '200',
        'rock-plort': '10',
        'buzz-wax': '5',
        'radiant-ore': '3',
        'silky-sand': '1',
      },
    },
  },
  {
    name: 'Gold Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotGold.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotGold.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '300',
        'cotton-plort': '10',
        jellystone: '5',
        'radiant-ore': '3',
        'silky-sand': '1',
      },
    },
  },
  {
    name: 'Green Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotGreen.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotGreen.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '200',
        'puddle-plort': '10',
        jellystone: '5',
        'radiant-ore': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Grey Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotGrey.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotGrey.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '200',
        'tabby-plort': '10',
        'deep-brine': '5',
        'radiant-ore': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Pink Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotPink.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotPink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '100',
        'pink-plort': '5',
        'deep-brine': '5',
        'radiant-ore': '3',
        'silky-sand': '1',
      },
    },
  },
  {
    name: 'Red Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotRed.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotRed.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '200',
        'fire-plort': '10',
        'primordy-oil': '5',
        'radiant-ore': '3',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Snowy Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotWhite.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '300',
        'saber-plort': '10',
        'perfect-snowflake': '5',
        'radiant-ore': '3',
        'wild-honey': '1',
      },
    },
  },
  {
    name: 'Violet Warp Depot',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetWarpDepotViolet.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconGadgetWarpDepotViolet.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      recipe: {
        newbucks: '200',
        'batty-plort': '10',
        jellystone: '5',
        'radiant-ore': '3',
        'wild-honey': '1',
      },
    },
  },
  {
    name: 'Blue Linked Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLinkedCannonBlue.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '800',
        'batty-plort': '10',
        'lightning-mote': '3',
      },
    },
  },
  {
    name: 'Green Linked Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLinkedCannonGreen.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '800',
        'twin-plort': '10',
        'black-indigonium': '5',
      },
    },
  },
  {
    name: 'Grey Linked Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLinkedCannonGray.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '800',
        'batty-plort': '10',
        'lightning-mote': '3',
      },
    },
  },
  {
    name: 'Gold Linked Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLinkedCannonGold.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '800',
        'sloomber-plort': '10',
        'dream-bubble': '5',
      },
    },
  },
  {
    name: 'Pink Linked Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLinkedCannonPink.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '800',
        'batty-plort': '10',
        'lightning-mote': '3',
      },
    },
  },
  {
    name: 'Red Linked Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLinkedCannonRed.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '800',
        'batty-plort': '10',
        'magma-comb': '5',
      },
    },
  },
  {
    name: 'Violet Linked Cannon',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLinkedCannonPurple.png',
    tags: ['gadget', 'common', 'warp-tech'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '800',
        'hyper-plort': '10',
        'magma-comb': '5',
      },
    },
  },
  {
    name: 'Emerald Grass',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGreenGrass.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '25',
        'tabby-plort': '5',
      },
    },
  },
  {
    name: 'Emerald Shrubs',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorEmeraldShrubs.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'phosphor-plort': '10',
      },
    },
  },
  {
    name: 'Emerald Cypress',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorEmeraldCypress.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'tabby-plort': '10',
      },
    },
  },
  {
    name: 'Tall Emerald Cypress',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallEmeraldCypress.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'puddle-plort': '5',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Emerald Cypress Cluster',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorEmeraldCypressCluster.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '75',
        'cotton-plort': '10',
      },
    },
  },
  {
    name: 'Amber Grass',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAmberGrass.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Amber Shrubs',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAmberShrubs.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '50',
        'cotton-plort': '10',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Amber Cypress',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAmberCypress.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '50',
        'phosphor-plort': '10',
        'primordy-oil': '1',
      },
    },
  },
  {
    name: 'Tall Amber Cypress',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallAmberCypress.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '50',
        'fire-plort': '5',
        'primordy-oil': '1',
      },
    },
  },
  {
    name: 'Amber Cypress Cluster',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAmberCypressCluster.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '75',
        'tabby-plort': '10',
        'primordy-oil': '1',
      },
    },
  },
  {
    name: 'Goldpetal Flowers',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldpetalFlowers.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '25',
        'phosphor-plort': '5',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Ochre Poppies',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorOchrePoppies.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
        'primordy-oil': '1',
      },
    },
  },
  {
    name: 'Cinder Spike Blossoms',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCinderSpikeBlossoms.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '25',
        'boom-plort': '10',
        'radiant-ore': '1',
      },
    },
  },
  {
    name: 'Starbloom Flowers',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStarbloomFlowers.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '25',
        'flutter-plort': '10',
        'buzz-wax': '1',
      },
    },
  },
  {
    name: 'Ash Blooms',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAshBlooms.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '25',
        'ringtail-plort': '5',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Sunfire Daisies',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSunfireDaisies.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '25',
        'phosphor-plort': '10',
        'primordy-oil': '1',
      },
    },
  },
  {
    name: 'Indigo Flowers',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPurpleGrassPatch.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '25',
      },
      recipe: {
        newbucks: '25',
        'puddle-plort': '10',
        'black-indigonium': '5',
      },
    },
  },
  {
    name: 'Rainbow Grass',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRainbowGrass.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
      },
    },
  },
  {
    name: 'Azure Grass',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAzureGrass.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
        'buzz-wax': '1',
      },
    },
  },
  {
    name: 'Azure Shrubs',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAzureShrubs.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '50',
        'tabby-plort': '10',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Azure Mangrove',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAzureMangrove.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '200',
        'puddle-plort': '10',
        'primordy-oil': '3',
        'deep-brine': '2',
        'wild-honey': '2',
      },
    },
  },
  {
    name: 'Pink Grass',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinkGrass.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
        'buzz-wax': '1',
      },
    },
  },
  {
    name: 'Pink Mangrove',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinkMangrove.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '150',
        'ringtail-plort': '20',
        jellystone: '3',
        'buzz-wax': '2',
        'wild-honey': '2',
      },
    },
  },
  {
    name: 'Pink Bonsai',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinkBonsai.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '150',
        'hunter-plort': '20',
        jellystone: '3',
        'buzz-wax': '2',
        'wild-honey': '2',
      },
    },
  },
  {
    name: 'Large Pink Bonsai',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLargePinkBonsai.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '200',
        'honey-plort': '20',
        jellystone: '3',
        'primordy-oil': '2',
        'silky-sand': '2',
      },
      variants: ['large-prismatic-bonsai'],
    },
  },
  {
    name: 'Large Prismatic Bonsai',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLargePinkBonsaiPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-rainbow-fields'],
    details: {
      price: {
        'rainbow-coin': '?',
      },
      original: ['large-pink-bonsai'],
    },
  },
  {
    name: 'Indigo Grass',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPurpleGrass.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '25',
      },
      recipe: {
        newbucks: '25',
        'puddle-plort': '10',
        'dream-bubble': '5',
      },
    },
  },
  {
    name: 'Indigo Shrubs',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPurpleShrubs.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'puddle-plort': '10',
        'magma-comb': '5',
      },
    },
  },
  {
    name: 'Indigo Cypress',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPurpleCypress.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'puddle-plort': '10',
        'tin-petal': '5',
      },
    },
  },
  {
    name: 'Tall Indigo Cypress',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPurpleCypressTall.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'puddle-plort': '10',
        'tin-petal': '5',
      },
    },
  },
  {
    name: 'Indigo Cypress Cluster',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPurpleCypressCluster.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '50',
      },
      recipe: {
        newbucks: '75',
        'puddle-plort': '10',
        'aqua-glass': '5',
      },
    },
  },
  {
    name: 'Seashells',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSeashellsFloor.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'tabby-plort': '5',
        'primordy-oil': '1',
      },
    },
  },
  {
    name: 'Seashell Collection',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSeashellCollection.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'cotton-plort': '5',
        'radiant-ore': '1',
      },
    },
  },
  {
    name: 'Sea Grass',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSeagrass.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'tabby-plort': '5',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Seaweed',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSeaweed.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Curly Seaweed',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCurlySeaweed.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'phosphor-plort': '5',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Blue Reef Bush',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBlueReefBush.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'saber-plort': '10',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Yellow Reef Bush',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorYellowReefBush.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'cotton-plort': '5',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Pink Reef Bush',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinkReefBush.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'fire-plort': '5',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Blue Swirl Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBlueSwirlTree.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'boom-plort': '10',
        'radiant-ore': '1',
      },
      variants: ['prismatic-swirl-tree'],
    },
  },
  {
    name: 'Prismatic Swirl Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBlueSwirlTreePrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'beach'],
    details: {
      price: {
        'rainbow-coin': '3',
      },
      original: ['blue-swirl-tree'],
    },
  },
  {
    name: 'Pink Reef Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecoPinkReefTree.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'angler-plort': '10',
        'primordy-oil': '1',
      },
    },
  },
  {
    name: 'Pink Reef Tree Cluster',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinkTreeCluster.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'cotton-plort': '10',
        'slime-fossil': '1',
      },
    },
  },
  {
    name: 'Tall Pink Reef Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallPinkTree.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'tabby-plort': '10',
        'storm-glass': '1',
      },
    },
  },
  {
    name: 'Short Pink Flower Reef',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorShortPinkFlower.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'dervish-plort': '10',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Pink Flower Reef',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecoPinkFlowerReef.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'honey-plort': '10',
        'buzz-wax': '1',
      },
    },
  },
  {
    name: 'Tall Pink Flower Reef',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallPinkFlower.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'tangle-plort': '10',
        'perfect-snowflake': '1',
      },
      variants: ['tall-prismatic-flower-reef'],
    },
  },
  {
    name: 'Tall Prismatic Flower Reef',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallPinkFlowerPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'beach'],
    details: {
      price: {
        'rainbow-coin': '?',
      },
      original: ['tall-pink-flower-reef'],
    },
  },
  {
    name: 'Blue Anemone',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBlueAnenome.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'phosphor-plort': '5',
        'buzz-wax': '1',
      },
    },
  },
  {
    name: 'Pink Anemone',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinkAnenome.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Pink Anemone Cluster',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinkAnenomeCluster.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '20',
      },
      recipe: {
        newbucks: '25',
        'tabby-plort': '5',
        'radiant-ore': '1',
      },
    },
  },
  {
    name: 'Sandy Yellow Coral',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSandyYellowCoral.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '50',
        'angler-plort': '10',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Short Palm',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorShortPalm.png',
    tags: [
      'gadget',
      'common',
      'decoration',
      'ember-valley',
      'powderfall-bluffs',
    ],
    details: {
      recipe: {
        newbucks: '100',
        'batty-plort': '20',
        jellystone: '3',
        'buzz-wax': '2',
      },
    },
  },
  {
    name: 'Medium Palm',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMediumPalm.png',
    tags: [
      'gadget',
      'common',
      'decoration',
      'ember-valley',
      'powderfall-bluffs',
    ],
    details: {
      recipe: {
        newbucks: '100',
        'honey-plort': '20',
        'deep-brine': '3',
        'primordy-oil': '2',
        'silky-sand': '2',
      },
      variants: ['medium-prismatic-palm'],
    },
  },
  {
    name: 'Medium Prismatic Palm',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMediumPalmPrismatic.png',
    tags: [
      'gadget',
      'common',
      'decoration',
      'variant',
      'ember-valley',
      'powderfall-bluffs',
    ],
    details: {
      price: {
        'rainbow-coin': '3',
      },
      original: ['medium-palm'],
    },
  },
  {
    name: 'Root Tangle',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRootTangle.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '100',
        'ringtail-plort': '20',
        'buzz-wax': '3',
        'primordy-oil': '2',
        'wild-honey': '2',
      },
    },
  },
  {
    name: 'Root Arches',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRootArches.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '100',
        'flutter-plort': '20',
        'buzz-wax': '3',
        'primordy-oil': '2',
        'wild-honey': '2',
      },
    },
  },
  {
    name: 'Rock Fragments',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRockFragments.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Rock Cluster',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRockCluster.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '10',
        'buzz-wax': '1',
      },
    },
  },
  {
    name: 'Rock Clump',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRockClump.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'cotton-plort': '10',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Small Boulder',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSmallBoulder.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'cotton-plort': '10',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Sharp Boulder',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSharpBoulder.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'rock-plort': '10',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Coastal Rock',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCoastalRock.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '75',
        'cotton-plort': '10',
        jellystone: '1',
      },
    },
  },
  {
    name: 'Coastal Rock Pillar',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCoastalRockPillar.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '75',
        'tabby-plort': '10',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Rainbow Mound',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRainbowMound.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'ringtail-plort': '10',
      },
    },
  },
  {
    name: 'Rainbow Lumps',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRainbowLumps.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '50',
        'rock-plort': '10',
      },
    },
  },
  {
    name: 'Short Pink Coral Columns',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorShortPinkCoralColumns.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '100',
        'angler-plort': '20',
        jellystone: '3',
        'buzz-wax': '2',
      },
    },
  },
  {
    name: 'Medium Pink Coral Columns',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMediumPinkCoralColumns.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '150',
        'angler-plort': '20',
        'primordy-oil': '3',
        jellystone: '2',
        'silky-sand': '2',
      },
    },
  },
  {
    name: 'Tall Pink Coral Columns',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallPinkCoralColumns.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '150',
        'angler-plort': '10',
        'buzz-wax': '3',
        'primordy-oil': '2',
        'silky-sand': '2',
      },
    },
  },
  {
    name: 'Tall Violet Swirl Shroom',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallVioletSwirlShroom.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '100',
        'honey-plort': '10',
        'deep-brine': '3',
        'buzz-wax': '2',
        'wild-honey': '2',
      },
    },
  },
  {
    name: 'Violet Swirl Shroom',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorVioletSwirlShroom.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '100',
        'hunter-plort': '20',
        'radiant-ore': '3',
        'deep-brine': '2',
        'wild-honey': '2',
      },
      variants: ['prismatic-swirl-shroom'],
    },
  },
  {
    name: 'Prismatic Swirl Shroom',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorVioletSwirlShroomPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'starlight-strand'],
    details: {
      price: {
        'rainbow-coin': '3',
      },
      original: ['violet-swirl-shroom'],
    },
  },
  {
    name: 'Azure Glow Shrooms',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAzureGlowShrooms.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '100',
        'phosphor-plort': '10',
        'deep-brine': '3',
        'buzz-wax': '2',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Pink Glow Shrooms',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinkGlowShrooms.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '100',
        'phosphor-plort': '20',
        jellystone: '3',
        'lava-dust': '2',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Cave Pillar',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCavePillar.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '75',
        'pink-plort': '10',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Thin Cave Pillar',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorThinCavePillar.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '50',
        'rock-plort': '10',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Stalagmite',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStalagmite.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '50',
        'crystal-plort': '10',
        'lava-dust': '1',
      },
    },
  },
  {
    name: 'Stalagmite Cluster',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStalagmiteCluster.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '75',
        'ringtail-plort': '10',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Short Magma Clump',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorShortMagmaClump.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '100',
        'crystal-plort': '20',
        'primordy-oil': '3',
        jellystone: '2',
      },
    },
  },
  {
    name: 'Tall Magma Clump',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallMagmaClump.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '150',
        'boom-plort': '10',
        'primordy-oil': '3',
        'deep-brine': '2',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Magma Pool',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMagmaPool.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '150',
        'fire-plort': '10',
        'primordy-oil': '3',
        jellystone: '2',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Rounded Magma Pool',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRoundedMagmaPool.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '150',
        'fire-plort': '10',
        'primordy-oil': '3',
        'radiant-ore': '2',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Ruby Grass',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorRedGrass.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
        'deep-brine': '1',
      },
    },
  },
  {
    name: 'Gnarled Ashwood',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGnarledAshwood.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '100',
        'crystal-plort': '20',
        'primordy-oil': '3',
        'buzz-wax': '2',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Short Red Ashwood',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorShortRedAshwood.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '150',
        'phosphor-plort': '20',
        'primordy-oil': '3',
        jellystone: '2',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Medium Red Ashwood',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMediumRedAshwood.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '150',
        'honey-plort': '20',
        'primordy-oil': '3',
        'buzz-wax': '2',
        'lava-dust': '2',
      },
      variants: ['medium-prismatic-ashwood'],
    },
  },
  {
    name: 'Medium Prismatic Ashwood',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMediumRedAshwoodPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'ember-valley'],
    details: {
      price: {
        'rainbow-coin': '?',
      },
      original: ['medium-red-ashwood'],
    },
  },
  {
    name: 'Tall Ashwood',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTallAshwood.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '100',
        'crystal-plort': '10',
        'primordy-oil': '3',
        'buzz-wax': '2',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Snowy Bush',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSnowyBush.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '100',
        'batty-plort': '10',
        'perfect-snowflake': '1',
      },
    },
  },
  {
    name: 'Ice Treeo',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorIceTree.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '250',
        'crystal-plort': '15',
        'perfect-snowflake': '2',
      },
    },
  },
  {
    name: 'Frosted Shell',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFrostedShell.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '200',
        'saber-plort': '10',
        'slime-fossil': '2',
      },
    },
  },
  {
    name: 'Glacial Crystal',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorIceCrystal.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '100',
        'rock-plort': '10',
        'perfect-snowflake': '1',
      },
    },
  },
  {
    name: 'SnowZ Bench',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSnowZbench.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '1000',
        'saber-plort': '25',
        'cotton-plort': '15',
        'yolky-plort': '5',
        'slime-fossil': '10',
        jellystone: '5',
      },
    },
  },
  {
    name: 'Crystal Spires',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCrystalSpires.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '50',
        'crystal-plort': '10',
        'perfect-snowflake': '1',
      },
    },
  },
  {
    name: 'Ice Cubed',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorIceCubed.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '100',
        'puddle-plort': '10',
        'perfect-snowflake': '2',
      },
    },
  },
  {
    name: 'Ice Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorIceLamp.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '250',
        'phosphor-plort': '30',
        'radiant-ore': '3',
        'perfect-snowflake': '2',
        'sun-sap': '1',
      },
    },
  },
  {
    name: 'Chilly Slime Stack',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorChillySlimeStack.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '800',
        'saber-plort': '25',
        'rock-plort': '10',
        'perfect-snowflake': '3',
      },
      variants: ['prismatic-chilly-slime-stack'],
    },
  },
  {
    name: 'Prismatic Chilly Slime Stack',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorChillySlimeStackPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'powderfall-bluffs'],
    details: {
      price: {
        'rainbow-coin': '?',
      },
      original: ['chilly-slime-stack'],
    },
  },
  {
    name: 'Fire Flower',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFireflower.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '500',
        'tangle-plort': '15',
        'buzz-wax': '5',
      },
    },
  },
  {
    name: 'Aurora Flowers',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAuroraFlowers.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '25',
        'saber-plort': '5',
      },
    },
  },
  {
    name: 'Aurora Pine',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAuroraPine.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '5000',
        'phosphor-plort': '25',
        'honey-plort': '25',
        'slime-fossil': '10',
        'buzz-wax': '10',
      },
    },
  },
  {
    name: 'Frozen Flame',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFrozenFlame.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '6000',
        'puddle-plort': '15',
        'fire-plort': '15',
        'perfect-snowflake': '10',
        'radiant-ore': '10',
      },
      variants: ['prismatic-frozen-flame'],
    },
  },
  {
    name: 'Prismatic Frozen Flame',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFrozenFlamePrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'powderfall-bluffs'],
    details: {
      price: {
        'rainbow-coin': '5',
      },
      original: ['frozen-flame'],
    },
  },
  {
    name: 'Majestic Snowflake',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMajesticSnowflake.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '8000',
        'saber-plort': '25',
        'flutter-plort': '25',
        'perfect-snowflake': '10',
      },
    },
  },
  {
    name: 'Snow Globe',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSnowglobe.png',
    tags: ['gadget', 'common', 'decoration', 'powderfall-bluffs'],
    details: {
      recipe: {
        newbucks: '15000',
        'yolky-plort': '20',
        'boom-plort': '25',
        'slime-fossil': '10',
      },
    },
  },
  {
    name: 'Stony Egg Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorEggLamp.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '2500',
        'yolky-plort': '5',
        'slime-fossil': '5',
        'primordy-oil': '5',
        'lava-dust': '2',
      },
    },
  },
  {
    name: 'Mossy Hen Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStoneHen.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '2500',
        'yolky-plort': '15',
        'deep-brine': '5',
        'slime-fossil': '5',
        'wild-honey': '2',
      },
      variants: ['prismatic-mossy-hen-statue'],
    },
  },
  {
    name: 'Prismatic Mossy Hen Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStoneHenPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'starlight-strand'],
    details: {
      price: {
        'rainbow-coin': '5',
      },
      original: ['mossy-hen-statue'],
    },
  },
  {
    name: 'Beach Umbrella',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMainUmbrella.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      recipe: {
        newbucks: '200',
        'cotton-plort': '20',
        'pink-plort': '5',
        'silky-sand': '1',
      },
      variants: ['pink-lemonade-beach-umbrella', 'teal-beach-umbrella'],
    },
  },
  {
    name: 'Pink Lemonade Beach Umbrella',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBeachUmbrellaPinkLemonade.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'beach'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['beach-umbrella'],
      variants: ['teal-beach-umbrella'],
    },
  },
  {
    name: 'Teal Beach Umbrella',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMainUmbrellaTeal.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'beach'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['beach-umbrella'],
      variants: ['pink-lemonade-beach-umbrella'],
    },
  },
  {
    name: 'Sunflower Umbrella',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorUmbrellaSunflower.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      recipe: {
        newbucks: '200',
        'cotton-plort': '5',
        'honey-plort': '5',
        'wild-honey': '1',
      },
      variants: ['peach-sunflower-umbrella', 'moonflower-umbrella'],
    },
  },
  {
    name: 'Peach Sunflower Umbrella',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSunflowerUmbrellaPeach.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'beach'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['sunflower-umbrella'],
      variants: ['moonflower-umbrella'],
    },
  },
  {
    name: 'Moonflower Umbrella',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSunflowerUmbrellaMoonflower.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'beach'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['sunflower-umbrella'],
      variants: ['peach-sunflower-umbrella'],
    },
  },
  {
    name: 'Sakura Umbrella',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorUmbrellaCherryBlossom.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'cotton-plort': '5',
        'pink-plort': '5',
        'buzz-wax': '1',
      },
    },
  },
  {
    name: 'Striped Beach Blanket',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBeachBlanketStriped.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '80',
      },
      recipe: {
        newbucks: '150',
        'cotton-plort': '10',
        jellystone: '3',
      },
      variants: ['wavey-beach-blanket'],
    },
  },
  {
    name: 'Wavey Beach Blanket',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBeachBlanketBeachWaves.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'beach'],
    details: {
      price: {
        newbucks: '80',
      },
      original: ['striped-beach-blanket'],
    },
  },
  {
    name: 'Pride Flag',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPrideFlag.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '40',
      },
      recipe: {
        newbucks: '25',
        'pink-plort': '5',
      },
    },
  },
  {
    name: 'Pennant',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSimpleFlag.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
      },
    },
  },
  {
    name: 'Ribbon Streamers',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSimpleStreamer.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
      },
    },
  },
  {
    name: 'Scarf Streamers',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStreamerScarf.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '50',
        'pink-plort': '5',
      },
    },
  },
  {
    name: 'Windsocks',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorWindSocks.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '50',
        'dervish-plort': '5',
      },
    },
  },
  {
    name: 'Small Pinwheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinwheelSmall.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '50',
        'dervish-plort': '5',
        'buzz-wax': '1',
      },
      variants: [
        'small-pink-lemonade-pinwheel',
        'small-teal-pinwheel',
        'small-prismatic-pinwheel',
      ],
    },
  },
  {
    name: 'Small Pink Lemonade Pinwheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinwheelSmallPinkLemonade.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '40',
      },
      original: ['small-pinwheel'],
      variants: ['small-teal-pinwheel', 'small-prismatic-pinwheel'],
    },
  },
  {
    name: 'Small Teal Pinwheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinwheelSmallTeal.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '40',
      },
      original: ['small-pinwheel'],
      variants: ['small-pink-lemonade-pinwheel', 'small-prismatic-pinwheel'],
    },
  },
  {
    name: 'Small Prismatic Pinwheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinwheelSmallPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '1',
      },
      original: ['small-pinwheel'],
      variants: ['small-pink-lemonade-pinwheel', 'small-teal-pinwheel'],
    },
  },
  {
    name: 'Large Pinwheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinwheelLarge.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '50',
        'tangle-plort': '5',
        jellystone: '1',
      },
      variants: [
        'large-pink-lemonade-pinwheel',
        'large-teal-pinwheel',
        'large-prismatic-pinwheel',
      ],
    },
  },
  {
    name: 'Large Pink Lemonade Pinwheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinwheelLargePinkLemonade.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '40',
      },
      original: ['large-pinwheel'],
      variants: ['large-teal-pinwheel', 'large-prismatic-pinwheel'],
    },
  },
  {
    name: 'Large Teal Pinwheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinwheelLargeTeal.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '40',
      },
      original: ['large-pinwheel'],
      variants: ['large-pink-lemonade-pinwheel', 'large-prismatic-pinwheel'],
    },
  },
  {
    name: 'Large Prismatic Pinwheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPinwheelLargePrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '1',
      },
      original: ['large-pinwheel'],
      variants: ['large-pink-lemonade-pinwheel', 'large-teal-pinwheel'],
    },
  },
  {
    name: 'Wide Trellis',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorEmptyTrellisWide.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '150',
        'angler-plort': '5',
        jellystone: '3',
      },
    },
  },
  {
    name: 'Small Trellis',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorEmptyTrellis.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        newbucks: '80',
      },
      recipe: {
        newbucks: '100',
        'tabby-plort': '10',
        'deep-brine': '3',
      },
    },
  },
  {
    name: 'Trellis Arch',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTrellisTall.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '150',
        'batty-plort': '5',
        'wild-honey': '3',
      },
    },
  },
  {
    name: 'Wide Emerald Trellis',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTrellisWide.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'tangle-plort': '10',
        jellystone: '3',
      },
    },
  },
  {
    name: 'Small Emerald Trellis',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorEmeraldVineTrellis.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '100',
        'cotton-plort': '20',
        'deep-brine': '3',
        jellystone: '2',
        'wild-honey': '2',
      },
    },
  },
  {
    name: 'Wheelbarrow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorWheelbarrow.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '100',
        'rock-plort': '10',
        'silky-sand': '5',
      },
    },
  },
  {
    name: 'Wind Chimes',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorWindchime.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '250',
        'honey-plort': '10',
        'drift-crystal': '5',
      },
    },
  },
  {
    name: 'Conservatory Bench',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBench.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '100',
        'pink-plort': '10',
      },
    },
  },
  {
    name: 'Large Simple Bench',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLargeSimpleBench.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'boom-plort': '10',
        'cotton-plort': '10',
        'drift-crystal': '3',
      },
    },
  },
  {
    name: 'Conservatory Chair',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSingleChair.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '100',
        'cotton-plort': '10',
      },
    },
  },
  {
    name: 'Conservatory Table',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTable.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '100',
        'tabby-plort': '10',
      },
    },
  },
  {
    name: 'Mushroom Planter',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMushroomPlanter.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '100',
        'tabby-plort': '5',
        'slime-fossil': '3',
      },
    },
  },
  {
    name: 'Potted Plants',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMainPottedPlant.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '250',
        'honey-plort': '10',
        'deep-brine': '5',
      },
    },
  },
  {
    name: 'Conservatory Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBasicTallLamp.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '100',
        'phosphor-plort': '10',
        'storm-glass': '1',
      },
    },
  },
  {
    name: 'Cheerful Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCheerfulStatue.png',
    tags: ['gadget', 'common', 'decoration', 'starlight-strand'],
    details: {
      recipe: {
        newbucks: '700',
        'ringtail-plort': '20',
        'fire-plort': '10',
        'tabby-plort': '15',
        'radiant-ore': '10',
        'buzz-wax': '10',
      },
    },
  },
  {
    name: 'Overjoyed Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorOverjoyedStatue.png',
    tags: ['gadget', 'common', 'decoration', 'the-rainbow-fields'],
    details: {
      recipe: {
        newbucks: '700',
        'crystal-plort': '15',
        'puddle-plort': '10',
        'hunter-plort': '15',
        'radiant-ore': '10',
        jellystone: '10',
      },
    },
  },
  {
    name: 'Happy Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorHappyStatue.png',
    tags: ['gadget', 'common', 'decoration', 'ember-valley'],
    details: {
      recipe: {
        newbucks: '700',
        'flutter-plort': '15',
        'pink-plort': '15',
        'batty-plort': '15',
        'radiant-ore': '10',
        'primordy-oil': '10',
      },
    },
  },
  {
    name: 'Boombox',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBoombox.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '1000',
        'boom-plort': '25',
        'angler-plort': '25',
        'slime-fossil': '5',
        'storm-glass': '3',
      },
      variants: ['pink-boombox', 'grey-boombox'],
    },
  },
  {
    name: 'Pink Boombox',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBoomboxPink.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['boombox'],
      variants: ['grey-boombox'],
    },
  },
  {
    name: 'Grey Boombox',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBoomboxGrey.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['boombox'],
      variants: ['pink-boombox'],
    },
  },
  {
    name: 'Dainty Teacup',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTeacupSmall.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '500',
        'puddle-plort': '10',
        'primordy-oil': '5',
      },
      variants: [
        'dainty-mint-teacup',
        'dainty-blue-teacup',
        'dainty-prismatic-teacup',
      ],
    },
  },
  {
    name: 'Dainty Mint Teacup',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSmallTeacupMint.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '300',
      },
      original: ['dainty-teacup'],
      variants: ['dainty-blue-teacup', 'dainty-prismatic-teacup'],
    },
  },
  {
    name: 'Dainty Blue Teacup',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSmallTeacupBlue.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '300',
      },
      original: ['dainty-teacup'],
      variants: ['dainty-mint-teacup', 'dainty-prismatic-teacup'],
    },
  },
  {
    name: 'Dainty Prismatic Teacup',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTeacupSmallPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '4',
      },
      original: ['dainty-teacup'],
      variants: ['dainty-mint-teacup', 'dainty-blue-teacup'],
    },
  },
  {
    name: 'Bountiful Teacup',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTeacupLarge.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '500',
        'fire-plort': '10',
        'storm-glass': '5',
      },
      variants: [
        'bountiful-mint-teacup',
        'bountiful-blue-teacup',
        'bountiful-prismatic-teacup',
      ],
    },
  },
  {
    name: 'Bountiful Mint Teacup',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLargeTeacupMint.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '300',
      },
      original: ['bountiful-teacup'],
      variants: ['bountiful-blue-teacup', 'bountiful-prismatic-teacup'],
    },
  },
  {
    name: 'Bountiful Blue Teacup',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLargeTeacupBlue.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '300',
      },
      original: ['bountiful-teacup'],
      variants: ['bountiful-mint-teacup', 'bountiful-prismatic-teacup'],
    },
  },
  {
    name: 'Bountiful Prismatic Teacup',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTeacupLargePrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '4',
      },
      original: ['bountiful-teacup'],
      variants: ['bountiful-mint-teacup', 'bountiful-blue-teacup'],
    },
  },
  {
    name: 'Pink Striped Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStripedLamp.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '200',
        'pink-plort': '20',
        'lightning-mote': '3',
      },
      variants: [
        'mint-striped-lamp',
        'blue-striped-lamp',
        'prismatic-striped-lamp',
      ],
    },
  },
  {
    name: 'Mint Striped Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStripedLampMint.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['pink-striped-lamp'],
      variants: ['blue-striped-lamp', 'prismatic-striped-lamp'],
    },
  },
  {
    name: 'Blue Striped Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStripedLampBlue.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['pink-striped-lamp'],
      variants: ['mint-striped-lamp', 'prismatic-striped-lamp'],
    },
  },
  {
    name: 'Prismatic Striped Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStripedLampPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '5',
      },
      original: ['pink-striped-lamp'],
      variants: ['mint-striped-lamp', 'blue-striped-lamp'],
    },
  },
  {
    name: 'Beach Lantern',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorBeachLantern.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      recipe: {
        newbucks: '200',
        'angler-plort': '20',
        'lava-dust': '3',
      },
    },
  },
  {
    name: 'Swing',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSwing.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '1500',
        'batty-plort': '25',
        'pink-plort': '25',
        'wild-honey': '4',
        'drift-crystal': '6',
      },
      variants: ['mint-swing', 'blue-swing', 'prismatic-swing'],
    },
  },
  {
    name: 'Mint Swing',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSwingMint.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['swing'],
      variants: ['blue-swing', 'prismatic-swing'],
    },
  },
  {
    name: 'Blue Swing',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSwingBlue.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['swing'],
      variants: ['mint-swing', 'prismatic-swing'],
    },
  },
  {
    name: 'Prismatic Swing',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSwingPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '?',
      },
      original: ['swing'],
      variants: ['mint-swing', 'blue-swing'],
    },
  },
  {
    name: 'Seesaw',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSeesaw.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '1000',
        'hunter-plort': '25',
        'tabby-plort': '25',
        'deep-brine': '3',
      },
      variants: ['mint-seesaw', 'blue-seesaw', 'prismatic-seesaw'],
    },
  },
  {
    name: 'Mint Seesaw',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSeesawMint.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['seesaw'],
      variants: ['blue-seesaw', 'prismatic-seesaw'],
    },
  },
  {
    name: 'Blue Seesaw',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSeesawBlue.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['seesaw'],
      variants: ['mint-seesaw', 'prismatic-seesaw'],
    },
  },
  {
    name: 'Prismatic Seesaw',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSeesawPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '5',
      },
      original: ['seesaw'],
      variants: ['mint-seesaw', 'blue-seesaw'],
    },
  },
  {
    name: 'Display Case',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTechDisplay.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      recipe: {
        newbucks: '1500',
        'crystal-plort': '10',
        'storm-glass': '5',
      },
    },
  },
  {
    name: 'Small Sandcastle',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSmallSandcastle.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'fire-plort': '10',
        'flutter-plort': '10',
        'wild-honey': '3',
      },
    },
  },
  {
    name: 'Large Sandcastle',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLargeSandCastleBig.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'puddle-plort': '10',
        'honey-plort': '10',
        'silky-sand': '3',
      },
    },
  },
  {
    name: 'Reef Chair',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorReefChair.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'puddle-plort': '5',
        'slime-fossil': '5',
      },
    },
  },
  {
    name: 'Reef Table',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorReefTable.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'angler-plort': '10',
        'deep-brine': '5',
      },
    },
  },
  {
    name: 'Clam Throne',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorClamThrone.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'angler-plort': '10',
        'honey-plort': '10',
        'deep-brine': '3',
      },
    },
  },
  {
    name: 'Slime Jail Standee',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStandeeJail.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'ringtail-plort': '10',
        'tabby-plort': '5',
        'lava-dust': '3',
      },
    },
  },
  {
    name: 'Sunflower Standee',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStandeeSunflower.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'tangle-plort': '10',
        'puddle-plort': '5',
        'radiant-ore': '3',
      },
    },
  },
  {
    name: 'Snowman Standee',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStandeeSnowman.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'saber-plort': '10',
        'cotton-plort': '5',
        'perfect-snowflake': '3',
      },
    },
  },
  {
    name: 'Tarr Standee',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStandeeTarr.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'hunter-plort': '10',
        'boom-plort': '5',
        'storm-glass': '3',
      },
    },
  },
  {
    name: 'Music Tile',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMusicTile.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '50',
        'saber-plort': '3',
        'tabby-plort': '3',
        'radiant-ore': '1',
      },
    },
  },
  {
    name: 'Music Pillar',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMusicPillar.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '50',
        'hunter-plort': '3',
        'cotton-plort': '3',
        'radiant-ore': '1',
      },
    },
  },
  {
    name: 'Small Net',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorNetPost.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '200',
      },
      recipe: {
        newbucks: '400',
        'cotton-plort': '10',
        'wild-honey': '3',
      },
    },
  },
  {
    name: 'Medium Net',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorNet.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'angler-plort': '10',
        'silky-sand': '3',
      },
    },
  },
  {
    name: 'Large Net',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorNetTall.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '1000',
        'dervish-plort': '20',
        'storm-glass': '5',
      },
    },
  },
  {
    name: 'Ancient Arched Wall',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAncientArchedWall.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '80',
      },
      recipe: {
        newbucks: '200',
        'rock-plort': '10',
        'tin-petal': '5',
        'black-indigonium': '5',
      },
    },
  },
  {
    name: 'Potted Lava Plants',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPottedLavaPlants.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '15',
      },
      recipe: {
        newbucks: '150',
        'tangle-plort': '10',
        'tin-petal': '5',
        'black-indigonium': '5',
      },
    },
  },
  {
    name: 'Excavation Lights',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorExcavationLights.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '80',
      },
      recipe: {
        newbucks: '150',
        'dervish-plort': '10',
        'aqua-glass': '5',
        'dream-bubble': '5',
      },
    },
  },
  {
    name: 'Wall Lighting',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAncientWallLighting.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '15',
      },
      recipe: {
        newbucks: '250',
        'sloomber-plort': '10',
        'lightning-mote': '3',
        'storm-glass': '3',
      },
    },
  },
  {
    name: 'Young Cedaroak',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorOakTree.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '15',
      },
      recipe: {
        newbucks: '200',
        'twin-plort': '10',
        'tin-petal': '5',
        'wild-honey': '5',
      },
    },
  },
  {
    name: 'Ancient Purple Oak',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPurpleOakTree.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '15',
      },
      recipe: {
        newbucks: '200',
        'sloomber-plort': '10',
        'tin-petal': '5',
        'buzz-wax': '5',
      },
    },
  },
  {
    name: 'Ancient Round Pillar',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAncientRoundPillar.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '80',
      },
      recipe: {
        newbucks: '100',
        'twin-plort': '10',
        'black-indigonium': '3',
      },
    },
  },
  {
    name: 'Gold Slime Floor Panel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldSlimeFloorPanel.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '1000',
        'sloomber-plort': '25',
        'flutter-plort': '25',
        'aqua-glass': '10',
        'dream-bubble': '10',
      },
    },
  },
  {
    name: 'Labyrinth Wall Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLabyrinthWallLamp.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '300',
        'fire-plort': '20',
        'storm-glass': '5',
        'tin-petal': '5',
      },
    },
  },
  {
    name: 'Labyrinth Standing Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLabyrinthStandingLamp.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '300',
        'fire-plort': '20',
        'lightning-mote': '5',
        'tin-petal': '5',
      },
    },
  },
  {
    name: 'Aquarium',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAquarium.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '25',
      },
      recipe: {
        newbucks: '6000',
        'twin-plort': '25',
        'hunter-plort': '25',
        'puddle-plort': '5',
        'aqua-glass': '10',
      },
    },
  },
  {
    name: 'Magma Fountain',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorLavaFountain.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '25',
      },
      recipe: {
        newbucks: '7000',
        'twin-plort': '25',
        'fire-plort': '25',
        'primordy-oil': '10',
        'magma-comb': '10',
      },
    },
  },
  {
    name: 'Angler Fountain',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorAnglerFountain.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '60',
      },
      recipe: {
        newbucks: '9000',
        'sloomber-plort': '25',
        'prisma-plort': '20',
        'deep-brine': '10',
        'aqua-glass': '10',
      },
    },
  },
  {
    name: 'Gold Twisted Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldTwistedTree.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '25',
      },
      recipe: {
        newbucks: '1000',
        'sloomber-plort': '20',
        'tin-petal': '15',
        'aqua-glass': '5',
        'dream-bubble': '5',
      },
    },
  },
  {
    name: 'Ship in a Bottle',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorShipInABottle.png',
    tags: ['gadget', 'common', 'decoration', 'beach'],
    details: {
      price: {
        newbucks: '3000',
      },
      recipe: {
        newbucks: '9000',
        'flutter-plort': '50',
        'tabby-plort': '50',
        'radiant-ore': '10',
        'sun-sap': '1',
      },
    },
  },
  {
    name: 'Carousel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCarousel.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '10000',
        'phosphor-plort': '50',
        'crystal-plort': '50',
        'radiant-ore': '10',
        'lightning-mote': '5',
        'strange-diamond': '1',
      },
      variants: ['mint-carousel', 'blue-carousel', 'prismatic-carousel'],
    },
  },
  {
    name: 'Mint Carousel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCarouselMint.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '3500',
      },
      original: ['carousel'],
      variants: ['blue-carousel', 'prismatic-carousel'],
    },
  },
  {
    name: 'Blue Carousel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCarouselBlue.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '3500',
      },
      original: ['carousel'],
      variants: ['mint-carousel', 'prismatic-carousel'],
    },
  },
  {
    name: 'Prismatic Carousel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCarouselPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '?',
      },
      original: ['carousel'],
      variants: ['mint-carousel', 'blue-carousel'],
    },
  },
  {
    name: 'Ferris Wheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFerrisWheel.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      recipe: {
        newbucks: '10000',
        'ringtail-plort': '50',
        'rock-plort': '50',
        'deep-brine': '10',
        'drift-crystal': '3',
        'sun-sap': '1',
      },
      variants: [
        'mint-ferris-wheel',
        'blue-ferris-wheel',
        'prismatic-ferris-wheel',
      ],
    },
  },
  {
    name: 'Mint Ferris Wheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFerrisWheelMint.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '3500',
      },
      original: ['ferris-wheel'],
      variants: ['blue-ferris-wheel', 'prismatic-ferris-wheel'],
    },
  },
  {
    name: 'Blue Ferris Wheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFerrisWheelBlue.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '3500',
      },
      original: ['ferris-wheel'],
      variants: ['mint-ferris-wheel', 'prismatic-ferris-wheel'],
    },
  },
  {
    name: 'Prismatic Ferris Wheel',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorFerrisWheelPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '?',
      },
      original: ['ferris-wheel'],
      variants: ['mint-ferris-wheel', 'blue-ferris-wheel'],
    },
  },
  {
    name: 'Wooden Fence',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorWoodenFence.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '150',
        'twin-plort': '10',
        'tin-petal': '5',
        'black-indigonium': '5',
      },
    },
  },
  {
    name: 'Straight Stone Fence',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStraightStoneFence.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'sloomber-plort': '10',
        'rock-plort': '10',
        'black-indigonium': '5',
        jellystone: '5',
      },
      variants: ['straight-prismatic-stone-fence'],
    },
  },
  {
    name: 'Straight Prismatic Stone Fence',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStraightStoneFencePrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        'rainbow-coin': '2',
      },
      original: ['straight-stone-fence'],
    },
  },
  {
    name: 'Curved Stone Fence',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCurvedStoneFence.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'sloomber-plort': '10',
        'rock-plort': '10',
        'black-indigonium': '5',
        jellystone: '5',
      },
      variants: ['curved-prismatic-stone-fence'],
    },
  },
  {
    name: 'Curved Prismatic Stone Fence',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCurvedStoneFencePrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        'rainbow-coin': '2',
      },
      original: ['curved-stone-fence'],
    },
  },
  {
    name: 'Electric Pillar Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorElectricLampPillar.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'rainbow-coin': '5',
      },
      recipe: {
        newbucks: '1500',
        'hyper-plort': '20',
        'phosphor-plort': '20',
        'tin-petal': '10',
        'black-indigonium': '10',
      },
    },
  },
  {
    name: 'Small Pink Flower Pillow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetFlowerPillowSmall.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'honey-plort': '10',
        'cotton-plort': '10',
        'silky-sand': '5',
      },
      variants: [
        'small-purple-flower-pillow',
        'small-yellow-flower-pillow',
        'small-blue-flower-pillow',
      ],
    },
  },
  {
    name: 'Small Purple Flower Pillow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSmallPurpleFlowerPillow.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['small-pink-flower-pillow'],
      variants: ['small-yellow-flower-pillow', 'small-blue-flower-pillow'],
    },
  },
  {
    name: 'Small Yellow Flower Pillow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSmallYellowFlowerPillow.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['small-pink-flower-pillow'],
      variants: ['small-purple-flower-pillow', 'small-blue-flower-pillow'],
    },
  },
  {
    name: 'Small Blue Flower Pillow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSmallBlueFlowerPillow.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      original: ['small-pink-flower-pillow'],
      variants: ['small-purple-flower-pillow', 'small-yellow-flower-pillow'],
    },
  },
  {
    name: 'Large Blue Flower Pillow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetFlowerPillowLarge.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '200',
      },
      recipe: {
        newbucks: '250',
        'flutter-plort': '10',
        'batty-plort': '10',
        'wild-honey': '5',
      },
      variants: [
        'large-coral-flower-pillow',
        'large-purple-flower-pillow',
        'large-yellow-flower-pillow',
      ],
    },
  },
  {
    name: 'Large Coral Flower Pillow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLargeCoralFlowerPillow.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '200',
      },
      original: ['large-blue-flower-pillow'],
      variants: ['large-purple-flower-pillow', 'large-yellow-flower-pillow'],
    },
  },
  {
    name: 'Large Purple Flower Pillow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLargePurpleFlowerPillow.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '200',
      },
      original: ['large-blue-flower-pillow'],
      variants: ['large-coral-flower-pillow', 'large-yellow-flower-pillow'],
    },
  },
  {
    name: 'Large Yellow Flower Pillow',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetLargeYellowFlowerPillow.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '200',
      },
      original: ['large-blue-flower-pillow'],
      variants: ['large-coral-flower-pillow', 'large-purple-flower-pillow'],
    },
  },
  {
    name: 'Azure Water Flower',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorSwampBlueFlower.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'hyper-plort': '10',
        'puddle-plort': '10',
        'aqua-glass': '5',
      },
    },
  },
  {
    name: 'Overgrown Lilypad',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetOvergrownLilyPad.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'twin-plort': '10',
        'hyper-plort': '10',
        'aqua-glass': '5',
      },
    },
  },
  {
    name: 'Giant Stalks',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTwistyOvergrownTree.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '150',
      },
      recipe: {
        newbucks: '200',
        'tangle-plort': '10',
        'tabby-plort': '10',
        'buzz-wax': '5',
      },
      variants: ['prismatic-giant-stalks'],
    },
  },
  {
    name: 'Prismatic Giant Stalks',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorTwistyOvergrownTreePrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        'rainbow-coin': '4',
      },
      original: ['giant-stalks'],
    },
  },
  {
    name: 'Blue Floral Slime Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetFlowerSlimeTree.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '800',
      },
      recipe: {
        newbucks: '1500',
        'tabby-plort': '20',
        'tangle-plort': '20',
        'radiant-ore': '10',
        jellystone: '10',
      },
      variants: [
        'coral-floral-slime-tree',
        'purple-floral-slime-tree',
        'yellow-floral-slime-tree',
      ],
    },
  },
  {
    name: 'Coral Floral Slime Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetCoralFloralSlimeTree.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '800',
      },
      original: ['blue-floral-slime-tree'],
      variants: ['purple-floral-slime-tree', 'yellow-floral-slime-tree'],
    },
  },
  {
    name: 'Purple Floral Slime Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetPurpleFloralSlimeTree.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '800',
      },
      original: ['blue-floral-slime-tree'],
      variants: ['coral-floral-slime-tree', 'yellow-floral-slime-tree'],
    },
  },
  {
    name: 'Yellow Floral Slime Tree',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetYellowFloralSlimeTree.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '800',
      },
      original: ['blue-floral-slime-tree'],
      variants: ['coral-floral-slime-tree', 'purple-floral-slime-tree'],
    },
  },
  {
    name: 'Blue Flower Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetPlantLamp.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '800',
      },
      recipe: {
        newbucks: '1500',
        'hyper-plort': '20',
        'hunter-plort': '20',
        'tin-petal': '10',
        'black-indigonium': '10',
      },
      variants: [
        'prismatic-flower-lamp',
        'purple-flower-lamp',
        'orange-flower-lamp',
        'pink-flower-lamp',
      ],
    },
  },
  {
    name: 'Prismatic Flower Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetPlantLampPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '15',
      },
      original: ['blue-flower-lamp'],
      variants: [
        'purple-flower-lamp',
        'orange-flower-lamp',
        'pink-flower-lamp',
      ],
    },
  },
  {
    name: 'Purple Flower Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPurplePlantLamp.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '800',
      },
      original: ['blue-flower-lamp'],
      variants: [
        'prismatic-flower-lamp',
        'orange-flower-lamp',
        'pink-flower-lamp',
      ],
    },
  },
  {
    name: 'Orange Flower Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecoOrangePlantLamp.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '800',
      },
      original: ['blue-flower-lamp'],
      variants: [
        'prismatic-flower-lamp',
        'purple-flower-lamp',
        'pink-flower-lamp',
      ],
    },
  },
  {
    name: 'Pink Flower Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecoPinkPlantLamp.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        newbucks: '800',
      },
      original: ['blue-flower-lamp'],
      variants: [
        'prismatic-flower-lamp',
        'purple-flower-lamp',
        'orange-flower-lamp',
      ],
    },
  },
  {
    name: 'High-Tech Wall',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGigisCoreBarrier.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        'rainbow-coin': '5',
      },
      recipe: {
        newbucks: '500',
        'hyper-plort': '10',
        'rock-plort': '10',
        'tin-petal': '10',
        'black-indigonium': '5',
      },
    },
  },
  {
    name: 'High-Tech Battery',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGigisBattery.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        'rainbow-coin': '5',
      },
      recipe: {
        newbucks: '500',
        'hyper-plort': '10',
        'phosphor-plort': '10',
        'tin-petal': '10',
        'magma-comb': '5',
      },
    },
  },
  {
    name: 'Scientists Chair',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorScientistChair.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '150',
        'saber-plort': '10',
        'lava-dust': '3',
      },
    },
  },
  {
    name: 'Scientists Desk',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorScientistTable.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        newbucks: '300',
      },
      recipe: {
        newbucks: '500',
        'honey-plort': '20',
        'crystal-plort': '20',
        'primordy-oil': '5',
        'buzz-wax': '5',
      },
    },
  },
  {
    name: 'Short Comfy Couch',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCouchSingle.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '200',
        'angler-plort': '10',
        'primordy-oil': '10',
      },
    },
  },
  {
    name: 'Long Comfy Couch',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorCouchDouble.png',
    tags: ['gadget', 'common', 'decoration', 'the-conservatory'],
    details: {
      price: {
        newbucks: '100',
      },
      recipe: {
        newbucks: '200',
        'fire-plort': '10',
        'buzz-wax': '10',
      },
    },
  },
  {
    name: 'Blue Lava Lamp',
    'sister-name': 'Blue Slime Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampBlue.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampBlue.png',
    tags: ['gadget', 'common', 'decoration', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      recipe: {
        newbucks: '1000',
        'puddle-plort': '20',
        jellystone: '10',
        'lava-dust': '5',
      },
      variants: [
        'gold-lava-lamp',
        'green-lava-lamp',
        'red-lava-lamp',
        'prismatic-lava-lamp',
        'shadow-lava-lamp',
      ],
    },
  },
  {
    name: 'Gold Lava Lamp',
    'sister-name': 'Gold Slime Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampGold.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampGold.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['blue-lava-lamp'],
      variants: [
        'green-lava-lamp',
        'red-lava-lamp',
        'prismatic-lava-lamp',
        'shadow-lava-lamp',
      ],
    },
  },
  {
    name: 'Green Lava Lamp',
    'sister-name': 'Green Slime Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampGreen.png',
    'sr-icon':
      '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampGreen.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['blue-lava-lamp'],
      variants: [
        'gold-lava-lamp',
        'red-lava-lamp',
        'prismatic-lava-lamp',
        'shadow-lava-lamp',
      ],
    },
  },
  {
    name: 'Red Lava Lamp',
    'sister-name': 'Red Slime Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampRed.png',
    'sr-icon': '/assets/games/slime-rancher/gadgets/iconDecorSlimeLampRed.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        newbucks: '500',
      },
      original: ['blue-lava-lamp'],
      variants: [
        'gold-lava-lamp',
        'green-lava-lamp',
        'prismatic-lava-lamp',
        'shadow-lava-lamp',
      ],
    },
  },
  {
    name: 'Prismatic Lava Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampPurple.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'rainbow-coin': '3',
      },
      original: ['blue-lava-lamp'],
      variants: [
        'gold-lava-lamp',
        'green-lava-lamp',
        'red-lava-lamp',
        'shadow-lava-lamp',
      ],
    },
  },
  {
    name: 'Shadow Lava Lamp',
    icon: '/assets/games/slime-rancher-2/gadgets/iconGadgetSlimeLavaLampBlack.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'fun'],
    details: {
      price: {
        'shadow-plort': '?',
      },
      original: ['blue-lava-lamp'],
      variants: [
        'gold-lava-lamp',
        'green-lava-lamp',
        'red-lava-lamp',
        'prismatic-lava-lamp',
      ],
    },
  },
  {
    name: 'Miniatures Dome',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMiniaturesDome.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'shadow-plort': '25',
      },
      recipe: {
        newbucks: '10000',
        'twin-plort': '25',
        'batty-plort': '25',
        'tin-petal': '20',
        'dream-bubble': '20',
      },
    },
  },
  {
    name: 'Miniature Windmill',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMiniatureWindmill.png',
    tags: ['gadget', 'common', 'decoration', 'the-grey-labyrinth'],
    details: {
      price: {
        'rainbow-coin': '10',
      },
      recipe: {
        newbucks: '10000',
        'sloomber-plort': '20',
        'dervish-plort': '20',
        'dream-bubble': '20',
        'wild-honey': '10',
      },
      variants: ['prismatic-miniature-windmill'],
    },
  },
  {
    name: 'Prismatic Miniature Windmill',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorMiniatureWindmillPrismatic.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'the-grey-labyrinth'],
    details: {
      price: {
        'rainbow-coin': '15',
      },
      original: ['miniature-windmill'],
    },
  },
  {
    name: 'Square Stone Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStonePlatformSquare.png',
    tags: ['gadget', 'common', 'decoration', 'platform'],
    details: {
      recipe: {
        newbucks: '200',
        'hyper-plort': '20',
        'magma-comb': '5',
      },
    },
  },
  {
    name: 'Round Grass Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformRoundGrass.png',
    tags: ['gadget', 'common', 'decoration', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      recipe: {
        newbucks: '200',
        'twin-plort': '20',
        'dream-bubble': '5',
      },
      variants: [
        'round-ice-platform',
        'round-magma-platform',
        'round-moss-platform',
      ],
    },
  },
  {
    name: 'Round Ice Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformRoundIce.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['round-grass-platform'],
      variants: ['round-magma-platform', 'round-moss-platform'],
    },
  },
  {
    name: 'Round Magma Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformRoundMagma.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['round-grass-platform'],
      variants: ['round-ice-platform', 'round-moss-platform'],
    },
  },
  {
    name: 'Round Moss Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformRoundMoss.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['round-grass-platform'],
      variants: ['round-ice-platform', 'round-magma-platform'],
    },
  },
  {
    name: 'Round Stone Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorStonePlatformRound.png',
    tags: ['gadget', 'common', 'decoration', 'platform'],
    details: {
      recipe: {
        newbucks: '200',
        'sloomber-plort': '20',
        'black-indigonium': '5',
      },
    },
  },
  {
    name: 'Step Grass Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformStepGrass.png',
    tags: ['gadget', 'common', 'decoration', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      recipe: {
        newbucks: '200',
        'hyper-plort': '20',
        'dream-bubble': '5',
      },
      variants: [
        'step-ice-platform',
        'step-magma-platform',
        'step-moss-platform',
      ],
    },
  },
  {
    name: 'Step Ice Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformStepIce.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['step-grass-platform'],
      variants: ['step-magma-platform', 'step-moss-platform'],
    },
  },
  {
    name: 'Step Magma Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformStepMagma.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['step-grass-platform'],
      variants: ['step-ice-platform', 'step-moss-platform'],
    },
  },
  {
    name: 'Step Moss Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformStepMoss.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['step-grass-platform'],
      variants: ['step-ice-platform', 'step-magma-platform'],
    },
  },
  {
    name: 'Half Circle Grass Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformHalfCircleGrass.png',
    tags: ['gadget', 'common', 'decoration', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      recipe: {
        newbucks: '200',
        'sloomber-plort': '20',
        'aqua-glass': '5',
      },
      variants: [
        'half-circle-ice-platform',
        'half-circle-magma-platform',
        'half-circle-moss-platform',
      ],
    },
  },
  {
    name: 'Half Circle Ice Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformHalfIce.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['half-circle-grass-platform'],
      variants: ['half-circle-magma-platform', 'half-circle-moss-platform'],
    },
  },
  {
    name: 'Half Circle Magma Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformHalfMagma.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['half-circle-grass-platform'],
      variants: ['half-circle-ice-platform', 'half-circle-moss-platform'],
    },
  },
  {
    name: 'Half Circle Moss Platform',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorPlatformHalfCircleMoss.png',
    tags: ['gadget', 'common', 'decoration', 'variant', 'platform'],
    details: {
      price: {
        sprinkles: '10',
      },
      original: ['half-circle-grass-platform'],
      variants: ['half-circle-ice-platform', 'half-circle-magma-platform'],
    },
  },
  {
    name: 'Golden Chicken Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenHenhenStatue.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      recipe: {
        newbucks: '15000',
        'yolky-plort': '20',
        'gold-plort': '3',
        'slime-fossil': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Cotton Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenCottonStatue.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      recipe: {
        newbucks: '15000',
        'cotton-plort': '50',
        'gold-plort': '3',
        'deep-brine': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Tabby Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenStatueTabby.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      price: {
        newbucks: '4000',
      },
      recipe: {
        newbucks: '10000',
        'tabby-plort': '50',
        'gold-plort': '3',
        'buzz-wax': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Angler Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldAnglerStatue.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      recipe: {
        newbucks: '15000',
        'angler-plort': '50',
        'gold-plort': '3',
        'primordy-oil': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Batty Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenStatueBatty.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      price: {
        newbucks: '4000',
      },
      recipe: {
        newbucks: '10000',
        'batty-plort': '50',
        'gold-plort': '3',
        jellystone: '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Honey Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenStatueHoney.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {},
  },
  {
    name: 'Golden Flutter Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenFlutterStatue.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      recipe: {
        newbucks: '15000',
        'flutter-plort': '50',
        'gold-plort': '3',
        'buzz-wax': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Dervish Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenDervishStatue.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      recipe: {
        newbucks: '15000',
        'dervish-plort': '50',
        'gold-plort': '3',
        'deep-brine': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Tangle Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenTangleStatue.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      recipe: {
        newbucks: '15000',
        'tangle-plort': '50',
        'gold-plort': '3',
        jellystone: '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Saber Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenStatueSaber.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {},
  },
  {
    name: 'Golden Twin Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenStatueTwin.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      price: {
        'rainbow-coin': '25',
      },
      recipe: {
        newbucks: '15000',
        'twin-plort': '50',
        'gold-plort': '3',
        'tin-petal': '25',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Sloomber Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenStatueSloomber.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      price: {
        'rainbow-coin': '25',
      },
      recipe: {
        newbucks: '15000',
        'sloomber-plort': '50',
        'gold-plort': '3',
        'tin-petal': '25',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Hyper Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenStatueHyper.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      price: {
        'rainbow-coin': '25',
      },
      recipe: {
        newbucks: '15000',
        'hyper-plort': '50',
        'gold-plort': '3',
        'tin-petal': '25',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Golden Yolky Statue',
    icon: '/assets/games/slime-rancher-2/gadgets/iconDecorGoldenStatueYolky.png',
    tags: ['gadget', 'common', 'decoration', 'golden-statue'],
    details: {
      price: {
        newbucks: '10000',
      },
      recipe: {
        newbucks: '15000',
        'yolky-plort': '50',
        'gold-plort': '3',
        'wild-honey': '10',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'The Rainbow Fields Pot',
    icon: '/assets/games/slime-rancher-2/pots/the-rainbow-fields-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['the-rainbow-fields'],
      gordo: ['the-rainbow-fields'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'cotton-slime': '1',
        'tabby-slime': '1',
        'phosphor-slime': '1',
        carrot: '1',
        'pogo-fruit': '1',
        cuberry: '1',
        'hen-hen': '1',
        roostro: '1',
        'stony-hen': '1',
      },
      'source-gordo': ['pink-gordo', 'cotton-gordo', 'phosphor-gordo'],
    },
  },
  {
    name: 'Rainbow Fields Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/the-rainbow-fields-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['the-rainbow-fields'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'deep-brine': '1',
        jellystone: '1',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Starlight Strand Pot',
    icon: '/assets/games/slime-rancher-2/pots/starlight-strand-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['starlight-strand'],
      gordo: ['starlight-strand'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'rock-slime': '1',
        'honey-slime': '1',
        carrot: '1',
        'heart-beet': '1',
        'pogo-fruit': '1',
        cuberry: '1',
        'hen-hen': '1',
        roostro: '1',
        'sea-hen': '1',
      },
      'source-gordo': [
        'hunter-gordo',
        'honey-gordo',
        'ringtail-gordo',
        'angler-gordo',
        'flutter-gordo',
      ],
    },
  },
  {
    name: 'Starlight Strand Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/starlight-strand-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['starlight-strand'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'silky-sand': '1',
        'wild-honey': '1',
        'radiant-ore': '1',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Ember Valley Pot',
    icon: '/assets/games/slime-rancher-2/pots/ember-valley-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['ember-valley'],
      gordo: ['ember-valley'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'tabby-slime': '1',
        'phosphor-slime': '1',
        'batty-slime': '1',
        carrot: '1',
        'heart-beet': '1',
        'pogo-fruit': '1',
        cuberry: '1',
        'hen-hen': '1',
        roostro: '1',
        'briar-hen': '1',
      },
      'source-gordo': [
        'batty-gordo',
        'boom-gordo',
        'crystal-gordo',
        'rock-gordo',
        'tabby-gordo',
      ],
    },
  },
  {
    name: 'Ember Valley Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/ember-valley-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['ember-valley'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'primordy-oil': '1',
        'silky-sand': '1',
        'lava-dust': '1',
        'radiant-ore': '1',
        'strange-diamond': '1',
      },
    },
  },
  {
    name: 'Powderfall Bluffs Pot',
    icon: '/assets/games/slime-rancher-2/pots/powderfall-bluffs-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['powderfall-bluffs'],
      gordo: ['powderfall-bluffs'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'hunter-slime': '1',
        'saber-slime': '1',
        carrot: '1',
        'odd-onion': '1',
        'pogo-fruit': '1',
        cuberry: '1',
        'hen-hen': '1',
        roostro: '1',
        'thundercluck-hen': '1',
      },
      'source-gordo': ['saber-gordo'],
    },
  },
  {
    name: 'Powderfall Bluffs Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/powderfall-bluffs-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['powderfall-bluffs'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'slime-fossil': '1',
        'perfect-snowflake': '1',
        'sun-sap': '1',
      },
    },
  },
  {
    name: 'Shadow Pot',
    icon: '/assets/games/slime-rancher-2/pots/shadow-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: [
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {
      'possible-drops (1 newbucks)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'shadow-slime': '3-6',
      },
    },
  },
  {
    name: 'Waterworks Pot',
    icon: '/assets/games/slime-rancher-2/pots/waterworks-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['waterworks'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'phosphor-slime': '1',
        'angler-slime': '1',
        'hunter-slime': '1',
        carrot: '1',
        'pogo-fruit': '1',
        cuberry: '1',
        'hen-hen': '1',
        roostro: '1',
        'sea-hen': '1',
      },
    },
  },
  {
    name: 'Waterworks Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/waterworks-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['waterworks'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'strange-diamond': '1',
        'aqua-glass': '1',
        'tin-petal': '1',
      },
    },
  },
  {
    name: 'Lava Depths Pot',
    icon: '/assets/games/slime-rancher-2/pots/lava-depths-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['lava-depths'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'batty-slime': '1',
        'boom-slime': '1',
        'crystal-slime': '1',
        carrot: '1',
        'heart-beet': '1',
        'pogo-fruit': '1',
        pomegranite: '1',
        'hen-hen': '1',
        roostro: '1',
        'briar-hen': '1',
      },
    },
  },
  {
    name: 'Lava Depths Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/lava-depths-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['lava-depths'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'strange-diamond': '1',
        'magma-comb': '1',
        'tin-petal': '1',
      },
    },
  },
  {
    name: 'Impossible Sky Pot',
    icon: '/assets/games/slime-rancher-2/pots/impossible-sky-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['impossible-sky'],
      gordo: ['impossible-sky'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'tabby-slime': '1',
        'rock-slime': '1',
        'twin-slime': '1',
        carrot: '1',
        'heart-beet': '1',
        'pogo-fruit': '1',
        polaricherry: '1',
        'hen-hen': '1',
        roostro: '1',
        'stony-hen': '1',
      },
      'source-gordo': ['twin-gordo'],
    },
  },
  {
    name: 'Impossible Sky Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/impossible-sky-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['impossible-sky'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'tin-petal': '1',
        'black-indigonium': '1',
        'royal-jelly': '1',
      },
    },
  },
  {
    name: 'Dream Land Pot',
    icon: '/assets/games/slime-rancher-2/pots/dream-land-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['dream-land'],
      gordo: ['dream-land'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'cotton-slime': '1',
        'sloomber-slime': '1',
        'twin-slime': '1',
        carrot: '1',
        'water-lettuce': '1',
        'pogo-fruit': '1',
        polaricherry: '1',
        'hen-hen': '1',
        roostro: '1',
        'candied-hen': '1',
      },
      'source-gordo': ['sloomber-gordo'],
    },
  },
  {
    name: 'Dream Land Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/dream-land-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['dream-land'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'dream-bubble': '1',
        'tin-petal': '1',
        'royal-jelly': '1',
      },
    },
  },
  {
    name: 'The Terrarium Pot',
    icon: '/assets/games/slime-rancher-2/pots/the-terrarium-pot.png',
    tags: ['pot', 'common'],
    locations: {
      spawn: ['the-terrarium'],
      gordo: ['the-terrarium'],
    },
    details: {
      'possible-drops (1 newbucks, 3 resource)': {
        newbucks: '20',
        'newbucks!': '50',
        'newbucks!!': '100',
        'pink-slime': '1',
        'rock-slime': '1',
        'twin-slime': '1',
        'hyper-slime': '1',
        carrot: '1',
        'heart-beet': '1',
        'turbo-tater': '1',
        'pogo-fruit': '1',
        polaricherry: '1',
        'hen-hen': '1',
        roostro: '1',
      },
      'source-gordo': ['hyper-gordo'],
    },
  },
  {
    name: 'The Terrarium Golden Pot',
    icon: '/assets/games/slime-rancher-2/pots/the-terrarium-golden-pot.png',
    tags: ['pot', 'rare'],
    locations: {
      spawn: ['the-terrarium'],
    },
    details: {
      'possible-drops (1 newbucks, 6 to 9 resource)': {
        newbucks: '500',
        'newbucks!': '1000',
        'newbucks!!': '2000',
        'sun-sap': '1',
        'tin-petal': '1',
        'black-indigonium': '1',
      },
    },
  },
  {
    name: 'Newbucks',
    icon: '/assets/games/slime-rancher-2/misc/iconNewbuck.png',
    tags: ['misc', 'common'],
    locations: {
      pot: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      'golden-pot': [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
      'shadow-pot': [
        'waterworks',
        'lava-depths',
        'impossible-sky',
        'dream-land',
        'the-terrarium',
      ],
    },
    details: {},
  },
  {
    name: 'Rainbow Coin',
    icon: '/assets/games/slime-rancher-2/misc/rainbowcoinicon.png',
    tags: ['misc', 'common'],
    locations: {
      'exchange-station': ['the-prismacore'],
    },
    details: {
      price: {
        'prisma-plort': '10',
      },
    },
  },
];

export const cards = processCards(rawCards);
