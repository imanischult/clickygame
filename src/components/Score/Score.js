import React from "react";
import "./Score.css";

function Score(props) {
  return (
    <div>
      <p>{props.guessedCorrectly}</p>
      <ul className="navbar-nav mr-auto">
        <li>Score: {props.score}</li>
        <li>Top Score: {props.topScore}</li>
      </ul>
    </div>
  );
}
export default Score;
