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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-25T01:00:00.000Z",
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-24T19:00:00.000Z",
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-19",
          "kickoff": "2026-06-20T00:30:00.000Z",
          "home": "Brazil",
          "away": "Haiti",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-24T22:00:00.000Z",
          "home": "Scotland",
          "away": "Brazil",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-24",
          "kickoff": "2026-06-24T22:00:00.000Z",
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-19",
          "kickoff": "2026-06-20T03:00:00.000Z",
          "home": "Türkiye",
          "away": "Paraguay",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-26T02:00:00.000Z",
          "home": "Türkiye",
          "away": "United States",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-26T02:00:00.000Z",
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-20",
          "kickoff": "2026-06-21T00:00:00.000Z",
          "home": "Ecuador",
          "away": "Curaçao",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-25T20:00:00.000Z",
          "home": "Curaçao",
          "away": "Ivory Coast",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-25T20:00:00.000Z",
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-20",
          "kickoff": "2026-06-21T04:00:00.000Z",
          "home": "Tunisia",
          "away": "Japan",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-25T23:00:00.000Z",
          "home": "Japan",
          "away": "Sweden",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-25",
          "kickoff": "2026-06-25T23:00:00.000Z",
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-21",
          "kickoff": "2026-06-22T01:00:00.000Z",
          "home": "New Zealand",
          "away": "Egypt",
          "homeScore": null,
          "awayScore": null
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-21",
          "kickoff": "2026-06-21T22:00:00.000Z",
          "home": "Uruguay",
          "away": "Cape Verde",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-27T00:00:00.000Z",
          "home": "Cape Verde",
          "away": "Saudi Arabia",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-27T00:00:00.000Z",
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-22",
          "kickoff": "2026-06-23T00:00:00.000Z",
          "home": "Norway",
          "away": "Senegal",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-26T19:00:00.000Z",
          "home": "Norway",
          "away": "France",
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-26T19:00:00.000Z",
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-22",
          "kickoff": "2026-06-23T03:00:00.000Z",
          "home": "Jordan",
          "away": "Algeria",
          "homeScore": null,
          "awayScore": null
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-23",
          "kickoff": "2026-06-24T02:00:00.000Z",
          "home": "Colombia",
          "away": "DR Congo",
          "homeScore": null,
          "awayScore": null
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
          "homeScore": null,
          "awayScore": null
        },
        {
          "date": "2026-06-23",
          "kickoff": "2026-06-23T23:00:00.000Z",
          "home": "Panama",
          "away": "Croatia",
          "homeScore": null,
          "awayScore": null
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

export default function () {
  const groups = data.groups.map((g) => ({
    ...g,
    matches: g.matches.map(withWarsaw).sort((a, b) => (a.kickoff || "").localeCompare(b.kickoff || "")),
    standings: computeStandings(g),
  }));

  const flagByName = {};
  data.groups.forEach((g) => g.teams.forEach((t) => { flagByName[t.name] = t.flag; }));
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
  const schedule = [...dayMap.values()].sort((a, b) => a.key.localeCompare(b.key));

  return { groups, knockout: data.knockout, upcoming, schedule };
}
