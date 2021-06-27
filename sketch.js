// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&
var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var Bird1,Bird2,Bird3,Bird4,Birds


var bird;
var pipes = [];

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  bird1 = new Bird1();
  bird2 = new Bird2();
  bird3 = new Bird3();
  pipes.push(new Pipe());
}

function draw() {
  background(255);
  if (playerCount === 4 ) {
    game.update(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }
  if (gameState === 2) {
    console.log("End");
  }
 
 
  
  
  
   
}


function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
