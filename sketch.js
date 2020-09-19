var dog, foodS, foodStock, happyDog, database;

function preload(){ 
  dog= loadImage("dogImg.png")
  happyDog= loadImage("dogImg1.png")
}

function setup() {
  createCanvas(1000, 900)
  
  dog1= createSprite(400,500,50,50)
  dog1.addImage(dog)
  database= firebase.database()
  var listener= database.ref("Food")
  listener.on("value", getStock)
}

function getStock(data){
  foodS= data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
   
  database.ref('/').update({
    Food:x
  })
}



function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog1.addImage(happyDog)
  }
  if(keyWentUp(UP_ARROW)){
    dog1.addImage(dog)
  }

  drawSprites();
  
  fill("black")
  textSize(30)
  text("Press UP ARROW to feed the dog !", 200,50)
  text("No. of Bottles:"+ foodS, 650,100)

}



