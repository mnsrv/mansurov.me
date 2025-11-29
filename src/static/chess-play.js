import { Chess, SQUARES } from "./chess.js";
import { Chessground } from "./chessground.js";
import { toledoGetMove } from "./toledo-original.js";

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
  return chess.turn() === "w" ? "white" : "black";
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

export function aiPlay(
  cg,
  chess,
  delay,
  depth = 4,
) {
  return (orig, dest) => {
    // Make player's move
    const playerMove = chess.move({ from: orig, to: dest, promotion: 'q' });
    
    if (!playerMove) {
      // Invalid move, don't proceed
      return;
    }
    
    // Check if game is over after player's move
    const isGameOver = chess.isGameOver();
    
    // Update board after player move
    cg.set({
      fen: chess.fen(),
      turnColor: toColor(chess),
      check: chess.isCheck(),
      lastMove: [playerMove.from, playerMove.to],
      selectable: {
        enabled: !isGameOver,
      },
      draggable: {
        enabled: !isGameOver,
      },
      movable: {
        color: toColor(chess),
        dests: toDests(chess),
      },
    });
    
    if (isGameOver) {
      return;
    }
    
    // Calculate and make AI move after delay
    setTimeout(() => {
      if (chess.isGameOver()) {
        return;
      }
      
      // Get best move from Toledo engine
      const toledoMove = toledoGetMove(chess.fen(), depth);
      
      if (toledoMove) {
        // Make the move in chess.js
        const engineMove = chess.move({
          from: toledoMove.from,
          to: toledoMove.to,
          promotion: toledoMove.promotion || 'q',
        });
        
        if (engineMove) {
          // Check if game is over after engine move
          const isGameOver = chess.isGameOver();
          
          // Update chessground board
          cg.set({
            fen: chess.fen(),
            turnColor: toColor(chess),
            check: chess.isCheck(),
            lastMove: [engineMove.from, engineMove.to],
            selectable: {
              enabled: !isGameOver,
            },
            draggable: {
              enabled: !isGameOver,
            },
            movable: {
              color: toColor(chess),
              dests: toDests(chess),
            },
          });
          cg.playPremove();
        }
      }
    }, delay);
  };
}

export function initChessPlay(el) {
    const chess = new Chess();
    const cg = Chessground(el, {
      highlight: {
        check: true,
      },
      movable: {
        color: "white",
        free: false,
        dests: toDests(chess),
      },
    });
    cg.set({
      check: chess.isCheck(),
      movable: {
        events: {
          after: aiPlay(cg, chess, 1000, 4), // depth = 4
        },
      },
    });
    return cg;
}

initChessPlay(document.getElementById("chessboard"));
