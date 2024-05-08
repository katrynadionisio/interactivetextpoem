let font;

function preload() {
  font = loadFont('fonts/PlayfairDisplay-VariableFont.ttf'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);textAlign(CENTER);
  textSize(20);
  colorMode(HSL);
  textFont (font);
}

function draw() {
  background('red');
  text ('Will I ever be able to sing, \n even the sparrows can do it ', windowWidth/2, 550);
  fill (225);
  
  if (mouseY > width/3){
    fill('yellow');
    text("and         I am,         well, ", windowWidth/2, 620);
    fill(0);
  }
}