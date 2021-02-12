var p1,p2,asteroid1,asteroid2,asteroid3;
var blast,blastImage,space,spaceImage;
var car, car2, car3,carImage, carImage2, carImage3;
var b1 , b2, b3, b4;
var shoot = 0;
var score = 0;
var laser,asteroidGroup,fuelGroup;
var lifeImage;
var instruction = 0;
var play = 1;
var end = 2;
var gameState = instruction;

var li;
var safe, safe2, safeI;


function preload() {
  spaceImage = loadImage("road.png");
  carImage = loadImage("Player2.png");
  carImage2 = loadImage("Player.png");
  carImage3 = loadImage("Player3.png");
  b1 = loadImage("screw.png");
  b2 = loadImage("cone.png");
  b3 = loadImage("barricade.png"); 
  
  safeI = loadImage("shields.png");
}

function setup() {  
createCanvas(1800,800);
space = createSprite(1000,350,630,220);
space.addImage(spaceImage);
space.scale = 10.2;
space.velocityX = -39;

  car = createSprite(250,700,50,50);
  car.addImage(carImage);
  car.scale = 0.3;

  car3 = createSprite(250,350,50,50);
  car3.addImage(carImage3);
  car3.scale = 0.3;

  car2 = createSprite(250,100,50,50);
  car2.addImage(carImage2);
  car2.scale = 0.3;


        
  
  obsGroup = new Group;
  fuelGroup = new Group;
  
  }

function draw() {
  background(0);

  if(gameState === play) {
    // console.log(frameCount);
    
    if(space.x < 700) {
      space.x = 1000;
    }
    
    //shoot = shoot - 1;

    
    if(keyDown("right")) {
      car.x = car.x + 10;

    }

    if(keyDown("left")) {
      car.x = car.x - 10;    
    }

    if(keyDown("up")) {
    car.y = car.y - 10;

    }

    if(keyDown("down")) {
      car.y = car.y + 10;    
    }

    if(keyDown("d")) {
      car2.x = car2.x + 10;

    }

    if(keyDown("a")) {
      car2.x = car2.x - 10;    
    }

    if(keyDown("w")) {
    car2.y = car2.y - 10;

    }

    if(keyDown("s")) {
      car2.y = car2.y + 10;    
    }

    if(keyDown("t")){
      car3.y = car3.y - 10;
    }

    if(keyDown("g")){
      car3.y = car3.y + 10;
    }

    if(keyDown("f")){
      car3.x = car3.x - 10;
    }

    if(keyDown("h")){
      car3.x = car3.x + 10;
    }
    
    obsacles();
    drawSprites();
    
   
    if(car.isTouching(obsGroup)) {
      obsGroup.destroyEach();
      gameState = end;
    }

        if(car2.isTouching(obsGroup)) {
      obsGroup.destroyEach();
      gameState = end;
    }

    if(car3.isTouching(obsGroup)) {
      obsGroup.destroyEach();
      gameState = end;
    }
    
    /*if(gameState === end){
      textFont("trebuchetMS");
      fill("red");
      stroke("blue");
      strokeWeight(9);
      text("Oh no! You could not reach the end press r to reset", 850, 400);
    }*/

  }
  if(keyDown("r") && gameState === end) {
    gameState = instruction;
  }  

  if(gameState === instruction) {
    stroke("white");
    fill("white");
    textFont("trebuchetMS")
    textSize(50);
    text("------ Ruthless Racers 2 ------",canvas.width/2-300,canvas.height/2-300);
    stroke("blue");
    fill("red");
    textSize(35);
    text("ENJOY 😁!", 650, 750);
    textFont("Apple Chancery");
    text("You and your friend are in a never ending race track and found a new friend.",canvas.width/2-600, canvas.height/2 - 210);
    text("blue car: use up, left, right and left arrows to move.",canvas.width/2-300,canvas.height/2-50);
    text("red car: use w, a, s, d to move.",canvas.width/2-500,canvas.height/2-100);
    text("yellow car: use t, f, g, h to move", 500, 400)
    text("Avoid the obstacles in the way like:barricades=🚧, traffic cones and screws=🗼.They will make you and your friends lose.", 15, 550);    
    text("press 'space' to start game and press 'r' to reset.",600, 500);
    
    if(keyDown("space")) {
      gameState = play;
    }


  }
}
  
function obsacles() {
  if(frameCount % 110 === 0) {
    b10 = createSprite(2000, 400, 50, 50);
    b10.velocityX = -19
    b10.lifetime = 200;
    b10.scale = 0.3;
    b10.addImage(b2);
    b10.scale = 0.3
    obsGroup.add(b10);
  }

  if(frameCount % 110 === 0){
    b20 = createSprite(1900, 100, 50, 50);
    b20.velocityX = -19
    b20.lifetime = 200;
    b20.scale = 0.3;
    b20.addImage(b1);
    b20.scale = 0.1  
    obsGroup.add(b20);
  }
    b30 = createSprite(1800, 700, 50, 50);
    b30.velocityX = -19 
    b30.lifetime = 200;
    b30.scale = 0.3;
    b30.addImage(b3);
    b30.scale = 0.3;
    obsGroup.add(b30);
  }

  





