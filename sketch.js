var bg, bg_img;
var girl, girl_img;
var obstacles, obstacles_img;
var coins, coins_img;
var gameState = 'play';
var score = 0;
var gameover, gameover_img;

function preload(){
  bg_img = loadImage("forest_img.jpg");
  coins_img = loadImage("coin.img.jpg");
  gameover_img = loadImage("gameover.img.jpg");
  girl_img = loadImage("girl_img.jpg");
}

function setup() {
  createCanvas(1500, 600);
  bg = createSprite(0,300,1500,600);
  bg.addImage(bg_img);
  bg.scale = 1;
  girl = createSprite(200,500,100,100);
 
  invisibleGround = createSprite(600,580,1200,10);
  invisibleGround.visible=false;
  obstacleGroup = createGroup();
  coinsGroup = createGroup();
  score= 0
  girl.addImage(girl_img);

}

function draw() {
  //trex.debug = true;
  background(0);
 

 
girl.collide(invisibleGround);
 console.log(bg.x)
 
 

 if(gameState === 'play'){

  bg.velocityX = -4;
  if(bg.x<0){
    bg.x=bg.width/2
  } 


  if(keyDown("space")){
    girl.velocityY = -10;
   }
 girl.velocityY = girl.velocityY+0.5

 spawnObstacles();
 spawnCoins();
 textSize(30);
 stroke('black');
 text("SCORE =" +score, 650,20);

 if(coinsGroup.isTouching(girl)){
   score=score+1;
   coinsGroup.destroyEach();
 }

if(obstacleGroup.isTouching (girl)){
  gameState = 'end'

}


 }
 else if(gameState ==='end'){
 

 

 obstacleGroup.setVelocityEach(0);
 coinsGroup.setVelocityEach(0);
 bg.velocityX = 0;

 }
 
  
  
  
  drawSprites();

textSize(30);
 stroke('black');
 text("SCORE =" +score, 500,40);
}


function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -5;
    obstacle.y = random(10,580);
    obstacleGroup.add(obstacle);
  }
} 
function spawnCoins(){
  if(frameCount % 200 === 0){
    var coins = createSprite(500,170,20,40);
    coins.velocityX = -6;
    coins.y = random(10,580);
    coins.addImage(coins_img);
    coins.scale = 0.3;
    coinsGroup.add(coins);
  }
}



