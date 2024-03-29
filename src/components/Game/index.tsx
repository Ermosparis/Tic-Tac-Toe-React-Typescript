import React from "react";
import Board from "../Board";
import helpers from "../../helpers/helpers.jsx";

interface Coordinate {
  row: number;
  col: number;
}

const Game = () => {
  const rows = 3;
  const cols = 3;
  const { checkWinner, bestMove, checkFreeCells, drawBoard } = helpers;
  const [disable, setDisable] = React.useState<boolean>(false);
  const [winner, setWinner] = React.useState<string | null>(null);
  const [board, setBoard] = React.useState(drawBoard(rows, cols));

  const restartGamed = () => {
    setBoard(drawBoard(rows, cols));
    setDisable(false);
    setWinner(null);
  };

  const makeAImove = (arr: Array<any>) => {
    if (!checkFreeCells(arr)) {
      setWinner("tie");
      return;
    }
    const boardAfterAImove = bestMove(arr);
    const copy = JSON.parse(JSON.stringify(boardAfterAImove));
    setBoard(copy);
    const result = checkWinner(boardAfterAImove);
    if (result === "X" || result === "O" || result === "tie") {
      setWinner(result);
      setDisable(true);
    }
  };

  const drawXandO = (coord: Coordinate) => {
    board[coord.row][coord.col].cellValue = "X";
    const boardCopy = JSON.parse(JSON.stringify(board));
    setBoard(boardCopy);
    makeAImove(board);
  };

  return (
    <Board
      drawXandO={drawXandO}
      board={board}
      winner={winner}
      disable={disable}
      restartGame={restartGamed}
    />
  );
};

export default Game;
