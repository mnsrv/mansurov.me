// FIFA World Cup 2026 — editable data + computed group standings.
//
// Teams, seeded positions, full group fixtures (dates + matchups) and the
// Round-of-32 bracket feeders are the real draw/schedule (5 Dec 2025 draw),
// verified against Wikipedia (Group L cross-checked vs ESPN). 11 Jun – 19 Jul 2026.
//
// HOW TO MAINTAIN:
//   1. As matches are played, fill in homeScore / awayScore (numbers) on the
//      relevant "matches" entry. Standings recompute automatically — never edit
//      the table by hand.
//   2. In "knockout", replace feeder labels ("Winner A", "3rd A/B/C/D/F") with the
//      actual team once known, fill in scores, and add a "date" if you like.

const data = {
  "groups": [
    {
      "name": "A",
      "teams": [
        {
          "name": "Mexico",
          "flag": "🇲🇽"
        },
        {
          "name": "South Africa",
          "flag": "🇿🇦"
        },
        {
          "name": "South Korea",
          "flag": "🇰🇷"
        },
        {
          "name": "Czechia",
          "flag": "🇨🇿"
        }
      ],
      "matches": [
        {
          "date": "2026-06-11",
          "home": "Mexico",
          "away": "South Africa",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-11",
          "home": "South Korea",
          "away": "Czechia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-18",
          "home": "Czechia",
          "away": "South Africa",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-18",
          "home": "Mexico",
          "away": "South Korea",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "home": "Czechia",
          "away": "Mexico",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "home": "South Africa",
          "away": "South Korea",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "B",
      "teams": [
        {
          "name": "Canada",
          "flag": "🇨🇦"
        },
        {
          "name": "Bosnia and Herzegovina",
          "flag": "🇧🇦"
        },
        {
          "name": "Qatar",
          "flag": "🇶🇦"
        },
        {
          "name": "Switzerland",
          "flag": "🇨🇭"
        }
      ],
      "matches": [
        {
          "date": "2026-06-12",
          "home": "Canada",
          "away": "Bosnia and Herzegovina",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-13",
          "home": "Qatar",
          "away": "Switzerland",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-18",
          "home": "Switzerland",
          "away": "Bosnia and Herzegovina",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-18",
          "home": "Canada",
          "away": "Qatar",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "home": "Switzerland",
          "away": "Canada",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "home": "Bosnia and Herzegovina",
          "away": "Qatar",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "C",
      "teams": [
        {
          "name": "Brazil",
          "flag": "🇧🇷"
        },
        {
          "name": "Morocco",
          "flag": "🇲🇦"
        },
        {
          "name": "Haiti",
          "flag": "🇭🇹"
        },
        {
          "name": "Scotland",
          "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
        }
      ],
      "matches": [
        {
          "date": "2026-06-13",
          "home": "Brazil",
          "away": "Morocco",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-13",
          "home": "Haiti",
          "away": "Scotland",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-19",
          "home": "Scotland",
          "away": "Morocco",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-19",
          "home": "Brazil",
          "away": "Haiti",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "home": "Scotland",
          "away": "Brazil",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "home": "Morocco",
          "away": "Haiti",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "D",
      "teams": [
        {
          "name": "United States",
          "flag": "🇺🇸"
        },
        {
          "name": "Paraguay",
          "flag": "🇵🇾"
        },
        {
          "name": "Australia",
          "flag": "🇦🇺"
        },
        {
          "name": "Türkiye",
          "flag": "🇹🇷"
        }
      ],
      "matches": [
        {
          "date": "2026-06-12",
          "home": "United States",
          "away": "Paraguay",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-13",
          "home": "Australia",
          "away": "Türkiye",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-19",
          "home": "United States",
          "away": "Australia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-19",
          "home": "Türkiye",
          "away": "Paraguay",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "home": "Türkiye",
          "away": "United States",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "home": "Paraguay",
          "away": "Australia",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "E",
      "teams": [
        {
          "name": "Germany",
          "flag": "🇩🇪"
        },
        {
          "name": "Curaçao",
          "flag": "🇨🇼"
        },
        {
          "name": "Ivory Coast",
          "flag": "🇨🇮"
        },
        {
          "name": "Ecuador",
          "flag": "🇪🇨"
        }
      ],
      "matches": [
        {
          "date": "2026-06-14",
          "home": "Germany",
          "away": "Curaçao",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-14",
          "home": "Ivory Coast",
          "away": "Ecuador",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-20",
          "home": "Germany",
          "away": "Ivory Coast",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-20",
          "home": "Ecuador",
          "away": "Curaçao",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "home": "Curaçao",
          "away": "Ivory Coast",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "home": "Ecuador",
          "away": "Germany",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "F",
      "teams": [
        {
          "name": "Netherlands",
          "flag": "🇳🇱"
        },
        {
          "name": "Japan",
          "flag": "🇯🇵"
        },
        {
          "name": "Sweden",
          "flag": "🇸🇪"
        },
        {
          "name": "Tunisia",
          "flag": "🇹🇳"
        }
      ],
      "matches": [
        {
          "date": "2026-06-14",
          "home": "Netherlands",
          "away": "Japan",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-14",
          "home": "Sweden",
          "away": "Tunisia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-20",
          "home": "Netherlands",
          "away": "Sweden",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-20",
          "home": "Tunisia",
          "away": "Japan",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "home": "Japan",
          "away": "Sweden",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "home": "Tunisia",
          "away": "Netherlands",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "G",
      "teams": [
        {
          "name": "Belgium",
          "flag": "🇧🇪"
        },
        {
          "name": "Egypt",
          "flag": "🇪🇬"
        },
        {
          "name": "Iran",
          "flag": "🇮🇷"
        },
        {
          "name": "New Zealand",
          "flag": "🇳🇿"
        }
      ],
      "matches": [
        {
          "date": "2026-06-15",
          "home": "Iran",
          "away": "New Zealand",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-15",
          "home": "Belgium",
          "away": "Egypt",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-21",
          "home": "Belgium",
          "away": "Iran",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-21",
          "home": "New Zealand",
          "away": "Egypt",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "home": "Egypt",
          "away": "Iran",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "home": "New Zealand",
          "away": "Belgium",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "H",
      "teams": [
        {
          "name": "Spain",
          "flag": "🇪🇸"
        },
        {
          "name": "Cape Verde",
          "flag": "🇨🇻"
        },
        {
          "name": "Saudi Arabia",
          "flag": "🇸🇦"
        },
        {
          "name": "Uruguay",
          "flag": "🇺🇾"
        }
      ],
      "matches": [
        {
          "date": "2026-06-15",
          "home": "Spain",
          "away": "Cape Verde",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-15",
          "home": "Saudi Arabia",
          "away": "Uruguay",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-21",
          "home": "Spain",
          "away": "Saudi Arabia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-21",
          "home": "Uruguay",
          "away": "Cape Verde",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "home": "Cape Verde",
          "away": "Saudi Arabia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "home": "Uruguay",
          "away": "Spain",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "I",
      "teams": [
        {
          "name": "France",
          "flag": "🇫🇷"
        },
        {
          "name": "Senegal",
          "flag": "🇸🇳"
        },
        {
          "name": "Iraq",
          "flag": "🇮🇶"
        },
        {
          "name": "Norway",
          "flag": "🇳🇴"
        }
      ],
      "matches": [
        {
          "date": "2026-06-16",
          "home": "France",
          "away": "Senegal",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-16",
          "home": "Iraq",
          "away": "Norway",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-22",
          "home": "France",
          "away": "Iraq",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-22",
          "home": "Norway",
          "away": "Senegal",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "home": "Norway",
          "away": "France",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "home": "Senegal",
          "away": "Iraq",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "J",
      "teams": [
        {
          "name": "Argentina",
          "flag": "🇦🇷"
        },
        {
          "name": "Algeria",
          "flag": "🇩🇿"
        },
        {
          "name": "Austria",
          "flag": "🇦🇹"
        },
        {
          "name": "Jordan",
          "flag": "🇯🇴"
        }
      ],
      "matches": [
        {
          "date": "2026-06-16",
          "home": "Argentina",
          "away": "Algeria",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-16",
          "home": "Austria",
          "away": "Jordan",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-22",
          "home": "Argentina",
          "away": "Austria",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-22",
          "home": "Jordan",
          "away": "Algeria",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "home": "Algeria",
          "away": "Austria",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "home": "Jordan",
          "away": "Argentina",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "K",
      "teams": [
        {
          "name": "Portugal",
          "flag": "🇵🇹"
        },
        {
          "name": "DR Congo",
          "flag": "🇨🇩"
        },
        {
          "name": "Uzbekistan",
          "flag": "🇺🇿"
        },
        {
          "name": "Colombia",
          "flag": "🇨🇴"
        }
      ],
      "matches": [
        {
          "date": "2026-06-17",
          "home": "Portugal",
          "away": "DR Congo",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-17",
          "home": "Uzbekistan",
          "away": "Colombia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-23",
          "home": "Portugal",
          "away": "Uzbekistan",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-23",
          "home": "Colombia",
          "away": "DR Congo",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "home": "Colombia",
          "away": "Portugal",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "home": "DR Congo",
          "away": "Uzbekistan",
          "homeScore": null,
          "awayScore": null
        }
      ]
    },
    {
      "name": "L",
      "teams": [
        {
          "name": "England",
          "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
        },
        {
          "name": "Croatia",
          "flag": "🇭🇷"
        },
        {
          "name": "Ghana",
          "flag": "🇬🇭"
        },
        {
          "name": "Panama",
          "flag": "🇵🇦"
        }
      ],
      "matches": [
        {
          "date": "2026-06-17",
          "home": "England",
          "away": "Croatia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-17",
          "home": "Ghana",
          "away": "Panama",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-23",
          "home": "England",
          "away": "Ghana",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-23",
          "home": "Panama",
          "away": "Croatia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "home": "Panama",
          "away": "England",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "home": "Croatia",
          "away": "Ghana",
          "homeScore": null,
          "awayScore": null
        }
      ]
    }
  ],
  "knockout": {
    "round32": [
      {
        "label": "Round of 32 – Match 1",
        "date": null,
        "home": "Runner-up A",
        "away": "Runner-up B",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 2",
        "date": null,
        "home": "Winner C",
        "away": "Runner-up F",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 3",
        "date": null,
        "home": "Winner E",
        "away": "3rd A/B/C/D/F",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 4",
        "date": null,
        "home": "Winner F",
        "away": "Runner-up C",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 5",
        "date": null,
        "home": "Runner-up E",
        "away": "Runner-up I",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 6",
        "date": null,
        "home": "Winner I",
        "away": "3rd C/D/F/G/H",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 7",
        "date": null,
        "home": "Winner A",
        "away": "3rd C/E/F/H/I",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 8",
        "date": null,
        "home": "Winner L",
        "away": "3rd E/H/I/J/K",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 9",
        "date": null,
        "home": "Winner G",
        "away": "3rd A/E/H/I/J",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 10",
        "date": null,
        "home": "Winner D",
        "away": "3rd B/E/F/I/J",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 11",
        "date": null,
        "home": "Winner H",
        "away": "Runner-up J",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 12",
        "date": null,
        "home": "Runner-up K",
        "away": "Runner-up L",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 13",
        "date": null,
        "home": "Winner B",
        "away": "3rd E/F/G/I/J",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 14",
        "date": null,
        "home": "Runner-up D",
        "away": "Runner-up G",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 15",
        "date": null,
        "home": "Winner J",
        "away": "Runner-up H",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 32 – Match 16",
        "date": null,
        "home": "Winner K",
        "away": "3rd D/E/I/J/L",
        "homeScore": null,
        "awayScore": null
      }
    ],
    "round16": [
      {
        "label": "Round of 16 – Match 1",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 16 – Match 2",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 16 – Match 3",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 16 – Match 4",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 16 – Match 5",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 16 – Match 6",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 16 – Match 7",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Round of 16 – Match 8",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      }
    ],
    "quarterfinals": [
      {
        "label": "Quarter-final 1",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Quarter-final 2",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Quarter-final 3",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Quarter-final 4",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      }
    ],
    "semifinals": [
      {
        "label": "Semi-final 1",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      },
      {
        "label": "Semi-final 2",
        "date": null,
        "home": "TBD",
        "away": "TBD",
        "homeScore": null,
        "awayScore": null
      }
    ],
    "thirdPlace": {
      "label": "Third-place play-off",
      "date": "2026-07-18",
      "home": "TBD",
      "away": "TBD",
      "homeScore": null,
      "awayScore": null
    },
    "final": {
      "label": "Final",
      "date": "2026-07-19",
      "home": "TBD",
      "away": "TBD",
      "homeScore": null,
      "awayScore": null
    }
  }
};

// --- standings computation -------------------------------------------------

function emptyRow(team) {
  return {
    name: team.name,
    flag: team.flag || "",
    played: 0, won: 0, drawn: 0, lost: 0,
    gf: 0, ga: 0, gd: 0, points: 0,
  };
}

function computeStandings(group) {
  const rows = {};
  group.teams.forEach((t) => { rows[t.name] = emptyRow(t); });

  group.matches.forEach((mt) => {
    const hs = mt.homeScore, as = mt.awayScore;
    if (hs == null || as == null) return;
    const h = rows[mt.home], a = rows[mt.away];
    if (!h || !a) return;
    h.played++; a.played++;
    h.gf += hs; h.ga += as;
    a.gf += as; a.ga += hs;
    if (hs > as) { h.won++; a.lost++; h.points += 3; }
    else if (hs < as) { a.won++; h.lost++; a.points += 3; }
    else { h.drawn++; a.drawn++; h.points++; a.points++; }
  });

  return Object.values(rows)
    .map((r) => ({ ...r, gd: r.gf - r.ga }))
    .sort((x, y) =>
      y.points - x.points ||
      y.gd - x.gd ||
      y.gf - x.gf ||
      x.name.localeCompare(y.name)
    )
    .map((r, i) => ({ ...r, rank: i + 1 }));
}

export default function () {
  const groups = data.groups.map((g) => ({
    ...g,
    standings: computeStandings(g),
  }));
  return { groups, knockout: data.knockout };
}
