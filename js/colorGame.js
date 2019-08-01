let numCircles = 9;
let colors = [];
let pickedColor;
let circles = document.querySelectorAll(".circle");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.getElementById("header");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupCircles();
    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            modeButtons[2].classList.remove("selected")
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numCircles = 3;
            } else if (this.textContent === "Hard") {
                numCircles = 6;
            } else {
                numCircles = 9;
            }
            reset();
        });
    }
}
        
function setupCircles() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function() {
           let clickedColor = this.style.backgroundColor;
           if (clickedColor === pickedColor) {
               messageDisplay.textContent = "Correct!";
               resetButton.textContent = "Play Again?"
               changeColors(clickedColor);
               h1.style.backgroundColor = clickedColor;
           } else {
               this.style.backgroundColor = "white";
               messageDisplay.textContent = "Try Again";
           }
        });
    }
}

function reset() {
    colors = generateRandomColors(numCircles);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (let i = 0; i < circles.length; i++) {
        if (colors[i]) {
            circles[i].style.display = "block";
            circles[i].style.backgroundColor = colors[i];
        } else {
            circles[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "white";
}

resetButton.addEventListener("click", function() {
    reset();
})

function changeColors(color) {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }

    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}