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
  chime: 'type',
  ornament: 'type',
  chroma: 'type',
  'plot-building': 'type',
  upgrade: 'type',
  zone: 'type',
  gadget: 'type',
  misc: 'type',

  event: 'subtype',
  dlc: 'subtype',

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
  electricity: 'food-type',

  drill: 'resource-type',
  apiary: 'resource-type',
  pump: 'resource-type',
  'range-exchange': 'resource-type',
  'echo-net': 'resource-type',

  building: 'plot-type',
  'building-upgrade': 'plot-type',

  extractor: 'gadget-type',
  utility: 'gadget-type',
  'warp-tech': 'gadget-type',
  decoration: 'gadget-type',
  curio: 'gadget-type',

  'the-ranch': 'location',
  'the-grotto': 'location',
  'the-overgrowth': 'location',
  'the-docks': 'location',
  'the-lab': 'location',
  'ogdens-retreat': 'location',
  'mochis-manor': 'location',
  'viktors-workshop': 'location',
  'the-dry-reef': 'location',
  'the-moss-blanket': 'location',
  'the-indigo-quarry': 'location',
  'the-ancient-ruins': 'location',
  'the-glass-desert': 'location',
  'the-wilds': 'location',
  'nimble-valley': 'location',
  'the-slimeulation': 'location',
  'the-slime-sea': 'location',
  'the-vaults': 'location',

  spawn: 'source',
  worldgen: 'source',
  crate: 'source',
  'range-exchange': 'source',
  'treasure-pod': 'source',
  gadget: 'source',
  gordo: 'source',
  'spawn-largo': 'source',
  'twinkle-slime': 'source',

  secret: 'style',
  sr2: 'style',
  radiant: 'style',
};

export const resolveStyle = (card, style, state) => {
  let isSecretStyleToggledOn;
  let isSr2StyleToggledOn;

  if (!style) {
    isSecretStyleToggledOn = state.style.filters.has('secret');
    isSr2StyleToggledOn = state.style.filters.has('sr2');
  } else {
    isSecretStyleToggledOn = style.secret;
    isSr2StyleToggledOn = style.sr2;
  }

  const hasRadiantAndToggledOn = Boolean(
    isSecretStyleToggledOn && isSr2StyleToggledOn && card['radiant-icon']
  );
  const hasSR2AndToggledOn = Boolean(isSr2StyleToggledOn && card['sr2-icon']);
  const hasSecretStyleAndToggledOn = Boolean(
    isSecretStyleToggledOn && card['secret-style-icon']
  );

  // Select style icon
  let iconSrc;
  if (hasRadiantAndToggledOn) {
    iconSrc = card['radiant-icon'];
  } else if (hasSR2AndToggledOn) {
    iconSrc = card['sr2-icon'];
  } else if (hasSecretStyleAndToggledOn) {
    iconSrc = card['secret-style-icon'];
  } else {
    iconSrc = card['icon'];
  }

  // Select style name
  let styleName;
  if (hasRadiantAndToggledOn) {
    styleName = 'Radiant';
  } else if (hasSR2AndToggledOn) {
    styleName = 'Slime Rancher 2';
  } else if (isSecretStyleToggledOn && card['secret-style-name']) {
    styleName = card['secret-style-name'];
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

  if (hasRadiantAndToggledOn) {
    // Distinguish Slime Rancher 2 "Radiant" styling from Rad Slime "Radiant" styling
    radiantAttr = radiantVars;
    classAttr = 'style-radiant';
  } else if (hasSR2AndToggledOn) {
    styleAttr = '--style-color: var(--sr2-color);';
  } else if (hasSecretStyleAndToggledOn) {
    styleAttr =
      '--style-color: var(--style-' +
      card['secret-style-name'].toLowerCase().replace(/\s+/g, '-') +
      '-color);';
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
  'sr2',
  'slime-rancher'
);
