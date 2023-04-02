import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function App() {
  const [value, setValue] = useState({});

  useEffect(() => {
    getJSON(setValue);
  }, []);

  const getJSON = (setData) => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
    )
      .then((result) => result.json())
      .then((data) => setData(data.results));
  };

  return (
    <>
      <div className="App">
        <Board data={value} />
      </div>
    </>
  );
}

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

function Question(props) {
  const [correct, SetCorrect] = useState();
  const [order] = useState(shuffle([0, 1, 2, 3]));

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  //const order = [0, 1, 2, 3];
  let questionNum = props.questionNumber;
  questionNum++;

  // if (correct == undefined) {
  //   shuffle(order);
  // }

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

export default App;
