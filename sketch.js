var bullet ;
var wall;
var speed,weight;

function setup() {
  createCanvas(3600,400);
 bullet= createSprite(20, 10, 20, 5);
 wall=createSprite(400,200,10,400);
 speed=random(55,90)
 weight=random(400,1500)
 bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
bullet.velocityX=0;
var deformation=0.5* weight*speed* speed/22509;
if (deformation>180)
{
  bullet.shapeColor="red"
}
if(deformation<180&& deformation>100){
  bullet.shapeColor="yellow"
}
if(deformation<100){
  bullet.shapeColor="green"
}

  }
  drawSprites();
}