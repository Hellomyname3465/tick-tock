var hr;
var mn;
var sc;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255); 
  translate(200,200)
  rotate(-90)
  hr = hour() 
  mn = minute()
  sc = second()
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr  %12,0,12,0,360)
  strokeWeight(7)
  push()
  rotate(scAngle)
stroke(255,0,0)
console.log(hr)
line(0,0,100,0)
pop()
push()
rotate(mnAngle)
stroke(0,125,0)
line(0,0,150,0)
pop()
push()
rotate(hrAngle)
stroke(0,0,100)
line(0,0,70,0)
pop()
}