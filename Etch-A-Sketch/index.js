const input = document.querySelector("input");
const entryBtn = document.querySelector(".entry-btn");
const resetBtn = document.querySelector(".reset-btn");
const squareContainer = document.querySelector(".square-container");
const lowToHigh = document.querySelector(".low-to-high");
const highToLow = document.querySelector(".high-to-low");

squareContainer.style.display = "flex";
squareContainer.style.gap = "0px";
squareContainer.style.flexWrap = "wrap";

function createSquare(size) {
    const div = document.createElement("div");
    div.setAttribute("class", "grid-group");
    div.style.margin = "0px";
    div.style.border = "1px solid #6295A2";
    div.style.width = size;
    div.style.height = size;
    div.style.opacity = 0.5;
    squareContainer.appendChild(div);
}

for (let i = 0; i < 8 ; i++) {
    for (let j = 0; j < 8; j++) {
        createSquare(100/8 - 0.331 + "%");
    }
}

entryBtn.addEventListener("click", (event) => {
    if (input.value == "") {
        alert("Please enter a number");
    }
    else {
        squareContainer.innerHTML = "";
        let flag = false;
        let gridCount = parseInt(input.value);
        gridCount = Math.min(gridCount, 100);
        let size = 100/gridCount - 0.331+ "%";
        for (let i = 0; i < gridCount ; i++) {
            for (let j = 0; j < gridCount; j++) {
                createSquare(size);
            }
        }        

        const gridItems = document.querySelectorAll(".grid-group");
        lowToHigh.addEventListener("click", (event)=>{
            flag = true;
            gridItems.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.backgroundColor = "grey";
                let currentOpacity = parseFloat(item.style.opacity);
                item.style.opacity = Math.min(currentOpacity * 1.1, 1);
                });
            });
        });
        highToLow.addEventListener("click", (event)=>{
            flag = true
            gridItems.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.backgroundColor = "grey";
                let currentOpacity = parseFloat(item.style.opacity);
                item.style.opacity = Math.max(currentOpacity * 0.9, 0.0001);
                });
            });
        });
        if (flag === false) {
            gridItems.forEach(item => {
                item.addEventListener("mouseenter", () => {
                    item.style.backgroundColor = "grey";
                    let currentOpacity = parseFloat(item.style.opacity);
                    item.style.opacity = Math.min(currentOpacity * 1.1, 1);
                    });
                });
        }
        

    }
});

resetBtn.addEventListener("click", (event) => {
    squareContainer.innerHTML = "";
});