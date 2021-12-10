/* eslint-disable no-nested-ternary */
import React from "react";
import "./styles.scss";

type SquareProps = {
  player: string | null;
  setPlayer: Function;
  getCoordinatesOfClickedCell: Function;
  coordinates: object;
};

const Square = ({ player, setPlayer, getCoordinatesOfClickedCell, coordinates }: SquareProps) => {
  const [value, setValue] = React.useState<string | null>(null);
  const handleClick = () => {
    if (value) {
      return;
    }
    if (player === "X" || player === null) {
      setValue("X");
      setPlayer("O");
      getCoordinatesOfClickedCell(coordinates);
    } else if (player === "O") {
      setValue("O");
      setPlayer("X");
      getCoordinatesOfClickedCell(coordinates);
    }
  };
  return (
    <button className="square" type="button" onClick={handleClick}>
      <span>{value}</span>
    </button>
  );
};
export default Square;
