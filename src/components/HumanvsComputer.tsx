import React, { useState, useEffect } from "react";

import Square from "./Utilities/Square";
import { findWinner } from "./common/findWinner";

interface Props {
  gameStatus: string;
  setGameStatus: (val: string) => void;
  letter: string;
}

const styles = {
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
};

const HumanvsComputer: React.FC<Props> = ({
  gameStatus,
  setGameStatus,
  letter,
}) => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<string>(letter);

  useEffect(() => {
    // Computer turn
    if (letter !== turn) {
      const emptyIndexes = board
        .map((el, index) => (el === "" ? index : ""))
        .filter((val) => val !== "");

      const randomIndex =
        emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];

      const newBoard = board;
      newBoard[
        typeof randomIndex === "number"
          ? randomIndex
          : parseInt(randomIndex, 10)
      ] = turn;
      setBoard(newBoard);

      const newTurn = turn === "X" ? "O" : "X";
      setTurn(newTurn);

      const getWinner = findWinner(board);
      if (getWinner) {
        localStorage.setItem("winner", getWinner);
        setGameStatus("finished");
        return;
      } else {
        const data = board.every((v) => v !== "");

        if (data) {
          localStorage.setItem("winner", getWinner);
          setGameStatus("finished");
        }
        return;
      }
    }
  }, [board, turn, setGameStatus, letter]);

  const handleClick = (index: number): void => {
    // console.log("index", index);

    if (index < 0 || index > 9 || board[index] !== "") return;

    if (letter === turn) {
      const newBoard = [...board];
      // newBoard.splice(index, 1, turn);
      newBoard[index] = turn;
      setBoard(newBoard);

      const newTurn = turn === "X" ? "O" : "X";
      setTurn(newTurn);
    }
  };

  return (
    <div>
      {/* -----------------BUILDING THE BOARD-------------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div style={styles.board}>
          {board.map((value, index) => {
            return (
              <Square
                key={index}
                value={value}
                index={index}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HumanvsComputer;
