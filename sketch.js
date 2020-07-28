var fixedRect
var movingRect 

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 70, 70);
  movingRect = createSprite(200, 100, 50, 50);

}

function draw() {
  background(0);  
  movingRect.x = mouseX
  movingRect.y = mouseY
  if (movingRect.x - fixedRect.x  < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x  < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y  < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y  < movingRect.height/2 + fixedRect.height/2

      ){
    
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"

  }
   
  else {
    movingRect.shapeColor = "blue"
    fixedRect.shapeColor = "blue"

  }
 console.log(movingRect.x - fixedRect.x)
  drawSprites();
}