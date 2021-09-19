const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;
cellElements.forEach((cell) => {
  // console.log(cell)
cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  //place mark
  placeMark(cell, currentClass);
  swapTurns()
  // check for Win
  // check for Draw
  // switch Turns
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn
}