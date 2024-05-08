var font;
var flowers;


function preload(){
  font = loadFont('fonts/PlayfairDisplay-VariableFont.ttf');
  flowers = loadImage ('img/FlowerIllustration.jpg');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(20);
  textFont (font);
  colorMode (HSL);
  background ('green');
}

function draw() {
// Define a dark brown color
  let darkBrown = color(25, 100, 15); // Hue, Saturation, Lightness
  fill(darkBrown);
  text('Will the garden grow,',windowWidth/2,windowHeight-30);
  
   if (mouseIsPressed) {
     background(flowers);
     
  }
}


  
    
  