import React from "react";
import { Button, Typography } from "antd";

const { Title } = Typography;

interface Props {
  gameStatus: string;
  setGameStatus: (val: string) => void;
  player: string;
  setPlayer: (val: string) => void;
  letter: string;
  setLetter: (val: string) => void;
}

const styles = {
  resetButton: {
    fontWeight: "bold",
  },
};

const Finish: React.FC<Props> = ({
  gameStatus,
  setGameStatus,
  setPlayer,
  player,
  letter,
  setLetter,
}) => {
  const winner = localStorage.getItem("winner");

  const handleRestart = () => {
    localStorage.removeItem("winner");
    setGameStatus("started");
    setPlayer("");
    setLetter("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {winner === "" ? (
        <>
          <Title style={{ color: "#ebc334" }}>😅 Oops!</Title>
          <Title style={{ color: "#ebc334" }}>Game is Tied 😟</Title>
        </>
      ) : (
        <>
          <Title style={{ color: "#ebc334" }}>
            🎉 🎊 YAY, We have a winner
          </Title>
          {player === "human" ? (
            <Title style={{ color: "#ebc334" }} level={2}>
              Player {winner} won the game
            </Title>
          ) : letter === winner ? (
            <Title style={{ color: "#ebc334" }} level={2}>
              You won the game
            </Title>
          ) : (
            <Title style={{ color: "#ebc334" }} level={2}>
              Computer won the game
            </Title>
          )}
        </>
      )}
      <Button
        style={styles.resetButton}
        size="large"
        type="primary"
        danger
        onClick={() => handleRestart()}
      >
        Restart the Game!!
      </Button>
    </div>
  );
};

export default Finish;
