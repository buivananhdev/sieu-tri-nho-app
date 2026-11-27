/**
 * SUPERMIND CHESS COGNITIVE ENGINE & AI CONTROLLER
 * Full International Chess Rules Engine + Minimax Alpha-Beta AI (1500 -> 3000+ Elo)
 * CCT Zero-Blunder Radar, Heatmap, and Blindfold Gym
 */

(function () {
  'use strict';

  // ==========================================
  // 1. CHESS PIECE SVG ASSETS (Clean & Vector)
  // ==========================================
  const PIECE_SVGS = {
    // White pieces: Bright Ivory with dark accents
    'P': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    'N': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.163-.987-.99-2-2.5-.5-1-.5-2 .5-2 1.5-1 2-4 2-4 0-1.5 1.5-3 3-4 1.7-1.13 4.2-2 5.5-2.5.9-.34 2.5-.5 4 2z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/><circle cx="9.5" cy="25.5" r="1" fill="#1e293b"/></svg>`,
    'B': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><g fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2zM15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2zM25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/><path d="M17.5 26h10M22.5 21v10" stroke="#1e293b" stroke-width="1.5"/></g></svg>`,
    'R': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><g fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" /><path d="M12 32l1.5-18h18l1.5 18H12zM14 29.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM31 29.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z"/></g></svg>`,
    'Q': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><g fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11-8-14-8 14-7-11 2 12zM9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 2-1 .5-2.5 0 0 0-1.5-1.5-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11 38.5h23"/></g></svg>`,
    'K': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><g fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-1-1 8-6 10m-21-2.5c-5-2-2-11-6-10 3 6 6 10.5 6 10.5v7"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`,

    // Black pieces: Sleek Obsidian with silver/cyan border
    'p': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    'n': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.163-.987-.99-2-2.5-.5-1-.5-2 .5-2 1.5-1 2-4 2-4 0-1.5 1.5-3 3-4 1.7-1.13 4.2-2 5.5-2.5.9-.34 2.5-.5 4 2z" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/><circle cx="9.5" cy="25.5" r="1" fill="#38bdf8"/></svg>`,
    'b': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><g fill="#0f172a" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2zM15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2zM25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/><path d="M17.5 26h10M22.5 21v10" stroke="#38bdf8" stroke-width="1.5"/></g></svg>`,
    'r': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><g fill="#0f172a" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" /><path d="M12 32l1.5-18h18l1.5 18H12zM14 29.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM31 29.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z"/></g></svg>`,
    'q': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><g fill="#0f172a" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11-8-14-8 14-7-11 2 12zM9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 2-1 .5-2.5 0 0 0-1.5-1.5-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11 38.5h23"/></g></svg>`,
    'k': `<svg viewBox="0 0 45 45" class="w-full h-full drop-shadow-md select-none pointer-events-none"><g fill="#0f172a" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke="#f43f5e"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-1-1 8-6 10m-21-2.5c-5-2-2-11-6-10 3 6 6 10.5 6 10.5v7"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`
  };

  // ==========================================
  // 2. PIECE VALUES & POSITION EVALUATION TABLES
  // ==========================================
  const PIECE_VALUES = {
    'p': 100, 'n': 320, 'b': 330, 'r': 500, 'q': 900, 'k': 20000,
    'P': 100, 'N': 320, 'B': 330, 'R': 500, 'Q': 900, 'K': 20000
  };

  // Positional Piece-Square Tables (White perspective, mirror for Black)
  const PST_PAWN = [
    [0,  0,  0,  0,  0,  0,  0,  0],
    [50, 50, 50, 50, 50, 50, 50, 50],
    [10, 10, 20, 30, 30, 20, 10, 10],
    [5,  5, 10, 25, 25, 10,  5,  5],
    [0,  0,  0, 20, 20,  0,  0,  0],
    [5, -5,-10,  0,  0,-10, -5,  5],
    [5, 10, 10,-20,-20, 10, 10,  5],
    [0,  0,  0,  0,  0,  0,  0,  0]
  ];

  const PST_KNIGHT = [
    [-50,-40,-30,-30,-30,-30,-40,-50],
    [-40,-20,  0,  0,  0,  0,-20,-40],
    [-30,  0, 10, 15, 15, 10,  0,-30],
    [-30,  5, 15, 20, 20, 15,  5,-30],
    [-30,  0, 15, 20, 20, 15,  0,-30],
    [-30,  5, 10, 15, 15, 10,  5,-30],
    [-40,-20,  0,  5,  5,  0,-20,-40],
    [-50,-40,-30,-30,-30,-30,-40,-50]
  ];

  const PST_BISHOP = [
    [-20,-10,-10,-10,-10,-10,-10,-20],
    [-10,  0,  0,  0,  0,  0,  0,-10],
    [-10,  0,  5, 10, 10,  5,  0,-10],
    [-10,  5,  5, 10, 10,  5,  5,-10],
    [-10,  0, 10, 10, 10, 10,  0,-10],
    [-10, 10, 10, 10, 10, 10, 10,-10],
    [-10,  5,  0,  0,  0,  0,  5,-10],
    [-20,-10,-10,-10,-10,-10,-10,-20]
  ];

  const PST_ROOK = [
    [0,  0,  0,  0,  0,  0,  0,  0],
    [5, 10, 10, 10, 10, 10, 10,  5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [0,  0,  0,  5,  5,  0,  0,  0]
  ];

  const PST_QUEEN = [
    [-20,-10,-10, -5, -5,-10,-10,-20],
    [-10,  0,  0,  0,  0,  0,  0,-10],
    [-10,  0,  5,  5,  5,  5,  0,-10],
    [-5,  0,  5,  5,  5,  5,  0, -5],
    [0,  0,  5,  5,  5,  5,  0, -5],
    [-10,  5,  5,  5,  5,  5,  0,-10],
    [-10,  0,  5,  0,  0,  0,  0,-10],
    [-20,-10,-10, -5, -5,-10,-10,-20]
  ];

  const PST_KING_MID = [
    [-30,-40,-40,-50,-50,-40,-40,-30],
    [-30,-40,-40,-50,-50,-40,-40,-30],
    [-30,-40,-40,-50,-50,-40,-40,-30],
    [-30,-40,-40,-50,-50,-40,-40,-30],
    [-20,-30,-30,-40,-40,-30,-30,-20],
    [-10,-20,-20,-20,-20,-20,-20,-10],
    [20, 20,  0,  0,  0,  0, 20, 20],
    [20, 30, 10,  0,  0, 10, 30, 20]
  ];

  // ==========================================
  // 3. COMPLETE CHESS ENGINE CLASS
  // ==========================================
  class PureChessGame {
    constructor(fen) {
      this.init(fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    }

    init(fen) {
      this.board = Array(8).fill(null).map(() => Array(8).fill(null));
      this.turn = 'w'; // 'w' | 'b'
      this.castling = { K: true, Q: true, k: true, q: true };
      this.enPassant = null; // { r, c }
      this.halfmove = 0;
      this.fullmove = 1;
      this.history = []; // stack of states for undo
      this.moveLog = []; // SAN moves history

      this.loadFen(fen);
    }

    loadFen(fen) {
      const parts = fen.trim().split(/\s+/);
      const rows = parts[0].split('/');
      this.board = Array(8).fill(null).map(() => Array(8).fill(null));

      for (let r = 0; r < 8; r++) {
        let c = 0;
        const rowStr = rows[r] || '';
        for (let i = 0; i < rowStr.length; i++) {
          const ch = rowStr[i];
          if (ch >= '1' && ch <= '8') {
            c += parseInt(ch, 10);
          } else {
            this.board[r][c] = ch;
            c++;
          }
        }
      }

      this.turn = parts[1] || 'w';

      const castStr = parts[2] || '-';
      this.castling = {
        K: castStr.includes('K'),
        Q: castStr.includes('Q'),
        k: castStr.includes('k'),
        q: castStr.includes('q')
      };

      const epStr = parts[3] || '-';
      if (epStr !== '-') {
        this.enPassant = this.squareToCoords(epStr);
      } else {
        this.enPassant = null;
      }

      this.halfmove = parseInt(parts[4] || '0', 10);
      this.fullmove = parseInt(parts[5] || '1', 10);
    }

    getFen() {
      let fen = '';
      for (let r = 0; r < 8; r++) {
        let empty = 0;
        for (let c = 0; c < 8; c++) {
          const piece = this.board[r][c];
          if (!piece) {
            empty++;
          } else {
            if (empty > 0) {
              fen += empty;
              empty = 0;
            }
            fen += piece;
          }
        }
        if (empty > 0) fen += empty;
        if (r < 7) fen += '/';
      }

      let cast = '';
      if (this.castling.K) cast += 'K';
      if (this.castling.Q) cast += 'Q';
      if (this.castling.k) cast += 'k';
      if (this.castling.q) cast += 'q';
      if (!cast) cast = '-';

      const ep = this.enPassant ? this.coordsToSquare(this.enPassant.r, this.enPassant.c) : '-';
      return `${fen} ${this.turn} ${cast} ${ep} ${this.halfmove} ${this.fullmove}`;
    }

    coordsToSquare(r, c) {
      return String.fromCharCode(97 + c) + (8 - r);
    }

    squareToCoords(sq) {
      return {
        c: sq.charCodeAt(0) - 97,
        r: 8 - parseInt(sq[1], 10)
      };
    }

    isWhite(piece) {
      return piece && piece === piece.toUpperCase();
    }

    isBlack(piece) {
      return piece && piece === piece.toLowerCase();
    }

    isPieceColor(piece, color) {
      if (!piece) return false;
      return color === 'w' ? this.isWhite(piece) : this.isBlack(piece);
    }

    inBounds(r, c) {
      return r >= 0 && r < 8 && c >= 0 && c < 8;
    }

    // Find King coordinates for given color
    findKing(color) {
      const target = color === 'w' ? 'K' : 'k';
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (this.board[r][c] === target) return { r, c };
        }
      }
      return null;
    }

    // Checks if square (r, c) is attacked by opponent of `byColor`
    isSquareAttacked(r, c, byColor) {
      const oppPawn = byColor === 'w' ? 'P' : 'p';
      const pawnDir = byColor === 'w' ? 1 : -1; // pawns attack diagonally from behind
      if (this.inBounds(r + pawnDir, c - 1) && this.board[r + pawnDir][c - 1] === oppPawn) return true;
      if (this.inBounds(r + pawnDir, c + 1) && this.board[r + pawnDir][c + 1] === oppPawn) return true;

      // Knight attacks
      const oppKnight = byColor === 'w' ? 'N' : 'n';
      const knightDeltas = [
        [-2,-1], [-2,1], [-1,-2], [-1,2],
        [1,-2], [1,2], [2,-1], [2,1]
      ];
      for (const [dr, dc] of knightDeltas) {
        const nr = r + dr, nc = c + dc;
        if (this.inBounds(nr, nc) && this.board[nr][nc] === oppKnight) return true;
      }

      // Rook / Queen horizontal and vertical rays
      const oppRook = byColor === 'w' ? 'R' : 'r';
      const oppQueen = byColor === 'w' ? 'Q' : 'q';
      const orthDeltas = [[-1,0], [1,0], [0,-1], [0,1]];
      for (const [dr, dc] of orthDeltas) {
        let nr = r + dr, nc = c + dc;
        while (this.inBounds(nr, nc)) {
          const piece = this.board[nr][nc];
          if (piece) {
            if (piece === oppRook || piece === oppQueen) return true;
            break;
          }
          nr += dr;
          nc += dc;
        }
      }

      // Bishop / Queen diagonal rays
      const oppBishop = byColor === 'w' ? 'B' : 'b';
      const diagDeltas = [[-1,-1], [-1,1], [1,-1], [1,1]];
      for (const [dr, dc] of diagDeltas) {
        let nr = r + dr, nc = c + dc;
        while (this.inBounds(nr, nc)) {
          const piece = this.board[nr][nc];
          if (piece) {
            if (piece === oppBishop || piece === oppQueen) return true;
            break;
          }
          nr += dr;
          nc += dc;
        }
      }

      // King adjacent attacks
      const oppKing = byColor === 'w' ? 'K' : 'k';
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr, nc = c + dc;
          if (this.inBounds(nr, nc) && this.board[nr][nc] === oppKing) return true;
        }
      }

      return false;
    }

    inCheck(color) {
      const kingPos = this.findKing(color);
      if (!kingPos) return false;
      const oppColor = color === 'w' ? 'b' : 'w';
      return this.isSquareAttacked(kingPos.r, kingPos.c, oppColor);
    }

    // Generate pseudo-legal moves for a square
    generatePseudoMoves(r, c) {
      const piece = this.board[r][c];
      if (!piece) return [];
      const color = this.isWhite(piece) ? 'w' : 'b';
      const moves = [];

      const type = piece.toLowerCase();

      if (type === 'p') {
        const dir = color === 'w' ? -1 : 1;
        const startRow = color === 'w' ? 6 : 1;
        const promoRow = color === 'w' ? 0 : 7;

        // Step 1 forward
        if (this.inBounds(r + dir, c) && !this.board[r + dir][c]) {
          if (r + dir === promoRow) {
            ['q', 'r', 'b', 'n'].forEach(pr => moves.push({ from: { r, c }, to: { r: r + dir, c }, promotion: color === 'w' ? pr.toUpperCase() : pr }));
          } else {
            moves.push({ from: { r, c }, to: { r: r + dir, c } });
            // Step 2 forward from start row
            if (r === startRow && !this.board[r + 2 * dir][c]) {
              moves.push({ from: { r, c }, to: { r: r + 2 * dir, c }, isDoublePawn: true });
            }
          }
        }

        // Diagonal captures
        for (const dc of [-1, 1]) {
          const tr = r + dir, tc = c + dc;
          if (this.inBounds(tr, tc)) {
            const destPiece = this.board[tr][tc];
            if (destPiece && !this.isPieceColor(destPiece, color)) {
              if (tr === promoRow) {
                ['q', 'r', 'b', 'n'].forEach(pr => moves.push({ from: { r, c }, to: { r: tr, c: tc }, promotion: color === 'w' ? pr.toUpperCase() : pr }));
              } else {
                moves.push({ from: { r, c }, to: { r: tr, c: tc } });
              }
            } else if (this.enPassant && this.enPassant.r === tr && this.enPassant.c === tc) {
              moves.push({ from: { r, c }, to: { r: tr, c: tc }, isEnPassant: true });
            }
          }
        }
      } else if (type === 'n') {
        const deltas = [
          [-2,-1], [-2,1], [-1,-2], [-1,2],
          [1,-2], [1,2], [2,-1], [2,1]
        ];
        for (const [dr, dc] of deltas) {
          const nr = r + dr, nc = c + dc;
          if (this.inBounds(nr, nc)) {
            const destPiece = this.board[nr][nc];
            if (!destPiece || !this.isPieceColor(destPiece, color)) {
              moves.push({ from: { r, c }, to: { r: nr, c: nc } });
            }
          }
        }
      } else if (type === 'b' || type === 'r' || type === 'q') {
        const deltas = [];
        if (type === 'b' || type === 'q') deltas.push([-1,-1], [-1,1], [1,-1], [1,1]);
        if (type === 'r' || type === 'q') deltas.push([-1,0], [1,0], [0,-1], [0,1]);

        for (const [dr, dc] of deltas) {
          let nr = r + dr, nc = c + dc;
          while (this.inBounds(nr, nc)) {
            const destPiece = this.board[nr][nc];
            if (!destPiece) {
              moves.push({ from: { r, c }, to: { r: nr, c: nc } });
            } else {
              if (!this.isPieceColor(destPiece, color)) {
                moves.push({ from: { r, c }, to: { r: nr, c: nc } });
              }
              break;
            }
            nr += dr;
            nc += dc;
          }
        }
      } else if (type === 'k') {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nr = r + dr, nc = c + dc;
            if (this.inBounds(nr, nc)) {
              const destPiece = this.board[nr][nc];
              if (!destPiece || !this.isPieceColor(destPiece, color)) {
                moves.push({ from: { r, c }, to: { r: nr, c: nc } });
              }
            }
          }
        }

        // Castling moves
        const oppColor = color === 'w' ? 'b' : 'w';
        if (color === 'w' && r === 7 && c === 4) {
          // Kingside O-O
          if (this.castling.K && !this.board[7][5] && !this.board[7][6] && this.board[7][7] === 'R') {
            if (!this.isSquareAttacked(7, 4, oppColor) && !this.isSquareAttacked(7, 5, oppColor) && !this.isSquareAttacked(7, 6, oppColor)) {
              moves.push({ from: { r: 7, c: 4 }, to: { r: 7, c: 6 }, isCastling: 'K' });
            }
          }
          // Queenside O-O-O
          if (this.castling.Q && !this.board[7][3] && !this.board[7][2] && !this.board[7][1] && this.board[7][0] === 'R') {
            if (!this.isSquareAttacked(7, 4, oppColor) && !this.isSquareAttacked(7, 3, oppColor) && !this.isSquareAttacked(7, 2, oppColor)) {
              moves.push({ from: { r: 7, c: 4 }, to: { r: 7, c: 2 }, isCastling: 'Q' });
            }
          }
        } else if (color === 'b' && r === 0 && c === 4) {
          // Kingside o-o
          if (this.castling.k && !this.board[0][5] && !this.board[0][6] && this.board[0][7] === 'r') {
            if (!this.isSquareAttacked(0, 4, oppColor) && !this.isSquareAttacked(0, 5, oppColor) && !this.isSquareAttacked(0, 6, oppColor)) {
              moves.push({ from: { r: 0, c: 4 }, to: { r: 0, c: 6 }, isCastling: 'k' });
            }
          }
          // Queenside o-o-o
          if (this.castling.q && !this.board[0][3] && !this.board[0][2] && !this.board[0][1] && this.board[0][0] === 'r') {
            if (!this.isSquareAttacked(0, 4, oppColor) && !this.isSquareAttacked(0, 3, oppColor) && !this.isSquareAttacked(0, 2, oppColor)) {
              moves.push({ from: { r: 0, c: 4 }, to: { r: 0, c: 2 }, isCastling: 'q' });
            }
          }
        }
      }

      return moves;
    }

    // Generate all STRICTLY LEGAL moves for color
    getLegalMoves(color) {
      const activeColor = color || this.turn;
      const legalMoves = [];

      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const piece = this.board[r][c];
          if (piece && this.isPieceColor(piece, activeColor)) {
            const pseudo = this.generatePseudoMoves(r, c);
            for (const move of pseudo) {
              if (this.isMoveLegal(move, activeColor)) {
                legalMoves.push(move);
              }
            }
          }
        }
      }

      return legalMoves;
    }

    // Check if move does not leave King in check
    isMoveLegal(move, color) {
      // Simulate move
      const undoInfo = this.applyMoveInternal(move);
      const stillInCheck = this.inCheck(color);
      this.revertMoveInternal(undoInfo);
      return !stillInCheck;
    }

    // Apply move directly to board (internal, for simulation and real play)
    applyMoveInternal(move) {
      const { from, to } = move;
      const piece = this.board[from.r][from.c];
      const captured = this.board[to.r][to.c];

      const undoInfo = {
        move,
        piece,
        captured,
        castling: { ...this.castling },
        enPassant: this.enPassant ? { ...this.enPassant } : null,
        halfmove: this.halfmove,
        fullmove: this.fullmove,
        epCapturedPiece: null,
        epCapturedPos: null
      };

      // Move piece
      this.board[to.r][to.c] = move.promotion ? move.promotion : piece;
      this.board[from.r][from.c] = null;

      // Handle Castling Rook Jump
      if (move.isCastling) {
        if (move.isCastling === 'K') {
          this.board[7][5] = 'R';
          this.board[7][7] = null;
        } else if (move.isCastling === 'Q') {
          this.board[7][3] = 'R';
          this.board[7][0] = null;
        } else if (move.isCastling === 'k') {
          this.board[0][5] = 'r';
          this.board[0][7] = null;
        } else if (move.isCastling === 'q') {
          this.board[0][3] = 'r';
          this.board[0][0] = null;
        }
      }

      // Handle En Passant Capture
      if (move.isEnPassant) {
        const epPawnRow = from.r;
        const epPawnCol = to.c;
        undoInfo.epCapturedPiece = this.board[epPawnRow][epPawnCol];
        undoInfo.epCapturedPos = { r: epPawnRow, c: epPawnCol };
        this.board[epPawnRow][epPawnCol] = null;
      }

      // Update En Passant target
      if (move.isDoublePawn) {
        this.enPassant = { r: (from.r + to.r) / 2, c: from.c };
      } else {
        this.enPassant = null;
      }

      // Update castling rights
      if (piece === 'K') { this.castling.K = false; this.castling.Q = false; }
      if (piece === 'k') { this.castling.k = false; this.castling.q = false; }
      if (piece === 'R') {
        if (from.r === 7 && from.c === 7) this.castling.K = false;
        if (from.r === 7 && from.c === 0) this.castling.Q = false;
      }
      if (piece === 'r') {
        if (from.r === 0 && from.c === 7) this.castling.k = false;
        if (from.r === 0 && from.c === 0) this.castling.q = false;
      }
      // If rook was captured on original square
      if (captured === 'R') {
        if (to.r === 7 && to.c === 7) this.castling.K = false;
        if (to.r === 7 && to.c === 0) this.castling.Q = false;
      }
      if (captured === 'r') {
        if (to.r === 0 && to.c === 7) this.castling.k = false;
        if (to.r === 0 && to.c === 0) this.castling.q = false;
      }

      return undoInfo;
    }

    revertMoveInternal(undo) {
      const { move, piece, captured, castling, enPassant, halfmove, fullmove } = undo;
      const { from, to } = move;

      this.board[from.r][from.c] = piece;
      this.board[to.r][to.c] = captured;

      if (move.isCastling) {
        if (move.isCastling === 'K') {
          this.board[7][7] = 'R';
          this.board[7][5] = null;
        } else if (move.isCastling === 'Q') {
          this.board[7][0] = 'R';
          this.board[7][3] = null;
        } else if (move.isCastling === 'k') {
          this.board[0][7] = 'r';
          this.board[0][5] = null;
        } else if (move.isCastling === 'q') {
          this.board[0][0] = 'r';
          this.board[0][3] = null;
        }
      }

      if (move.isEnPassant && undo.epCapturedPos) {
        this.board[undo.epCapturedPos.r][undo.epCapturedPos.c] = undo.epCapturedPiece;
      }

      this.castling = castling;
      this.enPassant = enPassant;
      this.halfmove = halfmove;
      this.fullmove = fullmove;
    }

    // Make official move in current game
    makeMove(move) {
      const piece = this.board[move.from.r][move.from.c];
      const captured = this.board[move.to.r][move.to.c];
      const san = this.moveToSan(move);

      const undoInfo = this.applyMoveInternal(move);
      undoInfo.san = san;
      this.history.push(undoInfo);

      if (piece && piece.toLowerCase() === 'p' || captured) {
        this.halfmove = 0;
      } else {
        this.halfmove++;
      }

      if (this.turn === 'b') {
        this.fullmove++;
      }
      this.turn = this.turn === 'w' ? 'b' : 'w';

      this.moveLog.push({
        san,
        move,
        turn: this.turn === 'w' ? 'b' : 'w',
        fen: this.getFen()
      });

      return san;
    }

    undoMove() {
      if (this.history.length === 0) return null;
      const undoInfo = this.history.pop();
      this.revertMoveInternal(undoInfo);
      this.turn = this.turn === 'w' ? 'b' : 'w';
      this.moveLog.pop();
      return undoInfo;
    }

    // SAN generator
    moveToSan(move) {
      const { from, to } = move;
      const piece = this.board[from.r][from.c];
      if (!piece) return '';

      const type = piece.toLowerCase();
      const isCap = !!this.board[to.r][to.c] || move.isEnPassant;
      const toSq = this.coordsToSquare(to.r, to.c);
      const fromSq = this.coordsToSquare(from.r, from.c);

      if (move.isCastling) {
        return (move.isCastling === 'K' || move.isCastling === 'k') ? 'O-O' : 'O-O-O';
      }

      let san = '';
      if (type === 'p') {
        if (isCap) {
          san = fromSq[0] + 'x' + toSq;
        } else {
          san = toSq;
        }
        if (move.promotion) {
          san += '=' + move.promotion.toUpperCase();
        }
      } else {
        san = piece.toUpperCase();
        if (isCap) san += 'x';
        san += toSq;
      }

      // Check / Checkmate suffix check after applying
      const undo = this.applyMoveInternal(move);
      const oppColor = this.isWhite(piece) ? 'b' : 'w';
      const inChk = this.inCheck(oppColor);
      if (inChk) {
        // Is it checkmate?
        const oppMoves = this.getLegalMoves(oppColor);
        if (oppMoves.length === 0) {
          san += '#';
        } else {
          san += '+';
        }
      }
      this.revertMoveInternal(undo);

      return san;
    }

    isGameOver() {
      const moves = this.getLegalMoves(this.turn);
      if (moves.length === 0) {
        if (this.inCheck(this.turn)) {
          return { over: true, result: this.turn === 'w' ? '0-1' : '1-0', reason: 'Chiếu Hết (Checkmate)' };
        } else {
          return { over: true, result: '1/2-1/2', reason: 'Hòa Cờ Bí Nước (Stalemate)' };
        }
      }
      if (this.halfmove >= 100) {
        return { over: true, result: '1/2-1/2', reason: 'Luật 50 Nước Đi (50-Move Rule)' };
      }
      return { over: false };
    }

    // ==========================================
    // 4. POSITIONAL EVALUATION & AI BOT ENGINE
    // ==========================================
    evaluateBoard() {
      let score = 0;
      let whitePawns = 0, blackPawns = 0;

      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const piece = this.board[r][c];
          if (!piece) continue;

          const isW = this.isWhite(piece);
          const val = PIECE_VALUES[piece] || 0;
          let pstVal = 0;

          const pr = isW ? r : 7 - r;
          const pc = c;

          const type = piece.toLowerCase();
          if (type === 'p') {
            pstVal = PST_PAWN[pr][pc];
            if (isW) whitePawns++; else blackPawns++;
          } else if (type === 'n') {
            pstVal = PST_KNIGHT[pr][pc];
          } else if (type === 'b') {
            pstVal = PST_BISHOP[pr][pc];
          } else if (type === 'r') {
            pstVal = PST_ROOK[pr][pc];
          } else if (type === 'q') {
            pstVal = PST_QUEEN[pr][pc];
          } else if (type === 'k') {
            pstVal = PST_KING_MID[pr][pc];
          }

          const total = val + pstVal;
          score += isW ? total : -total;
        }
      }

      return score;
    }

    // Minimax with Alpha-Beta Pruning
    minimax(depth, alpha, beta, isMaximizing, botProfile) {
      if (depth === 0) {
        return { score: this.evaluateBoard() };
      }

      const color = isMaximizing ? 'w' : 'b';
      const moves = this.getLegalMoves(color);

      if (moves.length === 0) {
        if (this.inCheck(color)) {
          return { score: isMaximizing ? -50000 + (10 - depth) : 50000 - (10 - depth) };
        }
        return { score: 0 };
      }

      // Move ordering: Prioritize captures to optimize alpha-beta cutoff
      moves.sort((a, b) => {
        const pieceA = this.board[a.to.r][a.to.c];
        const pieceB = this.board[b.to.r][b.to.c];
        const scoreA = pieceA ? (PIECE_VALUES[pieceA] || 0) : 0;
        const scoreB = pieceB ? (PIECE_VALUES[pieceB] || 0) : 0;
        return scoreB - scoreA;
      });

      let bestMove = moves[0];

      if (isMaximizing) {
        let maxEval = -Infinity;
        for (const move of moves) {
          const undo = this.applyMoveInternal(move);
          const evaluation = this.minimax(depth - 1, alpha, beta, false, botProfile).score;
          this.revertMoveInternal(undo);

          if (evaluation > maxEval) {
            maxEval = evaluation;
            bestMove = move;
          }
          alpha = Math.max(alpha, evaluation);
          if (beta <= alpha) break;
        }
        return { score: maxEval, bestMove };
      } else {
        let minEval = Infinity;
        for (const move of moves) {
          const undo = this.applyMoveInternal(move);
          const evaluation = this.minimax(depth - 1, alpha, beta, true, botProfile).score;
          this.revertMoveInternal(undo);

          if (evaluation < minEval) {
            minEval = evaluation;
            bestMove = move;
          }
          beta = Math.min(beta, evaluation);
          if (beta <= alpha) break;
        }
        return { score: minEval, bestMove };
      }
    }

    // Get Best Move for AI Level
    getBestBotMove(botLevel) {
      const profile = (window.CHESS_BOT_PROFILES || []).find(p => p.level === botLevel) || {
        depth: 2,
        randomness: 0.1
      };

      const legalMoves = this.getLegalMoves(this.turn);
      if (legalMoves.length === 0) return null;

      // Random blunder factor for beginner levels (1500)
      if (Math.random() < profile.randomness) {
        const randomIndex = Math.floor(Math.random() * legalMoves.length);
        return legalMoves[randomIndex];
      }

      const isMaximizing = this.turn === 'w';
      const searchDepth = Math.max(1, Math.min(profile.depth, 4));

      const result = this.minimax(searchDepth, -Infinity, Infinity, isMaximizing, profile);
      return result.bestMove || legalMoves[0];
    }

    // ==========================================
    // 5. COGNITIVE ALGORITHM TOOLS (CCT & HEATMAP)
    // ==========================================
    calculateCCTRadar() {
      // Calculate:
      // 1. Checks: is either king checked?
      // 2. Captures: squares with pieces under attack
      // 3. Hanging (Undefended): pieces with attack count > defend count
      const whiteHanging = [];
      const blackHanging = [];
      const threats = [];

      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const piece = this.board[r][c];
          if (!piece) continue;

          const isW = this.isWhite(piece);
          const oppColor = isW ? 'b' : 'w';
          const attacked = this.isSquareAttacked(r, c, oppColor);
          const defended = this.isSquareAttacked(r, c, isW ? 'w' : 'b');

          if (attacked && !defended) {
            if (isW) whiteHanging.push({ r, c, piece });
            else blackHanging.push({ r, c, piece });
          } else if (attacked) {
            threats.push({ r, c, piece, underAttack: true, defended: true });
          }
        }
      }

      return {
        inCheck: this.inCheck(this.turn),
        turn: this.turn,
        whiteHanging,
        blackHanging,
        threats
      };
    }

    calculateHeatmap() {
      // For each square, count White controllers vs Black controllers
      const matrix = Array(8).fill(0).map(() => Array(8).fill(0));
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          let score = 0;
          if (this.isSquareAttacked(r, c, 'w')) score += 1;
          if (this.isSquareAttacked(r, c, 'b')) score -= 1;
          matrix[r][c] = score;
        }
      }
      return matrix;
    }
  }

  // ==========================================
  // 6. UI MANAGER & INTERACTION ORCHESTRATOR
  // ==========================================
  let chessGame = null;
  let selectedSquare = null; // { r, c }
  let highlightedMoves = [];
  let userColor = 'w'; // 'w' | 'b'
  let currentBotLevel = 4; // 1 to 5 (default Level 4: Magnus Carlsen)
  let isAiThinking = false;
  let isFlipped = false;
  let cctRadarActive = true;
  let heatmapActive = false;
  let blindfoldMode = false;
  let currentTierTab = 1; // 1 to 5

  // Blindfold Drill State
  let colorFlashTimer = null;
  let colorFlashCurrentSq = null;
  let colorFlashScore = 0;
  let colorFlashTotal = 0;

  function initChessModule() {
    if (!chessGame) {
      chessGame = new PureChessGame();
    }
    renderBoard();
    renderTierCurriculum(currentTierTab);
    renderPuzzlesList();
    renderOpeningsList();
    renderEndgameList();
    updateLiveMetrics();
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }

  function renderBoard() {
    const container = document.getElementById('chessBoardGrid');
    if (!container) return;

    container.innerHTML = '';
    const heatmap = heatmapActive ? chessGame.calculateHeatmap() : null;
    const cct = cctRadarActive ? chessGame.calculateCCTRadar() : null;
    const lastMove = chessGame.moveLog.length > 0 ? chessGame.moveLog[chessGame.moveLog.length - 1].move : null;

    const rowIndices = isFlipped ? [7, 6, 5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5, 6, 7];
    const colIndices = isFlipped ? [7, 6, 5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5, 6, 7];

    for (let ri = 0; ri < 8; ri++) {
      const r = rowIndices[ri];
      for (let ci = 0; ci < 8; ci++) {
        const c = colIndices[ci];
        const isLight = (r + c) % 2 === 0;
        const piece = chessGame.board[r][c];
        const sqName = chessGame.coordsToSquare(r, c);

        const sqDiv = document.createElement('div');
        sqDiv.dataset.r = r;
        sqDiv.dataset.c = c;
        sqDiv.dataset.sq = sqName;
        sqDiv.className = `relative aspect-square flex items-center justify-center cursor-pointer transition-all select-none ${
          isLight ? 'bg-slate-700/60 hover:bg-slate-600/70' : 'bg-slate-900/90 hover:bg-slate-800'
        }`;

        // Last move highlight
        if (lastMove && ((lastMove.from.r === r && lastMove.from.c === c) || (lastMove.to.r === r && lastMove.to.c === c))) {
          sqDiv.classList.add('ring-2', 'ring-amber-400/70', 'bg-amber-500/20');
        }

        // Selected square highlight
        if (selectedSquare && selectedSquare.r === r && selectedSquare.c === c) {
          sqDiv.classList.add('ring-4', 'ring-cyan-400', 'bg-cyan-500/30', 'z-10');
        }

        // Heatmap spatial overlay
        if (heatmap) {
          const val = heatmap[r][c];
          if (val > 0) {
            sqDiv.style.boxShadow = `inset 0 0 16px rgba(16, 185, 129, ${Math.min(val * 0.25, 0.6)})`;
          } else if (val < 0) {
            sqDiv.style.boxShadow = `inset 0 0 16px rgba(244, 63, 94, ${Math.min(Math.abs(val) * 0.25, 0.6)})`;
          }
        }

        // CCT Radar: Hanging pieces aura
        if (cct && piece) {
          const isHangingWhite = cct.whiteHanging.some(h => h.r === r && h.c === c);
          const isHangingBlack = cct.blackHanging.some(h => h.r === r && h.c === c);
          if (isHangingWhite || isHangingBlack) {
            const radarBadge = document.createElement('span');
            radarBadge.className = 'absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-rose-300 animate-ping z-20 pointer-events-none';
            sqDiv.appendChild(radarBadge);
          }
        }

        // King in check highlight
        if (piece && piece.toLowerCase() === 'k') {
          const isWKing = piece === 'K';
          if (chessGame.inCheck(isWKing ? 'w' : 'b')) {
            sqDiv.classList.add('bg-rose-600/60', 'ring-4', 'ring-rose-500', 'animate-pulse');
          }
        }

        // Coordinate labels on board edge
        if (ci === 0) {
          const rankLabel = document.createElement('span');
          rankLabel.className = 'absolute top-0.5 left-1 text-[9px] font-mono font-bold text-slate-400 pointer-events-none select-none';
          rankLabel.textContent = 8 - r;
          sqDiv.appendChild(rankLabel);
        }
        if (ri === 7) {
          const fileLabel = document.createElement('span');
          fileLabel.className = 'absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-slate-400 pointer-events-none select-none';
          fileLabel.textContent = String.fromCharCode(97 + c);
          sqDiv.appendChild(fileLabel);
        }

        // Legal target move dot / ring
        const isLegalTarget = highlightedMoves.some(m => m.to.r === r && m.to.c === c);
        if (isLegalTarget) {
          const targetDot = document.createElement('div');
          if (piece) {
            targetDot.className = 'absolute inset-1 rounded-full border-4 border-emerald-400/80 pointer-events-none z-20 animate-pulse';
          } else {
            targetDot.className = 'w-3.5 h-3.5 rounded-full bg-emerald-400/80 ring-2 ring-emerald-300 pointer-events-none z-20';
          }
          sqDiv.appendChild(targetDot);
        }

        // Render piece SVG or Blindfold Mode
        if (piece) {
          if (!blindfoldMode) {
            const pieceContainer = document.createElement('div');
            pieceContainer.className = 'w-4/5 h-4/5 flex items-center justify-center transform hover:scale-105 transition-transform duration-100';
            pieceContainer.innerHTML = PIECE_SVGS[piece] || '';
            sqDiv.appendChild(pieceContainer);
          } else {
            // In blindfold mode: Show faint dot so player knows a piece is present without knowing what it is
            const blindDot = document.createElement('div');
            blindDot.className = 'w-2 h-2 rounded-full bg-slate-500/40 pointer-events-none';
            sqDiv.appendChild(blindDot);
          }
        }

        sqDiv.onclick = () => onSquareClick(r, c);
        container.appendChild(sqDiv);
      }
    }
  }

  function onSquareClick(r, c) {
    if (isAiThinking) return;

    const overCheck = chessGame.isGameOver();
    if (overCheck.over) return;

    // Is this a click on an existing highlighted legal target?
    const targetMove = highlightedMoves.find(m => m.to.r === r && m.to.c === c);

    if (targetMove) {
      executeUserMove(targetMove);
      return;
    }

    // Otherwise, check if user clicked their own piece
    const piece = chessGame.board[r][c];
    if (piece && chessGame.isPieceColor(piece, chessGame.turn)) {
      // Don't allow moving opponent's piece if playing against bot
      if (chessGame.turn !== userColor && currentBotLevel > 0) {
        return;
      }

      selectedSquare = { r, c };
      const allLegal = chessGame.getLegalMoves(chessGame.turn);
      highlightedMoves = allLegal.filter(m => m.from.r === r && m.from.c === c);
      renderBoard();
      if (typeof playSound === 'function') playSound('click');
    } else {
      selectedSquare = null;
      highlightedMoves = [];
      renderBoard();
    }
  }

  function executeUserMove(move) {
    selectedSquare = null;
    highlightedMoves = [];

    const isCap = !!chessGame.board[move.to.r][move.to.c] || move.isEnPassant;
    chessGame.makeMove(move);

    if (typeof playSound === 'function') {
      playSound(isCap ? 'ding' : 'click');
    }

    renderBoard();
    updateLiveMetrics();

    // Check game over
    const status = chessGame.isGameOver();
    if (status.over) {
      handleGameOver(status);
      return;
    }

    // Trigger AI move if bot level > 0 and it's bot's turn
    if (currentBotLevel > 0 && chessGame.turn !== userColor) {
      triggerBotMove();
    }
  }

  function triggerBotMove() {
    isAiThinking = true;
    updateAiThinkingUI(true);

    // Realistic cognitive delay (400ms - 1200ms depending on level)
    const delay = currentBotLevel >= 4 ? 600 : 350;

    setTimeout(() => {
      try {
        const botMove = chessGame.getBestBotMove(currentBotLevel);
        if (botMove) {
          const isCap = !!chessGame.board[botMove.to.r][botMove.to.c] || botMove.isEnPassant;
          chessGame.makeMove(botMove);
          if (typeof playSound === 'function') {
            playSound(isCap ? 'ding' : 'click');
          }
        }
      } catch (err) {
        console.error('Bot move error:', err);
      } finally {
        isAiThinking = false;
        updateAiThinkingUI(false);
        renderBoard();
        updateLiveMetrics();

        const status = chessGame.isGameOver();
        if (status.over) {
          handleGameOver(status);
        }
      }
    }, delay);
  }

  function updateAiThinkingUI(thinking) {
    const indicator = document.getElementById('chessAiThinkingIndicator');
    if (indicator) {
      if (thinking) {
        indicator.classList.remove('hidden');
        indicator.classList.add('flex');
      } else {
        indicator.classList.add('hidden');
        indicator.classList.remove('flex');
      }
    }
  }

  function updateLiveMetrics() {
    // 1. Update Turn Banner
    const turnLabel = document.getElementById('chessTurnLabel');
    if (turnLabel) {
      const isWhiteTurn = chessGame.turn === 'w';
      turnLabel.innerHTML = isWhiteTurn 
        ? `<span class="inline-block w-3 h-3 rounded-full bg-white ring-2 ring-slate-400 mr-2"></span> Lượt Trắng (White to move)`
        : `<span class="inline-block w-3 h-3 rounded-full bg-slate-900 ring-2 ring-slate-400 mr-2"></span> Lượt Đen (Black to move)`;
    }

    // 2. Positional Evaluation Bar
    const evalScore = chessGame.evaluateBoard();
    const evalBar = document.getElementById('chessEvalBar');
    const evalText = document.getElementById('chessEvalScoreText');

    if (evalBar && evalText) {
      // Score in centipawns: clamp between -1500 and +1500 for 0% to 100%
      const cp = evalScore / 100;
      const formattedCp = (cp > 0 ? '+' : '') + cp.toFixed(1);
      evalText.textContent = formattedCp;

      const percent = Math.max(5, Math.min(95, 50 + (cp / 10) * 50));
      evalBar.style.width = `${percent}%`;
    }

    // 3. Move History Table
    const historyList = document.getElementById('chessMoveHistoryList');
    if (historyList) {
      historyList.innerHTML = '';
      const pairs = [];
      for (let i = 0; i < chessGame.moveLog.length; i += 2) {
        pairs.push({
          num: Math.floor(i / 2) + 1,
          w: chessGame.moveLog[i] ? chessGame.moveLog[i].san : '',
          b: chessGame.moveLog[i + 1] ? chessGame.moveLog[i + 1].san : ''
        });
      }

      pairs.forEach(p => {
        const row = document.createElement('div');
        row.className = 'flex items-center text-xs py-1 border-b border-slate-800/60 font-mono';
        row.innerHTML = `
          <span class="w-8 text-slate-500 font-bold">${p.num}.</span>
          <span class="flex-1 text-slate-200 font-semibold">${p.w}</span>
          <span class="flex-1 text-slate-400">${p.b}</span>
        `;
        historyList.appendChild(row);
      });
      historyList.scrollTop = historyList.scrollHeight;
    }

    // 4. Update CCT Radar Counts
    const cct = chessGame.calculateCCTRadar();
    const cctHangingCount = document.getElementById('chessCctHangingCount');
    if (cctHangingCount) {
      const totalHanging = cct.whiteHanging.length + cct.blackHanging.length;
      cctHangingCount.textContent = totalHanging;
      cctHangingCount.className = totalHanging > 0 
        ? 'font-bold text-rose-400 animate-pulse' 
        : 'font-bold text-emerald-400';
    }
  }

  function handleGameOver(status) {
    const modal = document.getElementById('chessGameOverModal');
    const msg = document.getElementById('chessGameOverMsg');
    const res = document.getElementById('chessGameOverResult');
    if (modal && msg && res) {
      res.textContent = status.result;
      msg.textContent = `${status.reason}`;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  // ==========================================
  // 7. PUBLIC CONTROLLER ACTIONS
  // ==========================================
  window.chessResetGame = function () {
    if (chessGame) {
      chessGame.init();
      selectedSquare = null;
      highlightedMoves = [];
      renderBoard();
      updateLiveMetrics();
      if (typeof playSound === 'function') playSound('celebrate');
    }
  };

  window.chessUndoMove = function () {
    if (!chessGame || isAiThinking) return;
    // If playing against bot, undo 2 moves (both bot and user)
    if (currentBotLevel > 0 && chessGame.history.length >= 2) {
      chessGame.undoMove();
      chessGame.undoMove();
    } else {
      chessGame.undoMove();
    }
    selectedSquare = null;
    highlightedMoves = [];
    renderBoard();
    updateLiveMetrics();
  };

  window.chessFlipBoard = function () {
    isFlipped = !isFlipped;
    renderBoard();
  };

  window.chessToggleCCTRadar = function () {
    cctRadarActive = !cctRadarActive;
    const btn = document.getElementById('chessToggleCCTBtn');
    if (btn) {
      btn.classList.toggle('bg-rose-500/20', cctRadarActive);
      btn.classList.toggle('border-rose-500/50', cctRadarActive);
      btn.classList.toggle('text-rose-300', cctRadarActive);
      btn.innerHTML = `<i data-lucide="shield-alert" class="w-4 h-4 text-rose-400"></i> Radar CCT: ${cctRadarActive ? 'Bật' : 'Tắt'}`;
    }
    renderBoard();
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  };

  window.chessToggleHeatmap = function () {
    heatmapActive = !heatmapActive;
    const btn = document.getElementById('chessToggleHeatmapBtn');
    if (btn) {
      btn.classList.toggle('bg-emerald-500/20', heatmapActive);
      btn.classList.toggle('border-emerald-500/50', heatmapActive);
      btn.classList.toggle('text-emerald-300', heatmapActive);
      btn.innerHTML = `<i data-lucide="grid" class="w-4 h-4 text-emerald-400"></i> Bản Đồ Không Gian: ${heatmapActive ? 'Bật' : 'Tắt'}`;
    }
    renderBoard();
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  };

  window.chessToggleBlindfold = function () {
    blindfoldMode = !blindfoldMode;
    const btn = document.getElementById('chessToggleBlindfoldBtn');
    if (btn) {
      btn.classList.toggle('bg-purple-500/20', blindfoldMode);
      btn.classList.toggle('border-purple-500/50', blindfoldMode);
      btn.classList.toggle('text-purple-300', blindfoldMode);
      btn.innerHTML = `<i data-lucide="eye-off" class="w-4 h-4 text-purple-400"></i> Ẩn Quân (Cờ Mù): ${blindfoldMode ? 'Bật' : 'Tắt'}`;
    }
    renderBoard();
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  };

  window.chessSelectBotLevel = function (level) {
    currentBotLevel = parseInt(level, 10);
    const profile = (window.CHESS_BOT_PROFILES || []).find(p => p.level === currentBotLevel);
    const label = document.getElementById('chessCurrentBotLabel');
    if (label && profile) {
      label.textContent = `${profile.name} (${profile.elo} Elo)`;
    }
    document.querySelectorAll('.chess-bot-card').forEach(card => {
      const cardLvl = parseInt(card.dataset.level, 10);
      if (cardLvl === currentBotLevel) {
        card.classList.add('ring-2', 'ring-amber-400', 'bg-slate-800');
      } else {
        card.classList.remove('ring-2', 'ring-amber-400', 'bg-slate-800');
      }
    });
  };

  window.chessSelectUserColor = function (color) {
    userColor = color;
    document.querySelectorAll('.chess-color-btn').forEach(btn => {
      if (btn.dataset.color === color) {
        btn.classList.add('bg-brand-600', 'text-white');
        btn.classList.remove('bg-slate-800', 'text-slate-400');
      } else {
        btn.classList.remove('bg-brand-600', 'text-white');
        btn.classList.add('bg-slate-800', 'text-slate-400');
      }
    });

    chessResetGame();
    if (userColor === 'b') {
      isFlipped = true;
      renderBoard();
      triggerBotMove(); // White bot goes first
    } else {
      isFlipped = false;
      renderBoard();
    }
  };

  window.chessCloseGameOverModal = function () {
    const modal = document.getElementById('chessGameOverModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  // ==========================================
  // 8. TIER CURRICULUM RENDERER
  // ==========================================
  function renderTierCurriculum(tierId) {
    currentTierTab = tierId;
    const tiers = window.CHESS_COGNITIVE_TIERS || [];
    const tier = tiers.find(t => t.id === tierId) || tiers[0];
    const container = document.getElementById('chessTierDetailsContainer');
    if (!container || !tier) return;

    // Update active tier tab buttons
    document.querySelectorAll('.chess-tier-tab-btn').forEach(btn => {
      const tid = parseInt(btn.dataset.tier, 10);
      if (tid === tierId) {
        btn.classList.add('bg-brand-500/20', 'border-brand-500', 'text-brand-300', 'font-bold');
        btn.classList.remove('text-slate-400', 'border-transparent');
      } else {
        btn.classList.remove('bg-brand-500/20', 'border-brand-500', 'text-brand-300', 'font-bold');
        btn.classList.add('text-slate-400', 'border-transparent');
      }
    });

    container.innerHTML = `
      <div class="rounded-2xl bg-cardBg border border-slate-800 p-6 sm:p-8 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-mono font-bold uppercase mb-2">
              ${tier.badge} · ${tier.elo}
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white">${tier.title}</h3>
            <p class="text-xs text-slate-400 font-mono mt-0.5">${tier.subtitle}</p>
          </div>
          <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl max-w-sm">
            <div class="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1">Công Thức Cốt Lõi</div>
            <div class="text-xs font-mono text-slate-200 font-semibold leading-relaxed">${tier.coreFormula}</div>
          </div>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed">${tier.overview}</p>

        <!-- Principles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${tier.principles.map(p => `
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1.5">
              <div class="text-sm font-bold text-white flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                ${p.name}
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">${p.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- Mental Checklist -->
        <div class="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-brand-950/40 border border-brand-500/30 space-y-3">
          <div class="text-xs font-bold text-brand-300 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="list-checks" class="w-4 h-4 text-brand-400"></i>
            Checklist Quét Tư Duy Trước Mỗi Nước Đi (Mental Algorithm)
          </div>
          <ul class="space-y-2">
            ${tier.mentalChecklist.map(c => `
              <li class="text-xs text-slate-300 flex items-start gap-2.5 font-mono">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0"></span>
                <span>${c}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }
  window.chessSelectTierTab = renderTierCurriculum;

  // ==========================================
  // 9. TACTICAL PUZZLE SOLVER
  // ==========================================
  function renderPuzzlesList() {
    const list = document.getElementById('chessPuzzlesList');
    if (!list) return;

    const puzzles = window.CHESS_TACTICAL_PUZZLES || [];
    list.innerHTML = puzzles.map((p, idx) => `
      <div onclick="chessLoadPuzzle('${p.id}')" class="p-4 rounded-xl bg-cardBg border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90 cursor-pointer transition-all space-y-2 group">
        <div class="flex items-center justify-between text-xs">
          <span class="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-mono font-bold">${p.theme}</span>
          <span class="text-slate-400 text-[11px]">${p.difficulty}</span>
        </div>
        <div class="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">${p.title}</div>
        <div class="text-xs text-slate-400 line-clamp-2">${p.explanation}</div>
      </div>
    `).join('');
  }

  window.chessLoadPuzzle = function (puzzleId) {
    const puzzles = window.CHESS_TACTICAL_PUZZLES || [];
    const puz = puzzles.find(p => p.id === puzzleId);
    if (!puz || !chessGame) return;

    chessGame.init(puz.fen);
    userColor = puz.toMove;
    isFlipped = (userColor === 'b');
    currentBotLevel = 0; // Practice mode
    renderBoard();
    updateLiveMetrics();

    // Show puzzle instructions
    const banner = document.getElementById('chessPuzzleActiveBanner');
    if (banner) {
      banner.innerHTML = `
        <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
          <div>
            <div class="text-xs font-bold text-amber-400 uppercase tracking-wider">ĐANG GIẢI CHIẾN THUẬT: ${puz.title}</div>
            <div class="text-xs text-slate-300 mt-1">${puz.keyLesson}</div>
          </div>
          <button onclick="chessResetGame(); document.getElementById('chessPuzzleActiveBanner').innerHTML='';" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200">
            Trở Lại Ván Bình Thường
          </button>
        </div>
      `;
    }

    if (typeof playSound === 'function') playSound('click');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // ==========================================
  // 10. OPENING & ENDGAME LIST RENDERERS
  // ==========================================
  function renderOpeningsList() {
    const list = document.getElementById('chessOpeningsList');
    if (!list) return;

    const openings = window.CHESS_OPENINGS_BOOK || [];
    list.innerHTML = openings.map(op => `
      <div class="p-5 rounded-2xl bg-cardBg border border-slate-800 space-y-3">
        <div class="flex items-center justify-between">
          <div class="font-bold text-white text-base">${op.name}</div>
          <span class="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">${op.eco}</span>
        </div>
        <div class="flex items-center gap-2 flex-wrap font-mono text-xs">
          ${op.moves.map((m, idx) => `
            <span class="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200">${idx % 2 === 0 ? Math.floor(idx/2)+1 + '.' : ''}${m}</span>
          `).join('')}
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${op.strategicIdea}</p>
        <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-amber-300">
          <strong>Chiến Lược Magnus Carlsen:</strong> ${op.carlsenTip}
        </div>
      </div>
    `).join('');
  }

  function renderEndgameList() {
    const list = document.getElementById('chessEndgameList');
    if (!list) return;

    const endgames = window.CHESS_ENDGAME_LESSONS || [];
    list.innerHTML = endgames.map(eg => `
      <div class="p-5 rounded-2xl bg-cardBg border border-slate-800 space-y-3">
        <div class="font-bold text-white text-base">${eg.title}</div>
        <p class="text-xs text-slate-300 leading-relaxed">${eg.summary}</p>
        <div class="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs text-purple-200 font-mono">
          <strong>Định Lý Cốt Lõi:</strong> ${eg.formula}
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // 11. BLINDFOLD GYM DRILLS (COLOR FLASH)
  // ==========================================
  window.chessStartColorFlash = function () {
    colorFlashScore = 0;
    colorFlashTotal = 0;
    document.getElementById('chessColorFlashScore').textContent = '0 / 0 (0%)';
    chessNextColorFlashSquare();
  };

  function chessNextColorFlashSquare() {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const randomFile = files[Math.floor(Math.random() * 8)];
    const randomRank = ranks[Math.floor(Math.random() * 8)];
    colorFlashCurrentSq = randomFile + randomRank;

    const display = document.getElementById('chessColorFlashDisplay');
    if (display) {
      display.textContent = colorFlashCurrentSq;
      display.classList.add('scale-110');
      setTimeout(() => display.classList.remove('scale-110'), 150);
    }
  }

  window.chessAnswerColorFlash = function (guessedColor) {
    if (!colorFlashCurrentSq) return;

    const fileIdx = colorFlashCurrentSq.charCodeAt(0) - 97;
    const rankIdx = 8 - parseInt(colorFlashCurrentSq[1], 10);
    // (r + c) % 2 === 0 is Light, !== 0 is Dark
    const isActuallyLight = (fileIdx + rankIdx) % 2 === 0;
    const isCorrect = (guessedColor === 'light' && isActuallyLight) || (guessedColor === 'dark' && !isActuallyLight);

    colorFlashTotal++;
    if (isCorrect) colorFlashScore++;

    const feedback = document.getElementById('chessColorFlashFeedback');
    if (feedback) {
      feedback.textContent = isCorrect 
        ? `Chính xác! Ô ${colorFlashCurrentSq} là ô ${isActuallyLight ? 'SÁNG' : 'TỐI'}.`
        : `Sai rồi! Ô ${colorFlashCurrentSq} là ô ${isActuallyLight ? 'SÁNG' : 'TỐI'}.`;
      feedback.className = `text-xs font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`;
    }

    const pct = Math.round((colorFlashScore / colorFlashTotal) * 100);
    document.getElementById('chessColorFlashScore').textContent = `${colorFlashScore} / ${colorFlashTotal} (${pct}%)`;

    if (typeof playSound === 'function') {
      playSound(isCorrect ? 'ding' : 'click');
    }

    chessNextColorFlashSquare();
  };

  // Export to window
  window.initChessModule = initChessModule;
  window.PureChessGame = PureChessGame;

})();
