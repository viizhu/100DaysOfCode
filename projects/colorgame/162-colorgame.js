var colorDisplay = document.querySelector("#colorDisplay");
var square = document.querySelectorAll(".square");
var x = Math.floor(Math.random() * square.length);

for(i = 0; i < square.length; i++) {
  square[i].style.background = "RGB(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";

  if(i === x) {
    square[x].addEventListener("click", function() {
      for(j = 0; j < square.length; j++) {
        square[j].style.background = square[x].style.background;
      }
    });
  } else {
    square[i].addEventListener("click", function() {
      this.style.background = "#232323"
    });
  }
}

colorDisplay.innerHTML = square[x].style.background;
