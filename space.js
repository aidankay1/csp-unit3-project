// Welcome to: "Space Scene"

// Credits
// Parker Fortin: backdrop & stars; Skyler Hammond: planets; Aidan Kelly: spaceship; Kyle Mard: alien

hide();
penUp();

// Sets the background for space: background, stars & planets
drawSpace();
// Draws a spaceship
drawSpaceship("blue");
// Draws an alien lifeform
drawAlien();

// Sets the background for space
function drawSpace() {
  penColor("black");
  dot(1000);
  drawSpaceDots(1);
  drawPlanets();
}

    // Draws tiny stars in background
    function drawSpaceDots(radius) {
      penColor("white");
      for (var i = 0; i < 300; i++) {
        moveTo(randomNumber(0, 450), randomNumber(0, 450));
        dot(radius);
        }
    }

    // Draws the planets
    function drawPlanets() {
      for (var i = 0; i < randomNumber(4, 8); i++) {
          penRGB(randomNumber(0, 180), randomNumber(0, 180), randomNumber(0, 180), 1);
          moveTo(randomNumber(1, 320), randomNumber(1, 450));
          dot(randomNumber(15, 40));
      }
    
    }

// Draws a spaceship with accent colors set by a parameter
function drawSpaceship(color) {
  moveTo(randomNumber(50,250),randomNumber(50,350));
  drawSpaceshipBody();
  drawSpaceshipTip(color);
  // No color parameter needed, pen color does not change between these two functions
  drawSpaceshipFins();
  drawSpaceshipFlame();
}

    // Draws body of spaceship
    function drawSpaceshipBody() {
      // Angles slightly then draws rectangle
      turnTo(360-randomNumber(-30,30));
      penColor("#CCC");
      penWidth(25);
      penDown();
      for (var i = 0; i < 2; i++) {
        turnRight();
        moveForward(20);
        turnRight();
        moveForward(50);
      }
      penUp();
      
      drawSpaceshipPorthole();
      
      // Adjust turtle for next function
      moveForward(10);
      turnLeft();
      moveForward(5);
      turnRight();
    }
    
    // Draws porthole window in center of spaceship
    function drawSpaceshipPorthole() {
      turnRight(160);
      moveForward(30);
      penColor("#77a6f2");
      dot(12);
      turnRight(180);
      moveForward(30);
      turnRight(20);
    }
    
    
    
    // Draws colored "tip" of spaceship
    function drawSpaceshipTip(color) {
      // Set color according to "color" parameter
      penColor(color);
      penWidth(15);
      // Draw outline of cone
      penDown();
      arcRight(40,65);
      turnRight(100);
      arcRight(40,65);
      turnRight();
      moveForward(25);
      penUp();
      // Fill in center
      turnRight(130);
      moveForward(20);
      dot(15);
      turnRight(180);
      moveForward(20);
      // Adjust turtle for next function
      turnRight(50);
      moveForward(10);
      turnLeft();
      moveForward(50);
      turnRight();
    }
    
    function drawSpaceshipFins() {
      penWidth(3);
      // Draws one fin of the same color as the cone
      penDown();
      arcLeft(80, 20);
      // Moves turtle to opposite side of ship
      penUp();
      turnLeft(180);
      arcRight(80, 20);
      moveForward(35);
      // Draws other fin
      penDown();
      arcRight(80,20);
      // Reposition for next function
      penUp();
      turnLeft(180);
      arcLeft(80,20);
      moveForward(10);
      turnLeft();
      moveForward(25);
    }
    
    function drawSpaceshipFlame() {
      // Draws outer flame underneath spaceship
      penColor("orange");
      penWidth(15);
      penDown();
      arcRight(30,50);
      turnRight(120);
      arcRight(30,50);
      // Draws inner flame 
      turnRight(90);
      moveForward(3);
      turnRight();
      penColor("yellow");
      penWidth(7);
      arcLeft(30,30);
      turnLeft(120);
      arcLeft(30,30);
      penUp();
    }

// Draws a small green alien floating in space
function drawAlien() {
  moveTo(randomNumber(15, 200), randomNumber(15, 200));
  drawAlienHead();
  drawAlienBody();
  drawAlienLegs();
}

    // Draws head of alien
    function drawAlienHead() {
      penRGB(0, 255, 0, 1);
      dot(15);
      turnRight(20);
      penWidth(5);
      penDown();
      moveForward(20);
      penRGB(0, 0, 0, 1);
      dot(5);
      penRGB(0, 255, 0, 0);
      turnRight(190);
      moveForward(20);
      turnLeft(140);
      penRGB(0, 255, 0, 1);
      moveForward(20);
      penRGB(0, 0, 0, 1);
      dot(5);
      penRGB(0, 255, 0, 0);
      turnLeft(180);
      moveForward(15);
      penRGB(0, 0, 0, 1);
      arcRight(90, 10);
    }
    
    // Draws torso and arms of alien
    function drawAlienBody() {
      penRGB(0, 255, 0, 1);
      turnRight(180);
      penUp();
      moveForward(10);
      turnRight(90);
      penDown();
      moveForward(10);
      turnRight(90);
      moveForward(20);
      turnRight(20);
      moveForward(5);
      turnLeft(40);
      moveForward(5);
      turnLeft(165);
      penUp();
      moveForward(20);
      turnRight(10);
      penDown();
    }
      
    // Draws legs of alien
    function drawAlienLegs() {
      moveForward(30);
      moveBackward(30);
      turnRight(90);
      moveForward(50);
      turnRight(45);
      moveForward(25);
      moveBackward(25);
      turnLeft(90);
      moveForward(25);
      penUp();
    }
