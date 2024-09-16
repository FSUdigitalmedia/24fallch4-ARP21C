let y = 0;
let speed = 3;
let deg = 0;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {

  //change color based on vertical mouse movement
let startingColor = color("orange");
let endingColor = color("blue");
let pct = map(mouseY, 0, height, 0, 1, true);
let clr = lerpColor(startingColor, endingColor, pct);
fill(clr);


//draw the circle with size based on horizontal mouse position
  let d = map(mouseX, 0, width, 50, 150, true);
  background(125);
  let yPos = map2(y, 0, height, 0, height, QUADRATIC, IN);
  circle(width/2, yPos, d);

if (y > height ||  y < 0) {
  speed = speed * -1;
}

  y = y + speed;

//rotating rect
push();
translate (100,100);

degMapped = map2(deg, 0, 90, -90, 90, SINUSOIDAL, BOTH );
rotate( radians(degMapped));
deg = (deg + 1) % 90;
rect(0, 0, 50, 20);
pop();
}
