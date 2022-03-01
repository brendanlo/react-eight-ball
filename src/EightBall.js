import React, { useState } from "react";


/**
 * Component emulates EightBall toy. On click changes color and response by pulling
 * randomly from pre-determined array of answers.
 * 
 * Props: answers = [{msg, color},...]
 * 
 * State
 * - color: a string used to update CSS background-color
 * - text: a string displayed in center of our component
 * 
 *  App -> EightBall
 */

function EightBall({ answers }) {
  // useState declarations
  //CR: could use an object instead of two variables and two useStates
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Think of a question");

  // CR example for combined states as one piece of state
  // const [answer, setAnswer] = useState({color: "black", text: "Think of a question"});
  // setAnswer({color: "Red" , text: "test"})

  // click handler
  // CR: call this handleClick (verb first)
  function clickHandler() {
    const index = getRandomIntInclusive(0, answers.length - 1);
    setColor(answers[index].color);
    setText(answers[index].msg);
  }

  // CR: consider putting this in a helper file with utility functions
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  // CR: Create a CSS file to reduce component bloat
  // styling
  const EightBallStyle = {
    color: "white",
    position: "relative",
    padding: "50px",
    width: "100px",
    height: "100px",
    backgroundColor: color,
    borderRadius: "100%"
  };

  const TextStyle = {
    textAlign: "center",
    paddingTop: "25px"
  }

  // return JSX
  return (
    <div className="EightBall" onClick={clickHandler} style={EightBallStyle}>
      <div className="EightBall-text" style={TextStyle}>
        <b>
        {text}
        </b>
      </div>
    </ div>
  );
};

export default EightBall;