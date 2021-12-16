/* eslint-disable no-nested-ternary */
import "./styles.scss";

type SquareProps = {
  drawXandO: Function;
  coordinates: object;
  cellValue: string;
  disable: boolean;
};

const Square = ({ drawXandO, coordinates, cellValue, disable }: SquareProps) => {
  const handleClick = () => {
    if (cellValue === "X" || cellValue === "O") {
      return;
    }
    drawXandO(coordinates);
  };
  return (
    <button className="square" type="button" onClick={handleClick} disabled={disable}>
      <span>{cellValue}</span>
    </button>
  );
};
export default Square;
