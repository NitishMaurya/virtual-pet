var dog,sadDog,happyDog;
var database;
var foodS, foodStock;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodStock = database.ref("food");
  foodStock.on("value", readStock);


}

function draw() {
  background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
drawSprites();
fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,170,200);
textSize(13);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  drawSprites();
}

function readStock(data){
foodS = data.val();
console.log(foodS)
}
function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x = x-1;
}

database.ref("/").update({
  food:x
})
}

