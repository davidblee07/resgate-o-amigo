var inimigo;
var pc;
var amigo;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

  pc = createSprite(500,200,10,10);
  amigo = createSprite(500,690,10,10);
  inimigo = createSprite(500,500,10,10);
  
}


function draw() {
  background(0);
  
  if(keyDown(UP_ARROW)){
    pc.velocityY = -1;
  }

  if(keyDown(DOWN_ARROW)){
    pc.velocityY = 1;
  } 

  if(keyDown(LEFT_ARROW)){
    pc.velocityX = -1;
  }

  if(keyDown(RIGHT_ARROW)){
    pc.velocityX = 1;
  }
   


  drawSprites();
}



