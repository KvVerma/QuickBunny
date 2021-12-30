var bunny;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8;
var carrot;
var snakeGroup;
var edges;
var snakeOn = true;

function preload () {
    // something something
}

function setup () {
    createCanvas(600, 600);
    edges = createEdgeSprites();
    bunny = createSprite(30, 570, 30, 30);
    carrot = createSprite(570, 30, 40, 40);
    brick1 = createSprite(55, 225, 125, 30);
    brick2 = createSprite(225, 225, 125, 30);
    brick3 = createSprite(380, 225, 125, 30);
    brick4 = createSprite(535, 225, 125, 30);
    brick5 = createSprite(55, 325, 125, 30);
    brick6 = createSprite(210, 325, 125, 30);
    brick7 = createSprite(365, 325, 125, 30);
    brick8 = createSprite(540, 325, 125, 30);
    snakeGroup = new Group();
    carrot.shapeColor = "orange";
    bunny.shapeColor = "pink";
    brick1.shapeColor = "red";
    brick2.shapeColor = "red";
    brick3.shapeColor = "red";
    brick4.shapeColor = "red";
    brick5.shapeColor = "red";
    brick6.shapeColor = "red";
    brick7.shapeColor = "red";
    brick8.shapeColor = "red";
}

function draw () {
    background("forestgreen");
if (!bunny.isTouching(brick1) && !bunny.isTouching(brick2) && !bunny.isTouching(brick3) && !bunny.isTouching(brick4) && !bunny.isTouching(brick5) && !bunny.isTouching(brick6) && !bunny.isTouching(brick7) && !bunny.isTouching(brick8) && !bunny.isTouching(carrot)) {
    if (keyDown("up") || keyDown("W")) {
        bunny.y -= 4
      };
      if (keyDown("down") || keyDown("S")) {
        bunny.y += 4
      };
      if (keyDown("right") || keyDown("D")) {
        bunny.x += 4
      };
      if (keyDown("left") || keyDown("A")) {
        bunny.x -= 4
      };
};
if (keyDown("R")) {
  bunny.x = 30;
  bunny.y = 570;
  snakeOn = true;
}

if (snakeOn) {
 generateSnakes();
 for (var i = 0; i < (snakeGroup).length; i++) {
  var temp = (snakeGroup).get(i);
  if (bunny.isTouching(temp)) {
    bunny.x = 30;
    bunny.y = 570;
    // temp.destroy();
    temp = null;
  };
};
};

 bunny.bounceOff(edges[0]);
 bunny.bounceOff(edges[1]);
 bunny.bounceOff(edges[2]);
 bunny.bounceOff(edges[3]);

if (bunny.isTouching(brick1) || bunny.isTouching(brick2) || bunny.isTouching(brick3) || bunny.isTouching(brick4) || bunny.isTouching(brick5) || bunny.isTouching(brick6) || bunny.isTouching(brick7) || bunny.isTouching(brick8)) {
    bunny.x = 30;
    bunny.y = 570;
};
if (bunny.isTouching(carrot)) {
  textSize(30);
  fill("pink");
  text("You Win!", 200, 100);
  snakeOn = false;
};

    drawSprites();
};

function generateSnakes() {
  var snakeYPos = 0;

  if (frameCount % 20 == 0) {
     var temp2 = random(1, 3);
     var snakeLength = random(35, 80);
      if (temp2 <= 1.75) {
       snakeYPos = random(400, 550);
     } else if (temp2 <= 2.5 && temp2 > 1.75) {
       snakeYPos = random(65, 175);
     } else {
       snakeYPos = random(250, 300);
     }
    console.log(snakeYPos)
    var snake = createSprite(600, snakeYPos, snakeLength, 5);
    snake.shapeColor = "yellow";
    snake.velocityX = random(-2, -7);
    snakeGroup.add(snake);
  }
};