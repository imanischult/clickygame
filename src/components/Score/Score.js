import React from "react";
import "./Score.css";

function Score(props) {
  return (
    <div>
      <p className="text instuct">{props.guessedCorrectly}</p>
      <ul className="navbar-nav mr-auto">
        <li className="text score">Score: {props.score}</li>
        <li className="text score">Top Score: {props.topScore}</li>
      </ul>
    </div>
  );
}
export default Score;
