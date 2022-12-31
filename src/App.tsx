import React, { useState } from "react";

import "./App.css";
import Start from "./components/Start";
import Finish from "./components/Finish";
import HumanvsHuman from "./components/HumanvsHuman";
import HumanvsComputer from "./components/HumanvsComputer";

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<string>("started");
  const [player, setPlayer] = useState<string>("");
  const [letter, setLetter] = useState<string>("");

  return (
    <div className="App">
      {gameStatus === "started" && (
        <Start
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          player={player}
          setPlayer={setPlayer}
          letter={letter}
          setLetter={setLetter}
        />
      )}
      {gameStatus === "playing" && player === "human" && (
        <HumanvsHuman gameStatus={gameStatus} setGameStatus={setGameStatus} />
      )}
      {gameStatus === "playing" && player === "computer" && (
        <HumanvsComputer
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          letter={letter}
        />
      )}
      {gameStatus === "finished" && (
        <Finish
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          player={player}
          setPlayer={setPlayer}
          letter={letter}
          setLetter={setLetter}
        />
      )}
    </div>
  );
};

export default App;
