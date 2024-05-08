var mappedBackgroundLightness;
var mappedBackgroundSaturation;
var textColor;
var font;

function preLoad(){
  font = loadFont('fonts/WorkSans-VariableFont.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  textAlign(CENTER);
  textSize(40);
    background(60,16,77);
  text(font);

}

function draw() {
  text ('Was I right, \n ... \n \n was I wrong, \n ... \n \n will I be forgiven, \n ... \n \n can I do better? ', windowWidth/2, windowHeight/5);
  fill('black');
  
textColor = map(mouseY, 0, height, 0, 77);
  mappedBackgroundSaturation = map(mouseY, 0, height, 16, 60);
  mappedBackgroundLightness = map(mouseY, 0, height, 0, 77);
  background(60, mappedBackgroundSaturation, mappedBackgroundLightness);
  
  text ('Was I right, \n ... \n \n was I wrong, \n ... \n \n will I be forgiven, \n ... \n \n can I do better? ', windowWidth/2, windowHeight/5);
  
}