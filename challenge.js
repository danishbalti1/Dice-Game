var scores, roundScores, activePlayers, gamePlaying;
inIt();

var lastDice;

document.querySelector(".btn-roll").addEventListener("click", function () {
  //Do Something here

  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;

    //display the result

    var diceDOM = document.querySelector(".dice");

    diceDOM.style.display = "block";

    diceDOM.src = "dice-" + dice + ".png";

    //update the round socre using if statemnt

    if (dice === 6 && lastDice === 6) {
      scores[activePlayer] = 0;

      document.querySelector("#score-" + activePlayer).textContent = "0";
      nextPlayer();
    } else {
    }

    if (dice !== 1) {
      // Add Score

      roundScores += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScores;
    } else {
      //Next Player

      nextPlayer();
    }
    lastDice = dice;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add curent score to globar score

    scores[activePlayer] += roundScores;

    //update the UIe

    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document.querySelector(".dice").style.display = "none";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }

  // Check if the player won the game
});

function nextPlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  roundScores = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", inIt);

function inIt() {
  scores = [0, 0];
  roundScores = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
