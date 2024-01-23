const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start = document.querySelector(".startBtn");
const roundResult = document.querySelector(".result");
const again = document.querySelector(".againBtn");

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const score = document.querySelector(".score");

let playerScore = 0;
let computerScore = 0;

start.addEventListener("click", function() {
    rock.style.display = "block";
    paper.style.display = "block";
    scissors.style.display = "block";

    start.style.display = "none";
})

function updateScore(scoreRound) {

    roundResult.style.display = "block";
    player.style.display = "block";
    computer.style.display = "block";
    score.style.display = "block";

    if (scoreRound == -1) {
        computerScore++;
        roundResult.textContent = "Defeat!"
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    } else if (scoreRound == 1) {
        playerScore++;
        roundResult.textContent = "Win!"
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    } else {
        roundResult.textContent = "Tie!"
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    }
}

function checkIfEnd() {
    if (playerScore == 5) {
        score.textContent = "Winner! " + `Final result: ${playerScore} : ${computerScore}`;
        hideElements();
        again.style.display = "block";
    } else if (computerScore == 5) {
        score.textContent = "Loser! " + `Final result: ${playerScore} : ${computerScore}`;
        hideElements();
        again.style.display = "block";
    }
}

function hideElements() {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
}

rock.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    player.textContent = "You: Rock";
    computer.textContent = "Computer: " + `${computerChoice}`;

    let scoreRound = playRound("rock", computerChoice);
    updateScore(scoreRound);
    checkIfEnd();
})

paper.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    player.textContent = "You: Paper";
    computer.textContent = "Computer: " + `${computerChoice}`;

    let scoreRound = playRound("paper", computerChoice);
    updateScore(scoreRound);
    checkIfEnd();
})

scissors.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    player.textContent = "You: Scissors";
    computer.textContent = "Computer: " + `${computerChoice}`;

    let scoreRound = playRound("scissors", computerChoice);
    updateScore(scoreRound);
    checkIfEnd();
})

again.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;

    rock.style.display = "block";
    paper.style.display = "block";
    scissors.style.display = "block";

    roundResult.style.display = "none";
    player.style.display = "none";
    computer.style.display = "none";
    score.style.display = "none";
    again.style.display = "none";
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

    if (computer == "rock") {
        if (player == "scissors") {
            return -1;
        } else if (player == "paper") {
            return 1;
        } else {
            return 0;
        }
    } else if (computer == "paper") {
        if (player == "rock") {
            return -1;
        } else if (player == "scissors") {
            return 1;
        } else {
            return 0;     
        }
    } else {
        if (player == "rock") {
            return 1;
        } else if (player == "paper") {
            return -1;
        } else {
            return 0;
        }
    }
}