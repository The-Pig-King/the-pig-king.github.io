import { initWrHistory } from '../../js/shared-wr-history.js';
import { titleCaseSlug } from '../../js/main.js';

const data = await fetch('data.json').then((r) => r.json());

// Add data
data.find((e) => {
  return e.id === 'mkx2n23z';
}).details = { sub: 'First sub 50' };

data.find((e) => {
  return e.id === 'ydo5e7wz';
}).details = { sub: 'First sub 55' };

data.find((e) => {
  return e.id === 'z0k1r24m';
}).details = { sub: 'First sub 60' };

data.find((e) => {
  return e.id === 'y26dkw7m';
}).details = { sub: 'First sub 40' };

const additionalData = [
  {
    id: '1',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2026-03-07',
    primary_t: 3082.0,
    platform: null,
    subcategory: 'glitchless',
    version: '1.1.1',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    id: '2',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-10-29',
    primary_t: 3196.0,
    platform: null,
    subcategory: 'glitchless',
    version: '1.0.3',
    players_full: [
      {
        id: 'j5pn0oq8',
        names: {
          international: 'JesseKola',
          japanese: null,
        },
        pronouns: null,
        weblink: 'https://www.speedrun.com/users/JesseKola',
        'name-style': {
          style: 'solid',
          color: {
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
            code: 'fi',
            names: {
              international: 'Finland',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '3',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-10-07',
    primary_t: 3605.0,
    platform: null,
    subcategory: 'glitchless',
    version: '1.0.2',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    id: '4',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-10-01',
    primary_t: 4052.0,
    platform: null,
    subcategory: 'glitchless',
    version: '1.0.1',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    id: '5',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-09-30',
    primary_t: 4538.0,
    platform: null,
    subcategory: 'glitchless',
    version: '1.0.1',
    players_full: [
      {
        id: 'j5pn0oq8',
        names: {
          international: 'JesseKola',
          japanese: null,
        },
        pronouns: null,
        weblink: 'https://www.speedrun.com/users/JesseKola',
        'name-style': {
          style: 'solid',
          color: {
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
            code: 'fi',
            names: {
              international: 'Finland',
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
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-09-28',
    primary_t: 5108.0,
    platform: null,
    subcategory: 'glitchless',
    version: '1.0.0',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    details: { hour: 'World Record for 40 mins' },
    id: '7',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2026-01-01',
    primary_t: 1367.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.1.0',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    details: { hour: 'World Record for ?' },
    id: '8',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2026-01-01',
    primary_t: 1380.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.1.0',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    details: { sub: 'First sub 25' },
    id: '9',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/wRk5oF6o2iU',
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-10-03',
    primary_t: 1485.067,
    platform: null,
    subcategory: 'glitched',
    version: '1.0.2',
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
    details: { hour: 'World Record for 8 hours' },
    id: '10',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-10-03',
    primary_t: 1621.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.0.2',
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
    id: '11',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/g9l73l8C3PY',
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-10-02',
    primary_t: 1624.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.0.2',
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
    details: { sub: 'First sub 30' },
    id: '12',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/hUv9i-oKNIE',
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-09-29',
    primary_t: 1679.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.0.0',
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
    id: '13',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-09-28',
    primary_t: 1990.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.0.0',
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
    id: '14',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/I-Qq50bByAw',
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-09-25',
    primary_t: 2188.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.0.0',
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
    id: '15',
    weblink: null,
    category: 'any',
    videos: {
      links: [
        {
          uri: null,
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2025-09-25',
    primary_t: 2626.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.0.0',
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
    details: { sub: 'First sub 60' },
    id: '16',
    weblink: null,
    category: 'all-gordos',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/6E_-4rEmWhE',
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2026-03-14',
    primary_t: 3221.0,
    platform: null,
    subcategory: 'glitchless',
    version: '1.1.1',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    id: '17',
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
    date: '2026-03-13',
    primary_t: 4030.0,
    platform: null,
    subcategory: 'glitchless',
    version: '1.1.1',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    details: { hour: 'World Record for 5 hours' },
    id: 'z025qkjm',
    weblink: 'https://www.speedrun.com/slime_rancher_2/runs/z025qkjm',
    category: 'all-gordos',
    videos: {
      links: [
        {
          uri: 'https://www.twitch.tv/videos/2720459976',
        },
      ],
    },
    comment:
      'Better layout on this run then the first less back tracking got a faster time :)\n\nMod Note: Start Time 45.283, End Time: 2:04:13.917, Frame Rate: 60, Time: 2:03:28.633',
    status: 'verified',
    date: '2026-03-12',
    primary_t: 7408.633,
    platform: null,
    subcategory: 'glitchless',
    version: '1.1.1',
    players_full: [
      {
        id: 'j9v15dvx',
        names: {
          international: 'Positivitybro18',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Positivitybro18',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#7AB941',
            dark: '#8AC951',
          },
          'color-to': {
            light: '#009856',
            dark: '#09B876',
          },
        },
        assets: {
          icon: {},
          supporterIcon: null,
          image: {},
        },
        location: {
          country: {
            code: 'ca',
            names: {
              international: 'Canada',
              japanese: null,
            },
          },
          region: {
            code: 'ca/on/toronto',
            names: {
              international: 'Toronto, ON, Canada',
              japanese: null,
            },
          },
        },
      },
    ],
  },
  {
    id: '18',
    weblink: null,
    category: 'all-gordos',
    videos: {
      links: [
        {
          uri: 'https://youtu.be/7B4WcaEvpEQ',
        },
      ],
    },
    comment: null,
    status: 'unverified',
    date: '2026-03-16',
    primary_t: 2609.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.1.1',
    players_full: [
      {
        id: '5j5nwkqj',
        names: {
          international: 'Crispy_John',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/Crispy_John',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#4646CE',
            dark: '#6666EE',
          },
          'color-to': {
            light: '#EF8239',
            dark: '#EF8241',
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
    id: '19',
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
    date: '2026-03-14',
    primary_t: 4350.0,
    platform: null,
    subcategory: 'glitched',
    version: '1.1.1',
    players_full: [
      {
        id: 'j5ry3ewx',
        names: {
          international: 'EliamRA',
          japanese: null,
        },
        pronouns: 'He/Him',
        weblink: 'https://www.speedrun.com/users/EliamRA',
        'name-style': {
          style: 'gradient',
          'color-from': {
            light: '#249BCE',
            dark: '#44BBEE',
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
            code: 'ar',
            names: {
              international: 'Argentina',
              japanese: null,
            },
          },
        },
      },
    ],
  },
];

const nonRecordsToRemove = [];

const filterRuns = (state, runs) => {
  return runs.filter((run) => {
    let matchCategory = false;
    if (state.category.filters.has('any')) {
      matchCategory = run.category === 'any';
    } else if (state.category.filters.has('all-gordos')) {
      matchCategory = run.category === 'all-gordos';
    } else if (state.category.filters.has('slimepedia')) {
      matchCategory = run.category === 'slimepedia' && run.version >= '1.2.0';
    }

    let matchRuleSet = false;
    if (state['rule-set'].filters.has('glitchless')) {
      matchRuleSet = run.subcategory === 'glitchless';
    } else if (state['rule-set'].filters.has('glitched')) {
      matchRuleSet = run.subcategory === 'glitched';
    }

    return matchCategory && matchRuleSet;
  });
};

const getRunCategoryKey = (run) => {
  if (run.category === 'any') {
    return 'any';
  }
  if (run.category === 'all-gordos') {
    return 'all-gordos';
  }
  if (run.category === 'slimepedia') {
    return 'slimepedia';
  }
  return null;
};

const getRunRuleSetKey = (run) => {
  if (run.subcategory === 'glitchless') {
    return 'glitchless';
  }
  if (run.subcategory === 'glitched') {
    return 'glitched';
  }
  return null;
};

const getRunSubcategoryKey = (run, categoryKey) => {
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
