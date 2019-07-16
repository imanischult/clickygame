import React, { Component } from "react";
import Score from "../Score/Score";
import Navbar from "../Navbar/Navbar";
import "./Game.css";

// import "./App.css";
const photos = require("../Photos/photos");

// https://www.netlify.com/blog/2017/01/12/common-javascript-functions-with-lodash/
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Game extends Component {
  state = {
    score: 0,
    topScore: 0,
    photos,
    clickedPics: [],
    guessedCorrectly: "Click An Image To Begin"
  };

  handleClick = photo => {
    const hasBeenClicked = this.state.clickedPics.find(function(pic) {
      return pic === photo;
    });

    if (hasBeenClicked) {
      // reset the game because user lost
      this.setState({
        score: 0,
        clickedPics: [],
        guessedCorrectly: "You Guessed Wrong!"
      });
      return;
    }

    // if user picked the right one
    const newScore = this.state.score + 1;
    const newPhotoOrder = shuffle(this.state.photos);

    if (newScore > this.state.topScore) {
      this.setState({
        score: newScore,
        topScore: newScore,
        clickedPics: [photo, ...this.state.clickedPics],
        photos: newPhotoOrder,
        guessedCorrectly: "Right!"
      });
    } else {
      this.setState({
        score: newScore,
        clickedPics: [photo, ...this.state.clickedPics],
        photos: newPhotoOrder,
        guessedCorrectly: "Right!"
      });
    }
  };

  render() {
    const { score, topScore, photos, guessedCorrectly } = this.state;

    return (
      <div>
        <Navbar />
        <Score
          score={score}
          topScore={topScore}
          guessedCorrectly={guessedCorrectly}
        />
        <div className="container">
          {photos.map(photo => {
            return (
              <div
                className="picDiv"
                onClick={event => {
                  this.handleClick(photo);
                }}
                key={photo}
              >
                <img
                  src={`/assets/${photo}`}
                  height="575"
                  width="490"
                  alt={photo}
                />
              </div>
            );
          })}
        </div>

        {/* Below lines were create to visibly keep track of clicked pics */}
        {/* {clickedPics.map((pic, index) => (
            <div key={pic + index}>{pic}</div>
          ))} */}
      </div>
    );
  }
}

export default Game;
