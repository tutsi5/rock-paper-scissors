const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const score = document.querySelector(".score");
const scoreContent = document.createElement("div");
scoreContent.classList.add("scoreContent");


let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", function() {
    console.log("rock");
    let scoreRound = playRound("rock", getComputerChoice());
    if (scoreRound == -1) {
        computerScore++;
        scoreContent.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
    } else if (scoreRound == 1) {
        playerScore++;
        scoreContent.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
    } else {
        scoreContent.textContent = "Tie! " + `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
    }
})

paper.addEventListener("click", function() {
    console.log("paper");
    let scoreRound = playRound("paper", getComputerChoice());
    if (scoreRound == -1) {
        computerScore++;
        scoreContent.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
    } else if (scoreRound == 1) {
        playerScore++;
        scoreContent.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
    } else {
        scoreContent.textContent = "Tie! " + `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
    }
})

scissors.addEventListener("click", function() {
    console.log("scissors");
    let scoreRound = playRound("scissors", getComputerChoice());
    if (scoreRound == -1) {
        computerScore++;
        scoreContent.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
    } else if (scoreRound == 1) {
        playerScore++;
        scoreContent.textContent = `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
    } else {
        scoreContent.textContent = "Tie! " + `Current result:\nComputer: ${computerScore}\nYou: ${playerScore}`;
        score.appendChild(scoreContent);
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