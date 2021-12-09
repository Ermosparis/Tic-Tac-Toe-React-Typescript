import Square from "../Square";
import "./styles.scss";

type BoardProps = { player: string | null; setPlayer: Function };

const Board = ({ player, setPlayer }: BoardProps) => {
  const drawBoard = (rawNumber: number, colNumber: number) => {
    const board = [];
    for (let r = 0; r < rawNumber; r += 1) {
      const row = [];
      for (let c = 0; c < colNumber; c += 1) {
        row.push(<Square key={r + c} player={player} setPlayer={setPlayer} />);
      }

      board.push(
        <div className="row" key={`row${r}`}>
          {row}
        </div>
      );
    }
    return <div className="rows-holder">{board}</div>;
  };

  return <div className="board">{drawBoard(3, 3)}</div>;
};

export default Board;
