let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".reset");
let turn = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
    // if (boxes.every((box) => box.disabled === true)) {
    //   document.getElementById("message").innerText = "It's a Draw";
    // } draw message to be added
  });
});
let resetGame = () => {
  turn = true;
  document.getElementById("message").innerText = "";
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        document.getElementById("message").innerText = pos1val + " is Winner";
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
};
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "moon.png";
  } else {
    icon.src = "sun.png";
  }
};
