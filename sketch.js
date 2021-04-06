
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var reset,r;
var invisibleGround;
var zookeeper;
var gameState;
var PLAY=1;
var START=3;
var END=2;
var SH=4;
var s;
var le;
var lo;
var sss;
 var ss;
  var hs;
var ssw;
var a,as;
var shubh;
var monkey1,monkey2,monkey3;
var w,wa;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   zookeeper=loadImage("st.png");
  ssw=loadImage("c1.png")
  s=loadImage("sprite_0.png");
  lo=loadImage("sa.png");
  shubh=loadAnimation("c1.png","c2.png","c3.png","c4.png","c5.png")
wa=loadImage("2.png") ;
  a=loadImage("a8.png");
as=loadAnimation("a1.png","a2.png","a3.png","a4.png","a5.png","a6.png","a7.png","a8.png");
r=loadImage("wa.png");
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(90,300,20,20);
  monkey.scale=0.11;
    invisibleGround=createSprite(300,350,1300,20);
  invisibleGround.velocityX=-8;
  invisibleGround.x=invisibleGround.width/2;
   le=createSprite(300,169,20,20);
  invisibleGround.visible=false;
  le.scale=0.71;
  le.addImage(lo);
  le.visible=false;
  gameState=0;
  ss=createSprite(302,166,102,45);
  hs=createSprite(293,225,102,45);
  monkey1=createSprite(100,200,20,20);
  monkey1.scale=0.12;
  monkey1.addImage(s);
  monkey2=createSprite(500,200,20,20);
  monkey3=createSprite(300,350,20,20);
  monkey3.addImage(a);
  monkey3.scale=0.8;
  monkey2.scale=0.55;
  w=createSprite(300,200,200,200);
  reset=createSprite(300,300,200,200);
  reset.addImage(r);
  w.visible=false;
  reset.visible=false;
  w.addImage(wa);
  w.scale=0.9;
  reset.scale=0.5;
  monkey2.addImage(ssw);
  monkey1.visible=false;
  monkey2.visible=false;
  monkey3.visible=false;
  ss.visible=false;
  hs.visible=false;
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
}


function draw() {
  background("white");
  drawSprites();
  
  
  monkey.collide(invisibleGround);
  if (invisibleGround.x < 0){
      invisibleGround.x = invisibleGround.width/2;
    }
  
  console.log(mouseX,mouseY);
  
  if(gameState==PLAY){
   le.visible=false;
  
    
  monkey1.visible=false;
  monkey2.visible=false;
  monkey3.visible=false;
  monkey.visible=true;
  invisibleGround.visible=true;
    
      if(frameCount%90==0 ){
    spawnBananas();
  }
  if(frameCount%110==0 ){
    spawnObstacles();
    r=Math.round(random(1,2));
    if(r==1){
    obstacle.addImage(zookeeper); 
      obstacle.scale=0.15;
    }else if(r==2){
      obstacle.y=300;
      obstacle.setCollider("circle",10,0,190);
  
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.22;
    }
    }
  score = score + Math.round(getFrameRate()/60);
    
  textSize(18);
  text("survival time : "+score,250,50);
      
  if(keyDown("space")&& monkey.y>=290){
 monkey.velocityY = -12;
  }
  monkey.velocityY=monkey.velocityY+0.5;
    }else if(gameState==END){
  w.visible=true;
      
    }
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  if(obstacleGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    gameState=END;
    monkey.visible=false;
  }
  
  if(gameState==0){
    le.visible=true;
  monkey.visible=false;
  textSize(23);
    text("Before Playing Select Your Character",150,390);
    if(mousePressedOver(ss)){
     monkey.addAnimation("s",monkey_running);
    
      score=0;
  gameState=1;
    
  }
  if(mousePressedOver(hs)){
  gameState=4;
  }
  
  }
  
  if(gameState==4){
    le.visible=false;
    textSize(23);
    text("Select Your Character",200,50);
  monkey1.visible=true;
  monkey2.visible=true;
  monkey3.visible=true;
  monkey.visible=false;
    if(mousePressedOver(monkey1)){
     monkey.addAnimation("s",monkey_running);
      gameState=PLAY;
    }
    if(mousePressedOver(monkey2)){
     monkey.addAnimation("dsk",shubh);
     monkey.scale=0.53;
     gameState=PLAY;
    }
    if(mousePressedOver(monkey3)){
     monkey.addAnimation("dsks",as);
     monkey.scale=0.6;
     gameState=PLAY;
    }
    
    
    
  }
  
}

function spawnBananas(){
  banana=createSprite(700,200,20,20);
  banana.velocityX=-(7+score/140);
  banana.scale=0.12;     
  banana.y=random(150,200);
  banana.addImage(bananaImage);
  FoodGroup.add(banana);
  
}
function spawnObstacles(){
  obstacle=createSprite(700,290,20,20);


  
  obstacle.velocityX=-(5+score/70);
  obstacleGroup.add(obstacle);
}



