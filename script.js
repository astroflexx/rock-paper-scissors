let arr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return arr[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    return window.prompt('Enter your choice');
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Its a tie!`;
    }

    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! You chose ${playerSelection} and computer chose ${computerSelection}`;
    }

    else {
        return `You Lose! You chose ${playerSelection} and computer chose ${computerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
