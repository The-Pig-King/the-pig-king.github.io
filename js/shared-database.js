export const initDatabase = (
  tagGroups,
  resolveStyle,
  cards,
  extraIcons,
  originalDocumentTitle,
  titleCaseSlug,
  srKey,
  srTitle
) => {
  const groupTags = (tags = []) => {
    const grouped = new Map();

    for (const tag of tags) {
      const group = tagGroups[tag] ?? 'other';

      if (!grouped.has(group)) {
        grouped.set(group, new Set());
      }
      grouped.get(group).add(tag);
    }
    return grouped;
  };

  const filterBars = document.querySelectorAll('.filter-bar[data-group]');

  const state = {};
  filterBars.forEach(({ dataset: { group } }) => {
    state[group] = {
      filters: new Set(),
      excludes: new Set(),
      mode: group === 'style' ? 'no-filter' : 'any',
    };
  });

  const sortSelect = document.getElementById('sort-select');
  sortSelect.addEventListener('change', () => {
    updateUI();
  });

  const sortDirection = document.getElementById('sort-direction-btn');
  sortDirection.addEventListener('click', () => {
    const mode = sortDirection.dataset.mode;
    if (mode === 'ascending') {
      sortDirection.innerHTML =
        '<svg class="small-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M278.6 438.6L182.6 534.6C170.1 547.1 149.8 547.1 137.3 534.6L41.3 438.6C28.8 426.1 28.8 405.8 41.3 393.3C53.8 380.8 74.1 380.8 86.6 393.3L128 434.7L128 128C128 110.3 142.3 96 160 96C177.7 96 192 110.3 192 128L192 434.7L233.4 393.3C245.9 380.8 266.2 380.8 278.7 393.3C291.2 405.8 291.2 426.1 278.7 438.6zM352 544C334.3 544 320 529.7 320 512C320 494.3 334.3 480 352 480L384 480C401.7 480 416 494.3 416 512C416 529.7 401.7 544 384 544L352 544zM352 416C334.3 416 320 401.7 320 384C320 366.3 334.3 352 352 352L448 352C465.7 352 480 366.3 480 384C480 401.7 465.7 416 448 416L352 416zM352 288C334.3 288 320 273.7 320 256C320 238.3 334.3 224 352 224L512 224C529.7 224 544 238.3 544 256C544 273.7 529.7 288 512 288L352 288zM352 160C334.3 160 320 145.7 320 128C320 110.3 334.3 96 352 96L576 96C593.7 96 608 110.3 608 128C608 145.7 593.7 160 576 160L352 160z"/></svg>';
      sortDirection.dataset.mode = 'descending';
    } else {
      sortDirection.innerHTML =
        '<svg class="small-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 96C334.3 96 320 110.3 320 128C320 145.7 334.3 160 352 160L384 160C401.7 160 416 145.7 416 128C416 110.3 401.7 96 384 96L352 96zM352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288L448 288C465.7 288 480 273.7 480 256C480 238.3 465.7 224 448 224L352 224zM352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416L512 416C529.7 416 544 401.7 544 384C544 366.3 529.7 352 512 352L352 352zM352 480C334.3 480 320 494.3 320 512C320 529.7 334.3 544 352 544L576 544C593.7 544 608 529.7 608 512C608 494.3 593.7 480 576 480L352 480zM182.6 105.4C170.1 92.9 149.8 92.9 137.3 105.4L41.3 201.4C28.8 213.9 28.8 234.2 41.3 246.7C53.8 259.2 74.1 259.2 86.6 246.7L128 205.3L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 205.3L233.4 246.7C245.9 259.2 266.2 259.2 278.7 246.7C291.2 234.2 291.2 213.9 278.7 201.4L182.7 105.4z"/></svg>';
      sortDirection.dataset.mode = 'ascending';
    }

    updateUI();
  });

  const sortCards = (cards) => {
    let sortedCards;
    const direction = sortDirection.dataset.mode;

    switch (sortSelect.value) {
      case 'automatic':
        return direction === 'ascending' ? cards : cards.reverse();

      case 'name':
        sortedCards = cards.sort((a, b) => {
          return a.name > b.name;
        });
        return direction === 'ascending' ? sortedCards : sortedCards.reverse();

      case 'tag-count':
        return cards.sort((a, b) => {
          return direction === 'ascending'
            ? a.tags.length - b.tags.length
            : b.tags.length - a.tags.length;
        });

      case 'location-count':
        return cards.sort((a, b) => {
          let aLength;
          let bLength;
          aLength = a.locations ? Object.values(a.locations).flat().length : 0;
          bLength = b.locations ? Object.values(b.locations).flat().length : 0;
          return direction === 'ascending'
            ? aLength - bLength
            : bLength - aLength;
        });
    }
  };

  const modeBtns = document.querySelectorAll('.mode-btn');
  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.filter-bar').dataset.group;
      state[group].mode = btn.dataset.mode;

      btn
        .closest('.filter-bar')
        .querySelectorAll('.mode-btn')
        .forEach((b) => b.classList.remove('toggledOn'));
      btn.classList.add('toggledOn');

      updateUI();
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.filter-bar').dataset.group;
      const value = btn.dataset.category;
      const { filters, excludes } = state[group];

      const values =
        group === 'style' && value === 'style'
          ? ['secret', 'radiant']
          : [value];

      values.forEach((v) => {
        if (excludes.has(v)) {
          // toggledOff -> no class
          excludes.delete(v);
          btn.classList.remove('toggledOff');
        } else if (filters.has(v)) {
          // toggledOn -> toggledOff
          filters.delete(v);
          excludes.add(v);
          btn.classList.remove('toggledOn');
          btn.classList.add('toggledOff');
        } else {
          // no class -> toggledOn
          filters.add(v);
          btn.classList.add('toggledOn');
        }
      });

      updateUI();
    });
  });

  const advancedFilterBars = document.querySelectorAll('.advanced-filter-bar');

  const advancedFiltersBtn = document.querySelector('.advanced-filters-btn');
  advancedFiltersBtn.addEventListener('click', () => {
    advancedFiltersBtn.classList.toggle('toggledOn');
    if (advancedFiltersBtn.classList.contains('toggledOn')) {
      advancedFilterBars.forEach((advancedFilterBar) => {
        advancedFilterBar.style.display = 'flex';
      });
    } else {
      advancedFilterBars.forEach((advancedFilterBar) => {
        advancedFilterBar.style.display = 'none';
      });
    }

    updateUI();
  });

  const resetFiltersBtns = document.querySelectorAll('.reset-filters-btn');
  resetFiltersBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isNoFilterOn = document
        .getElementById('no-filter')
        .classList.contains('toggledOn');
      const group = btn.closest('.filter-bar').dataset.group;
      const isGroupButton = btn.classList.contains('reset-group-filters-btn');

      // Reset button visuals
      if (isGroupButton) {
        filterBtns.forEach((filterBtn) => {
          if (filterBtn.closest('.filter-bar').dataset.group === group) {
            filterBtn.classList.remove('toggledOn');
            filterBtn.classList.remove('toggledOff');
          }
        });
      } else {
        filterBtns.forEach((filterBtn) => {
          if (!filterBtn.classList.contains('style-btn') || !isNoFilterOn) {
            filterBtn.classList.remove('toggledOn');
            filterBtn.classList.remove('toggledOff');
          }
        });
      }

      if (isGroupButton) {
        modeBtns.forEach((modeBtn) => {
          if (modeBtn.closest('.filter-bar').dataset.group === group) {
            modeBtn.classList.remove('toggledOn');
            if (modeBtn.closest('.filter-bar').dataset.group === 'style') {
              if (modeBtn.dataset.mode === 'no-filter') {
                modeBtn.classList.add('toggledOn'); // Turn on 'no-filter' btn for style group
              }
            } else {
              if (modeBtn.dataset.mode === 'any') {
                modeBtn.classList.add('toggledOn'); // Turn on 'any' btn for non-style groups
              }
            }
          }
        });
      } else {
        modeBtns.forEach((modeBtn) => {
          modeBtn.classList.remove('toggledOn');

          if (modeBtn.closest('.filter-bar').dataset.group === 'style') {
            if (modeBtn.dataset.mode === 'no-filter') {
              modeBtn.classList.add('toggledOn'); // Turn on 'no-filter' btn for style group
            }
          } else {
            if (modeBtn.dataset.mode === 'any') {
              modeBtn.classList.add('toggledOn'); // Turn on 'any' btn for non-style groups
            }
          }
        });
      }

      // Reset state
      if (isGroupButton) {
        group === 'style'
          ? (state[group].mode = 'no-filter')
          : (state[group].mode = 'any');
        state[group].filters = new Set();
        state[group].excludes = new Set();
      } else {
        Object.keys(state).forEach((group) => {
          if (group === 'style' && isNoFilterOn) {
            state[group].mode = 'no-filter';
          } else {
            state[group].filters = new Set();
            state[group].excludes = new Set();
            state[group].mode = 'any';
          }
        });
      }

      updateUI();
    });
  });

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    updateUI();
  });

  const updateURL = () => {
    const parts = [];

    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      parts.push(`search=${searchTerm.trim().replace(/\s+/g, '+')}`);
    }

    // Build segments of the url
    Object.entries(state).forEach(([group, { mode, filters, excludes }]) => {
      const allFilters = [...filters, ...[...excludes].map((v) => `-${v}`)];

      if (allFilters.length > 0) {
        parts.push(`${group}=${mode}:${allFilters.join(',')}`);
      }
    });

    // Add modal to url if open
    if (cardModal.hasAttribute('open')) {
      const cardName = cardModal.querySelector('.card-name').textContent;
      parts.push(`card=${cardName.trim().replace(/\s+/g, '+')}`);
    }

    // Join the segments together to complete the url
    const queryString = parts.length > 0 ? `?${parts.join('&')}` : '';
    history.replaceState(null, '', `${location.pathname}${queryString}`);
  };

  const updateUI = () => {
    currentPageSize = pageSize;

    const filteredCards = filterCards();
    const resultsCount = filteredCards.length;

    renderResultsCount(resultsCount);
    renderCards(sortCards(filteredCards));
    updateURL();
  };

  const renderResultsCount = (resultsCount) => {
    document.title =
      originalDocumentTitle
        .split(' ')
        .filter((e) => e !== '-' && e !== 'ThePigKing')
        .join(' ') +
      ` - ${resultsCount} Results - ` +
      'ThePigKing';

    document.getElementById('resultsCount').textContent = resultsCount;
  };

  const matchGroup = (cardValues, filters, excludes, mode) => {
    if (mode === 'no-filter') return true;

    if (excludes && excludes.size > 0) {
      const hasExcluded = [...excludes].some((v) => cardValues?.includes(v));
      if (hasExcluded) return false;
    }

    if (filters.size === 0) return true;

    const filtersArray = [...filters];

    if (mode === 'any')
      return filtersArray.some((v) => cardValues?.includes(v));
    if (mode === 'all')
      return filtersArray.every((v) => cardValues?.includes(v));

    if (mode === 'exactly') {
      // Group filters
      const filtersGroups = groupTags(filtersArray);
      const cardGroups = groupTags(cardValues);

      for (const [group, filtersSet] of filtersGroups) {
        const cardSet = cardGroups.get(group);

        // Fails if not an exact match
        if (!cardSet || cardSet.size !== filtersSet.size) return false;
        for (const filter of filtersSet) if (!cardSet.has(filter)) return false;
      }
      return true;
    }
  };

  const filterCards = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    return cards.filter((card) => {
      const matchesSearch =
        searchTerm === '' || card.name.toLowerCase().includes(searchTerm);

      const matchesFilters = Object.entries(state).every(
        ([group, { filters, excludes, mode }]) => {
          let cardValues;
          if (group === 'location') {
            cardValues = card.locations
              ? Object.values(card.locations).flat()
              : [];
          } else if (group === 'source') {
            cardValues = card.locations ? Object.keys(card.locations) : [];
          } else if (group === 'style') {
            cardValues = card.styles;
          } else {
            cardValues = card.tags;
          }
          return matchGroup(cardValues, filters, excludes, mode);
        }
      );

      return matchesSearch && matchesFilters;
    });
  };

  const cardContainer = document.getElementById('card-container');

  const loadSelect = document.getElementById('load-select');

  loadSelect.addEventListener('change', () => {
    pageSize = loadSelect.value === 'all' ? Infinity : Number(loadSelect.value);
    updateUI();
  });

  let pageSize = 100;
  let currentPageSize = pageSize;

  const loadMoreBtn = document.getElementById('load-more-btn');
  loadMoreBtn.textContent = `Load ${pageSize} more`;

  loadMoreBtn.addEventListener('click', () => {
    currentPageSize += pageSize;
    renderCards(sortCards(filterCards()));
  });

  const sourceFilterBar = document.querySelector(
    '.filter-bar[data-group="source"]'
  );
  const sourceFilterBtns = [...sourceFilterBar.querySelectorAll('.filter-btn')];

  const renderCard = (card, style = null) => {
    if (!card) return '';

    const { iconSrc, styleName, styleAttr, radiantAttr, classAttr } =
      resolveStyle(card, style, state);

    // Render card
    return `
      <div class="card" tabindex="0">
        <img src="${iconSrc}" alt="${card.name}" class="card-img-main" />
          <h2 class="card-name ${card.name.toLowerCase().replace(/\s+/g, '-')}">${card.name}</h2>
          <p class="card-style-name ${classAttr}" style="${styleAttr} ${radiantAttr}">${styleName}</p>
          <div class="card-tags">
            ${(card.tags ?? [])
              .map(
                (tag) =>
                  `
                <span 
                  class="tag tag-${tag.toLowerCase()}" 
                  style="--tag-color: var(--${tag}-color)">
                    ${tag === 'dlc' ? tag.toUpperCase() : titleCaseSlug(tag)}
                </span>
              `
              )
              .join('')}
          </div>

          <div class="card-location-tags" role="button">
            ${
              card.locations
                ? Object.entries(card.locations)
                    .map(
                      ([source, locs]) => `
                <details class="location-source" ${
                  sourceFilterBtns
                    .find(
                      (btn) => btn.dataset.category === source.toLowerCase()
                    )
                    ?.classList.contains('toggledOn')
                    ? 'open'
                    : ''
                }>
                  <summary style="--source-color: var(--${source}-color)">
                      <span class="summary-content">
                        ${titleCaseSlug(source === 'spawn-largo' ? 'Spawn (Largo)' : source)}
                        <img 
                          class="source-icon"
                          src="/assets/games/${srTitle}/sources/${source}.png"
                          alt="${titleCaseSlug(source === 'spawn-largo' ? 'Spawn (Largo)' : source)}">
                      </span>
                  </summary>
                  <div class="location-tags">
                    ${locs
                      .map(
                        (loc) => `
                        <button
                          class="tag location-tag tag-${loc}"
                          style="--tag-color: var(--${loc}-color)">
                            ${titleCaseSlug(loc)}
                        </button>
                      `
                      )
                      .join('')}
                  </div>
                </details>`
                    )
                    .join('')
                : ''
            }
          </div>
          <div class="card-details">
            ${
              card.details
                ? Object.entries(card.details)
                    .map(
                      ([category, details]) => `
                    <div class="details-group">
                      <div class="details-name">
                        ${titleCaseSlug(category)}
                      </div>
                      <div class="details">
                        ${
                          Array.isArray(details)
                            ? details
                                .map((detail) => {
                                  const detailIconSrc =
                                    cards.find(
                                      (card) =>
                                        card.name === titleCaseSlug(detail)
                                    )?.icon ||
                                    extraIcons[detail] ||
                                    null;

                                  return detailIconSrc
                                    ? `
                                    <button
                                      class="detail details-${detail}"
                                      data-name="${titleCaseSlug(detail)}">
                                      <img 
                                        class="details-icon"
                                        src="${detailIconSrc}"
                                        alt="${titleCaseSlug(detail)}"
                                        title="${titleCaseSlug(detail)}">
                                    </button>`
                                    : `<span class="details-fallback details-${detail}">
                                                ${titleCaseSlug(detail)}
                                              </span>`;
                                })
                                .join('')
                            : Object.entries(details)
                                .map(([key, value]) => {
                                  // Handle duplicate keys
                                  if (key.endsWith('!')) {
                                    key = key.replaceAll('!', '');
                                  }

                                  const detailIconSrc =
                                    cards.find(
                                      (card) => card.name === titleCaseSlug(key)
                                    )?.icon ||
                                    extraIcons[key] ||
                                    null;

                                  return detailIconSrc
                                    ? `<button 
                                        class="detail detail-object details-${key}"
                                        data-name="${titleCaseSlug(key)}">
                                        <img
                                          class="details-icon"
                                          src="${detailIconSrc}"
                                          alt="${titleCaseSlug(key)}"
                                          title="${titleCaseSlug(key)}">
                                        <span>${value}</span>
                                        </button>`
                                    : `<div class="details-object">
                                        <span class="details-fallback details-${key}">
                                          ${titleCaseSlug(key)} (${value})
                                        </span>
                                      </div>`;
                                })
                                .join('')
                        }
                      </div>
                    </div>
                    `
                    )
                    .join('')
                : ''
            }
          </div>
        </div>
      `;
  };

  const toggleLocationsBtn = document.getElementById('toggle-locations-btn');
  toggleLocationsBtn.addEventListener('click', () => {
    toggleLocationsBtn.classList.toggle('toggledOn');

    updateUI();
  });

  const toggleDetailsBtn = document.getElementById('toggle-details-btn');
  toggleDetailsBtn.addEventListener('click', () => {
    toggleDetailsBtn.classList.toggle('toggledOn');

    updateUI();
  });

  const renderCards = (cards) => {
    // No card matches
    if (!cards || cards.length === 0) {
      cardContainer.innerHTML = '';
      return;
    }

    const visible = cards.slice(0, currentPageSize);

    cardContainer.innerHTML = visible
      .map((card) => {
        return renderCard(card);
      })
      .join('');

    const remaining = cards.length - currentPageSize;
    loadMoreBtn.textContent = `Load ${Math.min(remaining, pageSize)} more`;
    loadMoreBtn.style.display = remaining > 0 ? 'block' : 'none';

    const loaded = Math.min(currentPageSize, cards.length);
    document.querySelectorAll('.loaded-text').forEach((el) => {
      el.textContent = `${loaded} loaded (${Math.max(remaining, 0)} remaining)`;
    });

    // Render locations
    const cardLocations = document.querySelectorAll('.card-location-tags');
    if (toggleLocationsBtn.classList.contains('toggledOn')) {
      cardLocations.forEach((loc) => (loc.style.display = 'flex'));
    } else {
      cardLocations.forEach((loc) => (loc.style.display = 'none'));
    }

    // Render details
    const cardDetails = document.querySelectorAll('.card-details');
    if (toggleDetailsBtn.classList.contains('toggledOn')) {
      cardDetails.forEach((detail) => (detail.style.display = 'flex'));
    } else {
      cardDetails.forEach((detail) => (detail.style.display = 'none'));
    }
  };

  const cardModal = document.getElementById('card-modal');
  const cardModalContent = document.getElementById('card-modal-content');
  const closeModal = document.getElementById('close-modal-btn');

  const openModal = (card) => {
    cardModalContent.innerHTML = renderCard(card);

    // Set modal style toggles
    const secretStyleBtn = document.getElementById('secret-style-btn');
    const srStyleBtn = document.getElementById(`${srKey}-style-btn`);

    const modalSecretStyleBtn = document.getElementById(
      'modal-secret-style-btn'
    );
    const modalSrStyleBtn = document.getElementById(`modal-${srKey}-style-btn`);

    secretStyleBtn.classList.contains('toggledOn')
      ? modalSecretStyleBtn.classList.add('toggledOn')
      : modalSecretStyleBtn.classList.remove('toggledOn');

    srStyleBtn.classList.contains('toggledOn')
      ? modalSrStyleBtn.classList.add('toggledOn')
      : modalSrStyleBtn.classList.remove('toggledOn');

    const sisterLinkBtn = document.getElementById('sister-link-btn');
    sisterLinkBtn.style.display = card[`${srKey}-icon`] ? 'block' : 'none';
    sisterLinkBtn.style.color = `var(--${srKey}-color)`;
    sisterLinkBtn.textContent = `View in ${srKey.toUpperCase()} Database`;

    const sisterName = card['sister-name'] ?? card.name;
    sisterLinkBtn.dataset.cardName = sisterName;

    cardModal.showModal();
    closeModal.focus();
    updateURL();
  };

  // Open modal with keyboard
  cardContainer.addEventListener('keydown', (e) => {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    if (e.target.closest('.card-location-tags')) return;
    const cardElement = e.target.closest('.card');
    if (!cardElement) return;
    e.preventDefault();
    cardElement.click();
  });

  // Open modal of clicked card
  cardContainer.addEventListener('click', (e) => {
    if (e.target.closest('.card-location-tags')) return;

    const cardElement = e.target.closest('.card');
    if (!cardElement) return;

    const cardName = cardElement.querySelector('.card-name').textContent;
    const clickedCard = cards.find((card) => {
      return card.name === cardName;
    });

    openModal(clickedCard);
    updateURL();
  });

  // Open modal of clicked detail
  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('[data-name]');
    const tagBtn = e.target.closest('.tag');

    let name = '';
    if (detailBtn) {
      name = detailBtn.dataset.name;
    } else if (tagBtn) {
      name = tagBtn.textContent.trim();
    } else {
      return;
    }

    const foundCard = cards.find((card) => card.name === name);
    if (!foundCard) return;

    openModal(foundCard);
    updateURL();
  });

  closeModal.addEventListener('click', () => {
    cardModal.close();
    updateURL();
  });

  // Navigate neighbouring modals with arrow keys
  document.addEventListener('keydown', (e) => {
    if (!cardModal.hasAttribute('open')) return;
    if (
      e.key !== 'ArrowLeft' &&
      e.key !== 'ArrowRight' &&
      e.key !== 'a' &&
      e.key !== 'd' &&
      e.key !== 'A' &&
      e.key !== 'D'
    )
      return;

    const visibleCards = sortCards(filterCards());
    const currentName =
      cardModalContent.querySelector('.card-name').textContent;
    const currentIndex = visibleCards.findIndex((c) => c.name === currentName);

    if (
      (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') &&
      currentIndex > 0
    ) {
      openModal(visibleCards[currentIndex - 1]);
    } else if (
      (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') &&
      currentIndex < visibleCards.length - 1
    ) {
      openModal(visibleCards[currentIndex + 1]);
    }

    updateURL();
  });

  // Close modal when clicking outside
  cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal) {
      document
        .getElementById('modal-secret-style-btn')
        .classList.remove('toggledOn');
      document
        .getElementById(`modal-${srKey}-style-btn`)
        .classList.remove('toggledOn');
      cardModal.close();
      updateURL();
    } else {
      const srBtn = e.target.closest('.sister-link-btn');
      if (srBtn) {
        const name = srBtn.dataset.cardName;
        const sisterPage =
          srTitle === 'slime-rancher' ? 'slime-rancher-2' : 'slime-rancher';
        window.location.href = `/${sisterPage}/database/?card=${name.replace(/\s+/g, '+')}`;
      }
    }
  });

  const modalStyleBtns = document.querySelectorAll('.modal-style-btn');
  modalStyleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalSecretStyleBtn = document.getElementById(
        'modal-secret-style-btn'
      );
      const modalSrStyleBtn = document.getElementById(
        `modal-${srKey}-style-btn`
      );

      btn.dataset.category === 'style'
        ? modalSecretStyleBtn.classList.toggle('toggledOn')
        : modalSrStyleBtn.classList.toggle('toggledOn');

      const cardModalContent = document.getElementById('card-modal-content');
      const cardName = cardModalContent.querySelector('.card-name').textContent;
      const foundCard = cards.find((card) => {
        return card.name === cardName;
      });

      if (!foundCard) return;

      const modalStyle = {
        secret: modalSecretStyleBtn.classList.contains('toggledOn'),
        [srKey]: modalSrStyleBtn.classList.contains('toggledOn'),
      };

      cardModalContent.innerHTML = renderCard(foundCard, modalStyle);
    });
  });

  const randomCardBtn = document.getElementById('random-card-btn');
  randomCardBtn.addEventListener('click', () => {
    const sortedCards = sortCards(filterCards());
    const randomCard =
      sortedCards[Math.floor(Math.random() * sortedCards.length)];
    openModal(randomCard);
  });

  const params = new URLSearchParams(location.search);

  // Reset button toggles
  modeBtns.forEach((btn) => btn.classList.remove('toggledOn'));
  filterBtns.forEach((btn) => btn.classList.remove('toggledOn'));

  const searchParam = params.get('search');
  if (searchParam) {
    searchInput.value = searchInput.value = searchParam.replace(/\+/g, ' ');
  }

  let cardParam;

  for (const [group, value] of params.entries()) {
    if (group === 'search') continue;
    if (group === 'card') {
      cardParam = value;
      continue;
    }

    const [mode, filterString] = value.split(':');

    // Set state
    state[group].mode = mode;

    filterString.split(',').forEach((v) => {
      if (v.startsWith('-')) {
        const tag = v.slice(1);
        state[group].excludes.add(tag);
      } else {
        state[group].filters.add(v);
      }
    });

    // Set mode btn toggles
    modeBtns.forEach((btn) => {
      if (btn.closest('.filter-bar').dataset.group === group) {
        if (btn.dataset.mode === mode) {
          btn.classList.add('toggledOn');
        }
      }
    });

    // Set filter btn toggles
    filterBtns.forEach((btn) => {
      if (btn.closest('.filter-bar').dataset.group === group) {
        const isStyleBtn =
          group === 'style' && btn.dataset.category === 'style';
        const isActive = isStyleBtn
          ? state[group].filters.has('secret')
          : state[group].filters.has(btn.dataset.category);
        const isExcluded = isStyleBtn
          ? state[group].excludes.has('secret')
          : state[group].excludes.has(btn.dataset.category);

        if (isActive) btn.classList.add('toggledOn');
        else if (isExcluded) btn.classList.add('toggledOff');
      }
    });
  }

  // Set default mode for unfiltered groups
  Object.keys(state).forEach((group) => {
    const hasParam = params.has(group);
    if (!hasParam) {
      modeBtns.forEach((btn) => {
        if (btn.closest('.filter-bar').dataset.group === group) {
          const defaultMode = group === 'style' ? 'no-filter' : 'any';
          if (btn.dataset.mode === defaultMode) {
            btn.classList.add('toggledOn');
          }
        }
      });
    }
  });

  // Apply filter button colors
  filterBtns.forEach((btn) => {
    if (btn.dataset.category === 'style') {
      btn.style.setProperty('--btn-color', `var(--secret-style-color)`);
    } else {
      btn.style.setProperty(
        '--btn-color',
        `var(--${btn.dataset.category}-color)`
      );
    }
  });

  // Apply modal button colors
  modalStyleBtns.forEach((btn) => {
    if (btn.dataset.category === 'style') {
      btn.style.setProperty('--btn-color', `var(--secret-style-color)`);
    } else {
      btn.style.setProperty(
        '--btn-color',
        `var(--${btn.dataset.category}-color)`
      );
    }
  });

  updateUI();

  if (cardParam) {
    openModal(cards.find((c) => c.name === cardParam));

    if (state.style.filters.has('secret')) {
      document
        .getElementById('modal-secret-style-btn')
        .classList.add('toggledOn');
    }
    if (state.style.filters.has(srKey)) {
      document
        .getElementById(`modal-${srKey}-style-btn`)
        .classList.add('toggledOn');
    }
  }
};
