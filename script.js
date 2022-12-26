
let playerScore = 0;
let compScore = 0;
let tieAmt = 0;

function playRound (playerSelection, computerSelection) {

    console.log(`Player's Choice: ${playerSelection} 
    Computer Choice: ${computerSelection}`)
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            tieAmt++;
            tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        }
        else if (computerSelection === 'paper') {
            compScore++;
            compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        }
        else {
           playerScore++;
           playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        }
        else if (computerSelection === 'paper') {
            tieAmt++;
            tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        }
        else {
            compScore++;
            compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            compScore++;
            compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        }
        else if (computerSelection === 'paper') {
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        }
        else {
            tieAmt++;
            tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        }
    }

    if (playerScore === 5) {
        finalDisplay.textContent = 'You won the game!';
        tieAmt = 0;
        playerScore = 0;
        compScore = 0;
        compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;

    }
    else if (compScore === 5) {
        finalDisplay.textContent = 'You lost the game!';
        tieAmt = 0;
        playerScore = 0;
        compScore = 0;
        compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    }
}

function getComputerChoice () {
    choices = ['rock', 'paper', 'scissors'];
    index = Math.floor(Math.random() * 3);
    return choices[index];
}

function rockChoice() {
    playRound('rock', getComputerChoice());
}
function paperChoice() {
    playRound('paper', getComputerChoice());
}
function scissorsChoice() {
    playRound('scissors', getComputerChoice());
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click', scissorsChoice);

const playerScoreDisplay = document.querySelector('.player');
const compScoreDisplay = document.querySelector('.computer');
const tieAmtDisplay = document.querySelector('.ties');
const finalDisplay = document.querySelector('.final-result')


