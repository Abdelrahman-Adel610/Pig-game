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
});
