import React, { useState, useEffect } from "react";
import { Typography } from "antd";

import Square from "./Utilities/Square";
import { findWinner } from "./common/findWinner";

interface Props {
  gameStatus: string;
  setGameStatus: (val: string) => void;
}

const { Title } = Typography;

const styles = {
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
};

const HumanvsHuman: React.FC<Props> = ({ gameStatus, setGameStatus }) => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<string>("X");

  useEffect(() => {
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
  }, [board, setGameStatus]);

  const handleClick = (index: number): void => {
    // console.log("index", index);

    if (index < 0 || index > 9 || board[index] !== "") return;

    const newBoard = [...board];
    // newBoard.splice(index, 1, turn);
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === "X" ? "O" : "X";
    setTurn(newTurn);
  };

  return (
    <div>
      {turn.length > 0 && (
        <Title
          level={2}
          style={{ textAlign: "center", marginTop: "20px", color: "#ebc334" }}
        >
          Player {turn} Turn
        </Title>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {/* -----------------BUILDING THE BOARD-------------- */}
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

export default HumanvsHuman;
