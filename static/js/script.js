// Challenge 1: YOUR AGE IN DAYS
function ageInDays(){
    var birthyear = prompt('what year were you born..Good friend');
    var age_in_days = (2018 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + age_in_days + 'days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


// Challenge 2: GENERATOR CAT
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="data:image/jpeg;base64,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"
    div.appendChild(image);
}


// Challenge 3: ROCK, PAPER, SCISSORS GAME

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
        };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore == 0) {
        return {'message': 'You lost', 'color': 'red'};
    } else if (yourScore == 0.5) {
        return {'message': 'You tied', 'color': 'yellow'};
    } else {
        return {'message': 'You win', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // LET`S REMOVE ALL IMAGES

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //CREATE DIV FOR SEE THE RESULT

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px blue;'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px red;'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4: Change Button Colors
var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = []

for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'green') {
    buttonsGreen();
  } else if (buttonThingy.value === 'reset') {
    buttonColorReset();
  } else if (buttonThingy.value === 'random'){
    randomColors();
  }
}

function buttonsRed(){
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen(){
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  var allButtons = document.getElementsByTagName('button');

  var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (i = 0; i < allButtons.length; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }
}

// Challenge 5: BlACKJACK;

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 6, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
    if (blackjackGame['isStand'] === false){
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }

}

function randomCard(){
   let randomIndex = Math.floor(Math.random()*13);
   return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        console.log(cardImage);
        hitSound.play();
    }
}

function blackjackDeal(){
    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');


        for (i=0; i < yourImages.length; i++) {
           yourImages[i].remove();
        }

        for (i=0; i < dealerImages.length; i++) {
           dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let´s play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackGame['turnsOver'] = false;
    }

}

function updateScore(card, activePlayer){
    if ( card === 'A') {
       if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
           activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }

    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(600);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

// compute winner and return who just won
// update the wins, draws, and losses
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score']) > 21) {
            blackjackGame['wins']++;
            winner = YOU;
        } else if(YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }
    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true){
        if (winner === YOU) {
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = 'YOU WON';
        messageColor = 'green';
        winSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#loses').textContent = blackjackGame['losses'];
            message = 'YOU LOST';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'YOU DREW';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }

}
