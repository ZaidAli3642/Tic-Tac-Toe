import React from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Typography, Button, Space } from "antd";

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
  letterButton: {
    fontWeight: "bold",
    fontSize: "30px",
    width: "150px",
    color: "red",
  },
  playerButton: {
    fontWeight: "bold",
    fontSize: "25px",
    width: "200px",
    color: "red",
  },
  startButton: {
    marginTop: "15px",
    fontWeight: "bold",
    width: "300px",
  },
};

const Start: React.FC<Props> = ({
  gameStatus,
  setGameStatus,
  player,
  setPlayer,
  letter,
  setLetter,
}) => {
  const handleLetterChange = (event: RadioChangeEvent): void => {
    // console.log("l: ", event.target.value);
    setLetter(event.target.value);
  };

  const handlePlayerChange = (event: RadioChangeEvent): void => {
    // console.log("p: ", event.target.value);
    setPlayer(event.target.value);
  };

  const handleStartGame = () => {
    setGameStatus("playing");
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
      <Title style={{ color: "#ebc334" }}>Choose your Letter</Title>

      <Radio.Group
        buttonStyle="solid"
        size="large"
        onChange={handleLetterChange}
      >
        <Space direction="vertical">
          <Radio.Button style={styles.letterButton} value="X">
            X
          </Radio.Button>
          <Radio.Button style={styles.letterButton} value="O">
            O
          </Radio.Button>
        </Space>
      </Radio.Group>

      {letter && (
        <Title style={{ color: "#ebc334" }}>
          Whom do you want to play with?
        </Title>
      )}

      {letter && (
        <Radio.Group buttonStyle="solid" onChange={handlePlayerChange}>
          <Space direction="vertical">
            <Radio.Button style={styles.playerButton} value="computer">
              1 Player
            </Radio.Button>
            <Radio.Button style={styles.playerButton} value="human">
              2 Player
            </Radio.Button>
          </Space>
        </Radio.Group>
      )}

      {letter && player && (
        <Button
          style={styles.startButton}
          type="primary"
          danger
          size="large"
          onClick={handleStartGame}
        >
          Start Game!!
        </Button>
      )}
    </div>
  );
};

export default Start;
