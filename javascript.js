function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    
    if (number == 0) {
        return "Rock";
    } else if (number == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
} 

function getPlayerChoice() {

    let selection = prompt("Choose: Rock, Paper or Scissors");
    selection.toLowerCase();

    if (selection == "rock") {
        return "Rock";
    } else if (selection == "paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let computer = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();

    if (computer == "rock") {
        if (player == "scissors") {
            console.log("You Lose! Rock beats Scissors");
            return -1;
        } else if (player == "paper") {
            console.log("You Win! Paper beats Rock");
            return 1;
        } else {
            return 0;
        }
    } else if (computer == "paper") {
        if (player == "rock") {
            console.log("You Lose! Paper beats Rock");
            return -1;
        } else if (player == "scissors") {
            console.log("You Win! Scissors beats Paper");
            return 1;
        } else {
            return 0;     
        }
    } else {
        if (player == "rock") {
            console.log("You Win! Rock beats Scissors");
            return 1;
        } else if (player == "paper") {
            console.log("You Lose! Scissors beats Paper");
            return -1;
        } else {
            return 0;
        }
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i<5;) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log("Computer's choice:" + " " + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        
        if (roundResult == -1) {
            computerScore++;
            i++;
            console.log(`Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`);
        } else if (roundResult == 1) {
            playerScore++;
            i++;
            console.log(`Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`);
        } else {
            console.log("Tie! Play again!");
        }
    }  

    if (playerScore > computerScore) {
        console.log(`You win ${playerScore}:${computerScore}!`)
    }    else if (playerScore < computerScore) {
        console.log(`You lose ${computerScore}:${playerScore}!`)
    }
}

game();
