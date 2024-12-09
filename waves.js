/*
  This function returns the wave array.
*/
function createWaves() {
  
  return [ // wave 1
          [{ type: 'b', path: tilemap.paths[0], spawnTime: 60 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 120 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 180 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 210 }],
           // wave 2
          [{ type: 'b', path: tilemap.paths[0], spawnTime: 60 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 100 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 140 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 180 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 220 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 260 }],
           // wave 3
          [{ type: 'b', path: tilemap.paths[1], spawnTime: 60 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 100 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 140 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 180 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 220 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 260 }],
           // wave 4
          [{ type: 'b', path: tilemap.paths[1], spawnTime: 60 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 110 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 140 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 180 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 210 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 260 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 290 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 340 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 380 }],
           // wave 5
          [{ type: 'b', path: tilemap.paths[0], spawnTime: 60 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 100 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 140 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 180 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 220 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 260 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 320 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 360 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 400 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 440 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 480 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 520 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 560 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 600 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 660 }],
           // wave 6
          [{ type: 'y', path: tilemap.paths[0], spawnTime: 60 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 100 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 140 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 180 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 220 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 260 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 320 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 360 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 400 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 440 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 480 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 520 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 560 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 600 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 660 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 700 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 740 }],
           // wave 7
          [{ type: 'b', path: tilemap.paths[0], spawnTime: 60 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 100 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 140 },
           { type: 'b', path: tilemap.paths[0], spawnTime: 180 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 220 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 260 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 300 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 340 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 380 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 420 }],
           // wave 8
          [{ type: 'b', path: tilemap.paths[1], spawnTime: 60 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 100 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 140 },
           { type: 'b', path: tilemap.paths[1], spawnTime: 180 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 220 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 260 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 300 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 340 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 380 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 420 }],
           // wave 9
          [{ type: 'y', path: tilemap.paths[1], spawnTime: 30 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 60 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 90 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 120 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 150 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 180 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 210 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 240 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 270 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 300 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 320 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 340 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 360 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 380 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 410 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 440 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 470 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 500 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 530 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 560 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 590 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 620 },
           { type: 'y', path: tilemap.paths[0], spawnTime: 650 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 670 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 690 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 710 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 730 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 750 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 770 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 800 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 830 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 860 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 890 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 920 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 950 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 980 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 1010 },
           { type: 'y', path: tilemap.paths[1], spawnTime: 1040 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 1060 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 1080 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 1100 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 1120 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 1140 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 1160 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 1180 }],
           // wave 10
          [{ type: 'o', path: tilemap.paths[1], spawnTime: 20 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 40 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 60 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 80 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 100 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 120 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 140 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 160 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 180 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 200 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 220 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 240 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 260 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 280 },
           { type: 'o', path: tilemap.paths[1], spawnTime: 300 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 320 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 340 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 360 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 380 },
           { type: 'o', path: tilemap.paths[0], spawnTime: 400 },
           { type: 'r', path: tilemap.paths[1], spawnTime: 500 },
           { type: 'r', path: tilemap.paths[1], spawnTime: 580 },
           { type: 'r', path: tilemap.paths[0], spawnTime: 660 },
           { type: 'r', path: tilemap.paths[0], spawnTime: 740 }]
        ];
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
      // orange orb
      else if (orb.type === 'o') {
        this.wave.push(new OrangeOrb(this.x, this.y, orb.path, orb.spawnTime));
      }
      // red orb
      else if (orb.type === 'r') {
        this.wave.push(new RedOrb(this.x, this.y, orb.path, orb.spawnTime));
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
        orb.drawImage();
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
    this.currentWave = [];
    this.waveInProgress = false;
    this.timeBetweenWaves = 60;
    this.waveCooldown = 0;
    this.autoWaves = false;
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

      // After the wave finishes update the cooldown if on auto wave mode
      if (this.currentWave.wave.length === 0) {
        this.waveInProgress = false;
        if (this.autoWaves) {
          // decrement wave timer
          this.waveCooldown = this.timeBetweenWaves;
        }
        else {
          // unpress wave start button
          waveStartButton.unpressed();
        }
      }
    }
    // decrement the cooldown timer if on auto wave mode
    else if (!this.waveInProgress && this.waveCooldown > 0 && this.autoWaves && pause === false) {
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
    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
    text(`Wave`, 260, 22);
    text(`${this.currentWaveIndex}/${this.waveArray.length}`, 260, 42);
    textAlign(LEFT, BASELINE);
  }
}
