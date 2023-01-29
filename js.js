let currentPlayer = "X";
let gameOver = false;

const cells = document.getElementsByClassName("cell");
const resetButton = document.getElementById("reset");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function (event) {
    if (!gameOver) {
      if (event.target.textContent === "") {
        event.target.textContent = currentPlayer;

        if (checkForWin()) {
          gameOver = true;
          alert(currentPlayer + " wins!");
        } else if (checkForTie()) {
          gameOver = true;
          alert("It's a tie!");
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    }
  });
}

resetButton.addEventListener("click", function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  currentPlayer = "X";
  gameOver = false;
});

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
      return true;
    }
  }
  return false;
}

function checkForTie() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}
