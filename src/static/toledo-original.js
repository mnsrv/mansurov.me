//(c)2009 Oscar Toledo G.
// Refactored for readability while maintaining original functionality

// ============================================================================
// GLOBAL VARIABLES
// ============================================================================

// B = source square of the last move (from square)
// i = piece type for promotion
// y = current player (0=white, 8=black, uses XOR to flip)
// u = en passant target square
// b = target square of the last move (to square)
// I = board array (120 squares: 0-20 padding, 21-98 board, 99-119 padding)
// G = move history stack pointer
// x = board width (10 squares per row including padding)
// z = bitmask constant (15 = 0b1111) to extract piece and player
// M = large value for evaluation (10000)
// l = lookup table: [initial board setup, piece values, move offsets]

var B, i, y, u, b, I = [], G = 120, x = 10, z = 15, M = 1e4;
var l = [
  // Initial board setup (pieces on starting squares)
  5, 3, 4, 6, 2, 4, 3, 5,  // Black back rank: rook, knight, bishop, queen, king, bishop, knight, rook
  1, 1, 1, 1, 1, 1, 1, 1,  // Black pawns
  9, 9, 9, 9, 9, 9, 9, 9,  // White pawns (9 = empty in initial setup, will be set to 1)
  13, 11, 12, 14, 10, 12, 11, 13, // White back rank
  
  // Special values
  0, 99, 0, 306, 297, 495, 846, -1,
  
  // Move direction offsets (for piece movement)
  0, 1, 2, 2, 1, 0, -1, -1, 1, -10, 10, -11, -9, 9, 11, 10, 20,
  -9, -11, -10, -20, -21, -19, -12, -8, 8, 12, 19, 21
];

// ============================================================================
// MAIN SEARCH FUNCTION (Minimax with Alpha-Beta Pruning)
// ============================================================================
// Parameters:
//   w = target square to move to (0 = search all moves)
//   c = alpha value (lower bound)
//   h = depth/height in search tree
//   e = starting square to search from (21 = start of board)
//   S = en passant square
//   s = search mode (0 = no search, 1 = find move, 2 = full search)
function X(w, c, h, e, S, s) {
  var t, o, L, E, d, O = e,  // O = current square being examined
      N = -M * M,             // N = best evaluation found (negamax)
      K = 78 - h << x,        // K = depth-based evaluation threshold
      p, g, n, m, A, q, r, C, J,
      a = y ? -x : x;         // a = direction offset (depends on player)
  
  // Toggle current player (XOR with 8: 0->8, 8->0)
  y ^= 8;
  G++;  // Increment move history pointer
  
  // Check if in check (quick check)
  d = w || s && s >= h && X(0, 0, 0, 21, 0, 0) > M;
  
  // Iterate through all squares on the board
  do {
    // Get piece at current square
    if (o = I[p = O]) {
      // Extract piece type and check if it belongs to current player
      q = o & z ^ y;  // q = piece type (0-6) if belongs to current player
      
      if (q < 7) {  // Valid piece (not empty, not opponent's)
        // Determine move generation parameters
        A = q-- & 2 ? 8 : 4;  // A = move range (8 for sliding pieces, 4 for others)
        
        // Get move offset index from lookup table
        // Different pieces have different move patterns
        C = o - 9 & z ? [53, 47, 61, 51, 47, 47][q] : 57;
        
        // Generate moves for this piece
        do {
          // Move to next square in piece's movement pattern
          r = I[p += l[C]];  // r = piece at destination square
          
          // CRITICAL: Skip padding columns (where p % 10 is 0 or 9)
          // Padding columns are invalid squares on the board
          // Check if this is a valid move to consider AND not a padding column
          if ((!w | p == w) && (p % 10 !== 0 && p % 10 !== 9)) {
            // Calculate en passant square
            g = q | p + a - S ? 0 : S;
            
            // Check if move is legal
            if (!r & (!!q | A < 3 || !!g) || (r + 1 & z ^ y) > 9 && q | A > 2) {
              // Check for checkmate (king captured)
              if (m = !(r - 2 & 7))
                return y ^= 8, I[G--] = O, K;
              
              // Prepare for move evaluation
              J = n = o & z;  // n = piece type with player
              E = I[p - a] & z;  // E = piece behind destination (for en passant)
              t = q | E - 7 ? n : (n += 2, 6 ^ y);  // t = max piece value for promotion
              
              // Try all possible promotions for pawns
              while (n <= t) {
                // Evaluate position
                L = r ? l[r & 7 | 32] - h - q : 0;  // Base material value
                
                if (s) {  // If searching, add positional evaluation
                  // Positional bonuses/penalties
                  L += (1 - q ? 
                    // For non-pawns: piece-square table evaluation
                    l[(p - p % x) / x + 37] - l[(O - O % x) / x + 37] + 
                    l[p % x + 38] * (q ? 1 : 2) - l[O % x + 38] + (o & 16) / 2 :
                    // For pawns: promotion bonus
                    !!m * 9) +
                    // Pawn-specific evaluation
                    (!q ? 
                      !(I[p - 1] ^ n) + !(I[p + 1] ^ n) +  // Pawn structure
                      l[n & 7 | 32] - 99 +  // Piece value
                      !!g * 99 +  // En passant bonus
                      (A < 2) : 0) +  // Pawn advancement
                    !(E ^ y ^ 9);  // En passant check
                }
                
                // If this move looks promising, try it
                if (s > h || 1 < s & s == h && L > z | d) {
                  // Make the move
                  I[p] = n;  // Place piece at destination
                  I[O] = m ? (I[g] = I[m], I[m] = 0) : g ? I[g] = 0 : 0;  // Handle en passant
                  
                  // Recursively search opponent's moves (negamax)
                  L -= X(s > h | d ? 0 : p, L - N, h + 1, I[G + 1], 
                         J = q | A > 1 ? 0 : p, s);
                  
                  // Check if this is the move we're looking for
                  if (!(h || s - 1 | B - O | i - n | p - b | L < -M))
                    return G--, u = J;
                  
                  // Undo the move
                  J = q - 1 | A < 7 || m || !s | d | r | o < z || X(0, 0, 0, 21, 0, 0) > M;
                  I[O] = o;  // Restore original piece
                  I[p] = r;  // Restore destination square
                  m ? (I[m] = I[g], I[g] = 0) : g ? I[g] = 9 ^ y : 0;  // Restore en passant
                }
                
                // Update best move if this is better
                if (L > N || s > 1 && L == N && !h && Math.random() < .5) {
                  I[G] = O;  // Save move in history
                  if (s > 1) {
                    if (h && c - L < 0)  // Alpha-beta cutoff
                      return y ^= 8, G--, L;
                    if (!h)  // Save best move at root
                      i = n, B = O, b = p;
                  }
                  N = L;  // Update best evaluation
                }
                
                // Try next promotion piece (for pawns)
                n += J || (g = p, m = p < O ? g - 3 : g + 2, 
                          I[m] < z | I[m + O - p] || I[p += p - O]) ? 1 : 0;
              }
            }
          }
        } while (!r & q > 2 || (p = O, q | A > 2 | o > z & !r && ++C * --A));
      }
    }
  } while (++O > 98 ? O = 20 : e - O);  // Loop through all board squares
  
  // Restore player and return evaluation
  return y ^= 8, G--, N + M * M && N > -K + 1924 | d ? N : 0;
}

// ============================================================================
// CHESSGROUND INTERFACE - Helper Functions for FEN/PGN Integration
// ============================================================================

/**
 * Convert standard chess coordinate (e.g., "e4") to Toledo's internal square ID
 * @param {string} coordinate - Chess coordinate like "e4", "a1", "h8"
 * @returns {number} Internal square ID (21-98)
 */
function coordinateToId(coordinate) {
  var file = coordinate.charCodeAt(0) - 97; // a=0, b=1, ..., h=7
  var rank = parseInt(coordinate.charAt(1)) - 1; // 1=0, 2=1, ..., 8=7
  return 21 + 10 * (7 - rank) + file; // Convert to Toledo's 120-square format
}

/**
 * Convert Toledo's internal square ID to standard chess coordinate
 * @param {number} squareId - Internal square ID (21-98)
 * @returns {string} Chess coordinate like "e4", "a1", "h8"
 */
function idToCoordinate(squareId) {
  var file = (squareId - 21) % 10;
  var rank = Math.floor((squareId - 21) / 10);
  
  // Validate: file must be 0-7 (a-h), not 8 or 9 (padding columns)
  // File 8 or 9 means we're in a padding column, which is invalid
  if (file > 7) {
    return null; // Invalid square (padding column)
  }
  
  // Get file character - must exist for valid file (0-7)
  var fileChar = 'abcdefgh'[file];
  
  // Double-check: fileChar should never be undefined for file 0-7
  if (!fileChar || fileChar.length !== 1) {
    return null; // Safety check failed
  }
  
  // Build coordinate string
  var result = fileChar + (8 - rank);
  
  // Final validation: result must be exactly 2 characters, valid file and rank
  if (result.length !== 2 || result[0] < 'a' || result[0] > 'h' || result[1] < '1' || result[1] > '8') {
    return null; // Invalid coordinate format
  }
  
  return result;
}

/**
 * Reset the board to empty state
 */
function resetBoard() {
  B = i = y = u = b = 0;
  G = 120;
  for (var k = 0; k < 120; k++) {
    I[k] = k % x ? 
      // If on board (not padding)
      (k / x % x < 2 | k % x < 2 ? 
        7 :  // Border squares (invalid)
        0) :  // Empty squares on board
      7;  // Padding squares
  }
}

/**
 * Load a FEN position into Toledo's internal format
 * @param {string} fen - FEN string (e.g., "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
 * @returns {boolean} True if FEN was loaded successfully
 */
function loadFen(fen) {
  if (!fen || fen.length === 0) return false;
  
  var parts = fen.trim().split(' ');
  if (parts[0].split('/').length !== 8) return false;
  
  // Reset board
  resetBoard();
  
  // Parse piece placement
  var xPos = 0, yPos = 0;
  var pieceChars = parts[0];
  
  for (var i = 0; i < pieceChars.length; i++) {
    var char = pieceChars.charAt(i);
    
    if (char >= '1' && char <= '8') {
      // Empty squares
      xPos += parseInt(char);
    } else if (char === '/') {
      // New rank
      xPos = 0;
      yPos++;
    } else if ('prnbqkPRNBQK'.indexOf(char) !== -1) {
      // Piece
      if (xPos > 7) return false;
      
      var isBlack = char === char.toLowerCase();
      var pieceType = ' pknbrq'.indexOf(char.toLowerCase());
      var player = isBlack ? 0 : 8;
      
      // Check if piece is in original position (for castling)
      var isOriginal = false;
      if (pieceType === 1 && ((isBlack && yPos === 1) || (!isBlack && yPos === 6))) {
        // Pawn on starting rank
        isOriginal = true;
      } else if (pieceType === 2 && ((isBlack && yPos === 0 && xPos === 4) || (!isBlack && yPos === 7 && xPos === 4))) {
        // King on starting square
        isOriginal = true;
      } else if (pieceType === 5 && ((isBlack && (xPos === 0 || xPos === 7) && yPos === 0) || (!isBlack && (xPos === 0 || xPos === 7) && yPos === 7))) {
        // Rook on starting square
        isOriginal = true;
      }
      
      var squareId = 21 + 10 * yPos + xPos;
      I[squareId] = (isOriginal ? 16 : 0) | player | pieceType;
      xPos++;
    }
  }
  
  // Set current player
  y = (parts[1] && parts[1].toLowerCase() === 'b') ? 8 : 0;
  
  // Parse en passant target square
  if (parts[3] && parts[3] !== '-') {
    var epSquare = coordinateToId(parts[3]);
    u = epSquare + (y === 8 ? -10 : 10); // En passant target is behind the pawn
  } else {
    u = 0;
  }
  
  return true;
}

/**
 * Get the best move from the current position
 * @param {number} depth - Search depth (default: 4)
 * @returns {Object|null} Move object with {from, to, promotion} or null if no move found
 */
function getBestMove(depth) {
  depth = depth || 4;
  
  // Clear previous move
  B = 0;
  b = 0;
  i = 0;
  
  // Search for best move
  // X(0, 0, 0, 21, u, depth) - search with specified depth
  X(0, 0, 0, 21, u, depth);
  
  // Check if a move was found
  // Validate squares are in valid range and not padding columns
  if (B && b && B >= 21 && B <= 98 && b >= 21 && b <= 98) {
    // Check if squares are in padding columns (file 8 or 9)
    var fromFile = (B - 21) % 10;
    var toFile = (b - 21) % 10;
    
    if (fromFile > 7 || toFile > 7) {
      // Invalid move - square is in padding column
      return null;
    }
    
    var fromSquare = idToCoordinate(B);
    var toSquare = idToCoordinate(b);
    
    // Double-check conversion succeeded
    if (!fromSquare || !toSquare) {
      return null;
    }
    
    var move = {
      from: fromSquare,
      to: toSquare
    };
    
    // Check for promotion
    var originalPiece = I[B] & z;
    var pieceType = originalPiece & 7;
    var isPawnToLastRank = (pieceType === 1) && (b < 29 || b > 90);
    
    if (isPawnToLastRank || (i && (i & z) !== originalPiece)) {
      // Determine promotion piece
      var promoPiece = i & z;
      if (promoPiece === 3 || promoPiece === 11) {
        move.promotion = 'n';
      } else if (promoPiece === 4 || promoPiece === 12) {
        move.promotion = 'b';
      } else if (promoPiece === 5 || promoPiece === 13) {
        move.promotion = 'r';
      } else if (promoPiece === 6 || promoPiece === 14) {
        move.promotion = 'q';
      } else {
        move.promotion = 'q'; // Default to queen
      }
    }
    
    return move;
  }
  
  return null;
}

/**
 * Main interface function: Load FEN, find best move, return in standard notation
 * @param {string} fen - FEN string of the position
 * @param {number} depth - Search depth (default: 4)
 * @returns {Object|null} Move object with {from, to, promotion} or null if no move found
 */
export function toledoGetMove(fen, depth) {
  if (!loadFen(fen)) {
    console.error('Invalid FEN string');
    return null;
  }
  
  // Get the move (coordinates are saved in B, b, i)
  var move = getBestMove(depth);
  
  // Reload FEN to restore board state (search function modifies it)
  // This ensures we have correct piece information for future searches
  if (move) {
    loadFen(fen);
  }
  
  return move;
}
