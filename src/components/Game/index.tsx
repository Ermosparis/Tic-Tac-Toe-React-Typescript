import React from "react";
import Board from "../Board";

interface Coordinate {
  row: number;
  col: number;
}

const Game = () => {
  const [player, setPlayer] = React.useState("X");
  const [boardCopy, setBoardCopy] = React.useState<any | null>(null);
  const boardArray: any[] | null = [];
  const rows = 3;
  const cols = 3;

  const checkWinner = (arr: any[]) => {
    for (let r = 0; r < arr.length; r += 1) {
      for (let c = 0; c < arr[r].length; c += 1) {
        if (r < arr.length - 2) {
          if (arr[r][c] === player && arr[r + 1][c] === player && arr[r + 2][c] === player) {
            console.log(`Player ${player} wins!`);
            return;
          }
        }
        if (c < arr[r].length - 2) {
          if (arr[r][c] === player && arr[r][c + 1] === player && arr[r][c + 2] === player) {
            console.log(`Player ${player} wins!`);
            return;
          }
        }

        const minusOneR = r - 1 !== -1;
        const minusOneC = c - 1 !== -1;

        const plusOneR = r + 1 < arr.length;
        const plusOneC = c + 1 < arr[r].length;

        const minusTwoR = r - 2 !== -1;
        const minusTwoC = c - 2 !== -1;

        const plusTwoR = r + 2 < arr.length;
        const plusTwoC = c + 2 < arr[r].length;

        if (
          (minusOneR &&
            minusOneC &&
            plusOneR &&
            plusOneC &&
            arr[r][c] === player &&
            arr[r - 1][c + 1] === player &&
            arr[r + 1][c - 1] === player) ||
          (minusOneR &&
            minusOneC &&
            plusOneR &&
            plusOneC &&
            arr[r][c] === player &&
            arr[r - 1][c + 1] === player &&
            arr[r + 1][c - 1] === player) ||
          (plusOneR &&
            plusOneC &&
            plusTwoR &&
            plusTwoC &&
            arr[r][c] === player &&
            arr[r + 1][c + 1] === player &&
            arr[r + 2][c + 2] === player) ||
          (plusOneR &&
            minusOneC &&
            plusTwoR &&
            minusTwoC &&
            arr[r][c] === player &&
            arr[r + 1][c - 1] === player &&
            arr[r + 2][c - 2] === player) ||
          (minusOneR &&
            minusOneC &&
            minusTwoR &&
            minusTwoC &&
            arr[r][c] === player &&
            arr[r - 1][c - 1] === player &&
            arr[r - 2][c - 2] === player) ||
          (minusOneR &&
            plusOneC &&
            minusTwoR &&
            plusTwoC &&
            arr[r][c] === player &&
            arr[r - 1][c + 1] === player &&
            arr[r - 2][c + 2] === player)
        ) {
          console.log(`Player ${player} wins!`);
          return;
        }
      }
    }
  };

  const getCoordinatesOfClickedCell = (coord: Coordinate) => {
    if (player === "X") {
      boardCopy[coord.row][coord.col] = "X";
    } else if (player === "O") {
      boardCopy[coord.row][coord.col] = "O";
    }
    checkWinner(boardCopy);
  };

  React.useEffect(() => {
    setBoardCopy(boardArray);
  }, []);

  return (
    <Board
      player={player}
      setPlayer={setPlayer}
      rows={rows}
      cols={cols}
      boardArray={boardArray}
      getCoordinatesOfClickedCell={getCoordinatesOfClickedCell}
    />
  );
};

export default Game;
