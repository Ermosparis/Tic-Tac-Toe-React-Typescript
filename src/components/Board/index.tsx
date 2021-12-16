import Square from "../Square";
import "./styles.scss";

type BoardProps = {
  board: Array<any>;
  drawXandO: Function;
  winner: string | null;
  disable: boolean;
  restartGame: () => void;
};

const Board = ({ drawXandO, board, winner, disable, restartGame }: BoardProps) => (
  <div className="board">
    {board.map((row, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="row" key={`row${row}${index}`}>
        {row.map((cell: { row: number; col: number; cellValue: string }) => (
          <Square
            cellValue={cell.cellValue}
            key={cell.row + cell.col}
            drawXandO={drawXandO}
            coordinates={{ row: cell.row, col: cell.col }}
            disable={disable}
          />
        ))}
      </div>
    ))}
    <h1>{winner && (winner !== "tie" ? `The winner is ${winner}` : `It's a tie!`)}</h1>
    <button className="restartBtn" type="button" onClick={restartGame}>
      Restart Game
    </button>
  </div>
);

export default Board;
