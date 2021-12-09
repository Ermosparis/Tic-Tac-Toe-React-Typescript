import React from "react";
import Board from "../Board";
import "./styles.scss";

const App = () => {
  const [player, setPlayer] = React.useState(null);
  return (
    <div className="container">
      <h1>Tic Tack Toe</h1>
      <Board player={player} setPlayer={setPlayer} />
    </div>
  );
};
export default App;
