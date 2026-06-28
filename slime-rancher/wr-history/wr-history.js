const formatTime = (seconds) => {
  if (seconds == null || isNaN(seconds)) return '';

  const ms = seconds % 1;
  const whole = Math.floor(seconds);

  const hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const secs = whole % 60;

  // < 1 second → 0.xxx
  if (whole === 0) {
    return `0.${Math.floor(ms * 1000)
      .toString()
      .padStart(3, '0')}`;
  }

  // < 60 seconds → x.xxx
  if (hours === 0 && minutes === 0) {
    return (secs + ms).toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
  }

  // < 1 hour → m:ss.xxx
  if (hours === 0) {
    return `${minutes}:${(secs + ms).toFixed(3).padStart(6, '0')}`;
  }

  // ≥ 1 hour → h:mm:ss.xxx
  return `${hours}:${String(minutes).padStart(2, '0')}:${(secs + ms)
    .toFixed(3)
    .padStart(6, '0')}`;
};

const renderRunsCount = (runsCount) => {
  document.getElementById('runs-count').textContent = runsCount;
};

const tableBody = document.getElementById('tableBody');

const renderRuns = (runs) => {
  runs.forEach((run) => {
    const tr = document.createElement('tr');

    const player = run.players_full?.[0];
    const playerName = run.players_full?.[0]?.names?.international ?? '';
    const countryCode = player?.location?.country?.code ?? '';
    const countryName = player?.location?.country?.names?.international ?? '';

    console.log(run);

    tr.innerHTML = `
      <td>${run.date || ''}</td>
      <td>${formatTime(run.primary_t) || ''}</td>
      <td></td>
      <td>
        <img 
            class="country-flag"
            src="${
              countryCode
                ? `https://www.speedrun.com/images/flags/${countryCode}.png`
                : ''
            }" 
                title="${countryName}" 
                alt="${countryName}">
        ${playerName}
      </td>
      <td>${run.version}</td>
    `;

    tableBody.appendChild(tr);
  });
};

const data = await fetch('data.json').then((r) => r.json());

const updateUI = () => {
  const filteredRuns = data;
  const sortedRuns = filteredRuns.sort((a, b) => {
    return a.date < b.date;
  });
  const runsCount = sortedRuns.length;

  renderRunsCount(runsCount);
  renderRuns(sortedRuns);
};

updateUI();
