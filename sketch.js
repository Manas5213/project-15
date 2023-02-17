let ground;
let lander;
var lander_img;
var bg_img;
var background1;

var vx = 0;
var g = 0.01;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  background1 = loadImage("bg_sur.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  
  ground = createSprite(0,height - 100, 900, 20);
  ground.visible = false;
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(background1,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
  lander.collide(ground);
  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}


