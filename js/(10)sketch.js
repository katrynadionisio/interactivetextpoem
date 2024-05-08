var words = ["Finally","I","saw", "that", "worries", "had", "come", "to", "nothing."];


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(20);
  colorMode(HSL);
}

function draw() {
  background('black');
  text ('Finally I saw that worrying had come to nothing.', windowWidth/2, windowHeight/2);
  fill (255);
  
  if (mouseIsPressed) {
    
    fill ('black');
    text('nothing., windowWidth/2, windowHeight/2')
  } else {
    textSize(20);
  }
  

    
}