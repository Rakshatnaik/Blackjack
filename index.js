
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "Rakk",
    chip: 250
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum += firstCard + secondCard
    renderGame()
}


function renderGame() {

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive && !hasBlackJack) {
        console.log("Drawing a new card from the deck!")
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }

}

