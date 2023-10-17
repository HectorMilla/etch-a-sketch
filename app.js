//get grid div
const grid = document.getElementById("grid");
let gridSquares = 16;
for (let i = 0; i < gridSquares; i++) {
  const square = document.createElement("div");
  square.innerHTML = "hi";
  grid.appendChild(square);
}
