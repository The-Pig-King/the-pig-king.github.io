import { initWrHistory } from '../../js/shared-wr-history.js';
import { titleCaseSlug } from '../../js/main.js';

const data = await fetch('data.json').then((r) => r.json());

// Correct data
data.find((e) => {
  return e.id === 'm7q51lwz';
}).date = '2019-07-19';

data.find((e) => {
  return e.id === 'z15p4jjy';
}).date = '2020-06-10';

// Add data
data.find((e) => {
  return e.id === 'ywrnn3pm';
}).details = { sub: 'First sub 12' };

data.find((e) => {
  return e.id === 'zgvx91dz';
}).details = { sub: 'First sub 13' };

data.find((e) => {
  return e.id === 'mexg293z';
}).details = { sub: 'First sub 14' };

data.find((e) => {
  return e.id === 'y2q2165y';
}).details = { sub: 'First sub 15' };

data.find((e) => {
  return e.id === 'yjkv1dgm';
}).details = { sub: 'First sub 16' };

data.find((e) => {
  return e.id === 'znj8787m';
}).details = { route: 'Desert Hover introduced' };

data.find((e) => {
  return e.id === 'y91o11nm';
}).details = { route: 'Honey Gordo Hover introduced' };

data.find((e) => {
  return e.id === 'y97q76em';
}).details = { route: 'Modern Route introduced' };

data.find((e) => {
  return e.id === 'z16r25wm';
}).details = { sub: 'First sub 25' };

data.find((e) => {
  return e.id === 'zglx060m';
}).details = { sub: 'First sub 26' };

data.find((e) => {
  return e.id === 'mrveewgz';
}).details = { sub: 'First sub 27' };

data.find((e) => {
  return e.id === 'y258ql7y';
}).details = { sub: 'First sub 55' };

data.find((e) => {
  return e.id === 'mr00p64m';
}).details = { sub: 'First sub 32' };

data.find((e) => {
  return e.id === 'zn707w9m';
}).details = { sub: 'First sub 33' };

data.find((e) => {
  return e.id === 'y91qvxnm';
}).details = { sub: 'First sub 34' };

const additionalData = [
  {
    details: { route: 'Bridge Hover introduced' },
    id: '1',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2020-07-27',
    primary_t: 800.0,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.4.1',
    players_full: [
      {
        id: 'pj01dwmx',
        names: {
          international: 'ThePigKing',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/ThePigKing',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#A259C5',
            dark: '#C279E5',
          },
          'color-to': {
            light: '#249BCE',
            dark: '#44BBEE',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'gb',
            names: {
              international: 'United Kingdom',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    details: { hour: 'World Record for 1.5 hours' },
    id: '2',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2020-06-10',
    primary_t: 814.95,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.4.1',
    players_full: [
      {
        id: 'pj01dwmx',
        names: {
          international: 'ThePigKing',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/ThePigKing',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#A259C5',
            dark: '#C279E5',
          },
          'color-to': {
            light: '#249BCE',
            dark: '#44BBEE',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'gb',
            names: {
              international: 'United Kingdom',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    details: { hour: 'World Record for 2 hours' },
    id: '3',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2019-07-19',
    primary_t: 855.35,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.4.0',
    players_full: [
      {
        id: 'pj01dwmx',
        names: {
          international: 'ThePigKing',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/ThePigKing',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#A259C5',
            dark: '#C279E5',
          },
          'color-to': {
            light: '#249BCE',
            dark: '#44BBEE',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'gb',
            names: {
              international: 'United Kingdom',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    details: { hour: 'World Record for 2.5 hours' },
    id: 'y92dowrz',
    weblink: 'https://www.speedrun.com/slime_rancher/runs/y92dowrz',
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: 'https://www.youtube.com/watch?v=T5mV0ZPQPSE',
        },
      ],
    },
    comment: 'Happy with this run :)',
    status: 'verified',
    date: '2019-01-21',
    primary_t: 887.61,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.3.2',
    players_full: [
      {
        id: 'pj01dwmx',
        names: {
          international: 'ThePigKing',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/ThePigKing',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#A259C5',
            dark: '#C279E5',
          },
          'color-to': {
            light: '#249BCE',
            dark: '#44BBEE',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'gb',
            names: {
              international: 'United Kingdom',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    details: { hour: 'World Record for 1.5 hours' },
    id: 'mk9p9xxz',
    weblink: 'https://www.speedrun.com/slime_rancher/runs/mk9p9xxz',
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: 'https://www.youtube.com/watch?v=xWzpy7fZcA8',
        },
      ],
    },
    comment: 'very good :D',
    status: 'verified',
    date: '2019-01-08',
    primary_t: 910.17,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.3.2',
    players_full: [
      {
        id: 'pj01dwmx',
        names: {
          international: 'ThePigKing',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/ThePigKing',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#A259C5',
            dark: '#C279E5',
          },
          'color-to': {
            light: '#249BCE',
            dark: '#44BBEE',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'gb',
            names: {
              international: 'United Kingdom',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    details: { hour: 'World Record for 15 mins' },
    id: 'zg7l7qvz',
    weblink: 'https://www.speedrun.com/slime_rancher/runs/zg7l7qvz',
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: 'https://www.youtube.com/watch?v=x2_1sQkybt0',
        },
      ],
    },
    comment:
      "I've already beaten this but submitting for the sake of accurate PB history\r\n(and for the sake of accurate PB history I'll mention that there was a 15:17 too between this and my previous PB)",
    status: 'verified',
    date: '2019-01-08',
    primary_t: 911.32,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.3.2',
    players_full: [
      {
        id: 'pj0034jw',
        names: {
          international: 'Amaranth',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Amaranth',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#A259C5',
            dark: '#C279E5',
          },
          'color-to': {
            light: '#A259C5',
            dark: '#C279E5',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'it',
            names: {
              international: 'Italy',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    details: { hour: 'World Record for 15 mins' },
    id: '4',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2019-01-08',
    primary_t: 919.0,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.3.2',
    players_full: [
      {
        id: 'pj0034jw',
        names: {
          international: 'Amaranth',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Amaranth',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#A259C5',
            dark: '#C279E5',
          },
          'color-to': {
            light: '#A259C5',
            dark: '#C279E5',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'it',
            names: {
              international: 'Italy',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '5',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2018-04-04',
    primary_t: 963.0,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.2.1',
    players_full: [
      {
        id: '98rpyqj1',
        names: {
          international: 'Supra',
          japanese: null,
        },
        pronouns: 'They/Them',
        weblink: 'https://www.speedrun.com/users/Supra',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#900090',
            dark: '#A010A0',
          },
          'color-to': {
            light: '#E762B5',
            dark: '#F772C5',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'us',
            names: {
              international: 'United States',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '6',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2018-01-16',
    primary_t: 1093.0,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.1.2',
    players_full: [
      {
        id: '98rpyqj1',
        names: {
          international: 'Supra',
          japanese: null,
        },
        pronouns: 'They/Them',
        weblink: 'https://www.speedrun.com/users/Supra',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#900090',
            dark: '#A010A0',
          },
          'color-to': {
            light: '#E762B5',
            dark: '#F772C5',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'us',
            names: {
              international: 'United States',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '7',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2018-01-12',
    primary_t: 1113.0,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.1.2',
    players_full: [
      {
        id: '98rpyqj1',
        names: {
          international: 'Supra',
          japanese: null,
        },
        pronouns: 'They/Them',
        weblink: 'https://www.speedrun.com/users/Supra',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#900090',
            dark: '#A010A0',
          },
          'color-to': {
            light: '#E762B5',
            dark: '#F772C5',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'us',
            names: {
              international: 'United States',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    details: { hour: 'World Record for 5 hours' },
    id: 'y2373q7m',
    weblink: 'https://www.speedrun.com/slime_rancher/runs/y2373q7m',
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: 'https://www.youtube.com/watch?v=DYMPnScV0w0',
        },
      ],
    },
    comment:
      "I knew this route was better! Hope people will start running it as it's less rng and more fun",
    status: 'verified',
    date: '2017-09-03',
    primary_t: 1196.45,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.0.1',
    players_full: [
      {
        id: 'o86p713j',
        names: {
          international: 'tak4n',
          japanese: null,
        },
        pronouns: '',
        weblink: 'https://www.speedrun.com/users/tak4n',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#4646CE',
            dark: '#6666EE',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'nz',
            names: {
              international: 'New Zealand',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '8',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2017-08-08',
    primary_t: 1637.0,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.0.1',
    players_full: [
      {
        id: '5j5w65wj',
        names: {
          international: 'ttJogge',
          japanese: null,
        },
        pronouns: '',
        weblink: 'https://www.speedrun.com/users/ttJogge',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#249BCE',
            dark: '#44BBEE',
          },
          'color-to': {
            light: '#249BCE',
            dark: '#44BBEE',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'se',
            names: {
              international: 'Sweden',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '9',
    weblink: null,
    category: 'any-glitchless',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/wEx1UdK1mMs',
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2018-03-30',
    primary_t: 1031.16,
    platform: null,
    subcategory: '1.0.1-1.4.4',
    version: '1.2.0',
    players_full: [
      {
        id: '98rpyqj1',
        names: {
          international: 'Supra',
          japanese: null,
        },
        pronouns: 'They/Them',
        weblink: 'https://www.speedrun.com/users/Supra',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#900090',
            dark: '#A010A0',
          },
          'color-to': {
            light: '#E762B5',
            dark: '#F772C5',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'us',
            names: {
              international: 'United States',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    details: { hour: 'World Record for 30 mins' },
    id: 'y6v64jqm',
    weblink: 'https://www.speedrun.com/slime_rancher/runs/y6v64jqm',
    category: 'all-gordos',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/AdPsfSra4SA',
        },
      ],
    },
    comment: null,
    status: 'verified',
    date: '2024-03-24',
    primary_t: 1562.77,
    platform: null,
    subcategory: '1.0.1-1.4.4-glitchless',
    version: '1.4.4',
    players_full: [
      {
        id: 'jnzr3n1j',
        names: {
          international: 'Giraffe_',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Giraffe_',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#DAA520',
            dark: '#F0C03E',
          },
          'color-to': {
            light: '#DAA520',
            dark: '#F0C03E',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'us',
            names: {
              international: 'United States',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '10',
    weblink: null,
    category: 'all-gordos',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '',
    primary_t: 2560.0,
    platform: null,
    subcategory: '1.0.1-1.4.4-glitchless',
    version: '1.1.2',
    players_full: [
      {
        id: '98rpyqj1',
        names: {
          international: 'Supra',
          japanese: null,
        },
        pronouns: 'They/Them',
        weblink: 'https://www.speedrun.com/users/Supra',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#900090',
            dark: '#A010A0',
          },
          'color-to': {
            light: '#E762B5',
            dark: '#F772C5',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'us',
            names: {
              international: 'United States',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '11',
    weblink: null,
    category: 'all-gordos',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2018-01-27',
    primary_t: 2596.0,
    platform: null,
    subcategory: '1.0.1-1.4.4-glitchless',
    version: '1.1.2',
    players_full: [
      {
        id: '98rpyqj1',
        names: {
          international: 'Supra',
          japanese: null,
        },
        pronouns: 'They/Them',
        weblink: 'https://www.speedrun.com/users/Supra',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#900090',
            dark: '#A010A0',
          },
          'color-to': {
            light: '#E762B5',
            dark: '#F772C5',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'us',
            names: {
              international: 'United States',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 'yl0pexky',
    weblink: 'https://www.speedrun.com/slime_rancher/runs/yl0pexky',
    category: 'slimepedia-glitchless',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/Lrq1zPrB_xw',
        },
      ],
    },
    comment:
      "This is obviously a really long and terrible run with many mistakes, I genuinly feel bad for whatever moderator has to verify this.\r\n\r\nmod note: a lot of the run is missing footage, however accepting in good faith since you've submitted a faster run without the issues so this run is obsolete anyway",
    status: 'verified',
    date: '2020-01-12',
    primary_t: 13958.31,
    platform: null,
    subcategory: '1.4.0-1.4.4',
    version: '1.4.1',
    players_full: [
      {
        id: 'y8dnm3oj',
        names: {
          international: 'DSF',
          japanese: null,
        },
        pronouns: null,
        weblink: 'https://www.speedrun.com/users/DSF',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#EE2222',
            dark: '#EE4444',
          },
          'color-to': {
            light: '#EE2222',
            dark: '#EE4444',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'us',
            names: {
              international: 'United States',
              japanese: null,
            },
          },
        },
      },
    ],
  },
];

const nonRecordsToRemove = ['zgn0wqdy', 'yo485d5m'];

const filterRuns = (state, runs) => {
  return runs.filter((run) => {
    let matchCategory = false;
    if (state.category.filters.has('any')) {
      matchCategory =
        run.category === 'any-glitchless' || run.category === 'any-glitched';
    } else if (state.category.filters.has('all-gordos')) {
      matchCategory = run.category === 'all-gordos';
    } else if (state.category.filters.has('slimepedia')) {
      matchCategory =
        (run.category === 'slimepedia-glitchless' &&
          run.subcategory === '1.4.0-1.4.4') ||
        (run.category === 'slimepedia-glitched' && run.subcategory === '1.2.0');
    } else if (state.category.filters.has('pink-gordo')) {
      matchCategory = run.category === 'pink-gordo';
    } else if (state.category.filters.has('vacpack')) {
      matchCategory = run.category === 'vacpack';
    }

    let matchRuleSet = false;
    if (state['rule-set'].filters.has('glitchless')) {
      matchRuleSet =
        run.category === 'any-glitchless' ||
        run.category === 'slimepedia-glitchless' ||
        run.category === 'pink-gordo' ||
        run.subcategory.endsWith('glitchless') ||
        run.subcategory === 'rush-mode';
    } else if (state['rule-set'].filters.has('glitched')) {
      matchRuleSet =
        run.category === 'any-glitched' ||
        run.category === 'slimepedia-glitched' ||
        run.subcategory.endsWith('glitched');
    }

    let matchSubcategory;
    if (
      // Match subcategory
      state.category.filters.has('any') ||
      state.category.filters.has('pink-gordo') ||
      (state.category.filters.has('all-gordos') &&
        state['subcategory'].filters.has('rush-mode'))
    ) {
      matchSubcategory = state['subcategory'].filters.has(run.subcategory);
    } else if (
      // Match all gordos non-rush mode
      state.category.filters.has('all-gordos') &&
      state['subcategory'].filters.has('adventure-mode')
    ) {
      matchSubcategory = run.subcategory !== 'rush-mode';
    } else {
      // No subcategory
      matchSubcategory = true;
    }

    return matchCategory && matchRuleSet && matchSubcategory;
  });
};

const getRunCategoryKey = (run) => {
  if (run.category === 'any-glitchless' || run.category === 'any-glitched') {
    return 'any';
  }
  if (run.category === 'all-gordos') {
    return 'all-gordos';
  }
  if (
    (run.category === 'slimepedia-glitchless' &&
      run.subcategory === '1.4.0-1.4.4') ||
    (run.category === 'slimepedia-glitched' && run.subcategory === '1.2.0')
  ) {
    return 'slimepedia';
  }
  if (run.category === 'pink-gordo') return 'pink-gordo';
  if (run.category === 'vacpack') return 'vacpack';
  return null;
};

const getRunRuleSetKey = (run) => {
  if (
    run.category === 'any-glitchless' ||
    run.category === 'slimepedia-glitchless' ||
    run.category === 'pink-gordo' ||
    run.subcategory?.endsWith('glitchless') ||
    run.subcategory === 'rush-mode'
  ) {
    return 'glitchless';
  }
  if (
    run.category === 'any-glitched' ||
    run.category === 'slimepedia-glitched' ||
    run.subcategory?.endsWith('glitched')
  ) {
    return 'glitched';
  }
  return null;
};

const getRunSubcategoryKey = (run, categoryKey) => {
  if (categoryKey === 'any' || categoryKey === 'pink-gordo') {
    return run.subcategory ?? null;
  }
  if (categoryKey === 'all-gordos') {
    return run.subcategory === 'rush-mode' ? 'rush-mode' : 'adventure-mode';
  }
  return null;
};

initWrHistory(
  data,
  additionalData,
  nonRecordsToRemove,
  filterRuns,
  titleCaseSlug,
  getRunCategoryKey,
  getRunRuleSetKey,
  getRunSubcategoryKey
);
