import React, { useEffect, useState } from "react";
import "./rps.css";

function RPSModal({ closeRPS }) {
  useEffect(() => {
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const userChoiceDisplay = document.getElementById("user-choice");
    const resultDisplay = document.getElementById("resultrps");
    const possibleChoices = document.querySelectorAll("button");
    let userChoice;
    let computerChoice;
    let result;

    possibleChoices.forEach((possibleChoice) =>
      possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
      })
    );

    function generateComputerChoice() {
      const randomNumber = Math.floor(Math.random() * 3) + 1;

      if (randomNumber === 1) {
        computerChoice = "Rock";
      }
      if (randomNumber === 2) {
        computerChoice = "Scissors";
      }
      if (randomNumber === 3) {
        computerChoice = "Paper";
      }
      computerChoiceDisplay.innerHTML = computerChoice;
    }

    function getResult() {
      if (computerChoice === userChoice) {
        result = "It's a Draw!";
      }
      if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You Win!";
      }
      if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "Computer Wins!";
      }
      if (computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You Win!";
      }
      if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "Computer Wins!";
      }
      if (computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You Win!";
      }
      if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "Computer Wins!";
      }
      resultDisplay.innerHTML = result;
    }
  }, []);

  return (
    <div className="modalBackground">
      <div className="rpsContainer">
        <button
          className="rps btn-danger rounded breakout mt-0 float-right"
          onClick={() => closeRPS(false)}
        >
          X
        </button>
        <div className=" mt-4 mb-4 game_titles text-center">
          Rock | Paper | Scissors
          <h2 className="game_subtitles mt-3">
            Computer Choice: <span id="computer-choice"></span>
          </h2>
          <h2 className="game_subtitles">
            Your Choice: <span id="user-choice"></span>
          </h2>
          <h2 className="game_subtitles">
            Result: <span id="resultrps"></span>
          </h2>
        </div>
        <div className="text-center text-larger ">
          <button className="btn-success mr-3 rounded " id="Rock">
            Rock
          </button>
          <button className="btn-success mr-3  rounded " id="Paper">
            Paper
          </button>
          <button className="btn-success mr-3  my-2  rounded " id="Scissors">
            Scissors
          </button>
          
        </div>
        <div className="game_subtitles my-2 text-center">Make your choice!
</div>
      </div>
    </div>
  );
}

export default RPSModal;
