import Button from "@mui/material/Button";
import React, { useState } from "react";

function Answer(props) {
  const [color, SetColor] = useState();

  const HandleClick = (choice) => {
    if (choice === props.correctAnswer) {
      SetColor("success");
      props.stateChanger("Correct!");
    } else {
      SetColor("error");
      props.stateChanger("Incorrect!");
    }
  };

  return (
    <Button
      variant="contained"
      color={color}
      onClick={() => HandleClick(props.answerChoice)}
    >
      {props.answerChoice}
    </Button>
  );
}

export default Answer;
