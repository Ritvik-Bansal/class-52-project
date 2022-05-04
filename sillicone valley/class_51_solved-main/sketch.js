var bg, bgImg
var redCar, redCarImg
var blueCar, blueCarImg
var blackCar, blackCarImg
var bus, busImg
var smoke, smokeImg, smokeGroup
var cloud;
var score = 0;
var net, netImg, player

function preload() {
  bgImg = loadImage("assets/background.jpg")
  redCarImg = loadImage("assets/redcar.png")
  blueCarImg = loadImage("assets/bluecar.png")
  blackCarImg = loadImage("assets/blackcar.png")
  busImg = loadImage("assets/bus.png")
  smokeImg = loadImage("assets/smoke.png")
  netImg = loadImage("assets/net.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  

  
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.1

redCar = createSprite(displayWidth-1800, displayHeight-350, 40, 40)
redCar.addImage(redCarImg)
redCar.scale = 0.6

blueCar = createSprite(displayWidth-1400, displayHeight-350, 40, 40)
blueCar.addImage(blueCarImg)
blueCar.scale = 0.6

blackCar = createSprite(displayWidth-1000, displayHeight-330, 40, 40)
blackCar.addImage(blackCarImg)
blackCar.scale = 1.2

bus = createSprite(displayWidth-450, displayHeight-380, 40, 40)
bus.addImage(busImg)
bus.scale = 0.7


cloud = createSprite(displayWidth/2, 20, displayWidth, 3);
player = createSprite(500,100, 50, 50)
player.addImage(netImg)
   player.debug = true
   player.setCollider("rectangle",0,0,50,50)
smokeGroup = new Group()


}

function draw() {
  background(0); 
  smokes();
if(keyDown("RIGHT_ARROW")){
  player.x = player.x+40
}
if(keyDown("LEFT_ARROW")){
 player.x = player.x-40
}
  if(smokeGroup.isTouching(cloud) || smokeGroup.isTouching(player)){
    for(var i=0;i<smokeGroup.length;i++){     
        
     if(smokeGroup[i].isTouching(cloud)){
          smokeGroup[i].destroy()
          
   
          score = score+100
          } 
      if(smokeGroup[i].isTouching(player)){
          smokeGroup[i].destroy()
            }
    }
  }
  
  drawSprites();
  textSize(40)
  fill("red")
  text("Polution Level = " + score,displayWidth-450,80)
  if(score >= 300){
    textSize(80)
    fill("red")
    text("TOO MUCH POLUTION!", 500, displayHeight/2)
  }
}





  function smokes() {
    if(frameCount%50===0){

      //giving random x and y positions for zombie to appear
      smoke = createSprite(random(0, 1500),displayHeight-350,40,40)
  
      smoke.addImage(smokeImg)
      smoke.scale = 0.15
      smoke.velocityY = -10
      smoke.debug= true
      smoke.setCollider("rectangle",0,0,400,400)
     
      smoke.lifetime = 400
     smokeGroup.add(smoke)
    }
  }





  
