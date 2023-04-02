import React from "react";
import Question from "./Question";

function Board(props) {
  return (
    <>
      {Object.keys(props.data).map((question) => (
        <Question
          questionNumber={question}
          questionToAsk={props.data[question].question}
          correctAnswer={props.data[question].correct_answer}
          incorrectAnswer={props.data[question].incorrect_answers}
        />
      ))}
    </>
  );
}

export default Board;
