import React, { useState } from "react";


function EightBall({ answers }) {
  // useState declarations
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Think of a question");

  // click handler
  function clickHandler() {
    const index = getRandomIntInclusive(0, answers.length - 1);
    setColor(answers[index].color);
    setText(answers[index].text);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  // styling
  const EightBallStyle = { backgroundColor: { color } };

  // return JSX
  return (
    <div className="EightBall" onClick={clickHandler} style={EightBallStyle}>
      {text}
    </ div>
  );
};


