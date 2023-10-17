//get grid div
const grid = document.getElementById("grid");
const createButton = document.getElementsByClassName("create");

let createGrid = (width, height) => {
  let gridSquares = width * height;
  for (let i = 0; i < gridSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    let flexBase = 100 / width;
    square.style.flexBasis = `${flexBase}%`;

    grid.appendChild(square);
  }
};

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) {
    e.target.classList.add("changeColor");
  }
});
let createNewGrid = () => {
  let width = parseInt(
    prompt(
      "please enter the width of the grid in squares (ex 16 if you want to be 16 squares wide"
    )
  );
  let height = parseInt(
    prompt(
      "please enter the height of the grid in squares (ex 16 if you want to be 16 squares wide"
    )
  );
  if (height < 100 && width < 100) {
    createGrid(width, height);
  } else {
    alert("Try again make sure the width and heigt inputs dont excede 100");
  }
};
