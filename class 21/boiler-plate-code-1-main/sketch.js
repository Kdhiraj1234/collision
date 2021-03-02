var fixedRect,movingRect,ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  ob1= createSprite(100, 200, 30, 30);
  ob2= createSprite(200, 100, 30, 30);
  ob3= createSprite(400, 200, 80, 30);
  ob4= createSprite(500, 200, 80, 30);

  movingRect.debug=true;
  ob1.debug=true;
  ob3.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(ob1,movingRect)){
    movingRect.shapeColor="purple";
    ob1.shapeColor="purple";
  }else if(isTouching(ob3,movingRect)){
    movingRect.shapeColor="yellow";
    ob3.shapeColor="yellow";
  } else {
    movingRect.shapeColor="green";
    ob1.shapeColor="green";
    ob3.shapeColor="green";
  }

  

  drawSprites();
}
