let  cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name : "Ravi",
    chips : 150
}


function getRandomNum(){;
    let random = Math.floor(Math.random()*13) + 1;
    if(random > 10){
        return 10;
    }
    else if(random === 1){
        return 11;
    }
    else{
        return random;
    }
}

function startGame(){
    let playerEl = document.getElementById("player-el");
    playerEl.textContent = player.name + ": $" + player.chips;

    isAlive = true;
    cards = [];
    let firstCard = getRandomNum();
    let secondCard = getRandomNum();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "Congrats! You have got a BlackJack....!";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game....!";
        isAlive = false;
    }
    let messEl = document.getElementById("message-el");
    messEl.textContent = message;
    let sumEl = document.getElementById("sum-el");
    sumEl.textContent = "Sum : " + sum; 
    let cardsEl = document.getElementById("card-el");
    cardsEl.textContent = "Cards : " ;
    for (let i=0 ; i<cards.length ; i++){
        cardsEl.textContent += cards[i] + " ";
    }
}

function newCard(){
   if(isAlive == true && hasBlackJack == false){
    let card = getRandomNum();
    sum += card;
    cards.push(card);
    renderGame();
   }
}