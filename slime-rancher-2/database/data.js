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
];

export const cards = processCards(rawCards);
