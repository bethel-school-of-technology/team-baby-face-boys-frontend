import React, { useEffect, useState } from "react";
import "./breakout.css";

function BreakoutModal({ closeBreakout }) {
  const blockWidth = 100;
  const blockHeight = 20;
  const ballDiameter = 20;
  const boardWidth = 560;
  const boardHeight = 300;
  let timerId;
  let xDirection = -2;
  let yDirection = 2;
  let score = 0;

  useEffect(() => {
    const grid = document.getElementById("gridCon");

    const scoreDisplay = document.querySelector("#scorebreak");
    let launch = document.getElementById("launcher");

    const userStart = [230, 10];
    let currentPosition = userStart;
    const ballStart = [270, 40];
    let ballCurrentPosition = ballStart;

    //create Block
    class Block {
      constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
      }
    }

    //all blocks
    const blocks = [
      new Block(10, 270),
      new Block(120, 270),
      new Block(230, 270),
      new Block(340, 270),
      new Block(450, 270),
      new Block(10, 240),
      new Block(120, 240),
      new Block(230, 240),
      new Block(340, 240),
      new Block(450, 240),
      new Block(10, 210),
      new Block(120, 210),
      new Block(230, 210),
      new Block(340, 210),
      new Block(450, 210),
    ];

    //draw my blocks
    function addBlocks() {
      for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left = blocks[i].bottomLeft[0] + "px";
        block.style.bottom = blocks[i].bottomLeft[1] + "px";
        grid.appendChild(block);
      }
    }

    addBlocks();

    //add User
    const user = document.createElement("div");
    user.classList.add("userbreak");
    drawUser();
    grid.appendChild(user);

    //draw User
    function drawUser() {
      user.style.left = currentPosition[0] + "px";
      user.style.bottom = currentPosition[1] + "px";
    }

    function drawBall() {
      ball.style.left = ballCurrentPosition[0] + "px";
      ball.style.bottom = ballCurrentPosition[1] + "px";
    }

    //move user
    function moveUser(e) {
      switch (e.key) {
        case "ArrowLeft":
          if (currentPosition[0] > 0) {
            currentPosition[0] -= 10;
            drawUser();
          }
          break;
        case "ArrowRight":
          if (currentPosition[0] < boardWidth - blockWidth) {
            currentPosition[0] += 10;
            drawUser();
          }
          break;
      }
    }

    document.addEventListener("keydown", moveUser);

    //add ball
    const ball = document.createElement("div");
    ball.classList.add("ball");
    drawBall();
    grid.appendChild(ball);

    //move ball
    launch.addEventListener("click", function() {
      function moveBall() {
        ballCurrentPosition[0] += xDirection;
        ballCurrentPosition[1] += yDirection;
        drawBall();
        checkForCollisions();
      }
      timerId = setInterval(moveBall, 30);
    });

    //check for collisions
    function checkForCollisions() {
      //check for block collisions
      for (let i = 0; i < blocks.length; i++) {
        if (
          ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
          ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
          ballCurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1] &&
            ballCurrentPosition[1] < blocks[i].topLeft[1]
        ) {
          const allBlocks = Array.from(document.querySelectorAll(".block"));
          allBlocks[i].classList.remove("block");
          blocks.splice(i, 1);
          changeDirection();
          score++;
          scoreDisplay.innerHTML = score;

          //check for win
          if (blocks.length === 0) {
            scoreDisplay.innerHTML = "You Win! Refresh the Page to Play Again!";
            clearInterval(timerId);
            document.removeEventListener("keydown", moveUser);
          }
        }
      }

      //check for wall collisions
      if (
        ballCurrentPosition[0] >= boardWidth - ballDiameter ||
        ballCurrentPosition[1] >= boardHeight - ballDiameter ||
        ballCurrentPosition[0] <= 0
      ) {
        changeDirection();
      }

      //check for user collisions
      if (
        ballCurrentPosition[0] > currentPosition[0] &&
        ballCurrentPosition[0] < currentPosition[0] + blockWidth &&
        ballCurrentPosition[1] > currentPosition[1] &&
          ballCurrentPosition[1] < currentPosition[1] + blockHeight
      ) {
        changeDirection();
      }

      //check for game over
      if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId);
        scoreDisplay.innerHTML = "Game Over";
        document.removeEventListener("keydown", moveUser);
      }
    }

    function changeDirection() {
      if (xDirection === 2 && yDirection === 2) {
        yDirection = -2;
        return;
      }
      if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return;
      }
      if (xDirection === -2 && yDirection === -2) {
        yDirection = 2;
        return;
      }
      if (xDirection === -2 && yDirection === 2) {
        xDirection = 2;
        return;
      }
    }
  }, []);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          className="btn-danger rounded breakout mt-0 float-right"
          onClick={() => closeBreakout(false)}
        >
          X
        </button>
        <div className="text-center">
          <div className=" mb-3 game_titles">
          Breakout
            <div id="scorebreak">0</div>
          </div>
          
          <div className="gridbreak rounded" id="gridCon"></div>
          <button className="btn-success rounded mt-5" id="launcher">
            Launch Ball
          </button>
        </div><br></br>
        <div className="game_subtitles text-center">Use the Left & Right Arrow Keys to move the paddle.  Clear out the Blue Bricks to Win!
</div>
        
      </div>
      
    </div>
  );
}

export default BreakoutModal;
