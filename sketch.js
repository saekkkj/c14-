var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage,blue_, backgroundImage;
var balaov,balaovv,balaop,balaoa,arrowg
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage= loadImage("red_balloon0.png");
  blue_balloonImage= loadImage("blue_balloon0.png");
green_balloonImage= loadImage("green_balloon0.png");
pink_balloonImage= loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  balaov=new Group
  balaovv=new Group
  balaop=new Group
  arrowg=new Group
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1:red_balloonImage
    break;
    case 2:blue_balloonImage
    break;
    case 3:green_balloonImage
    break;
    case 4:pink_balloonImage
break;

  }}
  
  drawSprites();
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red_balloonImage.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  balaov.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue_balloonImage.addImage(blue_balloonImage);
  blue.velocityX = 3; 
  blue.lifetime = 150;
  blue.scale = 0.1;
  balaoa.add(blue)
}

function greenBalloon() {
  var greenB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green_balloonImage.addImage(green_balloonImage);
  greenB.velocityX = 3;
  greenB.lifetime = 150;
  greenB.scale = 0.1;
  balaovv.add(greenB)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink_balloonImage.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
  balaop.add(pink)
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowg.add(arrow)
   
}
