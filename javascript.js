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

