
let theFont;

function preload() {
 theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
  }

function setup() {
  createCanvas(400, 400);
  textFont(theFont);
  textSize(72);
 

}

function draw() {

 
  background(125);
  text("HI", width/2, height/2);

  
}
