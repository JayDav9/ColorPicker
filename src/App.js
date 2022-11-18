import "./App.css";
import React, { useState } from "react";
function App() {
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function changeGameColor() {
    let newColor = getRandomColor();
    setCurrentColor(newColor);
    getNewColors(newColor)

  
  }

  function getNewColors(correctColor) {
    let newColors = [correctColor, getRandomColor(), getRandomColor()];
    let shuffledColors = newColors
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);



    setButtonColors(shuffledColors);

  }

  const [currentColor, setCurrentColor] = useState(getRandomColor());
  let initialButtonColors = [currentColor, getRandomColor(), getRandomColor()];

  const [buttonColors, setButtonColors] = useState(initialButtonColors);

  return (
    <div className="App">
      <div style={{ backgroundColor: currentColor, height: "500px" }}> </div>

      {buttonColors.map((color) => {
        return (
          <button
            key={color}
            onClick={color === currentColor ? changeGameColor : null}
          >
            {color}
          </button>
        );
      })}

<br></br>
      {/* <button onClick={changeGameColor}>{buttonColors[0]}</button> */}
      <p>Answer : {currentColor}</p>
    </div>
  );
}

export default App;
