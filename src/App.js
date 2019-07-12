import React, { Component } from "react";
import "./App.css";
// import "../public";
const photos = require("./photos");

function Navbar(props) {
  return (
    <div>
      <nav>
        <h1> Clicky Game</h1>
        <ul>
          <li>Score: {props.score}</li>
          <li>Top Score: {props.topScore}</li>
        </ul>
      </nav>
    </div>
  );
}

class Game extends Component {
  state = {
    score: 0,
    topScore: 0,
    photos
  };

  handleClick = event => {
    console.log(event);
  };

  render() {
    const { score, topScore, photos } = this.state;

    return (
      <div>
        <Navbar score={score} topScore={topScore} />
        {photos.map(photo => {
          return (
            <img
              onClick={this.handleClick}
              key={photo}
              src={`/assets/${photo}`}
              height="300"
              width="350"
              alt={photo}
            />
          );
        })}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
