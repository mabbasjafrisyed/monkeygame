var survivalTime=0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var food;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,1,1)
  monkey.addAnimation("monkeyRunning",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
}


function draw() {
  background("white");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space") && monkey.y>314){
    monkey.velocityY=-13;
  }
  monkey.velocityY=monkey.velocityY +0.8;
  monkey.collide(ground);
  food();
  obstacleSpawn();
  console.log(monkey.y);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100,50);
  drawSprites();
  
}

function food() {
  if(frameCount % 80 === 0){
    var food = createSprite(300,200,20,20);
    food.addImage("Food",bananaImage);
    food.y = Math.round(280,200);
    food.velocityX = -4;
    food.lifeTime = 200;
    food.scale = 0.1
  }
}

function obstacleSpawn(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(300,310,20,20);
    obstacle.addImage("obstacles",obstaceImage);
    obstacle.scale = 0.16;
    obstacle.velocityX = -4
    

    }
}




