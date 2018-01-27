var colorDisplay = document.querySelector("#colorDisplay");
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var restart = document.querySelector("#restart");
var message = document.querySelector("#message");
var levelEasy = document.querySelector("#levelEasy");
var levelHard = document.querySelector("#levelHard");
var hard = true;
var div = document.querySelectorAll("#container div");
var win = "";

for(k = 0; k < div.length; k++) {
  div[k].addEventListener("click", function(){
    if(this.style.backgroundColor === win) {
      var square = document.querySelectorAll(".square");
      for(j = 0; j < square.length; j++) {
        square[j].style.backgroundColor = win;
      }
      h1.style.backgroundColor = win;
      message.textContent = "Correct!";
    } else {
      this.style.backgroundColor = "#232323"
      message.textContent = "Try again";
    }
  })
}

generateColors();

function checkLevel() {
  if(hard === true) {
    document.querySelectorAll("#container div")[3].classList.add("square");
    document.querySelectorAll("#container div")[4].classList.add("square");
    document.querySelectorAll("#container div")[5].classList.add("square");
    generateColors();
  } else {
    document.querySelectorAll("#container div")[3].classList.remove("square");
    document.querySelectorAll("#container div")[4].classList.remove("square");
    document.querySelectorAll("#container div")[5].classList.remove("square");
    generateColors();
  }
}

//Toggle levels
levelEasy.addEventListener("click", function() {
  hard = false;
  newGame();
  levelEasy.classList.add("selected");
  levelHard.classList.remove("selected");
  checkLevel();
});

levelHard.addEventListener("click", function() {
  hard = true;
  newGame();
  levelEasy.classList.remove("selected");
  levelHard.classList.add("selected");
  checkLevel();
});

// function win() {
//   for(j = 0; j < square.length; j++) {
//     square[j].style.backgroundColor = square[x].style.backgroundColor;
//   }
//   h1.style.backgroundColor = square[x].style.backgroundColor;
//   message.textContent = "Correct!";
// }
//
// function tryAgain() {
//   this.style.backgroundColor = "#232323"
//   message.textContent = "Try again";
// }

// Generate Colors
function generateColors() {
  var square = document.querySelectorAll(".square");
  var x = Math.floor(Math.random() * square.length);
  for(i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = "RGB(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
  }

  win = square[x].style.backgroundColor;
  colorDisplay.innerHTML = win;
}

//New Colors
function newGame() {
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
  generateColors();
}

restart.addEventListener("click", newGame);
