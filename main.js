const area = document.getElementById("area");
let move = 0;
let result = "";
const contentWrapper = document.getElementById("content");
const modalResult = document.getElementById("modal-result-wrapper");
const overlay = document.getElementById("overlay");
const btnClose = document.getElementById("btn-close");

area.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "0");
    move++;
    check();
  }
});

function check() {
  const boxes = document.getElementsByClassName("box");
  const arr = [
    [0, 1, 2],
    [3, 4, 5], //выигрыш по горизонтали
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7], //выигрыш по вертикали
    [2, 5, 8],

    [0, 4, 8], //выигрыш по диагонали
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML === "X" &&
      boxes[arr[i][1]].innerHTML === "X" &&
      boxes[arr[i][2]].innerHTML === "X"
    ) {
      result = "победили крестики";
      prepareResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML === "0" &&
      boxes[arr[i][1]].innerHTML === "0" &&
      boxes[arr[i][2]].innerHTML === "0"
    ) {
      result = "победили нолики";
      prepareResult(result);
    }
  }
  console.log(move);

  if (move === 9 && result != "крестики" && result != "нолики") {
    result = "ничья";
    prepareResult(result);
  }
}

function prepareResult(winner) {
  contentWrapper.innerHTML = `Результат :  ${winner} !`;
  modalResult.style.display = "block";
}

function closeModal() {
  modalResult.style.display = "none";
  location.reload();
}

overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
