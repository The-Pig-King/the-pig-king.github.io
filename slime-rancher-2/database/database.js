import { cards, extraIcons } from './data.js';
import { originalDocumentTitle, titleCaseSlug } from '../../js/main.js';
import { initDatabase } from '../../js/shared-database.js';

export const tagGroups = {
  slime: 'type',
  plort: 'type',
  gordo: 'type',
  food: 'type',
  resource: 'type',
  toy: 'type',
  'upgrade-part': 'type',
  upgrade: 'type',
  weather: 'type',
  zone: 'type',
  'sanctuary-upgrade': 'type',
  gadget: 'type',
  pot: 'type',
  misc: 'type',

  steam: 'platform-exclusive',
  xbox: 'platform-exclusive',
  'epic-games': 'platform-exclusive',
  ps5: 'platform-exclusive',

  common: 'rarity',
  uncommon: 'rarity',
  rare: 'rarity',
  unobtainable: 'rarity',

  docile: 'slime-type',
  harmful: 'slime-type',
  hostile: 'slime-type',

  veggie: 'food-type',
  fruit: 'food-type',
  meat: 'food-type',
  'future-meat': 'food-type',
  nectar: 'food-type',
  other: 'food-type',

  node: 'resource-type',
  'weather-resource': 'resource-type',
  'the-sanctuary': 'resource-type',

  room: 'sanctuary-upgrade-type',
  'room-theme': 'sanctuary-upgrade-type',
  'alcove-theme': 'sanctuary-upgrade-type',

  utility: 'gadget-type',
  'warp-tech': 'gadget-type',
  decoration: 'gadget-type',
  variant: 'gadget-type',

  'the-rainbow-fields': 'decoration-theme',
  'ember-valley': 'decoration-theme',
  'starlight-strand': 'decoration-theme',
  'powderfall-bluffs': 'decoration-theme',
  'the-grey-labyrinth': 'decoration-theme',
  'the-conservatory': 'decoration-theme',
  beach: 'decoration-theme',
  fun: 'decoration-theme',
  platform: 'decoration-theme',
  'golden-statue': 'decoration-theme',

  'the-conservatory': 'location',
  'the-archway': 'location',
  'the-den': 'location',
  'the-digsite': 'location',
  'the-gully': 'location',
  'the-tidepools': 'location',
  'the-sanctuary': 'location',
  'the-rainbow-fields': 'location',
  'starlight-strand': 'location',
  'ember-valley': 'location',
  'powderfall-bluffs': 'location',
  waterworks: 'location',
  'lava-depths': 'location',
  'impossible-sky': 'location',
  'dream-land': 'location',
  'the-terrarium': 'location',
  'the-prismacore': 'location',
  'the-slime-sea': 'location',

  spawn: 'source',
  weather: 'source',
  worldgen: 'source',
  pot: 'source',
  'exchange-station': 'source',
  'treasure-pod': 'source',
  gadget: 'source',
  gordo: 'source',
  'spawn-largo': 'source',

  secret: 'style',
  sr2: 'style',
  radiant: 'style',
};

export const resolveStyle = (card, style, state) => {
  let isSecretStyleToggledOn;
  let isSrStyleToggledOn;

  if (!style) {
    isSecretStyleToggledOn = state.style.filters.has('secret');
    isSrStyleToggledOn = state.style.filters.has('sr');
  } else {
    isSecretStyleToggledOn = style.secret;
    isSrStyleToggledOn = style.sr;
  }

  const hasSecretAndToggledOn = Boolean(
    isSecretStyleToggledOn && isSrStyleToggledOn && card['secret-style-icon']
  );
  const hasSRAndToggledOn = Boolean(isSrStyleToggledOn && card['sr-icon']);
  const hasRadiantAndToggledOn = Boolean(
    isSecretStyleToggledOn && card['radiant-icon']
  );

  // Select style icon
  let iconSrc;
  if (hasSecretAndToggledOn) {
    iconSrc = card['secret-style-icon'];
  } else if (hasSRAndToggledOn) {
    iconSrc = card['sr-icon'];
  } else if (hasRadiantAndToggledOn) {
    iconSrc = card['radiant-icon'];
  } else {
    iconSrc = card['icon'];
  }

  // Select style name
  let styleName;
  if (hasSecretAndToggledOn) {
    styleName = card['secret-style-name'];
  } else if (hasSRAndToggledOn) {
    styleName = 'Slime Rancher';
  } else if (hasRadiantAndToggledOn) {
    styleName = 'Radiant';
  } else {
    styleName = '';
  }

  let radiantVars = '';

  // Random radiant gradient values
  if (hasRadiantAndToggledOn) {
    const baseColors = ['#f8f08a', '#f6c6e8', '#d8c9ff', '#8eefff'];

    // Random Order
    const colors = [...baseColors].sort(() => Math.random() - 0.5);

    // Random stop positions
    const p1 = 15 + Math.random() * 15; // 15–30
    const p2 = p1 + 15 + Math.random() * 15; // 30–60
    const p3 = p2 + 15 + Math.random() * 15; // 60–90

    radiantVars = `
          --angle:${Math.floor(Math.random() * 360)}deg;
          --c1:${colors[0]};
          --c2:${colors[1]};
          --c3:${colors[2]};
          --c4:${colors[3]};
          --p1:${p1}%;
          --p2:${p2}%;
          --p3:${p3}%;
        `;
  }

  let styleAttr = '';
  let radiantAttr = '';
  let classAttr = '';

  if (hasSecretAndToggledOn) {
    styleAttr =
      '--style-color: var(--style-' +
      card['secret-style-name'].toLowerCase().replace(/\s+/g, '-') +
      '-color);';
  } else if (hasSRAndToggledOn) {
    styleAttr = '--style-color: var(--sr-color);';
  } else if (hasRadiantAndToggledOn) {
    radiantAttr = radiantVars;
    classAttr = 'style-radiant';
  }

  return { iconSrc, styleName, styleAttr, radiantAttr, classAttr };
};

initDatabase(
  tagGroups,
  resolveStyle,
  cards,
  extraIcons,
  originalDocumentTitle,
  titleCaseSlug,
  'sr',
  'slime-rancher-2'
);
