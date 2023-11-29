//The setup function only hapaudio.htmlpens once
var darla=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}


//The draw function happens over and over again
function draw() {
  background(200,238,mouseX); //an RGB color for the canvas' background
  //circle
  stroke(355,280,) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,160,20); // center of canvas, 20px dia
  stroke(84,178,205);
  strokeWeight(5);
  fill(211,127)
  rect(darla, 350,darla,darla);
  triangle (mouseX+100, mouseY+35, mouseX+58, mouseY+20, mouseX+86, mouseY+75);
  fill (255,265,300,150)
  line (mouseX, 30, mouseX+70,75);
  stroke (126);
triangle()

}

  function mousePressed() {
  if (darla>=10) 
   {darla=0} 

    else {darla=darla+1;}
  
}

