var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400, 100, 80, 30);
  movingRect.velocityY = 5;
  movingRect.shapeColor = "green";

  fixedRect = createSprite(400, 300, 40, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -5;

  gameObject1 = createSprite(200,100,20,20);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,150,20,20);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(200,200,20,20);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(200,250,20,20);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0); 
  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;  

  console.log(movingRect.width/2 + fixedRect.width/2);

 if (isTouching(movingRect,gameObject1)) {
   movingRect.shapeColor = "red";
   gameObject1.shapeColor = "red";
 } else {
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
 }

  //Horizontal bounce Off 
  bounceOff(movingRect,fixedRect);

  drawSprites();
}

