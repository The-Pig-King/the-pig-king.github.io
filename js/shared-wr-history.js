export const initWrHistory = (data, additionalData, filterRuns) => {
  const formatTime = (seconds) => {
    if (seconds == null || isNaN(seconds)) return '';
    const ms = seconds % 1;
    const whole = Math.floor(seconds);
    const hours = Math.floor(whole / 3600);
    const minutes = Math.floor((whole % 3600) / 60);
    const secs = whole % 60;

    // < 1 second → 0.xxx
    if (whole === 0) {
      return `0.${ms.toFixed(3).split('.')[1]}`;
    }
    // < 1 minute → x.xxx
    if (hours === 0 && minutes === 0) {
      return (secs + ms).toFixed(3);
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

  const formatTimeDifference = (seconds) => {
    if (!isFinite(seconds)) return '';
    const abs = Math.abs(seconds);
    const ms = abs % 1;
    const whole = Math.floor(abs);
    const hours = Math.floor(whole / 3600);
    const minutes = Math.floor((whole % 3600) / 60);
    const secs = whole % 60;

    if (hours === 0 && minutes === 0) {
      return `-${(secs + ms).toFixed(3)}`;
    }
    if (hours === 0) {
      return `-${minutes}:${(secs + ms).toFixed(3).padStart(6, '0')}`;
    }
    return `-${hours}:${String(minutes).padStart(2, '0')}:${(secs + ms).toFixed(3).padStart(6, '0')}`;
  };

  const calculateTimeDifference = (run, bestTime) => {
    // Set color
    const diff = Math.abs(run.primary_t - bestTime);
    if (diff < 1) {
      run.timeDifferenceColor = 'difference-worst-color';
    } else if (diff < 5) {
      run.timeDifferenceColor = 'difference-average-color';
    } else if (diff < 10) {
      run.timeDifferenceColor = 'difference-good-color';
    } else {
      run.timeDifferenceColor = 'difference-best-color';
    }

    // Set time difference
    run.timeDifference = Number((run.primary_t - bestTime).toFixed(3));
  };

  const calculateDaysDifference = (run, prevDate) => {
    if (!prevDate) {
      run.daysDifference = null;
      return;
    }
    const ms =
      new Date(run.date.slice(0, 10)) - new Date(prevDate.slice(0, 10));
    run.daysDifference = Math.round(ms / (1000 * 60 * 60 * 24));

    // Set color
    if (run.daysDifference < 1) {
      run.daysDifferenceColor = 'difference-worst-color';
    } else if (run.daysDifference < 7) {
      run.daysDifferenceColor = 'difference-average-color';
    } else if (run.daysDifference < 365) {
      run.daysDifferenceColor = 'difference-good-color';
    } else {
      run.daysDifferenceColor = 'difference-best-color';
    }
  };

  const renderRunsCount = (runsCount) => {
    document.getElementById('runs-count').textContent = runsCount;
  };

  const tableContent = document.getElementById('table-content');

  const renderRuns = (runs) => {
    tableContent.innerHTML = '';

    // Add data
    const fastestRun = runs.reduce((a, b) =>
      a.primary_t < b.primary_t ? a : b
    );
    fastestRun.details = {
      currentWr: 'Current World Record',
      ...fastestRun.details,
    };

    runs.forEach((run) => {
      const tr = document.createElement('tr');
      if (run.status === 'unverified') tr.classList.add('unverified');

      const player = run.players_full?.[0];
      const playerName = run.players_full?.[0]?.names?.international ?? '';
      const countryCode = player?.location?.country?.code ?? '';
      const countryName = player?.location?.country?.names?.international ?? '';
      const videoLink = run?.videos?.links?.[0]?.uri ?? '';

      const defaultVideoIcon = `
        <svg 
        class='table-icon default'
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
        class='table-icon youtube'
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
        class='table-icon twitch'
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
        class='table-icon bilibili'
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

      const commentIcon = `
        <svg 
        class="table-icon comment-icon"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 640">
          <!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License -
          https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
          <path d="M64 416L64 192C64 139 107 96 160 96L480 96C533 96 576 139 576 192L576 
          416C576 469 533 512 480 512L360 512C354.8 512 349.8 513.7 345.6 516.8L230.4 
          603.2C226.2 606.3 221.2 608 216 608C202.7 608 192 597.3 192 584L192 512L160 
          512C107 512 64 469 64 416z"/>
        </svg>
    `;

      const currentWrIcon = `
      <svg 
      class="table-icon comment-icon currentWr"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 640 640">
        <!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - 
        https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
        <path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 
        478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 
        368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 
        512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 
        576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 
        438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 
        72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 
        117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 
        158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 
        254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z"/>
      </svg>
    `;

      const subIcon = `
      <svg 
      class="table-icon comment-icon sub"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M264.5 64C251.2 64 240.5 74.7 240.5 88C240.5 101.3 251.2 112 264.5 112L296.5 112L296.5 137.3C188.5 149.2 104.5 240.8 104.5 352C104.5 471.3 201.2 568 320.5 568C439.8 568 536.5 471.3 536.5 352C536.5 312.2 525.7 274.9 506.9 242.8L535.1 214.6C547.6 202.1 547.6 181.8 535.1 169.3C522.6 156.8 502.3 156.8 489.8 169.3L466.4 192.7C433.5 162.5 391.2 142.4 344.4 137.2L344.4 111.9L376.4 111.9C389.7 111.9 400.4 101.2 400.4 87.9C400.4 74.6 389.7 63.9 376.4 63.9L264.4 63.9zM344.5 248L344.5 352C344.5 365.3 333.8 376 320.5 376C307.2 376 296.5 365.3 296.5 352L296.5 248C296.5 234.7 307.2 224 320.5 224C333.8 224 344.5 234.7 344.5 248z"/></svg>`;

      const routeIcon = `<svg 
      class="table-icon comment-icon route"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M576 160C576 210.2 516.9 285.1 491.4 315C487.6 319.4 482 321.1 476.9 320L384 320C366.3 320 352 334.3 352 352C352 369.7 366.3 384 384 384L480 384C533 384 576 427 576 480C576 533 533 576 480 576L203.6 576C212.3 566.1 222.9 553.4 233.6 539.2C239.9 530.8 246.4 521.6 252.6 512L480 512C497.7 512 512 497.7 512 480C512 462.3 497.7 448 480 448L384 448C331 448 288 405 288 352C288 299 331 256 384 256L423.8 256C402.8 224.5 384 188.3 384 160C384 107 427 64 480 64C533 64 576 107 576 160zM181.1 553.1C177.3 557.4 173.9 561.2 171 564.4L169.2 566.4L169 566.2C163 570.8 154.4 570.2 149 564.4C123.8 537 64 466.5 64 416C64 363 107 320 160 320C213 320 256 363 256 416C256 446 234.9 483 212.5 513.9C201.8 528.6 190.8 541.9 181.7 552.4L181.1 553.1zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM480 192C497.7 192 512 177.7 512 160C512 142.3 497.7 128 480 128C462.3 128 448 142.3 448 160C448 177.7 462.3 192 480 192z"/></svg>`;

      const hourIcon = `
      <svg 
      class="table-icon comment-icon hour"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 640 640">
        <!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - 
        https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
        <path d="M128 96C128 78.3 142.3 64 160 64L480 64C497.7 64 512 78.3 512 96C512 113.7 
        497.7 128 480 128L480 139C480 181.4 463.1 222.1 433.1 252.1L365.2 320L433.1 387.9C463.1 
        417.9 480 458.6 480 501L480 512C497.7 512 512 526.3 512 544C512 561.7 497.7 576 480 
        576L160 576C142.3 576 128 561.7 128 544C128 526.3 142.3 512 160 512L160 501C160 458.6 
        176.9 417.9 206.9 387.9L274.8 320L206.9 252.1C176.9 222.1 160 181.4 160 139L160 
        128C142.3 128 128 113.7 128 96zM224 128L224 139C224 164.5 234.1 188.9 252.1 206.9L320 
        274.8L387.9 206.9C405.9 188.9 416 164.5 416 139L416 128L224 128zM224 512L416 512L416 
        501C416 475.5 405.9 451.1 387.9 433.1L320 365.2L252.1 433.1C234.1 451.1 224 475.5 224 
        501L224 512z"/>
      </svg>`;

      const icons = {
        'youtube.com': youtubeIcon,
        'youtu.be': youtubeIcon,
        'twitch.tv': twitchIcon,
        'bilibili.com': bilibiliIcon,
        'b23.tv': bilibiliIcon,
        currentWr: currentWrIcon,
        sub: subIcon,
        route: routeIcon,
        hour: hourIcon,
      };

      // Choose icon
      const videoHostname = videoLink
        ? new URL(videoLink).hostname.replace('www.', '')
        : '';

      // Set player name color
      const style = player?.['name-style'];
      let playerNameHtml = playerName;

      if (style?.style === 'gradient') {
        playerNameHtml = `
        <span
          class="player-gradient"
          style="background-image: linear-gradient(90deg, ${style['color-from'].light}, ${style['color-to'].light});"
        >
          ${playerName}
        </span>
      `;
      } else if (style?.style === 'solid') {
        playerNameHtml = `
        <span style="color:${style.color.light}">
          ${playerName}
        </span>
      `;
      }

      tr.innerHTML = `
        <td>${run.wrNumber}</td>
        <td class='date-column'>
          ${run.date ? new Date(run.date.slice(0, 10)).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
          ${run.daysDifference != null ? `<br><span class="${run.daysDifferenceColor} difference-label">${run.daysDifference} day${run.daysDifference === 1 ? '' : 's'}</span>` : ''}
        </td>
        <td>${videoLink ? `<a href="${videoLink}">${icons[videoHostname]}</a>` : ''}</td>
        <td>
          ${formatTime(run.primary_t) || ''}
          ${run.timeDifference !== '' ? `<br><span class="${run.timeDifferenceColor} difference-label">${formatTimeDifference(run.timeDifference)}</span>` : ''}
        </td>
        <td>
          <img
            class="country-flag"
            src="${countryCode ? `https://www.speedrun.com/images/flags/${countryCode}.png` : ''}"
            title="${countryName}"
            alt="${countryName}">
          ${playerNameHtml}
        </td>
        <td>${run.version}</td>
        <td class="comment-td">
          ${run?.comment ? commentIcon : ''}
          <div class="comment-container">${run?.comment ?? ''}</div>
        </td>
        <td class="comment-td">
        ${
          run?.details
            ? Object.entries(run.details)
                .map(
                  ([key, value]) => `
                  <span data-key="${key}">${icons[key] ?? ''}</span>
                  <div class="comment-container ${key}">${value}</div>
                `
                )
                .join('')
            : ''
        }
        </td>
        `;

      tableContent.appendChild(tr);
    });
  };

  const filterWrs = (runs) => {
    // Keep fastest of a single day (speedrun.com only tracks day, not time)
    const fastest = runs.reduce((acc, run) => {
      if (!acc[run.date] || run.primary_t < acc[run.date].primary_t) {
        acc[run.date] = run;
      }
      return acc;
    }, {});
    runs = runs.filter((run) => fastest[run.date] === run);

    let bestTime = Infinity;
    return runs.filter((run) => {
      if (run.primary_t < bestTime) {
        bestTime = run.primary_t;
        return true;
      }
      return false;
    });
  };

  const sortWrs = (runs) => {
    const direction = sortDirection.dataset.mode;

    switch (sortSelect.value) {
      case 'date':
        return direction === 'ascending'
          ? runs.sort((a, b) => {
              return a.primary_t < b.primary_t;
            })
          : runs.sort((a, b) => {
              return a.primary_t > b.primary_t;
            });
      case 'version':
        return direction === 'ascending'
          ? runs.sort((a, b) => {
              return a.version > b.version;
            })
          : runs.sort((a, b) => {
              return a.version < b.version;
            });
      case 'runner':
        return direction === 'ascending'
          ? runs.sort((a, b) => {
              const nameA = (
                a.players_full?.[0]?.names?.international ?? ''
              ).toLowerCase();
              const nameB = (
                b.players_full?.[0]?.names?.international ?? ''
              ).toLowerCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            })
          : runs.sort((a, b) => {
              const nameA = (
                a.players_full?.[0]?.names?.international ?? ''
              ).toLowerCase();
              const nameB = (
                b.players_full?.[0]?.names?.international ?? ''
              ).toLowerCase();
              if (nameA > nameB) return -1;
              if (nameA < nameB) return 1;
              return 0;
            });
    }
  };

  const addAdditionalData = (runs) => {
    const verifiedRecords = additionalData.filter((run) => {
      return run.status === 'verified';
    });
    for (let i = 0, j = runs.length; i < verifiedRecords.length; i++, j++) {
      runs[j] = verifiedRecords[i];
    }

    // Sort oldest -> newest
    runs.sort((a, b) => {
      return a.primary_t < b.primary_t;
    });

    return runs;
  };

  const addUnverifiedRecords = (runs) => {
    const unverifiedRecords = additionalData.filter((run) => {
      return run.status === 'unverified';
    });
    for (let i = 0, j = runs.length; i < unverifiedRecords.length; i++, j++) {
      runs[j] = unverifiedRecords[i];
    }

    // Sort oldest -> newest
    runs.sort((a, b) => {
      return a.primary_t < b.primary_t;
    });

    return runs;
  };

  const addProperties = (runs) => {
    for (let i = 0; i < runs.length; i++) {
      runs[i].wrNumber = i + 1;
    }

    let bestTime = Infinity;
    let prevDate = null;
    return runs.filter((run) => {
      if (run.primary_t < bestTime) {
        calculateTimeDifference(run, bestTime);
        bestTime = run.primary_t;

        calculateDaysDifference(run, prevDate);
        prevDate = run.date;

        return true;
      }
      return false;
    });
  };

  const updateUI = () => {
    // Remove some non-records
    data.splice(data.indexOf(data.find((e) => e.id === 'zgn0wqdy')), 1);
    data.splice(data.indexOf(data.find((e) => e.id === 'yo485d5m')), 1);

    let worldRecords = filterRuns(state, data);
    worldRecords = filterWrs(worldRecords);
    worldRecords = filterRuns(state, addAdditionalData(worldRecords));

    if (
      document
        .getElementById('toggle-unverfied-btn')
        .classList.contains('toggledOn')
    ) {
      worldRecords = filterRuns(state, addUnverifiedRecords(worldRecords));
    }

    worldRecords = addProperties(worldRecords);
    worldRecords = sortWrs(worldRecords);

    const runsCount = worldRecords.length;

    renderRunsCount(runsCount);
    renderRuns(worldRecords);

    // Sort state tracking for controlling difference label css
    tableContent.classList.toggle(
      'sorted-by-date',
      sortSelect.value === 'date'
    );
    tableContent.classList.toggle(
      'date-ascending',
      sortSelect.value === 'date' && sortDirection.dataset.mode === 'ascending'
    );

    // Only show difference labels when the toggle is on && sorting by date
    document.querySelectorAll('.difference-label').forEach((label) => {
      const shouldShow =
        toggleDifferenceBtn.classList.contains('toggledOn') &&
        sortSelect.value === 'date';
      label.style.display = shouldShow ? 'block' : 'none';
    });
  };

  const subcategoryFilterBars = document.querySelectorAll(
    '.filter-bar[data-group="subcategory"]'
  );

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.filter-bar').dataset.group;
      const value = btn.dataset.category;
      const { filters } = state[group];

      btn
        .closest('.filter-bar')
        .querySelectorAll('.filter-btn')
        .forEach((b) => {
          b.classList.remove('toggledOn');
          filters.delete(b.dataset.category);
        });
      btn.classList.add('toggledOn');
      filters.add(value);

      subcategoryFilterBars.forEach((bar) => {
        bar.style.display = 'none';
      });

      subcategoryFilterBars.forEach((bar) => {
        const subcat = [...state.category.filters][0] + '-subcategory';
        if (bar.classList.contains(subcat)) {
          bar.style.display = 'block';
        }
      });

      updateUI();
    });
  });

  const toggleDifferenceBtn = document.getElementById('toggle-difference-btn');
  toggleDifferenceBtn.addEventListener('click', () => {
    toggleDifferenceBtn.classList.toggle('toggledOn');

    updateUI();
  });

  const toggleUnverifiedBtn = document.getElementById('toggle-unverfied-btn');
  toggleUnverifiedBtn.addEventListener('click', () => {
    toggleUnverifiedBtn.classList.toggle('toggledOn');

    updateUI();
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

  // Open comment
  document.querySelector('tbody').addEventListener('click', (e) => {
    const icon = e.target.closest('.comment-icon');
    if (!icon) return;

    const keyEl = e.target.closest('[data-key]');
    const key = keyEl?.dataset.key;

    const selector = key ? `.comment-container.${key}` : '.comment-container';

    const containers = document.querySelectorAll('.comment-container');
    const container = icon.closest('.comment-td').querySelector(selector);
    if (!container) return;

    const isVisible = container.style.display === 'block';
    containers.forEach((c) => (c.style.display = 'none'));
    container.style.display = isVisible ? 'none' : 'block';
  });

  // Close comment on outside click
  document.addEventListener('click', (e) => {
    const isProtected =
      e.target.closest('.comment-icon') ||
      e.target.closest('.comment-container');
    if (isProtected) return;

    document.querySelectorAll('.comment-container').forEach((c) => {
      c.style.display = 'none';
    });
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

  const filterBars = document.querySelectorAll('.filter-bar[data-group]');

  const state = {};
  filterBars.forEach(({ dataset: { group } }) => {
    state[group] = {
      filters: new Set(),
    };
  });

  // Set default filters
  filterBtns.forEach((btn) => {
    const group = btn.closest('.filter-bar').dataset.group;
    const value = btn.dataset.category;

    if (btn.classList.contains('toggledOn')) {
      state[group].filters.add(value);
    }
  });

  // Display default category subcategory bar
  subcategoryFilterBars.forEach((bar) => {
    const subcat = [...state.category.filters][0] + '-subcategory';
    if (bar.classList.contains(subcat)) {
      bar.style.display = 'block';
    }
  });

  updateUI();
};
