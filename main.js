
const OPTIONS = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    return OPTIONS[(Math.floor(Math.random() * OPTIONS.length))];
}

// console.log(getComputerChoice());

function playRound(playerSelection) {
    //let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
    let computerSelection = getComputerChoice();
    if (playerSelection == 'ROCK') {
        if (computerSelection == 'ROCK') {
            console.log('tie');
            // playRound();
        } else if (computerSelection == 'PAPER'){
            console.log('You Lose! Paper beats Rock');
            return 0;
        } else {
            console.log('You Win! Rock beats Scissors');
            return 1;
        }
    }

    if (playerSelection == 'PAPER') {
        if (computerSelection == 'ROCK') {
            console.log('You Win! Paper beats Rock!');
            return 1;
        } else if (computerSelection == 'PAPER'){
            console.log('tie');
            // playRound();
        } else {
            console.log('You Lose! Scissors beats Paper');
            return 0;
        }
    }

    if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'ROCK') {
            console.log('You Lose! Rock beats Scissors');
            return 0;
        } else if (computerSelection == 'PAPER'){
            console.log('You Win! Scissors beats Paper');
            return 1;
        } else {
            console.log('tie');
            // playRound();
        }
    }
}
//when buttons are clicked, playRound is called with the corresponding option

const rock = document.querySelector('#rock');

const paper = document.querySelector('#paper');

const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => playRound('ROCK'));
paper.addEventListener('click', () => playRound('PAPER'));
scissors.addEventListener('click',  () => playRound('SCISSORS'));
// function game() {
//     let playerWins = 0;
//     let botWins = 0;

//     for(let i = 0; i < 5; i++) {
//         let result = playRound();

//         if (result == 1) {
//             playerWins++;
//         } else if (result == 0) {
//             botWins++;
//         }

//         if (playerWins >= 3 | botWins >=3) {
//             break;
//         }
//     }

//     if (playerWins > botWins) {
//         console.log("You are the winner!");
//     }else {
//         console.log("You lost!!!");
//     }
// }

// game();