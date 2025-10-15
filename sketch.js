const GRID_SIZE = 20;
let headX = 20
let headY = 20
let foodX,foodY
let xDir = 1;
let yDir = 0;

function setup(){
    createCanvas(600,600);
frameRate(6);
  let numberOfCells = width/GRID_SIZE;
let randomCell =random(numberOfCells);
let randomCellFloor= floor (randomCell);

   
    foodX = randomCell * GRID_SIZE + GRID_SIZE / 2;
 randomCell=random(numberOfCells);
 randomCellFloor= floor (randomCell);

    foodY = randomCell * GRID_SIZE + GRID_SIZE / 2;
    
}

function draw(){
    background(0)
fill(255,255,0);
square(headX,headY,20);// snake
  headX += GRID_SIZE * xDir;
    headY += GRID_SIZE * yDir;
fill(255, 0, 0);
    circle(foodX, foodY, 20);//food
headX += GRID_SIZE*xDir
headY+= GRID_SIZE*yDir
}

function keyPressed(){

   if (keyCode === UP_ARROW){
  xDir = 0;
      yDir = -1;
       

  } else if ( keyCode === DOWN_ARROW){
     xDir = 0;
      yDir = 1;
        
} else if( keyCode === LEFT_ARROW){
    xDir = -1;
      yDir = 0;
        

} else if ( keyCode === RIGHT_ARROW){
    xDir = 1;
      yDir = 0;
      
    
}
headX+=GRID_SIZE*xDir

}
