// const retiFen = "7K/8/k1P5/7p/8/8/8/8 w - - 0 1"  // Original Réti endgame study

// New FEN string created from image
// This represents the position shown in the image
// Format: piece placement / active color / castling availability / en passant target / halfmove clock / fullmove counter
const fen = "8/8/p7/k1p5/8/1QK5/8/8 w - - 0 1"  // Réti endgame study from image

// Define multiple correct solutions as arrays of move sequences in algebraic notation
// Each array represents one valid solution path (including both player and opponent moves)
const correctSolutions = [
    ["Qb7", "c4", "Qb4"],
    ["Qb7", "Ka4", "Qxa6"],
];

// Set the maximum number of player moves for this puzzle
// In chess puzzles, we typically count only the player's moves, not the opponent's responses
const maxPlayerMoves = 2; // For a "win in 2" puzzle

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

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('reti');
  
  // Create UI elements
  const puzzleContainer = document.createElement('div');
  puzzleContainer.className = 'puzzle-container';
  el.parentNode.insertBefore(puzzleContainer, el.nextSibling);
  
  // Add the chessboard to the container
  puzzleContainer.appendChild(el);
  
  // Create controls
  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'puzzle-controls';
  
  // Reset button
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Position';
  resetButton.className = 'puzzle-reset-btn';
  
  // Feedback area
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'puzzle-feedback';
  
  // Move counter display
  const moveCounterDiv = document.createElement('div');
  moveCounterDiv.className = 'move-counter';
  moveCounterDiv.textContent = `Your Moves: 0/${maxPlayerMoves}`;
  
  // Move history display
  const historyDiv = document.createElement('div');
  historyDiv.className = 'move-history';
  historyDiv.innerHTML = '<h3>Move History</h3><div class="moves"></div>';
  
  // Add controls to the container
  controlsDiv.appendChild(resetButton);
  controlsDiv.appendChild(moveCounterDiv);
  puzzleContainer.appendChild(controlsDiv);
  puzzleContainer.appendChild(feedbackDiv);
  puzzleContainer.appendChild(historyDiv);
  
  const movesDisplay = historyDiv.querySelector('.moves');
  
  // Initialize chess with the FEN
  const chess = new Chess(fen);
  
  // Store the initial position for reset
  const initialFen = fen;
  
  // Track all moves made in SAN format
  const moveHistory = [];
  
  // Initialize the board
  const cg = Chessground(el, {
    fen: initialFen,
    movable: {
      color: 'both', // Allow playing both sides
      free: false,
      dests: toDests(chess),
    },
    draggable: {
      showGhost: true,
    },
  });
  
  // Function to update move history display
  const updateMoveDisplay = () => {
    movesDisplay.innerHTML = '';
    
    // Count player moves (white moves)
    const playerMoves = moveHistory.filter((_, index) => index % 2 === 0);
    
    // Update move counter to show only player moves
    moveCounterDiv.textContent = `Your Moves: ${playerMoves.length}/${maxPlayerMoves}`;
    
    // Display moves in standard chess notation format
    for (let i = 0; i < moveHistory.length; i++) {
      const moveNumber = Math.floor(i / 2) + 1;
      const moveText = document.createElement('span');
      
      if (i % 2 === 0) {
        moveText.textContent = `${moveNumber}. ${moveHistory[i]} `;
      } else {
        moveText.textContent = `${moveHistory[i]} `;
      }
      
      movesDisplay.appendChild(moveText);
    }
    
    return playerMoves;
  };
  
  // Function to check the solution
  const checkSolution = () => {
    // Get player moves (white moves)
    const playerMoves = moveHistory.filter((_, index) => index % 2 === 0);
    
    // Check if any of the defined solutions match the player's moves
    let isCorrect = false;
    
    // Only check if we have solutions defined and player has made enough moves
    if (correctSolutions.length > 0 && playerMoves.length >= maxPlayerMoves) {
      // Try to match against each possible solution
      for (const solution of correctSolutions) {
        // Check if the full move sequence matches this solution
        // We need to compare player and opponent moves
        let solutionMatches = true;
        
        // We need at least 2*maxPlayerMoves-1 moves to check a solution
        // (player move, opponent move, player move, ...)
        const minMovesNeeded = Math.min(2 * maxPlayerMoves - 1, solution.length);
        
        if (moveHistory.length < minMovesNeeded) {
          continue;
        }
        
        // Compare each move in the sequence
        for (let i = 0; i < minMovesNeeded; i++) {
          // Normalize the moves for comparison by removing all annotations (+, #, !, ?, etc.)
          const normalizedPlayerMove = moveHistory[i].replace(/[+#!?]+$/, '');
          const normalizedSolutionMove = solution[i].replace(/[+#!?]+$/, '');
          
          if (normalizedPlayerMove !== normalizedSolutionMove) {
            solutionMatches = false;
            break;
          }
        }
        
        // If we found a matching solution, mark as correct and break
        if (solutionMatches) {
          isCorrect = true;
          break;
        }
      }
      
      // Display feedback
      if (isCorrect) {
        feedbackDiv.textContent = 'Correct solution! Well done!';
        feedbackDiv.className = 'puzzle-feedback success';
        
        // Disable further moves
        cg.set({
          movable: {
            color: 'none',
            dests: new Map(),
          }
        });
      } else {
        feedbackDiv.textContent = 'Incorrect solution. Try again!';
        feedbackDiv.className = 'puzzle-feedback error';
      }
    }
    
    return isCorrect;
  };
  
  // Handle moves
  const onMove = (orig, dest) => {
    // Make the move and get SAN format
    const move = chess.move({ from: orig, to: dest, promotion: 'q' }); // Default to queen for promotions
    
    if (move) {
      // Record the move in SAN format
      moveHistory.push(move.san);
      
      // Update the move display and get player moves
      const playerMoves = updateMoveDisplay();
      
      // Update the board
      cg.set({
        turnColor: toColor(chess),
        movable: {
          color: 'both', // Keep allowing both sides to move
          dests: toDests(chess),
        },
      });
      
      // Check if this is the player's second move
      if (playerMoves.length >= maxPlayerMoves) {
        setTimeout(() => {
          checkSolution();
        }, 300); // Small delay to allow the player to see the move
      }
    }
  };
  
  // Set up the move handler
  cg.set({
    movable: { events: { after: onMove } },
  });
  
  // Reset button handler
  resetButton.addEventListener('click', () => {
    // Clear move history
    moveHistory.length = 0;
    
    // Reset the chess.js instance
    chess.load(initialFen);
    
    // Reset the board
    cg.set({
      fen: initialFen,
      turnColor: toColor(chess),
      movable: {
        color: 'both',
        dests: toDests(chess),
      },
    });
    
    // Clear feedback and move display
    feedbackDiv.textContent = '';
    feedbackDiv.className = 'puzzle-feedback';
    updateMoveDisplay();
  });
  
  // Initialize the move display
  updateMoveDisplay();
});
