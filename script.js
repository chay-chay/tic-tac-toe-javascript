const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById('board');
let circleTurn;

startGame()
function startGame() {
    circleTurn = false;
    cellElements.forEach((cell) => {
      // console.log(cell)
    cell.addEventListener("click", handleClick, { once: true });
    });
    setBoardHoverClss();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  //place mark
  placeMark(cell, currentClass);
  swapTurns()
  setBoardHoverClss()
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

function setBoardHoverClss() {
board.classList.remove(X_CLASS);
board.classList.remove(CIRCLE_CLASS)
if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
} else {
    board.classList.add(X_CLASS)
}
}