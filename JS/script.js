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
/**********************VARIABLES**********************/
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
  if (!state) {
    currentScore1 += randomNum;
    cScore1.textContent = currentScore1;
  } else {
    currentScore2 += randomNum;
    cScore2.textContent = currentScore2;
  }
});

hold.addEventListener("click", function () {
  state = !state;
  player1.classList.toggle("focus");
  player2.classList.toggle("focus");
});
