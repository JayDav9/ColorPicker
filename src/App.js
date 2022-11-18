import "./App.css";
import React, { useState } from "react";
function App() {
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function correctGuess() {
    setScore(score + 1);
    changeGameColor();
  }

  function wrongGuess() {
    setScore(0);
    changeGameColor();
  }
  function changeGameColor() {
    let newColor = getRandomColor();
    setCurrentColor(newColor);
    getNewColors(newColor);
  }

  function getNewColors(correctColor) {
    let newColors = [correctColor, getRandomColor(), getRandomColor()];
    let shuffledColors = newColors
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setButtonColors(shuffledColors);
  }

  //get state

  const [currentColor, setCurrentColor] = useState(getRandomColor());
  let initialButtonColors = [currentColor, getRandomColor(), getRandomColor()];

  const [buttonColors, setButtonColors] = useState(initialButtonColors);

  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className="score">Score: {score} <br></br>
      <span># </span> <span style = {{color:"red"}}>FF</span> <span style = {{color:"green"}}>FF</span> <span style = {{color:"blue"}}>FF</span>
      </div>

      <div className={"currentColor"} style={{ backgroundColor: currentColor }}>
        {" "}
      </div>

      <div className="buttonArea">
        {buttonColors.map((color) => {
          return (
            <button
              key={color}
              onClick={color === currentColor ? correctGuess : wrongGuess}
            >
              {color}
            </button>
          );
        })}
      </div>

      <br></br>
      {/* <button onClick={changeGameColor}>{buttonColors[0]}</button> */}
      {/* <p>Answer : {currentColor}</p> */}
    </div>
  );
}

export default App;
