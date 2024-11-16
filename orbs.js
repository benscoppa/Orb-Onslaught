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
    // hit marker
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
  This class creates standard blue orbs.
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
    // the hearts taken when reaching end of path
    this.heartsTaken = 2;
    // coins given when defeated
    this.coinsGiven = 4;
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
  This class creates waves of orbs based on an input array.
*/
class WaveCreator {
  /*
    The constructor sets the starting properties of wave creator.
    var x - the x position of the orb
    var y - the y position of the orb
    var orbs - the array of orbs, path, and spawn timer
    waveTimer - the timer for the entire wave to complete
  */
  constructor(x, y, orbs, waveTimer) {
    this.x = x;
    this.y = y;
    this.orbs = orbs;
    this.waveTimer = waveTimer;
    this.wave = [];
  }
  
  /*
    This function initalizes the wave of orbs, and their paths and spawn timers.
  */
  initialize() {
    // iterate through each orb in the wave
    for (var i = 0; i < this.orbs.length; i++) {
      var orb = this.orbs[i];
      // blue orb
      if (orb.type === 'b') {
        this.wave.push(new BlueOrb(this.x, this.y, orb.path, orb.spawnTime));
      }
      // yellow orb
      else if (orb.type === 'y') {
        this.wave.push(new YellowOrb(this.x, this.y, orb.path, orb.spawnTime));
      }
    }
  }
  
  /*
    This function spawns the orbs based on their timer and deleting them at end of path.
  */
  spawnOrbs() {
    for (var i = this.wave.length - 1; i >= 0; i--) {
      var orb = this.wave[i];
      if (orb.spawnTimer <= 0) {
        orb.draw();
        if (pause === false) {
          orb.move();
        }
      } 
      else {
        orb.spawnTimer -= 1;
      }
      
      // delete orbs that reach the end of the path
      if (orb.end === true) {
        this.wave.splice(i, 1);
      }
      // delete orbs that are killed
      else if (orb.health <= 0) {
        // give coins when orb is destroyed
        if (instructionScreen) {
          instructionsCoins += orb.coinsGiven * coinsScaler;
        }
        else {
          gameCoins += orb.coinsGiven * coinsScaler;
        }
        this.wave.splice(i, 1);
      }
    }
  }
}


/*
  This class manages a 2D array containing multiple waves.
*/
class WaveManager {
  /*
    The constructor sets up the wave manager.
    var waveArray - the 2D array of waves
    var startX - starting x position of orbs in the wave
    var startY - starting y position of orbs in the wave
  */
  constructor(waveArray, startX, startY) {
    this.waveArray = waveArray;
    this.currentWaveIndex = 0;
    this.startX = startX;
    this.startY = startY;
    this.currentWave = null;
    this.waveInProgress = false;
    this.timeBetweenWaves = 300;
    this.waveCooldown = 0;
  }

  /*
    This function starts the next wave.
  */
  startNextWave() {
    if (this.currentWaveIndex < this.waveArray.length) {
      var wave = this.waveArray[this.currentWaveIndex];
      this.currentWave = new WaveCreator(this.startX, this.startY, wave, 600);
      this.currentWave.initialize();
      this.currentWaveIndex++;
      this.waveInProgress = true;
      
      // add the wave to each tower
      for (var i = towers.length - 1; i >= 0; i--) {
        var tower = towers[i];
        tower.currentWave = this.currentWave.wave;
      }
    }
  }

  /*
    Updates the wave manager each frame.
  */
  update() {
    // If there is an active wave spawn orbs
    if (this.waveInProgress && this.currentWave) {
      this.currentWave.spawnOrbs();

      // After the wave finishes update the cooldown
      if (this.currentWave.wave.length === 0) {
        this.waveInProgress = false;
        this.waveCooldown = this.timeBetweenWaves;
      }
    }
    // decrement the cooldown timer
    else if (!this.waveInProgress && this.waveCooldown > 0 && pause === false) {
      this.waveCooldown--;
      if (this.waveCooldown <= 0) {
        this.startNextWave();
      }
    }
  }

  /*
    Draw the wave manager hud.
  */
  draw() {
    textSize(30);
    fill(0);
    text(`Wave ${this.currentWaveIndex}/${this.waveArray.length}`, 250, 40);
  }
}