var monkey , obstacles , banana , ground , score , backGround

function preload(){
   monkeyImage = loadImage('')

}

function setup() {
  createCanvas(600, 600);
  
  monkey = createSprite(480,480,50,50)
}

function draw() {
  background('orange');
  drawSprites();
  
   
  
}