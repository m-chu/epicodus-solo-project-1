function GameObject (avatar, xCoordinate, yCoordinate, type, target, direction) {
  this.avatar = avatar;
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.enemyType = type;
  this.enemyTarget = target;
  this.enemyDirection = direction;
}

function coinFlip() {
  return Math.floor(Math.random() * 2);
}

function movePattern (enemy, counter) {
  if (enemy.enemyType === "horizontal") {
    moveNpcHorizontal(enemy);
  } else if (enemy.enemyType === "vertical") {
    moveNpcVertical(enemy);
  } else if (enemy.enemyType === "patrol") {
    moveNpcPatrol(enemy);
  } else if (enemy.enemyType === "hunter") {
    if(counter%2 === 0){
      moveNpcHunter(enemy);
    }
  }
}

function moveNpcHunter(enemy) {
  var xDistance = enemy.enemyTarget.xCoordinate - enemy.xCoordinate;
  var yDistance = enemy.enemyTarget.yCoordinate - enemy.yCoordinate;
  if (Math.abs(xDistance) > Math.abs(yDistance)) {
    if (xDistance > 0) {
      if (notABarrier(enemy, "right") && notAWall(enemy, "right")) {
        enemy.xCoordinate += 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      }
    } else if (xDistance < 0) {
      if (notABarrier(enemy, "left") && notAWall(enemy, "left")) {
        enemy.xCoordinate -= 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      }
    }
  } else if (Math.abs(yDistance) > Math.abs(xDistance)) {
    if (yDistance > 0) {
      if (notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (xDistance >= 0 && notABarrier(enemy, "right") && notAWall(enemy, "right")) {
        enemy.xCoordinate += 1;
      } else if (xDistance <= 0 && notABarrier(enemy, "left") && notAWall(enemy, "left")) {
        enemy.xCoordinate -= 1;
      }
    } else if (yDistance < 0) {
      if (notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      } else if (xDistance >= 0 && notABarrier(enemy, "right") && notAWall(enemy, "right")) {
        enemy.xCoordinate += 1;
      } else if (xDistance <= 0 && notABarrier(enemy, "left") && notAWall(enemy, "left")) {
        enemy.xCoordinate -= 1;
      }
    }
  } else {
    if (xDistance > 0) {
      if (notABarrier(enemy, "right") && notAWall(enemy, "right")) {
        enemy.xCoordinate += 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (Math.abs(yDistance) >= 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      }
    } else if (xDistance < 0) {
      if (notABarrier(enemy, "left") && notAWall(enemy, "left")) {
        enemy.xCoordinate -= 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (Math.abs(yDistance) >= 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      }
    }
  }
}

function moveNpcPatrol(enemy) {
  if (enemy.enemyDirection === "down") {
    if (enemy.yCoordinate < 5 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
      enemy.yCoordinate +=1;
    } else {
      enemy.enemyDirection = "left";
    }
  } else if (enemy.enemyDirection === "left") {
    if (enemy.xCoordinate > 0 && notABarrier(enemy, "left") && notAWall(enemy, "left")) {
      enemy.xCoordinate -=1;
    } else {
      enemy.enemyDirection = "up";
    }
  } else if (enemy.enemyDirection === "up") {
    if (enemy.yCoordinate > 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
      enemy.yCoordinate -=1;
    } else {
      enemy.enemyDirection = "right";
    }
  } else if (enemy.enemyDirection === "right") {
    if (enemy.xCoordinate < 5 && notABarrier(enemy, "right") && notAWall(enemy, "right")) {
      enemy.xCoordinate +=1;
    } else {
      enemy.enemyDirection = "down";
    }
  } else {
    enemy.enemyDirection = "left";
  }
}

function moveNpcHorizontal(enemy) {
  if (enemy.enemyDirection === "right") {
    if (enemy.xCoordinate < 5 && notAWall(enemy, "right") && notABarrier(enemy, "right")) {
      enemy.xCoordinate += 1;
    } else {
      enemy.xCoordinate -= 1;
      enemy.enemyDirection = "left";
    }
  } else {
    if (enemy.xCoordinate > 0 && notAWall(enemy, "left") && notABarrier(enemy, "left")) {
      enemy.xCoordinate -= 1;
    } else {
      enemy.xCoordinate += 1;
      enemy.enemyDirection = "right";
    }
  }
}

function moveNpcVertical(enemy) {
  if (enemy.enemyDirection === "down") {
    if (enemy.yCoordinate < 5 && notAWall(enemy, "down") && notABarrier(enemy, "down")) {
      enemy.yCoordinate += 1;
    } else {
      enemy.yCoordinate -= 1;
      enemy.enemyDirection = "up";
    }
  } else {
    if (enemy.yCoordinate > 0 && notAWall(enemy, "up") && notABarrier(enemy, "up")) {
      enemy.yCoordinate -= 1;
    } else {
      enemy.yCoordinate += 1;
      enemy.enemyDirection = "down";
    }
  }
}

function notABarrier(object, direction) {
  if (direction === "left") {
    if ($(".y" + object.yCoordinate + " .x" + (object.xCoordinate - 1)).attr('class').includes("barrier")) {
      return false;
    }
    return true;
  } else if (direction === "right") {
    if ($(".y" + object.yCoordinate + " .x" + (object.xCoordinate + 1)).attr('class').includes("barrier")) {
      return false;
    }
    return true;
  } else if (direction === "up") {
    if ($(".y" + (object.yCoordinate - 1) + " .x" + object.xCoordinate).attr('class').includes("barrier")) {
      return false;
    }
    return true;
  } else if (direction === "down") {
    if ($(".y" + (object.yCoordinate + 1) + " .x" + object.xCoordinate).attr('class').includes("barrier")) {
      return false;
    }
    return true;
  }
}

function notAWall(object, direction) {
  if (direction === "left") {
    if ($(".y" + object.yCoordinate + " .x" + object.xCoordinate).attr('class').includes("wall-left")) {
      return false;
    } else {
      return true;
    }
  } else if (direction === "right") {
    if ($(".y" + object.yCoordinate + " .x" + object.xCoordinate).attr('class').includes("wall-right")) {
      return false;
    } else {
      return true;
    }
  } else if (direction === "up") {
    if ($(".y" + object.yCoordinate + " .x" + object.xCoordinate).attr('class').includes("wall-up")) {
      return false;
    } else {
      return true;
    }
  } else if (direction === "down") {
    if ($(".y" + object.yCoordinate + " .x" + object.xCoordinate).attr('class').includes("wall-down")) {
      return false;
    } else {
      return true;
    }
  }
}

// USER INTERFACE LOGIC
function triggerInterrupt(player, toilet, enemies, turnCounter, turnLimit) {
  var interrupt = false;
  if (player.xCoordinate === toilet.xCoordinate && player.yCoordinate === toilet.yCoordinate) {
    $("#game-over h4").html("You win!");
    $("#controls").hide();
    $("#game-over").show();
    interrupt = true;
  } else if (turnCounter === turnLimit) {
    $("#game-over h4").html("You're out of turns, you lose!");
    $("#controls").hide();
    $("#game-over").show();
    interrupt = true;
  }
  enemies.forEach(function(enemy) {
    if (player.xCoordinate === enemy.xCoordinate && player.yCoordinate === enemy.yCoordinate) {
      $("#game-over h4").html("You lose!");
      $("#controls").hide();
      $("#game-over").show();
      interrupt = true;
    }
  });
  return interrupt;
}

function positionGameObjects(array) {
  $("td").text("");
  array.forEach(function(element) {
    $(".y" + element.yCoordinate + " .x" + element.xCoordinate).html("<img src=\"img/" + element.avatar + "\">");
  });
}

// Positive Turn Counter - In Use
function meterUp(turnCounter, turnLimit) {
  turnCounter ++;
  var percentileWidth = turnCounter / turnLimit * 100;
  if (percentileWidth >= 40 && percentileWidth < 70) {
    $("#meter").addClass("warning");
  } else if (percentileWidth >= 70) {
    $("#meter").addClass("danger");
  }
  $("#meter").width(percentileWidth + "%");
  return turnCounter;
}

// Negative Turn Counter - Not In Use
function meterDown(turnCounter) {
  var meterWidthMax = 660;
  var unitWidth = parseInt($("#meter").width()) / turnCounter;
  turnCounter --;
  var percentileWidth = unitWidth * turnCounter / 660 * 100;
  if (percentileWidth >= 40 && percentileWidth < 70) {
    $("#meter").addClass("warning");
  } else if (percentileWidth < 40) {
    $("#meter").addClass("danger");
  }
  $("#meter").width(percentileWidth + "%");
  return turnCounter;
}

$(document).ready(function() {
  // Configure Meter
  // Use 0% for Positive Turn Counting (turnCounter < turnLimit) or
  // Use 100% for Negative Turn Counting (turnCounter > turnLimit)
  $("#meter").width("100%")
  var turnCounter = 20;
  var turnLimit = 0;

  var gameObjects = [];
  var enemies = [];

  // Create extra game objects and push to corresponding arrays
  var player = new GameObject("default-player.png", 0, 0);
  var toilet = new GameObject("default-goal.png", 5, 5);
  var enemy1 = new GameObject("default-patrol.png", 1, 4, "patrol");
  var enemy2 = new GameObject("default-hunter.png", 5, 0, "hunter", player);
  var enemy3 = new GameObject("default-linear.png", 5, 4, "horizontal");
  var powerUp = new GameObject("default-powerup.png", 3, 3,);
  gameObjects.push(player, toilet, enemy1, enemy2, enemy3, powerUp);
  enemies.push(enemy1, enemy2, enemy3);

  positionGameObjects(gameObjects);

  function progressTurn() {
    positionGameObjects(gameObjects);
    if (triggerInterrupt(player, toilet, enemies, turnCounter, turnLimit) === false) {
      enemies.forEach(function(enemy) {
        movePattern(enemy, turnCounter);
      });
      positionGameObjects(gameObjects);
    }
    // Configure Meter - Use meterUp or meterDown - meterDown in Use
    // turnCounter = meterUp(turnCounter, turnLimit);
    turnCounter = meterDown(turnCounter)
    triggerInterrupt(player, toilet, enemies, turnCounter, turnLimit);
  }

  function playerMove(direction) {
    if (direction === "left") {
      if (player.xCoordinate > 0 && notAWall(player, "left") && notABarrier(player, "left")) {
        player.xCoordinate = player.xCoordinate - 1;
      }
    } else if (direction === "right") {
      if (player.xCoordinate < 5 && notAWall(player, "right") && notABarrier(player, "right")) {
        player.xCoordinate = player.xCoordinate + 1;
      }
    } else if (direction === "up") {
      if (player.yCoordinate > 0 && notAWall(player, "up") && notABarrier(player, "up")) {
        player.yCoordinate = player.yCoordinate - 1;
      }
    } else if (direction === "down") {
      if (player.yCoordinate < 5 && notAWall(player, "down") && notABarrier(player, "down")) {
        player.yCoordinate = player.yCoordinate + 1;
      }
    }
    progressTurn();
  }

  // Mouse Navigation
  $("#navigation button.movement").click(function() {
    var playerDirection = $(this).attr("id");
    playerMove(playerDirection);
  });

  // Arrow Key Navigation
  $(document).keydown(function(e){
    if (triggerInterrupt(player, toilet, enemies, turnCounter, turnLimit)) {
      return;
    } else if (e.keyCode === 65) {
       playerMove("left")
    } else if (e.keyCode === 68) {
       playerMove("right")
    } else if (e.keyCode === 87) {
       playerMove("up")
    } else if (e.keyCode === 83) {
       playerMove("down")
    }
  });

  $("#controls .toggle").click(function() {
    $("#controls button span").toggle();
  });

  $("#restart").click(function() {
    location.reload();
  });
});
