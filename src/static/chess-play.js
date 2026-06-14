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
    // Make player's move. chess.js throws on an illegal move rather than
    // returning null, so guard with try/catch to avoid freezing the board.
    let playerMove;
    try {
      playerMove = chess.move({ from: orig, to: dest, promotion: 'q' });
    } catch (e) {
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

      // Validate the engine's move against chess.js's legal moves. The Toledo
      // engine occasionally proposes a move chess.js considers illegal (e.g. an
      // illegal castle), and chess.move() throws on it — which would freeze the
      // game. Fall back to a random legal move so play always continues.
      let engineMove = null;
      const legalMoves = chess.moves({ verbose: true });
      if (legalMoves.length) {
        let chosen = null;
        if (toledoMove) {
          chosen = legalMoves.find(
            (m) =>
              m.from === toledoMove.from &&
              m.to === toledoMove.to &&
              (!m.promotion || m.promotion === (toledoMove.promotion || 'q')),
          );
        }

        if (!chosen) {
          chosen = legalMoves[Math.floor(Math.random() * legalMoves.length)];
        }
        engineMove = chess.move(chosen);
      }

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
