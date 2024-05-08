var earth;
var gif;
var font;
var star;

function preload(){
  earth = loadImage('img/earth.png');
  gif = loadImage('img/RotatingEarth.gif');
  font =loadFont('fonts/PlayfairDisplay-VariableFont.ttf');
  star = loadImage('img/(4)star.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
textSize(20);
  textFont(font);
  background('black');
}

function draw() {
  text ('will the earth turn as it was taught,', windowWidth-900, windowHeight-40);
  fill('lightYellow');
  image(earth, windowWidth-900, windowHeight/4);
    image(gif,windowWidth-900, windowHeight/4);
  image(star, mouseX,mouseY);
  

}


if (mouseIsPressed) {
  image(gif,windowWidth/2, windowHeight/2);

  } else {
     image(earth, windowWidth/2, windowHeight/2);

  }