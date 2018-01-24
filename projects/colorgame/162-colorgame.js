var colorDisplay = document.querySelector("#colorDisplay");
var square = document.querySelectorAll(".square");
var x = Math.floor(Math.random() * square.length);
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var restart = document.querySelector("#restart");
var message = document.querySelector("#message");
var levelEasy = document.querySelector("#levelEasy");
var levelHard = document.querySelector("#levelHard");

for(i = 0; i < square.length; i++) {
  square[i].style.background = "RGB(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";

  if(i === x) {
    square[x].addEventListener("click", function() {
      for(j = 0; j < square.length; j++) {
        square[j].style.background = square[x].style.background;
      }
      h1.style.background = square[x].style.background;
      message.textContent = "Correct!";
    });
  } else {
    square[i].addEventListener("click", function() {
      this.style.background = "#232323"
      message.textContent = "Try again";
    });
  }
}

colorDisplay.innerHTML = square[x].style.background;

restart.addEventListener("click", function() {
  window.location.reload(true);
});
