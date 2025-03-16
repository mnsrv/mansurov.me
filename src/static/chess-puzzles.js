// const retiFen = "7K/8/k1P5/7p/8/8/8/8 w - - 0 1"  // Original Réti endgame study

// New FEN string created from image
// This represents the position shown in the image
// Format: piece placement / active color / castling availability / en passant target / halfmove clock / fullmove counter
const fen = "8/8/p7/k1p5/8/1QK5/8/8 w - - 0 1"  // Réti endgame study from image
const fen2 = 'r5k1/pR6/K7/7n/3Q4/8/8/8 w - - 0 1'

// Define puzzles with their FEN positions and solutions
const puzzles = [
  {
    id: 'puzzle1',
    name: 'Мат в два хода (Л. Куббель, 1941)',
    fen: "8/8/p7/k1p5/8/1QK5/8/8 w - - 0 1",
    solutions: [
      ["Qb7", "c4", "Qb4"],
      ["Qb7", "Ka4", "Qxa6"],
    ],
    maxPlayerMoves: 2
  },
  {
    id: 'puzzle2',
    name: 'Мат в два хода (Л. Куббель, 1939)',
    fen: 'r5k1/pR6/K7/7n/3Q4/8/8/8 w - - 0 1',
    solutions: [
      ["Qd7", "Kf8", "Qf7"],
      ["Qd7", "Kh8", "Qh7"],
      ["Qd7", "Nf4", "Qg7"],
      ["Qd7", "Rf8", "Qh7"],
      ["Qd7", "Rb8", "Rxb8"],
    ],
    maxPlayerMoves: 2
  }
];

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
  
  // Create puzzle title
  const puzzleTitle = document.createElement('h3');
  puzzleTitle.className = 'puzzle-title';
  
  // Create controls
  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'puzzle-controls';
  
  // Puzzle selector
  const puzzleSelector = document.createElement('select');
  puzzleSelector.className = 'puzzle-selector';
  puzzles.forEach(puzzle => {
    const option = document.createElement('option');
    option.value = puzzle.id;
    option.textContent = puzzle.name;
    puzzleSelector.appendChild(option);
  });
  
  // Reset button
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Position';
  resetButton.className = 'puzzle-reset-btn';
  
  // Feedback area
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'puzzle-feedback';
  
  // Add elements to the container
  puzzleContainer.prepend(puzzleTitle);
  controlsDiv.appendChild(puzzleSelector);
  controlsDiv.appendChild(resetButton);
  puzzleContainer.appendChild(controlsDiv);
  puzzleContainer.appendChild(feedbackDiv);
  
  // Initialize variables
  let currentPuzzle = puzzles[0];
  let chess = new Chess(currentPuzzle.fen);
  let moveHistory = [];
  
  // Initialize the board
  const cg = Chessground(el, {
    fen: currentPuzzle.fen,
    movable: {
      color: 'both', // Allow playing both sides
      free: false,
      dests: toDests(chess),
    },
    draggable: {
      showGhost: true,
    },
  });
  
  // Function to get player moves
  const getPlayerMoves = () => {
    // Count player moves (white moves)
    return moveHistory.filter((_, index) => index % 2 === 0);
  };
  
  // Function to check the solution
  const checkSolution = () => {
    // Get player moves (white moves)
    const playerMoves = getPlayerMoves();
    
    // Check if any of the defined solutions match the player's moves
    let isCorrect = false;
    
    // Only check if we have solutions defined and player has made enough moves
    if (currentPuzzle.solutions.length > 0 && playerMoves.length >= currentPuzzle.maxPlayerMoves) {
      // Try to match against each possible solution
      for (const solution of currentPuzzle.solutions) {
        // Check if the full move sequence matches this solution
        // We need to compare player and opponent moves
        let solutionMatches = true;
        
        // We need at least 2*maxPlayerMoves-1 moves to check a solution
        // (player move, opponent move, player move, ...)
        const minMovesNeeded = Math.min(2 * currentPuzzle.maxPlayerMoves - 1, solution.length);
        
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
      
      // Get player moves
      const playerMoves = getPlayerMoves();
      
      // Update the board
      cg.set({
        turnColor: toColor(chess),
        movable: {
          color: 'both', // Keep allowing both sides to move
          dests: toDests(chess),
        },
      });
      
      // Check for stalemate after the move
      if (chess.isStalemate()) {
        setTimeout(() => {
          // Use the same format as incorrect solution
          feedbackDiv.textContent = 'Incorrect solution. Try again!';
          feedbackDiv.className = 'puzzle-feedback error';
          
          // Disable further moves
          cg.set({
            movable: {
              color: 'none',
              dests: new Map(),
            }
          });
        }, 300);
        return;
      }
      
      // Check if this is the player's final move
      if (playerMoves.length >= currentPuzzle.maxPlayerMoves) {
        setTimeout(() => {
          checkSolution();
        }, 300); // Small delay to allow the player to see the move
      }
    }
  };
  
  // Function to load a puzzle
  const loadPuzzle = (puzzleId) => {
    // Find the puzzle by ID
    const puzzle = puzzles.find(p => p.id === puzzleId) || puzzles[0];
    currentPuzzle = puzzle;
    
    // Update the puzzle title
    puzzleTitle.textContent = puzzle.name;
    
    // Clear move history
    moveHistory = [];
    
    // Reset the chess.js instance
    chess = new Chess(puzzle.fen);
    
    // Reset the board
    cg.set({
      fen: puzzle.fen,
      turnColor: toColor(chess),
      movable: {
        color: 'both',
        dests: toDests(chess),
      },
    });
    
    // Clear feedback
    feedbackDiv.textContent = '';
    feedbackDiv.className = 'puzzle-feedback';
  };
  
  // Set up the move handler
  cg.set({
    movable: { events: { after: onMove } },
  });
  
  // Reset button handler
  resetButton.addEventListener('click', () => {
    loadPuzzle(currentPuzzle.id);
  });
  
  // Puzzle selector handler
  puzzleSelector.addEventListener('change', (e) => {
    loadPuzzle(e.target.value);
  });
  
  // Initialize with the first puzzle
  loadPuzzle(puzzles[0].id);
});
