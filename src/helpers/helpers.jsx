/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const helpers = {
  checkFreeCells(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < arr[i].length; j += 1) {
        if (arr[i][j].cellValue === "") {
          return true;
        }
      }
    }
    return false;
  },

  equals3(a, b, c) {
    return a === b && b === c && a !== "";
  },

  checkWinner(board) {
    let winner = null;

    // horizontal
    for (let i = 0; i < 3; i++) {
      if (helpers.equals3(board[i][0].cellValue, board[i][1].cellValue, board[i][2].cellValue)) {
        winner = board[i][0].cellValue;
      }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
      if (helpers.equals3(board[0][i].cellValue, board[1][i].cellValue, board[2][i].cellValue)) {
        winner = board[0][i].cellValue;
      }
    }

    // Diagonal
    if (helpers.equals3(board[0][0].cellValue, board[1][1].cellValue, board[2][2].cellValue)) {
      winner = board[0][0].cellValue;
    }
    if (helpers.equals3(board[2][0].cellValue, board[1][1].cellValue, board[0][2].cellValue)) {
      winner = board[2][0].cellValue;
    }

    const openSpots = helpers.checkFreeCells(board);
    if (winner == null && !openSpots) {
      return "tie";
    }
    return winner;
  },

  drawBoard(rows, cols) {
    const board = [];

    for (let r = 0; r < rows; r += 1) {
      const row = [];

      for (let c = 0; c < cols; c += 1) {
        row.push({ row: r, col: c, cellValue: "" });
      }

      board.push(row);
    }
    return board;
  },

  scores: {
    X: -10,
    O: 10,
    tie: 0,
  },

  bestMove(board) {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the cellValue empty?
        if (board[i][j].cellValue === "") {
          board[i][j].cellValue = "O";
          const score = helpers.minimax(board, 0, false);
          board[i][j].cellValue = "";
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    board[move.i][move.j].cellValue = "O";
    return board;
  },

  minimax(board, depth, isMaximizing) {
    const result = helpers.checkWinner(board);
    if (result !== null) {
      return helpers.scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // Is the cellValue empty?
          if (board[i][j].cellValue === "") {
            board[i][j].cellValue = "O";
            const score = helpers.minimax(board, depth + 1, false);
            board[i][j].cellValue = "";
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    }
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the cellValue empty?
        if (board[i][j].cellValue === "") {
          board[i][j].cellValue = "X";
          const score = helpers.minimax(board, depth + 1, true);
          board[i][j].cellValue = "";
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  },
};

export default helpers;
