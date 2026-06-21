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
      '/assets/games/slime-rancher/slimes/secret-style/iconSlimeSaberExotic.png',
    'sr-icon': '/assets/games/slime-rancher/slimes/regular/iconSlimeSaber.png',
    tags: ['slime', 'common', 'docile'],
    locations: {
      spawn: ['powderfall-bluffs'],
      weather: ['powderfall-bluffs'],
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
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortBatty.png',
    tags: ['plort', 'common'],
    details: {
      slime: ['batty-slime'],
    },
  },
  {
    name: 'Flutter Plort',
    icon: '/assets/games/slime-rancher-2/plorts/iconPlortFlutter.png',
    'sr-icon': '/assets/games/slime-rancher/plorts/iconPlortFlutter.png',
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
      gadget: [],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat'],
      'food-limit': ['30'],
      slime: ['pink-slime'],
      drops: {
        'pink-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Cotton Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoCotton.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-rainbow-fields'],
      gadget: [],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['water-lettuce'],
      'food-limit': ['30'],
      slime: ['cotton-slime'],
      drops: {
        'cotton-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Phosphor Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoPhosphor.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-rainbow-fields'],
      gadget: [],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['cuberry'],
      'food-limit': ['30'],
      slime: ['phosphor-slime'],
      drops: {
        'phosphor-slime': '12',
        pot: '1',
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
      gadget: [],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['roostro'],
      'food-limit': ['50'],
      slime: ['hunter-slime'],
      drops: {
        'hunter-slime': '12',
        pot: '1',
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
      gadget: [],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['mint-mango'],
      'food-limit': ['50'],
      slime: ['honey-slime'],
      drops: {
        'honey-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Ringtail Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoRingtail.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['starlight-strand'],
      gadget: [],
    },
    details: {
      diet: ['veggie', 'fruit', 'meat'],
      'food-limit': ['50'],
      slime: ['ringtail-slime'],
      drops: {
        'ringtail-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Angler Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoAngler.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['starlight-strand'],
      gadget: [],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['sea-hen'],
      'food-limit': ['50'],
      slime: ['angler-slime'],
      drops: {
        'angler-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Flutter Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoFlutter.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['starlight-strand'],
      gadget: [],
    },
    details: {
      diet: ['nectar'],
      'fav-food': ['moondew-nectar'],
      'food-limit': ['30'],
      slime: ['flutter-slime'],
      drops: {
        'flutter-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Batty Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoBatty.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['ember-valley'],
      gadget: [],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['pomegranite'],
      'food-limit': ['50'],
      slime: ['batty-slime'],
      drops: {
        'batty-slime': '12',
        pot: '1',
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
      gadget: [],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['briar-hen'],
      'food-limit': ['50'],
      slime: ['boom-slime'],
      drops: {
        'boom-slime': '12',
        pot: '1',
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
      gadget: [],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['odd-onion'],
      'food-limit': ['50'],
      slime: ['crystal-slime'],
      drops: {
        'crystal-slime': '12',
        pot: '1',
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
      gadget: [],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['heart-beet'],
      'food-limit': ['50'],
      slime: ['rock-slime'],
      drops: {
        'rock-slime': '12',
        pot: '1',
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
      gadget: [],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['stony-hen'],
      'food-limit': ['50'],
      slime: ['tabby-slime'],
      drops: {
        'tabby-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Saber Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoSaber.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['powderfall-bluffs'],
      gadget: [],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['thundercluck-hen'],
      'food-limit': ['50'],
      slime: ['saber-slime'],
      drops: {
        'saber-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Twin Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoTwin.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['impossible-sky'],
      gadget: [],
    },
    details: {
      diet: ['fruit'],
      'fav-food': ['polaricherry'],
      'food-limit': ['50'],
      slime: ['twin-slime'],
      drops: {
        'twin-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Sloomber Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoSloomber.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['dream-land'],
      gadget: [],
    },
    details: {
      diet: ['meat'],
      'fav-food': ['candied-hen'],
      'food-limit': ['30'],
      slime: ['sloomber-slime'],
      drops: {
        'sloomber-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Hyper Gordo',
    icon: '/assets/games/slime-rancher-2/gordos/iconGordoHyper.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      worldgen: ['the-terrarium'],
      gadget: [],
    },
    details: {
      diet: ['veggie'],
      'fav-food': ['turbo-taters'],
      'food-limit': ['30'],
      slime: ['hyper-slime'],
      drops: {
        'hyper-slime': '12',
        pot: '1',
      },
    },
  },
  {
    name: 'Tangle Gordo',
    icon: '/assets/games/slime-rancher/extra/none.png',
    'sr-icon': '/assets/games/slime-rancher/gordos/iconGordoTangle.png',
    tags: ['gordo', 'common', 'docile'],
    locations: {
      gadget: [],
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
      gadget: [],
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
    'sr-icon': '/assets/games/slime-rancher/food//iconVeggieCarrot.png',
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
    },
    details: {
      'max-harvest': ['20'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Water Lettuce',
    icon: '/assets/games/slime-rancher-2/food/iconVeggieLettuce.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconVeggieLettuce.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconVeggieBeet.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconVeggieOnion.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: [
        'ember-valley',
        'powderfall-bluffs',
        'lava-depths',
        'dream-land',
        'the-terrarium',
      ],
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
    'sr-icon': '/assets/games/slime-rancher/food//iconVeggieTater.png',
    tags: ['food', 'veggie', 'common'],
    locations: {
      spawn: ['lava-depths', 'the-terrarium'],
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
    'sr-icon': '/assets/games/slime-rancher/food//iconFruitPogo.png',
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
    },
    details: {
      'max-harvest': ['20'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Mint Mango',
    icon: '/assets/games/slime-rancher-2/food/iconFruitMango.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconFruitMango.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconFruitCuberry.png',
    tags: ['food', 'fruit', 'common'],
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
      'fav-of': ['phosphor-slime'],
      'max-harvest': ['13'],
      'decay-time': ['36 hours'],
    },
  },
  {
    name: 'Pomegranite',
    icon: '/assets/games/slime-rancher-2/food/iconFruitPommegranite.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconFruitPommegranite.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconFruitPear.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconFruitPolaricherry.png',
    tags: ['food', 'fruit', 'common'],
    locations: {
      spawn: ['impossible-sky', 'the-terrarium'],
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
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdChick.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdHen.png',
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
    },
    details: {
      chickadoo: ['chickadoo'],
    },
  },
  {
    name: 'Roostro',
    icon: '/assets/games/slime-rancher-2/food/iconBirdRooster.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdRooster.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: [
        'the-rainbow-fields',
        'starlight-strand',
        'ember-valley',
        'powderfall-bluffs',
      ],
    },
    details: {
      'fav-of': ['hunter-slime'],
      chickadoo: [
        'chickadoo',
        'sea-chickadoo',
        'stony-chickadoo',
        'briar-chickadoo',
        'thundercluck-chickadoo',
        'pained-chickadoo',
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
    },
    details: {
      'fav-of': ['angler-slime'],
      chickadoo: ['sea-chickadoo'],
    },
  },
  {
    name: 'Stony Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickStony.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdChickStony.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdHenStony.png',
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
    },
    details: {
      'fav-of': ['tabby-slime'],
      chickadoo: ['stony-chickadoo'],
    },
  },
  {
    name: 'Briar Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickBriar.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdChickBriar.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdHenBriar.png',
    tags: ['food', 'meat', 'common'],
    locations: {
      spawn: ['ember-valley', 'lava-depths'],
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
    },
    details: {
      'fav-of': ['saber-slime'],
      chickadoo: ['thunder-chickadoo'],
    },
  },
  {
    name: 'Painted Chickadoo',
    icon: '/assets/games/slime-rancher-2/food/iconBirdChickPainted.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdChickPainted.png',
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
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdHenPainted.png',
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
    },
    details: {
      'fav-of': ['sloomber-slime'],
      chickadoo: ['candied-chickadoo'],
    },
  },
  {
    name: 'Elder Hen',
    icon: '/assets/games/slime-rancher-2/food/iconBirdHenElder.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdHenElder.png',
    tags: ['food', 'meat', 'common'],
  },
  {
    name: 'Elder Roostro',
    icon: '/assets/games/slime-rancher-2/food/iconBirdRoosterElder.png',
    'sr-icon': '/assets/games/slime-rancher/food//iconBirdRoosterElder.png',
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
    },
  },
  {
    name: 'Silky Sand',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftSilkySand.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftSilkySand.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley'],
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
    },
  },
  {
    name: 'Jellystone',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftJellystone.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftJellystone.png',
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
    },
  },
  {
    name: 'Radiant Ore',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftRadiantOre.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['starlight-strand', 'ember-valley'],
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
    },
  },
  {
    name: 'Slime Fossil',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftSlimeFossil.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftSlimeFossil.png',
    tags: ['resource', 'uncommon', 'node'],
    locations: {
      spawn: ['powderfall-bluffs'],
    },
  },
  {
    name: 'Perfect Snowflake',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftPerfectSnowflake.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['powderfall-bluffs'],
    },
  },
  {
    name: 'Sun Sap',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftSunSap.png',
    tags: ['resource', 'rare', 'node'],
    locations: {
      spawn: ['powderfall-bluffs', 'the-terrarium'],
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
    },
  },
  {
    name: 'Aqua Glass',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftAquaGlass.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['waterworks'],
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
    },
  },
  {
    name: 'Black Indigonium',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftBlackIndigonium.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['impossible-sky', 'the-terrarium'],
    },
  },
  {
    name: 'Royal Jelly',
    icon: '/assets/games/slime-rancher-2/resources/iconCraftRoyalJelly.png',
    'sr-icon': '/assets/games/slime-rancher/resources/iconCraftRoyalJelly.png',
    tags: ['resource', 'common', 'node'],
    locations: {
      spawn: ['impossible-sky', 'dream-land'],
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
      price: ['500'],
      'fav-of': ['pink-slime'],
    },
  },
  {
    name: 'Bomb Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBomb.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyBomb.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['boom-slime'],
    },
  },
  {
    name: 'Bouncy Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBouncyBall.png',
    tags: ['toy', 'common'],
    details: {
      price: ['500'],
      'fav-of': ['cotton-slime'],
    },
  },
  {
    name: 'Full Moon Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyMoon.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['batty-slime'],
    },
  },
  {
    name: 'Glowbug',
    icon: '/assets/games/slime-rancher-2/toys/iconToyGlowWorm.png',
    tags: ['toy', 'common'],
    details: {
      price: ['1000'],
      'fav-of': ['flutter-slime'],
    },
  },
  {
    name: 'Plushie Puffer Fish',
    icon: '/assets/games/slime-rancher-2/toys/iconToyPufferFish.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['angler-slime'],
    },
  },
  {
    name: 'Rubber Ducky',
    icon: '/assets/games/slime-rancher-2/toys/iconToyRubberDucky.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyRubberDucky.png',
    tags: ['toy', 'common'],
    details: {
      price: ['1000'],
      'fav-of': ['puddle-slime'],
    },
  },
  {
    name: 'Trashcan',
    icon: '/assets/games/slime-rancher-2/toys/iconToyTrashCan.png',
    tags: ['toy', 'common'],
    details: {
      price: ['1000'],
      'fav-of': ['ringtail-slime'],
    },
  },
  {
    name: 'Yarn Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyYarnBall.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyYarnBall.png',
    tags: ['toy', 'common'],
    details: {
      price: ['500'],
      'fav-of': ['tabby-slime'],
    },
  },
  {
    name: 'Big Rock',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBigRock.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyBigRock.png',
    tags: ['toy', 'common'],
    details: {
      price: ['500'],
      'fav-of': ['rock-slime'],
    },
  },
  {
    name: 'Night Light',
    icon: '/assets/games/slime-rancher-2/toys/iconToyNightLight.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyNightLight.png',
    tags: ['toy', 'common'],
    details: {
      price: ['500'],
      'fav-of': ['phosphor-slime'],
    },
  },
  {
    name: 'Buzzy Bee',
    icon: '/assets/games/slime-rancher-2/toys/iconToyBuzzyBee.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyBuzzyBee.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['honey-slime'],
    },
  },
  {
    name: 'Crystal Ball',
    icon: '/assets/games/slime-rancher-2/toys/iconToyCrystalBall.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyCrystalBall.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['crystal-slime'],
    },
  },
  {
    name: 'Gyro Top',
    icon: '/assets/games/slime-rancher-2/toys/iconToyGyroTop.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyGyroTop.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['dervish-slime'],
    },
  },
  {
    name: 'Sol Mate',
    icon: '/assets/games/slime-rancher-2/toys/iconToySolMate.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToySolMate.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['tangle-slime'],
    },
  },
  {
    name: 'Charcoal Brick',
    icon: '/assets/games/slime-rancher-2/toys/iconToyCharcoalBrick.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyCharcoalBrick.png',
    tags: ['toy', 'common'],
    details: {
      price: ['2000'],
      'fav-of': ['fire-slime'],
    },
  },
  {
    name: 'Stego Buddy',
    icon: '/assets/games/slime-rancher-2/toys/iconToyStegoBuddy.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyStegoBuddy.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['saber-slime'],
    },
  },
  {
    name: 'Rocket Ship',
    icon: '/assets/games/slime-rancher-2/toys/iconToyRocketShip.png',
    tags: ['toy', 'common'],
    details: {
      price: ['1000'],
      'fav-of': ['hyper-slime'],
    },
  },
  {
    name: 'Stuffed Sheep',
    icon: '/assets/games/slime-rancher-2/toys/iconToyStuffedSheep.png',
    tags: ['toy', 'common'],
    details: {
      price: ['1000'],
      'fav-of': ['sloomber-slime'],
    },
  },
  {
    name: 'Spinner Toy',
    icon: '/assets/games/slime-rancher-2/toys/iconToySpinner.png',
    tags: ['toy', 'common'],
    details: {
      price: ['1000'],
      'fav-of': ['twin-slime'],
    },
  },
  {
    name: 'Happy Plush Bread Loaf',
    icon: '/assets/games/slime-rancher-2/toys/iconToyHappyPlushBreadLoaf.png',
    tags: ['toy', 'common'],
    details: {
      price: ['2000'],
      'fav-of': ['yolky-slime'],
    },
  },
  {
    name: 'Stuffed Chicken',
    icon: '/assets/games/slime-rancher-2/toys/iconToyStuffedChicken.png',
    'sr-icon': '/assets/games/slime-rancher/toys/iconToyStuffedChicken.png',
    tags: ['toy', 'common'],
    details: {
      price: ['750'],
      'fav-of': ['hunter-slime'],
    },
  },
  {
    name: 'Resource Detector',
    icon: '/assets/games/slime-rancher-2/toys/iconToyResourceDetector.png',
    tags: ['toy', 'common'],
    details: {
      price: ['1000'],
    },
  },
  {
    name: 'Glo Glo Foxifur',
    icon: '/assets/games/slime-rancher-2/toys/iconToyExclusiveFox.png',
    tags: ['toy', 'steam', 'common'],
    details: {
      price: ['500'],
    },
  },
  {
    name: 'Glo Glo Froggo',
    icon: '/assets/games/slime-rancher-2/toys/iconToyExclusiveFrog.png',
    tags: ['toy', 'xbox', 'common'],
    details: {
      price: ['500'],
    },
  },
  {
    name: 'Glo Glo Drakey',
    icon: '/assets/games/slime-rancher-2/toys/iconToyExclusiveDrake.png',
    tags: ['toy', 'epic-games', 'common'],
    details: {
      price: ['500'],
    },
  },
  {
    name: 'Glo Glo Penguino',
    icon: '/assets/games/slime-rancher-2/toys/iconToyExclusivePenguin.png',
    tags: ['toy', 'ps5', 'common'],
    details: {
      price: ['500'],
    },
  },
  {
    name: 'Heart Cell',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentHeartCell.png',
    tags: ['upgrade-part', 'common'],
  },
  {
    name: 'Power Chip',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentEnergyChip.png',
    tags: ['upgrade-part', 'common'],
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
      price: ['5000'],
    },
  },
  {
    name: 'Regen Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentRegenModule.png',
    tags: ['upgrade-part', 'common'],
    details: {
      price: {
        'rainbow-coin': 15,
      },
    },
  },
  {
    name: 'Injector Module',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopComponentInjectorModule.png',
    tags: ['upgrade-part', 'common'],
    details: {
      price: {
        'rainbow-coin': 15,
      },
    },
  },
  {
    name: 'Resource Harvester',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopResourceHarvester.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['450'],
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
      price: ['450'],
      recipe: {
        'pink-plort': '10',
      },
    },
  },
  {
    name: 'Heart Module II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopHeart02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['900'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopHeart03.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['3000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopHeartSystem.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopHeart04.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['10000'],
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
      price: ['450'],
      recipe: {
        'cotton-plort': '10',
      },
    },
  },
  {
    name: 'Power Core II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopPower02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['900'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopPower03.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['3000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['10000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopEnergySystem.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['15000'],
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
      price: ['450'],
      recipe: {
        'boom-plort': '10',
      },
    },
  },
  {
    name: 'Dash Boots II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopDashBoots.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopBoots02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['1500'],
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
      price: ['450'],
      recipe: {
        'phosphor-plort': '5',
        'radiant-ore': '5',
      },
    },
  },
  {
    name: 'Jetpack II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopJetpack 1.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopAirDrive.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['1500'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopTank01.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['450'],
      recipe: {
        'tabby-plort': '10',
      },
    },
  },
  {
    name: 'Tank Booster II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopTank02.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['900'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopTank03.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['3000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopTank04.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['10000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['15000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['20000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['30000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankBooster.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['50000'],
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
      price: ['1500'],
      recipe: {
        'rock-plort': '10',
        'silky-sand': '10',
      },
    },
  },
  {
    name: 'Extra Tank II',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopStorageUnit.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['3000'],
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
      price: ['450'],
      recipe: {
        'deep-brine': '10',
      },
    },
  },
  {
    name: 'Pulse Wave',
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopPulseWave.png',
    'sr-icon': '/assets/games/slime-rancher/upgrades/iconShopPulseWave.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['450'],
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
      price: ['3000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankProtector.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['6000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopTankProtector.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['12000'],
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
      price: ['1500'],
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
      '/assets/games/slime-rancher/upgrades/iconShopGoldenSureshot.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['1500'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopGoldenSureshot 1.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['3000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopGoldenSureshot 1.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['6000'],
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
      price: ['10000'],
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
      price: ['5000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopRegenerator.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['10000'],
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
      price: ['5000'],
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
    icon: '/assets/games/slime-rancher-2/upgrades/iconShopPowerInjector.png',
    tags: ['upgrade', 'common'],
    details: {
      price: ['10000'],
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
        'lightning-mote': '1-4',
        'storm-glass': '1-4',
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
      price: ['2800'],
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
      price: ['2800'],
      plots: ['5'],
      'treasure-pods': {
        'treasure-pod': '1',
      },
    },
  },
  {
    name: 'The Digsite',
    icon: '/assets/games/slime-rancher-2/zones/iconExpansionDigsite.png',
    tags: ['zone', 'common'],
    details: {
      price: ['6000'],
      plots: ['4'],
    },
  },
  {
    name: 'The Gully',
    icon: '/assets/games/slime-rancher-2/zones/iconExpansionGully.png',
    tags: ['zone', 'common'],
    details: {
      price: ['2800'],
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
      price: ['6000'],
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
    tags: ['zone', 'common'],
  },
];

export const cards = processCards(rawCards);
