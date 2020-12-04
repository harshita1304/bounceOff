var ob1
var ob2

function setup(){
  createCanvas(600,600);
  ob1=createSprite(200,200,100,100);
  ob2=createSprite(200,100,100,100);
  ob1.shapeColor="white";
  ob2.velocityX=4;
  ob2.velocityY=4;
}
function draw(){
  background(0,0,0);
  drawSprites();
  ob1.y=mouseY;
  ob1.x=mouseX;
  if(ob2.x-ob1.x<ob1.width/2+ob2.width/2&&ob1.x-ob2.x<ob1.width/2+ob2.width/2){
    ob2.velocityX=ob2.velocityX*(-1);
  }
  if(ob2.y-ob1.y<ob1.height/2+ob2.height/2&&ob1.y-ob2.y<ob1.height/2+ob2.height/2){
    ob2.velocityY=ob2.velocityY*(-1);
  } 
}

