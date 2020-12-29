var pacman;
var pacmanrImage;
var pacmanlImage;
var pacmanuImage;
var pacmandImage;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10;
function preload(){
  pacmanrImage= loadImage("bgrightpacman.png")
  pacmanlImage= loadImage("bgleftpacman.png")
  pacmandImage= loadImage("bgdownpacman.png")
  pacmanuImage= loadImage("bguppacman.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  pacman=createSprite(width/1.75-5,height/2+10,width-width/2,100)
  pacman.scale=.3     
  
  line1=createSprite(width/1.75-10,height/2+56,width-width/3,10);
  line1.shapeColor="blue"
 
  
  line2=createSprite(width/1.75-10,height/2-10,width-width/3,10);
  line2.shapeColor="blue"
  
  line3=createSprite(width/.9-width/2,height/2+100,10)
  line3.shapeColor="blue"

  line4=createSprite(width/2-50,height/2-height/2.15,width-width/8,10)
  line4.shapeColor="blue"
  
  line5=createSprite(width/2-width/2.109,height/2,10,height-53)
  line5.shapeColor="blue"

  line6=createSprite(width/2-50,height-25,width-width/8,10)
  line6.shapeColor="blue"

  line7=createSprite(width/1.11-width/800,height/2,10,height-53)
  line7.shapeColor="blue"

  line8=createSprite(width/1.75-10,height/2-100,width-width/3,10)
  line8.shapeColor="blue"

  
  line9=createSprite(width/1.37-width/2,height/2-56,10);
  line9.shapeColor="blue"
}

function draw() {
  background("black");
  if(keyDown("LEFT_ARROW")){
    pacman.addImage("left",pacmanlImage)
    pacman.scale=.25
    pacman.velocityX=-5
    pacman.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    pacman.addImage("left",pacmandImage)
    pacman.scale=.25
    pacman.velocityY=5
    pacman.velocityX=0
  }
  if(keyDown("RIGHT_ARROW")){
    pacman.addImage("left",pacmanrImage)
    pacman.scale=.25
   pacman.velocityX=5
   pacman.velocityY=0

  }
  if(keyDown("UP_ARROW")){
    pacman.addImage("left",pacmanuImage)
    pacman.scale=.25
    pacman.velocityY=-5
    pacman.velocityX=0
  }
  createEdgeSprites();
  pacman.bounceOff(line1);
  pacman.bounceOff(line2);
  pacman.bounceOff(line3);
  pacman.bounceOff(line4);
  pacman.bounceOff(line5);
  pacman.bounceOff(line6);
  pacman.bounceOff(line7);
  pacman.bounceOff(line8);
  pacman.bounceOff(line9);

 drawSprites();
    
}

  