let font;
var star;

function preload() {
  font = loadFont('fonts/PlayfairDisplay-VariableFont.ttf'); // Load your font
  star=loadImage('img/white-star.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT);
  textSize(20);
  colorMode(HSL);
  textFont(font);
  background('darkBlue');
}

function draw() {
  text ('Is my eyesight fading or am I just imagining it, \n am I going to get rheunmatism, \n lockjaw, dementia?', 100, windowHeight-200);
  fill ('black');
  image(star, mouseX,mouseY);
  
  


}

   