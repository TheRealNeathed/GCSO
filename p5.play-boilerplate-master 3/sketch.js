var car,wall
var speed,weight
var deformation



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,20,60,200)
  car.velocityX = speed/10
  deformation = (0.5*weight*speed*speed)/22500
}

function draw() {
  background(255,255,255);  

  
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
      car.velocityX = 0
    if (deformation>180){
      car.tint("red")


    }
    else if (100<deformation<180){
      car.tint("yellow")

    }
    else if (deformation<100){
      car.tint("green")

    }





  }
  drawSprites();

}