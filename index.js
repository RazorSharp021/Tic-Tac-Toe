var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var box7 = document.querySelector("#box7");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");
var clickNum = 0;
var win = false;
var gameStat = document.querySelector("h2");
var resButton = document.querySelector(".restart-btn");

function mark(event) {
  var boxClicked = event.target;
  if (boxClicked.textContent === "" && clickNum % 2 === 0) {
    boxClicked.textContent = "X";
    clickNum++;
    if (
      box1.textContent === "X" &&
      box2.textContent === "X" &&
      box3.textContent === "X"
    ) {
      win = true;
      gameStat.textContent = "Player One Wins!";
      playerChoice.removeEventListener("click", mark);
    } else if (
      box1.textContent === "X" &&
      box4.textContent === "X" &&
      box7.textContent === "X"
    ) {
      win = true;

      gameStat.textContent = "Player One Wins!";
      playerChoice.removeEventListener("click", mark);
    } else if (
      box1.textContent === "X" &&
      box5.textContent === "X" &&
      box9.textContent === "X"
    ) {
      win = true;
      gameStat.textContent = "Player One Wins!";
      playerChoice.removeEventListener("click", mark);
    } else if (
      box2.textContent === "X" &&
      box5.textContent === "X" &&
      box8.textContent === "X"
    ) {
      win = true;
      gameStat.textContent = "Player One Wins!";
      playerChoice.removeEventListener("click", mark);
    } else if (
      box3.textContent === "X" &&
      box6.textContent === "X" &&
      box9.textContent === "X"
    ) {
      win = true;
      gameStat.textContent = "Player One Wins!";
      playerChoice.removeEventListener("click", mark);
    } else if (
      box3.textContent === "X" &&
      box5.textContent === "X" &&
      box7.textContent === "X"
    ) {
      win = true;
      gameStat.textContent = "Player One Wins!";
      playerChoice.removeEventListener("click", mark);
    } else if (
      box4.textContent === "X" &&
      box5.textContent === "X" &&
      box6.textContent === "X"
    ) {
      win = true;
      gameStat.textContent = "Player One Wins!";
      playerChoice.removeEventListener("click", mark);
    } else if (
      box7.textContent === "X" &&
      box8.textContent === "X" &&
      box9.textContent === "X"
    ) {
      win = true;
      gameStat.textContent = "Player One Wins!";
      playerChoice.removeEventListener("click", mark);
    } else if (clickNum === 9 && win === false) {
      gameStat.textContent = "!DRAW!";
      playerChoice.removeEventListener("click", mark);
    }
  } else {
    if (boxClicked.textContent === "") {
      boxClicked.textContent = "O";
      clickNum++;
      if (
        box1.textContent === "O" &&
        box2.textContent === "O" &&
        box3.textContent === "O"
      ) {
        win = true;
        gameStat.textContent = "Player Two Wins!";
        playerChoice.removeEventListener("click", mark);
      } else if (
        box1.textContent === "O" &&
        box4.textContent === "O" &&
        box7.textContent === "O"
      ) {
        win = true;
        gameStat.textContent = "Player Two Wins!";
        playerChoice.removeEventListener("click", mark);
      } else if (
        box1.textContent === "O" &&
        box5.textContent === "O" &&
        box9.textContent === "O"
      ) {
        win = true;
        gameStat.textContent = "Player Two Wins!";
        playerChoice.removeEventListener("click", mark);
      } else if (
        box2.textContent === "O" &&
        box5.textContent === "O" &&
        box8.textContent === "O"
      ) {
        win = true;
        gameStat.textContent = "Player Two Wins!";
        playerChoice.removeEventListener("click", mark);
      } else if (
        box3.textContent === "O" &&
        box6.textContent === "O" &&
        box9.textContent === "O"
      ) {
        win = true;
        gameStat.textContent = "Player Two Wins!";
        playerChoice.removeEventListener("click", mark);
      } else if (
        box3.textContent === "O" &&
        box5.textContent === "O" &&
        box7.textContent === "O"
      ) {
        win = true;
        gameStat.textContent = "Player Two Wins!";
        playerChoice.removeEventListener("click", mark);
      } else if (
        box4.textContent === "O" &&
        box5.textContent === "O" &&
        box6.textContent === "O"
      ) {
        win = true;
        gameStat.textContent = "Player Two Wins!";
        playerChoice.removeEventListener("click", mark);
      } else if (
        box7.textContent === "O" &&
        box8.textContent === "O" &&
        box9.textContent === "O"
      ) {
        win = true;
        gameStat.textContent = "Player Two Wins!";
        playerChoice.removeEventListener("click", mark);
      } else if (clickNum === 9 && win === false) {
        gameStat.textContent = "DRAW!";
        playerChoice.removeEventListener("click", mark);
      }
    }
  }
}

var playerChoice = document.querySelector(".game-board");
playerChoice.addEventListener("click", mark);

resButton.addEventListener("click", function () {
  window.location.reload();
});
// window.onload = function () {
//   document.getElementById("#sound-track").play();
// };
