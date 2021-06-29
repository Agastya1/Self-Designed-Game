const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bg, back;
var barryImg, barry, barryFly;
function preload(){
bg = loadImage("Images/New Project.jpg");
barryImg = loadAnimation("Images/Barry1.png","Images/Barry 2.png");
barryFly = loadImage("Images/barry.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,500);
  back = createSprite(600, 250, 1200, 500);
  back.addImage(bg);
  back.velocityX = -3;
  back.scale =1.5;
  barry = createSprite(200, 420, 50,50);
  barry.addAnimation("barry",barryImg);

  barry.scale = 0.7;
}

function draw() {
  background(255,255,255);  
  if(back.x < 0){
    back.x =( back.width+500)/2;
  }

  if(keyDown("space")){
    barry.addImage("barry", barryFly);
  }
  drawSprites();
}

