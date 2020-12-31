var hr,mn,sc;
var hrAngle,mnAngle,scAngle;
function setup() {
  createCanvas(1375, 650);
  angleMode(DEGREES);

}

function draw() {
  background("black");
  hr = hour();
  mn = minute();
  sc = second();
  console.log(hr + ": "+ mn + ": "+ sc)
  
  scAngle = map(sc, 0, 60, 0, 360)
  hrAngle = map(hr % 12, 0, 12, 0, 180)
  mnAngle = map(mn, 0, 60, 0, 360)
  stroke(255,0,0);
  strokeWeight(7.2)
  arc(400,200,300,0,scAngle);
  stroke("red");
  arc(400, 200, 280, 280, 0, mnAngle);
  stroke("lime");
  arc(400, 200, 260, 260, 0, hrAngle);
  push();
  translate(400, 200);
  rotate(scAngle - 90);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  push();
  translate(400, 200);
  rotate(mnAngle - 90);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
  push();
  translate(400, 200);
  rotate(hrAngle - 90);
  stroke("lime");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  drawSprites();

}