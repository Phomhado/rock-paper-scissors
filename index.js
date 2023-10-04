const getComputerChoice = () => {
    const computerOption = Math.floor(Math.random() * 3);
    if (computerOption == 0) {
        return "Rock";
    } else if (computerOption == 1) {
        return "Paper";
    } else if (computerOption == 2) {
        return "Scissors";
    } else {
        return "Try again";
    }
}    

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return "We chose the same options! Let's try again...";
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return "You won! Paper beats rock";
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return "You lost! Scissors beats paper";
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return "You lost! Paper beats Rock";
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return "You won! Rock beats scissors";
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You lost! Rock beats scissors";
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return "You won! Scissors beats paper";
    } else {
        return "Try again please";
    }
}

const game = () => {
    const playerSelection = prompt("Pick your option: ");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    return ' ';
}

console.log(game());
