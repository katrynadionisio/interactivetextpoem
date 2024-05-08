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
    

}

function draw() {
  fill('orange');
  background('lightYellow');
   // Draw text at the current mouse position
  text('And took my old body and went out into the morning,', mouseX, mouseY);
  
   if (mouseIsPressed) {
      fill ('hotPink');
     text ('AND SANG.', windowWidth/2, windowHeight/2);
     textSize(80);
  } else {
    textSize(20);
}
}