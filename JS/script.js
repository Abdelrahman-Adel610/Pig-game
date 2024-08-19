"use strict";
/**********************ELEMENTS**********************/
let info = document.querySelector(".info");
let layout = document.querySelector(".layout");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".modal i");
let btns = document.querySelectorAll("button");
let newGame = btns[0];
let rollDice = btns[1];
let hold = btns[2];
let diceImage = document.querySelector(".btns img");
let player1 = document.querySelector(".p1 ");
let player2 = document.querySelector(".p2 ");
let cScore1 = document.querySelector(".p1 .crnt-score");
let cScore2 = document.querySelector(".p2 .crnt-score");
let fScore1 = document.querySelector(".sc1");
let fScore2 = document.querySelector(".sc2");
/**********************VARIABLES**********************/
let bank1 = 0;
let bank2 = 0;
let currentScore1 = 0;
let currentScore2 = 0;
let state = 0;
// 0 ==>player 1 is currently playing
// 1 ==>player 2 is currently playing

/**********************UTILITIES**********************/
function removeModal() {
  layout.classList.add("hidden");
  modal.classList.add("hidden");
}
function updateCurrentScores() {
  cScore1.textContent = currentScore1;
  cScore2.textContent = currentScore2;
}
function updateFinalScores() {
  fScore1.textContent = bank1;
  fScore2.textContent = bank2;
}
function takeTurns() {
  if (!state) {
    bank1 += currentScore1;
    currentScore1 = 0;
  } else {
    bank2 += currentScore2;
    currentScore2 = 0;
  }
  updateCurrentScores();
  updateFinalScores();
  state = !state;
  player1.classList.toggle("focus");
  player2.classList.toggle("focus");
}
function resetGame() {
  bank1 = 0;
  bank2 = 0;
  currentScore1 = 0;
  currentScore2 = 0;
  state = 0;
  if (!player1.classList.contains("focus")) {
    player1.classList.toggle("focus");
    player2.classList.toggle("focus");
  }
  updateCurrentScores();
  updateFinalScores();
}
/**********************EVENTS**********************/
/*modal window events*/
info.addEventListener("click", function () {
  layout.classList.remove("hidden");
  modal.classList.remove("hidden");
});
closeModal.addEventListener("click", function () {
  removeModal();
});
layout.addEventListener("click", function () {
  removeModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    removeModal();
  }
});
/*Game events*/

rollDice.addEventListener("click", function () {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  diceImage.classList.remove("hidden");
  diceImage.setAttribute("src", `Images/dice-${randomNum}.png`);
  if (randomNum !== 1) {
    if (!state) {
      currentScore1 += randomNum;
    } else {
      currentScore2 += randomNum;
    }
    updateCurrentScores();
  } else {
    currentScore1 = currentScore2 = 0;
    takeTurns();
  }
});

hold.addEventListener("click", function () {
  takeTurns();
});
newGame.addEventListener("click", function () {
  resetGame();
});
