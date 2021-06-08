

function preload(){
  pathImg= loadImage("path.png");
  boyAni= loadAnimation("Jake1.png", "Jake2.png", "jake3.png" , "jake4.PNG" , "jake5.png");
  
}
function setup(){
  createCanvas(400,600);
  path= createSprite(200,300)
  path.addImage(pathImg);
  path.scale=1.4;
  
  jack = createSprite(200,300);
  jack.addAnimation("xyz",boyAni)
  
  
  leftBoundary= createSprite(30,300,20,600);
  leftBoundary.shapeColor="white";
  //leftBoundary.visible=false;
  rightBoundary= createSprite(375,300,20,600);
  rightBoundary.shapeColor="white";
  //leftBoundary.visible=false;
  
  
}
function draw(){
  background("black")
  path.velocityY=-4;
  if(path.y<0){
    path.y=600;
  }
  
  jack.x=mouseX;
  
  edges= createEdgeSprites();
  jack.collide(edges)
  jack.collide(leftBoundary);
  jack.collide(rightBoundary);
  
  
  drawSprites();
}