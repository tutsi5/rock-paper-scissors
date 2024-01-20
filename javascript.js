const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const score = document.querySelector(".score");

const playAgain = document.querySelector(".playAgain");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    player.textContent = "You: Rock";
    computer.textContent = "Computer: " + `${computerChoice}`;
    let scoreRound = playRound("rock", computerChoice);
    if (scoreRound == -1) {
        computerScore++;
        score.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    } else if (scoreRound == 1) {
        playerScore++;
        score.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    } else {
        score.textContent = "Tie! " + `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    }

    if (playerScore == 5) {
        score.textContent = "Winner! " + `Final result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        rock.remove();
        paper.remove();
        scissors.remove();
    } else if (computerScore == 5) {
        score.textContent = "Loser! " + `Final result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        rock.remove();
        paper.remove();
        scissors.remove();
    }
})

paper.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    player.textContent = "You: Paper";
    computer.textContent = "Computer: " + `${computerChoice}`;

    let scoreRound = playRound("paper", computerChoice);
    if (scoreRound == -1) {
        computerScore++;
        score.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    } else if (scoreRound == 1) {
        playerScore++;
        score.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    } else {
        score.textContent = "Tie! " + `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    }

    if (playerScore == 5) {
        score.textContent = "Winner! " + `Final result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        rock.remove();
        paper.remove();
        scissors.remove();
    } else if (computerScore == 5) {
        score.textContent = "Loser! " + `Final result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        rock.remove();
        paper.remove();
        scissors.remove();
    }
})

scissors.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    player.textContent = "You: Scissors";
    computer.textContent = "Computer: " + `${computerChoice}`;

    let scoreRound = playRound("scissors", computerChoice);
    if (scoreRound == -1) {
        computerScore++;
        score.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    } else if (scoreRound == 1) {
        playerScore++;
        score.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    } else {
        score.textContent = "Tie! " + `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
    }

    if (playerScore == 5) {
        score.textContent = "Winner! " + `Final result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        rock.remove();
        paper.remove();
        scissors.remove();
    } else if (computerScore == 5) {
        score.textContent = "Loser! " + `Final result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        rock.remove();
        paper.remove();
        scissors.remove();
    }
})

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

function playRound(playerSelection, computerSelection) {

    let computer = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();

    console.log(computer);

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