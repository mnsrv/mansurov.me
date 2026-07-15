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
//      If regulation ends level, add homePenalties / awayPenalties (shootout only).

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
          "homeScore": 1,
          "awayScore": 1
        },
        {
          "date": "2026-06-26",
          "kickoff": "2026-06-27T03:00:00.000Z",
          "home": "New Zealand",
          "away": "Belgium",
          "homeScore": 1,
          "awayScore": 5
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
          "homeScore": 3,
          "awayScore": 3
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-28T02:00:00.000Z",
          "home": "Jordan",
          "away": "Argentina",
          "homeScore": 1,
          "awayScore": 3
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
          "homeScore": 0,
          "awayScore": 0
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-27T23:30:00.000Z",
          "home": "DR Congo",
          "away": "Uzbekistan",
          "homeScore": 3,
          "awayScore": 1
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
          "homeScore": 0,
          "awayScore": 2
        },
        {
          "date": "2026-06-27",
          "kickoff": "2026-06-27T21:00:00.000Z",
          "home": "Croatia",
          "away": "Ghana",
          "homeScore": 2,
          "awayScore": 1
        }
      ]
    }
  ],
  "knockout": {
    "round32": [
      {
        "label": "M74",
        "date": null,
        "home": "Winner E",
        "away": "3rd A/B/C/D/F",
        "homeScore": 1,
        "awayScore": 1,
        "homePenalties": 3,
        "awayPenalties": 4,
        "kickoff": "2026-06-29T20:30:00.000Z"
      },
      {
        "label": "M77",
        "date": null,
        "home": "Winner I",
        "away": "3rd C/D/F/G/H",
        "homeScore": 3,
        "awayScore": 0,
        "kickoff": "2026-06-30T21:00:00.000Z"
      },
      {
        "label": "M73",
        "date": null,
        "home": "Runner-up A",
        "away": "Runner-up B",
        "homeScore": 0,
        "awayScore": 1,
        "kickoff": "2026-06-28T19:00:00.000Z"
      },
      {
        "label": "M75",
        "date": null,
        "home": "Winner F",
        "away": "Runner-up C",
        "homeScore": 1,
        "awayScore": 1,
        "homePenalties": 2,
        "awayPenalties": 3,
        "kickoff": "2026-06-30T01:00:00.000Z"
      },
      {
        "label": "M83",
        "date": null,
        "home": "Runner-up K",
        "away": "Runner-up L",
        "homeScore": 2,
        "awayScore": 1,
        "kickoff": "2026-07-02T23:00:00.000Z"
      },
      {
        "label": "M84",
        "date": null,
        "home": "Winner H",
        "away": "Runner-up J",
        "homeScore": 3,
        "awayScore": 0,
        "kickoff": "2026-07-02T19:00:00.000Z"
      },
      {
        "label": "M81",
        "date": null,
        "home": "Winner D",
        "away": "3rd B/E/F/I/J",
        "homeScore": 2,
        "awayScore": 0,
        "kickoff": "2026-07-02T00:00:00.000Z"
      },
      {
        "label": "M82",
        "date": null,
        "home": "Winner G",
        "away": "3rd A/E/H/I/J",
        "homeScore": 3,
        "awayScore": 2,
        "kickoff": "2026-07-01T20:00:00.000Z"
      },
      {
        "label": "M76",
        "date": null,
        "home": "Winner C",
        "away": "Runner-up F",
        "homeScore": 2,
        "awayScore": 1,
        "kickoff": "2026-06-29T17:00:00.000Z"
      },
      {
        "label": "M78",
        "date": null,
        "home": "Runner-up E",
        "away": "Runner-up I",
        "homeScore": 1,
        "awayScore": 2,
        "kickoff": "2026-06-30T17:00:00.000Z"
      },
      {
        "label": "M79",
        "date": null,
        "home": "Winner A",
        "away": "3rd C/E/F/H/I",
        "homeScore": 2,
        "awayScore": 0,
        "kickoff": "2026-07-01T02:00:00.000Z"
      },
      {
        "label": "M80",
        "date": null,
        "home": "Winner L",
        "away": "3rd E/H/I/J/K",
        "homeScore": 2,
        "awayScore": 1,
        "kickoff": "2026-07-01T16:00:00.000Z"
      },
      {
        "label": "M86",
        "date": null,
        "home": "Winner J",
        "away": "Runner-up H",
        "homeScore": 3,
        "awayScore": 2,
        "kickoff": "2026-07-03T22:00:00.000Z"
      },
      {
        "label": "M88",
        "date": null,
        "home": "Runner-up D",
        "away": "Runner-up G",
        "homeScore": 1,
        "awayScore": 1,
        "kickoff": "2026-07-03T18:00:00.000Z",
        "homePenalties": 2,
        "awayPenalties": 4
      },
      {
        "label": "M85",
        "date": null,
        "home": "Winner B",
        "away": "3rd E/F/G/I/J",
        "homeScore": 2,
        "awayScore": 0,
        "kickoff": "2026-07-03T03:00:00.000Z"
      },
      {
        "label": "M87",
        "date": null,
        "home": "Winner K",
        "away": "3rd D/E/I/J/L",
        "homeScore": 1,
        "awayScore": 0,
        "kickoff": "2026-07-04T01:30:00.000Z"
      }
    ],
    "round16": [
      {
        "label": "M89",
        "date": null,
        "home": "W74",
        "away": "W77",
        "homeScore": 0,
        "awayScore": 1,
        "kickoff": "2026-07-04T21:00:00.000Z"
      },
      {
        "label": "M90",
        "date": null,
        "home": "W73",
        "away": "W75",
        "homeScore": 0,
        "awayScore": 3,
        "kickoff": "2026-07-04T17:00:00.000Z"
      },
      {
        "label": "M93",
        "date": null,
        "home": "W83",
        "away": "W84",
        "homeScore": 0,
        "awayScore": 1,
        "kickoff": "2026-07-06T19:00:00.000Z"
      },
      {
        "label": "M94",
        "date": null,
        "home": "W81",
        "away": "W82",
        "homeScore": 1,
        "awayScore": 4,
        "kickoff": "2026-07-07T00:00:00.000Z"
      },
      {
        "label": "M91",
        "date": null,
        "home": "W76",
        "away": "W78",
        "homeScore": 1,
        "awayScore": 2,
        "kickoff": "2026-07-05T20:00:00.000Z"
      },
      {
        "label": "M92",
        "date": null,
        "home": "W79",
        "away": "W80",
        "homeScore": 2,
        "awayScore": 3,
        "kickoff": "2026-07-06T01:00:00.000Z"
      },
      {
        "label": "M95",
        "date": null,
        "home": "W86",
        "away": "W88",
        "homeScore": 3,
        "awayScore": 2,
        "kickoff": "2026-07-07T16:00:00.000Z"
      },
      {
        "label": "M96",
        "date": null,
        "home": "W85",
        "away": "W87",
        "homeScore": 0,
        "awayScore": 0,
        "kickoff": "2026-07-07T20:00:00.000Z",
        "homePenalties": 4,
        "awayPenalties": 3
      }
    ],
    "quarterfinals": [
      {
        "label": "M97",
        "date": null,
        "home": "W89",
        "away": "W90",
        "homeScore": 2,
        "awayScore": 0,
        "kickoff": "2026-07-09T20:00:00.000Z"
      },
      {
        "label": "M98",
        "date": null,
        "home": "W93",
        "away": "W94",
        "homeScore": 2,
        "awayScore": 1,
        "kickoff": "2026-07-10T19:00:00.000Z"
      },
      {
        "label": "M99",
        "date": null,
        "home": "W91",
        "away": "W92",
        "homeScore": 1,
        "awayScore": 2,
        "kickoff": "2026-07-11T21:00:00.000Z"
      },
      {
        "label": "M100",
        "date": null,
        "home": "W95",
        "away": "W96",
        "homeScore": 3,
        "awayScore": 1,
        "kickoff": "2026-07-12T01:00:00.000Z"
      }
    ],
    "semifinals": [
      {
        "label": "M101",
        "date": null,
        "home": "W97",
        "away": "W98",
        "homeScore": 0,
        "awayScore": 2,
        "kickoff": "2026-07-14T19:00:00.000Z"
      },
      {
        "label": "M102",
        "date": null,
        "home": "W99",
        "away": "W100",
        "homeScore": 1,
        "awayScore": 2,
        "kickoff": "2026-07-15T19:00:00.000Z"
      }
    ],
    "thirdPlace": {
      "label": "M103 · Third place",
      "date": "2026-07-18",
      "home": "L101",
      "away": "L102",
      "homeScore": null,
      "awayScore": null,
      "kickoff": "2026-07-18T21:00:00.000Z"
    },
    "final": {
      "label": "M104 · Final",
      "date": "2026-07-19",
      "home": "W101",
      "away": "W102",
      "homeScore": null,
      "awayScore": null,
      "kickoff": "2026-07-19T19:00:00.000Z"
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

// Allocation of third-placed teams to Round-of-32 slots, mirroring FIFA's official
// table. Key = the slot's feeder label; value = the group letter whose 3rd-placed
// team fills it. FIFA fills a slot as soon as it locks (even before all groups end),
// so add entries here as they're confirmed. Uncommented = shown in the bracket.
const THIRD_ALLOCATION = {
  "3rd A/B/C/D/F": "D", // M74 → Paraguay
  "3rd C/D/F/G/H": "F", // M77 → Sweden
  "3rd C/E/F/H/I": "E", // M79 → Ecuador
  "3rd E/H/I/J/K": "K", // M80 → DR Congo
  "3rd B/E/F/I/J": "B", // M81 → Bosnia and Herzegovina
  "3rd A/E/H/I/J": "I", // M82 → Senegal
  "3rd E/F/G/I/J": "J", // M85 → Algeria
  "3rd D/E/I/J/L": "L", // M87 → Ghana
};

// Range of points the eventual 3rd-placed team of a group could finish on, over
// every remaining win/draw/loss combination. For a finished group min === max.
function thirdPointsRange(group) {
  const teams = group.teams.map((t) => t.name);
  const base = {};
  teams.forEach((t) => { base[t] = 0; });
  const pending = [];
  group.matches.forEach((m) => {
    if (m.homeScore != null && m.awayScore != null) {
      if (m.homeScore > m.awayScore) base[m.home] += 3;
      else if (m.homeScore < m.awayScore) base[m.away] += 3;
      else { base[m.home]++; base[m.away]++; }
    } else pending.push(m);
  });
  let min = Infinity, max = -Infinity;
  for (let mask = 0; mask < 3 ** pending.length; mask++) {
    const pts = { ...base };
    let x = mask;
    for (let k = 0; k < pending.length; k++) {
      const o = x % 3; x = (x - o) / 3;
      const m = pending[k];
      if (o === 0) pts[m.home] += 3;
      else if (o === 1) pts[m.away] += 3;
      else { pts[m.home]++; pts[m.away]++; }
    }
    const third = teams.map((t) => pts[t]).sort((a, b) => b - a)[2];
    if (third < min) min = third;
    if (third > max) max = third;
  }
  return { min, max };
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

  // Certainty of each third-placed team making the best 8. We can only be sure
  // about a team once its own group is finished (its points are fixed); then we
  // count how many other groups *could* produce a higher third (points, GD via
  // unbounded future scores treated as a tie). ≤7 possible above → certainly in;
  // ≥8 guaranteed above → certainly out; otherwise still open.
  const complete = {};
  const range = {};
  data.groups.forEach((g) => {
    complete[g.name] = g.matches.every((m) => m.homeScore != null && m.awayScore != null);
    range[g.name] = thirdPointsRange(g);
  });
  const isAbove = (a, b) =>
    a.points !== b.points ? a.points > b.points
    : a.gd !== b.gd ? a.gd > b.gd
    : a.gf !== b.gf ? a.gf > b.gf
    : a.name < b.name;

  thirds.forEach((X) => {
    if (!complete[X.group]) { X.certainty = ""; return; }
    let canBeAbove = 0, mustBeAbove = 0;
    data.groups.forEach((g) => {
      if (g.name === X.group) return;
      if (complete[g.name]) {
        const Y = thirds.find((t) => t.group === g.name);
        if (Y && isAbove(Y, X)) { canBeAbove++; mustBeAbove++; }
      } else {
        if (range[g.name].max >= X.points) canBeAbove++;
        if (range[g.name].min > X.points) mustBeAbove++;
      }
    });
    X.certainty = canBeAbove <= 7 ? "in" : mustBeAbove >= 8 ? "out" : "";
  });

  // Per-row outcome for the group tables: "in" = certainly through (top 2, or a
  // third certainly in the best 8), "out" = certainly eliminated, "" = still open.
  const certainIn = new Set(thirds.filter((t) => t.certainty === "in").map((t) => t.name));
  const certainOut = new Set(thirds.filter((t) => t.certainty === "out").map((t) => t.name));
  groups.forEach((g) => g.standings.forEach((r) => {
    if (r.status === "q") r.result = "in";
    else if (r.status === "out") r.result = "out";
    else if (r.status === "third") r.result = certainIn.has(r.name) ? "in" : certainOut.has(r.name) ? "out" : "";
    else r.result = "";
  }));

  // Third-placed team for each group (by letter), for resolving 3rd-place slots.
  const thirdByGroup = {};
  groups.forEach((g) => { const r = g.standings.find((s) => s.rank === 3); if (r) thirdByGroup[g.name] = r; });

  // Resolve a feeder to a side. Group feeders ("Winner A", "3rd …") use the group
  // candidates / allocation. Match feeders ("W74", "L101") use the winner/loser of
  // that match once it's decided; otherwise they stay a "Winner M74"-style label.
  // outcomes is filled as matches resolve, so it must be processed round by round.
  const outcomes = {};
  const resolveSide = (label) => {
    const list = candidatesByLabel[label];
    if (list && list.length) {
      return { state: list.length === 1 ? "confirmed" : "projected", teams: list.map((n) => ({ name: n, flag: flagByName[n] || "" })) };
    }
    const g = THIRD_ALLOCATION[label];
    if (g && thirdByGroup[g]) {
      return { state: complete[g] ? "confirmed" : "projected", teams: [{ name: thirdByGroup[g].name, flag: thirdByGroup[g].flag || "" }] };
    }
    const ref = /^([WL])M?(\d+)$/.exec(label);
    if (ref) {
      const oc = outcomes["M" + ref[2]];
      const team = oc && oc.decided ? (ref[1] === "W" ? oc.winner : oc.loser) : null;
      if (team) return { state: "confirmed", teams: [team] };
      return { state: "slot", label: (ref[1] === "W" ? "Winner " : "Loser ") + "M" + ref[2] };
    }
    return { state: "slot", label };
  };
  const resolveMatch = (m) => {
    const h = resolveSide(m.home), a = resolveSide(m.away);
    const w = warsaw(m.kickoff);
    let decided = false, winner = null, loser = null;
    const scored = m.homeScore != null && m.awayScore != null;
    const sidesReady = h.state === "confirmed" && a.state === "confirmed";
    if (scored && sidesReady) {
      if (m.homeScore !== m.awayScore) {
        decided = true;
        [winner, loser] = m.homeScore > m.awayScore ? [h.teams[0], a.teams[0]] : [a.teams[0], h.teams[0]];
      } else if (m.homePenalties != null && m.awayPenalties != null && m.homePenalties !== m.awayPenalties) {
        decided = true;
        [winner, loser] = m.homePenalties > m.awayPenalties ? [h.teams[0], a.teams[0]] : [a.teams[0], h.teams[0]];
      }
    }
    outcomes[m.label] = { decided, winner, loser };
    const hasPenalties = scored && m.homeScore === m.awayScore && m.homePenalties != null && m.awayPenalties != null;
    return {
      ...m,
      warsawDate: w.date, warsawTime: w.time,
      homeState: h.state, homeTeams: h.teams || [], homeLabel: h.label || m.home,
      awayState: a.state, awayTeams: a.teams || [], awayLabel: a.label || m.away,
      decided, hasPenalties,
      homeWin: decided && winner?.name === h.teams[0]?.name,
      awayWin: decided && winner?.name === a.teams[0]?.name,
    };
  };
  // Resolve in dependency order so each round can read earlier winners.
  const knockout = {
    round32: data.knockout.round32.map(resolveMatch),
    round16: data.knockout.round16.map(resolveMatch),
    quarterfinals: data.knockout.quarterfinals.map(resolveMatch),
    semifinals: data.knockout.semifinals.map(resolveMatch),
    thirdPlace: resolveMatch(data.knockout.thirdPlace),
    final: resolveMatch(data.knockout.final),
  };

  // Next matches (home page): not-yet-played group + knockout matches, by time.
  const koAll = [
    ...knockout.round32, ...knockout.round16, ...knockout.quarterfinals,
    ...knockout.semifinals, knockout.thirdPlace, knockout.final,
  ];
  const upcoming = [
    ...data.groups.flatMap((g) => g.matches.map((mt) => ({
      kickoff: mt.kickoff, home: mt.home, homeFlag: flagByName[mt.home] || "",
      away: mt.away, awayFlag: flagByName[mt.away] || "", homeScore: mt.homeScore, awayScore: mt.awayScore,
    }))),
    ...koAll.filter((m) => m.kickoff).map((m) => ({
      kickoff: m.kickoff,
      home: m.homeState === "confirmed" ? m.homeTeams[0].name : m.home,
      homeFlag: m.homeState === "confirmed" ? m.homeTeams[0].flag : "",
      away: m.awayState === "confirmed" ? m.awayTeams[0].name : m.away,
      awayFlag: m.awayState === "confirmed" ? m.awayTeams[0].flag : "",
      homeScore: m.homeScore, awayScore: m.awayScore,
      homePenalties: m.homePenalties, awayPenalties: m.awayPenalties, hasPenalties: m.hasPenalties,
    })),
  ]
    .filter((mt) => mt.homeScore == null || mt.awayScore == null)
    .sort((a, b) => (a.kickoff || "").localeCompare(b.kickoff || ""))
    .map((mt) => {
      const w = warsaw(mt.kickoff);
      return { ...mt, warsawDate: w.date, warsawTime: w.time };
    });

  // Full schedule (group + knockout matches with a kick-off) for the Matches tab,
  // grouped by phase (round) → day. Phases still to come are listed first; finished
  // phases drop below a "Played" divider.
  const groupFlat = data.groups
    .flatMap((g) => g.matches.map((mt) => {
      const w = warsaw(mt.kickoff);
      return { kickoff: mt.kickoff, warsawTime: w.time, phaseName: "Group stage", phaseIndex: 0,
        home: mt.home, homeFlag: flagByName[mt.home] || "", away: mt.away, awayFlag: flagByName[mt.away] || "",
        homeScore: mt.homeScore, awayScore: mt.awayScore };
    }));

  const koRounds = [
    [knockout.round32, "Round of 32", 1],
    [knockout.round16, "Round of 16", 2],
    [knockout.quarterfinals, "Quarter-finals", 3],
    [knockout.semifinals, "Semi-finals", 4],
    [[knockout.thirdPlace], "Third place", 5],
    [[knockout.final], "Final", 6],
  ];
  const koFlat = koRounds.flatMap(([arr, phaseName, phaseIndex]) =>
    arr.filter((m) => m.kickoff).map((m) => ({
      kickoff: m.kickoff, warsawTime: m.warsawTime, phaseName, phaseIndex,
      home: m.homeState === "confirmed" ? m.homeTeams[0].name : m.home,
      homeFlag: m.homeState === "confirmed" ? m.homeTeams[0].flag : "",
      away: m.awayState === "confirmed" ? m.awayTeams[0].name : m.away,
      awayFlag: m.awayState === "confirmed" ? m.awayTeams[0].flag : "",
      homeScore: m.homeScore, awayScore: m.awayScore,
      homePenalties: m.homePenalties, awayPenalties: m.awayPenalties, hasPenalties: m.hasPenalties,
    }))
  );

  const phaseMap = new Map();
  for (const e of [...groupFlat, ...koFlat]) {
    if (!e.kickoff) continue;
    const d = new Date(e.kickoff);
    const dateKey = dayKeyFmt.format(d);
    if (!phaseMap.has(e.phaseIndex)) phaseMap.set(e.phaseIndex, { index: e.phaseIndex, name: e.phaseName, dayMap: new Map() });
    const ph = phaseMap.get(e.phaseIndex);
    if (!ph.dayMap.has(dateKey)) ph.dayMap.set(dateKey, { key: dateKey, label: dayLabelFmt.format(d), matches: [] });
    ph.dayMap.get(dateKey).matches.push(e);
  }
  const schedule = [...phaseMap.values()].map((ph) => {
    const days = [...ph.dayMap.values()].sort((a, b) => a.key.localeCompare(b.key));
    days.forEach((d) => d.matches.sort((a, b) => (a.kickoff || "").localeCompare(b.kickoff || "")));
    const past = days.every((d) => d.matches.every((m) => m.homeScore != null && m.awayScore != null));
    return { name: ph.name, index: ph.index, past, days };
  }).sort((a, b) => (a.past ? 1 : 0) - (b.past ? 1 : 0) || a.index - b.index);

  return { groups, knockout, upcoming, schedule, thirds };
}
