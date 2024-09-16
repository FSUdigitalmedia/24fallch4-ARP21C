function setup() {
  createCanvas(400, 400);
}

function draw() {

  //change color based on vertical mouse movement
let startingColor = color("orange");
let endingColor = color("blue");
let pct = map(mouseY, 0, height, 0, 1, true);
let clr = lerpColor(startingColor, endingColor, pct);
fill(clr);



  let d = map(mouseX, 0, width, 50, 150, true);
  background(125);
  circle(width/2, height/2, d);
  console.log(d);
}
