function getComputerChoice() {
    let number = Math.random();
    
    if (number <= 0.33) {
        return "Rock";
    } else if (number <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
} 

function getPlayerChoice() {

    let selection = prompt("Choose: Rock, Paper or Scissors");
    selection.toLowerCase;

    if (selection == "rock") {
        return "Rock";
    } else if (selection == "paper") {
        return "Paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let computer = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();

    if (computer == "rock") {
        if (player == "scissors") {
        return "You Lose! Rock beats Scissors";
        } else if (player == "paper") {
            return "You Win! Paper beats Rock";
        } else {
            return "Tie! Play again!";
        }
    } else if (computer == "paper") {
        if (player == "rock") {
            return "You Lose! Paper beats Rock";
        } else if (player == "scissors") {
            return "You Win! Scissors beats Paper";
        } else {
            return "Tie! Play again!";        
        }
    } else {
        if (player == "rock") {
            return "You Win! Rock beats Scissors";
        } else if (player == "paper") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "Tie! Play again!";
        }
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));