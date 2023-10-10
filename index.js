//I DID NOT FINISHED THIS PROJECT YET, I JUST TOOK A BREAK FROM IT :D

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
    let won;
    if (playerSelection == computerSelection) {
        return "We chose the same options! Let's try again...";
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return "You won! Paper beats rock";
        won = true;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return "You lost! Scissors beats paper";
        won = false;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return "You lost! Paper beats Rock";
        won = false;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return "You won! Rock beats scissors";
        won = true;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You lost! Rock beats scissors";
        won = false;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return "You won! Scissors beats paper";
        won = true;
    } else {
        return "Try again please";
    }
}

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const resultPara = document.querySelector('p');

btnRock.addEventListener('click', () => {
    resultPara.innerHTML = playRound('Rock', getComputerChoice());;
});
btnPaper.addEventListener('click', () => {
    resultPara.innerHTML = playRound('Paper', getComputerChoice());;
});
btnScissors.addEventListener('click', () => {
    resultPara.innerHTML = playRound('Scissors', getComputerChoice());;
});