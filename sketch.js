var PLAY= 1;
var END= 0;
var gameState =1;

var knife, alien, fruit, fruitGroup, alienGroup,sound1;
var knifeImage, alienImage, fruit1Image, fruit2Image,               fruit3Image, fruit4Image, gameoverImage;

function preload(){
  
knifeImage = loadImage("sword.png");
alienImage = loadImage("alien1.png","alien2.png");
fruit1Image = loadImage("fruit1.png");
fruit2Image = loadImage("fruit2.png");
fruit3Image = loadImage("fruit3.png");
fruit4Image = loadImage("fruit4.png");
gameoverImage = loadImage("gameover.png");
sound = loadSound("knifeSwooshSound.mp3");
 sound1 = loadSound("gameover.mp3");
}

function setup(){
createCanvas(400,400);

knife = createSprite(40,200,20,20);
knife.addImage(knifeImage);
knife.scale = 0.5;
knife.setCollider("rectangle",0,0,50,150);

  
fruitGroup = createGroup();
alienGroup = createGroup();
  
score =0;
}

function draw(){
background("pink");
  
if(gameState === PLAY){
   fruits();
   aliens();
  
   knife.y = World.mouseY;
   knife.x = World.mouseX;
   
  if (fruitGroup.isTouching(knife)){
      fruitGroup.destroyEach();
      sound.play();
      score = score + 2 }
  
  else
    
 {
   if (alienGroup.isTouching(knife)){
     gameState = END;
     
     
     fruitGroup.destroyEach();
     alienGroup.destroyEach();
     fruitGroup.setVelocityXEach(0);
     alienGroup.setVelocityXEach(0);
     
     knife.addImage(gameoverImage);
     knife.x = 200;
     knife.y = 200;}
   }
        

}
 drawSprites();
  text("Score: "+ score,300,30);
}

function fruits(){
    if(World.frameCount%80===0){
      position = Math.round(random(1,2));
      
      
    fruit = createSprite(400,200,20,20);
      console.log(position);
      fruit.scale = 0.2;
     
     if(position == 1)
      {
      fruit.x = 400;
       fruit.velocityX  = -(7 + (score/4));
      
      }
      else
      {
        if(position == 2){
          fruit.x = 0;
          fruit.velocityX = (7 +(score/4));
        }
        }   
        
       fruit.scale = 0.2;
       fruit.debug = false;
    
    
    r = Math.round(random(1,4));
    if(r == 1){
      fruit.addImage(fruit1Image);
    }else if(r == 2){
      fruit.addImage(fruit2Image);
    }else if(r == 3){
      fruit.addImage(fruit3Image);
    }else{
      fruit.addImage(fruit4Image);
    }
    
    fruit.y = Math.round(random(50,340));
    //fruit.setLifetime = 100;
    //fruit.velocityX = -4;
    fruitGroup.add(fruit)
  
}
}

function aliens(){
  //creating the alien
  if(frameCount %200 === 0){
    alien = createSprite(400,200,20,20);
    alien.addAnimation("moving",alienImage);
    alien.y = Math.round(random(100,300));
    alien.velocityX = -(8 + (score/10));
    alien.setLifetime = 50;
    
    alienGroup.add(alien);
  }
}
    
    
    
    
    
















































































