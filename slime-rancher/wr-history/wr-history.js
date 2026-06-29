import { initWrHistory } from '../../js/shared-wr-history.js';

const data = await fetch('data.json').then((r) => r.json());

const filterRuns = (state) => {
  return data.filter((run) => {
    let matchCategory = false;
    if (state.category.filters.has('any')) {
      matchCategory =
        run.category === 'any-glitchless' || run.category === 'any-glitched';
    } else if (state.category.filters.has('all-gordos')) {
      matchCategory = run.category === 'all-gordos';
    } else if (state.category.filters.has('slimepedia')) {
      matchCategory =
        run.category === 'slimepedia-glitchless' ||
        run.category === 'slimepedia-glitched';
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

initWrHistory(data, filterRuns);
