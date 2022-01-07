let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfTies = 0;
let numberOfRounds = 0;
const buttons = document.querySelectorAll('.select-btn');
const instructions = document.querySelector('#instruction-text');
const winCount = document.querySelector('.win-text');
const lossCount = document.querySelector('.loss-text');
const tieCount = document.querySelector('.tie-text');
const resetButton = document.querySelector('#reset-button');
const gameLogTableBody = document.querySelector('tbody');

buttons.forEach(button => {
    button.addEventListener('click', playRound);
});

function computerPlay () {
    let computerValue = Math.floor(Math.random() * 3 + 1);
    switch (computerValue) {
    case 1:
        return 'rock';
    case 2:
        return 'paper';
    default:
        return 'scissors';
    }
}

function capitalizeString(string) {
    return string[0].toUpperCase() + string.substring(1);
}

function updateScoreboard () {
    winCount.textContent = `Wins: ${numberOfWins}`;
    lossCount.textContent = `Losses: ${numberOfLosses}`;
    tieCount.textContent = `Ties: ${numberOfTies}`;
}

function updateGameLog (playerSelect, cpuSelect, result) {
    gameLogTableBody.innerHTML += `<tr><td>${playerSelect}</td><td>${cpuSelect}</td><td>${result}</td></tr>`;
}

resetButton.addEventListener('click', () => {
    numberOfWins = 0;
    numberOfLosses = 0;
    numberOfTies = 0;
    numberOfRounds = 0;
    instructions.textContent = `Welcome! You'll be playing "Rock, Paper, Scissors" against a computer. To begin, select either rock, paper, or scissors. Your running score against the computer will be recorded.`;
    gameLogTableBody.innerHTML = '';
    updateScoreboard();
});

updateScoreboard();


function playRound(playerSelection, computerSelection) {
    playerSelection = this.id;
    computerSelection = computerPlay();
    let roundResult = '';
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            instructions.textContent = `You lose. You selected ${playerSelection} and the computer chose ${computerSelection}.`;
            numberOfLosses += 1;
            roundResult = 'Loss';
        } else if (computerSelection === 'scissors') {
            instructions.textContent = (`You win! You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfWins += 1;
            roundResult = 'Win';
        } else {
            instructions.textContent = (`It was a tie. You both selected ${playerSelection}.`);
            numberOfTies += 1;
            roundResult = 'Tie';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            instructions.textContent = (`You lose. You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfLosses += 1;
            roundResult = 'Loss';
        } else if (computerSelection === 'rock') {
            instructions.textContent = (`You win! You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfWins += 1;
            roundResult = 'Win';
        } else {
            instructions.textContent = (`It was a tie. You both selected ${playerSelection}.`);
            numberOfTies += 1;
            roundResult = 'Tie';
        }
    } else {
        if (computerSelection === 'rock') {
            instructions.textContent = (`You lose. You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfLosses += 1;
            roundResult = 'Loss';
        } else if (computerSelection === 'paper') {
            instructions.textContent = (`You win! You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfWins += 1;
            roundResult = 'Win';
        } else {
            instructions.textContent = (`It was a tie. You both selected ${playerSelection}.`);
            numberOfTies += 1;
            roundResult = 'Tie';
        }
    }
    updateScoreboard();
    updateGameLog(capitalizeString(playerSelection), capitalizeString(computerSelection), roundResult);
}

