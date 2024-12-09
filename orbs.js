/*
  This class creates standard blue orbs.
*/
class BlueOrb {
  /*
    The constructor sets the starting properties of the blue orb.
    var x - the x position of the orb
    var y - the y position of the orb
    var path - the path that the orb will move on
    var spawnTime - the time it takes for specific orb to spawn
  */
  constructor(x, y, path, spawnTime) {
    this.x = x;
    this.y = y;
    // handle spawn timer
    this.spawnTimer = spawnTime;
    // handle the path and speed
    this.path = path;
    this.currentPath = 0;
    this.currentPoint = 0;
    this.speed = 1;
    // handle the bounce animation
    this.bounceHeight = 0.6;
    this.bounceFrequency = 0.2;
    this.time = 0;
    // handle reaching the end of the map
    this.end = false;
    // handle health
    this.health = 10 * heathScaler;
    this.damage = false;
    this.damageTimer = 0;
    // the hearts taken when reaching end of path
    this.heartsTaken = 1;
    // coins given when defeated
    this.coinsGiven = 2;
  }
  
  /*
    This function draws the blue orb.
  */
  draw() {
    push();
    translate(this.x, this.y);
    // draw the orb
    stroke(0);
    strokeWeight(2);
    // hit marker for hit orb image
    if (this.damage) {
      fill(200, 50, 50);
      this.damageTimer--;

      // turn of effect after timer
      if (this.damageTimer <= 0) {
        this.damage = false;
      }
    } 
    // otherwise blue color
    else {
      fill(50, 100, 200);
    }
    ellipse(0, 0, 35, 35);

    // add eyes
    fill(255);
    noStroke();
    ellipse(-6.6, -4.4, 6.6, 6.6);
    ellipse(6.6, -4.4, 6.6, 6.6);

    // add pupils
    fill(0);
    ellipse(-6.6, -4.4, 2.5, 2.5);
    ellipse(6.6, -4.4, 2.5, 2.5);
    pop();
  }
  
  
  /*
    This function draws the orb from an image.
  */
  drawImage() {
    
    push();
    translate(this.x, this.y);
    
    imageMode(CENTER);
    // hit marker
    if (this.damage) {
      image(hitOrbImage, 0, 0);
      this.damageTimer--;

      // turn of effect after timer
      if (this.damageTimer <= 0) {
        this.damage = false;
      }
    } 
    else {
      image(blueOrbImage, 0, 0);
    }
    imageMode(CORNERS);
    
    pop();
  }
  
  /*
    This function moves the blue orb along its single path.
  */
  move() {
    // scaled speed
    var scaledSpeed = this.speed * speedScaler;
    
    // stop once the path is completed
    if (!this.path || this.currentPoint >= this.path.length) {
      this.end = true;
      gameLives -= this.heartsTaken;
      return;
    }

    var target = this.path[this.currentPoint];
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var distance = dist(this.x, this.y, target.x, target.y);

    // move towards the target point
    if (distance > scaledSpeed) {
      this.x += (dx / distance) * scaledSpeed;
      this.y += (dy / distance) * scaledSpeed;
    } 
    else {
      this.x = target.x;
      this.y = target.y;
      this.currentPoint++;
    }
    
    // update time and add bounce effect
    this.time += this.bounceFrequency * speedScaler;
    var bounceOffset = sin(this.time) * this.bounceHeight * speedScaler;
    // smaller bounce if moving vertically
    if (this.y == target.y) {
      this.y += bounceOffset / 2;
    }
    else {
      this.y += bounceOffset;
    }
  }
}


/*
  This class creates standard faster orbs.
*/
class YellowOrb {
  /*
    The constructor sets the starting properties of the blue orb.
    var x - the x position of the orb
    var y - the y position of the orb
    var path - the path for the orb to follow
    var spawnTime - the time it takes for specific orb to spawn
  */
  constructor(x, y, path, spawnTime) {
    this.x = x;
    this.y = y;
    // handle spawn timer
    this.spawnTimer = spawnTime;
    // handle the path and speed
    this.path = path;
    this.currentPath = 0;
    this.currentPoint = 0;
    this.speed = 1.5;
    // handle the bounce animation
    this.bounceHeight = 0.7;
    this.bounceFrequency = 0.3;
    this.time = 0;
    // handle reaching the end of the map
    this.end = false;
    // handle health
    this.health = 10 * heathScaler;
    this.damage = false;
    this.damageTimer = 0;
    // the hearts taken when reaching end of path
    this.heartsTaken = 2;
    // coins given when defeated
    this.coinsGiven = 2;
  }
  
  /*
    This function draws the blue orb.
  */
  draw() {
    push();
    translate(this.x, this.y);
    // draw the orb
    stroke(0);
    strokeWeight(2);
    
    // yellow color
    fill(175, 175, 0);
    ellipse(0, 0, 35, 35);

    // add eyes
    fill(255);
    noStroke();
    ellipse(-6.6, -4.4, 6.6, 6.6);
    ellipse(6.6, -4.4, 6.6, 6.6);

    // add pupils
    fill(0);
    ellipse(-6.6, -4.4, 2.5, 2.5);
    ellipse(6.6, -4.4, 2.5, 2.5);
    pop();
  }
  
  /*
    This function draws the orb from an image.
  */
  drawImage() {
    
    push();
    translate(this.x, this.y);
    
    imageMode(CENTER);
    // hit marker
    if (this.damage) {
      image(hitOrbImage, 0, 0);
      this.damageTimer--;

      // turn of effect after timer
      if (this.damageTimer <= 0) {
        this.damage = false;
      }
    } 
    else {
      image(yellowOrbImage, 0, 0);
    }
    imageMode(CORNERS);
    
    pop();
  }
  
  /*
    This function moves the blue orb along its single path.
  */
  move() {
    // scaled speed
    var scaledSpeed = this.speed * speedScaler;
    
    // stop once the path is completed
    if (!this.path || this.currentPoint >= this.path.length) {
      this.end = true;
      if (instructionScreen) {
        instructionsLives -= this.heartsTaken;
      }
      else {
        gameLives -= this.heartsTaken;
      }
      return;
    }

    // find the distance too target point
    var target = this.path[this.currentPoint];
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var distance = dist(this.x, this.y, target.x, target.y);

    // move towards the target point
    if (distance > scaledSpeed) {
      this.x += (dx / distance) * scaledSpeed;
      this.y += (dy / distance) * scaledSpeed;
    } 
    else {
      this.x = target.x;
      this.y = target.y;
      this.currentPoint++;
    }
    
    // update time and add bounce effect
    this.time += this.bounceFrequency * speedScaler;
    var bounceOffset = sin(this.time) * this.bounceHeight * speedScaler;
    // smaller bounce if moving vertically
    if (this.y == target.y) {
      this.y += bounceOffset / 2;
    }
    else {
      this.y += bounceOffset;
    }
  }
}


/*
  This class creates orange orbs with more health.
*/
class OrangeOrb {
  /*
    The constructor sets the starting properties of the red orb.
    var x - the x position of the orb
    var y - the y position of the orb
    var path - the path that the orb will move on
    var spawnTime - the time it takes for specific orb to spawn
  */
  constructor(x, y, path, spawnTime) {
    this.x = x;
    this.y = y;
    // handle spawn timer
    this.spawnTimer = spawnTime;
    // handle the path and speed
    this.path = path;
    this.currentPath = 0;
    this.currentPoint = 0;
    this.speed = 1;
    // handle the bounce animation
    this.bounceHeight = 0.6;
    this.bounceFrequency = 0.2;
    this.time = 0;
    // handle reaching the end of the map
    this.end = false;
    // handle health
    this.health = 30 * heathScaler;
    this.damage = false;
    this.damageTimer = 0;
    // the hearts taken when reaching end of path
    this.heartsTaken = 5;
    // coins given when defeated
    this.coinsGiven = 6;
  }
  
  /*
    This function draws the blue orb.
  */
  draw() {
    push();
    translate(this.x, this.y);
    // draw the orb
    stroke(0);
    strokeWeight(2);
    
    // orange color
    fill(200, 130, 20);
    ellipse(0, 0, 35, 35);

    // add eyes
    fill(255);
    noStroke();
    ellipse(-6.6, -4.4, 6.6, 6.6);
    ellipse(6.6, -4.4, 6.6, 6.6);

    // add pupils
    fill(0);
    ellipse(-6.6, -4.4, 2.5, 2.5);
    ellipse(6.6, -4.4, 2.5, 2.5);
    pop();
  }
  
  /*
    This function draws the orb from an image.
  */
  drawImage() {
    
    push();
    translate(this.x, this.y);
    
    imageMode(CENTER);
    // hit marker
    if (this.damage) {
      image(hitOrbImage, 0, 0);
      this.damageTimer--;

      // turn of effect after timer
      if (this.damageTimer <= 0) {
        this.damage = false;
      }
    } 
    else {
      image(orangeOrbImage, 0, 0);
    }
    imageMode(CORNERS);
    
    pop();
  }
  
  /*
    This function moves the blue orb along its single path.
  */
  move() {
    // scaled speed
    var scaledSpeed = this.speed * speedScaler;
    
    // stop once the path is completed
    if (!this.path || this.currentPoint >= this.path.length) {
      this.end = true;
      gameLives -= this.heartsTaken;
      return;
    }

    var target = this.path[this.currentPoint];
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var distance = dist(this.x, this.y, target.x, target.y);

    // move towards the target point
    if (distance > scaledSpeed) {
      this.x += (dx / distance) * scaledSpeed;
      this.y += (dy / distance) * scaledSpeed;
    } 
    else {
      this.x = target.x;
      this.y = target.y;
      this.currentPoint++;
    }
    
    // update time and add bounce effect
    this.time += this.bounceFrequency * speedScaler;
    var bounceOffset = sin(this.time) * this.bounceHeight * speedScaler;
    // smaller bounce if moving vertically
    if (this.y == target.y) {
      this.y += bounceOffset / 2;
    }
    else {
      this.y += bounceOffset;
    }
  }
}


/*
  This class creates red orbs with tons of health.
*/
class RedOrb {
  /*
    The constructor sets the starting properties of the red orb.
    var x - the x position of the orb
    var y - the y position of the orb
    var path - the path that the orb will move on
    var spawnTime - the time it takes for specific orb to spawn
  */
  constructor(x, y, path, spawnTime) {
    this.x = x;
    this.y = y;
    // handle spawn timer
    this.spawnTimer = spawnTime;
    // handle the path and speed
    this.path = path;
    this.currentPath = 0;
    this.currentPoint = 0;
    this.speed = 0.5;
    // handle the bounce animation
    this.bounceHeight = 0.6;
    this.bounceFrequency = 0.1;
    this.time = 0;
    // handle reaching the end of the map
    this.end = false;
    // handle health
    this.health = 300 * heathScaler;
    this.damage = false;
    this.damageTimer = 0;
    // the hearts taken when reaching end of path
    this.heartsTaken = 25;
    // coins given when defeated
    this.coinsGiven = 25;
  }
  
  /*
    This function draws the blue orb.
  */
  draw() {
    push();
    translate(this.x, this.y);
    // draw the orb
    stroke(0);
    strokeWeight(2);
    
    // red color
    fill(245, 0, 0);
    ellipse(0, 0, 35, 35);

    // add eyes
    fill(255);
    noStroke();
    ellipse(-6.6, -4.4, 6.6, 6.6);
    ellipse(6.6, -4.4, 6.6, 6.6);

    // add pupils
    fill(0);
    ellipse(-6.6, -4.4, 2.5, 2.5);
    ellipse(6.6, -4.4, 2.5, 2.5);
    pop();
  }
  
  /*
    This function draws the orb from an image.
  */
  drawImage() {
    
    push();
    translate(this.x, this.y);
    
    imageMode(CENTER);
    // hit marker
    if (this.damage) {
      image(hitOrbImage, 0, 0);
      this.damageTimer--;

      // turn of effect after timer
      if (this.damageTimer <= 0) {
        this.damage = false;
      }
    } 
    else {
      image(redOrbImage, 0, 0);
    }
    imageMode(CORNERS);
    
    pop();
  }
  
  /*
    This function moves the blue orb along its single path.
  */
  move() {
    // scaled speed
    var scaledSpeed = this.speed * speedScaler;
    
    // stop once the path is completed
    if (!this.path || this.currentPoint >= this.path.length) {
      this.end = true;
      gameLives -= this.heartsTaken;
      return;
    }

    var target = this.path[this.currentPoint];
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var distance = dist(this.x, this.y, target.x, target.y);

    // move towards the target point
    if (distance > scaledSpeed) {
      this.x += (dx / distance) * scaledSpeed;
      this.y += (dy / distance) * scaledSpeed;
    } 
    else {
      this.x = target.x;
      this.y = target.y;
      this.currentPoint++;
    }
    
    // update time and add bounce effect
    this.time += this.bounceFrequency * speedScaler;
    var bounceOffset = sin(this.time) * this.bounceHeight * speedScaler;
    // smaller bounce if moving vertically
    if (this.y == target.y) {
      this.y += bounceOffset / 2;
    }
    else {
      this.y += bounceOffset;
    }
  }
}