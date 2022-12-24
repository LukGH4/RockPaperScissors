function getComputerChoice () {
    choices = ['rock', 'paper', 'scissors'];
    index = Math.floor(Math.random() * 3);
    return choices[index];
}


function playRound (playerSelection, computerSelection) {

    let result;
    console.log(`Player's Choice: ${playerSelection} 
    Computer Choice: ${computerSelection}`)
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log("It's a tie!");
            return result = 0;
        }
        else if (computerSelection === 'paper') {
            console.log("You Lose");
            return result = 1;
        }
        else {
            console.log("You Win");
            return result = 2;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("You Win");
            return result = 2;
        }
        else if (computerSelection === 'paper') {
            console.log("It's a tie!");
            return result = 0;
        }
        else {
            console.log("You Lose");
            return result = 1;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log("You Lose");
            return result = 1;
        }
        else if (computerSelection === 'paper') {
            console.log("You Win");
            return result = 2;
        }
        else {
            console.log("It's a tie!");
            return result = 0;
        }
    }
}

function game () {
    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++){
        let playerChoice = prompt('What\'s your pick?');
        playerChoice = playerChoice.toLowerCase();
        let computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        if (result === 0){
            ties++;
        }
        else if (result === 1) {
            losses++;
        }
        else {
            wins++;
        }
    }

    if (wins === 0 && losses === 0) {
        console.log('You Tied Every single game, WOW!')
    } 
    else if (wins > losses) {
        console.log("You Won Overall!!!");
    }
    else if (losses > wins){
        console.log("You Lost Overall!!!");
    }
    console.log(`Scores: 
    wins: ${wins}
    losses: ${losses}
    ties: ${ties}`)
}

game()
