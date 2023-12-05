
const OPTIONS = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;
const scoreDiv = document.querySelector('#score');

function getComputerChoice() {
    return OPTIONS[(Math.floor(Math.random() * OPTIONS.length))];
}


function playRound(playerSelection) {
   
    let computerSelection = getComputerChoice();
    let resultDiv = document.querySelector('#result');

    if (playerSelection == 'ROCK') {
        if (computerSelection == 'ROCK') {
          
            resultDiv.textContent = 'tie';
           
        } else if (computerSelection == 'PAPER'){
           
            resultDiv.textContent = 'You Lose! Paper beats Rock';
            computerScore++;
            updateScore();
        } else {
            
            resultDiv.textContent = 'You Win! Rock beats Scissors';
            playerScore++;
            updateScore();
        }
    }

    if (playerSelection == 'PAPER') {
        if (computerSelection == 'ROCK') {
            
            resultDiv.textContent = 'You Win! Paper beats Rock!';
            playerScore++;
            updateScore();  
        } else if (computerSelection == 'PAPER'){
            resultDiv.textContent = 'tie';
            
            // playRound();
        } else {
            
            resultDiv.textContent = 'You Lose! Scissors beats Paper';
            computerScore++;
            updateScore();  
        }
    }

    if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'ROCK') {
            
            resultDiv.textContent = 'You Lose! Rock beats Scissors';
            computerScore++;    
            updateScore();
        } else if (computerSelection == 'PAPER'){
          
            resultDiv.textContent = 'You Win! Scissors beats Paper';
            playerScore++;
            updateScore();
        } else {
            
            resultDiv.textContent = 'tie';
            
        }
    }
}

function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore === 5) {
        setTimeout(() => {
            alert('Player wins!');
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }, 100);
    } else if (computerScore === 5) {
        setTimeout(() => {
            alert('Computer wins!');
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }, 100);
    }
}

//when buttons are clicked, playRound is called with the corresponding option

const rock = document.querySelector('#rock');

const paper = document.querySelector('#paper');

const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound('ROCK');
    checkWinner();
});
paper.addEventListener('click', () => {
    playRound('PAPER');
    checkWinner();
});
scissors.addEventListener('click', () => {
    playRound('SCISSORS');
    checkWinner();
});

