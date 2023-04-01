import "./App.css";
import React, { useState, useEffect } from "react";

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
      <div className="App"></div>
      <Board data={value} />
    </>
  );
}

function Board(props) {
  return (
    <>
      <p>{JSON.stringify(props.data)}</p>
    </>
  );
}

//function Question() {}

export default App;
