let canvas = document.querySelector("#canvas");
let numberOfCells = 32;
let side = 700 / numberOfCells;

createCells(numberOfCells, side, canvas);

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetCells);

let brush = 1;
const blackBrush = document.querySelector("#blackBrush");
blackBrush.addEventListener("click", () => {
    brush = 0;
});
const rainbowBrush = document.querySelector("#rainbowBrush");
rainbowBrush.addEventListener("click", () => {
    brush = 1;
});

paintCanvas();

function paintCanvas() {
    let cells = document.querySelectorAll(".box");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", paint)
    });
}
function paint(e) {
    if (brush == 0) {
        this.style.background = "black";
    }
    if (brush == 1) {
        this.style.background = getRandomColor();
    }
}
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createCells(numberOfCells, side, canvas) {
    for (let i = 1; i <= numberOfCells; i++) {
        for (let k = 1; k <= numberOfCells; k++) {
            const cell = document.createElement("div");
            cell.classList.add("box");
            canvas.appendChild(cell);
        }
    }

    let cells = document.querySelectorAll(".box");

    cells.forEach((cell) => {
        cell.style.width = side + "px";
        cell.style.height = side + "px";
    });
}
function resetCells() {
    let className = "box"
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    createCells(numberOfCells, side, canvas);
    paintCanvas();
}