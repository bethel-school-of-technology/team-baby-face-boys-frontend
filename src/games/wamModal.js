import React, { useEffect, useState } from 'react';
import "./wam.css"


function WAMModal({ closeWAM }) {

    const squares = document.querySelectorAll('.square')
    const mole = document.querySelector('.mole')
    const timeLeft = document.querySelector('#time-left')
    const score = document.querySelector('#score')
    let clock = document.getElementById('clock')

    let result = 0
    let hitPosition
    let currentTime = 60
    let timerID = null


    useEffect(() => {

    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('mole')
        })
        let randomSquare = squares[Math.floor(Math.random() * 9)]
        randomSquare.classList.add('mole')

        hitPosition = randomSquare.id
    }

    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                result++
                score.textContent = result
                hitPosition = null
            }
        })
    })

    function moveMole() {
        timerID = setInterval(randomSquare, 500)
    }

    /* moveMole() */

    clock.addEventListener('click', function () {
        function countDown() {
            currentTime--
            timeLeft.textContent = currentTime

            if (currentTime == 0) {
                clearInterval(countDownTimerId)
                clearInterval(timerID)
                alert('Game Over! Your final score is ' + result + "! Refresh the page to play again!")
            }
        }


        let countDownTimerId = setInterval(countDown, 1000)

    })



    
},[])

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeWAM(false)}>X</button>
                <h1>Whack-A-Mole</h1>

                <h2 className='wam'>Your Score:</h2>
                <h2 className='wam' id="score">0</h2>

                <h2 className='wam'>Time Left:</h2>
                <h2 className='wam' id="time-left">60</h2>

                <button className='wam' class="btn-success" onclick="moveMole()">Start The Mole! [1]</button>
                <button className='wam' id="clock" class="btn-primary">Start The Timer! [2]</button>

                <div class="grid">
                    <div class="square" id="1"></div>
                    <div class="square" id="2"></div>
                    <div class="square" id="3"></div>
                    <div class="square" id="4"></div>
                    <div class="square" id="5"></div>
                    <div class="square" id="6"></div>
                    <div class="square" id="7"></div>
                    <div class="square" id="8"></div>
                    <div class="square" id="9"></div>
                </div>
            </div>
        </div>
    );
};

export default WAMModal;