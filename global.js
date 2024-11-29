// handle scaling to fit window
var baseWidth = 800;
var baseHeight = 600;
var windowScale;
var canvas;

// Title objects
var orbTitle;
var onslaughtTitle;

// cannon animations
var cannonAnimationOne;
var cannonAnimationTwo;


// booleans for progressing through menus and game
var titleScreen = true;
var instructionScreen = false;
var optionScreen = false;
var startGame = false;
var gameOver = false;
var pause = false;
var gameWon = false;
// booleans for progresing through instructions
var instructionOne = true;
var instructionTwo = false;

// array to store button objects
var buttons = [];

// start button object
var startButton;
// menu button object
var menuButton;
// coins option button object
var coinButton;
// speed option button object
var speedButton;
// health option button object
var healthButton;
// lives option button object
var livesButton;

// return to options screen after game ends
var returnToOptionsButton;

// instuctions one tilemap object
var instructrionsOneTilemap;

// instrucctions two tilemap object
var instructionsTwoTilemap;

// instructions screen waves
var instructionsOneWave;
var instructionsTwoWave;

// instructions one cannon objects
var instructionsOneCannonOne;
var instructionsOneCannonTwo;

// instructions two cannon objects
var instructionsTwoCannonOne;
var instructionsTwoCannonTwo;

// instructions screen coin and heart
var instructionsCoin;
var instructionsHeart;

// keep track of lives and coins in the instructions
var instructionsCoins = 0;
var instructionsLives = 5;

// main game tilemap
var tileMapArray;
var tilemap

// shop
var shop;

// tower and projectile images
var cannonImage;
var cannon;
var crossbowImage;
var crossbow;
var crossbowLoadedImage;
var arrowImage;
var arrow;
var teslaImage;
var tesla;

// orb images
var hitOrbImage
var blueOrbImage;
var blueOrb;
var yellowOrbImage;
var yellowOrb;
var orangeOrbImage;
var orangeOrb;
var redOrbImage;
var redOrb;

// array to store coin for the shop
var shopCoins = [];

// costs for diffrent towers
var cannonCost = 40;
var crossbowCost = 60;
var teslaCost = 70;

// keep track of game health and coin 
var gameCoins = 100;
var gameLives = 25;

// difficulty scalars
var coinsScaler = 1;
var livesScaler = 1;
var speedScaler = 1;
var heathScaler = 1;

// game coin and heart
var gameCoin;
var gameHeart;

// tower array to store towers
var towers = [];

// handle building new towers
var buildTower = null;
var building = false;