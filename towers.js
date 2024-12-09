/*
  This class creates cannon towers.
*/
class Cannon {
  /*
    The constructor sets the starting properties of the cannon.
    var x - the x position of the cannon
    var y - the y position of the cannon
    var wave - the starting wave to shoot
  */
  constructor(x, y, wave) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.range = 100;
    this.orbsInRange = new Set();
    this.currentWave = wave;
    this.shootTimer = 0;
    this.damage = 5;
    this.cannonballs = [];
    this.displayRange = false;
    this.canPlace = true;
  }
  
  /*
    This function draws the cannon.
  */
  draw() {    
    push();
    translate(this.x, this.y);
    
    // draw the base of the cannon
    fill(100);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, 40, 40);
    
    // draw the barrel
    fill(50);
    ellipse(-8, 0, 10, 20);
    rect(-8, -10, 28, 20);
    ellipse(20, 0, 11.5, 23);
    fill(0);
    ellipse(20, 0, 6, 12);
    strokeWeight(1);
    
    pop();
  }
  
  /*
    This function draws the cannon from an image.
  */
  drawImage() {
    
    // draw cannonballs
    for (var i = this.cannonballs.length - 1; i >= 0; i--) {
      var cannonball = this.cannonballs[i];
      cannonball.draw();
    }
    
    push();
    translate(this.x, this.y);
    
    // draw the range indicator if active
    if (this.displayRange === true) {
      noStroke();
      // gray if placeable red if not
      if (this.canPlace === true) {
        fill(128, 128, 128, 128);
      }
      else {
        fill(255, 0, 0, 128);
      }
      ellipse(0, 0, this.range * 2 - 30, this.range * 2 - 30);
    }
    
    // Rotate to face orb
    rotate(this.angle);
    imageMode(CENTER);
    image(cannonImage, 0, 0);
    imageMode(CORNERS);
    pop();
  }
  
  /*
    This finds the orbs in range and shoots them.
  */
  shoot() {
    // move existing cannonballs
    this.cannonball();
    
    // remove orbs not in range or dead
    for (var orb of this.orbsInRange) {
      if (dist(this.x, this.y, orb.x, orb.y) >= this.range || orb.health <= 0) {
        this.orbsInRange.delete(orb);
      }
    }
    
    // add to orb to range
    for (var newOrb of this.currentWave) {
      if (!this.orbsInRange.has(newOrb) && dist(this.x, this.y, newOrb.x, newOrb.y) <= this.range && newOrb.y > -10) {
        this.orbsInRange.add(newOrb);
      }
    }
    
    // decrement shoot timer
    this.shootTimer -= 1;
    
    // return if no orbs in rangae to shoot
    if (this.orbsInRange.size === 0) {
      return;
    }
    
    // face toward the orb
    var targetOrb = [...this.orbsInRange][0];
    var dx = targetOrb.x - this.x;
    var dy = targetOrb.y - this.y;
    this.angle = atan2(dy, dx);
      
    // shoot the target orb
    if (this.shootTimer <= 0) {
      this.cannonballs.push(new Cannonball(this.x, this.y, this.angle));
      this.shootTimer = 45;
    }
  }
  
  /*
    Handle the movement and drawing of cannonballs.
  */
  cannonball() {
    for (var i = this.cannonballs.length - 1; i >= 0; i--) {
      var cannonball = this.cannonballs[i];
      cannonball.move();
      
      // delete the cannonball off screen
      if (cannonball.x > 810 || cannonball.y > 610 || cannonball.x < -10 || cannonball.y < -10) {
        this.cannonballs.splice(i, 1);
        break;
      }
      
      // check collisions with orbs
      for (var j = this.currentWave.length - 1; j >= 0; j--) {
        var orb = this.currentWave[j];
        // if the cannonball hits an orb
        if (dist(cannonball.x, cannonball.y, orb.x, orb.y) <= 20) {
          this.cannonballs.splice(i, 1);
          orb.health -= this.damage;
          orb.damage = true;
          orb.damageTimer = 10;
          break;
        }
      }
    }
  }
}

/*
  This class creates cannonballs shoot by the cannon tower.
*/
class Cannonball {
  /*
    The constructor sets the starting properties of the cannonball.
    var x - the x position of the cannonball
    var y - the y position of the cannonball
    var angle - the direction to travell
  */
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.speed = 7;
    this.dx = cos(angle) * this.speed;
    this.dy = sin(angle) * this.speed;
  }
  
  /*
    Draws the cannonball.
  */
  draw() {
    push();
    translate(this.x, this.y);
    fill(50);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, 15, 15);
    strokeWeight(1);
    pop();
  }
  
  /*
    Move the cannonball.
  */
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}


/*
  This class creates tesla towers.
*/
class Tesla {
  /*
    The constructor sets the starting properties of the cannon.
    var x - the x position of the cannon
    var y - the y position of the cannon
    var wave - the starting wave to shoot
  */
  constructor(x, y, wave) {
    this.x = x;
    this.y = y;
    this.range = 70;
    this.chainRange = 50;
    this.orbsInRange = new Set();
    this.currentWave = wave;
    this.shootTimer = 0;
    this.lightningArray = [];
    this.damage = 3;
    this.displayRange = false;
    this.canPlace = true;
  }
  
  /*
    This function draws the tesla.
  */
  draw() {
    push();
    translate(this.x, this.y);
    
    // draw the base of the tesla
    fill(100);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, 40, 40);
    
    // draw the shaft
    fill(220, 0, 0);
    ellipse(0, 2, 10, 10);
    rect(-5, -10, 10, 10);
    
    fill(192);
    rect(-10, -13, 20, 6);
    
    fill(220, 0, 0);
    ellipse(0, -10, 10, 10);
    
    // create the coil ring
    var ring = createGraphics(40, 40);

    ring.fill(192);
    ring.stroke(0);
    ring.strokeWeight(2);
    ring.ellipse(20, 20, 30, 30);

    ring.erase();
    ring.ellipse(20, 20, 17, 17);
    ring.noErase();
    
    ring.noFill();
    ring.ellipse(20, 20, 17, 17);
    
    image(ring, -20, -30);
  
    strokeWeight(1);
    
    pop();
  }
  
  /*
    This function draws the tesla from an image.
  */
  drawImage() {
    push();
    translate(this.x, this.y);
    
    // draw the range indicator if active
    if (this.displayRange === true) {
      noStroke();
      // gray if placeable red if not
      if (this.canPlace === true) {
        fill(128, 128, 128, 128);
      }
      else {
        fill(255, 0, 0, 128);
      }
      ellipse(0, 0, this.range * 2 - 30, this.range * 2 - 30);
    }
    
    // Rotate to face orb
    imageMode(CENTER);
    image(teslaImage, 0, 0);
    imageMode(CORNERS);
    pop();
    
    // draw the lightning
    for (var i = this.lightningArray.length - 1; i >= 0; i--) {
      this.lightningArray[i].draw();
    }  
  }
  
  /*
    This function shoots orbs and handles lightning bolts.
  */
  shoot() {
    
    // decrement shoot timer
    this.shootTimer -= 1;
      
    // shoot lightning if timer is done
    if (this.shootTimer <= 0) {
      this.lightning();
      this.shootTimer = 25;
    }
    
    // update each bolt
    for (var i = this.lightningArray.length - 1; i >= 0; i--) {
      var bolt = this.lightningArray[i];
      bolt.update();

      // delete bolt if timer expired
      if (bolt.timer <= 0) {
        this.lightningArray.splice(i, 1);
      }
    }
  }
  
  /*
    handle creating new lightning bolts
  */
  lightning() {
    
    // find the nearest orb within tower range
    var targetOrb = this.currentWave.reduce((nearest, orb) => {
      // make sure orb is not outside range or dead
      if (dist(this.x, this.y, orb.x, orb.y) > this.range || orb.health <= 0 || orb.y < -10) {
        return nearest;
      } 
      return !nearest || dist(this.x, this.y, orb.x, orb.y) < dist(this.x, this.y, nearest.x, nearest.y) ? orb : nearest;
    }, null);
    
    // return if no target orb
    if (targetOrb === null) {
      return;
    }
    
    // damage the target orb
    targetOrb.health -= this.damage;
    targetOrb.damage = true;
    targetOrb.damageTimer = 10;

    // find nearest orb to target orb within chain range
    var chainTarget = this.currentWave.reduce((nearest, orb) => {
      // make sure the orb is not the taget orb, outside the chain range or dead
      if (orb === targetOrb || dist(targetOrb.x, targetOrb.y, orb.x, orb.y) > this.chainRange || orb.health <= 0|| orb.y < -15) {
        return nearest;
      } 
      return !nearest || dist(targetOrb.x, targetOrb.y, orb.x, orb.y) < dist(targetOrb.x, targetOrb.y, nearest.x, nearest.y) ? orb : nearest;
    }, null);

    // damage the chain orb if it exist
    if (chainTarget) {
      chainTarget.health -= this.damage;
      chainTarget.damage = true;
      chainTarget.damageTimer = 10;

      // lightning to both orbs
      this.lightningArray.push(new Lightning(this.x, this.y - 10, targetOrb.x, targetOrb.y, chainTarget.x, chainTarget.y));
    } 
    // lightning to one orb
    else {
      this.lightningArray.push(new Lightning(this.x, this.y - 10, targetOrb.x, targetOrb.y, null, null));
    }
  }
}


/*
  This class creates lightning shoot from tesla towers.
*/
class Lightning {
  /*
    The constructor sets the starting properties of the lightning.
    var startX - the start x position of the lightning
    var startY - the start y position of the lightning
    var targetX - the target x position of the lightning
    var targetY - the target y position of the lightning
    var chainX - the chain x position of the lightning if there is one
    var chainY - the chain y position of the lightning if there is one
  */
  constructor(startX, startY, targetX, targetY, chainX, chainY) {
    this.startX = startX;
    this.startY = startY;
    this.targetX = targetX;
    this.targetY = targetY;
    this.chainX = chainX;
    this.chainY = chainY;
    this.timer = 12;
  }

  /*
    This function draws the lightning.
  */
  draw() {
    push();
    if (this.timer > 0) {
      stroke(160, 200, 215, map(this.timer, 0, 12, 0, 255));
      strokeWeight(4);
      line(this.startX, this.startY, this.targetX, this.targetY);
      
      // only draw chain if there is a chain target
      if (this.chainX !== null && this.chainY !== null) {
        line(this.targetX, this.targetY, this.chainX, this.chainY);
      }
    }
    pop();
  }

  /*
    This function updates the lightning timer.
  */
  update() {
    this.timer--;
  }
}


/*
  This class creates cannon towers.
*/
class Crossbow {
  /*
    The constructor sets the starting properties of the crossbow.
    var x - the x position of the crossbow
    var y - the y position of the crossbow
    var wave - the starting wave to shoot
  */
  constructor(x, y, wave) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.range = 125;
    this.orbsInRange = new Set();
    this.currentWave = wave;
    this.shootTimer = 0;
    this.damage = 4;
    this.arrows = [];
    this.displayRange = false;
    this.canPlace = true;
    this.displayArrow = true;
  }
  
  /*
    This function draws the crossbow.
  */
  draw() {
    push();
    translate(this.x, this.y);
    
    // draw the base of the crossbow
    fill(100);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, 40, 40);

    // draw the crossbow
    fill(130, 70, 30);
    rect(-20, -5, 40, 10);
    
    // create the bow
    var bow = createGraphics(40, 40);
    bow.fill(128, 71, 28);
    bow.stroke(0);
    bow.strokeWeight(2);
    bow.arc(20, 20, 30, 45, -HALF_PI, HALF_PI);
    bow.arc(13, 20, 30, 40, -HALF_PI, HALF_PI);
    
    bow.erase();
    bow.arc(11, 20, 30, 40, -HALF_PI, HALF_PI);
    bow.noErase();

    image(bow, -12, -20);
    
    // add the string
    fill(0);
    strokeWeight(3);
    line(12, -20, -18, -5);
    line(12, 20, -18, 5);
    
    fill(192);
    ellipse(12, -20, 7, 7);
    ellipse(12, 20, 7, 7);
    
    strokeWeight(1);
    
    pop();
  }
  
  /*
    This function draws the crossbow from an image.
  */
  drawImage() {
    push();
    translate(this.x, this.y);
    
    // draw the range indicator if active
    if (this.displayRange === true) {
      noStroke();
      // gray if placeable red if not
      if (this.canPlace === true) {
        fill(128, 128, 128, 128);
      }
      else {
        fill(255, 0, 0, 128);
      }
      ellipse(0, 0, this.range * 2 - 30, this.range * 2 - 30);
    }
    
    // Rotate to face orb
    rotate(this.angle);
    imageMode(CENTER);
    // display loaded arrow if no orbs in range and wave in progress
    if (this.displayArrow === true && waveManager.waveInProgress === true) {
      image(crossbowLoadedImage, 0, 0);
    }
    else {
      image(crossbowImage, 0, 0);
    }
    imageMode(CORNERS);
    pop();
    
    // draw arrows
    for (var i = this.arrows.length - 1; i >= 0; i--) {
      var arrow = this.arrows[i];
      arrow.drawImage();
    }  
  }
  
  /*
    This finds the orbs in range and shoots them.
  */
  shoot() {
    // move existing cannonballs
    this.arrow();
    
    // remove orbs not in range or dead
    for (var orb of this.orbsInRange) {
      if (dist(this.x, this.y, orb.x, orb.y) >= this.range || orb.health <= 0) {
        this.orbsInRange.delete(orb);
      }
    }
    
    // add to orb to range
    for (var newOrb of this.currentWave) {
      if (!this.orbsInRange.has(newOrb) && dist(this.x, this.y, newOrb.x, newOrb.y) <= this.range && newOrb.y > -10) {
        this.orbsInRange.add(newOrb);
      }
    }
    
    // decrement shoot timer
    this.shootTimer -= 1;
    
    // return if no orbs in range to shoot and display arrow
    if (this.orbsInRange.size === 0) {
      this.displayArrow = true;
      return;
    }
    
    // remove display arrow
    this.displayArrow = false;
    
    // face toward the orb
    var targetOrb = [...this.orbsInRange][0];
    var dx = targetOrb.x - this.x;
    var dy = targetOrb.y - this.y;
    this.angle = atan2(dy, dx);
      
    // shoot the target orb
    if (this.shootTimer <= 0) {
      this.arrows.push(new Arrow(this.x, this.y, this.angle));
      this.shootTimer = 30;
    }
  }
  
  /*
    Handle the movement and drawing of arrows.
  */
  arrow() {
    for (var i = this.arrows.length - 1; i >= 0; i--) {
      var arrow = this.arrows[i];
      arrow.move();
      
      // delete the arrow off screen
      if (arrow.x > 850 || arrow.y > 650 || arrow.x < -50 || arrow.y < -50) {
        this.arrows.splice(i, 1);
        break;
      }
      
      // check collisions with orbs
      for (var j = this.currentWave.length - 1; j >= 0; j--) {
        var orb = this.currentWave[j];
        // if the arrow hits an orb
        if (dist(arrow.x, arrow.y, orb.x, orb.y) <= 20) {
          this.arrows.splice(i, 1);
          orb.health -= this.damage;
          orb.damage = true;
          orb.damageTimer = 10;
          break;
        }
      }
    }
  }
}

/*
  This class creates arrows shoot by the crossbow tower.
*/
class Arrow {
  /*
    The constructor sets the starting properties of the arrow.
    var x - the x position of the arrow
    var y - the y position of the arrow
    var angle - the direction to travel
  */
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.angle = angle;
    this.dx = cos(angle) * this.speed;
    this.dy = sin(angle) * this.speed;
  }
  
  /*
    Draws the cannonball.
  */
  draw() {
    push();
    translate(this.x, this.y);
    fill(130, 70, 30);
    stroke(0);
    strokeWeight(2);
    
    // add the shaft
    rect(-35, -3, 33, 6);
    
    // add the arrow
    fill(192);
    triangle(6, 0, -6, 7, -6, -7);
    
    // add fletching
    fill(220, 20, 60);
    
    beginShape();
    vertex(-25, 0);
    vertex(-30, 6);
    vertex(-40, 6);
    vertex(-35, 0);
    endShape(CLOSE);
    
    beginShape();
    vertex(-25, 0);
    vertex(-30, -6);
    vertex(-40, -6);
    vertex(-35, 0);
    endShape(CLOSE);
    
    strokeWeight(1);
    pop();
  }
  
  /*
    This function draws the arrow from an image.
  */
  drawImage() {
    push();
    translate(this.x, this.y);
    
    // Rotate to face orb
    rotate(this.angle);
    imageMode(CENTER);
    image(arrowImage, 0, 0);
    imageMode(CORNERS);
    pop();
  }
  
  /*
    Move the cannonball.
  */
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}


/*
  This function handles a build tower updating its location, range indicator and its placeablility.
  var buildTower - the current buildTower tower object
*/
function handleBuildTower(buildTower) {
  var xCor = mouseX / windowScale;
  var yCor = mouseY / windowScale;
    
  // check if mouse is over shop and display range if not
  var inShop = (xCor >= shop.x - 20) && (xCor <= shop.x + 120) && (yCor >= shop.y) && (yCor <= shop.y + 365);
  buildTower.displayRange = !inShop;
    
  // tower can be placed when not over shop and on not over unplaceable tiles
  buildTower.canPlace = !inShop && tilemap.canPlaceTower(xCor, yCor);
    
  buildTower.x = xCor;
  buildTower.y = yCor;
}