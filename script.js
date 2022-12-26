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
        }
        else if (computerSelection === 'paper') {
            console.log("You Lose");
        }
        else {
            console.log("You Win");
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("You Win");
        }
        else if (computerSelection === 'paper') {
            console.log("It's a tie!");
        }
        else {
            console.log("You Lose");
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log("You Lose");
        }
        else if (computerSelection === 'paper') {
            console.log("You Win");
        }
        else {
            console.log("It's a tie!");
        }
    }
}


