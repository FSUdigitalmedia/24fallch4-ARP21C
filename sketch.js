
let theFont;
let y=0;
let speed = 3;
let deg = 0;

function preload() {
 theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(theFont);
  textSize(72);
 

}

function draw() {

 //bouncy text movement
 let d = map(mouseX, 0, width, 50, 150, true);
 background(125);
 let yPos = map2(y, 0, height, 0, height, SINUSOIDAL, IN);

//rotating the text
push();
translate (100,100);
degMapped = map2(deg, 0, 90, -90, 90, SINUSOIDAL, BOTH );
rotate( radians(degMapped));
deg = (deg + 1) % 90;


//if key pressed text gets bigger
if (keyIsPressed) {
  textSize(150);

} else {
  textSize(72);
}
text("BOUNCY", 0, yPos);
pop();
if (y > height ||  y < 0) {
 speed = speed * -1;
}

 y = y + speed;



  
 

  
}
