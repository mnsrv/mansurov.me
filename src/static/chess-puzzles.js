// const retiFen = "7K/8/k1P5/7p/8/8/8/8 w - - 0 1"  // Original Réti endgame study

// New FEN string created from image
// This represents the position shown in the image
// Format: piece placement / active color / castling availability / en passant target / halfmove clock / fullmove counter
const fen = "8/8/p7/k1p5/8/1QK5/8/8 w - - 0 1"  // Réti endgame study from image

import { Chessground } from './chessground.js';
import { Chess, SQUARES } from './chess.js';

export function toDests(chess) {
  const dests = new Map();
  SQUARES.forEach((s) => {
    const ms = chess.moves({ square: s, verbose: true });
    if (ms.length)
      dests.set(
        s,
        ms.map((m) => m.to),
      );
  });
  return dests;
}
export function toColor(chess) {
  return chess.turn() === 'w' ? 'white' : 'black';
}
export function playOtherSide(cg, chess) {
  return (orig, dest) => {
    chess.move({ from: orig, to: dest });
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess),
      },
    });
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('reti');
  
  // Initialize chess with the Réti study FEN
  const chess = new Chess(fen);
  
  const cg = Chessground(el, {
    fen: fen, // Set the initial position
    movable: {
      color: 'white',
      free: false,
      dests: toDests(chess),
    },
    draggable: {
      showGhost: true,
    },
  });
  cg.set({
    movable: { events: { after: playOtherSide(cg, chess) } },
  });
});
