var player = {
  x: 400,
  y: 570,
};

var playerSpeed = 8;

var invaders = [];
var invader;
var invadersNum = 5;


function setup() {
  createCanvas(800, 600);
  smooth();
  background(0);
  //invader = new Invader(20, 200)
  for (var i = 0; i < invadersNum; i++){
    invaders[i] = new Invader((i * 80) + 20, 40);
  }
}

function draw() {
  background(0);
  createPlayer();
  //invader.show();
  //invader.move();
  for (var i = 0; i < invaders.length; i++){
    invaders[i].show();
    invaders[i].move();
  }

}

function Invader(x, y){
  this.x = x;
  this.y = y;
  this.xdir = 1;

  this.move = function(){
    this.x = this.x + this.xdir;

    if (invaders[invaders.length - 1].x + 60 > width){
      console.log("return");
      this.xdir = -1;
      this.y = this.y + 30;
    } else if (invaders[0].x === 0) {
      this.xdir = 1;
      this.y = this.y + 30;
    }
  }

  this.show = function(){
    fill(255);
    rect(this.x, this.y, 60, 30);
    //console.log("show");
  }
}

function createPlayer(){
  fill(255);
  triangle(player.x, player.y, player.x - 25, player.y + 20, player.x + 25, player.y + 20);
  if (keyIsDown(LEFT_ARROW) === true) {
    if( player.x > 25){
      player.x = player.x - playerSpeed;
      //console.log("LEFT");
    }

  } else if (keyIsDown(RIGHT_ARROW) === true) {
    if(player.x + 20 < width - 5){
      player.x = player.x + playerSpeed;
      //console.log("RIGHT");
    }
  }
}
