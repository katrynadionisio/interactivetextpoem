var font;
var mappedBackgroundSaturation;
var mappedBackgroundLightness;
var textColor;

function preLoad(){
  font = loadFont('Jersey15Charted-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  text(font);
  textAlign(CENTER);
  textSize(30);
  colorMode(HSL);
}

function draw() {
  //first color is hsl(60,52,90)
  //second color is hsl(60,16,77)
  mappedBackgroundSaturation = map(mouseY, 0, height, 52, 16);
  mappedBackgroundLightness = map(mouseY, 0, height, 90, 77);
  print(mappedBackgroundSaturation);
  // print(mappedBackgroundLightness);

  textColor = map(mouseY, 0, height, 255, 0);
  background(60, mappedBackgroundSaturation, mappedBackgroundLightness);
  fill(textColor);
  text('I worried a lot.',width/2,mouseY);
  
  if (mouseIsPressed) {
    background(mappedBackgroundSaturation);
    text('by Mary Oliver.',width/2,mouseY);
  } else {
    textSize(30);
  }
}