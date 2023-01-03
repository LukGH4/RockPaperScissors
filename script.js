
let playerScore = 0;
let compScore = 0;
let tieAmt = 0;

function playRound (playerSelection, computerSelection) {
    

    if (playerSelection === 'rock') {
        playerChoice.innerHTML = `Your Choice <image src='./images/rock.png'
            style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
        if (computerSelection === 'rock') {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/rock.png' 
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.textContent = '=';
            tieAmt++;
            tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        }
        else if (computerSelection === 'paper') {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/paper.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.innerHTML = `<image src='./images/rightpunch.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            compScore++;
            compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        }
        else {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/scissors.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.innerHTML = `<image src='./images/leftpunch.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        }
    }
    else if (playerSelection === 'paper') {
        playerChoice.innerHTML = `Your Choice <image src='./images/paper.png'
            style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
        if (computerSelection === 'rock') {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/rock.png' 
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.innerHTML = `<image src='./images/leftpunch.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        }
        else if (computerSelection === 'paper') {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/paper.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.textContent = '=';
            tieAmt++;
            tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        }
        else {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/scissors.png' 
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.innerHTML = `<image src='./images/rightpunch.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            compScore++;
            compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        }
    }
    else if (playerSelection === 'scissors') {
        playerChoice.innerHTML = `Your Choice <image src='./images/scissors.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
        if (computerSelection === 'rock') {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/rock.png' 
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.innerHTML = `<image src='./images/rightpunch.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            compScore++;
            compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        }
        else if (computerSelection === 'paper') {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/paper.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.innerHTML = `<image src='./images/leftpunch.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        }
        else {
            computerChoice.innerHTML = `Computer's Choice <image src='./images/scissors.png'
                style='width: clamp(20px, 10vw, 150px); height: clamp(15px, 12vw, 120px);'>`;
            winSide.textContent = '=';
            tieAmt++;
            tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        }
    }

    if (playerScore === 5) {
        finalDisplay.textContent = 'Final: You won the game!';
        tieAmt = 0;
        playerScore = 0;
        compScore = 0;
        compScoreDisplay.textContent = `Computer Score: ${compScore}`;
        tieAmtDisplay.textContent = `Ties: ${tieAmt}`;
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;

    }
    else if (compScore === 5) {
        finalDisplay.textContent = 'Final: You lost the game!';
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

const playerChoice = document.querySelector('.player-choice')
const computerChoice = document.querySelector('.computer-choice')
const winSide = document.querySelector('.win-side');

rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click', scissorsChoice);

const playerScoreDisplay = document.querySelector('.player');
const compScoreDisplay = document.querySelector('.computer');
const tieAmtDisplay = document.querySelector('.ties');
const finalDisplay = document.querySelector('.final-result')


