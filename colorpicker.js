var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor;
  for(var i=0;i<square.length;i++)
  {
    if(colors[i])
    square[i].style.backgroundColor = colors[i];
    else {
      square[i].style.display = "none";
    }
  }
});


hardBtn.addEventListener("click",function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor;
  for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
  }
});

resetButton.addEventListener("click",function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor;
  message.textContent="";
  this.textContent = "New Colors";
  for(var i=0;i<square.length;i++)
  {
    square[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "steelblue";
});
pickedColorDisplay.textContent = pickedColor;
for(var i = 0; i <square.length; i++)
{
  square[i].style.backgroundColor = colors[i];

  square[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
    message.textContent = "Correct";
    changeColor(clickedColor);
    h1.style.backgroundColor = clickedColor;
    resetButton.textContent = "Play Again?";
    }
    else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }
  });
}

function changeColor(color){
  for(var i=0;i<square.length;i++)
  {
    square[i].style.backgroundColor = color;
  }
}

function pickColor(){
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num){
  var arr=[];
  for(var i=0;i<num;i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r=Math.floor(Math.random() * 256);
  var g=Math.floor(Math.random() * 256);
  var b=Math.floor(Math.random() * 256);
  return "rgb("+r+", "+g+", "+b+")";
}
