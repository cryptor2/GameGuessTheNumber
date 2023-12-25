"use strict";

const correctAnsSound = new Audio("./correctAns.mp3");
const wrongAnsSound = new Audio("./wrongAns.mp3");
const highScoreSound = new Audio("./highScore.mp3");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No Number");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    correctAnsSound.play();
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScoreSound.play();
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != secretNumber) {
    wrongAnsSound.play();
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  console.log(secretNumber);
});

/*
<iframe
  width="110"
  height="200"
  src="https://www.myinstants.com/instant/duolingo-correct-95922/embed/"
  frameborder="0"
  scrolling="no"
></iframe>;
*/
