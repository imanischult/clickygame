import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      {/* <nav>
        <h1>Clicky Game</h1>
        <ul>
          <li>{props.guessedCorrectly}</li>
          <li>Score: {props.score}</li>
          <li>Top Score: {props.topScore}</li>
        </ul>
      </nav> */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="row mx-auto">
          <span className="navbar-brand mb-0 h1">Remember HER</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
