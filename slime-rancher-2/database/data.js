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
];

export const cards = processCards(rawCards);
