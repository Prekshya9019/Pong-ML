"use strict";

let socket;
let startPredicting = false;
let times = 0;
let y = 0;
let imageTrained = document.getElementById('imgTrained');
let emojis =["🙂", "😎", "😛", "✌", "✋", "☝", "👌", "🖕", "👉", "🤘", "👍", "👋", "🖖"]


var gameStart = false;
var paddleL = {
  x: 20,
  y: 400,
  w: 25,
  h: 120,
};
var paddleR = {
  x: 760,
  y: 100,
  w: 25,
  h: 120,
};
var ball = {
  x: 50,
  y: 20,
  diam: 25,
  speedX: 5,
  speedY: 5,
};
var speedX = 4;
var speedY = 4;
var paddleSpeed = 8;
// var s = "Welcome to Infinte Pong! Player one controlls their paddle with the a and z keys. Player two controls their paddle with the /? key and the '\" key. Press the space bar to begin";


let lU = 0;
let lD = 0;
let rU = 0;
let rD = 0;

socket = io.connect(); // Listen for sockets

socket.on('position_from_server', positionServer);

function positionServer(data){
  // console.log(data);
  if (data == "✌") {
    lU = 1;
  } else {
    lU = 0;
  }

  if (data == "✋") {
    lD = 1;
  } else {
    lD = 0;
  }

  if (data == "☝") {
    rU = 1;
  } else {
    rU = 0;
  }

  if (data == "👌") {
    rD = 1;
  } else {
    rD = 0;
  }

  if (data == "😛") {
    location.reload();
  }

}


console.log(socket);
/*function down(x){
 x = x + 5;
}*/


function setup() {
  createCanvas(800, 600);
  smooth();
  //background(0);
  //fill(255)
  //text(s, 10, 10, 70, 80);
}

function draw() {

  //if (keyPressed(32) === true) {
  gameStart === true;
  //}

    background(245, 224, 24);
    noStroke();

  createLeftPaddle();
  createRightPaddle();
  createBall();
  ballBounceTopAndBottom();
  ballBounceRight();
  ballBounceLeft();



}
  function createBall() {
    //Create ball
    fill(0, 0, 0);
    ellipse(ball.x, ball.y, ball.diam, ball.diam);

    ball.x = ball.x + speedX;
    ball.y = ball.y + speedY;
  }



  function createLeftPaddle() {
    //Create the left paddle
    fill(0, 0, 0);
    rect(paddleL.x, paddleL.y, paddleL.w, paddleL.h);
    //Control the left paddle
    if (lU === 1) {
      if (paddleL.y + paddleL.h < height - 5) {
        paddleL.y = paddleL.y + paddleSpeed;
      }
    }
    if (lD === 1) {
      if (paddleL.y > 5) {
        paddleL.y = paddleL.y - paddleSpeed;
      }
    }
  }

  function createRightPaddle() {
    //Create the right paddle
    fill(0, 0, 0);
    rect(paddleR.x, paddleR.y, paddleR.w, paddleR.h);
    //Control the right paddle

    if (rU === 1) { //move paddle down
      if (paddleR.y + paddleR.h < height - 5) {
        paddleR.y = paddleR.y + paddleSpeed;
      }
    }
    if (rD === 1) { //move paddle up
      if (paddleR.y > 5) {
        paddleR.y = paddleR.y - paddleSpeed;
      }
    }

  }

  function ballBounceTopAndBottom() {

    //If if the ball hits the top or bottom of the court it bounces
    if (ball.y + 12.5 > height || ball.y < 12.5 && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1; //reverse the direction of the motion
      ball.y = ball.y + speedY; //keeps things moving
    }

  }
function ballBounceRight() {
    //if the x of the edge ball is more than the x of the right paddle and
    //the y of the ball is greater than the y of the rectangle and
    //less than the y of the rectangle plus the height
    if (ball.x + 12.5 > paddleR.x && ball.y + 12.5 > paddleR.y && ball.y + 12.5 < paddleR.y + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedX = speedX * -1; //This reverses the direction, I think
      ball.x = ball.x + speedX; //This keeps the ball moving
    }
    //if the edge of the ball is lower than rect y and
    //the x of the ball is greater than the x of the rect and less than the width
    else if (ball.y + 12.5 > paddleR.y && ball.y < paddleR.y + paddleR.y + paddleR.h && ball.x + 12.5 > paddleR.x && ball.x < paddleR.x + paddleR.x && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1; //reverse the direction of the motion
      ball.y = ball.y + speedY; //keeps things moving
    }

    //if the edge of the ball is higher than rect y plus height and
    //the x of the ball is greater than the x of the rect and less than the width
    else if (ball.y + 12.5 < paddleR.y + paddleR.h && ball.y > paddleR.y && ball.x > paddleR.x && ball.x < paddleR.x + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1; //reverse the direction of the motion
      ball.y = ball.y + speedY; //keeps things moving
    }
  }

function ballBounceLeft() {
    //if the ball hits the left wall
    /* if (ball.x < 0) {
       speedX = speedX * -1; //This reverses the direction, I think
       ball.x = ball.x + speedX; //This keeps the ball moving
       print("pow");*/

    //if the ball hits the front of the left paddle
    if (ball.x - 12.5 < paddleL.x + paddleL.w && ball.y + 12.5 > paddleL.y && ball.y + 12.5 < paddleL.y + paddleL.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedX = speedX * -1; //This reverses the direction, I think
      ball.x = ball.x + speedX; //This keeps the ball moving
      print("pow");
    }
  }
