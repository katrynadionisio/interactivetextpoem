function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(60);
  colorMode(HSL);
}

function draw() {
  background(60,16,77);
  text ('AND IF NOT', 200, 100);
  fill (255);
  
  if (mouseIsPressed) {
      text ('HOW SHALL I \n CORRECT IT?', 300, 300);
    fill ('black');
  } else {
    textSize();
  }
    
}