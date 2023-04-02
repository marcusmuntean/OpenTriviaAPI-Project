import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

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
      <Board data={value} />
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

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
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

  const order = [0, 1, 2, 3];

  // if (correct == undefined) {
  //   shuffle(order);
  // }

  const arrayOfChoices = props.incorrectAnswer;
  arrayOfChoices.push(props.correctAnswer);

  const HandleClick = (choice) => {
    if (choice == props.correctAnswer) {
      SetCorrect("Correct!");
    } else {
      SetCorrect("Incorrect!");
    }
  };

  return (
    <>
      <h2>
        {props.questionNumber}: {props.questionToAsk}
      </h2>
      <Button
        variant="contained"
        onClick={() => HandleClick(arrayOfChoices[order[0]])}
      >
        {arrayOfChoices[order[0]]}
      </Button>
      <p></p>
      <Button
        variant="contained"
        onClick={() => HandleClick(arrayOfChoices[order[1]])}
      >
        {arrayOfChoices[order[1]]}
      </Button>
      <p></p>
      <Button
        variant="contained"
        onClick={() => HandleClick(arrayOfChoices[order[2]])}
      >
        {arrayOfChoices[order[2]]}
      </Button>
      <p></p>
      <Button
        variant="contained"
        onClick={() => HandleClick(arrayOfChoices[order[3]])}
      >
        {arrayOfChoices[order[3]]}
      </Button>
      <h4>{correct}</h4>
    </>
  );
}

export default App;
