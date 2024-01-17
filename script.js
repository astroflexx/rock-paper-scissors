let arr = ['rock', 'paper', 'scissors'];

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

function handleRock() {
    playRound('rock', getComputerChoice());
}

function handlePaper() {
    playRound('paper', getComputerChoice());
}

function handleScissors() {
    playRound('scissors', getComputerChoice());
}

rock.addEventListener('click', handleRock);
paper.addEventListener('click', handlePaper);
scissors.addEventListener('click', handleScissors);

let roundResult = document.createElement('p');
document.body.appendChild(roundResult);

let overallResult = document.createElement('h1');
document.body.appendChild(overallResult);

function getComputerChoice() {
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult.textContent = `This round is a draw. You chose ${playerSelection} and computer chose ${computerSelection}.`;
    }
    
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        roundResult.textContent = `You win this round! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    }

    else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        roundResult.textContent = `You lose this round. You chose ${playerSelection} and computer chose ${computerSelection}.`;
    }

    checkWinner();
}

function checkWinner() {
    if (parseInt(playerScore.textContent) === 5) {
        overallResult.textContent = `The game has ended. You Win ${playerScore.textContent} to ${computerScore.textContent}! Refresh the page to play again.`;
        end();
    }

    else if (parseInt(computerScore.textContent) === 5) {
        overallResult.textContent = `The game has ended. You Lose ${playerScore.textContent} to ${computerScore.textContent}. Refresh the page to play again.`;
        end();
    }
}

function end() {
    rock.removeEventListener('click', handleRock);
    paper.removeEventListener('click', handlePaper);
    scissors.removeEventListener('click', handleScissors);
} 