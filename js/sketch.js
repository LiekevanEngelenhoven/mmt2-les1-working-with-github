var rood = 10;
var vincent = "hallo";
var blauw = 255;

function setup() {
  // put setup code here

  createCanvas(400,400);
  background(240); //dit is groen

  
  

}

function draw() {

  background(400-mouseX,mouseX,0);

rood = random(0,255);
blauw = random(255,0);

//background(rood ,0, blauw, random(255));
//console.log(vincent);

//console.log(mouseX);
noStroke();

fill(255,0,0);
ellipse(200,200,mouseX,mouseY);


fill("blue");
rect(100,100,200,200);

fill(0,255,0);
ellipse(200,200,100,100);
 
strokeWeight(5);
stroke(255);
line(0,200,400,200);
line(200,0,200,400);
}