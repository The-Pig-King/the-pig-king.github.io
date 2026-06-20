import { titleCaseSlug } from './main.js';

export function processCards(cards) {
  addStyles(cards);
  addRecipeUsage(cards);
  addZoneData(cards);

  return cards;
}

const addStyles = (cards) => {
  cards.forEach((card) => {
    // Give cards styles values based on icon presence
    if (!Object.hasOwn(card, 'styles')) {
      card['styles'] = [];
    }

    if (card['secret-style-icon']) {
      card.styles.push('secret');
    }

    if (card['sr2-icon']) {
      card.styles.push('sr2');
    }

    if (card['sr-icon']) {
      card.styles.push('sr');
    }

    if (card['radiant-icon']) {
      card.styles.push('radiant');
    }

    // Give cards empty details if it doesn't exist
    if (!Object.hasOwn(card, 'details')) {
      card['details'] = {};
    }
  });
};

const addRecipeUsage = (cards) => {
  // Give cards used-in details based on recipes
  cards.forEach((card) => {
    if (Object.hasOwn(card.details, 'recipe')) {
      Object.entries(card.details.recipe).forEach(([item, amount]) => {
        const cardMatch = cards.find((c) => {
          return c.name === titleCaseSlug(item);
        });

        if (cardMatch) {
          cardMatch.details['used-in'] ??= {};
          cardMatch.details['used-in'][
            card.name.toLowerCase().replace(/\s+/g, '-')
          ] = amount;
        }
      });
    }
  });
};

const addZoneData = (cards) => {
  // Give zones details based on location tags
  cards.forEach((card) => {
    switch (card.tags[0]) {
      case 'chime':
        return;
      case 'ornament':
        return;
    }

    if (Object.hasOwn(card, 'locations')) {
      Object.entries(card.locations).forEach(([source, locs]) => {
        if (card.tags[0] === 'gordo' && source === 'gadget') return;

        locs.forEach((loc) => {
          const cardMatch = cards.find((c) => {
            return c.name === titleCaseSlug(loc);
          });

          if (cardMatch) {
            const key = card.name.toLowerCase().replace(/\s+/g, '-');

            cardMatch.details[card.tags[0]] ??= [];

            if (!cardMatch.details[card.tags[0]].includes(key)) {
              cardMatch.details[card.tags[0]].push(key);
            }
          }
        });
      });
    }
  });
};
