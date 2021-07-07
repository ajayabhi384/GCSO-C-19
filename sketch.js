var car,wall;
var speed,weight;

function setup() {
  speed=random(55,90)
  weight=random(400,1500)
  createCanvas(1100,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1000,200,60,height/2);
}

function draw() {
  background("black");  
  drawSprites();
  car.velocityX= speed=random(55,90);
  car.weight=  weight=random(400,1500);
  car.setCollider("rectangle",0,0,20,80,-45);
  //sprite.shapeColor=color(r,g,b)
  if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  vardeformation=0.5 * weight * speed* speed/22500;
  if(deformation>180)
{
  car.shapeColor=color(255,0,0)
}

if(deformation<180 && deformatiion>100)
{
  car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}


}

}