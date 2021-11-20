let numberOfPlayerWins;
let numberOfComputerWins;


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

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log(`You lose. You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfComputerWins += 1;
        } else if (computerSelection === 'scissors') {
            console.log(`You win! You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfPlayerWins += 1;
        } else {
            console.log(`It was a tie. You both selected ${playerSelection}.`);
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log(`You lose. You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfComputerWins += 1;
        } else if (computerSelection === 'rock') {
            console.log(`You win! You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfPlayerWins += 1;
        } else {
            console.log(`It was a tie. You both selected ${playerSelection}.`);
        }
    } else {
        if (computerSelection === 'rock') {
            console.log(`You lose. You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfComputerWins += 1;
        } else if (computerSelection === 'paper') {
            console.log(`You win! You selected ${playerSelection} and the computer chose ${computerSelection}.`);
            numberOfPlayerWins += 1;
        } else {
            console.log(`It was a tie. You both selected ${playerSelection}.`);
        }
    }
}

function game(rounds) {
    numberOfPlayerWins = 0;
    numberOfComputerWins = 0;
    for (roundNumber = 0; roundNumber < rounds; roundNumber++) {
        let playerInput = prompt("What is your selection?");
        if (playerInput === null) {
            alert("Canceled");
            break;
        };
        let formattedPlayerInput = playerInput.trim().toLowerCase();
        let computerSelection = computerPlay();
        playRound(formattedPlayerInput, computerSelection);
    }

    let numberOfTies = roundNumber - numberOfComputerWins - numberOfPlayerWins;

    if (numberOfPlayerWins > numberOfComputerWins) {
        alert(`You won overall with a total of ${numberOfPlayerWins} wins, ${numberOfComputerWins} losses, and ${numberOfTies} ties!`);
    } else if (numberOfPlayerWins < numberOfComputerWins) {
        alert(`You lost overall with a total of ${numberOfPlayerWins} wins, ${numberOfComputerWins} losses, and ${numberOfTies} ties.`);
    } else if (roundNumber > 0 && numberOfPlayerWins === numberOfComputerWins) {
        alert(`Wow! You tied, each having won ${numberOfComputerWins} times!`);
    }
}

// function validatePlayerInput() {
//     let playerInput;
    
//     while (playerInput !== 'rock' || playerInput !== 'paper' || playerInput!== 'scissors') {
//     playerInput = prompt("What is your selection?");
//     if (playerInput === null) {
//         alert("Canceled");
//         return;
//     }
//     playerInput = playerInput.trim().toLowerCase();
//     return playerInput;
//     } 
// }