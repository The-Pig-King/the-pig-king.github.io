import { initWrHistory } from '../../js/shared-wr-history.js';
import { titleCaseSlug } from '../../js/main.js';

const data = await fetch('data.json').then((r) => r.json());

const additionalData = [];

const filterRuns = (state, runs) => {
  return runs.filter((run) => {
    let matchCategory = false;
    if (state.category.filters.has('any')) {
      matchCategory = run.category === 'any';
    } else if (state.category.filters.has('all-gordos')) {
      matchCategory = run.category === 'all-gordos';
    } else if (state.category.filters.has('slimepedia')) {
      matchCategory = run.category === 'slimepedia';
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

initWrHistory(data, additionalData, filterRuns, titleCaseSlug);
