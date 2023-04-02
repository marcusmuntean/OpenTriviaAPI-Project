import "./App.css";
import React, { useState, useEffect } from "react";
import Board from "./components/Board";

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

export default App;
