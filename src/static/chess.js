import LichessPgnViewer from './lichess-pgn-viewer.js';

const reti = `[Event "mansurov.me Study: Réti endgame study"]
[Site "https://lichess.org/study/kzXD49Z4/Cdnixbw1"]
[Result "*"]
[UTCDate "2024.01.17"]
[UTCTime "02:09:56"]
[Variant "Standard"]
[ECO "?"]
[Opening "?"]
[Annotator "https://lichess.org/@/sashamjolnir"]
[FEN "7K/8/k1P5/7p/8/8/8/8 w - - 0 1"]
[SetUp "1"]

1. Kg7! h4 2. Kf6 Kb6 (2... h3 3. Ke7 h2 4. c7 Kb7 5. Kd7 h1=Q 6. c8=Q+ Kb6 $10) 3. Ke5! Kxc6 (3... h3 4. Kd6 h2 5. c7 h1=Q 6. c8=Q $10) 4. Kf4 $10 h3 5. Kg3 h2 6. Kxh2 $10 *`

const lpv = LichessPgnViewer(document.getElementById('reti'), {
  scrollToMove: false,
  showControls: false,
  showMoves: false,
  drawArrows: false,
  pgn: reti,
});