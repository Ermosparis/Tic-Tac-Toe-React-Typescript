import Square from "../Square";
import "./styles.scss";

type BoardProps = {
  player: string | null;
  setPlayer: Function;
  rows: number;
  cols: number;
  boardArray: Array<object>;

  getCoordinatesOfClickedCell: Function;
};

const Board = ({
  player,
  setPlayer,
  rows,
  cols,
  boardArray,
  getCoordinatesOfClickedCell,
}: BoardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const drawBoard = (rows: number, cols: number) => {
    const board = [];
    for (let r = 0; r < rows; r += 1) {
      const row = [];
      const rowArray = [];
      for (let c = 0; c < cols; c += 1) {
        row.push(
          <Square
            key={r + c}
            player={player}
            setPlayer={setPlayer}
            getCoordinatesOfClickedCell={getCoordinatesOfClickedCell}
            coordinates={{ row: r, col: c }}
          />
        );
        rowArray.push({ row: r, col: c });
      }
      boardArray.push(rowArray);
      board.push(
        <div className="row" key={`row${r}`}>
          {row}
        </div>
      );
    }
    return <div className="rows-holder">{board}</div>;
  };

  return <div className="board">{drawBoard(rows, cols)}</div>;
};

export default Board;
