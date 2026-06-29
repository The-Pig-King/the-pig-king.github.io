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

const tableContent = document.getElementById('table-content');

const renderRuns = (runs) => {
  runs.forEach((run) => {
    console.log(run);

    const tr = document.createElement('tr');

    const player = run.players_full?.[0];
    const playerName = run.players_full?.[0]?.names?.international ?? '';
    const countryCode = player?.location?.country?.code ?? '';
    const countryName = player?.location?.country?.names?.international ?? '';
    const videoLink = run?.videos?.links?.[0]?.uri ?? '';

    const defaultVideoIcon = `
        <svg 
        class='video-icon default'
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 640">
            <!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License
            - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
            <title>Video</title>
            <path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 
            512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 
            400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 
            199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 
            400z"/>
        </svg>`;

    const youtubeIcon = `
        <svg 
        class='video-icon youtube'
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 640">
            <!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License 
            - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
            <title>Youtube</title>
            <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 
            128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 
            47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 
            512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 
            409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 
            239.2L406.9 320.4L264.2 401.6z"/>
        </svg>`;

    const twitchIcon = `
        <svg 
        class='video-icon twitch'
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 640">
            <!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License 
            - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
            <title>Twitch</title>
            <path d="M455.4 167.5L416.8 167.5L416.8 277.2L455.4 277.2L455.4 167.5zM349.2 167L310.6 
            167L310.6 276.8L349.2 276.8L349.2 167zM185 64L88.5 155.4L88.5 484.6L204.3 484.6L204.3 
            576L300.8 484.6L378.1 484.6L551.9 320L551.9 64L185 64zM513.3 301.8L436.1 374.9L358.9 
            374.9L291.3 438.9L291.3 374.9L204.4 374.9L204.4 100.6L513.3 100.6L513.3 301.8z"/>
        </svg>`;

    const bilibiliIcon = `
    <svg 
    class='video-icon bilibili'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640">
    <!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License 
    - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
    <title>Bilibili</title>
    <path d="M552.6 168.1C569.3 186.2 577 207.8 575.9 233.8L575.9 436.2C575.5 462.6 566.7 
    484.3 549.4 501.3C532.2 518.3 510.3 527.2 483.9 528L156 528C129.6 527.2 107.8 518.2 90.7 
    500.8C73.6 483.4 64.7 460.5 64 432.2L64 233.8C64.8 207.8 73.7 186.2 90.7 168.1C107.8 151.8 
    129.5 142.8 156 142L185.4 142L160 116.2C154.3 110.5 151.4 103.2 151.4 94.4C151.4 85.6 
    154.3 78.3 160 72.6C165.7 66.9 173 64 181.9 64C190.8 64 198 66.9 203.8 72.6L277.1 
    142L365.1 142L439.6 72.6C445.7 66.9 453.2 64 462 64C470.8 64 478.1 66.9 483.9 72.6C489.6 
    78.3 492.5 85.6 492.5 94.4C492.5 103.2 489.6 110.5 483.9 116.2L458.6 142L487.9 142C514.3 
    142.8 535.9 151.8 552.6 168.1zM513.8 237.8C513.4 228.2 510.1 220.4 503.1 214.3C497.9 208.2 
    489.1 204.9 480.4 204.5L160 204.5C150.4 204.9 142.6 208.2 136.4 214.3C130.3 220.4 127 
    228.2 126.6 237.8L126.6 432.2C126.6 441.4 129.9 449.2 136.4 455.7C142.9 462.2 150.8 465.5 
    160 465.5L480.4 465.5C489.6 465.5 497.4 462.2 503.7 455.7C510 449.2 513.4 441.4 513.8 
    432.2L513.8 237.8zM249.5 280.5C255.8 286.8 259.2 294.6 259.6 303.7L259.6 337C259.2 346.2 
    255.9 353.9 249.8 360.2C243.6 366.5 235.8 369.7 226.2 369.7C216.6 369.7 208.7 366.5 202.6 
    360.2C196.5 353.9 193.2 346.2 192.8 337L192.8 303.7C193.2 294.6 196.6 286.8 202.9 
    280.5C209.2 274.2 216.1 270.9 226.2 270.5C235.4 270.9 243.2 274.2 249.5 280.5zM441 
    280.5C447.3 286.8 450.7 294.6 451.1 303.7L451.1 337C450.7 346.2 447.4 353.9 441.3 
    360.2C435.2 366.5 427.3 369.7 417.7 369.7C408.1 369.7 400.3 366.5 394.1 360.2C387.1 
    353.9 384.7 346.2 384.4 337L384.4 303.7C384.7 294.6 388.1 286.8 394.4 280.5C400.7 274.2 
    408.5 270.9 417.7 270.5C426.9 270.9 434.7 274.2 441 280.5z"/>
    </svg>`;

    // Choose icon
    const videoHostname = videoLink
      ? new URL(videoLink).hostname.replace('www.', '')
      : '';

    const videoIcon =
      {
        'youtube.com': youtubeIcon,
        'youtu.be': youtubeIcon,
        'twitch.tv': twitchIcon,
        'bilibili.com': bilibiliIcon,
        'b23.tv': bilibiliIcon,
      }[videoHostname] ?? defaultVideoIcon;

    tr.innerHTML = `
      <td>${run.date || ''}</td>
      <td>${videoLink ? `<a href="${videoLink}">${videoIcon}</a>` : ''}</td>
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

    tableContent.appendChild(tr);
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

const filterBtns = document.querySelectorAll('.filter-btn');

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

updateUI();
