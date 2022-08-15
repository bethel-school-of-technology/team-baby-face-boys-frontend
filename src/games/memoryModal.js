import React, { useEffect, useState } from 'react';
import "./memory.css"

function MemoryModal({ closeMemory }) {


    const cardArray = [
        {
            name: 'fries',
            img: 'gamePictures/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'gamePictures/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'gamePictures/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'gamePictures/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'gamePictures/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'gamePictures/pizza.png'
        },
        {
            name: 'fries',
            img: 'gamePictures/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'gamePictures/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'gamePictures/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'gamePictures/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'gamePictures/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'gamePictures/pizza.png'
        }
    ]
    
    cardArray.sort(() => 0.5 - Math.random())
    
    const gridDisplay = document.querySelector('#gridmemory')
    const resultDisplay = document.querySelector('#resultmemory')
    let cardsChosen = []
    let cardsChosenIds = []
    const cardsWon = []
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'gamePictures/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gridDisplay.append(card)
        }
    }
    
    createBoard()
    
    function checkMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId == optionTwoId) {
            alert('You have clicked the same card!')
            cards[optionOneId].setAttribute('src', 'gamePictures/blank.png')
            cards[optionTwoId].setAttribute('src', 'gamePictures/blank.png')
        }
        if (cardsChosen[0] == cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'gamePictures/white.png')
            cards[optionTwoId].setAttribute('src', 'gamePictures/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'gamePictures/blank.png')
            cards[optionTwoId].setAttribute('src', 'gamePictures/blank.png')
            alert("Sorry, try again!")
        }
        resultDisplay.textContent = cardsWon.length
        cardsChosen = []
        cardsChosenIds = []
    
        if (cardsWon.length == cardArray.length / 2) {
            resultDisplay.innerHTML = "Congratulations! You found them all! Refresh the page to play again!"
        }
    }
    
    function flipCard() {
        const cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        console.log(cardsChosen)
        console.log(cardsChosenIds)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }








    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeMemory(false)}>X</button>
                <h1 className='memory'>Memory Game</h1>
               
                    <div id="gamememory">
                        <div id="gridmemory"></div>
                    </div>
                    <div id="scorememory">
                        <h3 className='memory'>Score: <span id="resultmemory"></span></h3>
                    </div>
            </div>
        </div>
    );
};

export default MemoryModal;