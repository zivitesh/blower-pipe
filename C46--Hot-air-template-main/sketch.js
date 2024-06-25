var bg, bgImg
var play = 1
var end = 0
var gameState = "play"
var bottomGround
var topGround
var balloon, balloonImg,jumpSound,bird1,red,blue,light,birdGroup,buildingGroup,gameover;

function preload(){
bgImg = loadImage("assets/bg.png")
gameoverImg = loadImage("assets/gameOver.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon2.png")
jumpSound = loadSound("assets/jump.mp3")
bird1 = loadImage("assets/obsTop2.png")
red = loadImage("assets/obsBottom1.png")
blue = loadImage("assets/obsBottom3.png")
light = loadImage("assets/obsBottom2.png")
}

function setup(){
  createCanvas(400,400)                                                 

birdGroup = new Group()
buildingGroup = new Group()

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

gameover = createSprite(100,100);
gameover.addImage(gameoverImg);
gameover.scale = 0.9;
gameover.visible = false;



}

function draw() {
  
  background("black");
  if(gameState==="play"){
    if(keyDown("space")) {
      balloon.velocityY= -6 ;
      jumpSound.play()
    
    }

    //adding gravity
     balloon.velocityY = balloon.velocityY+0.5;
    
     if(balloon.isTouching(birdGroup) || balloon.isTouching(buildingGroup) ){
      gameState = "end"
     }




 spawnbirds()
 spawnbluebuildings()
  }
  else if (gameState === "end"){
    gameover.visible=true;
      birdGroup.setVelocityXEach(0)
      buildingGroup.setVelocityXEach(0)
  }
  
  

  
        
          //making the hot air balloon jumps
          if (keyTyped && keyCode === UP && kingYPos === floorHeight + 50) {
            ballonYPos = ballonYPos + yForce;
            yForce = yForce - 0.5;
      
        }

        drawSprites();
        
}

function spawnbirds(){
  if(frameCount %100===0){
    birds=createSprite(400,50,40,50)
    birds.addImage(bird1)
    birds.velocityX=-2;        
    birds.scale=0.1;
    birds.y=random(50,150)   
    birdGroup.add(birds)
  }
}

function spawnbluebuildings(){
  if(frameCount %150===0){
  bluebuildings=createSprite(400,250,40,50)
  bluebuildings.addImage(blue)
  bluebuildings.velocityX=-2;        
  bluebuildings.scale=0.1 ;
  buildingGroup.add(bluebuildings)
    
  }
}

