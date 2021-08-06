//Create variables here
var dog, happyDog, foodS, foodStock, database

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("image/dogImage1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 20, 20)
  dog.addImage(dogImg);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)){
    food=food-1;
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
textsize(10)
fill(blue)
stroke(4)
text(foodStock)
text("NOTE : press up arrow key to feed dargo milk")
}



