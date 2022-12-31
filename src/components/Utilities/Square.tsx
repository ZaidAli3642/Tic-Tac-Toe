import React from "react";
import { Button } from "antd";

interface Props {
  value: string;
  index: number;
  handleClick: (index: number) => void;
}

const styles = {
  square: {
    height: "120px",
    width: "120px",
    backgroundColor: "#eb8034",
    fontSize: "50px",
    color: "red",
    fontWeight: "bold",
  },
};

const Square: React.FC<Props> = ({ value, index, handleClick }) => {
  return (
    <Button style={styles.square} onClick={() => handleClick(index)}>
      {value}
    </Button>
  );
};

export default Square;
