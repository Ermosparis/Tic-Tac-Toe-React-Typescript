/* eslint-disable no-nested-ternary */
import React from "react";
import "./styles.scss";

type SquareProps = { player: string | null; setPlayer: Function };

const Square = ({ player, setPlayer }: SquareProps) => {
  const [value, setValue] = React.useState<string | null>(null);
  const handleClick = () => {
    if (value) {
      return;
    }
    if (player === "X" || player === null) {
      setValue("X");
      setPlayer("O");
    } else if (player === "O") {
      setValue("O");
      setPlayer("X");
    }
  };
  return (
    <button className="square" type="button" onClick={handleClick}>
      <span>{value}</span>
    </button>
  );
};
export default Square;
