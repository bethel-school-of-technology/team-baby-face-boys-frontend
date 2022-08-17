import React, { useEffect, useState } from 'react';
import "./memory.css"
import fries from './gamePictures/fries.png';
import blank from './gamePictures/blank.png';
import cheeseburger from './gamePictures/cheeseburger.png';
import hotdog from './gamePictures/hotdog.png';
import icecream from './gamePictures/ice-cream.png';
import milkshake from './gamePictures/milkshake.png';
import pizza from './gamePictures/pizza.png';
import white from './gamePictures/white.png';

function MemoryModal({ closeMemory }) {

    useEffect(() => {
        const cardArray = [
            {
                name: 'fries',
                img: fries,
            },
            {
                name: 'cheeseburger',
                img: cheeseburger,
            },
            {
                name: 'hotdog',
                img: hotdog,
            },
            {
                name: 'ice-cream',
                img: icecream,
            },
            {
                name: 'milkshake',
                img: milkshake,
            },
            {
                name: 'pizza',
                img: pizza,
            },
            {
                name: 'fries',
                img: fries,
            },
            {
                name: 'cheeseburger',
                img: cheeseburger,
            },
            {
                name: 'hotdog',
                img: hotdog,
            },
            {
                name: 'ice-cream',
                img: icecream,
            },
            {
                name: 'milkshake',
                img: milkshake,
            },
            {
                name: 'pizza',
                img: pizza,
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
                card.setAttribute('src', blank)
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
                cards[optionOneId].setAttribute('src', blank)
                cards[optionTwoId].setAttribute('src', blank)
            }
            if (cardsChosen[0] == cardsChosen[1]) {
                alert('You found a match!')
                cards[optionOneId].setAttribute('src', white)
                cards[optionTwoId].setAttribute('src', white)
                cards[optionOneId].removeEventListener('click', flipCard)
                cards[optionTwoId].removeEventListener('click', flipCard)
                cardsWon.push(cardsChosen)
            } else {
                cards[optionOneId].setAttribute('src', blank)
                cards[optionTwoId].setAttribute('src', blank)
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
    }, [])

  








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