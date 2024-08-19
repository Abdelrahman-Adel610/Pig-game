"use strict";
/**********************ELEMENTS**********************/
let info = document.querySelector(".info");
let layout = document.querySelector(".layout");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".modal i");
/**********************UTILITIES**********************/
function removeModal() {
  layout.classList.add("hidden");
  modal.classList.add("hidden");
}
/**********************EVENTS**********************/
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
