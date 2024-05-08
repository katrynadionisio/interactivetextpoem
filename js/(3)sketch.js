let font;

function preload() {
  font = loadFont('fonts/PlayfairDisplay-VariableFont.ttf'); // Load your font
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   textAlign(CENTER);
  textSize(20);
  textFont(font);
  colorMode(HSL);
    background('darkblue');

}

function draw() {
  fill(225);
  
   // Draw text at the current mouse position
  text('will the rivers flow in the right direction,', mouseX, mouseY);
}