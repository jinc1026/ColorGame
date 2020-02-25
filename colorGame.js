var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
};

function setupSquares(){
	for (var i=0; i<squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	};
};



function setupModeButtons(){
	for (var i=0; i<modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");

				// Ternary Operator
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;		
				// if(this.textContent === "Easy"){
				// 	numSquares = 3;
				// } else {
				// 	numSquares = 6;
				// }

				reset();

				//figure out how many squares to show
				//pick new colors
				//pick a new pickedColor
				//update page to reflect changes

		});
	};
};


function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
};


resetButton.addEventListener("click", function(){
	reset();
});


function changeColor(color){
	// loop through all squares
	for (var i=0; i<colors.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	};
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	//make an array
	var arr = [];
	
	//add num random colors to arr
	for(var i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return that array
	return arr;
};

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
};




