// FIFA World Cup 2026 — editable data + computed group standings.
//
// Teams (coach / best WC result / star), fixtures, kick-off times and the R32 bracket
// feeders are the real draw & schedule, verified vs Wikipedia. Each match's "kickoff" is
// a UTC instant (computed from the venue's local time + offset); the site renders it in
// Warsaw time (Europe/Warsaw) on the page, so a match's shown day can differ from the
// US match date for late-night kick-offs. 11 Jun – 19 Jul 2026.
//
// HOW TO MAINTAIN:
//   1. As matches are played, set homeScore / awayScore (numbers) on the "matches" entry.
//      Standings recompute automatically — never edit the table by hand.
//   2. "kickoff" is UTC ISO (e.g. "2026-06-11T19:00:00.000Z"); edit only if a time changes.
//   3. In "knockout", replace feeder labels with the actual team once known, add scores.

const data = {
  "groups": [
    {
      "name": "A",
      "teams": [
        {
          "name": "Mexico",
          "flag": "🇲🇽",
          "coach": "Javier Aguirre",
          "best": "Quarter-finals (1970, 1986)",
          "star": "Edson Álvarez"
        },
        {
          "name": "South Africa",
          "flag": "🇿🇦",
          "coach": "Hugo Broos",
          "best": "Group stage",
          "star": "Ronwen Williams"
        },
        {
          "name": "South Korea",
          "flag": "🇰🇷",
          "coach": "Hong Myung-bo",
          "best": "Fourth place (2002)",
          "star": "Son Heung-min"
        },
        {
          "name": "Czechia",
          "flag": "🇨🇿",
          "coach": "Miroslav Koubek",
          "best": "Group stage (2006)",
          "star": "Patrik Schick"
        }
      ],
      "matches": [
        {
          "date": "2026-06-11",
          "kickoff": "2026-06-11T19:00:00.000Z",
          "home": "Mexico",
          "away": "South Africa",
          "homeScore": 2,
          "awayScore": 0
        },
        {
          "date": "2026-06-11",
          "kickoff": "2026-06-12T02:00:00.000Z",
          "home": "South Korea",
          "away": "Czechia",
          "homeScore": 2,
          "awayScore": 1
        },
        {
          "date": "2026-06-18",
          "kickoff": "2026-06-18T16:00:00.000Z",
          "home": "Czechia",
          "away": "South Africa",
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-18",
          "kickoff": "2026-06-19T01:00:00.000Z",
          "home": "Mexico",
          "away": "South Korea",
          "homeScore": 1,
          "awayScore": 0
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-25T01:00:00.000Z",
          "home": "Czechia",
          "away": "Mexico",
          "homeScore": 0,
          "awayScore": 3
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-25T01:00:00.000Z",
          "home": "South Africa",
          "away": "South Korea",
          "homeScore": 1,
          "awayScore": 0
        }
      ]
    },
    {
      "name": "B",
      "teams": [
        {
          "name": "Canada",
          "flag": "🇨🇦",
          "coach": "Jesse Marsch",
          "best": "Group stage (1986, 2022)",
          "star": "Alphonso Davies"
        },
        {
          "name": "Bosnia and Herzegovina",
          "flag": "🇧🇦",
          "coach": "Sergej Barbarez",
          "best": "Group stage (2014)",
          "star": "Edin Džeko"
        },
        {
          "name": "Qatar",
          "flag": "🇶🇦",
          "coach": "Julen Lopetegui",
          "best": "Group stage (2022)",
          "star": "Almoez Ali"
        },
        {
          "name": "Switzerland",
          "flag": "🇨🇭",
          "coach": "Murat Yakin",
          "best": "Quarter-finals (1934, 1938, 1954)",
          "star": "Granit Xhaka"
        }
      ],
      "matches": [
        {
          "date": "2026-06-12",
          "kickoff": "2026-06-12T19:00:00.000Z",
          "home": "Canada",
          "away": "Bosnia and Herzegovina",
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-13",
          "kickoff": "2026-06-13T19:00:00.000Z",
          "home": "Qatar",
          "away": "Switzerland",
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-18",
          "kickoff": "2026-06-18T19:00:00.000Z",
          "home": "Switzerland",
          "away": "Bosnia and Herzegovina",
          "homeScore": 4,
          "awayScore": 1
        },
        {
          "date": "2026-06-18",
          "kickoff": "2026-06-18T22:00:00.000Z",
          "home": "Canada",
          "away": "Qatar",
          "homeScore": 6,
          "awayScore": 0
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-24T19:00:00.000Z",
          "home": "Switzerland",
          "away": "Canada",
          "homeScore": 2,
          "awayScore": 1
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-24T19:00:00.000Z",
          "home": "Bosnia and Herzegovina",
          "away": "Qatar",
          "homeScore": 3,
          "awayScore": 1
        }
      ]
    },
    {
      "name": "C",
      "teams": [
        {
          "name": "Brazil",
          "flag": "🇧🇷",
          "coach": "Carlo Ancelotti",
          "best": "Champions (×5)",
          "star": "Vinícius Júnior"
        },
        {
          "name": "Morocco",
          "flag": "🇲🇦",
          "coach": "Mohamed Ouahbi",
          "best": "Fourth place (2022)",
          "star": "Achraf Hakimi"
        },
        {
          "name": "Haiti",
          "flag": "🇭🇹",
          "coach": "Sébastien Migné",
          "best": "Group stage (1974)",
          "star": "Duckens Nazon"
        },
        {
          "name": "Scotland",
          "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
          "coach": "Steve Clarke",
          "best": "Group stage",
          "star": "Andy Robertson"
        }
      ],
      "matches": [
        {
          "date": "2026-06-13",
          "kickoff": "2026-06-13T22:00:00.000Z",
          "home": "Brazil",
          "away": "Morocco",
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-13",
          "kickoff": "2026-06-14T01:00:00.000Z",
          "home": "Haiti",
          "away": "Scotland",
          "homeScore": 0,
          "awayScore": 1
        },
        {
          "date": "2026-06-19",
          "kickoff": "2026-06-19T22:00:00.000Z",
          "home": "Scotland",
          "away": "Morocco",
          "homeScore": 0,
          "awayScore": 1
        },
        {
          "date": "2026-06-19",
          "kickoff": "2026-06-20T00:30:00.000Z",
          "home": "Brazil",
          "away": "Haiti",
          "homeScore": 3,
          "awayScore": 0
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-24T22:00:00.000Z",
          "home": "Scotland",
          "away": "Brazil",
          "homeScore": 0,
          "awayScore": 3
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-24T22:00:00.000Z",
          "home": "Morocco",
          "away": "Haiti",
          "homeScore": 4,
          "awayScore": 2
        }
      ]
    },
    {
      "name": "D",
      "teams": [
        {
          "name": "United States",
          "flag": "🇺🇸",
          "coach": "Mauricio Pochettino",
          "best": "Third place (1930)",
          "star": "Christian Pulisic"
        },
        {
          "name": "Paraguay",
          "flag": "🇵🇾",
          "coach": "Gustavo Alfaro",
          "best": "Quarter-finals (2010)",
          "star": "Miguel Almirón"
        },
        {
          "name": "Australia",
          "flag": "🇦🇺",
          "coach": "Tony Popovic",
          "best": "Round of 16 (2006, 2022)",
          "star": "Mathew Ryan"
        },
        {
          "name": "Türkiye",
          "flag": "🇹🇷",
          "coach": "Vincenzo Montella",
          "best": "Third place (2002)",
          "star": "Arda Güler"
        }
      ],
      "matches": [
        {
          "date": "2026-06-12",
          "kickoff": "2026-06-13T01:00:00.000Z",
          "home": "United States",
          "away": "Paraguay",
          "homeScore": 4,
          "awayScore": 1
        },
        {
          "date": "2026-06-13",
          "kickoff": "2026-06-14T04:00:00.000Z",
          "home": "Australia",
          "away": "Türkiye",
          "homeScore": 2,
          "awayScore": 0
        },
        {
          "date": "2026-06-19",
          "kickoff": "2026-06-19T19:00:00.000Z",
          "home": "United States",
          "away": "Australia",
          "homeScore": 2,
          "awayScore": 0
        },
        {
          "date": "2026-06-19",
          "kickoff": "2026-06-20T03:00:00.000Z",
          "home": "Türkiye",
          "away": "Paraguay",
          "homeScore": 0,
          "awayScore": 1
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-26T02:00:00.000Z",
          "home": "Türkiye",
          "away": "United States",
          "homeScore": 3,
          "awayScore": 2
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-26T02:00:00.000Z",
          "home": "Paraguay",
          "away": "Australia",
          "homeScore": 0,
          "awayScore": 0
        }
      ]
    },
    {
      "name": "E",
      "teams": [
        {
          "name": "Germany",
          "flag": "🇩🇪",
          "coach": "Julian Nagelsmann",
          "best": "Champions (×4)",
          "star": "Joshua Kimmich"
        },
        {
          "name": "Curaçao",
          "flag": "🇨🇼",
          "coach": "Dick Advocaat",
          "best": "Debut (2026)",
          "star": "Rangelo Janga"
        },
        {
          "name": "Ivory Coast",
          "flag": "🇨🇮",
          "coach": "Emerse Faé",
          "best": "Group stage",
          "star": "Nicolas Pépé"
        },
        {
          "name": "Ecuador",
          "flag": "🇪🇨",
          "coach": "Sebastián Beccacece",
          "best": "Round of 16 (2006)",
          "star": "Enner Valencia"
        }
      ],
      "matches": [
        {
          "date": "2026-06-14",
          "kickoff": "2026-06-14T17:00:00.000Z",
          "home": "Germany",
          "away": "Curaçao",
          "homeScore": 7,
          "awayScore": 1
        },
        {
          "date": "2026-06-14",
          "kickoff": "2026-06-14T23:00:00.000Z",
          "home": "Ivory Coast",
          "away": "Ecuador",
          "homeScore": 1,
          "awayScore": 0
        },
        {
          "date": "2026-06-20",
          "kickoff": "2026-06-20T20:00:00.000Z",
          "home": "Germany",
          "away": "Ivory Coast",
          "homeScore": 2,
          "awayScore": 1
        },
        {
          "date": "2026-06-20",
          "kickoff": "2026-06-21T00:00:00.000Z",
          "home": "Ecuador",
          "away": "Curaçao",
          "homeScore": 0,
          "awayScore": 0
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-25T20:00:00.000Z",
          "home": "Curaçao",
          "away": "Ivory Coast",
          "homeScore": 0,
          "awayScore": 2
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-25T20:00:00.000Z",
          "home": "Ecuador",
          "away": "Germany",
          "homeScore": 2,
          "awayScore": 1
        }
      ]
    },
    {
      "name": "F",
      "teams": [
        {
          "name": "Netherlands",
          "flag": "🇳🇱",
          "coach": "Ronald Koeman",
          "best": "Runners-up (1974, 1978, 2010)",
          "star": "Memphis Depay"
        },
        {
          "name": "Japan",
          "flag": "🇯🇵",
          "coach": "Hajime Moriyasu",
          "best": "Round of 16 (×4)",
          "star": "Takefusa Kubo"
        },
        {
          "name": "Sweden",
          "flag": "🇸🇪",
          "coach": "Graham Potter",
          "best": "Runners-up (1958)",
          "star": "Alexander Isak"
        },
        {
          "name": "Tunisia",
          "flag": "🇹🇳",
          "coach": "Sabri Lamouchi",
          "best": "Group stage",
          "star": "Ellyes Skhiri"
        }
      ],
      "matches": [
        {
          "date": "2026-06-14",
          "kickoff": "2026-06-14T20:00:00.000Z",
          "home": "Netherlands",
          "away": "Japan",
          "homeScore": 2,
          "awayScore": 2
        },
        {
          "date": "2026-06-14",
          "kickoff": "2026-06-15T02:00:00.000Z",
          "home": "Sweden",
          "away": "Tunisia",
          "homeScore": 5,
          "awayScore": 1
        },
        {
          "date": "2026-06-20",
          "kickoff": "2026-06-20T17:00:00.000Z",
          "home": "Netherlands",
          "away": "Sweden",
          "homeScore": 5,
          "awayScore": 1
        },
        {
          "date": "2026-06-20",
          "kickoff": "2026-06-21T04:00:00.000Z",
          "home": "Tunisia",
          "away": "Japan",
          "homeScore": 0,
          "awayScore": 4
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-25T23:00:00.000Z",
          "home": "Japan",
          "away": "Sweden",
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-25T23:00:00.000Z",
          "home": "Tunisia",
          "away": "Netherlands",
          "homeScore": 1,
          "awayScore": 3
        }
      ]
    },
    {
      "name": "G",
      "teams": [
        {
          "name": "Belgium",
          "flag": "🇧🇪",
          "coach": "Rudi Garcia",
          "best": "Third place (2018)",
          "star": "Kevin De Bruyne"
        },
        {
          "name": "Egypt",
          "flag": "🇪🇬",
          "coach": "Hossam Hassan",
          "best": "Round of 16 (1934)",
          "star": "Mohamed Salah"
        },
        {
          "name": "Iran",
          "flag": "🇮🇷",
          "coach": "Amir Ghalenoei",
          "best": "Group stage",
          "star": "Mehdi Taremi"
        },
        {
          "name": "New Zealand",
          "flag": "🇳🇿",
          "coach": "Darren Bazeley",
          "best": "Group stage (1982, 2010)",
          "star": "Chris Wood"
        }
      ],
      "matches": [
        {
          "date": "2026-06-15",
          "kickoff": "2026-06-16T01:00:00.000Z",
          "home": "Iran",
          "away": "New Zealand",
          "homeScore": 2,
          "awayScore": 2
        },
        {
          "date": "2026-06-15",
          "kickoff": "2026-06-15T19:00:00.000Z",
          "home": "Belgium",
          "away": "Egypt",
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-21",
          "kickoff": "2026-06-21T19:00:00.000Z",
          "home": "Belgium",
          "away": "Iran",
          "homeScore": 0,
          "awayScore": 0
        },
        {
          "date": "2026-06-21",
          "kickoff": "2026-06-22T01:00:00.000Z",
          "home": "New Zealand",
          "away": "Egypt",
          "homeScore": 1,
          "awayScore": 3
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-27T03:00:00.000Z",
          "home": "Egypt",
          "away": "Iran",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-27T03:00:00.000Z",
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
          "flag": "🇪🇸",
          "coach": "Luis de la Fuente",
          "best": "Champions (2010)",
          "star": "Rodri"
        },
        {
          "name": "Cape Verde",
          "flag": "🇨🇻",
          "coach": "Bubista",
          "best": "Debut (2026)",
          "star": "Ryan Mendes"
        },
        {
          "name": "Saudi Arabia",
          "flag": "🇸🇦",
          "coach": "Georgios Donis",
          "best": "Round of 16 (1994)",
          "star": "Salem Al-Dawsari"
        },
        {
          "name": "Uruguay",
          "flag": "🇺🇾",
          "coach": "Marcelo Bielsa",
          "best": "Champions (1930, 1950)",
          "star": "Federico Valverde"
        }
      ],
      "matches": [
        {
          "date": "2026-06-15",
          "kickoff": "2026-06-15T16:00:00.000Z",
          "home": "Spain",
          "away": "Cape Verde",
          "homeScore": 0,
          "awayScore": 0
        },
        {
          "date": "2026-06-15",
          "kickoff": "2026-06-15T22:00:00.000Z",
          "home": "Saudi Arabia",
          "away": "Uruguay",
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-21",
          "kickoff": "2026-06-21T16:00:00.000Z",
          "home": "Spain",
          "away": "Saudi Arabia",
          "homeScore": 4,
          "awayScore": 0
        },
        {
          "date": "2026-06-21",
          "kickoff": "2026-06-21T22:00:00.000Z",
          "home": "Uruguay",
          "away": "Cape Verde",
          "homeScore": 2,
          "awayScore": 2
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-27T00:00:00.000Z",
          "home": "Cape Verde",
          "away": "Saudi Arabia",
          "homeScore": 0,
          "awayScore": 0
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-27T00:00:00.000Z",
          "home": "Uruguay",
          "away": "Spain",
          "homeScore": 0,
          "awayScore": 1
        }
      ]
    },
    {
      "name": "I",
      "teams": [
        {
          "name": "France",
          "flag": "🇫🇷",
          "coach": "Didier Deschamps",
          "best": "Champions (1998, 2018)",
          "star": "Kylian Mbappé"
        },
        {
          "name": "Senegal",
          "flag": "🇸🇳",
          "coach": "Pape Thiaw",
          "best": "Quarter-finals (2002)",
          "star": "Sadio Mané"
        },
        {
          "name": "Iraq",
          "flag": "🇮🇶",
          "coach": "Graham Arnold",
          "best": "Group stage (1986)",
          "star": "Aymen Hussein"
        },
        {
          "name": "Norway",
          "flag": "🇳🇴",
          "coach": "Ståle Solbakken",
          "best": "Round of 16 (1938, 1998)",
          "star": "Erling Haaland"
        }
      ],
      "matches": [
        {
          "date": "2026-06-16",
          "kickoff": "2026-06-16T19:00:00.000Z",
          "home": "France",
          "away": "Senegal",
          "homeScore": 3,
          "awayScore": 1
        },
        {
          "date": "2026-06-16",
          "kickoff": "2026-06-16T22:00:00.000Z",
          "home": "Iraq",
          "away": "Norway",
          "homeScore": 1,
          "awayScore": 4
        },
        {
          "date": "2026-06-22",
          "kickoff": "2026-06-22T21:00:00.000Z",
          "home": "France",
          "away": "Iraq",
          "homeScore": 3,
          "awayScore": 0
        },
        {
          "date": "2026-06-22",
          "kickoff": "2026-06-23T00:00:00.000Z",
          "home": "Norway",
          "away": "Senegal",
          "homeScore": 3,
          "awayScore": 2
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-26T19:00:00.000Z",
          "home": "Norway",
          "away": "France",
          "homeScore": 1,
          "awayScore": 4
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-26T19:00:00.000Z",
          "home": "Senegal",
          "away": "Iraq",
          "homeScore": 5,
          "awayScore": 0
        }
      ]
    },
    {
      "name": "J",
      "teams": [
        {
          "name": "Argentina",
          "flag": "🇦🇷",
          "coach": "Lionel Scaloni",
          "best": "Champions (1978, 1986, 2022)",
          "star": "Lionel Messi"
        },
        {
          "name": "Algeria",
          "flag": "🇩🇿",
          "coach": "Vladimir Petković",
          "best": "Round of 16 (2014)",
          "star": "Riyad Mahrez"
        },
        {
          "name": "Austria",
          "flag": "🇦🇹",
          "coach": "Ralf Rangnick",
          "best": "Third place (1954)",
          "star": "David Alaba"
        },
        {
          "name": "Jordan",
          "flag": "🇯🇴",
          "coach": "Jamal Sellami",
          "best": "Debut (2026)",
          "star": "Mousa Al-Tamari"
        }
      ],
      "matches": [
        {
          "date": "2026-06-16",
          "kickoff": "2026-06-17T01:00:00.000Z",
          "home": "Argentina",
          "away": "Algeria",
          "homeScore": 3,
          "awayScore": 0
        },
        {
          "date": "2026-06-16",
          "kickoff": "2026-06-17T04:00:00.000Z",
          "home": "Austria",
          "away": "Jordan",
          "homeScore": 3,
          "awayScore": 1
        },
        {
          "date": "2026-06-22",
          "kickoff": "2026-06-22T17:00:00.000Z",
          "home": "Argentina",
          "away": "Austria",
          "homeScore": 2,
          "awayScore": 0
        },
        {
          "date": "2026-06-22",
          "kickoff": "2026-06-23T03:00:00.000Z",
          "home": "Jordan",
          "away": "Algeria",
          "homeScore": 1,
          "awayScore": 2
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-28T02:00:00.000Z",
          "home": "Algeria",
          "away": "Austria",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-28T02:00:00.000Z",
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
          "flag": "🇵🇹",
          "coach": "Roberto Martínez",
          "best": "Third place (1966)",
          "star": "Cristiano Ronaldo"
        },
        {
          "name": "DR Congo",
          "flag": "🇨🇩",
          "coach": "Sébastien Desabre",
          "best": "Group stage (1974, as Zaire)",
          "star": "Chancel Mbemba"
        },
        {
          "name": "Uzbekistan",
          "flag": "🇺🇿",
          "coach": "Fabio Cannavaro",
          "best": "Debut (2026)",
          "star": "Eldor Shomurodov"
        },
        {
          "name": "Colombia",
          "flag": "🇨🇴",
          "coach": "Néstor Lorenzo",
          "best": "Quarter-finals (2014)",
          "star": "Luis Díaz"
        }
      ],
      "matches": [
        {
          "date": "2026-06-17",
          "kickoff": "2026-06-17T17:00:00.000Z",
          "home": "Portugal",
          "away": "DR Congo",
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-17",
          "kickoff": "2026-06-18T02:00:00.000Z",
          "home": "Uzbekistan",
          "away": "Colombia",
          "homeScore": 1,
          "awayScore": 3
        },
        {
          "date": "2026-06-23",
          "kickoff": "2026-06-23T17:00:00.000Z",
          "home": "Portugal",
          "away": "Uzbekistan",
          "homeScore": 5,
          "awayScore": 0
        },
        {
          "date": "2026-06-23",
          "kickoff": "2026-06-24T02:00:00.000Z",
          "home": "Colombia",
          "away": "DR Congo",
          "homeScore": 1,
          "awayScore": 0
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-27T23:30:00.000Z",
          "home": "Colombia",
          "away": "Portugal",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-27T23:30:00.000Z",
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
          "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
          "coach": "Thomas Tuchel",
          "best": "Champions (1966)",
          "star": "Harry Kane"
        },
        {
          "name": "Croatia",
          "flag": "🇭🇷",
          "coach": "Zlatko Dalić",
          "best": "Runners-up (2018)",
          "star": "Luka Modrić"
        },
        {
          "name": "Ghana",
          "flag": "🇬🇭",
          "coach": "Carlos Queiroz",
          "best": "Quarter-finals (2010)",
          "star": "Mohammed Kudus"
        },
        {
          "name": "Panama",
          "flag": "🇵🇦",
          "coach": "Thomas Christiansen",
          "best": "Group stage (2018)",
          "star": "Aníbal Godoy"
        }
      ],
      "matches": [
        {
          "date": "2026-06-17",
          "kickoff": "2026-06-17T20:00:00.000Z",
          "home": "England",
          "away": "Croatia",
          "homeScore": 4,
          "awayScore": 2
        },
        {
          "date": "2026-06-17",
          "kickoff": "2026-06-17T23:00:00.000Z",
          "home": "Ghana",
          "away": "Panama",
          "homeScore": 1,
          "awayScore": 0
        },
        {
          "date": "2026-06-23",
          "kickoff": "2026-06-23T20:00:00.000Z",
          "home": "England",
          "away": "Ghana",
          "homeScore": 0,
          "awayScore": 0
        },
        {
          "date": "2026-06-23",
          "kickoff": "2026-06-23T23:00:00.000Z",
          "home": "Panama",
          "away": "Croatia",
          "homeScore": 0,
          "awayScore": 1
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-27T21:00:00.000Z",
          "home": "Panama",
          "away": "England",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-27T21:00:00.000Z",
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

// --- helpers ---------------------------------------------------------------

const WARSAW = "Europe/Warsaw";
const dateFmt = new Intl.DateTimeFormat("en-GB", { timeZone: WARSAW, day: "numeric", month: "numeric" });
const timeFmt = new Intl.DateTimeFormat("en-GB", { timeZone: WARSAW, hour: "2-digit", minute: "2-digit", hour12: false });
const dayKeyFmt = new Intl.DateTimeFormat("en-CA", { timeZone: WARSAW, year: "numeric", month: "2-digit", day: "2-digit" });
const dayLabelFmt = new Intl.DateTimeFormat("en-GB", { timeZone: WARSAW, weekday: "short", day: "numeric", month: "short" });

function warsaw(iso) {
  if (!iso) return { date: "", time: "" };
  const d = new Date(iso);
  return { date: dateFmt.format(d), time: timeFmt.format(d) };
}

function withWarsaw(match) {
  const w = warsaw(match.kickoff);
  return { ...match, warsawDate: w.date, warsawTime: w.time };
}

function emptyRow(team) {
  return { name: team.name, flag: team.flag || "", played:0, won:0, drawn:0, lost:0, gf:0, ga:0, gd:0, points:0 };
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
    h.gf += hs; h.ga += as; a.gf += as; a.ga += hs;
    if (hs > as) { h.won++; a.lost++; h.points += 3; }
    else if (hs < as) { a.won++; h.lost++; a.points += 3; }
    else { h.drawn++; a.drawn++; h.points++; a.points++; }
  });
  return Object.values(rows)
    .map((r) => ({ ...r, gd: r.gf - r.ga }))
    .sort((x, y) => y.points - x.points || y.gd - x.gd || y.gf - x.gf || x.name.localeCompare(y.name))
    .map((r, i) => ({ ...r, rank: i + 1 }));
}

// Per-team group status: "q" = guaranteed top 2 (through), "out" = can no longer
// reach top 3 (eliminated), "third" = finished 3rd (best-third spot pending),
// "" = still in contention. Conservative: a team is only marked when it is
// mathematically certain, so nothing is highlighted until results decide it.
//
// Tiebreakers follow the 2026 rules: head-to-head FIRST (points between the tied
// teams), then overall goal difference / goals. Because head-to-head among the
// tied teams is decided by who beat whom — known from results already played — it
// resolves many ties exactly, without needing to guess future goal margins. The
// deeper GD/GF steps are only used as bounds (favourably for "can still reach",
// against for "guaranteed"), so the verdicts are never wrong, only cautious.
function computeGroupStatus(group) {
  const teams = group.teams.map((t) => t.name);
  const complete = group.matches.every((m) => m.homeScore != null && m.awayScore != null);
  const out = {};

  // Completed group: the real table (with full GD) is authoritative.
  if (complete) {
    const table = computeStandings(group);
    table.forEach((r) => {
      out[r.name] = r.rank <= 2 ? "q" : r.rank === 3 ? "third" : "out";
    });
    return { status: out, winnerCandidates: [table[0].name], runnerUpCandidates: [table[1].name] };
  }

  const fixed = [];
  const pending = [];
  group.matches.forEach((m) => {
    if (m.homeScore != null && m.awayScore != null) {
      fixed.push({ home: m.home, away: m.away, res: m.homeScore > m.awayScore ? "h" : m.homeScore < m.awayScore ? "a" : "d" });
    } else {
      pending.push({ home: m.home, away: m.away });
    }
  });

  const n = pending.length;
  const clinch = {}, elim = {};
  const gBest = {}, gWorst = {}; // best (lowest) and worst (highest) possible finishing rank
  teams.forEach((t) => { clinch[t] = true; elim[t] = true; gBest[t] = 99; gWorst[t] = 0; });

  const addPts = (pts, r) => {
    if (r.res === "h") pts[r.home] += 3;
    else if (r.res === "a") pts[r.away] += 3;
    else { pts[r.home]++; pts[r.away]++; }
  };

  // Enumerate win/draw/loss for every unplayed match (≤ 3^6 cases).
  for (let mask = 0; mask < 3 ** n; mask++) {
    const results = fixed.slice();
    let x = mask;
    for (let k = 0; k < n; k++) {
      const o = x % 3; x = (x - o) / 3;
      results.push({ home: pending[k].home, away: pending[k].away, res: o === 0 ? "h" : o === 1 ? "a" : "d" });
    }

    const pts = {};
    teams.forEach((t) => { pts[t] = 0; });
    results.forEach((r) => addPts(pts, r));

    for (const t of teams) {
      // Teams level on points with t: break by head-to-head points among them.
      const cohort = teams.filter((u) => pts[u] === pts[t]);
      const h2h = {};
      cohort.forEach((c) => { h2h[c] = 0; });
      if (cohort.length > 1) {
        results.forEach((r) => {
          if (cohort.includes(r.home) && cohort.includes(r.away)) addPts(h2h, r);
        });
      }

      let above = 0;   // certainly ranked above t
      let tiedDeep = 0; // level even on head-to-head → decided by GD (unknown here)
      for (const u of teams) {
        if (u === t) continue;
        if (pts[u] > pts[t]) above++;
        else if (pts[u] === pts[t]) {
          if (h2h[u] > h2h[t]) above++;
          else if (h2h[u] === h2h[t]) tiedDeep++;
        }
      }
      const best = above + 1;
      const worst = above + tiedDeep + 1;
      if (worst > 2) clinch[t] = false; // worst case outside top 2
      if (best < 4) elim[t] = false;    // best case still top 3
      if (best < gBest[t]) gBest[t] = best;
      if (worst > gWorst[t]) gWorst[t] = worst;
    }
  }

  teams.forEach((t) => { out[t] = clinch[t] ? "q" : elim[t] ? "out" : ""; });

  // Candidate teams for each slot: who can still finish 1st / 2nd. A single
  // candidate means the slot is settled; several means it's still open (shown as
  // "A / B"). The team currently in that position is listed first.
  const rankOf = {};
  computeStandings(group).forEach((r) => { rankOf[r.name] = r.rank; });
  const byNatural = (natural) => (a, b) =>
    (rankOf[a] === natural ? 0 : 1) - (rankOf[b] === natural ? 0 : 1) || rankOf[a] - rankOf[b];

  const winnerCandidates = teams.filter((t) => gBest[t] === 1).sort(byNatural(1));
  const runnerUpCandidates = teams.filter((t) => gBest[t] <= 2 && gWorst[t] >= 2).sort(byNatural(2));
  return { status: out, winnerCandidates, runnerUpCandidates };
}

export default function () {
  const flagByName = {};
  data.groups.forEach((g) => g.teams.forEach((t) => { flagByName[t.name] = t.flag; }));

  // Candidate teams for each bracket slot ("Winner A" → [team, ...]). One team =
  // settled; several = still open (e.g. "Norway / France").
  const candidatesByLabel = {};
  const groups = data.groups.map((g) => {
    const outlook = computeGroupStatus(g);
    candidatesByLabel["Winner " + g.name] = outlook.winnerCandidates;
    candidatesByLabel["Runner-up " + g.name] = outlook.runnerUpCandidates;
    return {
      ...g,
      matches: g.matches.map(withWarsaw).sort((a, b) => (a.kickoff || "").localeCompare(b.kickoff || "")),
      standings: computeStandings(g).map((r) => ({ ...r, status: outlook.status[r.name] || "" })),
    };
  });

  // Ranking of the 12 third-placed teams; the best 8 advance. Cross-group, so no
  // head-to-head — ordered by points, then goal difference, then goals scored.
  const thirds = groups
    .map((g) => {
      const r = g.standings.find((s) => s.rank === 3);
      return r ? { group: g.name, ...r } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.points - a.points || b.gd - a.gd || b.gf - a.gf || a.name.localeCompare(b.name))
    .map((r, i) => ({ ...r, seed: i + 1, advancing: i < 8 }));

  // Resolve a knockout feeder label to its candidate team(s). "confirmed" = one
  // possible team (locked), "projected" = several still possible (shown "A / B"),
  // "slot" = no candidates yet (3rd-place slots / later rounds keep the label).
  const resolveSide = (label) => {
    const list = candidatesByLabel[label];
    if (list && list.length) {
      return {
        state: list.length === 1 ? "confirmed" : "projected",
        teams: list.map((n) => ({ name: n, flag: flagByName[n] || "" })),
      };
    }
    return { state: "slot", label };
  };
  const resolveMatch = (m) => {
    const h = resolveSide(m.home), a = resolveSide(m.away);
    return {
      ...m,
      homeState: h.state, homeTeams: h.teams || [], homeLabel: h.label || m.home,
      awayState: a.state, awayTeams: a.teams || [], awayLabel: a.label || m.away,
    };
  };
  const knockout = {
    round32: data.knockout.round32.map(resolveMatch),
    round16: data.knockout.round16.map(resolveMatch),
    quarterfinals: data.knockout.quarterfinals.map(resolveMatch),
    semifinals: data.knockout.semifinals.map(resolveMatch),
    thirdPlace: resolveMatch(data.knockout.thirdPlace),
    final: resolveMatch(data.knockout.final),
  };

  const upcoming = data.groups
    .flatMap((g) => g.matches.map((mt) => ({ ...mt, group: g.name })))
    .filter((mt) => mt.homeScore == null || mt.awayScore == null)
    .sort((a, b) => (a.kickoff || "").localeCompare(b.kickoff || ""))
    .map((mt) => {
      const w = warsaw(mt.kickoff);
      return { ...mt, warsawDate: w.date, warsawTime: w.time, homeFlag: flagByName[mt.home] || "", awayFlag: flagByName[mt.away] || "" };
    });

  // Full group-stage schedule grouped by Warsaw calendar day, for the Matches tab.
  const flat = data.groups
    .flatMap((g) => g.matches.map((mt) => {
      const w = warsaw(mt.kickoff);
      return { ...mt, group: g.name, warsawTime: w.time, homeFlag: flagByName[mt.home] || "", awayFlag: flagByName[mt.away] || "" };
    }))
    .sort((a, b) => (a.kickoff || "").localeCompare(b.kickoff || ""));

  const dayMap = new Map();
  for (const mt of flat) {
    const key = dayKeyFmt.format(new Date(mt.kickoff));
    if (!dayMap.has(key)) dayMap.set(key, { key, label: dayLabelFmt.format(new Date(mt.kickoff)), matches: [] });
    dayMap.get(key).matches.push(mt);
  }
  // Upcoming days first (soonest → latest); finished days pushed to the bottom,
  // most recent first. "Past" = every match that day already has a score.
  const days = [...dayMap.values()].sort((a, b) => a.key.localeCompare(b.key));
  const isPast = (d) => d.matches.every((m) => m.homeScore != null && m.awayScore != null);
  const upcomingDays = days.filter((d) => !isPast(d));
  const pastDays = days.filter(isPast).reverse().map((d) => ({ ...d, past: true }));
  const schedule = [...upcomingDays, ...pastDays];

  return { groups, knockout, upcoming, schedule, thirds };
}
