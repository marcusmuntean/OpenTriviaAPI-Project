import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Answer from "./Answer";

function Question(props) {
  const [correct, SetCorrect] = useState();
  const [order] = useState(shuffle([0, 1, 2, 3]));

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  let questionNum = props.questionNumber;
  questionNum++;

  const arrayOfChoices = props.incorrectAnswer;
  arrayOfChoices.push(props.correctAnswer);

  return (
    <>
      <Typography variant="h4">
        {questionNum}: {props.questionToAsk}
      </Typography>
      <p></p>
      <Answer
        answerChoice={arrayOfChoices[order[0]]}
        correctAnswer={props.correctAnswer}
        stateChanger={SetCorrect}
      />
      <p></p>
      <Answer
        answerChoice={arrayOfChoices[order[1]]}
        correctAnswer={props.correctAnswer}
        stateChanger={SetCorrect}
      />
      <p></p>
      <Answer
        answerChoice={arrayOfChoices[order[2]]}
        correctAnswer={props.correctAnswer}
        stateChanger={SetCorrect}
      />
      <p></p>
      <Answer
        answerChoice={arrayOfChoices[order[3]]}
        correctAnswer={props.correctAnswer}
        stateChanger={SetCorrect}
      />
      <p></p>
      <p></p>
      <Typography variant="h6">{correct}</Typography>
      <Divider />
      <p></p>
    </>
  );
}

export default Question;
