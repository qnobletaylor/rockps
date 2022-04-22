function computerPlay () {
    let cpuChoice = Math.floor(Math.random()*3);

    if (cpuChoice == 0) {
        cpuChoice = "rock";
    } else if (cpuChoice == 1) {
        cpuChoice = "paper";
    } else if (cpuChoice == 2) {
        cpuChoice = "scissors";
    }

    return cpuChoice;
}


// rock beats scissors, paper beats rock, scissors beat paper

function playRound () {
    let computerSelection = "scissors";
    let playerSelection = "ROck";

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper.";
    } else {
        return "You Lose! Computer wins again!"
    }

}