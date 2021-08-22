let canvas = document.querySelector("#canvas");
let numberOfCells = 64;
let side = 500/numberOfCells;


for(let i = 1; i <= numberOfCells ; i++){
    for(let k = 1; k <= numberOfCells ; k++){
        const cell = document.createElement("div");
        cell.classList.add("box");
        canvas.appendChild(cell);
        console.log("test");

    }
}

let cells = document.querySelectorAll(".box");

cells.forEach((cell)=>{
    cell.style.width = side +"px";
    cell.style.height = side +"px";
});

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.background= "black";
    })
});

    
