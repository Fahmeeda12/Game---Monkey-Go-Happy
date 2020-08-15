var bananaImage, obstacleImage,backgroundImage,obstacleGroup,bg;
var setbackground, score, monkey;

function preload() {
  backgroundImage = loadImage("jungle.png");
  
  monkey = loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png", "Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  bg = createSprite(200,200,20,20); 
  bg.addImage("jungle.png", backgroundImage);
  bg.velocityX = 5;
  
  //ground.visibility = false;
      
}

function draw() {
  background(220);
  
  drawSprites();
}