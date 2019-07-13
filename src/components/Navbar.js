import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav>
        <h1>Clicky Game</h1>
        <ul>
          <li>{props.guessedCorrectly}</li>
          <li>Score: {props.score}</li>
          <li>Top Score: {props.topScore}</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
